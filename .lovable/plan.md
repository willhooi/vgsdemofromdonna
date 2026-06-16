## Goal
Flip sailboat key visual to the **left**, remove the `GiantTarget` compass icon, and re-tone the Core Values section with a palette that evokes "setting sail forward" (ocean horizon → sunrise momentum).

## Changes (1 file: `src/components/site/about/AboutCoreValues.tsx`)

### 1. Flip sailboat to the left
In `SailboatBackdrop`:
- Image positioning: `right-0` → `left-0`, `object-left` → `object-right`.
- Mirror the artwork horizontally so the bow still points "forward into the layout": add `scale-x-[-1]` on the `<img>`.
- Invert the readability gradient: white-strong side moves from left → **right**, so headings on the left stay crisp over the boat... wait — since the boat now sits on the left, the **text/tiles need protection on the right**. Update overlay to `linear-gradient(to left, white 0% → transparent 100%)`, and mirror the mask on the image (`to right` instead of `to left`).
- Wave path direction: keep the SVG but reverse the `linearGradient` stops (deep on left, fading right) so the wave reads as "moving forward" away from the boat.

### 2. Remove the compass
- Delete the `GiantTarget` constant.
- Remove the `<div className="mt-8 hidden lg:flex ...">{GiantTarget}</div>` block in the heading column.
- Reclaim that vertical space with slightly more breathing room (`mt-6` on the paragraph stays; no new element added).

### 3. Heading column repositioning
Since the boat is now on the left, the sticky heading block must move to the **right** for visual balance:
- Change grid order: heading column gets `lg:order-last` (or swap col placement) so on `lg` it sits on the right; the 2x2 value tiles occupy the left.
- Mobile order unchanged (heading first).

### 4. New color palette — "Setting sail forward"

Concept: deep ocean (trust, depth) → horizon teal (calm, clarity) → sunrise coral (momentum, the destination ahead). The existing red accent `#cd3734` is re-cast as the **sunrise/destination marker** so it gains narrative meaning instead of being a stray accent.

Proposed tokens (applied locally via inline `style` first, then we can promote to `index.css` if you like):

```text
Ocean Deep      #0B2C4A   — section base / wave deep stroke
Horizon Teal    #2A8C9E   — wave mid, tile border tint, primary support
Sail White      #F6F1E7   — warm off-white background (replaces pure white gradient)
Mist            #E3ECEF   — tile background tint
Sunrise Coral   #E55A3C   — destination accent (replaces #cd3734)
Gold Spark      #F2B441   — micro-accent on hover / wave highlight dot
```

Application:
- Section background: `linear-gradient(180deg, #F6F1E7 0%, #FFFFFF 60%, #E3ECEF 100%)` — warm sail-cloth top fading into misty sea.
- Wave gradient stops: `#0B2C4A` (left, deep) → `#2A8C9E` (mid) → `#E55A3C` (right, sunrise) at low opacity — the wave literally travels from depth toward sunrise.
- Value tiles: border `#2A8C9E / 0.22`, bg `#2A8C9E / 0.06`, hover shadow tinted `#0B2C4A / 0.30`.
- Tile underline accent: keep as `#E55A3C` (was `#cd3734`) — now reads as "destination marker".
- Heading eyebrow `CORE VALUES`: `#0B2C4A`.
- Icon stroke (`ICON_STROKE`): switch from `hsl(var(--primary))` to `#0B2C4A` for stronger ink-on-sail feel; alternative: `#2A8C9E` for softer.
- Hover: tile lifts and a tiny `#F2B441` dot pulses (the "spark on the horizon") — reuse the existing `-right-6 -top-6` decoration recolored.
- Readability overlay: warm `#F6F1E7` instead of pure white, so the boat blends into the same paper tone.

### 5. Parallax/hover — unchanged
Keep `translate3d` parallax and `group-hover/section` boat lift; only the direction reads naturally because the boat is flipped.

## Out of scope
- No changes to tile copy, count, or order.
- No new dependencies, no new assets.
- Global theme tokens in `index.css` untouched (palette applied inline within this section). Promotion to global tokens can be a follow-up if you like the direction.

## Open question
Do you want the palette **applied inline only to this section** (safe, isolated) or **promoted to `index.css` design tokens** so the rest of the About page can adopt it too?
