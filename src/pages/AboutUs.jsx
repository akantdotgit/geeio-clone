import { Navbar, Footer } from '../components/layout';
import {
  AboutHero,
  AboutMission,
  AboutPillars,
  Team,
  CtaBanner,
} from '../components/sections';

/**
 * AboutUs — Full Geeio About Us Page
 *
 * Implements:
 * - Geeio Navbar with activePage="About Us"
 * - Section 1: Hero & Video Collaboration Banner ("Our Story")
 * - Section 2: Mission narrative, dual editorial images & quantitative metrics bento
 * - Section 3: Core AI plant care pillars with botanical SVG icons
 * - Section 4: Leadership & Team infinite marquee ticker
 * - Dark CTA banner ("Start taking care of your plant")
 * - Site Footer with QR download directory
 * - Strictly borderless and shadowless with depth via color blocking per AGENTS.md
 */
export default function AboutUs() {
  return (
    <div className="min-h-screen bg-canvas font-heading selection:bg-accent-1 selection:text-accent flex flex-col justify-between overflow-x-hidden">
      {/* Navigation Header */}
      <Navbar activePage="About Us" />

      {/* Main Content Area */}
      <main className="w-full flex-grow flex flex-col items-center">
        {/* Section 1: Hero & Video Banner */}
        <AboutHero />

        {/* Section 2: Mission & Metrics */}
        <AboutMission />

        {/* Section 3: Core AI Plant Care Pillars */}
        <AboutPillars />

        {/* Section 4: Leadership & Team Ticker */}
        <Team />
      </main>

      {/* Dark CTA Banner */}
      <CtaBanner />

      {/* Site Footer */}
      <Footer />
    </div>
  );
}
