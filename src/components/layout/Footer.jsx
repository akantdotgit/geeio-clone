import brandIconSvg from '../../assets/icons/6a64d9bf2d2279d5e3a43461_Icon.svg';
import qrCodeScanSvg from '../../assets/icons/6a64d9bf017eec0969201883_QR Code Scan.svg';
import { Button } from '../ui';
import {
  FOOTER_SECTIONS,
  BOTTOM_LINKS,
  FOOTER_COPYRIGHT,
} from '../../data/footerData';

/**
 * Footer — Geeio brand dark footer with CTA hero panel
 *
 * Implements:
 *   - Dark card panel (#0E160F / `primary`) with negative-tracked display heading
 *   - Brand decorative squares (surface-alt + accent)
 *   - "Book Your Appointment" CTA pill using `Button` (variant="white")
 *   - Desktop: 4-column layout (Product, Our services, Resources, QR Download)
 *   - Mobile (≤768px): Always open link sections
 *   - Interactive QR Code app download card
 *   - Bottom bar with copyright and legal links
 *   - Full keyboard accessibility and focus rings (#3B79C3)
 */
export default function Footer({ className = '' }) {
  return (
    <footer
      className={`w-full bg-canvas px-2.5 pb-2.5 ${className}`}
    >
      <div className="bg-primary rounded-b-3xl p-8 sm:px-16 sm:pt-16 sm:pb-8 md:px-10 md:pt-10 lg:px-25 lg:pt-25 lg:pb-8 text-canvas max-w-[1500px] mx-auto overflow-hidden relative">
        {/* ── Top CTA Banner ────────────────────────────────────────── */}
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto mt-10 sm:mt-12">
          {/* Decorative Brand Icon */}
          <div className="mb-6 flex items-center justify-center" aria-hidden="true">
            <img
              src={brandIconSvg}
              alt=""
              className="w-[34px] h-[34px] object-contain"
            />
          </div>

          {/* Heading with negative letter-tracking */}
          <h2 className="font-heading text-3xl sm:text-[40px] lg:text-5xl font-medium text-canvas tracking-[-1px] sm:tracking-[-2px] leading-tight mb-3.5 sm:mb-4">
            Start taking care of your plant
          </h2>

          <p className="font-heading text-[15px] sm:text-base text-neutral-2 max-w-xl mx-auto mb-6 sm:mb-8">
            Upload a photo for AI to identify your plant and suggest care.
          </p>

          <Button variant="white" as="a" href="#appointment">
            Book Your Appointment
          </Button>
        </div>

        {/* ── Divider ───────────────────────────────────────────────── */}
        <div className="w-full border-t border-canvas/10 my-10 sm:mt-18 lg:mt-35 sm:mb-20" />

        {/* ── Desktop Links Grid (≥768px / md:grid) ─────────────────── */}
        <div className="hidden md:grid md:grid-cols-4 lg:grid-cols-4 gap-10 items-start mx-0 mb-12 sm:mb-16">
          {FOOTER_SECTIONS.map((section) => (
            <div key={section.id} className="text-left">
              <h4 className="font-ui text-xs sm:text-base font-medium text-canvas/60 mb-5">
                {section.title}
              </h4>
              <div className="flex flex-col space-y-2.5 font-ui text-sm sm:text-[16px] font-medium">
                {section.links.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="text-surface hover:underline hover:underline-offset-6 hover:decoration-1 hover:decoration-surface duration-300 ease-linear transition-all focus-ring rounded-md select-none w-fit"
                  >
                    {link.label}
                  </a>
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
        <div className="md:hidden flex flex-col gap-8 mb-10">
          {FOOTER_SECTIONS.map((section) => (
            <div key={section.id} className="text-left">
              <h4 className="font-ui text-sm font-medium text-canvas/60 mb-3.5 uppercase tracking-wider">
                {section.title}
              </h4>
              <div className="flex flex-col space-y-2.5 font-ui text-sm font-medium">
                {section.links.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="text-surface hover:underline hover:underline-offset-6 hover:decoration-1 hover:decoration-surface duration-300 ease-linear transition-all focus-ring rounded-md select-none w-fit"
                  >
                    {link.label}
                  </a>
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
          <p className="text-center sm:text-left">
            {FOOTER_COPYRIGHT}
          </p>

          <div className="flex flex-wrap items-center sm:justify-start gap-3">
            {BOTTOM_LINKS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-neutral-2 hover:text-canvas transition-colors duration-200 focus-ring rounded-md"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

