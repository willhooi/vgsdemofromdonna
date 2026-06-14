## Goal
Add an evenly-tiled triangle-mesh plexus effect to the background behind the 9 service cards in `ServicesGrid`, matching the selected "Even Triangle Mesh" prototype. Cards, layout, copy and surrounding sections stay untouched.

## Scope
- Only `src/components/site/ServicesGrid.tsx` gets a new background layer.
- No changes to cards, grid, spacing, header/nav, footer, or other sections.
- The existing `GalaxyBackdrop` continues running on the parent wrapper; the new plexus sits *above* it but *below* the cards, scoped to the ServicesGrid section.

## Implementation
1. Create `src/components/site/ServicesPlexusBackdrop.tsx`:
   - Absolute-positioned, `pointer-events-none`, `-z-0` layer covering its parent.
   - Inline SVG using a `<pattern>` (200×200 tile) repeated across the full area.
   - Each tile: 5 nodes (primary green + deep green) + connecting segments with `stroke-dasharray="4 2"`, `stroke-width=0.5`.
   - Colors via tokens: `hsl(var(--primary))` and `hsl(var(--primary-deep))`.
   - Opacity ~0.35 so cards remain crisp; reduced to ~0.2 on mobile via Tailwind.
   - Subtle 20s `translate` drift animation; gated by `@media (prefers-reduced-motion: reduce)` to disable.
   - Bonus: a slow `stroke-dashoffset` animation on the segments to suggest data flow (respects reduced motion).

2. In `ServicesGrid.tsx`:
   - Wrap the section content in `relative isolate` (if not already) and mount `<ServicesPlexusBackdrop />` as the first child.
   - Ensure the cards container sits at `relative z-10`.

## Out of scope
- No edits to GalaxyBackdrop, Solutions, PlatformToServicesFlow, SolutionsToServicesBridge, or anything outside ServicesGrid.
- No card style changes.

## Verification
- Visit `/`, scroll to the 9 services grid: triangle mesh visible evenly across the entire green background, cards remain crisp white, slight drift + line shimmer animation.
- Mobile: lower opacity, animation still subtle.
- `prefers-reduced-motion`: no animation.
