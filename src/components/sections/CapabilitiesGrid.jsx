import { useState, useRef, useEffect } from 'react';
import { COMPLIANCE_BADGES, CORE_CAPABILITIES } from '../../data/featuresData';
import iconReminders from '../../assets/icons/6a65e82dca97e39b2022781a_icon-17.svg';
import iconChecker from '../../assets/icons/6a65e82de3f95147b7d9996f_icon-18.svg';
import iconCare from '../../assets/icons/6a65e82b6a5afe2ac4069ed8_icon-19.svg';
import iconAskAi from '../../assets/icons/6a65e82b68a1aa80970ecd09_icon-20.svg';

import iconIsoSvg from '../../assets/icons/6a65214d0482171b55fe548e_icon-9.svg';
import iconSoc2Svg from '../../assets/icons/6a65214d6c56029a598c44ba_icon-10.svg';
import iconGdprSvg from '../../assets/icons/6a65214df8fe95d8c07a633a_icon-11.svg';

const ICON_FALLBACK_MAP = {
  bell: iconReminders,
  'unlimited-reminders': iconReminders,
  search: iconChecker,
  'advance-checker': iconChecker,
  plant: iconCare,
  calendar: iconCare,
  'care-reminders': iconCare,
  sparkles: iconAskAi,
  'ask-ai': iconAskAi,
};

const BADGE_FALLBACK_MAP = {
  'iso-27001': iconIsoSvg,
  'soc-2': iconSoc2Svg,
  'gdpr': iconGdprSvg,
};

/**
 * CapabilitiesGrid — Capabilities / Grid Section (sm:grid-cols-2)
 *
 * Implements:
 * - Headline with negative tracking matching the design screenshot
 * - Trust & compliance badges (ISO 27001, SOC 2 Type II, GDPR) flat white pills
 * - 4-card 2-column grid using our Geeio brand SVG icons
 * - Flat color-blocking architecture without shadows or borders
 * - Data-driven mapping from CORE_CAPABILITIES and COMPLIANCE_BADGES
 *
 * @param {Object} props
 * @param {Array} [props.capabilities=CORE_CAPABILITIES] - 4 capability items
 * @param {Array} [props.badges=COMPLIANCE_BADGES] - Compliance badges
 * @param {string} [props.className] - Optional section classes
 */
export default function CapabilitiesGrid({
  capabilities = CORE_CAPABILITIES,
  badges = COMPLIANCE_BADGES,
  className = '',
}) {
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

  const resolveIcon = (item) => {
    if (
      item.icon &&
      typeof item.icon === 'string' &&
      (item.icon.includes('/') ||
        item.icon.startsWith('data:') ||
        item.icon.endsWith('.svg') ||
        item.icon.endsWith('.png') ||
        item.icon.endsWith('.webp'))
    ) {
      return item.icon;
    }
    return ICON_FALLBACK_MAP[item.icon] || ICON_FALLBACK_MAP[item.id] || item.icon || iconReminders;
  };

  const resolveBadgeSrc = (badge) => {
    if (
      badge.src &&
      typeof badge.src === 'string' &&
      (badge.src.includes('/') ||
        badge.src.startsWith('data:') ||
        badge.src.endsWith('.svg') ||
        badge.src.endsWith('.png') ||
        badge.src.endsWith('.webp'))
    ) {
      return badge.src;
    }
    return BADGE_FALLBACK_MAP[badge.id] || badge.src || iconIsoSvg;
  };

  return (
    <section
      className={`py-15 px-5 md:py-20 md:px-7.5 lg:py-35 mx-3 bg-surface rounded-xl md:rounded-2xl lg:rounded-[20px] ${className}`.trim()}
    >
      {/* Centered Headline & Compliance Badges */}
      <div
        ref={containerRef}
        className={`w-full max-w-[1200px] mx-auto flex flex-col items-center gap-10 md:gap-13 text-center transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <div className="w-full max-w-[490px] lg:max-w-[590px] flex flex-col mx-auto gap-8">
          <div className='w-full max-w-[516px] mx-auto flex flex-col gap-4'>
            <h2 className="font-heading text-[2rem] sm:text-4xl md:text-[44px] lg:text-[48px] text-primary font-medium leading-[1.16] tracking-[-1.5px] lg:tracking-[-2px]">
              Everything your<br />plants need, in one app
            </h2>
            <p className="text-body text-[15px] md:text-base leading-relaxed max-w-2xl mx-auto font-heading">
              Keep every plant thriving with personalised AI care plans, smart watering reminders, and light and
              humidity guidance made for your space. Catch diseases and pests early.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {badges.map((badge) => (
              <div
                key={badge.id}
                className="w-full max-w-43 justify-center px-3 py-2 rounded-full bg-canvas flex items-center md:justify-around gap-3 select-none"
              >
                <img
                  alt={badge.label}
                  className="max-w-full inline-block object-cover shrink-0"
                  src={resolveBadgeSrc(badge)}
                  loading="lazy"
                />
                <span className="font-heading text-lg font-medium text-primary tracking-[-0.2px] whitespace-nowrap">
                  {badge.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* 4 Capabilities 2-Column Grid — borderless, shadowless, flat white on surface */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left w-full">
          {capabilities.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl lg:rounded-4xl p-5 md:p-8 flex flex-col justify-between"
            >
              <div className='flex flex-col gap-5 md:gap-10 lg:gap-25'>
                <div className="w-12 sm:w-14 h-12 sm:h-14 flex items-center justify-start">
                  <img
                    src={resolveIcon(item)}
                    alt={item.title}
                    className="w-12 sm:w-13 h-12 sm:h-13 object-cover"
                  />
                </div>
                <div className='flex flex-col gap-2 lg:gap-2.5'>
                  <h3 className="font-heading text-lg md:text-[20px] text-primary font-medium tracking-[-0.5px]">
                    {item.title}
                  </h3>
                  <p className="font-ui text-[15px] md:text-base text-body leading-5.5 md:leading-relaxed font-normal">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
