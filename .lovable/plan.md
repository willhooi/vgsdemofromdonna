## Solutions section — expand channels + add wave animation

**File:** `src/components/site/Solutions.tsx`

### 1. Extend the channel list to 10 services

Update `CHANNEL_CHIPS` to add 5 new services with brand-aligned colors and lucide icons:


| Service    | Color               | Icon                             |
| ---------- | ------------------- | -------------------------------- |
| Top-up     | `#06b6d4` (cyan)    | `Wallet`                         |
| Rewards    | `#f59e0b` (amber)   | `Gift` (already imported)        |
| E-Warranty | `#10b981` (emerald) | `ShieldCheck` (already imported) |
| Voice      | `#8b5cf6` (violet)  | `Phone` (reuse) or `PhoneCall`   |
| Mini App   | blue                | `LayoutGrid`                     |


Existing 5 stay as-is (SMS, Zalo, Viber, Email, OTP) → total **10 chips**.

### 2. Reposition the 10 chips around `OutcomeStage`

Expand the `positions` array in `OutcomeStage` from 5 → 10 entries, distributed evenly around the shopper image (top, right, bottom, left edges + corners). Stagger the entry transitions (`600 + i * 80ms`) so all 10 fade in smoothly without feeling crowded.

On mobile / tablet (`<lg`), the chip orbit stays hidden as today — no UX change for small screens.

### 3. Add animated wave + traveling dots inside `CDPSupportStrip`

In the "CDP Solution" header block, add a thin SVG **wave band** (no text, no avatars, no popups — purely the sinusoidal lines like the reference image) sitting underneath / behind the "CDP Solution" eyebrow and "Strategic partnership with [ByteTech logo]" line.

**Wave visual:**

- 2–3 stacked sine curves drawn as SVG `<path>`, very thin strokes (`stroke-width: 1.2px`)
- Soft brand-aligned gradient stroke (teal → soft green → warm orange), low opacity (~25%) so it doesn't fight the text
- Width = full strip width, height ≈ 56–72px
- Sits as an absolute-positioned layer inside the strip; text content sits above with `relative z-10`

**Traveling dots:**

- 10 colored dots, one per service, each colored with its `dot` from `CHANNEL_CHIPS`
- Each dot follows the wave path via SVG `<animateMotion>` referencing the path with a `<mpath>`, with `dur` ≈ 8–10s, `repeatCount="indefinite"`, and staggered `begin` offsets so they ride along the bumps continuously
- Dots are small (r=3) with a soft outer glow matching their color
- No labels — just the moving colored dots

**Layout impact:** the strip becomes slightly taller (≈ +56px). The 3-bullet list below ("Drive personalized…", "Maximize…", "Optimize…") stays unchanged.

### Technical notes

- Pure presentational additions, no new deps (use native SVG `animateMotion`).
- Respect `prefers-reduced-motion`: when set, dots freeze at their starting offset; wave stroke stays static.
- Reuse `CHANNEL_CHIPS` as the single source of truth for service colors so chip + wave dot colors always stay in sync.
- All colors via inline style for the brand dot hexes (already the pattern in this file); structural colors keep semantic tokens.