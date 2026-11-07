/**
 * src/data/testimonialsData.js
 * Testimonials, ratings, and customer proof data
 *
 * Source: export/home.html and export/features.html
 */

export const HERO_SOCIAL_PROOF = {
  rating: '4.9/5',
  reviewsCount: '900+ reviews',
  stars: 5,
};

export const BENTO_STATS = [
  {
    id: 'plants-identified',
    stat: '2M+',
    label: 'Plants identified & diagnosed',
    theme: 'surface-alt', // #E4EFD3
  },
  {
    id: 'active-growers',
    stat: '98%',
    label: 'Active plants growers',
    theme: 'primary', // #0E160F / #111A14
  },
];

export const TESTIMONIALS = [
  {
    id: 'daniel-k',
    featured: true,
    quote: 'Finally, an app that knows the difference between my pothos and my snake plant.',
    author: 'Daniel K.',
    source: 'Review from Dapps store',
    hasVideo: true,
    imageAlt: 'Plant lover Daniel K. gardening outdoors',
  },
  {
    id: 'maya-r',
    quote: 'My fiddle-leaf fig was dying. Geeio caught the problem in one scan.',
    author: 'Maya R.',
    source: 'Review from Giggle play',
  },
  {
    id: 'sophia-nguyen',
    quote: 'Geeio spotted the issue I kept missing. My plant recovered fast.',
    author: 'Sophia Nguyen',
    source: 'Review from Dapps store',
  },
];

export default TESTIMONIALS;
