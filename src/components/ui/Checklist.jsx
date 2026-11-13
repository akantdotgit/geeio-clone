import checkSvg from '../../assets/icons/6a6522c65ea1b6c86733b689_b5fd4b4f310fa3950fae3b8112e1c4fb_check.svg';

/**
 * src/components/ui/Checklist.jsx
 *
 * Circular-check bullet list per Geeio design tokens (AGENTS.md).
 * Uses official check SVG icon asset from src/assets/icons/.
 *
 * @param {Object} props
 * @param {string[]} props.items - Array of bullet item strings
 * @param {string} [props.className] - Additional classes for ul container
 */
export default function Checklist({ items = [], className = '' }) {
  if (!items || items.length === 0) return null;

  return (
    <ul
      className={`space-y-2.5 font-heading text-sm text-body ${className}`.trim()}
    >
      {items.map((item, index) => (
        <li key={index} className="flex items-center gap-2.5">
          <span
            className="flex items-center justify-center shrink-0 w-4 h-4 sm:w-[18px] sm:h-[18px]"
            aria-hidden="true"
          >
            <img
              src={checkSvg}
              alt=""
              className="w-full h-full object-contain"
              aria-hidden="true"
            />
          </span>
          <span className="leading-snug">{item}</span>
        </li>
      ))}
    </ul>
  );
}
