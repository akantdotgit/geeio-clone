import { useState, useEffect, useRef } from 'react';
import brandIconSvg from '../../assets/icons/6a64d9bf2d2279d5e3a43461_Icon.svg';
import { Button } from '../ui';

/**
 * CtaBanner — Geeio brand dark CTA hero panel
 *
 * Implements:
 *   - Dark card panel (#0E160F / `primary`)
 *   - Brand decorative squares (surface-alt + accent)
 *   - Negative-tracked display heading
 *   - "Book Your Appointment" CTA pill using `Button` (variant="white")
 *   - Staggered fade reveal animation on the outer card div
 *   - Seamless integration with Footer or standalone usage
 */
export default function CtaBanner({
  title = 'Start taking care of your plant',
  subtitle = 'Upload a photo for AI to identify your plant and suggest care.',
  buttonText = 'Book Your Appointment',
  buttonHref = '#appointment',
  className = '',
}) {
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

  return (
    <section ref={containerRef} className={`w-full bg-canvas px-3 ${className}`}>
      {/* The div next to the section element — Staggered fade reveal */}
      <div
        className="bg-primary px-5 py-15 sm:px-7.5 sm:py-20 lg:pt-36 lg:pb-40 text-canvas max-w-[1500px] mx-auto overflow-hidden relative"
      >
        <div className={`flex flex-col items-center text-center max-w-2xl mx-auto gap-5 sm:gap-9 transition-all duration-700 delay-200 ease-[cubic-bezier(0.16,1,0.3,1)] ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {/* Decorative Brand Icon */}
          <div className="flex items-center justify-center" aria-hidden="true">
            <img
              src={brandIconSvg}
              alt=""
              className="w-[34px] h-[34px] object-contain"
            />
          </div>

          {/* Heading with negative letter-tracking */}
          <div className='flex flex-col items-center gap-2.5 sm:gap-6'>
            <h2 className="font-heading text-3xl sm:text-[40px] lg:text-5xl font-medium text-canvas tracking-[-1px] sm:tracking-[-2px] leading-tight">
              {title}
            </h2>

            <p className="font-heading text-[15px] sm:text-base text-neutral-2 max-w-xl mx-auto">
              {subtitle}
            </p>
          </div>

          <Button variant="white" as="a" href={buttonHref}>
            {buttonText}
          </Button>
        </div>
      </div>
    </section>
  );
}
