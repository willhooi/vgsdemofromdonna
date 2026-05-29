## About Us — Hybrid Cinematic

Rebuild `src/pages/About.tsx` to a cinematic, trust-forward narrative that maximizes existing components and adds 2 small new sections.

### Page structure (top → bottom)

1. **Hero typographic** (new lightweight section)
   - Eyebrow: "About VietGuys"
   - Big display headline: "17 years connecting brands with millions of Vietnamese."
   - Sub: 1–2 sentences on mission
   - Background: `VWatermark` faint, soft radial gradient
   - 2 CTAs: "Talk to us" → #cta, "Our story" → #story

2. **Numbers band** (new compact section)
   - 4 KPIs with count-up (`use-count-up`): 17 years · 500+ enterprise brands · 99.95% uptime · 2B+ messages/year
   - Full-width strip with subtle border, KPI cards

3. **Origin story** — reuse `HumanStory` (2007 founding narrative)

4. **Milestones** — reuse `AboutMilestones`

5. **Story pillars** — reuse `AboutStoryPillars`

6. **Japan bridge** — reuse `JapanBridge`

7. **Accrete backing** — reuse `AccreteBacking` (anchor `#accrete`)

8. **Leadership** — reuse `Team`

9. **Trust wall** — reuse `LogoMarquee` (certifications) + `TrustMap` (offices/coverage)

10. **CTA with form** — reuse `CTASection` (already has the VietGuys-style form)

### New components to add

- `src/components/site/AboutHero.tsx` — typographic hero with watermark
- `src/components/site/AboutNumbers.tsx` — 4-KPI band with count-up animation

### Files touched

- `src/pages/About.tsx` — rewrite section ordering, import new components
- `src/components/site/AboutHero.tsx` — new
- `src/components/site/AboutNumbers.tsx` — new
- (optional) `src/locales/en.ts` + `src/locales/vi.ts` — add i18n keys for hero + numbers

### Design notes

- Reuse existing tokens (`heading-display`, `heading-section`, `container-tight`, `eyebrow`, `chapter-eyebrow`, `shadow-soft`)
- No new colors; keep semantic tokens
- Animations: `animate-fade-up` staggers; count-up on numbers band when in view
- Anchors: `#story`, `#accrete`, `#team`, `#cta` for in-page nav

### Out of scope

- No backend / form submission changes (CTASection already handled)
- No new images beyond existing assets
- No header/footer changes
