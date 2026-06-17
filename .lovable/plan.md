# Convert "Our Valued Clients" to scrolling marquee rows

Update `src/components/site/about/AboutPartners.tsx` so each industry group renders as a horizontally auto-scrolling row (left↔right motion), matching vietguys.biz/en/about-us/vietguys.

## Changes

**1. Add a `Marquee` row sub-component (in-file)**
- Container: `overflow-hidden` with horizontal mask (`maskImage: linear-gradient(to right, transparent, black 8%, black 92%, transparent)`) so logos fade in/out at edges.
- Track: a flex row that contains the logo set duplicated 2× for seamless looping.
- Animation: CSS keyframe `translateX(0)` → `translateX(-50%)`, applied inline; duration scales with logo count (e.g. `Math.max(25, logos.length * 4)s`), `linear`, `infinite`.
- Direction alternates per group index: even rows scroll left (default), odd rows scroll right (`animation-direction: reverse`).
- Pause on hover: `hover:[animation-play-state:paused]` on the track.
- Respect reduced motion: wrap keyframe in `@media (prefers-reduced-motion: no-preference)` (added once to `src/index.css`).

**2. Replace the per-group grid with the marquee**
- Keep the eyebrow label + divider line above each row.
- Each logo cell keeps current card styling (`h-20`, rounded border, grayscale→color on hover, lift on hover) but with fixed width `w-[160px]` and `shrink-0` so the track flows horizontally.
- Remove the responsive grid classes (`grid grid-cols-3 …`).

**3. Add the keyframe to `src/index.css`**
```css
@keyframes marquee-x {
  from { transform: translateX(0); }
  to   { transform: translateX(-50%); }
}
```
Reduced-motion users: track gets `animation: none` and falls back to horizontal scroll (`overflow-x-auto`).

**4. Keep untouched**
- Heading, eyebrow, sub-line copy.
- Section background, padding, `Reveal` wrappers per group.
- Logo data loading via `import.meta.glob` and group ordering.

No other files modified.
