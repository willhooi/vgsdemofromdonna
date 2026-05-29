# About Us — Refresh từ web cũ vietguys.biz

Mục tiêu: giữ kiến trúc "Editorial Story" hiện tại (3 chương + milestones + team), nhưng vay mượn **content có chiều sâu**, **section navigation**, **partner ecosystem** và **brand-signature motion** từ web cũ — đồng thời giữ chuẩn UX/UI hiện đại cho mọi thiết bị.

## Những thứ đáng vay từ web cũ

**Content**

- Tagline gốc: *"Short steps on a long journey"* — dùng làm eyebrow phụ ở Hero để có dây liên kết thương hiệu.
- Đoạn về **giấy phép "License for Provision of Telecommunications Services without Network Infrastructure"** — tài sản tin cậy hiếm có, hiện tại trang chưa nhắc.
- **5 Core Values gốc**: People First, Quality, Integrity, Honesty, Accountability, Creativity & Innovation — hiện `AboutStoryPillars` chỉ có pillar chung chung, có thể đồng bộ lại đúng 6 giá trị cũ.
- **Partner ecosystem theo ngành** (Fashion, Tech, Pharma, Delivery, Education, Finance...) — web mới mới có `LogoMarquee` chung; bản theo nhóm ngành kể được chuyện "ai cũng dùng VietGuys".
- **3 trục trách nhiệm**: team đoàn kết · chất lượng dịch vụ · trách nhiệm cộng đồng — dùng làm 3 thẻ ảnh editorial giữa Chapter 02 và 03.

**UX**

- Thanh **section nav dính** ở đầu trang (Stories · Milestones · Core Values · Clients · Certificates) — neo nhanh, rất hữu ích trên trang dài.
- Mục **Vision & Mission** tách biệt — hiện chưa có.
- Mục **Certificates** rõ ràng cuối trang — hiện mới rải rác ở Footer/Trust.

**Cái nên BỎ không bê qua**

- Layout bảng 2 cột cho milestones (cũ kỹ) — giữ timeline mới.
- Ảnh stock tổng quát kiểu corporate — giữ phong cách editorial hiện tại.
- Lặp lại text 2-3 lần như bản gốc.

## Cấu trúc trang mới (sau refresh)

```text
Header
├─ AboutHero                    (giữ — thêm sub-eyebrow "Short steps on a long journey")
├─ AboutSectionNav   [MỚI]      (sticky dưới header: Story · Milestones · Values · Clients · Certificates)
├─ Chapter 01 — Beginning       (giữ)
├─ Chapter 02 — Growing         (giữ)
├─ AboutResponsibility [MỚI]    (3 thẻ editorial: Team · Service · Community)
├─ Chapter 03 — Japan Bridge    (giữ)
├─ AboutVisionMission [MỚI]     (2 cột: Vision | Mission, dùng VWatermark + signal-art)
├─ AboutMilestones              (giữ — id="milestones")
├─ AboutStoryPillars            (RESTYLE → đúng 6 Core Values gốc, id="values")
├─ Team                         (giữ)
├─ AboutClientsByIndustry [MỚI] (id="clients" — tab/grid theo 6 ngành, dùng logos đã có + bổ sung)
├─ AboutCertificates  [MỚI]     (id="certificates" — VNCERT, ISO 27001:2022, VNTA, Zalo Trusted với mô tả)
├─ CTASection
Footer + ChatBubble
```

## Brand-signature motion (mọi thiết bị)

Dùng nhất quán **chữ V** (đã có `VWatermark`, `SignalArt`) làm "signature stroke" xuyên các section, không phải hiệu ứng rời rạc.

1. **Hero — Signal sweep**: 1 lần khi load, một tia gradient brand quét chéo qua chữ "One signal." theo đường stroke của V (~1.2s, ease-out). Reduced-motion: fade-in tĩnh.
2. **Section nav sticky**: indicator pill trượt mượt giữa các mục bằng `layoutId`-style (CSS transform, không cần framer-motion phụ thuộc nặng), highlight section đang xem bằng IntersectionObserver.
3. **Chapter number reveal**: số "01/02/03" cỡ lớn fade + slide từ -8px lên 0 khi vào viewport, kèm `chapter-eyebrow` chạy width 0→100% (signature underline).
4. **Pull-quote**: border-left 2px animate height 0→100% rồi text fade — cảm giác "khắc lên giấy".
5. **Milestones**: dot trên trục dọc pulse nhẹ khi scroll tới (đã có timeline → chỉ thêm in-view animation).
6. **Vision/Mission**: 2 watermark V đối xứng, một xoay rất chậm (10s linear infinite, opacity 0.06) — nền sống mà không gây nhiễu.
7. **Client grid**: logos fade-up theo stagger 40ms khi vào viewport, hover lift nhẹ (-2px) + grayscale→color.
8. **Certificates**: card flip nhẹ 6° trên hover desktop; trên mobile chỉ scale 1.02.

Tất cả motion **respect `prefers-reduced-motion**`: chỉ fade, không transform.

## Responsive

- **≥1024px**: layout 12-col, sticky chapter marker bên trái, section nav sticky top.
- **640–1023px**: chapter marker thành inline trên cùng content, số chương nhỏ hơn (text-7xl → text-6xl), section nav vẫn sticky nhưng scroll ngang được.
- **<640px**: bỏ sticky chapter marker, section nav scroll-snap-x ngang, pull-quote font giảm còn text-xl, ảnh aspect 4/5, padding `py-16`. Touch target ≥44px cho mọi link nav/cert.

## File sẽ tạo/sửa (khi vào build mode)

Tạo mới:

- `src/components/site/AboutSectionNav.tsx`
- `src/components/site/AboutResponsibility.tsx`
- `src/components/site/AboutVisionMission.tsx`
- `src/components/site/AboutClientsByIndustry.tsx`
- `src/components/site/AboutCertificates.tsx`

Sửa:

- `src/pages/About.tsx` — lắp ráp lại theo cấu trúc mới, thêm anchor id.
- `src/components/site/AboutHero.tsx` — thêm eyebrow phụ "Short steps · Long journey" + signal-sweep animation.
- `src/components/site/AboutStoryPillars.tsx` — chuẩn lại theo 6 Core Values gốc.
- `src/index.css` — thêm keyframes: `signal-sweep`, `underline-grow`, `chapter-rise`; class `motion-safe` wrapper.
- `src/components/site/AboutMilestones.tsx` — bổ sung mốc 2010 (Digitel), 2019 (Viber Top 3), 2020 (OTPBox + 2nd office), 2022 (PangoCDP) nếu thiếu.

## Technical notes

- Section nav dùng `IntersectionObserver` (rootMargin `-40% 0px -55% 0px`) để chọn section active — không phụ thuộc thêm package.
- Animation tự viết bằng Tailwind keyframes + `animation-delay` inline; chỉ dùng `framer-motion` nếu đã có sẵn (kiểm tra `package.json` lúc build).
- Toàn bộ màu/shadow/gradient đi qua design tokens HSL trong `index.css`, không hardcode.
- Logo partner: ưu tiên dùng asset đã có trong `src/assets/`; nếu thiếu, dùng placeholder SVG xám có label thay vì hotlink từ vietguys.biz cũ.

## Câu hỏi cần user xác nhận trước khi build

1. Có muốn **giữ cả 3 chương cũ + thêm tất cả section mới** không, hay chỉ pick 2-3 phần ưu tiên (ví dụ chỉ thêm Section Nav + Vision/Mission + Certificates)? --> pick 2-3 phần ưu tiên
2. Hotlink logo partners từ vietguys.biz cũ có chấp nhận được không, hay cần thay bằng placeholder? --> bỏ phần Our valued clients nhé