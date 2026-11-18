import { HAPPIER_FEATURES_DATA } from '../../data/featuresData';
import quoteIconSvg from '../../assets/icons/6a6732707fa09ead28b38ae8_quote-icon-2.svg';

/**
 * FeaturesHappier — "A happier plant life, all in one place" section
 *
 * Implements:
 *   - Display LG negative-tracked heading
 *   - 2 wide top cards (Instant photo diagnosis, Advanced symptom analysis)
 *   - 3 bottom cards (Smart care scheduling, Live expert Q&A, and Dark highlight testimonial card)
 *   - Borderless, shadowless, flat surface color-blocked boxes
 *   - Official asset icons for cards and amber testimonial quote
 */
export default function FeaturesHappier({ data = HAPPIER_FEATURES_DATA }) {
  const { heading, cards, testimonialCard } = data;

  const topCards = cards.slice(0, 2);
  const bottomCards = cards.slice(2, 4);

  return (
    <section
      className="w-full max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 pb-16 sm:pb-24 md:pb-32"
      data-purpose="happier-plant-life-features"
    >
      <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12 md:mb-16">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-primary tracking-[-1.5px] leading-tight font-heading">
          {heading}
        </h2>
      </div>

      <div className="flex flex-col gap-6">
        {/* Top 2 wide feature cards — Flat, borderless, shadowless */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {topCards.map((card) => (
            <div
              key={card.id}
              className="bg-surface rounded-3xl p-6 sm:p-8 md:p-10 flex flex-col justify-between min-h-[260px] sm:min-h-[320px]"
            >
              <div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-primary tracking-tight font-heading">
                  {card.title}
                </h3>
                <p className="text-body text-xs sm:text-sm md:text-base leading-relaxed mt-2.5 sm:mt-3 max-w-md font-heading">
                  {card.description}
                </p>
              </div>
              <div className="pt-6 sm:pt-8">
                <img
                  src={card.icon}
                  alt={card.alt}
                  className="w-7 sm:w-8 h-7 sm:h-8 object-contain"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Bottom 3 feature cards (including featured dark stat card) — Flat, borderless, shadowless */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {bottomCards.map((card) => (
            <div
              key={card.id}
              className="bg-surface rounded-3xl p-6 sm:p-8 flex flex-col justify-between min-h-[250px] sm:min-h-[300px]"
            >
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-primary tracking-tight font-heading">
                  {card.title}
                </h3>
                <p className="text-body text-xs sm:text-sm leading-relaxed mt-2.5 sm:mt-3 font-heading">
                  {card.description}
                </p>
              </div>
              <div className="pt-6 sm:pt-8">
                <img
                  src={card.icon}
                  alt={card.alt}
                  className="w-7 sm:w-8 h-7 sm:h-8 object-contain"
                />
              </div>
            </div>
          ))}

          {/* Featured dark card — Flat, borderless, shadowless */}
          <div className="bg-primary text-canvas rounded-3xl p-6 sm:p-8 flex flex-col justify-between min-h-[250px] sm:min-h-[300px] md:col-span-2 lg:col-span-1">
            <div>
              <div className="text-3xl sm:text-4xl font-bold text-canvas tracking-tight font-heading">
                {testimonialCard.stat}
              </div>
              <div className="text-xs sm:text-sm text-neutral-2 mt-1 font-medium font-ui">
                {testimonialCard.statLabel}
              </div>
            </div>
            <div className="h-px bg-white/10 my-4" />
            <div>
              <div className="mb-2">
                <img src={quoteIconSvg} alt="Quote" className="w-5 h-5 object-contain" />
              </div>
              <p className="text-xs sm:text-sm text-neutral-2 leading-relaxed mt-1.5 font-heading">
                {testimonialCard.quote}
              </p>
              <div className="mt-3.5">
                <div className="text-xs font-semibold text-canvas font-heading">
                  {testimonialCard.author}
                </div>
                <div className="text-[11px] text-muted mt-0.5 font-ui">
                  {testimonialCard.source}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
