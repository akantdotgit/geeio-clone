import blog1Img from '../assets/images/6a6831c599af5bc4e8821b00_blog-1.webp';
import blog2Img from '../assets/images/6a68b0d0ffdd7cdc1ac7bd21_blog-2.webp';
import blog3Img from '../assets/images/6a68b0e9cdd095116bd2b37e_blog-3.webp';
import blog4Img from '../assets/images/6a68b1837b4e3ac024a65f94_blog-4.webp';

import profileImg from '../assets/images/6a6831c0c6c88da40a45b85f_Profile Image.webp';
import avatar1Img from '../assets/images/6a68b0cafa1c46f03fd29307_avatar-1.webp';
import avatar2Img from '../assets/images/6a68b0ee7d3329a33e806b3f_avatar-2.webp';
import avatar3Img from '../assets/images/6a68b17a4bff69e59b690248_avatar-3.webp';

/**
 * src/data/articlesData.js
 * Editorial article header metadata for plant care articles
 *
 * Source: export/blog.html and export/article.html
 */
export const ARTICLES = [
  {
    slug: 'the-right-watering-schedule-for-every-plant',
    readTime: '6 min read',
    title: 'The right watering schedule for every plant',
    heroImage: blog1Img,
    authorName: 'Devid Okham',
    authorAvatar: profileImg,
    date: 'July 28, 2026',
  },
  {
    slug: 'common-plant-diseases-and-easy-fixes',
    readTime: '5 min read',
    title: 'Common plant diseases and easy fixes',
    heroImage: blog2Img,
    authorName: 'Devid Okham',
    authorAvatar: avatar1Img,
    date: 'July 28, 2026',
  },
  {
    slug: 'simple-tips-to-help-plants-thrive-year-round',
    readTime: '6 min read',
    title: 'Simple tips to help plants thrive year-round',
    heroImage: blog3Img,
    authorName: 'Devid Okham',
    authorAvatar: avatar2Img,
    date: 'July 28, 2026',
  },
  {
    slug: 'essential-light-tips-for-healthy-plants',
    readTime: '4 min read',
    title: 'Essential light tips for healthy plants',
    heroImage: blog4Img,
    authorName: 'Devid Okham',
    authorAvatar: avatar3Img,
    date: 'July 28, 2026',
  },
];

export const articlesData = ARTICLES;
export default ARTICLES;
