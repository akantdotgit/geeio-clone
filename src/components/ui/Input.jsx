import { useState, useRef, useId } from 'react';

/**
 * Input — Geeio UI primitive
 *
 * Matching exact Geeio design:
 *   - Container: flex flex-col gap-1.5 (6px)
 *   - Label: font-ui text-sm (14px) font-medium text-ink (#0E160F)
 *   - Field: bg-canvas (white), rounded-lg (8px), px-4 py-3 (16px x 12px), text-ink text-sm font-ui
 *   - Placeholder: text-body/70 (#505851 at 70% opacity)
 *   - Border & Shadow: Completely borderless and flat in normal state
 *   - Mouse Focus: NO focus ring/border on mouse click (focus:outline-none)
 *   - Keyboard Focus: Active focus ring/outline when navigating via keyboard (Tab)
 *   - Multiline support: pass `as="textarea"` or `multiline` prop
 *
 * Props:
 *   label     — visible label text (renders <label> above input)
 *   hint      — optional helper text below input
 *   error     — error string; swaps focus to red and shows below
 *   as        — 'input' | 'textarea' (or pass multiline boolean)
 *   multiline — boolean shortcut for as="textarea"
 *   id        — ties label ↔ input; auto-generated with useId if omitted
 *   className — extra classes on the input/textarea element
 *   ...rest   — forwarded to the input or textarea
 */
export default function Input({
  label,
  hint,
  error,
  as: Component = 'input',
  multiline = false,
  id: externalId,
  className = '',
  rows = 4,
  ...props
}) {
  const autoId = useId();
  const id = externalId ?? autoId;
  const Tag = multiline ? 'textarea' : Component;

  const [isKeyboardFocused, setIsKeyboardFocused] = useState(false);
  const isMouseDownRef = useRef(false);

  const handleContainerMouseDown = () => {
    isMouseDownRef.current = true;
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

  return (
    <div
      onMouseDown={handleContainerMouseDown}
      className="flex flex-col gap-1.5 w-full text-left"
    >
      {label && (
        <label
          htmlFor={id}
          className="font-ui text-sm font-medium text-ink leading-tight select-none cursor-pointer"
        >
          {label}
        </label>
      )}

      <Tag
        id={id}
        rows={Tag === 'textarea' ? rows : undefined}
        aria-describedby={hint || error ? `${id}-hint` : undefined}
        aria-invalid={error ? 'true' : undefined}
        onFocus={handleFocus}
        onBlur={handleBlur}
        className={[
          /* Base layout & typography */
          'w-full bg-canvas text-ink',
          'font-ui text-sm font-normal leading-normal',
          /* Padding & corner rounding (8px) */
          'px-4 py-3 rounded-lg',
          /* Border & Shadow: completely borderless and flat in normal state */
          'border-0 shadow-none outline-none',
          /* Error or Keyboard focus states */
          error
            ? 'ring-1 ring-red-500'
            : isKeyboardFocused
            ? 'ring-2 ring-focus/40'
            : '',
          /* Placeholder */
          'placeholder:text-body/70',
          /* Remove default browser focus outline on mouse click */
          'focus:outline-none focus:ring-0',
          isKeyboardFocused ? (error ? 'focus:ring-1 focus:ring-red-500' : 'focus:ring-2 focus:ring-focus/40') : '',
          /* Textarea specific */
          Tag === 'textarea' ? 'resize-y min-h-[116px]' : '',
          /* Transitions */
          'transition-all duration-150',
          className,
        ]
          .filter(Boolean)
          .join(' ')}
        {...props}
      />

      {(hint || error) && (
        <p
          id={`${id}-hint`}
          className={[
            'font-ui text-xs mt-0.5',
            error ? 'text-red-500 font-medium' : 'text-muted',
          ].join(' ')}
        >
          {error ?? hint}
        </p>
      )}
    </div>
  );
}
