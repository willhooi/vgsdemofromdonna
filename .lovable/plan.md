## Goal
Replace the current decorative compass (`NetworkArt`) in the Core Values section with the stylized "sailboat 19" key visual, positioned on the right with a wave that visually links the bottom two value tiles. Add a readability overlay and subtle parallax/hover motion.

## Changes (1 file: `src/components/site/about/AboutCoreValues.tsx`)

### 1. Remove old decoration
- Delete the `NetworkArt` component and its usage inside `<AboutCoreValues>`.

### 2. Upload the sailboat asset
- Upload the user's sailboat-19 image via `lovable-assets create` → save pointer to `src/assets/sailboat-19.png.asset.json`.
- (If you can confirm which uploaded file is the sailboat, please tell me the filename; otherwise I'll use the most recent matching upload.)

### 3. New background layer (inside `<section>`, behind content)
Stacked absolutely-positioned layers:

```text
┌─ section ──────────────────────────────────────────┐
│  [base gradient bg]                                │
│  [sailboat <img>]  ── right side, ~55% width,      │
│                       bottom-aligned, parallax     │
│  [SVG wave]        ── full width, sits across the  │
│                       bottom row of value tiles    │
│  [overlay]         ── white→transparent gradient   │
│                       from left + soft blur mask   │
│                       on the right to keep text    │
│                       readable                     │
│  [content grid]    ── existing tiles, z-10         │
└────────────────────────────────────────────────────┘
```

Implementation notes:
- Sailboat: `<img>` absolutely positioned `right-0 bottom-0 w-[55%] max-w-[640px] opacity-70 mix-blend-multiply` so it tints with the page, hidden `below md` (`hidden md:block`) to keep mobile clean.
- Wave: inline SVG (`viewBox="0 0 1440 200"`) absolutely positioned across the bottom ~280px of the section, stroked in `hsl(var(--primary)/0.35)` with a softer secondary wave underneath; sits behind tiles but visually "carries" the bottom two value tiles.
- Overlay: 
  - `bg-gradient-to-r from-white via-white/85 to-transparent` covering left 60% (ensures heading + left column tiles stay crisp).
  - A second `bg-gradient-to-t from-white/70 to-transparent` at the bottom so the wave fades into the tiles instead of cutting them.

### 4. Parallax + hover motion
- Sailboat parallax: a lightweight `useEffect` on the section that listens to `scroll` (passive) and applies `transform: translate3d(0, ${y}px, 0)` to the boat via a ref; `y = (sectionTop - viewportCenter) * 0.08`, clamped to ±40px. Respects `prefers-reduced-motion`.
- Section hover: on `group-hover` of `<section className="group">`, the boat gets `transition-transform duration-700 group-hover:-translate-y-2 group-hover:scale-[1.02]` and the wave path gets a slow `stroke-dashoffset` drift for a "gentle sailing" feel.

### 5. Responsive
- `md` and up: full background composition active.
- Mobile (`<md`): hide sailboat + wave (or keep wave only at low opacity), drop overlay; tiles render on plain gradient bg like today. This avoids cluttering small screens.

### 6. Z-index
- Background layers: `z-0`
- Overlay: `z-[1]`
- Content grid wrapper: add `relative z-10`

## Out of scope
- No changes to the value tile content, order, or grid breakpoints.
- No new dependencies.

## Open question
Please confirm the source filename of the sailboat key visual you uploaded (e.g. `image-XX.png` or one of the UUID-named PNGs), so I upload the correct one to the CDN.