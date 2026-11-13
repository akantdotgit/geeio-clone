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
      { label: 'Features', to: '/features' },
      { label: 'Pricing', to: '/pricing' },
      { label: 'Support', to: '/contact' },
    ],
  },
  {
    id: 'services',
    title: 'Our services',
    links: [
      { label: 'About', to: '/about' },
      { label: 'Contact', to: '/contact' },
      { label: 'Terms', to: '/terms' },
    ],
  },
  {
    id: 'resources',
    title: 'Resources',
    links: [
      { label: 'Plant Care Guide', to: '/blog' },
      { label: 'Blog', to: '/blog' },
      { label: 'License', to: '/license' },
    ],
  },
];

export const BOTTOM_LINKS = [
  { label: 'Privacy policy', to: '/privacy' },
  { label: 'Terms of service', to: '/terms' },
];

export const FOOTER_COPYRIGHT =
  '©Geeio - 2026, Designed By Templateflow Powered By Webflow';
