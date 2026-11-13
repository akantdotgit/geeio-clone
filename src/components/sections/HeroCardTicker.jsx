import { useState, useEffect, useRef } from 'react';
import MovingTickerTrack from './MovingTickerTrack';
import { HERO_TICKER_CARDS, HERO_PHONE_MOCKUP } from '../../data/heroTicker';

/**
 * HeroCardTicker — Hero Card Ticker Behind Center Smartphone Mockup
 *
 * Implements:
 * - Smooth scroll-triggered fade reveal animation matching FAQ:
 *     Moving ticker track and smartphone mockup fade in & gently float
 *     into position together in perfect synchronization.
 * - Moving ticker track with continuous infinite loop behind phone mockup
 * - High-resolution centered smartphone app preview
 * - Data-driven with default fallback to HERO_TICKER_CARDS and HERO_PHONE_MOCKUP
 *
 * Source: export/home.html
 *
 * @param {Object} props
 * @param {Array} [props.cards] - Array of cards for the ticker track
 * @param {Object} [props.mockup] - Smartphone mockup image { src, alt }
 * @param {number} [props.repeat=2] - Repeat count for seamless infinite ticker loop
 * @param {string} [props.className] - Additional class name for the wrapper
 * @param {string} [props.mockupClassName] - Additional class name for the phone mockup container
 */
export default function HeroCardTicker({
  cards = HERO_TICKER_CARDS,
  mockup = HERO_PHONE_MOCKUP,
  repeat = 2,
  className = '',
  mockupClassName = '',
}) {
  const [isVisible, setIsVisible] = useState(
    () => typeof IntersectionObserver === 'undefined'
  );
  const containerRef = useRef(null);

  // Trigger smooth fade reveal when scrolled into view (matching FAQ animation)
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

  return (
    <div
      ref={containerRef}
      className={`bg-surface-alt rounded-b-[20px] relative w-full overflow-hidden pt-4 flex items-center justify-center min-h-[460px] sm:min-h-[520px] md:min-h-[580px] ${className}`.trim()}
    >
      {/* Moving Ticker Track (behind phone) — Smooth fade reveal */}
      <MovingTickerTrack
        cards={cards}
        repeat={repeat}
        className={`transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      />

      {/* Smartphone Mockup in Foreground — Synchronized fade reveal */}
      <div
        className={`relative z-20 pointer-events-none w-[260px] sm:w-[320px] md:w-[360px] shrink-0 top-5 transition-all duration-700 delay-200 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        } ${mockupClassName}`.trim()}
      >
        <div
          className="absolute -z-10"
          aria-hidden="true"
        />
        <img
          alt={mockup.alt || 'Geeio App Interface'}
          className="w-full h-auto pointer-events-auto"
          src={mockup.src}
          loading="eager"
        />
      </div>
    </div>
  );
}
