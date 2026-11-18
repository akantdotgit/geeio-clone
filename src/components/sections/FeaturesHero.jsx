import { Link } from 'react-router-dom';
import { Button } from '../ui';
import { FEATURES_HERO_DATA } from '../../data/featuresData';
import ratingStarSvg from '../../assets/icons/6a64f2356c56029a5984a5f6_rating.svg';
import playIconSvg from '../../assets/icons/6a619d997ef351a3e043c01c_play-button-2.svg';
import iconWaterSchedule from '../../assets/icons/6a64f20870373f8031638d5a_icon-3.svg';
import iconPruning from '../../assets/icons/6a64f20744e4024971da0f76_icon-4.svg';
import iconSunlight from '../../assets/icons/6a64f2078ade88f1ef969690_icon-5.svg';

/**
 * FeaturesHero — Geeio Features Hero Section
 *
 * Implements:
 *   - Editorial Display XL Heading in Jakarta Sans with negative tracking
 *   - Balanced body copy
 *   - Download primary pill CTA & Watch Demo pill CTA (borderless, shadowless)
 *   - Reviewer avatars & 5 rating stars using official asset rating.svg
 *   - Mobile app interface mockup with flat borderless & shadowless floating diagnosis card
 *   - Official asset icons for play button, watering, pruning, and sunlight
 */
export default function FeaturesHero({ data = FEATURES_HERO_DATA }) {
  const { title, description, ctaPrimary, ctaSecondary, socialProof, mockup } = data;

  return (
    <section className="flex-grow flex items-center justify-center pt-8 sm:pt-12 md:pt-16 pb-0 px-4 sm:px-8 lg:px-14 max-w-7xl mx-auto w-full overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-end w-full">
        {/* Left Hero Copy */}
        <div
          className="lg:col-span-6 lg:pr-6 flex flex-col justify-between self-stretch text-center lg:text-left pt-6 sm:pt-10 lg:pt-14 pb-8 sm:pb-10 lg:pb-12"
          data-purpose="hero-copy"
        >
          <div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[64px] font-medium text-primary tracking-[-2px] lg:tracking-[-2.5px] leading-[1.12] mb-5 sm:mb-6 whitespace-pre-line font-heading">
              {title}
            </h1>
            <p className="text-body text-base sm:text-lg sm:text-[19px] leading-relaxed max-w-md mx-auto lg:mx-0 mb-8 sm:mb-9 font-heading">
              {description}
            </p>

            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-4">
              <Button
                as={Link}
                to={ctaPrimary.to || '/downloads'}
                variant="primary"
                className="w-full sm:w-auto"
              >
                {ctaPrimary.label}
              </Button>
              <Button
                type="button"
                variant="demo"
                className="w-full sm:w-auto"
                icon={
                  <span className="w-5 h-5 rounded-md bg-primary text-canvas flex items-center justify-center pl-0.5 select-none shrink-0">
                    <img
                      src={playIconSvg}
                      alt="Play"
                      className="w-2.5 h-2.5 object-contain"
                    />
                  </span>
                }
              >
                {ctaSecondary.label}
              </Button>
            </div>
          </div>

          <div
            className="flex flex-col items-center lg:items-start gap-2 pt-12 lg:pt-0"
            data-purpose="social-proof"
          >
            <div className="flex items-center -space-x-2">
              {socialProof.avatars.map((avatar) => (
                <img
                  key={avatar.id}
                  alt={avatar.alt}
                  src={avatar.src}
                  className="w-8 h-8 rounded-full border-2 border-white object-cover shadow-xs"
                />
              ))}
            </div>
            <div className="flex items-center gap-2 mt-1">
              <div className="flex items-center gap-0.5 shrink-0 select-none">
                {[...Array(5)].map((_, i) => (
                  <img
                    key={i}
                    src={ratingStarSvg}
                    alt="Star"
                    className="w-3.5 h-3.5 object-contain"
                  />
                ))}
              </div>
              <span className="text-xs sm:text-sm font-semibold text-primary font-ui">
                {socialProof.ratingText}
              </span>
            </div>
          </div>
        </div>

        {/* Right Hero Mockup Showcase */}
        <div
          className="lg:col-span-6 relative flex justify-center lg:justify-end items-end pt-6 sm:pt-10 px-2 sm:px-0"
          data-purpose="hero-mockup-showcase"
        >
          <div className="relative w-full max-w-[280px] sm:max-w-[340px] md:max-w-[390px] lg:max-w-[420px] z-10 select-none mx-auto lg:mr-0">
            <img
              alt={mockup.alt}
              className="w-full h-auto object-contain align-bottom block"
              src={mockup.phoneImg}
            />

            {/* Floating Diagnosis Card */}
            <div
              className="absolute top-[26%] sm:top-[28%] -left-4 sm:-left-16 md:-left-24 lg:-left-28 w-[200px] sm:w-[240px] md:w-[260px] bg-white rounded-2xl p-3 sm:p-4 shadow-[0_16px_36px_-10px_rgba(28,55,34,0.14)] z-20"
              data-purpose="feature-diagnosis-card"
            >
              <div className="flex items-start gap-2.5 sm:gap-3">
                <div className="w-12 sm:w-16 h-16 sm:h-20 shrink-0 flex items-center justify-center overflow-hidden">
                  <img
                    alt={mockup.diagnosisCard.plantName}
                    className="w-full h-full object-contain"
                    src={mockup.diagnosisCard.plantImg}
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="text-xs sm:text-[14px] font-bold text-primary leading-snug font-heading">
                    {mockup.diagnosisCard.plantName}
                  </h4>
                  <p className="text-[9px] sm:text-[10px] text-body leading-tight mt-0.5 sm:mt-1 line-clamp-3 font-heading">
                    {mockup.diagnosisCard.description}
                  </p>
                  <div className="flex items-center gap-1 sm:gap-1.5 mt-2">
                    <button
                      type="button"
                      className="w-5 sm:w-6 h-5 sm:h-6 rounded-md bg-[#f6f7f6] flex items-center justify-center hover:bg-[#e4efe0] transition-colors focus-ring cursor-pointer"
                      title="Watering Schedule"
                      aria-label="Watering Schedule"
                    >
                      <img
                        src={iconWaterSchedule}
                        alt="Watering Schedule"
                        className="w-3 sm:w-3.5 h-3 sm:h-3.5 object-contain"
                      />
                    </button>
                    <button
                      type="button"
                      className="w-5 sm:w-6 h-5 sm:h-6 rounded-md bg-[#f6f7f6] flex items-center justify-center hover:bg-[#e4efe0] transition-colors focus-ring cursor-pointer"
                      title="Pruning"
                      aria-label="Pruning"
                    >
                      <img
                        src={iconPruning}
                        alt="Pruning"
                        className="w-3 sm:w-3.5 h-3 sm:h-3.5 object-contain"
                      />
                    </button>
                    <button
                      type="button"
                      className="w-5 sm:w-6 h-5 sm:h-6 rounded-md bg-[#f6f7f6] flex items-center justify-center hover:bg-[#e4efe0] transition-colors focus-ring cursor-pointer"
                      title="Sunlight Requirement"
                      aria-label="Sunlight Requirement"
                    >
                      <img
                        src={iconSunlight}
                        alt="Sunlight Requirement"
                        className="w-3 sm:w-3.5 h-3 sm:h-3.5 object-contain"
                      />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
