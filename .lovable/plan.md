## Quyết định đã chốt

1. Triển khai **cả 3 đợt liền** trong một lần build.
2. Ảnh người: **generate ảnh phong cách documentary** bằng AI (chân dung tự nhiên, ánh sáng mềm, không stock cười nhạt), lưu `src/assets/people/`.
3. Display font: **Fraunces** (humanist serif hiện đại, có optical size + nét hơi quirky — phù hợp với DNA "công nghệ nhưng có hồn người" của VietGuys; cân bằng tốt với Plus Jakarta Sans cho body).

## Mục tiêu

Biến trang web VietGuys thành một câu chuyện thương hiệu liền mạch — icon "VL" và bảng màu xanh-cam xuất hiện như "vân tay" thương hiệu xuyên suốt, đồng thời cân bằng cảm giác công nghệ với hơi thở con người (lấy cảm hứng cách Infobip dùng ảnh người thật, minh hoạ và micro-copy ấm).

## Bộ nguyên tắc thị giác

1. **Brand mark thật** — Thay logo "VG" giả lập bằng icon VL thật (`vietguys-logo-icon.png`) + wordmark từ `logo_VGS_1.png`. Dùng ở Header, Footer, favicon, OG image.
2. **Icon VL như motif lặp lại** — Trích xuất hình "V xanh + L cam" thành các chi tiết trang trí mờ:
   - Watermark khổng lồ (opacity 3–5%) ở góc các section lớn
   - Bullet point hình tam giác V mini màu cam
   - Section divider hình chữ V gấp khúc
   - Loading spinner / hover dùng hình V
3. **Bảng màu kể chuyện** — Mỗi section một "nhiệt độ" trong dải xanh→cam:
   - Hero & mở đầu: trắng + xanh nhạt (khởi đầu, tin cậy)
   - Solutions/Industries: xanh đậm hơn (chuyên môn)
   - Case Studies & Team: cam ấm (con người, kết quả)
   - CTA cuối: gradient xanh→cam (chuyển hoá)
4. **Yếu tố "con người"** (học từ Infobip):
   - Ảnh chân dung documentary của team/khách hàng — duotone xanh-cam để đồng bộ
   - Quote ngắn dạng chữ ký scan trong testimonial
   - Micro-copy ấm: "Chào bạn", "Cùng nhau" thay cho "Click here"
   - Section "Behind the messages" giới thiệu con người đứng sau platform
5. **Chuyển động liền mạch** — Scroll-linked animation nhẹ (Framer Motion): icon V "vẽ" theo scroll, section fade-in cùng hướng, parallax mềm trên hero.

## Triển khai

### Đợt 1 — Nền tảng brand
- Copy 3 logo vào `src/assets/brand/` (icon, wordmark ngang, wordmark stacked).
- Tạo `<BrandMark variant="icon|horizontal|stacked" />` (SVG inline đổi màu theo context) thay `Logo.tsx`.
- Tạo `<VWatermark />` — 1 SVG hình V mờ, nhận `className` để đổi màu/opacity per section.
- Cập nhật Header, Footer, favicon (`public/favicon.ico` → icon VL), OG image.
- Thêm **Fraunces** vào `index.html` (preconnect + display swap), khai báo `font-display: ['Fraunces', serif]` trong `tailwind.config.ts`. Headline lớn dùng `font-display`, body giữ Plus Jakarta Sans.

### Đợt 2 — Storytelling flow

Sắp xếp lại trang chủ theo cung bậc cảm xúc, mỗi section có **eyebrow numbering** kiểu chương sách:

```text
01 — Lời chào         → Hero
02 — Bằng chứng       → TrustBar
03 — Chúng tôi làm gì → Solutions
04 — Cho ai           → Industries
05 — Ai đứng sau      → HumanStory (NEW)
06 — Kết quả thật     → CaseStudies
07 — Vì sao chọn      → WhyVietGuys
08 — Hệ sinh thái     → Partners
09 — Băn khoăn        → FAQ
10 — Cùng bắt đầu     → CTA
```

- Làm lại **Hero**: watermark V lớn mờ sau headline; ảnh người + UI message bubbles thật + icon VL mini bay xung quanh; headline ấm hơn (giữ keyword SEO ở subheadline).
- Tạo **`HumanStory.tsx`**: 2–3 chân dung documentary AI-generated (founder, support lead, engineer) với duotone xanh, quote ngắn dạng chữ ký, layout không đối xứng editorial.
- Bổ sung ảnh duotone vào `Team.tsx`.

### Đợt 3 — Polish & motion
- Áp `<VWatermark />` vào Solutions, Industries, CaseStudies (vị trí khác nhau, opacity 3–5%).
- Bullet list dùng icon V tam giác mini cam thay check tròn.
- Hover card: viền dưới chuyển từ xanh → cam (gradient brand).
- Section divider SVG đường gấp khúc lấy từ cạnh chữ V.
- Framer Motion: stagger fade-up cho mọi section khi vào viewport, parallax mềm trên Hero watermark.
- Cursor follower nhỏ chấm cam (desktop only, có thể tắt).

## Ảnh AI cần generate

Lưu `src/assets/people/`, kích thước 800×1000, phong cách: **documentary portrait, soft natural light, slight film grain, neutral background, candid expression, no smile-pose**.

1. `founder.jpg` — nam Việt 40s, vest casual, đang nói chuyện với team
2. `support-lead.jpg` — nữ Việt 30s, tai nghe, đang focus vào màn hình
3. `engineer.jpg` — nam Việt 30s, áo thun, đang code/whiteboard
4. `hero-human.jpg` (1200×900) — cảnh team Việt làm việc cùng nhau, ánh sáng cửa sổ tự nhiên

Sau khi generate sẽ apply duotone xanh-cam bằng CSS `mix-blend-mode` + filter để đồng bộ thương hiệu.

## Ghi chú kỹ thuật

- Tất cả màu qua semantic tokens trong `index.css` — không hard-code.
- `<VWatermark />` là 1 SVG duy nhất, không phình bundle.
- Giữ nguyên SEO/perf đã làm trước đó (lazy load, width/height, preload hero, sitemap, robots).
- Framer Motion đã có sẵn trong project (kiểm tra `package.json`, cài thêm nếu chưa).
- Fraunces qua Google Fonts với `font-display: swap` + preconnect (đã có sẵn preconnect trong `index.html`).

## Files dự kiến tạo/sửa

**Tạo mới**: `src/components/brand/BrandMark.tsx`, `src/components/brand/VWatermark.tsx`, `src/components/site/HumanStory.tsx`, `src/assets/brand/{icon,wordmark,stacked}.png`, `src/assets/people/{founder,support-lead,engineer,hero-human}.jpg`, `public/favicon.ico` (mới).

**Sửa**: `src/components/site/Logo.tsx` (re-export BrandMark), `Header.tsx`, `Footer.tsx`, `Hero.tsx`, `Solutions.tsx`, `Industries.tsx`, `CaseStudies.tsx`, `Team.tsx`, `WhyVietGuys.tsx`, `pages/Index.tsx`, `index.html`, `tailwind.config.ts`, `src/index.css`.
