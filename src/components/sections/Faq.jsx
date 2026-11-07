import { FAQ_ITEMS } from '../../data/faq';

/**
 * Faq — Geeio FAQ Accordion Section
 *
 * Implements:
 * - 2-column layout (Headline on left, FAQ accordion on right)
 * - Data-driven accordion mapping over src/data/faq.js
 * - Semantic <details> and <summary> with rotate-45 toggle icon
 * - Meets AGENTS.md design tokens & accessibility requirements (:focus-visible ring)
 * - Preserves Stitch Tailwind classes from export/home.html
 *
 * @param {Object} props
 * @param {Array}  [props.items] - Array of FAQ items ({ id, question, answer })
 * @param {string|React.ReactNode} [props.title] - Optional heading override
 * @param {string} [props.className] - Optional section container className
 */
export default function Faq({
  items = FAQ_ITEMS,
  title,
  className = '',
}) {
  return (
    <section className={`py-14 sm:py-20 md:py-32 w-full ${className}`.trim()}>
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-start max-w-[1100px] mx-auto w-full px-5 sm:px-[30px] lg:px-0">
        <div className="w-full lg:w-5/12 text-left pt-0 lg:pt-3">
          <h2 className="font-headline-lg text-2xl sm:text-4xl md:text-5xl lg:text-[44px] font-bold text-neutral-900 tracking-tight leading-[1.15]">
            {title || (
              <>
                Questions? We’ve<br />got answers
              </>
            )}
          </h2>
        </div>
        <div className="w-full lg:w-7/12 flex flex-col gap-3 sm:gap-3.5">
          {items.map((item, index) => (
            <details
              key={item.id || index}
              className="group bg-surface-container-lowest rounded-2xl md:rounded-[1.35rem] px-5 sm:px-6 py-4 sm:py-5 shadow-xs border border-black/5 cursor-pointer hover:shadow-sm transition-shadow list-none select-none w-full"
            >
              <summary className="list-none flex items-center justify-between font-medium text-sm sm:text-[16px] md:text-[17px] text-neutral-800 focus:outline-none focus-visible:outline-2 focus-visible:outline-focus focus-visible:outline-offset-2 rounded-lg">
                <span>{item.question}</span>
                <span
                  className="material-symbols-outlined text-[18px] sm:text-[20px] text-neutral-600 shrink-0 ml-3 font-normal transition-transform duration-200 group-open:rotate-45"
                  aria-hidden="true"
                >
                  add
                </span>
              </summary>
              <p className="mt-3 sm:mt-4 text-xs sm:text-[14px] text-neutral-600 leading-relaxed font-normal">
                {item.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
