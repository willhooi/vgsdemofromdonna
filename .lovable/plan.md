# Footer Relayout Plan

Refactor `src/components/site/Footer.tsx` into a richer, multi-band footer that lifts VietGuys' credibility (Accrete + certs), restructures service navigation around the live `vietguys.biz/en/services` taxonomy, and adds proper social links.

## Layout (top → bottom)

```text
┌──────────────────────────────────────────────────────────────────────┐
│ BAND 1 — Accrete trust strip (full width, gradient/dark bg)          │
│  [Accrete logo] Backed by Accrete Inc. Japan                         │
│                  TOKYO STOCK EXCHANGE Listed · Forbes Asia "Best     │
│                  Under A Billion"                    [Learn more →]  │
├──────────────────────────────────────────────────────────────────────┤
│ BAND 2 — Link grid (5 columns on lg, collapses on mobile)            │
│  Brand+Contact │ AI Services★ │ Messaging │ Engagement │ Company    │
│  (1.4fr)       │ (1fr)        │ (1fr)     │ (1fr)      │ (1fr)      │
├──────────────────────────────────────────────────────────────────────┤
│ BAND 3 — Certifications strip                                        │
│  ISO 27001 · VNCERT · VNTA · Zalo Trusted Partner (4 logo cards)    │
├──────────────────────────────────────────────────────────────────────┤
│ BAND 4 — Legal bar                                                   │
│  © 2026 VietGuys JSC · Privacy · Terms · Sitemap · PDPL 2023        │
│                                              [FB] [IN] [Zalo] EN|VI  │
└──────────────────────────────────────────────────────────────────────┘
```

## Band-by-band content

### Band 1 — Accrete backing (highlight #1)
- Dark gradient background using `--gradient-brand` for contrast against the rest.
- Left: Accrete logo (reuse `@/assets/brand/accrete-logo.png`).
- Right: headline **"Backed by Accrete Inc. Japan"** + subline **"Tokyo Stock Exchange Listed · Forbes Asia 'Best Under A Billion'"**.
- CTA link → `https://www.accrete-inc.com/` (new tab).

### Band 2 — 5-column link grid

**Col 1 — Brand & Contact**
- Logo, short tagline.
- Address: HBT Building, 456–458 Hai Ba Trung St., Tan Dinh Ward, HCMC.
- Email `sales@vietguys.biz`, Phone `028 7300 8027`.
- "Request a Demo" CTA button (kept).

**Col 2 — AI Services ★ (highlighted)**
- Visually distinct: subtle gradient border / "NEW" badge / primary accent on heading.
- Items: AI Campaign Services · PangoCDP · OTPBox (Multi-Channel OTP) · Customized AI Solutions.

**Col 3 — Messaging**
- SMS Brandname · SMS Fixed · SMS Short Code · Voice Brandname · Voice OTP.

**Col 4 — Engagement & OTT**
- Zalo ZBS Template · Viber Message · Email Marketing · Email OTP · Mobile Topup · Smart Warranty.

**Col 5 — Company**
- About Us · Strategic Partnership · Careers · Case Studies · Market Insights.

(Routes that don't exist yet point to `#` placeholders with a TODO comment — no new pages created in this task.)

### Band 3 — Certifications (highlight #4)
- Pull the same 4 logos already used in `TrustBand.tsx`:
  - `iso-27001-v2.png` — ISO/IEC 27001:2013
  - `vncert-new.jpg` — VNCERT/CC
  - `vnta-new.png` — VNTA Licensed
  - `zalo-trusted-v3.png` — Zalo Trusted Partner
- Render as a horizontal row of 4 small bordered cards (logo + 1-line label), grayscale → color on hover.

### Band 4 — Legal bar
- Left: © {year} VietGuys Joint Stock Company · Privacy · Terms · Sitemap · PDPL 2023 Compliant.
- Right: social icon row + EN/VI toggle.
  - Facebook → `https://www.facebook.com/VIETGUYS`
  - LinkedIn → `https://www.linkedin.com/company/vietguys/`
  - Zalo → `https://zalo.me/4404293319006178133` (use `MessageCircle` lucide icon as Zalo stand-in, with `aria-label="Zalo"`).
- All social links: `target="_blank"`, `rel="noopener noreferrer"`.

## Technical notes
- Single file change: rewrite `src/components/site/Footer.tsx`.
- Reuse existing tokens (`bg-background`, `text-muted-foreground`, `--gradient-brand`, `border-border`, `container-tight`) — no new colors.
- Cert logos imported from `@/assets/certs/*` (same paths as `TrustBand.tsx`).
- Accrete logo imported from `@/assets/brand/accrete-logo.png`.
- Responsive: grid collapses `lg:grid-cols-5` → `md:grid-cols-2` → mobile single column. Cert strip wraps to 2x2 on mobile. Legal bar stacks on mobile.
- No i18n strings added in this pass (content is English-only, matching current footer); can be lifted into `locales/` later if needed.
- No route additions; missing routes (`/about/strategic-partnership`, `/resources/case-studies`, etc.) stay as TODO links — flag for follow-up.

## Out of scope
- Creating new pages for the linked routes.
- Wiring the EN/VI toggle to actual i18n state (kept as-is, visual only).
- Changing `AccreteBacking.tsx` or `TrustBand.tsx` sections elsewhere on the site.
