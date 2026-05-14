# Infobip-style restructure on VietGuys brand

Goal: clean, white, modular layout inspired by infobip.com, executed strictly with VietGuys palette (green #39b44a primary, orange #ff9b17 accent, white base) and current Fraunces + Plus Jakarta typography. Easy to extend with new services. Bilingual EN-first preserved.

## 1. Hero — strip back to brand essentials

Replace `Hero.tsx` content (keep file). Layout: centered, white background, minimal.

- Eyebrow: removed.
- H1 (Fraunces, large): **"Where customer conversations become business growth."** — word "conversations" in green→deep-green gradient, italic.
- Sub-line: **"A member of [Accrete logo] from Japan"** — inline `<img>` of Accrete logo (placeholder SVG in `src/assets/brand/accrete.svg`, request user to swap real asset later) sized to cap-height, vertically centered, with `alt="Accrete Inc."`.
- Single CTA: orange `Button variant="cta"` → **"Contact Experts"** → `/contact`.
- No sub-paragraph, no animated phone, no signal waves, no live counter, no secondary link, no chip cloud. Just headline + accrete line + CTA on white with a very soft `--gradient-hero` wash.

## 2. New Media section (right after Hero)

New component `src/components/site/MediaShowcase.tsx`. Configurable via a single `media` config object at top of file so the user can swap easily.

```ts
type MediaItem =
  | { type: "video"; src: string; poster?: string; }
  | { type: "image"; src: string; alt: string; caption?: string; href?: string };
const media: MediaItem[] = [ /* default: 1 banner image placeholder */ ];
```

Behavior:
- If `media.length === 1` and it's a video → full-width 16:9 `<video autoplay muted loop playsinline>` with poster.
- If image → full-width banner with optional caption overlay.
- If `media.length > 1` → slide carousel (reuse existing `components/ui/carousel.tsx`, autoplay 6s, dots + arrows).
- Container: `container-tight`, rounded-3xl, `shadow-card`, light green-tint background band (`bg-[hsl(var(--primary-soft))]/40`) so the white hero contrasts with a soft green section.
- Comment block at top documents how to add/replace media.

## 3. Section structure (Infobip-inspired, modular)

`src/pages/Index.tsx` order — alternating white / soft-tint bands for visual rhythm:

1. Hero — white
2. MediaShowcase — soft green band
3. **Solutions** (rewritten as Infobip-style "Channels" grid) — white
4. **Industries** — soft orange band (`bg-[hsl(var(--accent-soft))]/50`)
5. **Trust / Certifications** (TrustMap, simplified) — white
6. **Case Studies** — soft green band
7. **Japan Bridge** (Accrete story, slimmed since hero already mentions it) — white
8. FAQ — soft gray (`bg-muted`)
9. CTASection — gradient-brand band
10. Footer

Drop from homepage: Timeline (move to /about later), HumanStory (kept in repo, unmounted), CaseBubble stays via ChatBubble component.

## 4. Solutions — extensible card grid (Infobip pattern)

Rewrite `Solutions.tsx`:
- Driven by single `services` array → adding a new service = appending one object.
  ```ts
  type Service = { id: string; icon: LucideIcon; name: string; tagline: string; bullets: string[]; href: string; };
  ```
- Layout: responsive grid `grid-cols-1 md:grid-cols-2 lg:grid-cols-3`, each card = white, border, hover lifts with green glow, icon in green-soft circle, orange "Learn more →" link.
- Section header: small green eyebrow "Solutions", Fraunces H2 "One brand. Every channel your customers use.", short sub.
- No more hex constellation (overkill, hard to extend). Documented in code comment that adding a service = one array entry.

## 5. Industries / Trust / Bridge — visual unification

- Industries: same card-grid pattern as Solutions, icon tinted orange.
- TrustMap: keep dot map but on white, certification chips below in a horizontal row.
- JapanBridge: shorter — just the two-waves SVG + 2 paragraphs + link to /about. Title preserved.

## 6. Brand discipline (palette + type)

- All colors via existing tokens — no new hex literals in components.
- White is dominant; green = primary surfaces (CTAs secondary state, eyebrows, bullet-V, soft band backgrounds via `--primary-soft`); orange reserved for the **single primary CTA per view** + accent micro-elements (link arrows, chapter eyebrow rule).
- Section bands: alternate `bg-background` ↔ `bg-[hsl(var(--primary-soft))]/40` ↔ `bg-[hsl(var(--accent-soft))]/40` ↔ `bg-muted` for contrast on all devices.
- Typography unchanged: Fraunces display, Plus Jakarta body. All headings use `.heading-display` / `.heading-section`.

## 7. ChatBubble — Web vs Zalo choice

Rewrite `ChatBubble.tsx`:
- Floating orange round button (unchanged).
- On click → small popover with two large options:
  1. **"Chat on this site"** → opens existing inline chat panel (current UI moves into a sub-view).
  2. **"Chat via Zalo"** → opens `https://zalo.me/<vietguys-oa-id>` in new tab. ID held in a const at top of file with TODO comment for the user to replace.
- Back arrow in inline chat returns to the choice screen.
- Accessible labels, keyboard close on Esc.

## 8. i18n updates

`src/locales/en.ts` + `vi.ts`:
- `hero`: keep `headline` + `cta`; add `accreteLine: "A member of {accrete} from Japan"` with `{accrete}` replaced by the logo `<img>` at render time. Drop `eyebrow`, `sub`, `secondary`, `counterLabel`, `pulseTag` from rendered hero (leave keys for backward compat or remove).
- Add `media.title` (optional caption), `chat.choose`, `chat.web`, `chat.zalo`, `chat.back`.
- Solutions/industries/trust/bridge copy untouched (already EN-first).

## 9. Files

**Create**
- `src/components/site/MediaShowcase.tsx`
- `src/assets/brand/accrete.svg` (placeholder text-logo, user can replace)

**Edit**
- `src/components/site/Hero.tsx` (strip down)
- `src/components/site/Solutions.tsx` (rewrite as extensible grid)
- `src/components/site/Industries.tsx` (align card style with Solutions)
- `src/components/site/TrustMap.tsx` (white bg, simpler cert row)
- `src/components/site/JapanBridge.tsx` (slim down)
- `src/components/site/ChatBubble.tsx` (web ↔ Zalo choice)
- `src/pages/Index.tsx` (new section order + alternating bands)
- `src/locales/en.ts`, `src/locales/vi.ts` (hero + chat keys)
- `src/index.css` only if a new utility is needed (likely none)

**Untouched**
- Header, Footer, FAQ, CTASection, CaseStudies, HumanStory (kept on disk, unmounted), Timeline (kept), routes, sitemap, robots, SEO titles, About/Solutions pages.

## 10. Out of scope

- Real Accrete logo asset (user provides).
- Real Zalo OA URL (user provides ID).
- Real video/banner assets for MediaShowcase (placeholder image shipped).
- Multilingual VI translation of any new English copy beyond hero/chat keys.
