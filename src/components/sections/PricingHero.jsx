import { useState, useEffect, useRef } from 'react';
import { Button, SwitchToggle } from '../ui';
import { PRICING_PLANS, PRICING_BENEFITS } from '../../data/pricingData';
import checkCircleSvg from '../../assets/icons/6a6522c65ea1b6c86733b689_b5fd4b4f310fa3950fae3b8112e1c4fb_check.svg';

/**
 * PricingHero — Hero Title, Billing Switcher, Pricing Cards, and Guarantees
 *
 * Implements:
 * - Editorial Display Heading with negative tracking per AGENTS.md
 * - Accessible SwitchToggle ("Monthly" / "Yearly")
 * - 2-tier cards grid (Free & Premium) with single allowed shadow (shadow-card)
 * - Brand botanical leaf icons (single leaf for Free, twin leaves for Premium)
 * - Official Button primitive with text flip animation and focus-visible rings
 * - Guarantee and reassurance badges row
 * - Data-driven mapping from src/data/pricingData.js
 *
 * @param {Object} props
 * @param {Array}  [props.plans] - Pricing plans array (defaults to PRICING_PLANS)
 * @param {Array}  [props.benefits] - Reassurance badges array (defaults to PRICING_BENEFITS)
 * @param {string} [props.title] - Heading text
 * @param {string} [props.billingCycle] - Controlled billing cycle
 * @param {Function} [props.onBillingCycleChange] - Change handler
 * @param {string} [props.className] - Additional wrapper class
 */
export default function PricingHero({
  plans = PRICING_PLANS,
  benefits = PRICING_BENEFITS,
  title = 'Upgrade when you’re hooked',
  billingCycle: controlledBillingCycle,
  onBillingCycleChange,
  className = '',
}) {
  const [internalBillingCycle, setInternalBillingCycle] = useState('Monthly');
  const isControlled = controlledBillingCycle !== undefined;
  const billingCycle = isControlled ? controlledBillingCycle : internalBillingCycle;

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

  const handleBillingCycleChange = (cycle) => {
    if (!isControlled) {
      setInternalBillingCycle(cycle);
    }
    onBillingCycleChange?.(cycle);
  };

  return (
    <section className={`w-full flex flex-col items-center ${className}`.trim()}>
      <div
        ref={containerRef}
        className={`w-full flex flex-col items-center transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        {/* Hero Title */}
        <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-[56px] font-medium tracking-[-1.5px] sm:tracking-[-2px] lg:tracking-[-2.5px] text-center text-primary mb-6 sm:mb-8 px-4 leading-[1.15]">
          {title}
        </h1>

        {/* Billing Period Toggle */}
        <div
          className="flex items-center justify-center gap-2 mb-12 sm:mb-14"
          data-purpose="pricing-switcher"
        >
          <SwitchToggle
            options={['Monthly', 'Yearly']}
            value={billingCycle}
            onChange={handleBillingCycleChange}
          />
        </div>

        {/* Pricing Cards Container */}
        <div
          className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mb-10 sm:mb-12 px-2 sm:px-4 items-stretch"
          data-purpose="pricing-cards-grid"
        >
          {plans.map((plan) => {
            const isPrimary = plan.variant === 'primary' || plan.isPopular;
            const cycleKey = billingCycle.toLowerCase();
            const priceValue =
              typeof plan.price === 'object' && plan.price !== null
                ? (cycleKey === 'yearly' ? plan.price.yearly : plan.price.monthly)
                : plan.price;
            const periodText =
              typeof plan.period === 'object' && plan.period !== null
                ? (plan.period[cycleKey] || plan.period[billingCycle])
                : plan.period;

            return (
              <div
                key={plan.id || plan.name}
                className="bg-surface rounded-2xl sm:rounded-[28px] p-6 sm:p-8 md:p-9 flex flex-col justify-between transition-all"
              >
                <div>
                  {/* Plan Header Pill & Pricing */}
                  <div className="flex items-center justify-between mb-8">
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${
                          isPrimary
                            ? 'bg-primary text-canvas'
                            : 'bg-canvas text-accent'
                        }`}
                      >
                        {isPrimary ? (
                          <svg
                            className="w-5 h-5 text-canvas"
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="1.8"
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                          >
                            <path d="M12 21c-4-4-5-8.5-5-12a5 5 0 0 1 5-5 5 5 0 0 1 5 5c0 3.5-1 8-5 12z" />
                            <path d="M7 9a5 5 0 0 0-5 5c0 3.5 3 6 7 7" />
                            <path d="M17 9a5 5 0 0 1 5 5c0 3.5-3 6-7 7" />
                          </svg>
                        ) : (
                          <svg
                            className="w-5 h-5 text-accent"
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                          >
                            <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
                            <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
                          </svg>
                        )}
                      </div>
                      <span className="font-heading text-xl font-bold text-primary">
                        {plan.name}
                      </span>
                    </div>
                    <div className="text-right">
                      <span className="font-ui text-base font-bold text-primary">
                        ${priceValue}
                      </span>
                      {periodText && (
                        <span className="font-ui text-sm font-medium text-body ml-0.5">
                          {periodText}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Feature List */}
                  <ul className="space-y-4 font-ui text-sm font-medium text-body mb-10 text-left">
                    {plan.features?.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-center gap-3">
                        <img
                          src={checkCircleSvg}
                          alt=""
                          className="w-[18px] h-[18px] shrink-0"
                          aria-hidden="true"
                        />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Plan Action Button */}
                <Button
                  as="a"
                  href={plan.ctaHref || '#'}
                  variant={isPrimary ? 'primary' : 'outline'}
                  className="w-full text-center"
                >
                  {plan.ctaText || 'Get Started'}
                </Button>
              </div>
            );
          })}
        </div>

        {/* Guarantees & Reassurance Row */}
        {benefits && benefits.length > 0 && (
          <div
            className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-8 font-ui text-[13px] sm:text-[14px] font-medium text-body px-4 text-center"
            data-purpose="guarantee-badges"
          >
            {benefits.map((benefit, idx) => (
              <div key={idx} className="flex items-center gap-2">
                <img
                  src={checkCircleSvg}
                  alt=""
                  className="w-4 h-4 shrink-0"
                  aria-hidden="true"
                />
                <span>{benefit}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
