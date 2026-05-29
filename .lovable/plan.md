# Redesign trang About Us — Editorial Prestige

## Mục tiêu
Nâng cấp `/about` thành long-scroll editorial sang trọng, củng cố niềm tin B2B (19 năm + Accrete Japan), dẫn người dùng tới CTA cuối trang.

## Cấu trúc trang (theo thứ tự)

```
1. Hero Manifesto         — tiêu đề serif lớn + quote
2. KPI Band               — 19+ năm / 5M msgs / 76 enterprise (count-up)
3. Origin Story           — 2 cột: ảnh 2007 + narrative
4. Three Pillars          — band xanh emerald, 3 cột trắng
5. Vision & Mission       — 2 card trắng đối xứng
6. Timeline 19 năm        — vertical spine, dot mốc
7. Six Values             — grid 3×2 minimal
8. Accrete Japan Bridge   — section trust quốc tế
9. Leadership Team        — grid 4 ảnh grayscale → màu khi hover
10. CTA cuối              — heading lớn + 2 nút
```

## Components sẽ tạo / sửa

**Tạo mới** trong `src/components/site/about/`:
- `AboutHero.tsx` — manifesto + quote
- `AboutKpiBand.tsx` — 3 số count-up (tái dùng `use-count-up.ts`)
- `AboutOrigin.tsx` — 2 cột ảnh + text
- `AboutVisionMission.tsx` — 2 card
- `AboutTimeline.tsx` — vertical spine timeline
- `AboutValues.tsx` — grid 6 values
- `AboutLeadership.tsx` — grid 4 leader (thay `Team.tsx` cũ)
- `AboutCTA.tsx` — CTA cuối

**Tái dùng (sửa style nhẹ cho khớp tone editorial)**:
- `AboutStoryPillars.tsx` (Three Pillars) — đổi sang band xanh emerald, card trắng
- `JapanBridge.tsx` + `AccreteBacking.tsx` (Japan section)

**Cập nhật**: `src/pages/About.tsx` — sắp xếp lại các section theo thứ tự mới.

## Design tokens (thêm vào `index.css` & `tailwind.config.ts`)

```text
--background        #fcfaf7  (warm off-white)
--primary           hsl(emerald-600 region — giữ tông hiện tại)
--font-display      'Instrument Serif', serif  (italic)
--font-body         'Inter', sans-serif
```

- Thêm Google Fonts link cho `Instrument Serif` trong `index.html`.
- Spacing: section padding `py-32` (desktop), `py-20` (mobile).
- Heading: `text-6xl–8xl font-display italic` cho hero/section titles.
- Hover trên leader: grayscale → color, transition 500ms.
- Animation: fade-up on scroll (đã có pattern `animate-fade-up`).

## Nội dung
Giữ nguyên text tiếng Việt/Anh hiện có. Hero quote, story, timeline events, values, leader bios — không thay nội dung, chỉ tái cấu trúc layout.

## Không thay đổi
- Header, Footer, CTASection (form mới)
- Màu primary brand
- Logic i18n (`useT`)
- Bất kỳ business logic nào khác

## Kết quả mong đợi
Trang About đẹp như editorial của Stripe Press / Linear, giữ DNA emerald của VietGuys, kể trọn câu chuyện 19 năm + Accrete Japan, dẫn xuống CTA contact form.
