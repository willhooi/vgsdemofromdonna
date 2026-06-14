## Goal
Make the triangle-mesh plexus background span the entire block — from the "From the platform → to the services that orbit it" bridge all the way down through the last of the 9 service cards. Remove the dark-green blinking dots/stars that currently sit on top of that area, keeping only the plexus background.

## Changes

1. **`src/pages/Index.tsx`**
   - Import `ServicesPlexusBackdrop`.
   - In the wrapper `<div className="relative">` that contains `PlatformToServicesFlow`, `SolutionsToServicesBridge`, and `ServicesGrid`:
     - Add `isolate overflow-hidden` so the plexus is properly clipped.
     - Mount `<ServicesPlexusBackdrop />` as the FIRST child so it covers bridge + services as one continuous layer.
     - Remove `<PlatformToServicesFlow />` from this wrapper (it owned the blinking green dots and fan-out lines the user wants gone). The import is also removed.

2. **`src/components/site/ServicesGrid.tsx`**
   - Remove the local `<ServicesPlexusBackdrop />` mount (line 589) and its import — the parent wrapper now provides it, so we avoid double-rendering.
   - Keep `container-tight relative z-10` wrapper so cards stay above the plexus.

3. **No changes** to `ServicesPlexusBackdrop.tsx`, `SolutionsToServicesBridge.tsx`, card styles, copy, colors, header, footer, or any other section. `GalaxyBackdrop` on the outer `relative isolate` block keeps running underneath.

4. **`PlatformToServicesFlow.tsx`** stays in the repo but is no longer rendered. (Not deleted, to keep the diff minimal and reversible.)

## Verification
- Scroll from the bridge headline down through all 9 service cards: a single, evenly tiled triangle-mesh plexus runs across the whole area.
- No more dark-green pulsing dots or fan-out dashed lines on top of the bridge.
- Cards remain crisp white, GalaxyBackdrop still visible behind the platform card above, mobile opacity remains lower, `prefers-reduced-motion` still disables animation.
