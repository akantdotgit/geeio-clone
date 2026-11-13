import { Link } from 'react-router-dom';
import { BLOG_POSTS } from '../../data/blogData';
import { Button } from '../ui';
import dateIconSvg from '../../assets/icons/6a6837c16c2a7b435b638ec6_date.svg';

/**
 * BlogCard — Individual editorial post card
 *
 * Implements Geeio design tokens from AGENTS.md:
 * - 24px radius (`rounded-3xl`), padding 16-24px (`p-5 sm:p-6`), text `#505851` (`text-body`)
 * - Surface container (`bg-surface`) with single token shadow (`shadow-card`) and light border (`border-neutral-2/40`)
 * - Thumbnail aspect ratio 16:10 container (`bg-surface-alt`)
 * - Floating glassmorphism read-time pill badge (`bg-canvas/90`, `text-primary`, `font-ui`)
 * - Editorial heading (`font-heading`, `text-primary`, negative tracking `tracking-[-0.5px] sm:tracking-[-1px]`)
 * - Botanical green hover transition (`group-hover/card:text-accent`)
 * - Isolated button primitive (`Button` with `group/btn` and `group-hover/btn:-translate-y-full`)
 */
function BlogCard({ post }) {
  const imageSrc = post.image || post.remoteImage;

  return (
    <article
      data-purpose="blog-card"
      className="flex flex-col bg-surface rounded-xl md:rounded-2xl lg:rounded-[20px] pt-4 px-4 pb-6 transition-all duration-300 group/card group"
    >
      {/* Thumbnail Aspect Container */}
      <Link
        to={`/blog/${post.slug}`}
        className="relative block w-full aspect-[16/10] rounded-xl overflow-hidden bg-surface-alt"
      >
        <img
          alt={post.title}
          className="w-full h-full object-cover group-hover/card:scale-105 transition-transform duration-500 ease-out cursor-pointer"
          loading="lazy"
          src={imageSrc}
          onError={(e) => {
            if (post.remoteImage && e.currentTarget.src !== post.remoteImage) {
              e.currentTarget.src = post.remoteImage;
            }
          }}
        />
        {/* Floating Read Time Badge */}
        {post.readTime && (
          <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-canvas text-xs md:text-sm font-medium text-primary font-ui">
            <img
              src={dateIconSvg}
              alt=""
              className="w-3.5 h-3.5 shrink-0"
              aria-hidden="true"
            />
            <span>{post.readTime}</span>
          </div>
        )}
      </Link>

      {/* Card Content */}
      <div className="pt-4 md:pt-6 flex flex-col items-start flex-grow">
        <Link to={`/blog/${post.slug}`}>
          <h3 className="font-heading text-2xl md:text-[28px] lg:text-[32px] text-primary tracking-[-0.5px] sm:tracking-[-1px] hover:text-accent transition-colors leading-snug cursor-pointer">
            {post.title}
          </h3>
        </Link>
        <p className="font-heading text-body text-sm mt-2.5 mb-6 leading-relaxed">
          {post.excerpt}
        </p>

        {/* Read More Button Primitive */}
        <div>
          <Button
            as={Link}
            to={`/blog/${post.slug}`}
            variant="outline"
            className="!px-10.5 !py-3.5 md:!py-4.5 !text-[15px] md:!text-base !font-semibold !border-primary !text-primary hover:!bg-primary hover:!text-canvas hover:!border-primary transition-all active:scale-[0.98]"
          >
            {post.ctaText || 'Read More'}
          </Button>
        </div>
      </div>
    </article>
  );
}

/**
 * Blog — Plant Care Tips & Expert Insights Section
 *
 * Faithfully recreates the Blog section following AGENTS.md design tokens:
 * - Semantic `<section>` element on canvas background (`bg-canvas`)
 * - Display XL editorial heading with negative tracking (`tracking-[-2px] lg:tracking-[-2.5px]`)
 * - Data-driven mapping over `src/data/blogData.js`
 * - Two-column responsive grid layout
 * - Button primitive from `../ui/Button`
 *
 * @param {Object} props
 * @param {Array}  [props.posts=BLOG_POSTS] - List of blog articles
 * @param {string|React.ReactNode} [props.title] - Section title override
 * @param {string} [props.className=''] - Additional CSS classes
 * @param {string} [props.id='blog-section'] - DOM ID for section anchor
 */
export default function Blog({
  posts = BLOG_POSTS,
  title,
  className = '',
  id = 'blog-section',
}) {
  return (
    <section
      id={id}
      data-purpose="blog-section"
      className={`w-full bg-canvas pt-10 sm:pt-14 ${className}`.trim()}
    >
      {/* Hero / Blog Header Section */}
      <div
        className="max-w-4xl mx-auto px-4 pt-10 sm:pt-16 md:pt-20 pb-8 sm:pb-12 text-center"
        data-purpose="hero-title"
      >
        <h2 className="font-heading text-[40px] sm:text-[45px] md:text-[56px] lg:text-[64px] font-medium tracking-[-2px] lg:tracking-[-2.5px] text-primary leading-[1.12] max-w-3xl mx-auto">
          {title || (
            <>
              Plant care tips &amp;
              <br className="hidden sm:inline" /> expert insights
            </>
          )}
        </h2>
      </div>

      {/* Blog Posts Grid Section */}
      <div
        className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 sm:pb-24"
        data-purpose="blog-grid-section"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {posts.map((post, index) => (
            <BlogCard key={post.id || post.slug || index} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
}
