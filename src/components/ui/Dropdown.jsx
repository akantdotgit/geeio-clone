import { useState, useRef, useEffect, useId } from 'react';
import { Link } from 'react-router-dom';
import phoneImage from '../../assets/images/mega-menu-phone.webp';
import appStoreBadge from '../../assets/icons/6a68d04ba22c118a34b3ec7f_app-store-button.svg';
import googlePlayBadge from '../../assets/icons/6a68d04197b3a915c804b38e_google-play-button.svg';

/**
 * DropdownItem — Standard item for simple list dropdowns
 */
export function DropdownItem({
  href,
  onClick,
  children,
  className = '',
  ...props
}) {
  const Tag = href ? 'a' : 'button';
  return (
    <Tag
      href={href}
      onClick={onClick}
      type={href ? undefined : 'button'}
      role="menuitem"
      className={[
        'flex w-full items-center gap-2',
        'px-4 py-2.5',
        'font-ui text-sm text-body text-left',
        'hover:text-accent hover:bg-surface',
        'transition-colors duration-150',
        'focus-ring rounded-md',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
      {...props}
    >
      {children}
    </Tag>
  );
}

/**
 * MegaMenuPanel — Rich 3-column mega menu panel
 *
 * Column 1: Main pages (Home in accent green, rest in dark neutral with accent hover)
 * Column 2: More pages
 * Column 3: Promo card with phone preview, "Download Geeio for free", App Store & Play Store badges
 */
export function MegaMenuPanel({
  activePage = 'Home',
  onSelect,
}) {
  const mainPages = [
    { label: 'Home', to: '/' },
    { label: 'About Us', to: '/about' },
    { label: 'Features', to: '/features' },
    { label: 'Blog', to: '/blog' },
    { label: 'Downloads', to: '/downloads' },
    { label: 'Support', to: '/contact' },
    { label: 'Pricing', to: '/pricing' },
  ];

  const morePages = [
    { label: 'Pricing', to: '/pricing' },
    { label: 'Privacy Policy', to: '/privacy' },
    { label: 'Terms & Condition', to: '/terms' },
    { label: 'Changelog', to: '/changelog' },
    { label: 'License', to: '/license' },
    { label: '404 Error', to: '/404' },
  ];

  return (
    <div className="p-5 sm:px-8 sm:pt-6 sm:pb-5 grid grid-cols-1 md:grid-cols-[170px_200px_1fr] gap-8 lg:gap-10 items-start">
      {/* Column 1: Main pages */}
      <div>
        <h3 className="font-heading font-bold text-base text-primary mb-6">
          Main pages
        </h3>
        <ul className="flex flex-col gap-3.5">
          {mainPages.map((page) => {
            const isActive = activePage === page.label;
            return (
              <li key={page.label}>
                <Link
                  to={page.to}
                  role="menuitem"
                  onClick={() => onSelect?.(page.label)}
                  className={[
                    'font-heading text-[15px] block transition-colors duration-150',
                    'focus-ring rounded-md',
                    isActive
                      ? 'text-accent font-medium'
                      : 'text-body font-medium hover:text-accent',
                  ].join(' ')}
                >
                  {page.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>

      {/* Column 2: More pages */}
      <div>
        <h3 className="font-heading font-bold text-base text-primary mb-6">
          More pages
        </h3>
        <ul className="flex flex-col gap-3.5">
          {morePages.map((page, idx) => {
            const isActive = activePage === page.label && activePage !== 'Pricing';
            return (
              <li key={`${page.label}-${idx}`}>
                <Link
                  to={page.to}
                  role="menuitem"
                  onClick={() => onSelect?.(page.label)}
                  className={[
                    'font-heading text-[15px] block transition-colors duration-150',
                    'focus-ring rounded-md',
                    isActive
                      ? 'text-accent font-medium'
                      : 'text-body font-medium hover:text-accent',
                  ].join(' ')}
                >
                  {page.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>

      {/* Column 3: Promo Card with Phone and Store Badges */}
      <div className="bg-surface rounded-3xl p-6 flex flex-col items-center justify-between">
        {/* Phone Mockup Screen */}
        <div className="w-[240px] flex justify-center">
          <img
            src={phoneImage}
            alt="Geeio App preview"
            className="w-full h-auto object-contain"
          />
        </div>

        {/* Heading */}
        <p className="font-heading font-medium text-lg text-primary text-center mt-5 mb-4">
          Download Geeio for free
        </p>

        {/* App Store & Google Play Badges */}
        <div className="flex items-center gap-2.5 justify-center w-full">
          <a
            href="#"
            className="inline-block transition-opacity duration-200 hover:opacity-85 focus-ring rounded-xl"
            aria-label="Download on the App Store"
          >
            <img
              src={appStoreBadge}
              alt="Download on the App Store"
              className="h-[40px] w-auto"
            />
          </a>
          <a
            href="#"
            className="inline-block transition-opacity duration-200 hover:opacity-85 focus-ring rounded-xl"
            aria-label="Get it on Google Play"
          >
            <img
              src={googlePlayBadge}
              alt="Get it on Google Play"
              className="h-[40px] w-auto"
            />
          </a>
        </div>
      </div>
    </div>
  );
}

/**
 * Dropdown — Geeio UI primitive with hover and click support
 *
 * On hover:
 *   - The trigger text and SVG chevron transition to `text-accent` (#317039)
 *   - The chevron rotates 180deg clockwise to point up
 *   - The menu panel smoothly opens
 */
export default function Dropdown({
  label,
  panel,
  panelWidth = 'w-48',
  align = 'left',
  triggerClass = '',
  className = '',
  hover = true,
  children,
}) {
  const [open, setOpen] = useState(false);
  const wrapperRef = useRef(null);
  const closeTimerRef = useRef(null);
  const panelId = useId();

  const handleMouseEnter = () => {
    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }
    if (hover) {
      setOpen(true);
    }
  };

  const handleMouseLeave = () => {
    if (hover) {
      closeTimerRef.current = setTimeout(() => {
        setOpen(false);
      }, 150);
    }
  };

  const toggle = () => setOpen((v) => !v);
  const close = () => {
    if (closeTimerRef.current) clearTimeout(closeTimerRef.current);
    setOpen(false);
  };

  /* Close on outside click */
  useEffect(() => {
    const handler = (e) => {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target)) close();
    };
    document.addEventListener('mousedown', handler);
    return () => {
      document.removeEventListener('mousedown', handler);
      if (closeTimerRef.current) clearTimeout(closeTimerRef.current);
    };
  }, []);

  /* Close on Escape */
  useEffect(() => {
    const handler = (e) => { if (e.key === 'Escape') close(); };
    document.addEventListener('keydown', handler);
    return () => document.removeEventListener('keydown', handler);
  }, []);

  /* Panel horizontal alignment */
  const alignClass =
    align === 'right'
      ? 'right-0'
      : align === 'center'
      ? '-left-26 -translate-x-1/2'
      : 'left-0';

  return (
    <div
      ref={wrapperRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`relative inline-block ${className}`}
    >
      {/* ── Trigger ── */}
      <button
        type="button"
        aria-expanded={open}
        aria-haspopup="true"
        aria-controls={panelId}
        onClick={toggle}
        className={[
          'group inline-flex items-center gap-1.5',
          'font-ui text-sm font-medium capitalize',
          open ? 'text-accent' : 'text-neutral-1 hover:text-accent',
          'transition-colors duration-200',
          'focus-ring rounded-md',
          'cursor-pointer select-none',
          triggerClass,
        ]
          .filter(Boolean)
          .join(' ')}
      >
        <span>{label}</span>
        {/* Chevron: rotates 180deg clockwise and turns accent on hover/open */}
        <svg
          width="14"
          height="14"
          viewBox="0 0 14 14"
          fill="none"
          aria-hidden="true"
          className={`shrink-0 transition-all duration-200 ${
            open ? 'rotate-180 text-accent' : 'text-neutral-1 group-hover:text-accent group-hover:rotate-180'
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

      {/* ── Panel ── */}
      {open && (
        <div
          id={panelId}
          role="menu"
          aria-label={label}
          onClick={(e) => {
            /* Auto-close when a menu item is clicked */
            if (
              e.target.closest('[role="menuitem"]') ||
              e.target.closest('a')
            ) {
              close();
            }
          }}
          className={[
            'absolute top-full mt-4.25 z-[11]',
            alignClass,
            panelWidth,
            /* Surface */
            'bg-canvas rounded-[20px]',
            'border-0 shadow-none',
            'overflow-hidden',
            /* Entrance animation */
            'animate-[fadeSlideDown_0.15s_ease-out]',
          ]
            .filter(Boolean)
            .join(' ')}
        >
          {panel ?? (
            /* Simple list mode */
            <div role="none" className="py-2">
              {children}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
