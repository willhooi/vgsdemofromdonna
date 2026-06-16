# Plan — Full-bleed Ocean Artwork for Core Values

## Goal
Make the sailboat + ocean artwork stretch full-bleed across the entire section background (not just the bottom band), keep the 6 value tiles, and reposition the heading to **top-left** for a stronger editorial rhythm and better connection to the section above (PromiseGap, left-aligned) and below (Mission/Vision).

## Why top-left for the heading
- The section above (PromiseGap) ends with left-aligned content → top-left heading creates a continuous reading axis.
- A left-aligned heading + right-side breathing room lets the sailboat artwork breathe in the upper-right "sky" area without fighting the title.
- Mission/Vision below opens centered → eye naturally sweeps left→right→down→center.

## Layout changes

```text
┌──────────────────────────────────────────────────────────┐
│ CORE VALUES                            ☁  ☁              │  ← sky tint
│ Six values that have                                     │
│ outlasted every trend.        ⛵                          │  ← boat anchored upper-left/mid
│ ─── coral rule                       (open sky right)    │
│ Lead paragraph (max-w-md)                                │
│                                                          │
│  ┌─tile─┐  ┌─tile─┐  ┌─tile─┐                            │
│  ├──────┤  ├──────┤  ├──────┤    ← 3×2 grid (unchanged)  │
│  └──────┘  └──────┘  └──────┘                            │
│  ┌─tile─┐  ┌─tile─┐  ┌─tile─┐                            │
│  └──────┘  └──────┘  └──────┘                            │
│                                                          │
│ ～～～～～～～～～～～～～～～～～～～～～～～～～～  │  ← waves bridge to next
└──────────────────────────────────────────────────────────┘
```

## Background artwork — full-bleed treatment

Replace the bottom-only `HorizonBand` with a full-section `OceanScene` absolute layer:

1. **Sky layer** (top 60% of section): vertical gradient using SAIL palette
   - `#FFFFFF` → `SAIL.sailWhite` → soft `SAIL.horizonTeal @ 8%` → `SAIL.mist`
   - Adds an airy "sky" feel above the waterline instead of plain cream.

2. **Sun/horizon spark**: faint radial glow (gold + coral, ~10% opacity) positioned upper-right — gives the boat a destination and warms the right side where heading text isn't.

3. **Sailboat**: 
   - Larger (`max-h-[340px]`, ~38% section height), positioned `left-[4%] top-[18%]` on desktop so it sits in the negative space to the right of the heading.
   - Soft drop-shadow using `SAIL.oceanDeep`.
   - Keeps existing parallax + hover lift.

4. **Waterline** (lower 40%): 
   - Extended SVG waves filling from ~55% down to bottom, using existing `waveStroke` + `waveFill` gradients.
   - Bottom stop = `SAIL.mintBridge` so it still bridges into Mission/Vision.
   - Add 2–3 subtle wave layers at different opacities for depth.

5. **Tile readability**: keep the current cream radial wash behind the grid, slightly stronger (`rgba(246,241,231,0.7)` center) since artwork is now full-bleed.

## Heading section

- Wrap heading in `max-w-xl` with left alignment (`text-left`), remove `mx-auto text-center`.
- Coral rule + lead paragraph also left-aligned.
- Add `relative z-10` so it sits above the ocean layer.

## Tiles
- No structural change — still 3×2 grid, same 6 values, same styling.
- Slightly bump tile background opacity to `0.94` since artwork now extends behind them.

## Files to edit
- `src/components/site/about/AboutCoreValues.tsx` — rework `HorizonBand` → `OceanScene`, reposition heading, update section gradient.

## Out of scope
- No new assets (reuse existing `sailboat-19.png`).
- No changes to sibling sections (PromiseGap / Mission-Vision).
- No copy changes.
