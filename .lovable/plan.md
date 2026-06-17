# Convert "Our Valued Clients" to tabbed industry selector

Replace the stacked marquee rows in `src/components/site/about/AboutPartners.tsx` with a tabbed layout: industry chips on top, logos for the active industry below.

## Changes (single file: `AboutPartners.tsx`)

**1. Add tab state**
- `const [active, setActive] = useState(groups[0].dir)`.
- Derive `activeLogos = (logosByDir[active] ?? []).slice(0, 10)` so each industry shows at most 10 brands (5–10 range, depending on what's available).

**2. Tab bar (industry chips)**
- Horizontal wrap of buttons, one per group that has logos.
- Inactive: `bg-background border border-border text-muted-foreground hover:text-foreground hover:border-primary/40`.
- Active: `bg-[hsl(var(--primary))] text-primary-foreground border-transparent shadow-[var(--shadow-soft)]`.
- Rounded-full, `px-4 py-2`, `text-sm font-medium`, gap-2.
- Center-aligned on desktop, horizontally scrollable on mobile (`overflow-x-auto`, `flex-nowrap md:flex-wrap md:justify-center`).

**3. Logo panel**
- Replace marquee with a responsive grid: `grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4`.
- Reuse existing `LogoCard` styling (h-20 card, grayscale → color on hover, lift).
- Wrap grid in a keyed container (`key={active}`) so it remounts on tab change with a soft fade-in (`animate-fade-in`).
- Remove eyebrow + divider line above each group (no longer needed — tab bar replaces it).

**4. Remove**
- `MarqueeRow` component, per-group `Reveal` loop, and `space-y-10` stack.
- Marquee-related CSS in `src/index.css` is left in place (harmless, may be reused) — no edit needed.

**5. Keep untouched**
- Section heading, sub-line, background, padding.
- `logosByDir` loader, `groups` array, `prettyName`, `LogoCard`.

No other files modified.
