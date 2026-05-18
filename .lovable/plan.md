## Goal
Thay marquee 2 hàng logo brand hiện tại trong `src/components/site/TrustBand.tsx` bằng một grid các **thẻ ngành** (industry cards). Mỗi thẻ:
- Hiển thị **tên ngành** + **2 logo đại diện**.
- Khi **hover** (desktop) hoặc **tap** (mobile/tablet) → mở rộng để show **toàn bộ logo còn lại** trong ngành đó.

## Industry groups (8 thẻ)

Đề xuất phân bổ brand (có thể chỉnh sau khi user duyệt):

1. **E-Commerce** — Tiki, Shopee, Lazada, Sendo, Adayroi
2. **Retail** — Saigon Co.op, Thế Giới Di Động, AEON, Lotte, Nguyễn Kim
3. **FMCG** — Vinamilk, Masan, Unilever, Nestlé, Suntory PepsiCo
4. **Fashion & Beauty** — Routine, Canifa, L'Oréal, Sociolla, Juno
5. **Medicine & Pharmacy** — Pharmacity, Long Châu, An Khang, Hapacol, Sanofi
6. **Hospitality** — Vietnam Airlines, Vietjet, Bamboo Airways, Mường Thanh, Vinpearl
7. **Education** — FPT Education, VUS, ILA, Topica, Apollo
8. **Finance & Banking** — Vietcombank, Techcombank, VPBank, BIDV, MB Bank, ACB, TPBank, HDBank, VIB, Sacombank

> User sẽ confirm danh sách brand chính thức ở câu hỏi cuối plan. Logo tiếp tục load qua Clearbit API (`logo.clearbit.com/<domain>`), fallback chữ khi lỗi (giữ pattern `BrandLogo` hiện có).

## Layout & tương tác

```text
┌──────────────────────────────────────────────────────────────┐
│  Trusted by Vietnam's enterprise leaders                     │
│                                                              │
│  ┌──────────────┐ ┌──────────────┐ ┌──────────────┐ ┌──────┐ │
│  │ Finance &    │ │ E-Commerce   │ │ Retail       │ │ ...  │ │
│  │ Banking      │ │              │ │              │ │      │ │
│  │ [logo][logo] │ │ [logo][logo] │ │ [logo][logo] │ │      │ │
│  │ +8 more      │ │ +3 more      │ │ +3 more      │ │      │ │
│  └──────────────┘ └──────────────┘ └──────────────┘ └──────┘ │
└──────────────────────────────────────────────────────────────┘

Hover state (1 card mở rộng inline, các card khác giữ nguyên):
┌──────────────────────────────────────────────┐
│ Finance & Banking                            │
│ [VCB] [TCB] [VPB] [BIDV] [MB] [ACB] [TPB]…   │
└──────────────────────────────────────────────┘
```

- Grid: `grid-cols-2 sm:grid-cols-3 lg:grid-cols-4`, gap 3–4.
- Card mặc định: nền trắng, border mỏng `border-border`, radius 14px, padding 4, min-height đồng đều.
- Card content: tên ngành (font-semibold, text-sm) + hàng 2 logo đại diện (h-8, object-contain) + dòng meta nhỏ "+N more" màu muted.
- **Hover (desktop)**: card scale nhẹ + shadow tăng + thay 2 logo bằng wrap-grid hiển thị **tất cả** logo trong ngành (max 5 cột, gap 2, mỗi logo h-7). Transition `200ms ease`.
- **Mobile/tablet (không hover)**: tap để toggle expanded state (controlled bằng `useState<activeId | null>`). Tap card khác → đóng card cũ, mở card mới. Tap lại card đang mở → đóng.
- Accessibility: card là `<button type="button">`, có `aria-expanded`, focus ring dùng `--ring`.

## File changes

Chỉ sửa `src/components/site/TrustBand.tsx`:

1. **Xóa** `BRANDS_ROW_1`, `BRANDS_ROW_2`, `BrandRow` component và 2 `<BrandRow>` calls.
2. **Thêm** type + dữ liệu:
   ```ts
   type IndustryGroup = {
     id: string;
     name: string;            // "Finance & Banking"
     brands: Brand[];         // full list
   };
   const INDUSTRIES: IndustryGroup[] = [ … 8 groups … ];
   ```
3. **Thêm** component `IndustryCard` (dùng lại `BrandLogo` hiện có cho Clearbit + fallback chữ). Quản lý expanded state ở parent qua prop `isOpen` + callback `onToggle`.
4. **Thay** block `{/* Brand marquee */}` (line 222–233) bằng grid `IndustryCard` mới.
5. **Giữ** heading "Trusted by Vietnam's enterprise leaders" + style nền + border-bottom của section wrapper.
6. **Có thể bỏ** keyframes `marquee-left/right` trong `index.css` (không bắt buộc — không gây side-effect nếu giữ lại).

## Giữ nguyên
- Toàn bộ Accrete heading + stats + 4 cert cards phía trên.
- Color palette, typography, container width, spacing rhythm của section.
- Cơ chế load logo qua Clearbit + fallback text.

## Câu hỏi cần user confirm trước khi build
1. Danh sách brand cho từng ngành — đặc biệt 6 ngành **không phải Banking** (Banking đã có domain sẵn). User có muốn mình tự đề xuất domain Clearbit hay sẽ cung cấp danh sách chính thức?
2. Có cần thêm/bớt ngành nào ngoài 8 thẻ liệt kê không?
3. Order các thẻ — alphabet, theo tầm quan trọng, hay theo grouping nội bộ VietGuys?
