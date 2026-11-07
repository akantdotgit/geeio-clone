# Agents.md

Guidance for AI coding agents working in this repository. It is based on the Geeio design system (source: https://geeio.webflow.io/, extracted 2026-11-03). Follow these rules for any UI implementation so output stays consistent with the brand.

## Project Overview

Geeio is a plant-care platform with a modern, botanical-inspired aesthetic: calm, clear, and aspirational. Expect soft sage greens and off-whites, generous whitespace, pill-shaped buttons, rounded cards, and negative-tracked display headings. Depth comes from color-blocking — not layered shadows.

## Technical requirements

- Vite v8.3.5 + React v19.3.1 + JavaScript + Tailwind v4.3.4
- Convert Stitch HTML exports in export/ to components — keep Tailwind classes as-is.
- Shared Navbar/Footer/CTA go in src/components/, pages in src/pages/.
- Repeated markup (cards, features, testimonials) must render from arrays in src/data/.
- After each page: run `npm run build` and fix errors before claiming done.

## Design Tokens

### Colors

| Token | Hex | Role |
|---|---|---|
| `primary` / `ink` | `#0E160F` | Primary CTAs, headings, brand accent, dark surfaces (footer, featured cards) |
| `accent` | `#317039` | Secondary botanical green; hero bands, decorative accents |
| `canvas` | `#FFFFFF` | Page background; text on dark surfaces |
| `surface` | `#F6F7F6` | Default card/panel backgrounds |
| `surface-alt` | `#E4EFD3` | Alternating section bands |
| `body` | `#505851` | Primary body text; 1px border color on outline buttons/links |
| `muted` | `#999999` | Secondary text, captions, placeholders |
| `neutral-1` | `#222222` | Deep neutral text |
| `neutral-2` | `#CCCCCC` | Light borders/dividers |
| `neutral-3` | `#333333` | Mid-neutral text |
| `accent-1` | `#E1FCE4` | Decorative only — no semantic role |
| `accent-2` | `#111EB2` | Decorative only; secondary button fill |
| `accent-3` | `#161B4C` | Decorative only; secondary button fill variant |
| Focus ring | `#3B79C3` | Keyboard focus outline on all interactive elements |

- **On-primary text**: `#FFFFFF`.
- **Button hover**: `rgba(14, 22, 15, 0.88)` on primary buttons.
- Do **not** use `accent-1/2/3` as semantic status colors (they have no assigned role).

### Typography

Two fonts only: **Plus Jakarta Sans** (editorial: headings, body, cards, badges, weight 500–700) and **Inter** (interface chrome: buttons, nav, captions, weight 300–500). Fallback: `ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, sans-serif`.

| Role | Font | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Display XL | Jakarta Sans | 64px | 500 | 1.12 | -2.5px |
| Display LG | Jakarta Sans | 48px | 500 | 1.16 | -2px |
| Heading | Jakarta Sans | 32px | 500 | 1.25 | -1px |
| Body XL | Jakarta Sans | 24px | 500 | 1.5 | -0.5px |
| Body LG | Jakarta Sans | 20px | 500 | 1.4 | 0 |
| Body LG Strong | Jakarta Sans | 20px | 700 | 1.4 | -0.16px |
| Body MD | Jakarta Sans | 18px | 500 | 1.55 | 0 |
| Body SM | Jakarta Sans | 16px | 700 | 1.2 | -0.16px |
| Button LG | Inter | 18px | 500 | 1.55 | 0 |
| Button MD | Inter | 14px | 400 | 1.5 | 0 |
| Nav | Inter | 14px | 500 | 1.42 | 0 (capitalize) |
| Caption MD | Inter | 12px | 500 | 1.25 | 0 |
| Caption SM / XS | Inter | 8px / 6px | 300 | 1.5 / 1.67 | 0 |

Display headings must use negative tracking — never 0px — as defined in the table.

### Spacing (4px base unit)

`4, 8, 12, 16, 20, 24, 28, 32, 36, 40` px. Component padding: 12–24px. Section gaps: 36–40px desktop, collapses to 16–24px mobile. Never invent values outside this scale.

### Border Radius

`0` (images/dividers), `8`, `12` (inputs, secondary buttons), `16` (rarely used), `24` (cards/containers — the standard), `32` (large panels), `9999px` (pills: primary buttons, badges, avatars). Interactive elements are never less than 12px.

### Shadows & Elevation

Exactly one shadow, used for cards/panels only:

```css
box-shadow: rgba(18, 59, 23, 0.16) -32px 40px 60px 0px;
```

Everything else is flat — depth is signaled by alternating surface colors (`surface` → `surface-alt` → `primary`), not shadows. Never stack multiple shadows on one element.

Allowed opacity values only: **0.4, 0.5, 0.6, 0.88**.

### Z-index Scale

- 1–5: base document flow
- 11: dropdowns/popovers
- 900–999: sticky headers/navigation
- 99999: modals/toasts

### Gradients

Hero only: `linear-gradient(rgb(242, 246, 237), rgb(228, 239, 211))`.

Themes: light (measured palette above) and a derived dark theme (`bg #0F1010`, `surface #1D1E1E`, `text #F5F6F5`, `accent #5D9364`, elevation via border+surface instead of shadow).

## Components

### Buttons

- **Primary (pill)**: bg `#0E160F`, white text, Plus Jakarta Sans 16px/700, padding 16px 24px, height 54px, `border-radius: 9999px`. Hover: bg `rgba(14,22,15,0.88)` + `transform: translateY(-5px)`.
- **Primary small (pill)**: Inter 14px/700, padding 8px 16px, height 38px, same colors.
- **Secondary filled**: bg `#111EB2` (or `#161B4C` variant), text `#CCCCCC`, Inter 14px/400, padding 12px, radius 12px, height 46.5px.
- **Ghost/outline (pill)**: transparent bg, 1px solid `#505851`, text `#0E160F`, Plus Jakarta Sans 16px/700, padding 16px 28px, height 56px, radius 9999px. Hover: bg fills `#0E160F`, text white.

### Cards

- Always `border-radius: 24px`, padding 16–24px, text `#505851`, Jakarta Sans 14px/400.
- Default: bg `#F6F7F6` + the single shadow. Alt: bg `#E4EFD3`. Featured/dark: bg `#0E160F`, text `#FFFFFF`.
- No gradient fills, no multiple shadows.

### Badges

Bg `rgba(255,255,255,0.4)`, text `#0E160F`, Jakarta Sans 20px/500, padding 8px 12px, radius 40px, height 44px.

### Inputs

Bg `#FFFFFF`, text `#505851`, Inter 14px/400, border 1px solid `#CCCCCC`, radius 12px, padding 12px 16px, placeholder `#999999`. Focus: border-color `#3B79C3` (no outline change).

### Navigation

Transparent bg, links in `#505851`, Inter 14px/500 capitalized. Hover: color `#0E160F`. Collapses to a menu toggle at ≤768px; 4 inline links at ≥1024px.

### Footer

Bg `#0E160F`, padding `0 30px 34px 30px`, Jakarta Sans 14px/400, bottom corners only: `border-radius: 0 0 20px 20px`.

## States & Accessibility

- Every interactive element requires `:focus-visible` with `outline: 2px solid #3B79C3`. This is mandatory, not optional.
- Input focus uses border-color instead of outline.
- Assume transitions of 200–300ms with cubic-bezier easing (timings were not measured; use sensible defaults).
- Icons inherit text color unless explicitly colored.

## Layout & Responsive

| Breakpoint | Content column | Heading (largest) | Body | Section padding-X | Nav |
|---|---|---|---|---|---|
| 375px (mobile) | 351px | 40px | 14px | 20px | Menu toggle, 0 links |
| 768px (tablet) | 744px | 56px | 14px | 30px | Menu toggle, 0 links |
| 1024px (desktop) | 1000px | 64px | 14px | 30px | 4 inline links |
| 1280px | 1256px | 64px | 14px | 30px | 4 inline links |
| 1440px | 1416px | 64px | 14px | 30px | 4 inline links |

- Grid is **always 8 columns** at every breakpoint — columns narrow on mobile but never change count.
- Max container width 1416px; cards stack vertically on mobile, horizontal (flex) on desktop.
- Touch targets ≥44×44px with ≥8px (`spacing.xs`) between adjacent targets.
- Stack forms vertically on mobile with full-width, clearly labeled inputs.

## Do's and Don'ts

**Do**

- Use pill buttons (`border-radius: 9999px`) for primary/secondary CTAs.
- Keep section spacing at 36–40px; whitespace is a design feature.
- Apply negative tracking (-2.5px / -2px) to display headings.
- Use Plus Jakarta Sans for editorial content and Inter for UI chrome — never mix roles.
- Color-block depth with surface variants; reserve the single shadow for cards only.
- Implement focus-visible rings on all interactive elements.
- Test at every documented breakpoint.

**Don't**

- Radius below 12px on interactive elements.
- Multiple shadows, gradient card fills, or arbitrary opacity values.
- Serif fonts or any font outside the two-family system.
- Zero letter-spacing on display headings.
- Collapse the grid to 4/2 columns on mobile.
- Use `accent-1/2/3` as semantic status colors, or assign colors to status/error/warning states without new design direction (no status ramp exists in the source).
- Invent spacing values outside the 10-step scale.

## Known Gaps (assume defaults, don't guess hard)

- No semantic status colors (success/error/warning/info) — define them only if explicitly requested.
- Disabled states, active nav states, and transition timings are unspecified — default to 200–300ms cubic-bezier and reduced-opacity (≤0.6) treatment.
- Dark mode values are derived, not measured from the source site.
- Only the public homepage was analyzed; authenticated surfaces may differ.
