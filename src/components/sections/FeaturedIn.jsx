import { FEATURED_BRANDS } from '../../data/featuredData';

/**
 * FeaturedIn — Brand Logo Ticker (Right-to-Left)
 *
 * Implements:
 * - Data-driven brand logo ticker mapping over FEATURED_BRANDS
 * - Seamless infinite marquee animation (.animate-marquee)
 * - Continuous animation without pause on hover
 * - Gradient fade masks on left and right edges for smooth scroll-in/out
 * - Fallback image handling to bundled SVG if remote URLs fail
 *
 * Source: export/home.html (BRAND LOGO TICKER)
 *
 * @param {Object} props
 * @param {string} [props.title='As featured in...'] - Header label
 * @param {Array} [props.brands=FEATURED_BRANDS] - Array of brand objects
 * @param {number} [props.repeat=2] - Number of array repetitions for seamless infinite looping
 * @param {string} [props.className=''] - Additional CSS classes for outer section
 * @param {string} [props.trackClassName=''] - Additional CSS classes for marquee track
 */
export default function FeaturedIn({
  title = 'As featured in...',
  brands = FEATURED_BRANDS,
  repeat = 2,
  className = '',
  trackClassName = '',
}) {
  const displayBrands = Array.from({ length: repeat }).flatMap(() => brands);

  return (
    <section
      className={`py-18 px-5 pb-15 md:px-7.5 md:pb-20 lg:pb-35 flex flex-col items-center overflow-hidden w-full ${className}`.trim()}
    >
      <p className="text-[15px] sm:text-lg text-primary tracking-normal font-ui mb-6 sm:mb-8 text-center font-medium">
        {title}
      </p>

      <div className="relative w-full overflow-hidden flex items-center justify-center py-2">
        {/* Left gradient fade mask */}
        <div
          className="absolute left-0 top-0 bottom-0 w-16 sm:w-28 md:w-36 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"
          aria-hidden="true"
        />

        {/* Right gradient fade mask */}
        <div
          className="absolute right-0 top-0 bottom-0 w-16 sm:w-28 md:w-36 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"
          aria-hidden="true"
        />

        {/* Animated Marquee Track */}
        <div
          className={`animate-marquee flex items-center gap-10 sm:gap-16 md:gap-24 px-4 sm:px-8 ${trackClassName}`.trim()}
        >
          {displayBrands.map((brand, index) => {
            const key = `${brand.id || 'brand'}-${index}`;
            const imgElement = (
              <img
                alt={brand.alt || brand.name || 'Partner logo'}
                className="h-6 sm:h-7 md:h-8 w-auto object-contain opacity-75 hover:opacity-100 transition-opacity shrink-0"
                src={brand.src || brand.fallbackSrc}
                onError={(e) => {
                  if (brand.fallbackSrc && e.currentTarget.src !== brand.fallbackSrc) {
                    e.currentTarget.src = brand.fallbackSrc;
                  }
                }}
                loading="lazy"
              />
            );

            if (brand.href) {
              return (
                <a
                  key={key}
                  href={brand.href}
                  className="focus-ring rounded-md transition-opacity inline-flex items-center shrink-0"
                  aria-label={brand.name || brand.alt}
                >
                  {imgElement}
                </a>
              );
            }

            return <span key={key} className="inline-flex shrink-0">{imgElement}</span>;
          })}
        </div>
      </div>
    </section>
  );
}
