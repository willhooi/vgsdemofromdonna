## Goal
Transform the "Featured case studies" area in `src/components/site/Industries.tsx` into a brand showcase wall (4–6 tiles) inspired by Insider One's *"What brands achieve with Insider One"* — clean logo grid by default, rich achievement reveal on hover.

## Reference behavior (Insider One)
- Grid of large brand cards, each showing the **client logo** prominently on a clean background.
- On hover: card flips/fades to reveal the **headline outcome metric** (e.g. "+38% activation rate"), a short result sentence, the channels/products used, and a "Read story" link.
- Mobile (no hover): tap-to-flip OR always-visible compact summary under each logo.

## Layout proposal
1. **Section header** (kept): eyebrow "Case studies" + heading "Featured outcomes from enterprise leaders" + 1-line subhead.
2. **Sector strip** (kept above): the 4 concise sector tiles stay as-is.
3. **Showcase wall** — new component `CaseStudyWall`:
   - Responsive grid: `grid-cols-2 md:grid-cols-3 lg:grid-cols-3` (6 tiles) — falls back to `lg:grid-cols-2` if we ship 4 tiles.
   - Each tile = square-ish card (aspect ~4/3), white background, 1px border, soft shadow on hover.
   - **Front face**: centered client logo (grayscale, ~60% width) + small industry tag bottom-left.
   - **Back face (hover/focus)**: dark green `hsl(var(--primary-deep))` background, white text:
     - Big metric (e.g. `+38%`) in display font.
     - Metric label (`Activation rate`).
     - 1-sentence result.
     - Channels chips (SMS · Zalo · Viber).
     - "Read case study →" link.
   - Transition: cross-fade + subtle scale (no 3D flip — keeps it elegant and accessible). Use `group-hover` + `group-focus-within` for keyboard.
   - Mobile: back face content shown as a compact strip under the logo (no hover dependency).
4. **Single CTA below the wall** replaces the current "Don't see your sector?" link:
   - Copy: **"Muốn trải nghiệm giải pháp customize cho bạn? Talk to us"**
   - Style: pill button, `bg-[hsl(var(--accent))]` (orange) with arrow icon, centered, generous top margin.

## Content (6 case studies)
Reuse the 4 existing studies and add 2 more to fill the wall:
1. Banking & Finance — Top Vietnamese commercial bank — `+38% Activation rate`
2. Retail & E-commerce — Top 3 electronics retail chain — `+27% Revenue per campaign`
3. FMCG & Hospitality — Multinational F&B brand — `+52% Return rate`
4. Airlines & Travel — Regional full-service carrier — `1.5M+ Passengers reached`
5. *(new placeholder)* Insurance — Leading life insurer — `-41% Support call volume`
6. *(new placeholder)* Logistics — National courier — `<2s OTP delivery, 99.95%`

Client logos: use placeholder monogram tiles (initials in brand font) until real logos are provided — keeps layout clean and avoids brand-permission issues.

## Files to change
- `src/components/site/Industries.tsx` — replace the `caseStudies` card grid and bottom link with the new wall + CTA. Keep sector tiles and section header intact.
- (Optional) extract `CaseStudyWall` into `src/components/site/CaseStudyWall.tsx` if it grows past ~80 lines.

## Technical notes
- Pure Tailwind + existing tokens (`--primary-deep`, `--accent`, `--border`). No new deps.
- Hover reveal uses `group` + `opacity/translate` transitions; fully accessible via `focus-within`.
- Respects `prefers-reduced-motion` (disable transform, keep opacity).
- Routes preserved: each tile links to `/case-studies/{slug}`.

## Out of scope
- No changes to the sector tiles or the section heading copy.
- No new data fetching — content stays static.
