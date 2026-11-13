import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import qrCodeScanSvg from '../../assets/icons/6a64d9bf017eec0969201883_QR Code Scan.svg';
import {
  FOOTER_SECTIONS,
  BOTTOM_LINKS,
  FOOTER_COPYRIGHT,
} from '../../data/footerData';

/**
 * Footer — Geeio brand dark footer directory & links section
 *
 * Implements:
 *   - Dark panel (#0E160F / `primary`) with bottom corners rounded (`rounded-b-3xl`)
 *   - Desktop: 4-column layout (Product, Our services, Resources, QR Download)
 *   - Mobile (≤768px): Stacked link sections and QR download card
 *   - Bottom bar with copyright and legal links
 *   - Staggered fade reveal animation on the main panel div
 *   - Full keyboard accessibility and focus rings (#3B79C3)
 */
export default function Footer({ className = '' }) {
  const [isVisible, setIsVisible] = useState(
    () => typeof IntersectionObserver === 'undefined'
  );
  const containerRef = useRef(null);

  // Trigger smooth fade reveal when scrolled into view
  useEffect(() => {
    if (typeof IntersectionObserver === 'undefined') {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
    );

    const el = containerRef.current;
    if (el) {
      observer.observe(el);
    }

    return () => {
      if (el) {
        observer.unobserve(el);
      }
      observer.disconnect();
    };
  }, []);

  return (
    <footer
      ref={containerRef}
      className={`w-full bg-canvas px-3 pb-3 ${className}`}
    >
      {/* The div next to the footer element — Staggered fade reveal */}
      <div
        className="bg-primary p-8 sm:px-16 sm:pt-14 sm:pb-8 md:px-10 md:pt-14 md:pb-8 lg:px-25 lg:pt-16 lg:pb-8 text-canvas max-w-[1500px] mx-auto rounded-b-3xl border-t border-canvas/10 overflow-hidden relative"
      >
        {/* ── Desktop Links Grid (≥768px / md:grid) ─────────────────── */}
        <div className={`hidden md:grid md:grid-cols-4 lg:grid-cols-4 gap-10 items-start mx-0 mb-12 sm:mb-16 transition-all duration-700 delay-200 ease-[cubic-bezier(0.16,1,0.3,1)] ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {FOOTER_SECTIONS.map((section) => (
            <div key={section.id} className="text-left">
              <h4 className="font-ui text-xs sm:text-base font-medium text-canvas/60 mb-5">
                {section.title}
              </h4>
              <div className="flex flex-col space-y-2.5 font-ui text-sm sm:text-[16px] font-medium">
                {section.links.map((link) => (
                  <Link
                    key={link.label}
                    to={link.to || link.href}
                    className="text-surface hover:underline hover:underline-offset-6 hover:decoration-1 hover:decoration-surface duration-300 ease-linear transition-all focus-ring rounded-md select-none w-fit"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          ))}

          {/* Column 4: QR Code App Download */}
          <div className="flex flex-col items-center">
            <div className="flex flex-col items-center gap-3">
              <div className="bg-canvas p-1.75 rounded-lg outline-1 outline-canvas/30 outline-offset-6 select-none">
                <img
                  src={qrCodeScanSvg}
                  alt="QR Code Scan to download Geeio app"
                  className="w-15 h-15 object-fill"
                />
              </div>
              <span className="font-ui text-xs sm:text-sm text-surface font-medium text-center">
                Download app
              </span>
            </div>
          </div>
        </div>

        {/* ── Mobile Links Sections (≤768px / md:hidden) ───────────── */}
        <div className={`md:hidden flex flex-col gap-8 mb-10 transition-all duration-700 delay-200 ease-[cubic-bezier(0.16,1,0.3,1)] ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {FOOTER_SECTIONS.map((section) => (
            <div key={section.id} className="text-left">
              <h4 className="font-ui text-sm font-medium text-canvas/60 mb-3.5 uppercase tracking-wider">
                {section.title}
              </h4>
              <div className="flex flex-col space-y-2.5 font-ui text-sm font-medium">
                {section.links.map((link) => (
                  <Link
                    key={link.label}
                    to={link.to || link.href}
                    className="text-surface hover:underline hover:underline-offset-6 hover:decoration-1 hover:decoration-surface duration-300 ease-linear transition-all focus-ring rounded-md select-none w-fit"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          ))}

          {/* Mobile QR Code App Download */}
          <div className="pt-2 flex flex-col items-center gap-3">
            <div className="bg-canvas p-1.75 rounded-lg outline-1 outline-canvas/30 outline-offset-6 select-none">
              <img
                src={qrCodeScanSvg}
                alt="QR Code Scan to download Geeio app"
                className="w-15 h-15 object-fill"
              />
            </div>
            <span className="font-ui text-xs sm:text-sm text-surface font-medium text-center">
              Download app
            </span>
          </div>
        </div>

        {/* ── Bottom Bar ────────────────────────────────────────────── */}
        <div className="border-t border-canvas/10 pt-3 sm:pt-5 flex flex-col sm:flex-row items-center justify-between font-ui text-sm text-neutral-2 gap-4">
          <p className={`text-center sm:text-left transition-all duration-700 delay-200 ease-[cubic-bezier(0.16,1,0.3,1)] ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            {FOOTER_COPYRIGHT}
          </p>

          <div className={`flex flex-wrap items-center sm:justify-start gap-3 transition-all duration-700 delay-200 ease-[cubic-bezier(0.16,1,0.3,1)] ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            {BOTTOM_LINKS.map((item) => (
              <Link
                key={item.label}
                to={item.to || item.href}
                className="text-neutral-2 hover:text-canvas transition-colors duration-200 focus-ring rounded-md"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
