# Adapt Aquafix template → trang About VietGuys

Mục tiêu: mượn **composition signature** của Aquafix (hero stats nổi, timeline zigzag, values 6-card, mission/vision split với bullets, team grid, CTA chốt) — **không** mượn palette navy/lime hay font Clash Grotesk. Giữ trọn brand VietGuys (gradient brand hiện tại, typo `heading-display`, nội dung 19 năm + Accrete, motion system `Reveal` đã có).

## Sections mới / refactor

### 1. `AboutHero` — refactor theo signature Aquafix

Bố cục mới:

- Hàng trên: 2 cột — trái là H1 to (`heading-display`, giữ "Nineteen years. One signal."), phải là paragraph mô tả (Vietnam pioneer since 2007 + Accrete) căn justify như Aquafix.
- Hàng dưới: 1 ảnh hero lớn full-width (kitchen-replace bằng ảnh team/office VietGuys từ Unsplash) với **stat strip nổi đè đáy ảnh** — card trắng bo lớn, shadow mềm, 4 stat animated counters:
  - `19+` Years in Market
  - `5,000+` Brands Trusted
  - `5M+` Messages / Day
  - `15+` Solutions Delivered
- Dùng hook `use-count-up.ts` đã có để animate khi vào viewport.
- Giữ tagline italic "Short steps · on a long journey" và link Back to home.

### 2. `AboutStoryTimeline` — component mới, thay phần Chapter 01/02/03 dài

Thay 3 `AboutChapter` block bằng **zigzag timeline** như Aquafix: mỗi mốc là 1 row image + year + heading + body, alternating trái/phải. 4 mốc lớn:

- **2007** — Company Establishment (25m² Saigon room)
- **2008** — First Global Trust (Samsung E-warranty)
- **2018** — #1 SMS in VN e-commerce
- **2022** — Joined Accrete, listed TSE

Mỗi row: ảnh bo tròn lớn bên 1 phía, bên kia có badge năm to (số gradient), H3 ngắn, body 2-3 câu. Stagger reveal `fade-up` + ảnh `ken-burns`.

(Giữ 3 `AboutChapter` cũ dưới dạng tùy chọn? → **Bỏ**, vì timeline thay thế đầy đủ và gọn hơn. `AboutMilestones` ngang đã có sẽ trở thành "compact timeline" phụ phía dưới cho các mốc khác.)

### 3. `AboutVisionMission` — refactor theo split của Aquafix

Layout mới:

- 2 row alternating (Mission row: ảnh trái + text phải; Vision row: text trái + ảnh phải).
- Mỗi row có H3 + paragraph + **3 bullet points có icon check**, theo đúng pattern Aquafix.
- Thay ảnh placeholder bằng ảnh brand-tinted (VWatermark overlay).
- Nội dung giữ nguyên Vision/Mission canonical từ vietguys.biz.

### 4. `AboutStoryPillars` (6 Core Values) — refactor visual theo Aquafix

Giữ 6 values hiện tại (People First, Quality, Integrity, Accountability, Creativity, Innovation), nhưng đổi sang **3×2 grid card** với:

- Icon Lucide trong vòng tròn tint gradient brand
- Tiêu đề bold, body 2 câu
- Card có border mỏng + hover lift (translateY-2 + shadow), không tilt-3D phức tạp
- Eyebrow "Values" trên + H2 "Our Core Values" như Aquafix

### 5. `Team` — đã có, chỉ tinh chỉnh

Thêm eyebrow "Our Experts" + H2 "Meet the people behind every message" theo style Aquafix. Giữ grid hiện tại.

### 6. `AboutCTAFinal` — section CTA mới ở cuối (thay `CTASection` chung trên trang About)

Pattern Aquafix:

- Background gradient brand đậm full-width
- H2 to "Let's discuss the details"
- Sub copy 1 dòng
- 2 button: "Get a Quote" (primary lime → brand) + "Talk to us"
- Avatar tròn + 1 dòng quote nhỏ ("This is [Name], [Title] at VietGuys. I'm here to answer your questions.")

### 7. Page assembly `src/pages/About.tsx`

Order mới:

```
Header
AboutHero (with floating stats)
AboutStoryTimeline (zigzag 4 mốc)
AboutVisionMission (split + bullets)
AboutStoryPillars (6 values 3×2)
AboutMilestones (compact horizontal — giữ làm phụ)
Team
AboutCertificates (giữ nguyên)
AboutCTAFinal (gradient)
Footer
ChatBubble
```

Bỏ các `VDivider` thừa giữa các section vì Aquafix dùng whitespace lớn thay vì divider.

## Motion

Tái dùng `Reveal` + keyframes hiện có trong `index.css`:

- Stat counters: trigger qua `use-count-up` khi card vào view
- Timeline rows: `fade-up` stagger 120ms
- Mission/Vision: `clip-right` cho ảnh, `fade-up` cho text+bullets
- Values cards: `scale-soft` stagger
- CTA: shimmer loop trên button primary

Tất cả respect `prefers-reduced-motion` (đã có).

## Files

**Create**

- `src/components/site/AboutStoryTimeline.tsx`
- `src/components/site/AboutCTAFinal.tsx`

**Edit**

- `src/components/site/AboutHero.tsx` — thêm hero image + floating stat strip
- `src/components/site/AboutVisionMission.tsx` — đổi sang split + bullets
- `src/components/site/AboutStoryPillars.tsx` — đổi sang 3×2 card grid với icon tròn
- `src/components/site/Team.tsx` — đổi eyebrow + H2
- `src/pages/About.tsx` — reassemble theo order mới, bỏ 3 `AboutChapter`, bỏ `CTASection` chung

**Không đổi**

- `src/index.css` (motion keyframes đã đủ)
- `src/components/motion/Reveal.tsx`
- `src/components/site/AboutMilestones.tsx`, `AboutCertificates.tsx`
- Brand palette, font, gradient — giữ nguyên 100%

## Điều cần xác nhận

- OK bỏ 3 `AboutChapter` (01/02/03) và gom nội dung vào `AboutStoryTimeline` zigzag? Cách này gọn và đúng pattern Aquafix nhất --> OK
- OK dùng ảnh stock Unsplash cho hero + timeline rows, hay bạn muốn tôi để placeholder để bạn upload ảnh thật sau? --> dùng ảnh stock 