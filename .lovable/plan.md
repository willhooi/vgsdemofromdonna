## Scope
Two small, presentation-only edits to the Hero area.

### 1. Remove "Contact Experts" button
File: `src/components/site/Hero.tsx`
- Delete the `<Button variant="cta">…</Button>` block (and its wrapping `<div className="mt-4 md:mt-5 …">`).
- Remove now-unused imports: `ArrowRight`, `Link`, `Button`, `trackDemoRequest`.
- Keep `AccreteFlightChip` directly under the headline as the sole CTA-area element. Tighten its top margin slightly (`mt-5 md:mt-6`) so the chip breathes without the button below it.

Note: The flight animation (chip flying into TrustBand heading on scroll) still works — it's driven by `AccreteFlightChip` + `[data-accrete-target]`, not by the button.

### 2. Luxury metallic effect on the Accrete chip
File: `src/components/site/AccreteFlightChip.tsx` + `src/index.css`

Goal: make the inline chip feel premium — soft brushed-gold/champagne surface, faint inner sheen, and a slow continuous metallic sweep (similar in spirit to `.shimmer-chip` already used on TrustBand, but more refined and always-on for the Hero chip).

Changes in `ChipContent`:
- Add class `accrete-chip-metallic` to the chip span.
- Keep existing layout (border, padding, text, logo). Slightly upgrade: thin gradient border, subtle inset highlight, denser shadow.

New CSS in `src/index.css`:
- `.accrete-chip-metallic` — base surface:
  - background: linear-gradient between champagne white `hsl(40 30% 98%)` → warm ivory `hsl(38 40% 94%)` → champagne white, with a 1px inner top highlight via `box-shadow: inset 0 1px 0 rgba(255,255,255,0.9)`.
  - border: 1px solid `hsl(38 40% 78% / 0.7)` (warm metallic edge), replacing current green border.
  - shadow: `0 6px 18px -8px hsl(38 60% 30% / 0.35), 0 1px 2px rgba(0,0,0,0.06)`.
  - text color stays brand green for contrast.
  - `position: relative; overflow: hidden; isolation: isolate;`
- `.accrete-chip-metallic::before` — soft radial sheen anchored top-left (static), low opacity, gives the chip a "polished" feel.
- `.accrete-chip-metallic::after` — moving specular highlight: diagonal white gradient band, `@keyframes accrete-metallic-sweep` translating from `-150%` to `250%` with `skewX(-22deg)`, 4.5s ease-in-out infinite, with a generous pause at the end (use keyframe stops 0% → 55% movement, 55–100% hold) so the shimmer feels intentional, not frantic.
- Respect `prefers-reduced-motion`: disable the `::after` animation.

The existing flight-into-TrustBand behavior, landing shimmer on the destination heading, and chevron arrow hint are unchanged.

## Out of scope
- No copy changes, no layout changes outside Hero.
- No changes to TrustBand, header, or routing.

## Verification
- Visual check at desktop (1088px current viewport) and mobile widths: chip centered on mobile, left-aligned on desktop, no button below.
- Confirm scroll trigger still flies the chip into the "A member of Accrete" heading.
- Confirm reduced-motion users see a static, still-premium chip.
