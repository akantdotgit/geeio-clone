/**
 * Geeio Asset Downloader
 * Scrapes https://geeio.webflow.io/ and all linked pages,
 * then downloads images → src/assets/images/
 *                  icons (SVGs) → src/assets/icons/
 *                  videos → src/assets/video/
 */

import https from 'https';
import http from 'http';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');

const DIRS = {
  images: path.join(ROOT, 'src', 'assets', 'images'),
  icons:  path.join(ROOT, 'src', 'assets', 'icons'),
  video:  path.join(ROOT, 'src', 'assets', 'video'),
};

const BASE_URL = 'https://geeio.webflow.io';

// Ensure dirs exist
Object.values(DIRS).forEach(d => fs.mkdirSync(d, { recursive: true }));

// ── helpers ────────────────────────────────────────────────────────────────

function fetch(url) {
  return new Promise((resolve, reject) => {
    const mod = url.startsWith('https') ? https : http;
    const req = mod.get(url, { headers: { 'User-Agent': 'Mozilla/5.0 (compatible; asset-scraper/1.0)' } }, res => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        return fetch(res.headers.location).then(resolve).catch(reject);
      }
      let data = '';
      res.on('data', c => (data += c));
      res.on('end', () => resolve({ status: res.statusCode, body: data, headers: res.headers }));
    });
    req.on('error', reject);
    req.setTimeout(15000, () => { req.destroy(); reject(new Error('timeout: ' + url)); });
  });
}

function download(url, dest) {
  return new Promise((resolve, reject) => {
    // skip if already downloaded
    if (fs.existsSync(dest)) { console.log(`  [skip] ${path.basename(dest)}`); return resolve(); }

    const mod = url.startsWith('https') ? https : http;
    const req = mod.get(url, { headers: { 'User-Agent': 'Mozilla/5.0 (compatible; asset-scraper/1.0)' } }, res => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        return download(res.headers.location, dest).then(resolve).catch(reject);
      }
      if (res.statusCode !== 200) {
        res.resume();
        return reject(new Error(`HTTP ${res.statusCode} → ${url}`));
      }
      const file = fs.createWriteStream(dest);
      res.pipe(file);
      file.on('finish', () => file.close(resolve));
      file.on('error', reject);
    });
    req.on('error', reject);
    req.setTimeout(30000, () => { req.destroy(); reject(new Error('timeout: ' + url)); });
  });
}

function sanitizeFilename(name) {
  // strip query strings, decode URI, replace unsafe chars
  try { name = decodeURIComponent(name); } catch {}
  return name.replace(/[?#&=]/g, '_').replace(/[<>:"/\\|*]/g, '_').slice(0, 200);
}

function uniqueDest(dir, basename) {
  let dest = path.join(dir, basename);
  if (!fs.existsSync(dest)) return dest;
  const ext  = path.extname(basename);
  const stem = path.basename(basename, ext);
  let i = 1;
  while (fs.existsSync(dest)) { dest = path.join(dir, `${stem}_${i++}${ext}`); }
  return dest;
}

function classifyUrl(url) {
  const lower = url.toLowerCase().split('?')[0];
  if (/\.(mp4|webm|ogg|mov|avi|mkv)$/i.test(lower)) return 'video';
  if (/\.svg$/i.test(lower))                          return 'icons';
  if (/\.(png|jpe?g|gif|webp|avif|ico|bmp|tiff?)$/i.test(lower)) return 'images';
  return null;
}

function resolveUrl(href, base) {
  try {
    if (!href || href.startsWith('data:') || href.startsWith('javascript:') || href.startsWith('mailto:')) return null;
    return new URL(href, base).href.split('#')[0];
  } catch { return null; }
}

// ── extraction helpers ──────────────────────────────────────────────────────

function extractAssetUrls(html, pageUrl) {
  const urls = new Set();

  // <img src / srcset
  for (const m of html.matchAll(/\bsrc(?:set)?\s*=\s*["']([^"']+)["']/gi)) {
    // srcset may contain multiple entries
    m[1].split(',').forEach(entry => {
      const u = resolveUrl(entry.trim().split(/\s+/)[0], pageUrl);
      if (u) urls.add(u);
    });
  }

  // data-src / data-srcset (lazy load)
  for (const m of html.matchAll(/\bdata-src(?:set)?\s*=\s*["']([^"']+)["']/gi)) {
    m[1].split(',').forEach(entry => {
      const u = resolveUrl(entry.trim().split(/\s+/)[0], pageUrl);
      if (u) urls.add(u);
    });
  }

  // CSS url(...)
  for (const m of html.matchAll(/url\(\s*["']?([^)"'\s]+)["']?\s*\)/gi)) {
    const u = resolveUrl(m[1], pageUrl);
    if (u) urls.add(u);
  }

  // <source src / srcset
  for (const m of html.matchAll(/<source[^>]+>/gi)) {
    for (const a of m[0].matchAll(/(?:src|srcset)\s*=\s*["']([^"']+)["']/gi)) {
      a[1].split(',').forEach(entry => {
        const u = resolveUrl(entry.trim().split(/\s+/)[0], pageUrl);
        if (u) urls.add(u);
      });
    }
  }

  // <video src
  for (const m of html.matchAll(/<video[^>]+>/gi)) {
    for (const a of m[0].matchAll(/src\s*=\s*["']([^"']+)["']/gi)) {
      const u = resolveUrl(a[1], pageUrl);
      if (u) urls.add(u);
    }
  }

  // <link rel="icon" / apple-touch-icon / image_src
  for (const m of html.matchAll(/<link[^>]+>/gi)) {
    if (/rel\s*=\s*["'][^"']*(icon|image)[^"']*["']/i.test(m[0])) {
      const href = m[0].match(/href\s*=\s*["']([^"']+)["']/i);
      if (href) { const u = resolveUrl(href[1], pageUrl); if (u) urls.add(u); }
    }
  }

  // Webflow CDN direct references
  for (const m of html.matchAll(/https:\/\/cdn\.prod\.website-files\.com[^\s"'<>)]+/g)) {
    const u = m[0].split(/["'\s<>)]/)[0];
    if (u) urls.add(u);
  }
  for (const m of html.matchAll(/https:\/\/uploads-ssl\.webflow\.com[^\s"'<>)]+/g)) {
    const u = m[0].split(/["'\s<>)]/)[0];
    if (u) urls.add(u);
  }

  return [...urls].filter(u => classifyUrl(u) !== null);
}

function extractInternalLinks(html, pageUrl) {
  const links = new Set();
  for (const m of html.matchAll(/href\s*=\s*["']([^"']+)["']/gi)) {
    try {
      const u = new URL(m[1], pageUrl);
      if (u.hostname === new URL(BASE_URL).hostname) {
        links.add(u.origin + u.pathname);
      }
    } catch {}
  }
  return [...links];
}

// ── main ───────────────────────────────────────────────────────────────────

async function main() {
  const visitedPages  = new Set();
  const downloadedUrls = new Set();
  const queue = [BASE_URL];
  let totalDownloaded = 0;
  let totalFailed     = 0;

  console.log('🌿 Geeio Asset Downloader starting…\n');

  while (queue.length) {
    const pageUrl = queue.shift();
    if (visitedPages.has(pageUrl)) continue;
    visitedPages.add(pageUrl);

    console.log(`📄 Crawling: ${pageUrl}`);
    let html;
    try {
      const res = await fetch(pageUrl);
      if (res.status !== 200) { console.log(`   ⚠ HTTP ${res.status} — skipped`); continue; }
      html = res.body;
    } catch (e) { console.log(`   ✗ ${e.message}`); continue; }

    // Queue internal links (only same-domain pages, not assets)
    const links = extractInternalLinks(html, pageUrl);
    for (const link of links) {
      if (!visitedPages.has(link)) queue.push(link);
    }

    // Extract & download assets
    const assetUrls = extractAssetUrls(html, pageUrl);
    console.log(`   Found ${assetUrls.length} asset(s) on this page.`);

    for (const url of assetUrls) {
      if (downloadedUrls.has(url)) continue;
      downloadedUrls.add(url);

      const category = classifyUrl(url);
      if (!category) continue;

      const rawName  = path.basename(url.split('?')[0]) || 'asset';
      const basename = sanitizeFilename(rawName);
      // Ensure extension present
      const ext = path.extname(basename);
      const finalName = ext ? basename : basename + (category === 'video' ? '.mp4' : category === 'icons' ? '.svg' : '.png');
      const dest = uniqueDest(DIRS[category], finalName);

      process.stdout.write(`  ↓ [${category}] ${finalName} … `);
      try {
        await download(url, dest);
        console.log('✓');
        totalDownloaded++;
      } catch (e) {
        console.log(`✗ (${e.message})`);
        totalFailed++;
      }
    }
  }

  console.log('\n──────────────────────────────────────────');
  console.log(`✅ Done!  Downloaded: ${totalDownloaded}  |  Failed/Skipped: ${totalFailed}`);
  console.log(`📁 images → ${DIRS.images}`);
  console.log(`📁 icons  → ${DIRS.icons}`);
  console.log(`📁 video  → ${DIRS.video}`);
}

main().catch(err => { console.error(err); process.exit(1); });
