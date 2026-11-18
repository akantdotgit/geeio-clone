import ratingStarSvg from '../assets/icons/6a64f2356c56029a5984a5f6_rating.svg';
import quoteIconSvg from '../assets/icons/6a65e82bbf33efae2ede3ba8_quote-icon.svg';
import playButtonSvg from '../assets/icons/6a619d997ef351a3e043c01c_play-button-2.svg';
import testimonial1Poster from '../assets/images/6a6981fad8208ad2cb0b0b3b_img-7.webp';
import testimonial1Video from '../assets/video/6a619d997ef351a3e043ba3f_6a619d997ef351a3e043c027_Testimonial 1_mp4.mp4';

/**
 * src/data/testimonialsData.js
 * Testimonials, ratings, and customer proof data
 *
 * Source: export/home.html and export/features.html
 */

export const HERO_SOCIAL_PROOF = {
  rating: '4.9/5',
  reviewsCount: '900+ Reviews',
  stars: 5,
  starIcon: ratingStarSvg,
};

export const BENTO_STATS = [
  {
    id: 'plants-identified',
    stat: '2M+',
    label: 'Plants identified & diagnosed',
    theme: 'surface-alt', // #E4EFD3
    bgClass: 'bg-[#e2edd3]',
    textColor: 'text-primary',
    labelColor: 'text-body',
  },
  {
    id: 'active-growers',
    stat: '98%',
    label: 'Active plants growers',
    theme: 'primary', // #0E160F / #111A14
    bgClass: 'bg-[#0E160F] text-white',
    textColor: 'text-white',
    labelColor: 'text-white',
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
    imageSrc: testimonial1Poster,
    videoSrc: testimonial1Video,
  },
  {
    id: 'maya-r',
    quote: 'My fiddle–leaf fig was dying. Geeio caught the problem in one scan.',
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

export const HOME_TESTIMONIALS_DATA = {
  title: 'Trusted by plant\nlovers everywhere',
  featured: TESTIMONIALS[0],
  stats: BENTO_STATS,
  reviews: [TESTIMONIALS[1], TESTIMONIALS[2]],
  icons: {
    quote: quoteIconSvg,
    play: playButtonSvg,
  },
};

export default TESTIMONIALS;
