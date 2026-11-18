import { useState, useEffect, useRef } from 'react';
import { HOW_IT_WORKS_DATA } from '../../data/howItWorksData';
import icon21 from '../../assets/icons/6a65e82b151830893c5cce90_icon-21.svg';
import icon22 from '../../assets/icons/6a65e82b7d95a8a4846a1e22_icon-22.svg';
import icon23 from '../../assets/icons/6a65e82b38ad0c6d6d137bb1_icon-23.svg';

const DEFAULT_STEP_ICONS = {
  1: icon21,
  2: icon22,
  3: icon23,
};

/**
 * HowItWorks — How It Works (3 Simple Steps) with Dynamic Scroll Timeline
 *
 * Implements:
 * - Two-column responsive layout (Dark card with smartphone on left, Timeline on right)
 * - Scroll-driven interactive timeline progress line (0% to 100%) with smooth easing
 * - Smooth step node background color transitions (neutral-2 to primary) synchronized with scroll
 * - Smooth fade reveal when scrolled into view via IntersectionObserver
 * - Uses brand SVG icon assets from src/assets/icons/ (icon-21, icon-22, icon-23)
 * - Symmetrical responsive dimensions matching the Geeio design system
 *
 * @param {Object} props
 * @param {Object} [props.data=HOW_IT_WORKS_DATA] - Steps and mockup data
 * @param {string} [props.className] - Optional section classes
 */
export default function HowItWorks({
  data = HOW_IT_WORKS_DATA,
  className = '',
}) {
  const { title, mockup, steps } = data;
  const sectionRef = useRef(null);
  const containerRef = useRef(null);
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(
    () => typeof IntersectionObserver === 'undefined'
  );

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

  useEffect(() => {
    function updateStepTimeline() {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight =
        window.innerHeight || document.documentElement.clientHeight;

      const startPoint = windowHeight * 0.75;
      const endPoint = windowHeight * 0.25;

      const scrollDistance = startPoint - rect.top;
      const totalDistance = rect.height + (startPoint - endPoint);

      let p = scrollDistance / totalDistance;
      p = Math.max(0, Math.min(1, p));
      setProgress(p);
    }

    window.addEventListener('scroll', updateStepTimeline, { passive: true });
    window.addEventListener('resize', updateStepTimeline, { passive: true });
    updateStepTimeline();

    return () => {
      window.removeEventListener('scroll', updateStepTimeline);
      window.removeEventListener('resize', updateStepTimeline);
    };
  }, []);

  const isStepActive = (stepNumber) => {
    if (stepNumber === 1) return true;
    if (stepNumber === 2) return progress >= 0.45;
    if (stepNumber === 3) return progress >= 0.75;
    return true;
  };

  const getStepIconClasses = (stepNumber) => {
    const base =
      'w-15 h-15 md:w-18 lg:w-23 md:h-18 lg:h-23 rounded-full flex items-center justify-center shrink-0 transition-all duration-500 ease-out shadow-sm';

    return isStepActive(stepNumber)
      ? `${base} bg-primary text-white`
      : `${base} bg-neutral-2 text-white`;
  };

  const resolveIconSrc = (item) => {
    if (
      item?.icon &&
      typeof item.icon === 'string' &&
      (item.icon.includes('/') || item.icon.includes('.'))
    ) {
      return item.icon;
    }
    return DEFAULT_STEP_ICONS[item?.step] || icon21;
  };

  // Map progress (0 to 1) into line fill percentage (0% to 100%)
  const lineProgressPercent = Math.max(
    0,
    Math.min(100, ((progress - 0.15) / 0.7) * 100)
  );

  return (
    <section
      ref={sectionRef}
      id="steps-section"
      className={`py-15 px-5 md:py-20 md:px-7.5 lg:py-35 mx-3 bg-surface-alt rounded-xl md:rounded-2xl lg:rounded-[20px] ${className}`.trim()}
    >
      <div
        ref={containerRef}
        className={`w-full max-w-[1200px] mx-auto transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        {/* Centered Headline */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12 md:mb-14 px-4">
          <h2 className="font-heading text-[2rem] sm:text-4xl md:text-[44px] lg:text-[48px] text-primary font-medium leading-[1.16] tracking-[-1.5px] lg:tracking-[-2px]">
            {title}
          </h2>
        </div>

        {/* Flexible Column Card Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-stretch w-full">
          {/* Left Column: Dark Card Container with Smartphone Mockup */}
          <div className="w-full bg-primary rounded-2xl px-5 pt-5 pb-0 md:pt-20 md:px-7.5 flex items-end justify-center relative overflow-hidden min-h-[420px] sm:min-h-[480px] lg:min-h-[520px]">
            <img
              alt={mockup.alt}
              className="relative z-10 object-cover"
              src={mockup.src}
              loading="lazy"
            />
          </div>

          {/* Right Column: Elevated White Card with Dynamic Scroll Timeline Track */}
          <div className="w-full bg-white rounded-2xl p-5 md:p-8 flex flex-col justify-between relative min-h-[420px] sm:min-h-[480px] lg:min-h-[520px]">
            <div className="relative flex flex-col justify-between h-full space-y-8 sm:space-y-10 lg:space-y-0">
              {/* Vertical Line Track (Centered on the circle icons on mobile and desktop) */}
              <div
                className="absolute left-7.5 md:left-9 lg:left-11.25 bottom-7.5 top-7.5 md:top-11.5 md:bottom-9.5 lg:bottom-11.5 w-[3.5px] md:w-[4px] -translate-x-1/2 bg-neutral-2/50 rounded-full overflow-hidden pointer-events-none"
                id="step-timeline-track"
                aria-hidden="true"
              >
                {/* Smooth Animated Progress Fill Line */}
                <div
                  className="w-full bg-primary rounded-full transition-all duration-200 ease-out origin-top"
                  id="step-progress-line"
                  style={{ height: `${lineProgressPercent}%` }}
                />
              </div>

              {/* Step Items */}
              {steps.map((item) => (
                <div
                  key={item.step}
                  className="relative z-10 flex items-center gap-4 sm:gap-6"
                >
                  <div
                    className={getStepIconClasses(item.step)}
                    id={`step-${item.step}-icon`}
                  >
                    <img
                      src={resolveIconSrc(item)}
                      alt={item.title || ''}
                      className="w-7 h-7 md:w-auto md:h-auto object-cover brightness-0 invert pointer-events-none select-none transition-transform duration-200"
                      aria-hidden="true"
                    />
                  </div>
                  <div className="pt-1 sm:pt-1.5 text-left flex-1">
                    <h3 className="font-heading text-lg sm:text-[19px] md:text-[20px] font-semibold text-primary mb-1 sm:mb-1.5 leading-snug">
                      {item.title}
                    </h3>
                    <p className="font-ui text-xs sm:text-[14px] md:text-[15px] text-body leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
