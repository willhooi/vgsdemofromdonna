## Solutions section — reorganize layout

**File:** `src/components/site/Solutions.tsx`

### 1. Move `CDPSupportStrip` above the OutcomeRail cards

- Render order inside the right column changes to:
  1. `CDPSupportStrip` (currently sits below the whole grid)
  2. 4 `OutcomeCard` grid (2×2)
- Remove the old `CDPSupportStrip` call placed under the Stage+Rail grid.
- Adjust spacing: tighten its `mt-10/md:mt-12` to fit naturally as a header above the cards (e.g. `mt-0`, with rail cards getting `mt-4`).
- On mobile the strip stacks normally above the cards.

### 2. Replace text "ByteTech" with ByteTech logo inline

- In `CDPSupportStrip`, the title line currently reads:
  `Strategic partnership with ByteTech`
- Change to: `Strategic partnership with [ByteTech logo inline]`.
  - Remove the standalone 12×12 logo tile on the left so the logo is not duplicated.
  - Keep the "CDP Solution" eyebrow.
  - The inline ByteTech logo is rendered as an `<img>` (h-4 / md:h-5, w-auto) with `alt="ByteTech"`, aligned to the text baseline via `inline-block align-[-2px]`.
- Re-balance left column: drop `min-w-[260px]` constraint, drop the white tile wrapper, drop the vertical divider (or keep a subtle divider — default: remove for cleaner inline look).

### 3. Merge the two CTAs into one

- Remove the dashed `+ 5 more services — see the full stack` link inside `OutcomeRail`.
- Remove the standalone `Explore the platform` button at the bottom.
- Replace both with a single CTA centered under the rail:
  - Label: **"Explore the full stack"**
  - Route: `/solutions`
  - Style: reuse the existing primary pill button (`bg-[hsl(var(--primary))]`, white text, ArrowRight icon).

### Technical notes

- Pure presentation changes; no new deps, no data changes.
- Continue using existing semantic tokens.
- `OutcomeRail` signature stays the same — just trims its trailing link.
