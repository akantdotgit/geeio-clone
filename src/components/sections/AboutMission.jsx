import { ABOUT_MISSION_DATA, ABOUT_METRICS_DATA } from '../../data/aboutData';

/**
 * AboutMission — Mission Statement, Dual Editorial Images & Quantitative Metrics Bento
 *
 * Implements:
 * - Split header with editorial typography and negative-tracked display heading
 * - Side-by-side editorial imagery with borderless and shadowless containers (no hover scale)
 * - Data-driven metrics bento with flat color-blocked surface cards
 * - Strict adherence to AGENTS.md tokens (no borders, no shadows, no hover zoom)
 */
export default function AboutMission({
  missionData = ABOUT_MISSION_DATA,
  metricsData = ABOUT_METRICS_DATA,
}) {
  const { tag, headline, narrative, editorialImages } = missionData;

  return (
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-16 md:py-20">
      {/* Split Header: Tag vs Narrative */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4 sm:gap-6 md:gap-8 lg:gap-12 items-start pb-8 sm:pb-12 md:pb-16 pt-2">
        <div className="md:col-span-4 lg:col-span-3 pt-1">
          <span className="font-ui text-sm sm:text-base font-semibold text-accent uppercase tracking-wider md:normal-case md:text-primary md:font-normal block">
            {tag}
          </span>
        </div>
        <div className="md:col-span-8 lg:col-span-9 flex flex-col">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium text-primary tracking-[-1px] sm:tracking-[-2px] leading-tight font-heading">
            {headline}
          </h2>
          <p className="mt-4 sm:mt-6 text-sm sm:text-base md:text-lg text-body max-w-2xl leading-relaxed font-heading">
            {narrative}
          </p>
        </div>
      </div>

      {/* Editorial Images Dual Grid (Borderless, Shadowless, No Hover Scale) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 my-4 sm:my-8">
        {editorialImages.map((img) => (
          <div
            key={img.id}
            className="relative h-64 sm:h-80 md:h-96 rounded-2xl sm:rounded-3xl overflow-hidden bg-surface"
          >
            <img
              alt={img.alt}
              className="w-full h-full object-cover object-center"
              src={img.src}
              loading="lazy"
            />
          </div>
        ))}
      </div>

      {/* Quantitative Metrics Bento (Flat Color-Blocked, Borderless & Shadowless) */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mt-4 sm:mt-8">
        {metricsData.map((metric) => (
          <div
            key={metric.id}
            className="bg-surface rounded-2xl md:rounded-[24px] p-6 sm:p-8 md:p-10 flex flex-col justify-between min-h-[140px] sm:min-h-[160px] md:min-h-[180px]"
          >
            <span className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-[-1px] text-primary mb-8 sm:mb-12 md:mb-16 font-heading">
              {metric.value}
            </span>
            <span className="text-xs sm:text-sm md:text-base text-body font-normal font-ui">
              {metric.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
