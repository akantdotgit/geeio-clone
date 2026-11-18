import { Link } from 'react-router-dom';
import { Navbar, Footer } from '../components/layout';
import {
  HeroCardTicker,
  FeaturedIn,
  FeaturePointOnce,
  FeatureHealthyCare,
  FeatureAccordion,
  CapabilitiesGrid,
  Pricing,
  Testimonials,
  HowItWorks,
  Faq,
  CtaBanner,
} from '../components/sections';
import { Button } from '../components/ui';
import ratingStarSvg from '../assets/icons/6a64f2356c56029a5984a5f6_rating.svg';

export default function Home() {
  return (
    <div className="min-h-screen bg-canvas font-heading selection:bg-accent-1 selection:text-accent overflow-x-hidden">
      {/* ── Hero Container with Soft Sage Botanical Gradient ─────────── */}
      <div className="bg-linear-to-b from-[#f2f6ed] to-surface-alt mt-3 mx-3 rounded-xl md:rounded-2xl lg:rounded-[20px] overflow-hidden">
        {/* Navigation Header */}
        <Navbar activePage="Home" />

        {/* Hero Section Content */}
        <section className="relative pt-15 md:pt-20 lg:pt-23 pb-0 flex flex-col items-center text-center overflow-hidden w-full">
          {/* Review Trust Badge */}
          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-2xl md:rounded-[40px] bg-[#e4eede] mb-6 select-none max-w-[90%]">
            <div className="flex items-center gap-0.5 text-accent shrink-0">
              {[...Array(5)].map((_, i) => (
                <img
                  key={i}
                  src={ratingStarSvg}
                  alt="Star"
                  className="w-auto h-auto object-cover"
                />
              ))}
            </div>
            <span className="font-ui text-[14px] font-medium text-accent truncate">
              Rated 4.9/5 from 900+ Reviews
            </span>
          </div>

          {/* Display Heading with Negative Tracking */}
          <h1 className="font-heading text-[40px] md:text-[56px] lg:text-[64px] font-medium tracking-[-2px] lg:tracking-[-2.5px] text-primary text-center leading-[1.12] max-w-4xl mx-auto mb-6 px-4">
            AI that helps<br />your plants thrive
          </h1>

          {/* Subtext */}
          <p className="font-ui text-[15px] md:text-lg text-body text-center max-w-xl mx-auto leading-6.5 mb-6 px-4">
            Geeio identifies the species, spots problems in the leaves,<br className="hidden sm:inline" /> and builds a care plan built around that exact plant
          </p>

          {/* CTA Button */}
          <div className="flex items-center justify-center mb-8 lg:mb-18 relative z-30 px-4">
            <Button as={Link} to="/downloads" variant="primary">
              Download Geeio For Free
            </Button>
          </div>

          {/* Hero Card Ticker Behind Center Smartphone */}
          <HeroCardTicker />
        </section>
      </div>

      {/* ── Main Content Container ───────────────────────────────────── */}
      <main className="w-full items-center mx-auto bg-white overflow-x-hidden">
        {/* BRAND LOGO TICKER (Left-to-Right) */}
        <FeaturedIn trackClassName="animate-marquee-ltr" />

        {/* FEATURE SECTION 1: POINT ONCE */}
        <FeaturePointOnce />

        {/* FEATURE SECTION 2: HEALTHY CARE */}
        <FeatureHealthyCare />

        {/* FEATURE SECTION 3: ACCORDION COMPANION */}
        <FeatureAccordion />

        {/* CAPABILITIES / GRID SECTION (sm:grid-cols-2) */}
        <CapabilitiesGrid />

        {/* TESTIMONIALS SECTION */}
        <Testimonials />

        {/* HOW IT WORKS (3 SIMPLE STEPS) */}
        <HowItWorks />

        {/* PRICING SECTION */}
        <Pricing />

        {/* FAQ SECTION */}
        <Faq />
      </main>

      {/* ── Dark CTA Banner ──────────────────────────────────────────── */}
      <CtaBanner />

      {/* ── Site Footer ──────────────────────────────────────────────── */}
      <Footer />
    </div>
  );
}
