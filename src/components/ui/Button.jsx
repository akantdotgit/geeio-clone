import { useState, useRef } from 'react';

/**
 * Button — Geeio UI primitive
 *
 * Implements:
 * 1. `primary` (Pill button - Hero, Features, Support)
 *    - Resting: Dark #0E160F fill, white text, Plus Jakarta Sans bold 16px, pill rounded-full
 *    - Hover: Neutral-1 (#222222) background (not green!), text flip animation, no translation
 *
 * 2. `outline` (Pill button with border - Pricing Free plan)
 *    - Resting: Transparent fill, 1px solid #0E160F border, dark text
 *    - Hover: Fills with dark #0E160F, text flips and turns white, no translation
 *
 * 3. `white` (White pill on dark surfaces - Footer CTA "Book Your Appointment")
 *    - Resting: Pure white fill, dark #0E160F text
 *    - Hover: Subtle surface hover, text flips, no translation
 *
 * 4. `demo` (Watch Demo pill with video/play icon)
 *    - Resting: Pure white fill, #505851 text, subtle border
 *    - Hover: Only text changes to accent (#317039), icon does NOT change, no text flip, no translation
 *
 * 5. `primary-sm` (Compact navbar / card CTA)
 *    - Resting: Dark #0E160F fill, Inter font-bold 14px, rounded-full
 *    - Hover: Neutral-1 (#222222) background, text flip animation, no translation
 */

const BASE_STYLES = [
  'group/btn relative inline-flex items-center justify-center gap-2.5',
  'cursor-pointer select-none',
  'transition-colors duration-200 ease-out',
  'disabled:opacity-60 disabled:pointer-events-none',
  'focus:outline-none',
].join(' ');

const VARIANTS = {
  /** 1. Primary dark pill */
  primary: [
    'bg-primary text-canvas',
    'font-heading text-base font-bold leading-tight',
    'px-7 py-4 rounded-full',
    'hover:bg-neutral-1 active:scale-[0.98]',
  ].join(' '),

  /** 2. Outline pill (Get Started) */
  outline: [
    'bg-transparent border border-primary text-primary',
    'font-heading text-base font-bold leading-tight',
    'px-7 py-4 rounded-full',
    'hover:bg-primary hover:text-canvas hover:border-primary active:scale-[0.98]',
  ].join(' '),

  /** 3. Watch Demo pill button */
  demo: [
    'bg-canvas border-0 shadow-none',
    'font-heading text-base font-semibold leading-tight',
    'px-7 py-4 rounded-full',
    'active:scale-[0.98]',
  ].join(' '),

  /** 4. White pill on dark surface (Footer CTA) */
  white: [
    'bg-canvas text-primary',
    'font-heading text-base font-bold leading-tight',
    'px-6 py-4 rounded-full',
    'hover:bg-surface active:scale-[0.98]',
  ].join(' '),

  /** 5. Compact pill (Navbar CTA) */
  'primary-sm': [
    'bg-primary text-canvas',
    'font-heading text-sm font-semibold leading-none',
    'px-5 py-2.5 rounded-full',
    'hover:bg-neutral-1 active:scale-[0.98]',
  ].join(' '),
};

export default function Button({
  variant = 'primary',
  as: Tag = 'button',
  icon,
  className = '',
  flip = true,
  children,
  ...props
}) {
  const [isKeyboardFocused, setIsKeyboardFocused] = useState(false);
  const isMouseDownRef = useRef(false);

  const handleMouseDown = (e) => {
    isMouseDownRef.current = true;
    props.onMouseDown?.(e);
  };

  const handleFocus = (e) => {
    if (!isMouseDownRef.current) {
      setIsKeyboardFocused(true);
    }
    isMouseDownRef.current = false;
    props.onFocus?.(e);
  };

  const handleBlur = (e) => {
    setIsKeyboardFocused(false);
    isMouseDownRef.current = false;
    props.onBlur?.(e);
  };

  const variantClass = VARIANTS[variant] ?? VARIANTS.primary;
  const isDemo = variant === 'demo';

  return (
    <Tag
      onMouseDown={handleMouseDown}
      onFocus={handleFocus}
      onBlur={handleBlur}
      className={[
        BASE_STYLES,
        variantClass,
        isKeyboardFocused ? 'ring-2 ring-focus ring-offset-2' : '',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
      {...props}
    >
      {/* Icon: for Watch demo, color remains fixed and doesn't change on hover */}
      {icon && <span className="inline-flex shrink-0 text-body">{icon}</span>}

      {/* Watch demo: direct text turning accent on hover, no flip */}
      {isDemo ? (
        <span className="text-body transition-colors duration-200 group-hover/btn:text-accent font-inherit">
          {children}
        </span>
      ) : !flip ? (
        <span className="font-inherit">{children}</span>
      ) : (
        /* All other buttons: signature vertical text flip animation */
        <span className="relative inline-flex flex-col h-[1.25em] overflow-hidden leading-tight font-inherit">
          <span className="inline-block transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover/btn:-translate-y-full font-inherit">
            {children}
          </span>
          <span
            aria-hidden="true"
            className="absolute top-full left-0 inline-block transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover/btn:-translate-y-full font-inherit"
          >
            {children}
          </span>
        </span>
      )}
    </Tag>
  );
}

/**
 * SwitchToggle — Pricing Switch Toggle ("Monthly" / "Yearly")
 *
 * Matches the user screenshot:
 * - Two rounded buttons side by side with a small gap
 * - Active: Deep botanical green (#276332), rounded-xl, white text, medium weight
 * - Inactive: Light grey/surface (#F4F6F4), rounded-xl, dark neutral text, medium weight
 * - No background color change during hover
 */
export function SwitchToggle({
  options = ['Monthly', 'Yearly'],
  value = 'Monthly',
  onChange,
  className = '',
}) {
  return (
    <div
      role="radiogroup"
      className={[
        'inline-flex items-center gap-2 select-none',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
    >
      {options.map((opt) => {
        const isActive = value === opt;
        return (
          <button
            key={opt}
            type="button"
            role="radio"
            tabIndex={0}
            aria-checked={isActive}
            onMouseDown={(e) => {
              // Preventing default on mousedown stops the browser from giving
              // the button mouse focus, while still dispatching the click event.
              e.preventDefault();
            }}
            onClick={() => onChange?.(opt)}
            className={[
              'px-7.5 py-2.25 rounded-lg font-ui text-base font-medium transition-colors duration-200 cursor-pointer',
              'focus-ring',
              isActive
                ? 'bg-accent text-canvas'
                : 'bg-surface text-neutral-1 hover:text-accent',
            ].join(' ')}
          >
            {opt}
          </button>
        );
      })}
    </div>
  );
}
