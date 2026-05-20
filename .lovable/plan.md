## 1. Solutions section — refine ByteTech partnership, remove metrics

**File:** `src/components/site/Solutions.tsx`

- Remove `MetricsStrip` rendering and its definitions (no more 5M messages / 76 clients / 99.95% uptime / 9 channels strip).
- Upgrade `CDPSupportStrip` into a more intentional but still subtle **"CDP Solution — Strategic partnership with ByteTech"** card:
  - Eyebrow: `CDP SOLUTION` (small, brand teal).
  - Title line: `Strategic partnership with ByteTech` next to ByteTech logo.
  - Replace generic feature pills with the 3 outcome-focused bullets requested:
    - Drive personalized customer experiences
    - Maximize conversion rates
    - Optimize costs
  - Keep tone tinh tế: soft brand-tinted card, light divider, subtle hover; no heavy gradients.
- Keep the bottom CTA ("Explore the platform") and OutcomeStage/OutcomeRail unchanged.

## 2. Industries section — concise sector list + 4 case studies

**File:** `src/components/site/Industries.tsx` (refactor in place)

- **Top block — Leading sectors (concise):**
  - Keep heading + sub.
  - Replace the 4 link cards with a compact, non-interactive list/grid of sectors (icon + name + 1-line desc). No "Learn more" link, no `Link` wrapper, no hover translate. Render as a 2×2 / 4-col responsive grid of small static tiles.
  - Sectors stay: Banking & Finance, Airlines & Travel, Retail & E-commerce, Logistics & Enterprise (plus optionally add a couple more short ones like Insurance, F&B — confirm only if needed; default to current 4 to keep scope tight).

- **Bottom block — Featured case studies (new):**
  - Sub-heading: `Featured case studies`.
  - 4 cards in a responsive grid (1 / 2 / 4 cols). Each card: industry tag, client (anonymized), short title, 1 headline metric, and a **"Learn more"** button (`ArrowUpRight`) linking to `/case-studies/{slug}` (route may not exist yet — link is fine; clicking can 404 later, out of scope).
  - Seed data inline in the component (4 entries), reusing case study material similar to `CaseStudies.tsx`:
    1. Banking — Credit card activation via multi-layer OTT fallback (+38% activation)
    2. Retail/E-commerce — Personalized CSKH with PangoCDP (+27% revenue/campaign)
    3. FMCG/F&B — Loyalty 360° on Zalo Mini App (+52% return rate)
    4. Airlines/Travel — Real-time flight & booking notifications (e.g. 1.5M passengers reached) — new short entry to round out 4.

- Keep existing watermark, container, "Don't see your sector? Talk to us" footer link.

## Technical notes

- All changes are frontend/presentation only.
- Use existing semantic tokens (`--primary`, `--accent`, `--accent-soft`, `--accent-deep`, etc.) — no raw colors.
- No new dependencies. Icons from `lucide-react` already in use.
- `Index.tsx` order stays the same; `CaseStudies.tsx` is not mounted on the homepage so no duplication.
