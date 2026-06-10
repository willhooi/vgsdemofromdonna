# Plan — Galaxy flow continuity & service card polish

Four small, focused changes across the Solutions → Bridge → ServicesGrid block. No business logic touched.

## 1. Dot lan toả từ AIPlatformCard xuống ServicesGrid

The AIPlatformCard already emits signal dots (orbit particles + the vertical particle from Customer Profile down through pills). Right now they die inside the card. We extend that "signal" visually so it reads as continuous flow into the service cards below.

Approach: a new lightweight overlay `PlatformToServicesFlow` (pure SVG + CSS, no JS layout math) rendered inside the existing `relative isolate` wrapper in `Index.tsx`, positioned between the bridge and the services grid, `pointer-events-none`, `-z-[1]` (above GalaxyBackdrop, below cards).

Visuals:
- 3 vertical dotted "signal rails" aligned to the 3 service columns (left / center / right), starting from the bottom edge of the AIPlatformCard, passing through the bridge, ending at the top of the services grid.
- On each rail, 2–3 small green dots travel downward on a loop (`@keyframes signal-drop` translateY 0 → 100% + opacity in/out), staggered delays so the cascade feels organic.
- Rails use `stroke-dasharray="3 6"` at ~35% opacity, color `hsl(var(--primary))`, so they match the existing brain orbit dots.
- A faint conic "spread" right under the AIPlatformCard (radial green glow fanning out into 3 directions) sells the "lan toả" feeling.
- All animations respect `prefers-reduced-motion`.

Files: new `src/components/site/PlatformToServicesFlow.tsx`, edit `src/pages/Index.tsx`, add keyframe `signal-drop` in `src/index.css`.

## 2. Giảm khoảng cách AIPlatformCard ↔ ServiceCard

Current vertical stack:
- `Solutions` section: `pb-0` (ok)
- `SolutionsToServicesBridge`: `py-14 md:py-20` (too tall — 56–80px each side)
- `ServicesGrid`: `pt-4 md:pt-6`

Changes:
- Bridge: `py-14 md:py-20` → `py-6 md:py-10`, shrink internal `gap-5` → `gap-3`, shorten warp streak heights `h-14`/`h-10` → `h-8`/`h-6`, orbit ring `h-20 w-20` → `h-14 w-14`.
- ServicesGrid: keep `pt-4 md:pt-6` but it now sits closer because the bridge is tighter. Bottom `pb-20` unchanged.

File: `src/components/site/SolutionsToServicesBridge.tsx`.

## 3. Fix chiều rộng service cards (không tràn viền)

Root cause: the desktop grid uses `md:flex md:gap-[14px]` with three `flex-1` columns, but inner column divs are missing `min-w-0`, so long titles / nowrap children can push columns past their share of the row, overflowing the container on mid-width viewports (≈768–1100px). The mobile swiper also uses `px-1` per slide which can cause a 2px horizontal overflow.

Changes in `src/components/site/ServicesGrid.tsx`:
- Wrap the grid in `w-full max-w-full overflow-hidden` and keep the existing `container-tight`.
- Each column: add `min-w-0 basis-0` next to `flex-1`.
- `DesktopCard`: add `w-full min-w-0`, ensure `<h3>` and tag get `truncate` / `min-w-0` so long labels never push width.
- Mobile swiper outer: `overflow-hidden` already there — change slide wrapper from `px-1` to `px-0` and add `box-border` so 100% width slides don't overflow when combined with the parent's container padding.
- Add a responsive height clamp: replace fixed `height: open ? 360 : 116` with `minHeight` so cards can grow vertically instead of forcing horizontal overflow when content wraps on narrower columns.

## 4. Đồng bộ CTA text → "Learn more"

In `ServicesGrid.tsx`, every service in `SERVICES` currently has its own `cta` ("Learn about SMS Brandname", etc.) and the Coming Soon form uses "Notify me".

Change: replace every `cta` value in the `SERVICES` array with the string `"Learn more"`. The Coming Soon button ("Notify me") stays — it is a different action, not a Learn-more CTA. No other component references `cta`.

## Out of scope

- No changes to AIPlatformCard internals (columns, copy, orbit math).
- No changes to GalaxyBackdrop.
- No copy changes besides the CTA unification.
- No new dependencies.

## Files touched

- New: `src/components/site/PlatformToServicesFlow.tsx`
- Edit: `src/pages/Index.tsx`, `src/components/site/SolutionsToServicesBridge.tsx`, `src/components/site/ServicesGrid.tsx`, `src/index.css`
