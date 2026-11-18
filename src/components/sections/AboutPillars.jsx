import { ABOUT_PILLARS_DATA } from '../../data/aboutData';

/**
 * AboutPillars — Core Pillars (AI Plant Care) Section
 *
 * Implements:
 * - Data-driven pillar cards mapped from src/data/aboutData.js
 * - Authentic brand SVG icons from assets
 * - Negative-tracked display heading matching Geeio design tokens
 * - Borderless and shadowless flat surface cards (static, no hover translation)
 * - Accessible and responsive 3-column layout
 */
export default function AboutPillars({ data = ABOUT_PILLARS_DATA }) {
  const { title, pillars } = data;

  return (
    <section className="w-full py-12 sm:py-16 md:py-24 my-4 sm:my-8 bg-canvas">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto pb-8 sm:pb-12 md:pb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium text-primary tracking-[-1px] sm:tracking-[-2px] leading-tight font-heading">
            {title}
          </h2>
        </div>

        {/* 3 Pillars Grid (Borderless, Shadowless, No Hover Lift) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {pillars.map((pillar) => (
            <div
              key={pillar.id}
              className="bg-surface rounded-2xl md:rounded-[24px] p-6 sm:p-8 lg:p-10 flex flex-col items-start"
            >
              {/* Botanical Accent Icon Bubble */}
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-surface-alt flex items-center justify-center mb-6 sm:mb-8 shrink-0">
                <img
                  src={pillar.icon}
                  alt={pillar.iconAlt || pillar.title}
                  className="w-6 h-6 sm:w-7 sm:h-7 object-contain"
                />
              </div>

              <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-primary font-heading">
                {pillar.title}
              </h3>

              <p className="mt-2 sm:mt-3 text-xs sm:text-sm md:text-base text-body leading-relaxed font-heading">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
