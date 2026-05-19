## Goal
Bring the static reference illustration to life on the right side of the Hero, paired with the existing headline + "Contact Experts" CTA on the left. Floating channel icons (SMS, Zalo, Viber, Email, gift, bulb, dots, audio) pulse around a phone frame; inside the phone, VietGuys avatar pops 4 chat bubbles in sequence to demonstrate real-world enterprise messaging.

## Layout — Hero becomes 2-column on desktop

```text
┌─────────────────────────────────────────────────────────────┐
│  ┌──────────────────────────┐    ┌──────────────────────┐   │
│  │ Where customer           │    │   ✦ icon            │   │
│  │ conversations become     │    │ ┌──────────┐  ✦     │   │
│  │ business growth.         │    │ │ [VG] ▾   │        │   │
│  │                          │    │ │ ─ chat 1 │   ✦    │   │
│  │ [Contact Experts →]      │    │ │ ─ chat 2 │        │   │
│  │                          │    │ │   chat 3 ←       │   │
│  │ A member of [Accrete]    │    │ │ ─ chat 4 │  ✦     │   │
│  └──────────────────────────┘    │ └──────────┘        │   │
│                                   │   ✦         ✦        │   │
│                                   └──────────────────────┘ │
└─────────────────────────────────────────────────────────────┘
```

- Desktop (≥1024px): grid `lg:grid-cols-[1.05fr_0.95fr]`, text left / animation right, vertically centered.
- Tablet (768–1023px): single column, animation under CTA, max-width 420px, centered.
- Mobile (<768px): hidden by default (keep hero punchy, page already short). Optional compact version (≤320px) can be re-enabled later if requested.
- The existing `hero-section` height constraints stay in place; on lg, the animation fits within the 60–65vh band.

## New component — `src/components/site/HeroChatAnimation.tsx`

Self-contained, pure CSS + a tiny `useEffect` timing controller (no extra deps). All motion respects `prefers-reduced-motion`.

### Phone frame (center)
- Rounded white card, soft brand-green glow shadow, 1px border `hsl(var(--border))`, inner padding for chat list.
- Header strip: small VietGuys avatar (BrandMark `mini` variant already in repo, green/orange V) + "VietGuys" label + small online dot.
- Chat area: vertical stack with smooth scroll-into-view as new bubbles appear.

### Chat bubble sequence (in order, ~1.8s apart, loops every ~10s)
1. LEFT  — "Xin chào Nguyễn An, cảm ơn bạn đã đăng ký 👋" (green-tinted bubble)
2. LEFT  — "Mã OTP xác thực: **482916**" (OTP digits in monospace, slightly bold)
3. RIGHT — "Đăng ký trải nghiệm sản phẩm mới!" (user reply bubble, neutral grey)
4. LEFT  — "Tặng bạn Voucher **30%** cho đơn hàng tiếp theo 🎁" (green bubble + gift icon)

Each bubble: fade-up + scale (0.92 → 1) + small "typing" dots that appear 250ms before the bubble resolves. After the 4th bubble holds ~3s, the list fades out and replays.

### Orbiting service icons (around the phone)
Keep the visual language of the reference: rounded-square chips with thin shadow, brand-green-tinted background, each holding a recognizable channel mark.

| Slot | Icon | Source |
|------|------|--------|
| Top-left | SMS speech bubble | inline SVG (matches reference) |
| Top-mid | Audio waveform | lucide `AudioLines` |
| Top-right (Viber) | Viber-style call bubble | inline SVG, purple accent |
| Mid-left | Blue dot-grid (channel hub) | inline SVG |
| Mid-right (Zalo) | "Zalo" lozenge on blue chat | inline SVG, brand blue |
| Bottom-left | Lightbulb (insight) | lucide `Lightbulb` |
| Bottom-mid | Envelope (email) | lucide `Mail` |
| Bottom-right | Gift (rewards) | lucide `Gift` |

Each chip:
- Idle: gentle 6s float (`translateY ±6px`, staggered phase per chip).
- Sequenced highlight: every 0.5s the "active" chip scales to 1.08, glows green, then returns — cycling through all 8 in order, then repeats. This is the "nhấp nháy lần lượt" the user asked for.
- Soft connecting line (SVG, dashed `hsl(var(--primary) / 0.25)`) from each chip toward the phone center, animated `dash-flow` (reuse existing keyframe in `index.css`).

### Background harmony with Hero
- Re-use `var(--gradient-hero)` (already on Hero) so the animation block visually melts into the headline side.
- Add a soft radial `hsl(var(--primary) / 0.10)` behind the phone only on the right column to draw the eye without a hard divider.
- A faint dot-grid mask (same pattern as TrustBand) under the icons, very low opacity (≤0.15), tying the section to the rest of the page.

## Hero.tsx changes
- Wrap current text block and the new `<HeroChatAnimation />` in `lg:grid lg:grid-cols-[1.05fr_0.95fr] lg:gap-12 items-center`.
- Remove `text-center` / `max-w-4xl` on lg only; keep current centered layout for mobile/tablet (animation hidden on mobile).
- Slight bottom-padding tweak so the phone doesn't push the section past the existing `max-height` cap.

## Files touched
1. **NEW** `src/components/site/HeroChatAnimation.tsx` — phone, chat sequence, orbit icons, all timing.
2. **EDIT** `src/components/site/Hero.tsx` — 2-column layout on lg, mount animation on the right.
3. **EDIT** `src/index.css` — add 3 small keyframes (`bubble-in`, `chip-highlight`, `phone-float`) and a `.hero-anim` mask helper. Re-use existing `dash-flow`, `float`, `signal-pulse`.

## Out of scope
- No new image assets — all icons are inline SVG or lucide-react (already installed) to keep payload tiny and colors theme-controlled.
- No backend, no copy changes to the headline/CTA.
- Mobile rendering of the animation kept off in v1 to protect the hero height target you just set; can be enabled in a follow-up if desired.

## Accessibility & performance
- `aria-hidden="true"` on the whole decorative animation; chat bubble text duplicated in a visually-hidden `<ul>` for screen readers.
- All animations pause under `@media (prefers-reduced-motion: reduce)` — bubbles render in final state, icons static.
- Pure CSS transforms + opacity (GPU-friendly), no layout thrash, no JS rAF loop — only one `setInterval` advancing the bubble + chip indices.
