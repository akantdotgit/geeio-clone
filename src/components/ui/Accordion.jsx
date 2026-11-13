import { useState } from 'react';

/**
 * src/components/ui/Accordion.jsx
 *
 * Reusable Accordion matching Faq.jsx's exact collapsible architecture:
 *   - Smooth grid-template-rows animation (0fr <-> 1fr)
 *   - High-precision vector SVG plus-to-minus morphing icon with 90° rotation and opacity transition
 *   - Accessible keyboard controls (Enter / Space) & ARIA attributes
 *   - Geeio design tokens from AGENTS.md (font-heading, primary, surface, body, focus ring)
 *
 * @param {Object} props
 * @param {Array<{id?: string|number, question?: string, title?: string, answer?: string, content?: string}>} props.items
 * @param {boolean} [props.allowMultiple=true] - Whether multiple items can be opened simultaneously
 * @param {string|number} [props.defaultOpenId] - Initially opened item ID
 * @param {string} [props.className] - Container wrapper className
 * @param {string} [props.itemClassName] - Custom card styling override
 */
export default function Accordion({
  items = [],
  allowMultiple = true,
  defaultOpenId,
  className = '',
  itemClassName = '',
}) {
  const [openIds, setOpenIds] = useState(() => {
    const initial = new Set();
    if (defaultOpenId !== undefined && defaultOpenId !== null) {
      initial.add(defaultOpenId);
    }
    return initial;
  });

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

  if (!items || items.length === 0) return null;

  return (
    <div className={`space-y-3 ${className}`.trim()} id="faq-accordion">
      {items.map((item, index) => {
        const itemId = item.id !== undefined ? item.id : `faq-${index}`;
        const questionText = item.question || item.title || '';
        const answerText = item.answer || item.content || '';
        const isOpen = openIds.has(itemId);

        return (
          <div
            key={itemId}
            className={`group bg-surface rounded-xl sm:rounded-2xl md:rounded-[20px] px-5 py-4 sm:py-6 cursor-pointer transition-all select-none w-full ${itemClassName}`.trim()}
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
              <span>{questionText}</span>

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
                isOpen
                  ? '[grid-template-rows:1fr] opacity-100'
                  : '[grid-template-rows:0fr] opacity-0'
              }`}
            >
              <div className="overflow-hidden">
                <p className="pt-3 sm:pt-4 font-heading text-xs sm:text-[14px] text-body leading-relaxed font-normal">
                  {answerText}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export { Accordion, Accordion as Faq };
