import { Link } from 'react-router-dom';
import { Button } from '../ui';
import { THRIVE_FEATURES_DATA } from '../../data/featuresData';
import checkSvg from '../../assets/icons/6a653860558f120d4039f6e8_check.svg';
import iconWater from '../../assets/icons/6a64f205eec212cbe876069c_icon-1.svg';
import iconFertilise from '../../assets/icons/6a64f2087109a67a8957b955_icon-2.svg';

/**
 * FeaturesThrive — "Everything your plants need to thrive" section
 *
 * Implements:
 *   - Display LG negative-tracked heading
 *   - Featured 2-col card (Weekly growth chart + Instant diagnosis checklist & CTA)
 *   - 2-card secondary grid (Personalized reminder card & progress tracker)
 *   - Borderless, shadowless, flat color-blocked cards per AGENTS.md
 *   - Official asset icons for checklist and watering / fertilising reminders
 */
export default function FeaturesThrive({ data = THRIVE_FEATURES_DATA }) {
  const { heading, mainCard, subCards } = data;

  return (
    <section
      className="w-full max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 py-12 sm:py-16 md:py-24"
      data-purpose="plant-thrive-features"
    >
      <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14 md:mb-20">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[56px] font-extrabold text-primary tracking-[-2px] leading-[1.12] whitespace-pre-line font-heading">
          {heading}
        </h2>
      </div>

      <div className="flex flex-col gap-6 sm:gap-8">
        {/* Main 2-column feature card — Flat, borderless, shadowless */}
        <div className="bg-surface rounded-3xl p-5 sm:p-8 md:p-12 grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-12 items-center">
          <div className="lg:col-span-6 bg-canvas rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 relative overflow-hidden flex items-center justify-center">
            <img
              alt={mainCard.chartImg.alt}
              className="w-full h-auto object-contain rounded-xl sm:rounded-2xl max-w-md mx-auto"
              src={mainCard.chartImg.src}
            />
          </div>

          <div className="lg:col-span-6 flex flex-col justify-center lg:pl-4">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-primary mb-3 sm:mb-4 tracking-[-1px] font-heading">
              {mainCard.title}
            </h3>
            <p className="text-body text-sm sm:text-base md:text-lg leading-relaxed mb-6 sm:mb-8 max-w-lg font-heading">
              {mainCard.description}
            </p>

            <ul className="space-y-2.5 sm:space-y-3.5 mb-8 sm:mb-10 text-primary text-xs sm:text-sm md:text-base font-medium font-ui">
              {mainCard.checklist.map((item, index) => (
                <li key={index} className="flex items-center gap-3">
                  <span className="w-5 h-5 rounded-full bg-surface-alt/70 flex items-center justify-center shrink-0 select-none">
                    <img src={checkSvg} alt="Check" className="w-2.5 h-2.5 object-contain" />
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div>
              <Button as={Link} to={mainCard.ctaTo || '/downloads'} variant="primary">
                {mainCard.ctaText}
              </Button>
            </div>
          </div>
        </div>

        {/* 2-column sub-cards grid — Flat, borderless, shadowless */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {/* Sub-card 1: Care made personal with plant care reminder card */}
          <div className="bg-surface rounded-3xl p-5 sm:p-8 md:p-10 flex flex-col justify-between">
            <div className="bg-canvas rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 mb-6 sm:mb-8 flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
              <div className="w-28 h-28 sm:w-36 sm:h-36 shrink-0 flex items-center justify-center">
                <img
                  alt={subCards[0].reminderData.plantImg.alt}
                  className="w-full h-full object-contain"
                  src={subCards[0].reminderData.plantImg.src}
                />
              </div>
              <div className="flex-1 flex flex-col justify-center w-full">
                <h4 className="text-base sm:text-lg font-bold text-primary font-heading">
                  {subCards[0].reminderData.title}
                </h4>
                <p className="text-xs text-body mb-3 sm:mb-4 font-heading">
                  {subCards[0].reminderData.subtitle}
                </p>
                <div className="space-y-2 sm:space-y-2.5">
                  {subCards[0].reminderData.reminders.map((reminder) => (
                    <div
                      key={reminder.id}
                      className="flex items-center gap-3 bg-surface p-2 sm:p-2.5 rounded-xl"
                    >
                      <div className="w-7 sm:w-8 h-7 sm:h-8 rounded-lg bg-surface-alt/70 flex items-center justify-center shrink-0">
                        <img
                          src={reminder.type === 'water' ? iconWater : iconFertilise}
                          alt={reminder.label}
                          className="w-3.5 sm:w-4 h-3.5 sm:h-4 object-contain"
                        />
                      </div>
                      <div>
                        <div className="text-xs font-semibold text-primary font-heading">
                          {reminder.label}
                        </div>
                        <div className="text-[10px] text-muted font-ui">
                          {reminder.schedule}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="px-1 sm:px-2">
              <h3 className="text-xl sm:text-2xl font-bold text-primary mb-2 sm:mb-2.5 tracking-tight font-heading">
                {subCards[0].title}
              </h3>
              <p className="text-body text-xs sm:text-sm md:text-base leading-relaxed font-heading">
                {subCards[0].description}
              </p>
            </div>
          </div>

          {/* Sub-card 2: Instant diagnosis tracker */}
          <div className="bg-surface rounded-3xl p-5 sm:p-8 md:p-10 flex flex-col justify-between">
            <div className="bg-canvas rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 mb-6 sm:mb-8 flex items-center justify-center min-h-[180px] sm:min-h-[220px]">
              <img
                alt={subCards[1].trackerImg.alt}
                className="w-full h-auto object-contain rounded-xl sm:rounded-2xl max-w-sm mx-auto"
                src={subCards[1].trackerImg.src}
              />
            </div>
            <div className="px-1 sm:px-2">
              <h3 className="text-xl sm:text-2xl font-bold text-primary mb-2 sm:mb-2.5 tracking-tight font-heading">
                {subCards[1].title}
              </h3>
              <p className="text-body text-xs sm:text-sm md:text-base leading-relaxed font-heading">
                {subCards[1].description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
