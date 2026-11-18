import { useState, useEffect, useRef } from 'react';
import { FAQ_ITEMS } from '../../data/faq';

/**
 * Faq — Geeio FAQ Accordion Section
 *
 * Implements:
 * - 2-column layout (Headline on left, FAQ accordion on right)
 * - Smooth scroll-triggered fade reveal animation:
 *     1. Heading wrapper div fades in & gently floats into position
 *     2. FAQ wrapper div follows with a staggered fade reveal
 * - Collapsible expand/collapse animation via grid-template-rows
 * - High-precision consistent SVG plus-to-minus morphing icon:
 *     • Vector-exact 16x16 geometry with unified stroke width & line caps
 *     • Fluid 90° rotational & opacity transition centered at exact origin (8, 8)
 *     • Identical line thickness and length for both '+' and '−' states
 * - Accessible keyboard navigation & ARIA attributes (:focus-visible ring per AGENTS.md)
 * - Data-driven mapping over src/data/faq.js
 *
 * @param {Object} props
 * @param {Array}  [props.items] - Array of FAQ items ({ id, question, answer })
 * @param {string|React.ReactNode} [props.title] - Optional heading override
 * @param {string} [props.className] - Optional section container className
 * @param {string|number} [props.defaultOpenId] - Optional ID of initially open item
 * @param {boolean} [props.allowMultiple=true] - Whether multiple items can be open simultaneously
 */
export default function Faq({
  items = FAQ_ITEMS,
  title,
  className = '',
  defaultOpenId,
  allowMultiple = true,
}) {
  const [openIds, setOpenIds] = useState(() => {
    const initial = new Set();
    if (defaultOpenId) {
      initial.add(defaultOpenId);
    }
    return initial;
  });

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
    setOpenIds((prev) => {
      const next = new Set(allowMultiple ? prev : []);
      if (prev.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  return (
    <section className={`bg-surface py-15 px-5 md:py-20 md:px-7.5 lg:py-35 mx-3 rounded-t-xl md:rounded-t-2xl lg:rounded-t-[20px] ${className}`.trim()}>
      {/* The div just next to the section element tag */}
      <div
        ref={containerRef}
        className="flex flex-col lg:flex-row gap-12 justify-between items-start w-full max-w-[1200px] mx-auto"
      >
        {/* Heading wrapper div — Fade reveal */}
        <div
          className={`w-full lg:w-5/12 text-left transition-all duration-700 delay-200 ease-[cubic-bezier(0.16,1,0.3,1)] ${
            isVisible
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="font-heading text-[32px] sm:text-[40px] lg:text-[48px] font-medium text-primary tracking-[-1px] sm:tracking-[-2px] leading-[1.16]">
            {title || (
              <>
                Questions? We’ve got answers
              </>
            )}
          </h2>
        </div>

        {/* FAQ wrapper div — Staggered fade reveal */}
        <div
          className={`w-full lg:w-7/12 flex flex-col gap-3 sm:gap-3.5 transition-all duration-700 delay-200 ease-[cubic-bezier(0.16,1,0.3,1)] ${
            isVisible
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-8'
          }`}
        >
          {items.map((item, index) => {
            const itemId = item.id || `faq-${index}`;
            const isOpen = openIds.has(itemId);

            return (
              <div
                key={itemId}
                className="group bg-canvas rounded-xl sm:rounded-2xl md:rounded-[20px] px-5 py-4 sm:py-6 cursor-pointer transition-all select-none w-full"
                onClick={() => toggleItem(itemId)}
              >
                <div
                  role="button"
                  tabIndex={0}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${itemId}`}
                  id={`faq-question-${itemId}`}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      toggleItem(itemId);
                    }
                  }}
                  className="flex items-center justify-between font-heading font-medium text-[16px] md:text-[18px] text-primary focus:outline-none focus-visible:outline-2 focus-visible:outline-focus focus-visible:outline-offset-2 rounded-lg"
                >
                  <span>{item.question}</span>

                  {/* Consistent Vector SVG Plus-to-Minus morphing icon */}
                  <span
                    className="flex items-center justify-center w-5 h-5 shrink-0 ml-3 sm:ml-4 text-body group-hover:text-primary transition-colors duration-200"
                    aria-hidden="true"
                  >
                    <svg
                      className="w-4 h-4 sm:w-[18px] sm:h-[18px]"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      {/* Horizontal bar (anchored baseline minus) */}
                      <path
                        d="M3 8H13"
                        stroke="currentColor"
                        strokeWidth="1.75"
                        strokeLinecap="round"
                      />
                      {/* Vertical bar (rotates 90° smoothly into the horizontal bar to form minus) */}
                      <path
                        d="M8 3V13"
                        stroke="currentColor"
                        strokeWidth="1.75"
                        strokeLinecap="round"
                        className="transition-all duration-250 ease-out"
                        style={{
                          transformOrigin: '8px 8px',
                          transform: isOpen ? 'rotate(90deg)' : 'rotate(0deg)',
                          opacity: isOpen ? 0 : 1,
                        }}
                      />
                    </svg>
                  </span>
                </div>

                {/* Collapsible content with smooth grid-template-rows animation */}
                <div
                  id={`faq-answer-${itemId}`}
                  role="region"
                  aria-labelledby={`faq-question-${itemId}`}
                  onClick={(e) => e.stopPropagation()}
                  className={`grid transition-[grid-template-rows,opacity] duration-300 ease-out ${
                    isOpen ? '[grid-template-rows:1fr] opacity-100' : '[grid-template-rows:0fr] opacity-0'
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="pt-3 sm:pt-4 font-heading text-xs sm:text-[14px] text-body leading-relaxed font-normal">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
