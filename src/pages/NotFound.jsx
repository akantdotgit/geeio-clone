import { Link } from 'react-router-dom';
import { Navbar, Footer } from '../components/layout';
import { CtaBanner } from '../components/sections';
import { Button } from '../components/ui';
import cactusSvg from '../assets/icons/6a68d41e6d973307d3127999_404.svg';

/**
 * NotFound — 404 Page Not Found
 *
 * Faithfully built from export/404.html with local assets and AGENTS.md design tokens.
 * Features:
 *  - Official 404 botanical cactus illustration
 *  - Negative-tracked Plus Jakarta Sans display typography
 *  - Geeio dark pill Button primitive routing back to Home
 *  - Full signature CTA banner and directory footer
 */
export default function NotFound() {
  return (
    <div className="min-h-screen bg-canvas font-heading flex flex-col justify-between selection:bg-accent-1 selection:text-accent">
      {/* ── Navigation Header ────────────────────────────────────────── */}
      <Navbar activePage="" />

      {/* ── 404 Hero Section ─────────────────────────────────────────── */}
      <main className="w-full flex-1 flex flex-col items-center justify-center px-4 py-12 md:py-20 text-center">
        <div className="w-full max-w-[1200px] mx-auto flex flex-col items-center justify-center">
          {/* 404 Cactus Illustration */}
          <div className="w-full max-w-[500px] mx-auto flex items-center justify-center transition-transform duration-500 hover:scale-[1.02]">
            <img
              src={cactusSvg}
              alt="404 Cactus Illustration"
              className="w-full h-auto object-contain max-h-[300px] sm:max-h-[360px]"
              loading="eager"
            />
          </div>

          {/* Heading & Subtext */}
          <div className="max-w-xl mx-auto flex flex-col items-center mt-6 sm:mt-8">
            <h1 className="font-heading text-3xl sm:text-4xl md:text-[44px] font-medium tracking-[-1.5px] md:tracking-[-2px] leading-tight text-primary">
              Uh-oh! something went wrong
            </h1>
            <p className="font-heading text-base sm:text-lg text-body mt-3 mb-8 max-w-md leading-relaxed">
              We can’t find the page you’re looking for
            </p>
            <Button as={Link} to="/" variant="primary">
              Back To Home Page
            </Button>
          </div>
        </div>
      </main>

      {/* ── Dark CTA Banner & Footer ─────────────────────────────────── */}
      <div className="w-full">
        <CtaBanner />
        <Footer />
      </div>
    </div>
  );
}
