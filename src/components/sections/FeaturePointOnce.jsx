import { useState, useEffect, useRef } from 'react';
import { POINT_ONCE_DATA } from '../../data/featuresData';
import iconPlantId from '../../assets/icons/6a64f207bd9b2222e38f40c7_icon-6.svg';
import iconDiagnosis from '../../assets/icons/6a64f2066b143ef6b0d0308e_icon-7.svg';
import iconCarePlan from '../../assets/icons/6a64f206e994c50ea2068804_icon-8.svg';
import plantStatusPreview from '../../assets/images/6a64f20687226e2462646e68_img-1.webp';
import growthProgressPreview from '../../assets/images/6a64f205e5b1ef263c3a2205_img-2.webp';

const ICON_FALLBACK_MAP = {
  'instant-id': iconPlantId,
  'eco': iconPlantId,
  'ai-diagnosis': iconDiagnosis,
  'clinical_notes': iconDiagnosis,
  'care-plan': iconCarePlan,
  'potted_plant': iconCarePlan,
};

const PREVIEW_FALLBACK_MAP = {
  'plants-status': plantStatusPreview,
  'growth-progress': growthProgressPreview,
};

/**
 * FeaturePointOnce — Feature Section 1: Point Once
 *
 * Implements:
 * - Two-column responsive layout (Text + Feature list on left, Preview cards on right)
 * - Data-driven feature bullets with our local botanical SVG icons
 * - Card container with preview mockups (My plants status, Growth progress)
 * - Exact Geeio typography tokens and botanical gradient background
 *
 * @param {Object} props
 * @param {Object} [props.data=POINT_ONCE_DATA] - Feature section data
 * @param {string} [props.className] - Optional container classes
 */
export default function FeaturePointOnce({
  data = POINT_ONCE_DATA,
  className = '',
}) {
  const { title, description, features, previews } = data;

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
    if (item.icon && typeof item.icon === 'string' && (item.icon.includes('/') || item.icon.startsWith('data:') || item.icon.endsWith('.svg'))) {
      return item.icon;
    }
    return ICON_FALLBACK_MAP[item.icon] || ICON_FALLBACK_MAP[item.id] || item.icon || iconPlantId;
  };

  const resolvePreview = (preview, index) => {
    if (preview.src && typeof preview.src === 'string' && !preview.src.includes('googleusercontent.com')) {
      return preview.src;
    }
    return PREVIEW_FALLBACK_MAP[preview.id] || (index === 0 ? plantStatusPreview : growthProgressPreview) || preview.src;
  };

  return (
    <section ref={containerRef} className={`pb-15 pt-0 px-5 md:pb-20 md:px-7.5 lg:pb-35 ${className}`.trim()}>
      <div className="w-full max-w-[1200px] mx-auto flex flex-col lg:flex-row items-center justify-between gap-y-10 lg:gap-x-10">
        {/* Left Column: Copy & Feature Highlights */}
        <div className={`w-full max-w-none md:max-w-[486px] flex flex-col items-left text-left transition-all duration-700 delay-200 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <h2 className="font-heading text-[2rem] sm:text-4xl md:text-[44px] lg:text-[48px] text-primary mb-4 sm:mb-6 font-medium leading-[1.16] tracking-[-1.5px] lg:tracking-[-2px]">
            {title.includes('\n') ? (
              title.split('\n').map((line, idx) => (
                <span key={idx}>
                  {line}
                  {idx < title.split('\n').length - 1 && <br />}
                </span>
              ))
            ) : (
              title
            )}
          </h2>

          <p className="font-ui text-[15px] md:text-base text-body mb-7 lg:mb-13 max-w-lg leading-normal">
            {description}
          </p>

          <div className="w-full flex flex-col gap-4 lg:gap-7">
            {features.map((item) => {
              const iconSrc = resolveIcon(item);
              return (
                <div key={item.id} className="flex items-center gap-5">
                  <div className="w-14 min-w-14 h-14 rounded-lg bg-surface flex items-center justify-center shrink-0">
                    <img
                      src={iconSrc}
                      alt=""
                      aria-hidden="true"
                      className="w-auto h-auto object-cover"
                    />
                  </div>
                  <div className='flex flex-col gap-1 justify-between'>
                    <h3 className="font-ui text-base text-primary font-medium leading-snug">
                      {item.title}
                    </h3>
                    <p className="font-ui text-[15px] font-normal text-body leading-normal">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right Column: Preview Cards Container with Botanical Gradient */}
        <div className={`relative overflow-hidden bg-linear-to-b from-surface to-surface-alt rounded-2xl lg:rounded-4xl p-5 md:py-11.5 lg:py-21.5 flex flex-col gap-3 items-center justify-center w-full max-w-none md:max-w-[532px] transition-all duration-700 delay-200 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          {previews.map((preview, index) => {
            const previewSrc = resolvePreview(preview, index);
            return (
              <div
                key={preview.id || index}
                className="w-full max-w-none md:max-w-[368px] mx-auto rounded-2xl overflow-hidden bg-canvas"
              >
                <img
                  alt={preview.alt}
                  className="w-full h-auto object-cover"
                  src={previewSrc}
                  loading="lazy"
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
