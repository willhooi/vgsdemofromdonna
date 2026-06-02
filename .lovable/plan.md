
## Goal

Rebuild `/market-insights` using the `insights-nest-11` template style and migrate the existing VietGuys VI blog into it as English articles, organised under 4 categories tuned for long-term SEO + AI-visibility.

## 1. Categories (final)

| Slug | Title | Pillar keywords |
|---|---|---|
| `messaging-channels` | Messaging Channels | SMS Brandname, Zalo ZNS, Viber, OTP, deliverability |
| `customer-engagement` | Customer Engagement & CX | Chat-first CX, retention, lifecycle, loyalty |
| `data-ai-martech` | Data, AI & MarTech | CDP, first-party data, AI campaigns, automation |
| `industry-playbooks` | Industry Playbooks | Banking, FMCG, Retail, F&B, Beauty, Logistics |

Existing 12 EN articles will be re-tagged to fit these 4 slugs.

## 2. URL strategy

- Canonical hub: `/market-insights`
- Detail: `/market-insights/:slug`
- `/insights` and `/insights/:slug` → 301-style client redirect (Navigate replace) to the `/market-insights` equivalents (keeps any inbound link working without dual canonicals).

## 3. Content migration (blog cũ → EN articles)

Translate + rewrite EN excerpt (≈30 words) and body (4–6 short paragraphs, ~350–500 words) from each old VI title/meta only — no full-page fetch. Each article gets `legacyUrl` pointing to the original `vietguys.biz/vi/tin-tuc/...` so we can later set server redirects.

Articles to add (8):

| New slug | Category | Source legacyUrl |
|---|---|---|
| `cellphones-zalo-zns-template-case-study` | messaging-channels | cellphones-nang-cao-trai-nghiem-khach-hang-voi-zalo-zns-template |
| `otp-the-revenue-bottleneck` | messaging-channels | otp-diem-gan-nhat-voi-doanh-thu-nhung-cung-la-diem-nghen-neu-den-tre |
| `sms-five-touchpoints-restaurants-cafes` | industry-playbooks | chien-luoc-5-diem-cham-...-sms-marketing |
| `fmcg-customer-care-2026-revenue-engine` | industry-playbooks | xu-huong-2026-chuyen-hoa-cskh-trong-fmcg-... |
| `fmcg-silent-moment-after-first-order` | industry-playbooks | khoanh-khac-fmcg-am-tham-quyet-dinh-doanh-thu-... |
| `beauty-industry-ads-vs-owned-assets` | industry-playbooks | phu-thuoc-ads-hay-xay-tai-san-... |
| `chat-first-cx-new-interface` | customer-engagement | chat-first-customer-experience-la-gi-... |
| `mobile-app-install-data-strategy` | data-ai-martech | su-dung-du-lieu-the-nao-de-toi-da-hieu-qua-... |

Press/company items (giấy phép viễn thông, Zalo Trusted Partner) are intentionally **not** ported — they belong in a future News section, not the topical authority hub.

Body generation: use Lovable AI Gateway (Gemini Flash) via the ai-gateway skill to draft EN body + excerpt from each VI title + 1-line meta, then commit the resulting `articles.ts`. Tone aligned with the existing 12 articles.

## 4. UI rebuild for `/market-insights`

Mirror `insights-nest-11` layout:
- **Hero**: 1 featured article (large image left, title + excerpt + author/date right).
- **Category strip**: 4 chips, each `Title · N articles`, click filters grid.
- **Grid**: responsive cards (3-col ≥lg, 2-col md, 1-col mobile) — image, category eyebrow, title, excerpt, author + date, read minutes.
- **Newsletter band** at bottom (reuse current CTA card).
- Animations: reuse `Reveal` (`fade-up`, `scale-soft`) for hero + card stagger; ken-burns on hero image.
- Tokens only (no raw colors).

## 5. Article detail page

Keep `InsightArticle.tsx` logic but:
- Route to `/market-insights/:slug`.
- Add `react-helmet-async` (install + wrap `main.tsx` with `HelmetProvider`) for proper per-route `<title>`, meta description, canonical, og:*, and `Article` + `BreadcrumbList` JSON-LD.
- "More in [category]" + bottom CTA stay.

## 6. SEO + AI-visibility wiring

- `index.html`: remove static `<link rel="canonical">` (per head-meta rule) — Helmet now owns it.
- `public/sitemap.xml`: add `/market-insights` and every `/market-insights/:slug`. Remove the stale `/resources/blog`, `/resources/case-studies` entries that don't exist as routes.
- `public/llms.txt`: create with H1 + summary + `## Insights` section listing the 4 category landing filters and key articles, so ChatGPT/Perplexity/Claude can ingest the hub directly.
- Each article carries `Article` JSON-LD (headline, datePublished, author, image, articleSection = category title) → strong AI Overviews + Google Discover signals.

## 7. Technical section

Files to touch:

```
src/content/insights/categories.ts         rewrite to the 4 slugs above
src/content/insights/articles.ts           re-tag 12 + add 8 new (with legacyUrl)
src/pages/MarketInsights.tsx               rebuild from insights-nest-11 layout
src/pages/InsightArticle.tsx               reuse, add Helmet, swap base path
src/App.tsx                                routes: /market-insights, /market-insights/:slug; redirects from /insights*
src/main.tsx                               wrap in <HelmetProvider>
index.html                                 drop static canonical
public/sitemap.xml                         regen entries
public/llms.txt                            new
package.json                               add react-helmet-async
```

EN body drafting flow (one-shot, inside build mode):
1. Copy `knowledge://skill/ai-gateway/scripts/lovable_ai.py` to `/tmp/`.
2. Run a batch prompt file (one line per article) asking for `{excerpt, body[]}` JSON for each of the 8 VI sources, system prompt = VietGuys voice + 350–500 words EN.
3. Merge JSON output into `articles.ts`.

No business-logic or backend changes. All work is content + presentation.
