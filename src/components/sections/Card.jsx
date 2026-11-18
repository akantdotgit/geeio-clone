import { Button } from '../ui';

/**
 * Card — Geeio Hero Ticker Card component
 *
 * Renders individual cards used in the HeroCardTicker moving track:
 * 1. `badges` (e.g. Snake plant with botanical condition icons)
 * 2. `cta` (e.g. AI analysis or Diagnose plant with action button)
 * 3. `reminders` (e.g. Plant care reminders with schedule tags)
 *
 * Preserves Tailwind classes and exact design specs from AGENTS.md.
 *
 * @param {Object} props
 * @param {Object} [props.card] - Complete card data object (from HERO_TICKER_CARDS)
 * @param {string} [props.type] - Card type: 'badges' | 'cta' | 'reminders'
 * @param {string} [props.title] - Card title
 * @param {string} [props.description] - Card descriptive text
 * @param {Object|string} [props.image] - Image config { src, alt, fit, containerClassName } or string URL
 * @param {string[]} [props.icons] - Material icon names for 'badges' type
 * @param {Object} [props.cta] - CTA button config { label, href } for 'cta' type
 * @param {Array} [props.reminders] - Reminder items { id, title, schedule, icon }
 * @param {string} [props.className] - Additional classes for card container
 * @param {React.ReactNode} [props.children] - Optional custom children
 */
export default function Card({
  card,
  type,
  title,
  description,
  image,
  icons,
  cta,
  reminders,
  className = '',
  children,
  ...props
}) {
  const cardData = card || {
    type,
    title,
    description,
    image,
    icons,
    cta,
    reminders,
  };

  const cardType =
    cardData.type ||
    (cardData.reminders ? 'reminders' : cardData.cta ? 'cta' : 'badges');
  const cardTitle = cardData.title;
  const cardDesc = cardData.description;

  // Resolve image properties safely
  const imageObj = typeof cardData.image === 'object' ? cardData.image : null;
  const imgSrc = typeof cardData.image === 'string' ? cardData.image : imageObj?.src;
  const imgAlt = imageObj?.alt || cardTitle || 'Plant image';
  const imgFit =
    imageObj?.fit || (cardType === 'reminders' ? 'cover' : 'contain');
  const customContainerClass = imageObj?.containerClassName || '';

  return (
    <div
      className={`bg-surface-container-lowest rounded-2xl p-4 sm:p-5 w-[280px] sm:w-[340px] h-[165px] sm:h-[180px] flex items-center gap-3 sm:gap-4 shrink-0 text-left ${className}`.trim()}
      {...props}
    >
      {/* Card Image */}
      {imgSrc &&
        (imgFit === 'cover' ? (
          <div
            className={`w-[80px] sm:w-[100px] h-[90px] sm:h-[110px] rounded-2xl overflow-hidden shrink-0 bg-surface-container ${customContainerClass}`.trim()}
          >
            <img
              alt={imgAlt}
              className="w-full h-full object-cover"
              src={imgSrc}
              loading="lazy"
            />
          </div>
        ) : (
          <div className="w-[80px] sm:w-[100px] h-[95px] sm:h-[115px] flex items-center justify-center shrink-0">
            <img
              alt={imgAlt}
              className="max-h-[90px] sm:max-h-[110px] w-auto object-contain"
              src={imgSrc}
              loading="lazy"
            />
          </div>
        ))}

      {/* Card Body */}
      <div className="flex-1 min-w-0">
        {cardTitle && (
          <h4 className="font-headline-sm text-[15px] sm:text-[17px] text-on-surface font-bold leading-tight mb-1">
            {cardTitle}
          </h4>
        )}

        {cardDesc && (
          <p
            className={`text-[11px] sm:text-[12px] text-on-surface-variant leading-snug ${
              cardType === 'reminders' ? 'mb-2' : 'mb-2 sm:mb-3'
            }`}
          >
            {cardDesc}
          </p>
        )}

        {/* 1. Badges Variant: Botanical icon indicators */}
        {cardType === 'badges' && cardData.icons && cardData.icons.length > 0 && (
          <div className="flex items-center gap-1.5 sm:gap-2">
            {cardData.icons.map((icon, idx) => (
              <div
                key={idx}
                className="w-7 sm:w-8 h-7 sm:h-8 rounded-xl bg-accent-1 flex items-center justify-center text-primary shrink-0"
              >
                <span className="material-symbols-outlined text-[15px] sm:text-[17px]">
                  {icon}
                </span>
              </div>
            ))}
          </div>
        )}

        {/* 2. CTA Variant: Action button */}
        {cardType === 'cta' && cardData.cta && (
          <Button
            as="a"
            href={cardData.cta.href || '#'}
            variant="primary-sm"
            className="!text-[11px] sm:!text-[12px] !font-semibold !px-4 sm:!px-5 !py-1.5 sm:!py-2 !rounded-full !w-fit !leading-tight !h-auto inline-flex"
          >
            {cardData.cta.label}
          </Button>
        )}

        {/* 3. Reminders Variant: Plant schedule indicators */}
        {cardType === 'reminders' &&
          cardData.reminders &&
          cardData.reminders.length > 0 && (
            <div className="space-y-1.5">
              {cardData.reminders.map((reminder) => (
                <div
                  key={reminder.id || reminder.title}
                  className="flex items-center gap-2 p-1.5 rounded-lg bg-accent-1/70 text-[10px] sm:text-[11px]"
                >
                  <div className="w-5 h-5 rounded-md bg-accent-1 flex items-center justify-center text-primary shrink-0">
                    <span className="material-symbols-outlined text-[12px] sm:text-[13px]">
                      {reminder.icon || 'water_drop'}
                    </span>
                  </div>
                  <div className="min-w-0 leading-tight">
                    <p className="font-bold text-on-surface text-[10px] sm:text-[11px] leading-none">
                      {reminder.title}
                    </p>
                    {reminder.schedule && (
                      <p className="text-[8px] sm:text-[9px] text-on-surface-variant mt-0.5 leading-none">
                        {reminder.schedule}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}

        {children}
      </div>
    </div>
  );
}
