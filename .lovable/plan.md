# Đề xuất hướng triển khai trang About Us

## 1. Concept định hướng

Trang chủ đang dùng narrative theo "Acts" (Act 01 — The Signal, Act 02 — Our Journey…). About Us nên là một **chương dài hơn của cùng câu chuyện** — không lặp lại trang chủ mà đào sâu phần "con người, hành trình, giá trị" mà trang chủ chỉ chạm lướt qua.

Tone đồng bộ:

- Eyebrow dạng "Chapter 01 — ...", "Chapter 02 — ..." (phân biệt với "Act" trang chủ để không trùng lặp)
- Cùng hệ design token (primary green, gradient-hero, container-tight, heading-display/heading-section, animate-fade-up)
- Cùng motif "tín hiệu / sóng / kết nối" đã có ở Hero, Solutions, TrustMap
- Cùng nhịp: hero lớn → câu chuyện cá nhân → dữ kiện → con người → CTA

## 2. Cấu trúc trang đề xuất (8 sections)

```text
Header
 ├─ Chapter 01 — The Origin        (Hero: "Short steps on a long journey")
 ├─ Chapter 02 — The Why           (Story: 25m² → backbone, 3 ảnh minh hoạ web cũ)
 ├─ Chapter 03 — Vision & Mission  (2-card đối xứng, giữ nguyên nội dung)
 ├─ Chapter 04 — Milestones        (Timeline dọc kế thừa, gắn icon theo loại sự kiện)
 ├─ Chapter 05 — Core Values       (6 giá trị, layout grid 3×2 có ảnh nền nhẹ)
 ├─ Chapter 06 — The Bridge        (Accrete partnership — tái sử dụng JapanBridge/AccreteBacking)
 ├─ Chapter 07 — The Team          (giữ <Team />, thêm dải "Life at VietGuys" 3 ảnh)
 ├─ Chapter 08 — Valued Clients    (logo marquee theo ngành: E-commerce, Finance, Retail, Logistics)
 └─ CTA cuối + Footer + ChatBubble
```

### Khác biệt so với About.tsx hiện tại

- **Thêm Chapter 02 mở rộng**: 3 trụ "Solidarity team / Service quality / Community trust" lấy từ web cũ — hiện trang đang thiếu hoàn toàn phần human-story này.
- **Thêm Chapter 06 — The Bridge**: hiện chỉ nhắc Accrete một câu ở hero; web cũ nhấn mạnh nhiều, nên tách thành section riêng với visual VN×JP (đã có sẵn `JapanBridge` / `AccreteFlightChip`).
- **Thêm Chapter 08 — Valued Clients**: web cũ có danh sách khách hàng theo ngành (Shopee, Lazada, HSBC, FWD…). Tái dùng `LogoMarquee` chia theo tab/ngành.
- **Milestones**: nâng cấp từ list dọc đơn sắc → timeline có icon riêng cho từng cột mốc (founding, partnership, award, product launch, office expansion) để match cảm giác "tín hiệu mạnh dần" của Timeline trang chủ.
- **Hero**: thêm hình ảnh/illustration mang motif sóng tín hiệu (như Hero trang chủ) thay vì chỉ gradient phẳng.

## 3. Nội dung cập nhật / bổ sung

- **Headline hero**: giữ "Short steps on a long journey" + sub trích nguyên văn web cũ.
- **Milestones**: bổ sung 06/2018 (1st office expansion) và 05/2020 (2nd office expansion) — hiện đang thiếu so với web cũ, để đủ 12 mốc.
- **Human story block**: 3 ảnh + caption (team solidarity, service quality, community contribution).
- **Clients**: nhóm theo 4 industry như web cũ (E-commerce, Finance & Banking, Retail/F&B, Logistics).

## 4. Chi tiết kỹ thuật

- File chính: `src/pages/About.tsx` — refactor toàn bộ, vẫn dùng các component có sẵn:
  - `Header`, `Footer`, `ChatBubble`, `Team`, `LogoMarquee`, `JapanBridge` (hoặc `AccreteBacking`), `VDivider`
- Tạo 2 component nhỏ mới trong `src/components/site/`:
  - `AboutStoryPillars.tsx` — 3 ảnh + caption (Chapter 02 mở rộng)
  - `AboutMilestones.tsx` — timeline với icon theo type
- Locales: thêm `about.*` keys vào `src/locales/en.ts` và `vi.ts` để song ngữ (trang hiện đang hard-code tiếng Anh).
- SEO: cập nhật title/meta description, thêm 1 H1 duy nhất, alt text cho mọi ảnh, JSON-LD `Organization` với foundingDate 2007, parentOrganization Accrete Inc.
- Animation: dùng `animate-fade-up` + delay theo index như pattern hiện tại; không thêm thư viện mới.
- Design tokens: dùng `--gradient-hero`, `--shadow-soft`, `--shadow-card`, `primary`/`accent` — không hardcode màu.

## 5. Câu hỏi cần xác nhận trước khi build

1. Có muốn **song ngữ EN/VI** ngay lần này không, hay chỉ EN như trang hiện tại? --> Answer: làm EN trước
2. Có muốn **giữ tên "Chapter" cho About** (để phân biệt với "Act" trang chủ), hay dùng tiếp "Act 06, 07…" để liền mạch? --> Answer: xét về cấu trúc thì tôi không có ý kiến, chỉ cần không hiển thị text "Chapter" ra nhé.
3. Phần **Valued Clients**: dùng logo thật từ web cũ (cần copy assets) hay logo placeholder/marquee text như `LogoMarquee` hiện có? --> Answer: Không cần thể hiện "Valued Clients" nữa
4. Phần **ảnh human-story** ở Chapter 02: dùng lại 3 ảnh từ web cũ (link trực tiếp), hay generate ảnh mới bằng imagegen cho đồng bộ visual style? --> Answer: generate ảnh mới cho đồng bộ visual style