import { useState } from 'react';
import { Button, SwitchToggle } from '../ui';
import { PRICING_PLANS, PRICING_BENEFITS } from '../../data/pricingData';
import checkCircleSvg from '../../assets/icons/6a6522c65ea1b6c86733b689_b5fd4b4f310fa3950fae3b8112e1c4fb_check.svg';
import singleLeafSvg from '../../assets/icons/6a65299405476e6f0c40baba_icon-12.svg';
import doubleLeafSvg from '../../assets/icons/6a6529946c56029a598d65ae_icon-13.svg';

/**
 * Pricing — Geeio Pricing Section
 *
 * Implements:
 * - Editorial display heading with negative tracking
 * - Standalone SwitchToggle ("Monthly" / "Yearly")
 * - Guarantee checklist using brand SVG from src/assets/icons/
 * - Soft rounded-card surface with white inner header boxes
 * - Brand botanical leaf icons (single leaf for Free, twin leaves for Premium)
 * - Outline and solid pill CTA buttons with text flip animations
 * - Full data-driven integration with src/data/pricingData.js
 *
 * @param {Object} props
 * @param {Array}  [props.plans] - Pricing plans array (defaults to PRICING_PLANS)
 * @param {Array}  [props.benefits] - Pricing benefits list (defaults to PRICING_BENEFITS)
 * @param {string|React.ReactNode} [props.title] - Optional heading override
 * @param {string} [props.billingCycle] - Controlled billing cycle ('Monthly' | 'Yearly')
 * @param {Function} [props.onBillingCycleChange] - Callback when billing cycle changes
 * @param {string} [props.className] - Additional classes for the section
 * @param {string} [props.id] - Element ID (defaults to 'pricing-section')
 */
export default function Pricing({
  plans = PRICING_PLANS,
  benefits = PRICING_BENEFITS,
  title,
  billingCycle: controlledBillingCycle,
  onBillingCycleChange,
  className = '',
  id = 'pricing-section',
}) {
  const [internalBillingCycle, setInternalBillingCycle] = useState('Monthly');
  const isControlled = controlledBillingCycle !== undefined;
  const billingCycle = isControlled ? controlledBillingCycle : internalBillingCycle;

  const handleBillingCycleChange = (cycle) => {
    if (!isControlled) {
      setInternalBillingCycle(cycle);
    }
    onBillingCycleChange?.(cycle);
  };

  const renderTitle = () => {
    if (title === false || title === null) return null;
    if (title) return title;
    return (
      <>
        Start free upgrade<br />when you're hooked
      </>
    );
  };

  const titleContent = renderTitle();

  return (
    <section
      className={`w-full max-w-[1200px] mx-auto py-15 px-5 md:py-20 md:px-7.5 lg:py-35 ${className}`.trim()}
      id={id}
    >
      {/* Top Header Row: Heading & Toggle on left, Guarantees on right */}
      <div className="mx-auto w-full max-w-[996px] flex flex-col md:flex-row justify-between gap-4 md:gap-0 text-left mb-10 sm:mb-13">
        {titleContent && (
          <h2 className="font-heading text-[32px] sm:text-4xl md:text-[38px] lg:text-5xl font-medium tracking-[-1.5px] text-primary leading-[1.14]">
            {titleContent}
          </h2>
        )}
        {benefits && benefits.length > 0 && (
          <div className="flex flex-col justify-end gap-3 text-left">
            {benefits.map((benefit, idx) => (
              <div
                key={idx}
                className="flex items-center gap-2.5 text-primary text-sm sm:text-[15px] font-normal"
              >
                <img
                  src={checkCircleSvg}
                  alt=""
                  className="w-[18px] h-[18px] shrink-0"
                  aria-hidden="true"
                />
                <span>{benefit}</span>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Pricing Cards Grid */}
      <div className='mx-auto w-full max-w-[996px]'>
        <SwitchToggle
          options={['Monthly', 'Yearly']}
          value={billingCycle}
          onChange={handleBillingCycleChange}
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 items-stretch w-full pt-10">
          {plans.map((plan) => {
            const isPrimary = plan.variant === 'primary' || plan.isPopular;
            const cycleKey = String(billingCycle).toLowerCase();
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
                className="bg-surface rounded-2xl lg:rounded-4xl p-4 sm:pb-9 flex flex-col justify-between"
              >
                {/* Inner White Header Card */}
                <div className="bg-canvas rounded-xl md:rounded-[16px] lg:rounded-[20px] p-4 md:pb-5 mb-7 flex items-center justify-between">
                  <div className="flex items-center gap-2.5 lg:gap-4">
                    <div
                      className={`w-12.5 min-w-12.5 h-12.5 lg:w-15 lg:min-w-15 lg:h-15 rounded-xl flex items-center justify-center shrink-0 ${isPrimary
                        ? 'bg-primary text-canvas'
                        : 'bg-surface text-surface'
                        }`}
                    >
                      <img
                        src={isPrimary ? doubleLeafSvg : singleLeafSvg}
                        alt={isPrimary ? 'Premium plan' : 'Free plan'}
                        className={isPrimary ? 'w-9 h-auto object-cover' : 'w-7 h-auto object-cover'}
                      />
                    </div>
                    <span className="text-base sm:text-lg font-ui font-medium text-primary tracking-tight">
                      {plan.name}
                    </span>
                  </div>
                  <div className="text-right">
                    <span className="text-base font-ui font-medium text-primary">
                      ${priceValue}
                    </span>
                    {periodText && (
                      <span className="text-base font-ui font-medium text-body">
                        {periodText}
                      </span>
                    )}
                  </div>
                </div>

                <div className="lg:px-5">
                  {/* Features List */}
                  <ul className="space-y-3.5 sm:space-y-4 mb-9 text-left">
                    {plan.features?.map((feature, fIdx) => (
                      <li
                        key={fIdx}
                        className="flex items-center gap-3 text-base text-primary font-normal mb-3.5"
                      >
                        <img
                          src={checkCircleSvg}
                          alt=""
                          className="w-[25px] h-[25px] shrink-0"
                          aria-hidden="true"
                        />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Bottom CTA Pill Button */}
                  <Button
                    as="a"
                    href={plan.ctaHref || '#'}
                    variant={isPrimary ? 'primary' : 'outline'}
                    className={[
                      'w-full !py-4 !px-6 !text-base !font-bold text-center !rounded-full transition-all active:scale-[0.98]',
                      isPrimary
                        ? '!bg-primary hover:!bg-neutral-1 !text-canvas'
                        : '!bg-transparent border !border-primary !text-primary hover:!bg-primary hover:!text-canvas',
                    ].join(' ')}
                  >
                    {plan.ctaText || 'Get Started'}
                  </Button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
