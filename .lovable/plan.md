## Goal
Make the "A member of Accrete" chip → TrustBand heading transition feel smooth, modern, and reliable on mobile.

## What's wrong today
- Single 1050ms transform with one easing curve — feels mechanical.
- The flying clone is `position: fixed`. If the user scrolls *during* the flight (very common on mobile), the destination drifts and the chip misses.
- On narrow viewports the chip is centered and the heading wraps onto 2 lines, so the computed end point lands between lines.
- Chip text ("A member of") is plain; heading has a real Accrete `<img>` logo. The current animation just scales the whole chip — the logo inside grows from 14px → ~45px and looks blurry/pixelated at the end.
- Trigger uses `rootMargin: "0px 0px -20% 0px"` so on short mobile screens it sometimes fires only when the heading is already centered, killing the perceived motion.

## Plan

### File: `src/components/site/AccreteFlightChip.tsx`
Rewrite the flight logic with a cleaner, mobile-aware FLIP animation:

1. **Better trigger geometry**
   - Use `IntersectionObserver` with `rootMargin: "-15% 0px -55% 0px"` (target must cross the upper-middle band of the viewport) so on both desktop and mobile the heading is visible *during* the animation, not after.
   - Add a `scroll` listener fallback that recomputes target rect just before launching, so the destination is always the live position.

2. **Two-stage motion (modern, springy without a library)**
   - Stage A (0–55%, ~520ms, ease `cubic-bezier(0.32, 0, 0.67, 0)` — quick lift-off): chip detaches, slight lift `translateY(-6px)` + scale 1.05, opacity 1.
   - Stage B (55–100%, ~620ms, ease `cubic-bezier(0.22, 1, 0.36, 1)` — smooth settle): chip travels to target with computed `dx/dy` and final scale, fading out in the last 15%.
   - Implement as a single `@keyframes accrete-flight` driven by CSS custom properties (`--fx-dx`, `--fx-dy`, `--fx-scale`) set inline. CSS keyframes give better performance than chained JS transitions and respect compositor frame budget on mobile.

3. **Morph effect, not just scale**
   - During Stage B, cross-fade: chip's "A member of" text fades out (opacity 0 by 80%), while the chip's logo continues to the target.
   - Match end-state scale to the **logo** height inside the heading (read `[data-accrete-logo]` from heading), not the heading height. End scale = `headingLogoHeight / chipLogoHeight`. This makes the logo land at native resolution → crisp.
   - Add a small `filter: blur(0.5px)` mid-flight that clears at the end for a subtle "speed" feel.

4. **Mobile optimizations**
   - Use `transform` + `opacity` only (no width/height/top changes during flight → GPU compositor only).
   - Add `will-change: transform, opacity` only while flying, removed on landed.
   - Use `visualViewport` height when computing distance so iOS Safari URL-bar resize doesn't offset the target.
   - Disable on `prefers-reduced-motion` (already done) and also skip when viewport width < 360 *and* scroll speed > 2× threshold (user scrolled past too fast — just snap to landed and shimmer).
   - Reduce duration on small screens: `--fx-duration: 880ms` mobile vs `1140ms` desktop, set via `matchMedia`.

5. **Landing handoff**
   - On animation end, dispatch `accrete:landed` (already wired to shimmer in TrustBand) and add a subtle 1-frame `scale(1.02)` "tap" on the heading logo for satisfying arrival.
   - Add `accrete-heading-logo-pop` keyframe in `index.css`.

6. **State safety**
   - Track `played` via `sessionStorage` so it doesn't replay on every soft nav.
   - If user scrolls *up* past the heading before the chip has flown, leave it in inline anchor state (no premature trigger).

### File: `src/components/site/TrustBand.tsx`
Single attribute add (no layout change):
- Add `data-accrete-logo` to the existing `<img src={accreteLogo}>` inside the heading so the flight chip can measure the real landing size.

### File: `src/index.css`
Add:
- `@keyframes accrete-flight` (two-stage curve via percentage stops).
- `.accrete-flying` class that consumes the CSS vars and runs the keyframe.
- `@keyframes accrete-heading-logo-pop` — 0% scale 1, 35% scale 1.06, 100% scale 1, 380ms ease-out.
- A small `.accrete-flying { will-change: transform, opacity; backface-visibility: hidden; transform: translateZ(0); }` for mobile compositor hints.
- Reduced-motion guard already present — extend to new keyframes.

## Out of scope
- No copy or layout changes.
- No changes to the metallic surface of the resting chip.
- No new dependencies (no framer-motion / GSAP — pure CSS + small JS to set vars).

## Verification
1. Desktop 1280: chip lifts, arcs to heading, logo lands crisp at heading size, shimmer plays.
2. Mobile 390×844 + 360×800: trigger fires while heading is mid-screen; no jank during scroll; lands on the correct line of the wrapped heading.
3. Scroll mid-flight: destination recomputes; chip still lands on logo.
4. `prefers-reduced-motion`: chip stays put, heading shimmers once on intersect.
5. Replay: refresh page → animation plays once; in-session navigation → no replay.
