# VietGuys — Brand Storytelling Overhaul

Transform the site from a vendor listing into a living, breathing trusted partner with a 19-year heartbeat. EN-first bilingual, with a Signature Artwork System (signal waves × Southeast-Asian patterns) running through every act of the scroll.

---

## 1. Signature Artwork System (foundation)

A reusable SVG/Canvas language used across all sections. One source of truth, multiple expressions.

**New file:** `src/components/brand/SignalArt.tsx`
- `<SignalWave />` — concentric arcs radiating from a point, animated `stroke-dashoffset` pulse. Props: `intensity` (1–5), `tone` ("brand" | "accent" | "muted"), `density`.
- `<SignalGrid />` — dot-matrix lattice, dots light up in a wave (used in Trust map + About timeline late-years).
- `<SeaPattern />` — subtle Đông Nam Á–inspired geometric motif (lozenges + arcs derived from Đông Sơn drum / batik), stroked in brand color at 6–10% opacity, used as background plate.
- `<TwoWavesBridge />` — two opposing wave sources meeting at a central glow point (Japan Bridge act).

**Tokens added to `src/index.css`:**
- `--signal-glow: 0 0 40px hsl(var(--primary) / 0.35)`
- `@keyframes signal-pulse`, `@keyframes dot-bloom`, `@keyframes wave-meet`
- `.heart-pulse` utility for the live counter

All artwork uses existing brand HSL tokens — no new colors.

---

## 2. Bilingual (EN-first)

**New:** `src/lib/i18n.ts` — minimal in-house dictionary + `useT()` hook reading `localStorage.lang` with default `"en"`. No new dependency.
- `src/locales/en.ts` (primary, written first, fully populated)
- `src/locales/vi.ts` (mirror, populated for Hero/About/Solutions/Trust/Japan Bridge keys)
- Header gets a compact `EN | VI` toggle (replaces nothing else).

Existing hard-coded VI/EN strings in target sections move into the dictionary. Other pages stay as-is for now.

---

## 3. Storytelling Arc — Section by section

### Act 1 — Hero (rewrite `src/components/site/Hero.tsx`)
- Headline: **"Where customer conversations become business growth."**
- Sub: short, human, one line.
- Single CTA: **"Contact Experts"** → `/contact`. Secondary link "See how we connect" scrolls to About.
- Visual: a stylized phone on the right; `<SignalWave intensity={4} />` radiates outward; when the wave reaches the VietGuys mark (top-left of panel), the mark briefly **glows** (CSS filter animation on logo).
- **Live heart-beat counter**: "5,000,000 messages/day" with `.heart-pulse` (1.05 scale every 1.2s, eased). Number animates up on mount via `requestAnimationFrame` count-up.
- Remove: channel chip cloud, stat trio, multi-CTA, trust-signal checklist (those move/dedupe — see §4).

### Act 2 — About / Timeline (new `src/components/site/Timeline.tsx`, replaces nothing; inserted after Hero)
- Horizontal scroll-snap rail of milestones (2007 founding → 2012 first carrier deal → 2016 Zalo partner → 2019 ISO 27001 → 2022 PangoCDP → 2024 Accrete M&A → 2026 today).
- Each card: year, one-line story, one stat. On enter-viewport: pulse + `<SignalWave>` behind card.
- Background artwork **evolves**: early years use a single thin wave; later years swap to `<SignalGrid>` denser lattice — visual metaphor of growth.
- Mobile: vertical stack with same pulse-on-enter.

### Act 3 — Solutions (rewrite `src/components/site/Solutions.tsx` as hex constellation)
- Central hex = VietGuys mark. Six surrounding hexes = SMS, Zalo ZNS, Viber, Email, OTP/Alerts, AI Campaigns. Thin animated connector lines from each hex to center (SVG `stroke-dasharray` flow).
- Click a hex → inline detail panel slides in below (no route change), showing: 1-line value prop, 3 bullets, "Learn more" link to existing solution route.
- Keyboard accessible (tab + enter), aria-expanded.
- Removes the current grid card layout.

### Act 4 — Trust (new `src/components/site/TrustMap.tsx`, replaces current `TrustBar` + `WhyVietGuys` industry visuals — see §4)
- Stylized Vietnam map rendered as a dot matrix (`<SignalGrid>` clipped to a simplified VN silhouette path). Dots illuminate progressively on scroll (IntersectionObserver + staggered class toggle), representing nationwide reach.
- Three certification chips beneath: **ISO/IEC 27001**, **VNCERT**, **Telecom License (MIC)** — each with short proof line.
- Single sentence: "Trusted by 76 enterprises across banking, airlines, retail, logistics."

### Act 5 — Japan Bridge (new `src/components/site/JapanBridge.tsx`)
- Headline: **"Global strength, local fluency."**
- Visual: `<TwoWavesBridge />` — left wave originates from a small VN flag dot, right wave from a JP flag dot, they meet center → bright glow ring.
- Copy: 2 short paragraphs on the Accrete Inc. partnership: what it unlocks (capital, governance, APAC reach) + what stays local (team, carrier relationships, language). Professional tone, no hype.
- CTA: "Read the partnership story" → `/about` (anchor `#accrete`).

---

## 4. Dedupe pass

Remove or merge to avoid repetition. Edits to `src/pages/Index.tsx` section order:

```text
Hero → Timeline → Solutions (hex) → TrustMap → JapanBridge → CaseStudies → HumanStory → FAQ → CTASection → Footer
```

Removed from Index:
- `TrustBar` (merged into TrustMap)
- `LogoMarquee` (kept once — moved inside TrustMap as a thin strip below certs)
- `WhyVietGuys`, `Sharp`, `Mobile`, `Partners`, `CTABottom` — content overlaps with Solutions/Trust/JapanBridge/CTASection. Files kept on disk (not deleted) in case other pages import them; just unmounted from Index.
- Hero's old chip cloud, stat trio, trust checklist (those facts now live in TrustMap + Timeline counter).

---

## 5. Files

**Create**
- `src/components/brand/SignalArt.tsx`
- `src/components/site/Timeline.tsx`
- `src/components/site/TrustMap.tsx`
- `src/components/site/JapanBridge.tsx`
- `src/lib/i18n.ts`, `src/locales/en.ts`, `src/locales/vi.ts`
- `src/hooks/use-count-up.ts`

**Edit**
- `src/components/site/Hero.tsx` (rewrite)
- `src/components/site/Solutions.tsx` (rewrite as hex)
- `src/components/site/Header.tsx` (EN|VI toggle)
- `src/pages/Index.tsx` (new section order, dedupe)
- `src/index.css` (animations + glow token)

**Untouched**
- `HumanStory`, `CaseStudies`, `FAQ`, `CTASection`, `Footer`, `ChatBubble`, all `/solutions/*` and `/about` subroutes, sitemap, robots, SEO titles.

---

## 6. Out of scope

- Full VI translation of CaseStudies/FAQ (only the new arc sections are bilingual now).
- New routes or backend.
- Changes to existing `/about`, `/contact`, `/solutions/*` page bodies (the hex links to them as-is).

Approve and I'll build it end-to-end in one pass.
