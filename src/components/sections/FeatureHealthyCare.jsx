import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../ui';
import { HEALTHY_CARE_DATA } from '../../data/featuresData';
import checkIconSvg from '../../assets/icons/6a653860558f120d4039f6e8_check.svg';
import defaultScannerImg from '../../assets/images/6a64f2062b5d37745f8122d5_phone-2.webp';
import defaultPlantImg from '../../assets/images/6a64f2053c08fde8e74b7975_plant-3.webp';

/**
 * FeatureHealthyCare — Feature Section 2: Healthy Care
 *
 * Implements:
 * - Two-column responsive layout (Interactive phone mockup + floating metrics badge on left, Copy & CTA on right)
 * - Data-driven checklist of benefits using Geeio brand SVG check icon from assets
 * - Floating badge with plant stats and Peace lily preview
 * - Button component from ui/
 * - Exact styling matching Geeio design system specifications
 *
 * @param {Object} props
 * @param {Object} [props.data=HEALTHY_CARE_DATA] - Healthy care data
 * @param {string} [props.className] - Optional container classes
 */
export default function FeatureHealthyCare({
  data = HEALTHY_CARE_DATA,
  className = '',
}) {
  const { title, description, scannerImg, badge, checklist, ctaText, ctaHref } =
    data;

  const scannerImgSrc = scannerImg?.src || defaultScannerImg;
  const plantImgSrc = badge?.plantImg?.src || defaultPlantImg;

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

  return (
    <section ref={containerRef} className={`pb-15 pt-0 px-5 md:pb-20 md:px-7.5 lg:pb-35 ${className}`.trim()}>
      <div className="w-full max-w-[1200px] mx-auto flex flex-col lg:flex-row items-center justify-between gap-y-10 lg:gap-x-10">
        {/* Left Column: Phone Mockup & Floating Badge */}
        <div className={`bg-linear-to-b from-surface to-surface-alt px-5 pt-20.5 rounded-2xl lg:rounded-4xl w-full max-w-none md:max-w-[532px] relative flex items-end justify-center overflow-hidden order-2 transition-all duration-700 delay-200 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="flex items-center justify-center w-full max-w-[300px] mx-auto -mb-17.5 lg:mb-0">
            {/* Phone Mockup */}
            <img
              alt={scannerImg?.alt || 'Phone plant scanner'}
              className="w-auto h-auto object-cover relative z-10"
              src={scannerImgSrc}
              loading="lazy"
            />

            {/* Floating Metric Badge */}
            <div className="w-[268px] h-[158px] lg:h-[168px] flex items-center absolute top-5 right-5 lg:top-12.5 lg:right-11 z-20 bg-canvas rounded-2xl pt-2 pl-4 pr-2 pb-0 shadow-[0_12px_32px_rgba(18,59,23,0.10)] gap-5 text-left">
              <div className="w-full max-w-[98px] flex flex-col gap-5 md:gap-8 lg:gap-16">
                <div>
                  <p className="font-heading text-base font-bold text-primary leading-tight">
                    {badge?.title}
                  </p>
                  <p className="font-ui text-base text-body">
                    {badge?.subtitle}
                  </p>
                </div>
                <div className="flex items-center gap-6">
                  {badge?.stats?.map((stat, idx) => (
                    <div key={idx}>
                      <p className="font-heading text-[13px] sm:text-[14px] font-bold text-primary leading-none">
                        {stat.value}
                      </p>
                      <p className="font-ui text-[10px] sm:text-[11px] text-body">
                        {stat.label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="pb-2 lg:pb-0">
                <img
                  alt={badge?.plantImg?.alt || 'Peace lily'}
                  className="w-auto object-contain"
                  src={plantImgSrc}
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Right Column (order-1 lg:order-2): Copy & Checklist */}
        <div className={`w-full max-w-none md:max-w-[486px] flex flex-col items-start text-left lg:pl-4 order-1 lg:order-2 transition-all duration-700 delay-200 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-[46px] lg:text-[48px] text-primary font-medium leading-[1.14] tracking-[-1.5px] lg:tracking-[-2px] mb-4 sm:mb-6">
            {title && title.includes('\n') ? (
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

          <p className="font-ui text-sm sm:text-base md:text-[16px] text-body leading-[1.65] mb-7 sm:mb-7 max-w-lg">
            {description}
          </p>

          <div className="space-y-3.5 sm:space-y-4 mb-8 sm:mb-7 w-full">
            {checklist?.map((item, idx) => (
              <div key={idx} className="flex items-center gap-3 sm:gap-3.5">
                <img
                  src={checkIconSvg}
                  alt=""
                  className="w-4 h-4 shrink-0 object-contain"
                  aria-hidden="true"
                />
                <span className="font-ui text-sm sm:text-[15px] md:text-base text-primary font-normal leading-snug">
                  {item}
                </span>
              </div>
            ))}
          </div>

          <Button as={Link} to={ctaHref} variant="primary">
            {ctaText}
          </Button>
        </div>
      </div>
    </section>
  );
}
