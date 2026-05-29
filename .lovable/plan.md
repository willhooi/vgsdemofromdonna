# About Page — Content Enrichment + Cinematic Motion Pass

## 1. Remove sticky section nav
- Delete `<AboutSectionNav />` usage from `src/pages/About.tsx` and remove the import.
- Keep `src/components/site/AboutSectionNav.tsx` file deleted (no longer needed).
- Keep section `id`s on wrappers (`#story`, `#vision`, `#milestones`, `#values`, `#team`, `#certificates`) — harmless and useful for deep-links from Footer/CTAs.

## 2. Apply content from vietguys.biz/en/about-us/vietguys

Extracted from the old site, mapped into existing sections (no new sections, just richer content):

**AboutHero**
- Keep tagline "Short steps · on a long journey".
- Add a one-line positioning under H1: "Vietnam's pioneer in Mobile Marketing Solutions since 2007 — now part of Accrete Inc., Tokyo Stock Exchange listed."

**AboutVisionMission** — replace placeholder copy with the old-site canonical text:
- Vision: "To become the leading Mobile Marketing Solutions provider in Vietnam and the region, accompanying enterprises on their digital transformation journey."
- Mission: "Deliver constantly-improved Mobile Marketing Solutions for Vietnamese enterprises — creating holistic value for businesses and the wider community, not just sales or profit."
- Add a small footer line: "Licensed Telecommunications Service Provider (no network infrastructure) — Ministry of Information & Communications, Vietnam."

**AboutStoryPillars (Core Values)** — sync to the 6 official values from old site:
1. People First  2. Quality  3. Integrity & Honesty  4. Accountability  5. Creativity  6. Innovation
(Keep current visual treatment; only labels/short descriptions updated to match old-site wording.)

**AboutMilestones** — extend timeline with old-site milestones if missing:
- 2007 Founded · 2008 Samsung E-warranty · 2017 LG · 2018 #1 SMS in e-commerce · 2019 Viber · 2020 OTPBox · 2021 5,000+ brands / 15 solutions · 2022 Accrete merger · 2024 5M msgs/day.

**AboutCertificates** — keep 4 cards; add subline "Audited & re-certified annually."

**New micro-block inside Chapter 03 body** (no new section): mention Accrete ticker / TSE listing and "Vietnam–Japan bridge" framing already present — just tighten wording to match old-site tone.

## 3. Hybrid cinematic motion system

Goal: smooth, brand-consistent (the "V" signal sweep), respects `prefers-reduced-motion`, GPU-friendly, no layout thrash. Hybrid = CSS keyframes for ambient loops + IntersectionObserver-driven reveal classes for scroll choreography. No new heavy dependency; framer-motion only where stagger is needed (already in deps if present, otherwise pure CSS/IO).

**Shared primitives (new file: `src/components/motion/Reveal.tsx`)**
- `<Reveal variant="fade-up" | "fade" | "clip-right" | "scale-soft" delay={0..600}>` — wraps children, uses IntersectionObserver (once), toggles a data-attribute that triggers a CSS transition defined in `index.css`.
- Single source of truth for easing: `cubic-bezier(0.22, 1, 0.36, 1)` (cinematic ease-out-expo-ish), durations 600–900ms.
- Honors `@media (prefers-reduced-motion: reduce)` → instant opacity 1, no transform.

**index.css additions**
- Keyframes: `signal-sweep` (existing if any), `v-trace` (SVG stroke draw), `ken-burns` (slow image zoom 1→1.06 over 12s), `quote-rise` (translateY + clip-path reveal), `dot-pulse`.
- Utility classes: `.reveal`, `.reveal[data-in="true"]` variants, `.ken-burns`, `.v-trace path { stroke-dasharray:1; stroke-dashoffset:1; animation: v-trace 1.6s ease forwards; }`.

**Per-section choreography**
- **AboutHero**: headline word-by-word fade-up (CSS stagger via `--i`), SignalArt `v-trace` plays once, background image gets `ken-burns`. Tagline fades in last.
- **AboutChapter**: chapter number "01/02/03" does a vertical clip reveal + underline draw; H2 fade-up; body paragraphs fade-up staggered 80ms; image uses `clip-right` (clip-path inset 0 100% 0 0 → 0) + subtle ken-burns on hover; pull-quote slides up with left brand-gradient bar growing from 0 → full height.
- **AboutVisionMission**: two cards do scale-soft (0.96→1) + fade, VWatermark fades in 200ms later; on hover, gradient border shimmer (CSS only).
- **AboutMilestones**: timeline line draws left-to-right on enter (`scaleX 0→1`, origin-left, 1200ms); each dot pulses once when its row enters; year numbers count-up via existing `use-count-up`.
- **AboutStoryPillars**: 6 cards stagger fade-up 60ms each; icon micro-bounce on enter.
- **AboutCertificates**: cards fade-up + 3D tilt on hover (CSS `transform: perspective(800px) rotateY(...)`), logo gets subtle grayscale→color transition.
- **CTASection**: gradient text shimmer loop (slow, 8s).

**Performance & a11y**
- All animations on `transform`/`opacity` only.
- IntersectionObserver with `rootMargin: "0px 0px -10% 0px"`, `once: true`.
- Global `@media (prefers-reduced-motion: reduce) { *, *::before, *::after { animation: none !important; transition: none !important; } }` scoped to motion utility classes (not to UI components that need transitions for state).

## 4. Files touched

- edit `src/pages/About.tsx` — remove SectionNav, wrap content blocks in `<Reveal>`.
- delete `src/components/site/AboutSectionNav.tsx`.
- create `src/components/motion/Reveal.tsx`.
- edit `src/index.css` — add keyframes + reveal utilities + reduced-motion guard.
- edit `src/components/site/AboutHero.tsx` — word stagger, v-trace, ken-burns, positioning line.
- edit `src/components/site/AboutChapter.tsx` — chapter number reveal, image clip-reveal, pull-quote bar grow.
- edit `src/components/site/AboutVisionMission.tsx` — canonical vision/mission copy + license line + motion.
- edit `src/components/site/AboutStoryPillars.tsx` — 6 official values + stagger.
- edit `src/components/site/AboutMilestones.tsx` — line draw, dot pulse, full milestone set.
- edit `src/components/site/AboutCertificates.tsx` — subline + tilt-on-hover.

## 5. Out of scope
- No new routes, no backend changes, no copy in other pages.
- No framer-motion install if not already present (pure CSS + IO is enough for this scope).

```text
Hero ──► Chapter 01 ──► Chapter 02 ──► Chapter 03
            │              │              │
            └─► Vision/Mission ─► Milestones ─► Values ─► Team ─► Certificates ─► CTA
(no sticky nav; deep-link ids preserved)
```
