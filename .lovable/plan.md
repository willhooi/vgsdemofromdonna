## Goal
Replace the current "Strategic Partners" section (3 partner cards) on `/about` with an "Our Valued Clients" section that mirrors the structure on vietguys.biz/en/about-us/vietguys: client logos grouped by industry.

## Industry groups & logos (sourced from vietguys.biz)
12 industry groups, ~100 logos total:
- **Finance - Banking** (13): FWD, Liberty, Fubon Life, Bao Minh, Hanwha, HSBC, MSB, Nam A Bank, Petro, Rong Viet, SSI, UOB, VPBank
- **Retail** (11): Thegioididong, Nguyen Kim, Thien Hoa, Bach Hoa Xanh, Con Cung, Emart, FamilyMart, Lotte, AEON, Phong Vu, Sai Gon Center
- **Hospitality** (13): Vietravel, Traveloka, Tokyo Deli, Tiniworld, Tinistore, The Coffee House, Ong Bau, McDonald's, Jumbo, Citigym, CGV, California, BHD Star
- **E-Commerce** (7): Shopee, Cho Tot, Lazada, Haravan, KiotViet, Sapo, Nhat Tao
- **Technology - Electronics** (12): Canon, Cashback, Comet, Dell, Foody, Garena, LG, Moca, MoMo, Samsung, ShopeePay, Sony
- **Fashion - Beauty** (13): ACFC, Danh Gia, Elise, Hnoss, Kim Ngoc Thuy, Loc Phuc, Ngoc Dung, PNJ Watch, Shynh, The Face Shop, Triumph, Vascara, Zema
- **Medicine & Pharmacy** (7): Bayer, Eco Pharma, GSK, Hoan My, Phano, Pharmacity, VNVC
- **FMCG** (6): C2, Mead Johnson, Nutifood, P&G, San Miguel, Vitadairy
- **Education** (10): American Learning Lab, Apollo, CD Sai Gon, CTIM, FPT, Hoa Sen, Saigon American English, VAS, Wall Street English, Yola
- **Delivery - Travel** (5): Be, GHTK, Gojek, Grab, Lalamove
- **Industry** (10): AkzoNobel, BVTV An Giang, Bridgestone, Dam Ca Mau, Duy Tan, Hoa Sen, Kubota, Loc Troi, Syngenta, VFC
- **Real Estate** (6): Dat Xanh, Ecopark, Hung Thinh, Novaland, Propzy, Vinhomes

## Implementation

1. **Download & upload logos to Lovable CDN**
   - Download all ~100 PNG logos from `vietguys.biz/images/partners/<group>/<file>.png` into `/tmp/clients/<group>/`.
   - Upload each via `lovable-assets create`, writing the resulting `.asset.json` pointer files into `src/assets/clients/<group>/<file>.png.asset.json`.
   - No binary files committed; only pointer JSONs.

2. **Rewrite `src/components/site/about/AboutPartners.tsx`** (rename concept, keep filename to avoid route/import changes):
   - Eyebrow: `OUR VALUED CLIENTS`
   - Heading: `Trusted by 6,000+ brands across Vietnam.` (green accent on the number, matches hero copy tone)
   - Sub-line: short single sentence — `From banking to FMCG, brands of every scale choose VietGuys for engagement at scale.`
   - Data: a `groups: { name, logos: {src, alt}[] }[]` array built from imported `.asset.json` pointers.
   - Layout per group:
     - Group label (small uppercase eyebrow, left-aligned, with a thin green divider line to its right).
     - Responsive logo grid: `grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-7`, each cell a bordered rounded card with the logo centered, grayscale by default → color on hover, soft shadow on hover.
   - Use semantic tokens (`text-foreground`, `text-muted-foreground`, `border-border`, `bg-background`, `hsl(var(--primary))`) — no hardcoded hex.
   - Keep existing section background gradient so it fits the page flow.
   - Remove the old `partners` cards and the `bytetech/cxgenie/cnvcdpLogo` imports if unused elsewhere (will verify with grep).

3. **Verify**
   - Run `bun run build` to confirm all imports resolve.
   - Spot-check preview at `/about`.

## Technical notes
- Pointer-file pattern: `import logo from "@/assets/clients/finance-banking/hsbc.png.asset.json"; <img src={logo.url} />`.
- Logos vary in aspect ratio; constrain with `h-10 w-auto max-w-[120px] object-contain` inside a fixed-height cell (`h-20`) for visual consistency.
- Reveal animation: stagger per group, not per logo, to avoid 100 animation timers.
- No changes to other About sections.