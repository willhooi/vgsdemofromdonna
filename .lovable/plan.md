## Redesign "Zalo Engagement Solutions" tab

Replace the current 3-column BUSINESS / Super App / CUSTOMER stage with a new 2-column layout matching the attached reference. Break it into small presentational sub-components (all inside `src/pages/Solutions.tsx`, no new files unless needed).

### New layout

```text
┌─────────────────────────────────────────────────────────────┐
│  Soft green gradient background, rounded 28px               │
│                                                             │
│  LEFT COLUMN (visual)          RIGHT COLUMN (content)       │
│  ┌──────────────────────┐     ┌──────────────────────────┐  │
│  │ • Mini App Game      │     │  Zalo Engagement         │  │
│  │ • Mini App Voucher   │     │  Solutions Suite (title) │  │
│  │ • Mini App eCom/Loy  │     │  — blue heading on white │  │
│  │  (vertical feature   │     ├──────────────────────────┤  │
│  │   list, left side)   │     │  Dark card (black,       │  │
│  │                      │     │  rounded 28px):          │  │
│  │  [Phones mockup /    │     │   ➜ bullet 1             │  │
│  │   illustration area] │     │   ➜ bullet 2             │  │
│  │                      │     │   ➜ bullet 3             │  │
│  │  ┌────────────────┐  │     │   ➜ bullet 4             │  │
│  │  │ Green caption  │  │     │  (green arrow icons,     │  │
│  │  │ Automation …   │  │     │   white text)            │  │
│  │  └────────────────┘  │     └──────────────────────────┘  │
│  └──────────────────────┘                                    │
└─────────────────────────────────────────────────────────────┘
```

### Component breakdown (local to Solutions.tsx)

1. `ZaloEngagementSection` — outer wrapper, green gradient bg, 2-col grid (`1.05fr 1fr`), collapses to 1-col under 900px.
2. `ZeFeatureList` — 3 rows: icon circle + two-line label ("Mini App / Game", "Mini App / Voucher", "Mini App / eCom/Loyalty"). Icons: `Gamepad2`, `Ticket`, `ShoppingBag` (lucide) in green circular badges.
3. `ZePhonesVisual` — stylized SVG/CSS composition standing in for the two phone mockups (rounded phone frames with colored screens: one "RETAIL" pink, one "Gifts" orange with a wheel-of-fortune circle). Pure CSS + inline SVG, no image asset.
4. `ZeAutomationCaption` — soft-green pill card, text: "Automation System – a customer data management platform tightly integrated with Zalo OA and Mini Apps, powered by AI to optimize **Customer Lifetime Value.**"
5. `ZeTitleCard` — white rounded card with the blue title "Zalo Engagement Solutions Suite" (color `#4C7BF4`, Plus Jakarta Sans, 40–44px, tight leading).
6. `ZeBenefitsCard` — black rounded card, list of 4 benefits, each row = green circular arrow (`ArrowRight` in mint circle) + white text. Content:
   - A tool that helps collect data and connect with customers via Zalo, in compliance with Decree 13 and personal data protection laws.
   - A Mini App library that enables gaming experiences, voucher rewards, and point accumulation directly on Zalo without requiring an app download.
   - Expand unlimited customer experiences on Zalo with Mini Apps for Games, Gift Wallets, eCommerce, Rewards, Loyalty, and more.
   - Automation flows powered by AI to nurture customers and grow Customer Lifetime Value.

### Files touched

- `src/pages/Solutions.tsx`
  - Replace the JSX block at lines 361–456 (the `.zalo-engagement` container) with the new `ZaloEngagementSection`.
  - Remove now-unused imports: `Coffee, Shirt, Package, HeartHandshake, ClipboardEdit, ListChecks, MessageCircle, ThumbsUp, PiggyBank, Star, Smartphone`. Keep/add: `Gamepad2, Ticket, ShoppingBag, ArrowRight, Heart, Trophy` as needed.
  - Replace all `.ze-*` CSS rules in the `CSS` constant with a new stylesheet for the new layout (green gradient bg `#eaf7d9 → #cfeeae`, blue `#4C7BF4`, green pill `#7BC47F`, dark card `#0f0f10`, arrow badge `#26b673`).

### Technical notes

- No new files, no new deps, no image assets — pure JSX + Tailwind-free scoped CSS via the existing `CSS` string.
- The phone visual is an SVG composition; keep it under ~80 lines of markup.
- Preserve outer `<div className="pane show">` and `style={{ gridColumn: "1 / -1" }}` wrapper so it still spans the catalog grid.
- Mobile (<900px): stack columns, phone visual scales down, benefits card full-width.

### Open question

The reference shows realistic phone photos with a wheel-of-fortune. Two options for the left visual:
- **A. Coded SVG mockup** (proposed above) — no asset, fully themable, slightly stylized.
- **B. Use an uploaded/generated phone mockup image** — closer to the reference but requires an asset.

Default: **A** unless you say otherwise.
