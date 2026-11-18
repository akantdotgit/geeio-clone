import { useState, useEffect, useRef } from 'react';
import MovingTickerTrack from './MovingTickerTrack';
import { HERO_TICKER_CARDS, HERO_PHONE_MOCKUP } from '../../data/heroTicker';

/**
 * HeroCardTicker — Hero Card Ticker Behind Center Smartphone Mockup
 *
 * Implements:
 * - Smooth scroll-triggered fade reveal animation
 * - Moving ticker track with continuous infinite loop behind phone mockup
 * - Centered high-resolution smartphone app preview layered directly over moving cards
 * - Data-driven with default fallback to HERO_TICKER_CARDS and HERO_PHONE_MOCKUP
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
      className={`relative w-full overflow-hidden flex items-center justify-center ${className}`.trim()}
    >
      {/* Moving Ticker Track (behind phone) */}
      <MovingTickerTrack
        cards={cards}
        repeat={repeat}
        className={`transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
      />

      {/* Smartphone Mockup in Foreground */}
      <div
        className={`relative z-20 pointer-events-none w-full max-w-[240px] md:max-w-[360px] mx-auto shrink-0 top-4.5 md:top-4.75 transition-all duration-700 delay-200 ease-[cubic-bezier(0.16,1,0.3,1)] ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          } ${mockupClassName}`.trim()}
      >
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
