import { useState, useRef, useEffect } from 'react';
import { HOME_TESTIMONIALS_DATA } from '../../data/testimonialsData';
import defaultQuoteIcon from '../../assets/icons/6a65e82bbf33efae2ede3ba8_quote-icon.svg';
import defaultPosterImage from '../../assets/images/6a6981fad8208ad2cb0b0b3b_img-7.webp';
import defaultVideo from '../../assets/video/6a619d997ef351a3e043ba3f_6a619d997ef351a3e043c027_Testimonial 1_mp4.mp4';

/**
 * Testimonials — Bento Testimonial & Metrics Grid
 *
 * Implements:
 * - Geeio standard 8-column Bento grid:
 *   - Top Row (8 cols): Daniel K. (6 cols) + 2M+ Metric (2 cols)
 *   - Bottom Row (8 cols): 98% Metric (2 cols) + Maya R. (3 cols) + Sophia Nguyen (3 cols)
 * - Large hero testimonial with customer photo (img-7.webp)
 * - Clickable image with cursor-pointer that starts video without any layout shifts
 * - 2M+ and 98% metric highlight cards in alternating theme colors
 * - Customer review cards with local Geeio quote icon asset
 * - Fully data-driven with fallback defaults
 * - Max-width: max-w-[1200px] on the section's inner wrapper
 *
 * @param {Object} props
 * @param {Object} [props.data=HOME_TESTIMONIALS_DATA] - Testimonials data
 * @param {string} [props.className] - Optional section classes
 */
export default function Testimonials({
  data = HOME_TESTIMONIALS_DATA,
  className = '',
}) {
  const { title = 'Trusted by plant\nlovers everywhere', featured, stats, reviews, icons } = data || {};

  const stat1 = stats?.[0];
  const stat2 = stats?.[1];
  const review1 = reviews?.[0];
  const review2 = reviews?.[1];

  const quoteIcon = icons?.quote || defaultQuoteIcon;

  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);

  const [isVisible, setIsVisible] = useState(
    () => typeof IntersectionObserver === 'undefined'
  );
  const containerRef = useRef(null);

  // Trigger smooth fade reveal when scrolled into view
  useEffect(() => {
    if (typeof IntersectionObserver === 'undefined') {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
    );

    const el = containerRef.current;
    if (el) {
      observer.observe(el);
    }

    return () => {
      if (el) {
        observer.unobserve(el);
      }
      observer.disconnect();
    };
  }, []);

  const featuredImageSrc =
    featured?.image?.src || featured?.imageSrc || defaultPosterImage;
  const featuredImageAlt =
    featured?.image?.alt || featured?.imageAlt || 'Plant lover Daniel K. gardening outdoors';
  const videoSrc = featured?.videoSrc || featured?.video || defaultVideo;

  useEffect(() => {
    if (isPlaying && videoRef.current) {
      videoRef.current.play().catch(() => setIsPlaying(false));
    }
  }, [isPlaying]);

  const handleMediaClick = () => {
    if (videoSrc) {
      if (isPlaying) {
        if (videoRef.current) {
          videoRef.current.pause();
        }
        setIsPlaying(false);
      } else {
        setIsPlaying(true);
        if (videoRef.current) {
          videoRef.current.play().catch(() => setIsPlaying(false));
        }
      }
    }
  };

  return (
    <section
      className={`py-15 px-5 md:py-20 md:px-7.5 lg:py-35 ${className}`.trim()}
    >
      <div
        ref={containerRef}
        className={`w-full max-w-[1200px] mx-auto flex flex-col gap-10 md:gap-13 transition-all duration-700 delay-200 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        {/* Section Heading */}
        <div className="text-center">
          <h2 className="font-heading text-[2rem] sm:text-4xl md:text-[44px] lg:text-[48px] text-primary font-medium leading-[1.16] tracking-[-1.5px] lg:tracking-[-2px]">
            {title.includes('\n') ? (
              title.split('\n').map((line, idx) => (
                <span key={idx}>
                  {line}
                  {idx < title.split('\n').length - 1 && <br />}
                </span>
              ))
            ) : (
              title
            )}
          </h2>
        </div>

        {/* Bento Testimonial & Metrics 8-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-8 gap-4 items-stretch w-full text-left">
          {/* ── TOP ROW: Card 1 (Daniel K. — 6 of 8 cols) ─────────────── */}
          {featured && (
            <div className="col-span-1 md:col-span-6 bg-surface rounded-2xl md:rounded-3xl p-4 flex flex-col md:flex-row justify-between gap-12.5 lg:gap-16 items-stretch">
              <div className="w-full max-w-none md:max-w-121 flex flex-col justify-between flex-1 gap-15 lg:p-0.5">
                <div className='flex flex-col gap-4'>
                  <img
                    src={quoteIcon}
                    alt=""
                    className="w-10 h-10 select-none"
                    aria-hidden="true"
                  />
                  <p className="font-heading text-[20px] md:text-2xl font-normal md:font-medium text-primary leading-[1.38]">
                    {featured.quote}
                  </p>
                </div>
                <div className="">
                  <p className="font-heading font-medium text-primary text-[15px] sm:text-[16px] leading-tight">
                    {featured.author}
                  </p>
                  <p className="font-ui text-[13px] text-body mt-1 leading-tight">
                    {featured.source}
                  </p>
                </div>
              </div>

              {/* Daniel K. Clickable Photo & Video Container */}
              <div
                role="button"
                tabIndex={0}
                onClick={handleMediaClick}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    handleMediaClick();
                  }
                }}
                aria-label={isPlaying ? 'Pause testimonial video' : 'Play testimonial video'}
                className="relative w-full max-w-none md:max-w-[292px] h-[333px] shrink-0 rounded-xl overflow-hidden bg-surface-alt cursor-pointer select-none focus:outline-none focus-visible:outline-2 focus-visible:outline-[#3B79C3]"
              >
                {videoSrc && (
                  <video
                    ref={videoRef}
                    src={videoSrc}
                    className={`absolute inset-0 w-full max-w-none md:w-max-[292px] h-[333px] object-cover transition-opacity duration-300 ${
                      isPlaying ? 'opacity-100 z-10' : 'opacity-0 pointer-events-none -z-10'
                    }`}
                    playsInline
                    onEnded={() => setIsPlaying(false)}
                    onPause={() => setIsPlaying(false)}
                    onPlay={() => setIsPlaying(true)}
                  />
                )}

                <img
                  alt={featuredImageAlt}
                  className={`w-full max-w-none md:w-max-[292px] h-[333px] object-cover transition-opacity duration-300 ${
                    isPlaying && videoSrc ? 'opacity-0' : 'opacity-100'
                  }`}
                  src={featuredImageSrc}
                  loading="lazy"
                />
              </div>
            </div>
          )}

          {/* ── TOP ROW: Card 2 (2M+ Metric — 2 of 8 cols) ─────────────── */}
          {stat1 && (
            <div
              className={`col-span-1 md:col-span-3 lg:col-span-2 ${
                stat1.bgClass || 'bg-accent-1'
              } rounded-2xl md:rounded-3xl p-6 flex flex-col justify-between min-h-[200px] sm:min-h-[240px] md:min-h-full`}
            >
              <h3 className="font-heading text-[38px] sm:text-[42px] md:text-[44px] font-normal sm:font-medium tracking-tight text-primary leading-none">
                {stat1.stat}
              </h3>
              <p className="font-ui text-base text-body leading-snug">
                {stat1.label}
              </p>
            </div>
          )}

          {/* ── BOTTOM ROW: Card 3 (98% Metric — 2 of 8 cols) ──────────── */}
          {stat2 && (
            <div
              className={`col-span-1 md:col-span-3 lg:col-span-2 ${
                stat2.bgClass || 'bg-primary text-canvas'
              } rounded-2xl md:rounded-3xl p-6 flex flex-col justify-between min-h-[250px] sm:min-h-[280px] md:min-h-[300px]`}
            >
              <h3 className="font-heading text-[38px] sm:text-[42px] md:text-[44px] font-normal sm:font-medium tracking-tight text-white leading-none">
                {stat2.stat}
              </h3>
              <p className="font-ui text-base text-canvas leading-snug">
                {stat2.label}
              </p>
            </div>
          )}

          {/* ── BOTTOM ROW: Card 4 (Maya R. — 3 of 8 cols) ─────────────── */}
          {review1 && (
            <div className="col-span-1 md:col-span-3 bg-surface rounded-2xl md:rounded-3xl p-6 flex flex-col justify-between gap-15">
              <div className='flex flex-col gap-4'>
                <img
                  src={quoteIcon}
                  alt=""
                  className="w-10 h-10 select-none"
                  aria-hidden="true"
                />
                <p className="font-heading text-[20px] md:text-2xl font-normal md:font-medium text-primary leading-[1.38]">
                  {review1.quote}
                </p>
              </div>
              <div className="">
                <p className="font-heading font-medium text-primary text-[15px] sm:text-[16px] leading-tight">
                  {review1.author}
                </p>
                <p className="font-ui text-[13px] text-body mt-1 leading-tight">
                  {review1.source}
                </p>
              </div>
            </div>
          )}

          {/* ── BOTTOM ROW: Card 5 (Sophia Nguyen — 3 of 8 cols) ────────── */}
          {review2 && (
            <div className="col-span-1 md:col-span-3 bg-surface rounded-2xl md:rounded-3xl p-6 flex flex-col justify-between gap-15">
              <div className='flex flex-col gap-4'>
                <img
                  src={quoteIcon}
                  alt=""
                  className="w-10 h-10 select-none"
                  aria-hidden="true"
                />
                <p className="font-heading text-[20px] md:text-2xl font-normal md:font-medium text-primary leading-[1.38]">
                  {review2.quote}
                </p>
              </div>
              <div className="">
                <p className="font-heading font-medium text-primary text-[15px] sm:text-[16px] leading-tight">
                  {review2.author}
                </p>
                <p className="font-ui text-[13px] text-body mt-1 leading-tight">
                  {review2.source}
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}