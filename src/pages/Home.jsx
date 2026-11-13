import { Link } from 'react-router-dom';
import { Navbar, Footer } from '../components/layout';
import {
  HeroCardTicker,
  FeaturedIn,
  Pricing,
  Team,
  Faq,
  Blog,
  CtaBanner,
} from '../components/sections';
import { Button } from '../components/ui';

export default function Home() {
  return (
    <div className="min-h-screen bg-canvas font-heading selection:bg-accent-1 selection:text-accent">
      {/* ── Navigation Header ────────────────────────────────────────── */}
      <Navbar activePage="Home" />

      {/* ── Hero Section ─────────────────────────────────────────────── */}
      <section className="relative pt-10 sm:pt-14 md:pt-16 pb-0 flex flex-col items-center text-center overflow-hidden w-full bg-canvas">
        {/* Review Trust Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-surface shadow-xs mb-5 sm:mb-6 border border-neutral-2/40">
          <div className="flex items-center gap-1 text-[#FDB022]">
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                className="w-3.5 h-3.5 fill-current"
                viewBox="0 0 20 20"
                aria-hidden="true"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          <span className="font-ui text-xs font-medium text-body">
            Rated 4.9/5 from 900+ Reviews
          </span>
        </div>

        {/* Display Heading */}
        <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-[64px] font-medium tracking-[-2px] lg:tracking-[-2.5px] leading-[1.12] text-primary max-w-4xl mx-auto px-4 mb-4 sm:mb-6">
          AI that helps <br className="hidden sm:inline" />
          your plants thrive
        </h1>

        {/* Subtitle */}
        <p className="font-heading text-base sm:text-lg md:text-xl text-body text-center max-w-xl mx-auto leading-relaxed mb-8 px-4">
          Geeio identifies the species, spots problems in the leaves, and builds
          a care plan tailored around that exact plant.
        </p>

        {/* Hero CTA Button */}
        <div className="flex items-center justify-center mb-8 relative z-20">
          <Button as={Link} to="/downloads" variant="primary">
            Download Geeio For Free
          </Button>
        </div>

        {/* Hero Card Ticker Behind Center Smartphone */}
        <HeroCardTicker />
      </section>

      {/* ── Brand Logo Ticker (Featured In) ──────────────────────────── */}
      <FeaturedIn />

      {/* ── Pricing Section ──────────────────────────────────────────── */}
      <Pricing />

      {/* ── Leadership & Team Section ────────────────────────────────── */}
      <Team />

      {/* ── FAQ Section ──────────────────────────────────────────────── */}
      <Faq />

      {/* ── Blog Editorial Section ───────────────────────────────────── */}
      <Blog />

      {/* ── Dark CTA Banner ──────────────────────────────────────────── */}
      <CtaBanner />

      {/* ── Site Footer ──────────────────────────────────────────────── */}
      <Footer />
    </div>
  );
}
