/**
 * Badge — Geeio UI primitive
 *
 * From AGENTS.md:
 *   bg rgba(255,255,255,0.4) · Jakarta Sans 20px/500 ·
 *   padding 8px 12px · radius 40px · height 44px
 *
 * Designed to sit on dark or image surfaces (hero, feature bands).
 * On light surfaces callers should pass a className override.
 *
 * Props:
 *   className — additional Tailwind classes merged last
 *   children  — badge label / content
 */
export default function Badge({ children, className = '' }) {
  return (
    <span
      className={[
        'inline-flex items-center justify-center',
        'bg-white/40',
        'text-primary font-heading text-xl font-medium',
        'px-3 py-2 h-11',
        'rounded-[40px]',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
    >
      {children}
    </span>
  );
}

