# Seamlessly connect Solutions → ServicesGrid

Goal: make the page read as one story — "From the infrastructure that unifies data & AI → to the services that activate it" — instead of two visually separate sections.

Today there's a hard cut: `<Solutions />` → `<VDivider />` → `<ServicesGrid />`. Backgrounds, rhythm and copy don't hand off to each other.

## What changes

Scope is presentation only. No business logic, no data changes.

### 1. Remove the hard divider
In `src/pages/Index.tsx`, drop the `<VDivider />` between `<Solutions />` and `<ServicesGrid />`. The divider visually says "new chapter"; we want continuity.

### 2. Add a `SolutionsToServicesBridge` component
New file `src/components/site/SolutionsToServicesBridge.tsx`, rendered between the two sections. It is a short, full-width band (~140–180px tall) that:

- Inherits the green radial wash from Solutions at the top and fades into the white→green aurora of ServicesGrid at the bottom (matching gradient stops at the seam → invisible boundary).
- Contains a centered narrative line:
  - Eyebrow (mono, uppercase): `Chapter 02 — Activation`
  - Headline: `From the platform to the services that run on it.`
  - Sub: `The infrastructure above powers the 9 messaging services below.`
- A vertical dashed connector (SVG, same `stroke-dasharray 5 7` + `flow-dash` animation already used in the Solutions infographic) running from the bottom of Solutions through the bridge into the top of ServicesGrid — visually "the data flow keeps flowing".
- A small downward chevron / `↓` glyph at the end of the dashed line as a scroll affordance.

### 3. Match section backgrounds at the seam
- `Solutions.tsx`: change bottom padding to `pb-0` and extend the radial gradient so its lightest stop reaches the bottom edge (currently fades to white at 60%).
- `ServicesGrid.tsx`: reduce the top white fade (`absolute inset-x-0 top-0 h-[180px]`) to `h-[80px]` and start the aurora gradient higher, so the bridge band sits on the same color the ServicesGrid begins with.
- Reduce `ServicesGrid` `py-20` to `pt-10 pb-20` since the bridge now provides the top breathing room.

### 4. Reuse the dashed-flow visual language
Extract the `@keyframes flow-dash` already defined inside `Solutions.tsx` into `src/index.css` (single source) so both the Solutions infographic and the new bridge connector animate in sync.

### 5. Anchor + a11y
- Give the bridge `id="services-intro"` and update the header nav anchor for "Services" to point there (so clicking the nav lands users on the narrative bridge, not mid-grid).
- Bridge headline uses an `<h3>` (Solutions has `h2`, ServicesGrid has its own `h2`) to keep the heading hierarchy clean.

## Files touched

- `src/pages/Index.tsx` — remove `VDivider`, insert `<SolutionsToServicesBridge />`.
- `src/components/site/SolutionsToServicesBridge.tsx` — new.
- `src/components/site/Solutions.tsx` — bottom padding + gradient extension only.
- `src/components/site/ServicesGrid.tsx` — top fade + top padding only.
- `src/index.css` — promote `flow-dash` keyframes.

## Acceptance

- Scrolling from Solutions into ServicesGrid shows no visible seam (same color at the boundary).
- A single dashed vertical line visually continues from the Solutions infographic into the ServicesGrid area.
- The bridge copy makes the narrative explicit: platform → services.
- Mobile: bridge collapses to a shorter band (~100px) with the same copy, no SVG connector (matches the rest of the mobile layout which already drops connectors).
- No layout shift in either section's content; only paddings and background stops change.

## Out of scope

- Restructuring the Solutions infographic or the ServicesGrid cards.
- Copy rewrites inside either section.
- Adding a new section between them with its own content beyond the bridge band.