Plan: Remove compass icon and relayout the 6 CoreValues cards

Current state:
- The CoreValues section has a 12-column grid: a sticky left heading panel (4 cols) containing the title, description, and a large compass/target icon (`GiantTarget`) at the bottom.
- The first 4 values sit in a 2x2 grid to the right of the heading; the last 2 values fill a full-width bottom row.
- A sailboat background visual, wave SVG, and gradient overlays sit behind everything.

Changes to make:
1. Remove the compass icon
   - Delete the `GiantTarget` DrawIcon constant.
   - Remove the `div` that renders `{GiantTarget}` inside the heading block.
   - Keep `DrawIcon` itself because each value card still uses it for its own small icon.

2. Relayout the heading and 6 value cards
   - Move the heading block to the top of the section (full width, centered) instead of a sticky left panel. This keeps the title and description visible as requested.
   - Arrange the 6 `ValueTile` cards in a responsive grid:
     - Desktop: 3 columns x 2 rows
     - Tablet: 2 columns x 3 rows
     - Mobile: 1 column x 6 rows
   - Keep existing `min-h` and animation delays so the staggered reveal effect remains.

3. Preserve visual background
   - Keep `SailboatBackdrop`, the sailboat image, top-edge blend, wave SVG, and readability gradients unchanged.

Result: a cleaner, more balanced section that no longer shows the compass icon, keeps the heading and description, and lets the sailboat background breathe.