## Goal
Tidy the `OutcomeStage` (Solutions section) so the visual cluster around the shopper image reads cleanly: 3 conversation popups on the left, all channel chips on the right in an evenly-spaced arc.

## Changes (`src/components/site/Solutions.tsx`)

### 1. Move 3 popups to the LEFT side (stacked, even vertical spacing)
- **Feedback (5-star)** — `left: 2%`, `top: 12%`
- **Order Status — Confirmed** — `left: 0%`, `top: 42%`
- **Your OTP Code** — `left: 2%`, `top: 72%`

All three keep current styling (white card + accent ring). Stagger delays 300 / 500 / 700ms.

### 2. Move all channel chips to the RIGHT side, in a semi-circular arc
Replace the current scattered `positions` array (10 mixed positions) with an arc-math layout for the 9 chips in `CHANNEL_CHIPS`:

```text
For i in 0..n-1:
  angle = -70° + (i * 140°/(n-1))   // arc from top-right to bottom-right
  x = 50% + cos(angle) * radius
  y = 50% + sin(angle) * radius
  radius ≈ 46% (just outside the image)
```

This produces evenly-spaced chips hugging the right edge of the shopper image — from upper-right down to lower-right. Implemented inline with `Math.cos/sin` so spacing recomputes if chip count changes.

### 3. Chip list cleanup
Keep the 9 existing channel chips (SMS, Zalo, Viber, Email, OTP, Rewards, E-Warranty, Voice, Top-up) — no chip removals. Arc anchors them to the right half only; left half stays clean for the popups.

### Visual integrity
- Desktop (`lg+`): arc visible as designed.
- Mobile/tablet: chip cluster stays `hidden lg:block` (unchanged). Popups remain visible at all breakpoints with left-side coords that still fit the smaller stage.

No other files touched.