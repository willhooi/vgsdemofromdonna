# Rebalance Solutions Infographic — Desktop / Tablet / Mobile

Goal: balance whitespace inside and between the 4 columns, keep all data-flow lines visible without crossing text, and ensure content stays readable at every breakpoint.

Scope: `src/components/site/Solutions.tsx` only (presentation). No business-logic changes.

---

## 1) Desktop (≥1024px) — fixed 1600×640 infographic

### Column geometry — even spacing, uniform widths
Replace the current mixed widths (330 / 370 / 350 / 350, gaps 40) with a balanced grid:

```text
Inner padding 40 | Col1 320 | gap 60 | Col2 360 | gap 60 | Col3 320 | gap 60 | Col4 340 | 40
Total = 1600 ✓
```

- Col1 (Data Sources): `left:40,  width:320, height:560`
- Col2 (AI Brain):     `left:420, width:360, height:560`
- Col3 (Business):     `left:840, width:320, height:560`
- Col4 (Customer Exp): `left:1220,width:340, height:560`

### Internal balance per column
- **Col1**: 7 source cards. `top: 92 + i*66, height: 54`. Right padding equal to left (14/14). Bottom whitespace ≈ 30px.
- **Col2**: Customer Profile orb stays centered at `(180, 250)`, radius 75. Orbit nodes adjusted to new col width (`x ∈ {80, 180, 280}`). Pills block: `top: 430, width: 240, gap 8`.
- **Col3**: 4 BI cards. `top: [108, 220, 332, 444], height: 92`, even 20px gaps, vertical block centered.
- **Col4**: 4 CX cards left-aligned `left: 22, width: 190, height: 66, top: [108, 196, 284, 372]`. Customer image moves to the **right half**: `right: 0, bottom: 24, width: 200, maxWidth: 56%`. Rating card: `left: 22, bottom: 28, width: 230`. Soft green glow re-centered behind girl.

### Data-flow connectors
Recompute connector endpoints from new column edges so:
- Orange hub stays in the gap between Col1↔Col2 (`x ≈ 390`).
- Green hub A in gap Col2↔Col3 (`x ≈ 810`).
- Green hub B in gap Col3↔Col4 (`x ≈ 1190`).
- All horizontal connector segments live **inside the inter-column gaps** (60px wide, more headroom than today's 40px), so dashed lines never cross card text.
- Keep `stroke-width 2`, `dasharray 5 7`, animated `flow-dash`.
- SVG keeps `overflow: visible`.

### Scaler
Keep `DesktopInfographicScaler` (transform-scale to fit viewport ≥1024). With wider gaps, content remains readable when scaled to ~0.8 at 1280px.

---

## 2) Tablet (md, 768–1023px)

Currently uses a 2×2 grid of `StepCard`s. Improvements:
- Increase outer card padding: `px-6 py-7` on the AIPlatformCard wrapper at `md:`.
- Grid gap: `md:gap-5 lg:gap-6` (already close). Ensure each `StepCard` has `min-h-[420px]` so the 4 tiles match heights.
- Within each StepCard:
  - Step1: keep 7 rows, slightly bump row height to `py-2`.
  - Step2: cap orbit at `max-w-[260px]` and add `mt-3` before pills.
  - Step4 (CX): stack engagement cards full-width with shopper image as a 40% right-floated visual, rating row pinned bottom.
- No SVG connectors on tablet/mobile (current behavior) — instead show small downward chevrons between rows of the grid to imply flow (optional polish, low risk).

---

## 3) Mobile (<768px)

- Single column stack already used. Tighten:
  - Section padding `pt-12 pb-6`.
  - StepCard inner padding `p-4`, gap between cards `gap-3`.
  - Step2 orb max-width `220px`.
  - Step4 image max-width `180px`, centered, with cards above and rating below — no overlap.
- Ensure no text uses `truncate` where wrapping is acceptable on small screens: switch `truncate` → `line-clamp-2` for card titles/subs in `StepDataSources` / CX cards.

---

## 4) Implementation notes (technical)

Files touched:
- `src/components/site/Solutions.tsx`
  - Update column `left/width` constants and recompute `DS_RIGHT_X`, `BI_LEFT_X`, `BI_RIGHT_X`, `CX_LEFT_X`, `HUB_ORANGE/GREEN_A/GREEN_B.x`, `PROFILE_C`.
  - Update orbit node coordinates for new Col2 width.
  - Reposition Col4 image, CX cards, rating to keep image fully inside column with `overflow: visible`.
  - Adjust tablet/mobile `StepCard` paddings + replace `truncate` with `line-clamp-2` where needed.

No new dependencies. No changes to data, routing, or other components.

---

## Acceptance checklist
- Desktop ≥1280px: all 4 columns equal visual weight, ≥60px gaps, every dashed connector visible and routed inside gaps (no crossing card text).
- Desktop 1024–1279px: scaler keeps layout intact, text still readable.
- Tablet 768–1023px: 2×2 grid with equal card heights, no truncation.
- Mobile <768px: single stack, image and cards fully contained, no overflow.
- Customer image stays inside Col4 in every breakpoint.
