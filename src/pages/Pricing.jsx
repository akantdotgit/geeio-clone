import { Navbar, Footer } from '../components/layout';
import { PricingHero, Faq, CtaBanner } from '../components/sections';
import { PRICING_FAQS, PRICING_FAQ_TITLE } from '../data/pricingData';

/**
 * Pricing — Full Pricing Page
 *
 * Implements:
 * - In-flow Geeio brand Navbar with activePage="Pricing"
 * - Editorial Display Heading with negative tracking ("Upgrade when you’re hooked")
 * - Interactive SwitchToggle ("Monthly" / "Yearly")
 * - 2-tier pricing cards grid (Free & Premium) data-driven from src/data/pricingData.js
 *   with all shadows and borders removed from all boxes
 * - Reassurance guarantees row ("Start free — No card needed", "30-Day money-back guarantee")
 * - FAQ section using the exact same section component and layout as the Home page (<Faq />),
 *   with content mapped dynamically from PRICING_FAQS and PRICING_FAQ_TITLE in src/data/pricingData.js
 * - Dark CTA banner ("Start taking care of your plant", "Book Your Appointment")
 * - Directory footer with download QR code and legal links
 */
export default function Pricing() {
  const faqTitle = PRICING_FAQ_TITLE.includes('\n') ? (
    <>
      {PRICING_FAQ_TITLE.split('\n')[0]}
      <br />
      {PRICING_FAQ_TITLE.split('\n')[1]}
    </>
  ) : (
    PRICING_FAQ_TITLE
  );

  return (
    <div className="min-h-screen bg-canvas font-heading flex flex-col justify-between selection:bg-accent-1 selection:text-accent">
      <Navbar activePage="Pricing" />
      <main className="w-full flex-grow">
        <div className="w-full max-w-5xl mx-auto flex flex-col items-center pt-16 sm:pt-20 pb-12 sm:pb-16 px-3 sm:px-6">
          <PricingHero />
        </div>
        <Faq title={faqTitle} items={PRICING_FAQS} />
      </main>
      <CtaBanner />
      <Footer />
    </div>
  );
}
