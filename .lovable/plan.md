## Goal
Replace the single `<img>` currently rendered in the `otp` tab of `src/pages/Solutions.tsx` with a fully-coded layout that reproduces the reference infographic using semantic divs, CSS grid, and inline SVG/lucide icons — so the section is responsive, themeable, and editable.

## Layout structure

```text
.zalo-engagement (section, full-width)
├── .ze-head
│   ├── h2  "Zalo Engagement Solutions"      (large blue display)
│   └── p   "An innovative approach to growing followers…"
│
└── .ze-stage                                (CSS grid: 1fr 1.4fr 1fr)
    │
    ├── .ze-col ze-business
    │   ├── .ze-pill  "BUSINESS"             (green pill badge)
    │   └── .ze-vlist                        (4 vertical cards)
    │       ├── card: tag "F&B"      + icon (Coffee)
    │       ├── card: tag "RETAIL"   + icon (Shirt)
    │       ├── card: tag "FMCG"     + icon (Package)
    │       └── card: tag "SERVICE"  + icon (HeartHandshake)
    │
    ├── .ze-col ze-center
    │   ├── .ze-pill  "Super App"
    │   ├── .ze-superapp
    │   │   ├── big Zalo logo (SVG)
    │   │   └── .ze-apprail  (TikTok, Facebook, MoMo — SVG tiles)
    │   ├── .ze-pill  "Mini App"
    │   ├── .ze-miniapps  (grid 5 cols)
    │   │   └── each: label + orange rounded icon tile
    │   │        Gift · Loyalty · Reward · Form · Survey
    │   ├── .ze-divider   (orange dashed road bar)
    │   └── .ze-stats     (3 cols)
    │       ├── "X2 – X5 Response Rate"          + chat-bubble icon
    │       ├── "Unlimited Experience Design"    + 5-star + thumbs-up
    │       └── "Saving >60% Communication Cost" + piggy-bank icon
    │
    └── .ze-col ze-customer
        ├── .ze-pill "CUSTOMER"
        └── .ze-customer-card
            ├── stylized avatar (SVG silhouette + phone glyph)
            └── floating chips: LOYALTY (heart), VOUCHER (ticket), GAME (gamepad)
```

## Styling
- Add a new `.zalo-engagement` block inside the existing `CSS` constant in `src/pages/Solutions.tsx` (keep the visual system consistent with the rest of the page).
- Palette: title `#4C7BF4` (blue), pills `#5FBF8B` green with white text, mini-app tiles `#EE6A3C` orange, background soft gradient `linear-gradient(180deg,#F7FBF7 0%,#EEF3FF 100%)`.
- Radii `20–28px`, soft shadows `0 10px 30px rgba(20,40,80,.06)`.
- Grid collapses to a single column under `900px`; center column stacks Super App → Mini App → Stats.

## Icons
Use `lucide-react` (already in the project):
- Business: `Coffee`, `Shirt`, `Package`, `HeartHandshake`
- Mini App: `Ticket`, `Heart`, `Trophy`, `ClipboardEdit`, `ListChecks`
- Stats: `MessageCircle`, `ThumbsUp`, `PiggyBank`
- Customer chips: `Heart`, `Ticket`, `Gamepad2`
- Super App tiles: inline SVG for Zalo wordmark, TikTok, Facebook, MoMo (simple brand glyphs, monochrome-safe).

## Files touched
1. `src/pages/Solutions.tsx`
   - Remove the `<img src={zaloEngagementImg.url}>` block (lines ~359–377) and the `zaloEngagementImg` import.
   - Insert the new JSX described above inside `{tab === "otp" && …}`.
   - Extend the `CSS` string with `.ze-*` rules and a mobile breakpoint.
2. (Optional cleanup) delete `src/assets/solutions/zalo-engagement-solutions.png.asset.json` since it will no longer be referenced.

## Out of scope
- No changes to other tabs, header/footer, or business logic.
- No new dependencies; lucide-react is already installed.

## Open question
The reference shows a photo of a smiling woman holding a phone on the Customer side. Two options — pick one before I build:
- **A. Illustrated placeholder** — an SVG silhouette + phone glyph with the floating LOYALTY / VOUCHER / GAME chips (fully code, no asset).
- **B. Keep a photo** — you upload a transparent-background portrait and I wire it in as the customer visual, chips overlaid via CSS.

Default if you don't answer: **Option A** (all-code, matches the "no hard-coded image" request).
