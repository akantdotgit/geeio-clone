import { useState, useEffect, useRef } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logoSvg from '../../assets/icons/6a61a211f53956969ade8967_c99c33b003e1b4f5fc1184dd44d3ddd3_logo.svg';
import { Button, Dropdown, MegaMenuPanel } from '../ui';

/**
 * Navbar — Geeio non-floating in-flow pill navigation header
 *
 * Implements:
 *   - Static/in-flow pill header (non-floating) with subtle border
 *   - Official Geeio SVG logo
 *   - Desktop navigation (>= 1024px / lg):
 *       • 4 inline links: Home, Features, Pricing, Contact (Inter 14px/500)
 *       • Pages hover dropdown with full 3-column MegaMenuPanel
 *       • Compact Download CTA button (`primary-sm` variant)
 *   - Responsive Mobile collapse (<= 768px / max-lg):
 *       • Collapses to animated 2-line menu toggle
 *       • Smooth mobile navigation drawer with expandable Pages accordion
 *       • Full-width Download CTA
 *   - Accessibility: focus-ring on interactive elements, Escape to close, click outside
 */

const NAV_LINKS = [
  { label: 'Home', to: '/' },
  { label: 'Features', to: '/features' },
  { label: 'Pricing', to: '/pricing' },
  { label: 'Contact', to: '/contact' },
];

const MOBILE_PAGES = [
  { label: 'Home', to: '/' },
  { label: 'About Us', to: '/about' },
  { label: 'Features', to: '/features' },
  { label: 'Blog', to: '/blog' },
  { label: 'Downloads', to: '/downloads' },
  { label: 'Support', to: '/contact' },
  { label: 'Pricing', to: '/pricing' },
  { label: 'Privacy Policy', to: '/privacy' },
  { label: 'Terms & Condition', to: '/terms' },
  { label: 'Changelog', to: '/changelog' },
  { label: 'License', to: '/license' },
  { label: '404 Error', to: '/404' },
];

export default function Navbar({
  activePage = 'Home',
  className = '',
}) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobilePagesOpen, setMobilePagesOpen] = useState(false);
  const headerRef = useRef(null);

  // Close mobile menu on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setMobileOpen(false);
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Close mobile menu on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (headerRef.current && !headerRef.current.contains(e.target)) {
        setMobileOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <header
      ref={headerRef}
      className={[
        'relative z-[950]',
        'px-4 sm:px-6 pt-4 sm:pt-6',
        'flex flex-col items-center pointer-events-none',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
    >
      {/* ── Main pill container ────────────────────────────────────── */}
      <div className="pointer-events-auto bg-canvas rounded-full px-5 sm:pl-4 sm:pr-2.75 py-2.5 flex items-center justify-between gap-4 md:gap-8 lg:gap-10 border border-neutral-2/40 w-full max-w-[680px]">
        {/* Brand Logo */}
        <div className="flex items-center">
          <Link
            to="/"
            aria-label="Geeio Home"
            className="flex items-center focus-ring rounded-md select-none"
          >
            <img
              src={logoSvg}
              alt="Geeio Logo"
              className="h-full w-auto object-fill"
            />
          </Link>
        </div>

        {/* Desktop Navigation Links (>=1024px / lg) */}
        <nav
          aria-label="Primary Navigation"
          className="hidden lg:flex items-center gap-4.5"
        >
          {NAV_LINKS.map(({ label, to }) => (
            <NavLink
              key={label}
              to={to}
              end={to === '/'}
              className={({ isActive }) => [
                'inline-flex items-center font-ui text-sm font-medium capitalize leading-5 transition-colors duration-200 focus-ring rounded-md px-1.5 py-1 select-none',
                isActive
                  ? 'text-accent'
                  : 'text-neutral-1 hover:text-accent',
              ].join(' ')}
            >
              {label}
            </NavLink>
          ))}

          {/* Pages Mega Menu Dropdown */}
          <Dropdown
            label="Pages"
            triggerClass="px-1.5 py-1"
            panel={
              <MegaMenuPanel
                activePage={activePage}
                onSelect={() => setMobileOpen(false)}
              />
            }
            panelWidth="w-[820px] max-w-[90vw]"
            align="center"
          />
        </nav>

        {/* Desktop Download CTA Button (>=1024px / lg) */}
        <div className="hidden lg:flex items-center gap-2">
          <Button variant="primary-sm" as={Link} to="/downloads">
            Download
          </Button>
        </div>

        {/* Mobile Menu Toggle Button (<= 768px / lg:hidden) */}
        <button
          type="button"
          aria-label="Toggle navigation menu"
          aria-expanded={mobileOpen}
          aria-controls="mobile-nav-drawer"
          onClick={() => setMobileOpen((prev) => !prev)}
          className="lg:hidden flex flex-col justify-center items-center w-8 h-8 rounded-full hover:bg-surface text-neutral-1 transition-colors focus-ring cursor-pointer gap-1.5 p-1 select-none"
        >
          <span
            className={[
              'w-5 h-[2px] bg-neutral-1 rounded-full block transition-transform duration-200',
              mobileOpen ? 'translate-y-[4px] rotate-45' : '',
            ].join(' ')}
          />
          <span
            className={[
              'w-5 h-[2px] bg-neutral-1 rounded-full block transition-transform duration-200',
              mobileOpen ? '-translate-y-[4px] -rotate-45' : '',
            ].join(' ')}
          />
        </button>
      </div>

      {/* ── Mobile Navigation Drawer (<= 768px / lg:hidden) ───────────── */}
      {mobileOpen && (
        <div
          id="mobile-nav-drawer"
          role="dialog"
          aria-label="Mobile Navigation"
          className="absolute top-full pointer-events-auto mt-3 w-[93%] max-w-[680px] bg-canvas rounded-3xl py-6 px-5 shadow-card animate-[fadeSlideDown_0.2s_ease-out] lg:hidden flex flex-col gap-4 text-left"
        >
          {/* Main Links */}
          <div className="flex flex-col gap-2">
            {NAV_LINKS.map(({ label, to }) => (
              <NavLink
                key={label}
                to={to}
                end={to === '/'}
                onClick={() => setMobileOpen(false)}
                className={({ isActive }) => [
                  'font-ui font-medium text-sm px-3 transition-colors',
                  isActive
                    ? ' text-accent'
                    : 'text-neutral-1 hover:text-accent',
                ].join(' ')}
              >
                {label}
              </NavLink>
            ))}

            {/* Mobile Pages Accordion */}
            <div className="flex flex-col">
              <button
                type="button"
                onClick={() => setMobilePagesOpen((prev) => !prev)}
                className="flex items-center justify-between font-ui text-sm px-3 text-neutral-1 font-medium cursor-pointer text-left focus-ring active:text-accent transition-colors"
              >
                <span>Pages</span>
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  aria-hidden="true"
                  className={`shrink-0 transition-transform duration-200 ${
                    mobilePagesOpen ? 'rotate-180 text-accent' : 'text-neutral-1'
                  }`}
                >
                  <path
                    d="M3 5l4 4 4-4"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>

              {mobilePagesOpen && (
                <div className="pl-4 pr-2 py-2 flex flex-col gap-1.5 ml-3 mt-4 animate-[fadeSlideDown_0.15s_ease-out]">
                  {MOBILE_PAGES.map((page) => (
                    <Link
                      key={page.to}
                      to={page.to}
                      onClick={() => setMobileOpen(false)}
                      className="font-heading text-sm text-body hover:text-accent py-1 px-2 rounded-lg transition-colors"
                    >
                      {page.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Divider */}
          <div className="h-[1px] bg-neutral-2/40 w-full my-1" />

          {/* Mobile Download CTA */}
          <div className="w-full">
            <Button
              variant="primary-sm"
              as={Link}
              to="/downloads"
              onClick={() => setMobileOpen(false)}
              className="w-full text-center justify-center py-3"
            >
              Download Geeio For Free
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
