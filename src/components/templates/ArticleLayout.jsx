import Checklist from '../ui/Checklist';
import ShareWidget from '../ui/ShareWidget';
import Faq from '../ui/Accordion';
import articleFaqs from '../../data/articleFaq';

import dateIconSvg from '../../assets/icons/6a6837c16c2a7b435b638ec6_date.svg';
import defaultHeroImg from '../../assets/images/6a68b0e9cdd095116bd2b37e_blog-3.webp';
import defaultAvatarImg from '../../assets/images/6a68b0ee7d3329a33e806b3f_avatar-2.webp';
import blogDetailsImg from '../../assets/images/6a6832551ce4c5ae0faa23f2_blog-details.webp';

const QUICK_TIPS_1 = [
  'Feel the top 2–3 cm of soil.',
  'Water only when the soil feels dry.',
  'Empty excess water from the pot tray.',
  'Reduce watering during winter.',
];

const QUICK_TIPS_2 = [
  'Place sun-loving plants near bright windows.',
  'Rotate pots every few weeks.',
  'Clean dusty leaves for better light absorption.',
  'Move plants if leaves begin stretching or fading.',
];

const AI_FEATURES = [
  'Identify plants instantly from a photo.',
  'Detect diseases and nutrient deficiencies.',
  'Receive personalised care recommendations.',
  'Get smart watering reminders.',
  'Track your plant’s health over time.',
];

/**
 * src/components/templates/ArticleLayout.jsx
 *
 * Full article template for editorial plant care articles.
 * Follows Geeio design system tokens from AGENTS.md:
 *   - Editorial typography: Plus Jakarta Sans (font-heading) with negative tracking
 *   - Chrome / UI typography: Inter (font-ui)
 *   - Palette: primary (#0E160F), accent (#317039), body (#505851), surface (#F6F7F6), canvas (#FFFFFF)
 *   - Assets: Local SVGs and WebPs from src/assets/
 *
 * @param {Object} props
 * @param {Object} [props.article] - Dynamic header data
 * @param {string} [props.article.title] - Article title
 * @param {string} [props.article.readTime] - Reading duration badge
 * @param {string} [props.article.heroImage] - Hero image src
 * @param {string} [props.article.authorName] - Author full name
 * @param {string} [props.article.authorAvatar] - Author avatar image src
 * @param {string} [props.article.date] - Publication date
 * @param {string} [props.className] - Additional wrapper className
 */
export default function ArticleLayout({ article = {}, className = '' }) {
  const {
    title = 'Simple tips to help plants thrive year-round',
    readTime = '6 min read',
    heroImage = defaultHeroImg,
    image,
    authorName = 'Devid Okham',
    authorAvatar = defaultAvatarImg,
    avatar,
    date = 'July 28, 2026',
  } = article;

  const displayHero = heroImage || image || defaultHeroImg;
  const displayAvatar = authorAvatar || avatar || defaultAvatarImg;

  return (
    <section className={`w-full max-w-[1200px] mx-auto pt-15 px-5 pb-13 md:pt-20 md:px-7.5 md:pb-18 lg:py-25 lg:px-7.5 flex flex-col items-center gap-6.5 md:gap-10 lg:gap-15 font-heading bg-canvas text-body ${className}`.trim()}>
      {/* Top Hero Section (Split 2 Columns) */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-7.5 items-center mx-auto">
        {/* Hero Image */}
        <div className="relative w-full max-w-none h-auto lg:max-w-[556px] lg:h-[472px] rounded-xl md:rounded-2xl lg:rounded-[20px] overflow-hidden bg-surface">
          <img
            alt={title}
            className="w-full h-full object-cover"
            src={displayHero}
          />
        </div>

        {/* Right Header Meta */}
        <div className="w-full max-w-none h-auto lg:max-w-[588px] flex flex-col justify-center gap-5 md:gap-6 lg:gap-20">
          {/* Read time badge */}
          <div className="w-full flex flex-col gap-4 md:gap-6">
            <span className="w-fit flex items-center gap-1.5 px-4 py-2.5 rounded-2xl lg:rounded-4xl bg-surface text-primary font-ui text-sm font-medium">
              <img
                src={dateIconSvg}
                alt=""
                className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary shrink-0"
                aria-hidden="true"
              />
              <span>{readTime}</span>
            </span>
            {/* Main Title (Display LG per AGENTS.md: Jakarta Sans 48px, line-height 1.16, tracking -2px) */}
            <h1 className="font-heading text-[40px] md:text-[56px] lg:text-[64px] font-medium text-primary leading-[1.12] tracking-[-1px] sm:tracking-[-2px]">
              {title}
            </h1>
          </div>

          {/* Author Info */}
          <div className="flex items-center gap-3">
            <img
              alt={authorName}
              className="w-8 h-8 rounded-full object-cover shrink-0 border border-neutral-2/50"
              src={displayAvatar}
            />
            <div className="flex items-center gap-3 font-ui text-base text-body">
              <span className="font-semibold text-primary">{authorName}</span>
              <span className="text-neutral-3 font-extralight">•</span>
              <span>{date}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Area with Left Share Bar */}
      <div className="w-full max-w-[996px]">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 relative">
          {/* Responsive Share Bar / Sticky Widget from single component */}
          <ShareWidget title={title} />

          {/* Center Column: Article Body */}
          <div className="md:col-span-10 max-w-[700px] text-body mt-6.5">
            {/* Section 1 */}
            <div className="mb-6 sm:mb-8">
              <h2 className="font-heading text-[22px] md:text-2xl font-medium text-primary tracking-[-0.5px] mb-2 sm:mb-3">
                Keep your plants healthy every season
              </h2>
              <p className="font-heading text-base leading-relaxed text-body mb-4 sm:mb-6">
                Healthy plants don’t need complicated routines—they need consistent care.
                Whether you’re growing indoor foliage, flowering plants, or herbs, small habits
                make the biggest difference. By understanding your plant’s light, water, and
                nutrient needs, you can prevent common problems before they start and enjoy
                vibrant growth throughout the year.
              </p>
              {/* Styled Blockquote */}
              <blockquote className="border-l-[3px] border-accent pl-4 sm:pl-5 py-1 text-sm md:text-[15px] italic text-primary/85 font-heading font-medium leading-relaxed my-4 sm:my-6 bg-surface/50 rounded-r-lg">
                “Plantap experience seasonal changes just like people do. Light levels, temperature,
                humidity, and growth rates all shift throughout the year. Adjusting your care
                routine helps plants stay healthy, produce stronger leaves, and recover faster
                from stress”
              </blockquote>
            </div>

            {/* Section 2 */}
            <div className="mb-6 sm:mb-8">
              <h2 className="font-heading text-[22px] md:text-2xl font-medium text-primary tracking-[-0.5px] mb-2 sm:mb-3">
                Manage your time wisely
              </h2>
              <p className="font-heading text-base leading-relaxed text-body mb-4 sm:mb-6">
                Large assignments become easier when broken into smaller tasks. Combine focused
                study sessions with short breaks to stay productive without feeling overwhelmed.
                Consistent progress always beats cramming. Pulvinar vivamus fringilla lacus nec
                metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc
                posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent
                per conubia nostra inceptos himenaeos.
              </p>
            </div>

            {/* Quick Tips 1 */}
            <div className="mb-6 sm:mb-8">
              <h3 className="font-heading text-[22px] md:text-2xl font-medium text-primary tracking-[-0.5px] mb-3 sm:mb-4">
                Quick tips
              </h3>
              <Checklist items={QUICK_TIPS_1} />
            </div>

            {/* Section 3 */}
            <div className="mb-6 sm:mb-8">
              <h2 className="font-heading text-[22px] md:text-2xl font-medium text-primary tracking-[-0.5px] mb-2 sm:mb-3">
                Give your plant the right amount of light
              </h2>
              <p className="font-heading text-base leading-relaxed text-body mb-4 sm:mb-6">
                Every plant has different lighting preferences. Too little light slows growth,
                while too much direct sunlight can burn leaves. In id cursus mi pretium tellus duis
                convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla
                lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc
                posuere. Ut hendrerit semper vel class aptent taciti sociosqu.
              </p>
            </div>

            {/* Quick Tips 2 */}
            <div className="mb-6 sm:mb-8">
              <h3 className="font-heading text-[22px] md:text-2xl font-medium text-primary tracking-[-0.5px] mb-3 sm:mb-4">
                Quick tips
              </h3>
              <Checklist items={QUICK_TIPS_2} />
            </div>

            {/* Second In-Article Image */}
            <div className="w-full rounded-2xl overflow-hidden mb-6 sm:mb-8 bg-surface">
              <img
                alt="Repotting plant with soil and gloves"
                className="w-full h-[240px] sm:h-[360px] md:h-[400px] object-cover"
                src={blogDetailsImg}
              />
            </div>

            {/* Section 4: How Geeio makes plant care easier */}
            <div className="mb-6 sm:mb-8">
              <h2 className="font-heading text-[22px] md:text-2xl font-medium text-primary tracking-[-0.5px] mb-2 sm:mb-3">
                How Geeio makes plant care easier
              </h2>
              <p className="font-heading text-base leading-relaxed text-body mb-4 sm:mb-6">
                Instead of guessing what your plant needs, Geeio helps you make informed
                decisions. Plants experience seasonal changes just like people do. Light levels,
                temperature, humidity, and growth rates all shift throughout the year. Adjusting
                your care routine helps plants stay healthy, produce stronger leaves, and recover
                faster from stress. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus
                fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia
                integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad
                litora torquent per conubia nostra inceptos himenaeos.
              </p>
            </div>

            {/* AI features list */}
            <div className="mb-8 sm:mb-10">
              <h3 className="font-heading text-[22px] md:text-2xl font-medium text-primary tracking-[-0.5px] mb-3 sm:mb-4">
                AI features
              </h3>
              <Checklist items={AI_FEATURES} />
            </div>

            {/* Frequently Asked Questions Accordion */}
            <div className="mb-8 sm:mb-10">
              <h3 className="font-heading text-[22px] md:text-2xl font-medium text-primary tracking-[-0.5px] mb-3 sm:mb-4">
                Frequently asked questions
              </h3>
              <Faq items={articleFaqs} />
            </div>

            {/* Final thoughts */}
            <div>
              <h2 className="font-heading text-[22px] md:text-2xl font-medium text-primary tracking-[-0.5px] mb-2 sm:mb-3">
                Final thoughts
              </h2>
              <p className="font-heading text-base leading-relaxed text-body">
                Successful plant care isn’t about doing more—it’s about doing the right things
                consistently. By providing proper light, watering wisely, and monitoring your
                plants regularly, you’ll create healthier, stronger plants that thrive
                throughout every season. With AI-powered guidance from Geeio, caring for your
                plants becomes simpler, smarter, and more enjoyable.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
