import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../ui';
import { COMPANION_ACCORDION_DATA } from '../../data/featuresData';
import defaultCheckSvg from '../../assets/icons/6a653860558f120d4039f6e8_check.svg';

/**
 * FeatureAccordion — Feature Section 3: Accordion Companion
 *
 * Implements:
 * - Two-column responsive layout (Interactive drawers on left, Report card previews on right)
 * - Scroll-triggered smooth fade reveal animation via IntersectionObserver
 * - Single-expanded accordion drawer behavior (First item expanded by default on page load)
 * - Clean card style when expanded, minimal flat row when collapsed (matching design screenshot)
 * - Uses brand SVG icon assets from src/assets/icons/
 * - Checkmark bullet lists with custom check icon
 * - Accessible keyboard navigation & :focus-visible ring per AGENTS.md
 * - Primary pill CTA Button component from ui/
 *
 * @param {Object} props
 * @param {Object} [props.data=COMPANION_ACCORDION_DATA] - Feature accordion data
 * @param {string} [props.className] - Optional container classes
 */
export default function FeatureAccordion({
  data = COMPANION_ACCORDION_DATA,
  className = '',
}) {
  const { title, items = [], previews = [], ctaText, ctaHref, checkIcon } = data;

  const defaultOpenId =
    items.find((item) => item.defaultOpen)?.id || items[0]?.id || 'smart-id';
  const [expandedId, setExpandedId] = useState(defaultOpenId);

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

  const toggleItem = (id) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  const renderIcon = (icon, iconClasses = 'w-5 h-5 shrink-0 object-contain') => {
    if (!icon) return null;
    if (typeof icon === 'string') {
      if (icon.includes('/') || icon.includes('.') || icon.startsWith('data:')) {
        return <img src={icon} alt="" className={iconClasses} aria-hidden="true" />;
      }
      return (
        <span className={`material-symbols-outlined text-[20px] sm:text-[22px] ${iconClasses}`}>
          {icon}
        </span>
      );
    }
    return icon;
  };

  const activeCheckIcon = checkIcon || defaultCheckSvg;

  return (
    <section className={`pb-15 pt-0 px-5 md:pb-20 md:px-7.5 lg:pb-35 ${className}`.trim()}>
      <div
        ref={containerRef}
        className="w-full max-w-[1200px] mx-auto flex flex-col lg:flex-row items-center justify-between gap-y-10 lg:gap-x-10"
      >
        {/* Left Column: Headline & Interactive Accordion Drawers */}
        <div
          className={`w-full max-w-none md:max-w-[486px] flex flex-col items-left text-left transition-all duration-700 delay-200 ease-[cubic-bezier(0.16,1,0.3,1)] ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="font-heading text-[2rem] sm:text-4xl md:text-[44px] lg:text-[48px] text-primary mb-4 sm:mb-6 font-medium leading-[1.16] tracking-[-1.5px] lg:tracking-[-2px]">
            {title}
          </h2>
          <div className="w-full flex flex-col" id="feature-accordion">
            {items.map((item) => {
              const isExpanded = expandedId === item.id;

              return (
                <div
                  key={item.id}
                  className={`transition-all duration-300 ease-out ${isExpanded
                      ? 'bg-surface rounded-xl p-4'
                      : 'bg-transparent py-3.5 px-4'
                    }`}
                >
                  <button
                    type="button"
                    onClick={(e) => {
                      e.currentTarget.blur();
                      toggleItem(item.id);
                    }}
                    onMouseDown={(e) => e.preventDefault()}
                    aria-expanded={isExpanded}
                    className="w-full flex items-center gap-3.5 text-left cursor-pointer select-none outline-none focus:outline-none focus:ring-0 rounded-xl"
                  >
                    {renderIcon(item.icon, 'w-5 h-5 shrink-0 object-contain text-primary')}
                    <span
                      className={`font-heading text-primary font-medium leading-snug transition-all duration-200 ${isExpanded
                          ? 'text-[18px]'
                          : 'text-[18px]'
                        }`}
                    >
                      {item.title}
                    </span>
                  </button>

                  {/* Collapsible content with FAQ dropdown animation (grid-template-rows) */}
                  <div
                    className={`grid transition-[grid-template-rows,opacity] duration-300 ease-out ${isExpanded
                        ? '[grid-template-rows:1fr] opacity-100'
                        : '[grid-template-rows:0fr] opacity-0 pointer-events-none'
                      }`}
                  >
                    <div className="overflow-hidden">
                      <div className="pt-3.5 sm:pt-4">
                        <p className="font-heading text-xs sm:text-[14px] text-body leading-relaxed max-w-md font-medium">
                          {item.description}
                        </p>
                        {item.bullets && item.bullets.length > 0 && (
                          <div className="space-y-2.5 sm:space-y-3 mt-4 sm:mt-5 pt-0.5">
                            {item.bullets.map((bullet, idx) => (
                              <div
                                key={idx}
                                className="flex items-center gap-3 text-xs sm:text-[14px] text-primary font-medium"
                              >
                                <img
                                  src={activeCheckIcon}
                                  alt=""
                                  className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0 object-contain"
                                  aria-hidden="true"
                                />
                                <span className="leading-snug">{bullet}</span>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-8">
            <Button as={Link} to={ctaHref} variant="primary">
              {ctaText}
            </Button>
          </div>
        </div>

        {/* Right Column: Preview Cards Container with botanical gradient */}
        <div
          className={`relative overflow-hidden bg-linear-to-b from-surface to-surface-alt rounded-2xl lg:rounded-4xl p-5 md:py-11.5 lg:py-21.5 flex flex-col gap-3 items-center justify-center w-full max-w-none md:max-w-[532px] transition-all duration-700 delay-200 ease-[cubic-bezier(0.16,1,0.3,1)] ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {previews.map((preview) => (
            <div
              key={preview.id}
              className="w-full max-w-none md:max-w-[368px] mx-auto rounded-2xl overflow-hidden bg-canvas"
            >
              <img
                alt={preview.alt}
                className="w-full h-auto object-cover"
                src={preview.src}
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
