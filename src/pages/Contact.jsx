import { Navbar, Footer } from '../components/layout';
import { ContactSection, CtaBanner } from '../components/sections';

/**
 * Contact — Geeio Contact & Support Page
 *
 * Implements:
 *   - Geeio Navbar with active state on Contact
 *   - Contact hero section with botanical accent, negative-tracked heading, and data-driven methods list
 *   - Flat, borderless, and shadowless contact form container with reusable Input and Button primitives
 *   - Dark CTA banner matching the Geeio brand design
 *   - Comprehensive Geeio footer
 */
export default function Contact() {
  return (
    <div className="min-h-screen bg-canvas font-heading flex flex-col justify-between selection:bg-accent-1 selection:text-accent overflow-x-hidden">
      {/* Navigation Header */}
      <Navbar activePage="Contact" />

      {/* Main Content Area */}
      <main className="flex-grow flex items-center justify-center px-4 sm:px-6 md:px-8 lg:px-12 py-10 sm:py-14 md:py-20">
        <ContactSection />
      </main>

      {/* Dark CTA Banner */}
      <CtaBanner />

      {/* Site Footer */}
      <Footer />
    </div>
  );
}
