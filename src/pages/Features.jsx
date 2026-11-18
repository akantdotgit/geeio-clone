import { Navbar, Footer } from '../components/layout';
import {
  FeaturesHero,
  FeaturesThrive,
  FeaturesHappier,
  Faq,
  CtaBanner,
} from '../components/sections';

/**
 * Features — Geeio Features Page
 *
 * Implements:
 *   - Geeio Navbar with active state on Features
 *   - Features Hero with mobile app showcase & flat floating plant diagnosis card
 *   - "Everything your plants need to thrive" section with growth chart & care reminders
 *   - "A happier plant life, all in one place" grid with AI diagnosis capabilities & dark highlight card
 *   - FAQ Accordion section identical to the Home page
 *   - Geeio dark CTA banner
 *   - Geeio Footer
 */
export default function Features() {
  return (
    <div className="min-h-screen bg-canvas font-heading selection:bg-accent-1 selection:text-accent overflow-x-hidden">
      {/* ── Hero Container with Soft Sage Botanical Gradient ─────────── */}
      <div className="bg-linear-to-b from-[#f2f6ed] to-surface-alt mt-3 mx-3 rounded-xl md:rounded-2xl lg:rounded-[20px] overflow-hidden">
        {/* Navigation Header */}
        <Navbar activePage="Features" />

        {/* Features Hero Section */}
        <FeaturesHero />
      </div>

      {/* ── Main Content Container ───────────────────────────────────── */}
      <main className="w-full items-center mx-auto bg-white overflow-x-hidden">
        {/* Plant Thrive Section */}
        <FeaturesThrive />

        {/* Happier Plant Life Features */}
        <FeaturesHappier />

        {/* FAQ Section — Identical to Home page */}
        <Faq />
      </main>

      {/* ── Dark CTA Banner ──────────────────────────────────────────── */}
      <CtaBanner />

      {/* ── Site Footer ──────────────────────────────────────────────── */}
      <Footer />
    </div>
  );
}
