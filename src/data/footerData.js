/**
 * Footer data — Structured links and metadata for Geeio Footer
 *
 * Stored in src/data/ per AGENTS.md conventions:
 * "Repeated markup (cards, features, testimonials) must render from arrays in src/data/."
 */

export const FOOTER_SECTIONS = [
  {
    id: 'product',
    title: 'Product',
    links: [
      { label: 'Features', href: '#features' },
      { label: 'Pricing', href: '#pricing' },
      { label: 'Support', href: '#support' },
    ],
  },
  {
    id: 'services',
    title: 'Our services',
    links: [
      { label: 'About', href: '#about' },
      { label: 'Contact', href: '#contact' },
      { label: 'Terms', href: '#terms' },
    ],
  },
  {
    id: 'resources',
    title: 'Resources',
    links: [
      { label: 'Plant Care Guide', href: '#guide' },
      { label: 'Blog', href: '#blog' },
      { label: 'License', href: '#license' },
    ],
  },
];

export const BOTTOM_LINKS = [
  { label: 'Privacy policy', href: '#privacy' },
  { label: 'Terms of service', href: '#terms' },
];

export const FOOTER_COPYRIGHT =
  '©Geeio - 2026, Designed By Templateflow Powered By Webflow';

