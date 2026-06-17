# Plan: Section transition cho "Customers of VietGuys"

## Mục tiêu
Khi cuộn từ khối 9 dịch vụ (ServicesGrid) sang khối "Customers of VietGuys", người dùng cần một tín hiệu thị giác rõ ràng báo "đã sang section mới" — đồng bộ với cách các section khác trong trang đang xử lý (VDivider, đổi `bg-muted`, `chapter-eyebrow`).

## Mockup tham khảo (ASCII)

```text
┌──────────────────────────────────────────────────┐
│  ServicesGrid (9 dịch vụ) — bg-background        │
│  ……                                              │
│  [ tile 7 ] [ tile 8 ] [ tile 9 ]                │
└──────────────────────────────────────────────────┘
        ▲ kết thúc bg-background

╌╌╌╌╌╌╌╌╌╌╌  hairline gradient full-width  ╌╌╌╌╌╌╌╌  ← đường cắt mảnh 1px
                                                       (transparent → primary/30 → transparent)

┌──────────────────────────────────────────────────┐
│  bg-muted/40  (đổi tone nền nhẹ)                 │
│                                                  │
│            • 06 — CUSTOMERS •     ← chapter-eyebrow
│        Customers of VietGuys      ← heading
│  Leading brands trust VietGuys…   ← sub                 
│                                                  │
│   [ Sea ] [ LG ] [ CGV ] [ Pharma ] [ SMB ]     │
└──────────────────────────────────────────────────┘
```

## Thay đổi

### 1. `src/components/site/VietGuysCaseStudies.tsx`
- Đổi `className` section:
  - Từ `bg-background pt-8 pb-14 md:pt-10 md:pb-16`
  - Thành `bg-muted/40 pt-12 pb-16 md:pt-16 md:pb-20`
- Thêm ngay đầu `<section>` (trước `container-tight`) một hairline divider full-width:
  ```tsx
  <div aria-hidden className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[hsl(var(--primary)/0.35)] to-transparent" />
  ```
- Thêm `chapter-eyebrow` ngay trên `<h2>`:
  ```tsx
  <span className="chapter-eyebrow justify-center">06 — Customers</span>
  ```
  (đồng bộ với HumanStory `05 — Behind the messages`, CaseStudies `06 — Kết quả thật`.)
- Khoảng cách giữa eyebrow và h2: `mt-3`.

### 2. Không đụng `ServicesGrid` (giữ nguyên padding hiện tại) — sự đổi tone nền + hairline đã đủ ngắt nhịp.

### 3. Không đụng `Index.tsx` — section đã đứng đúng vị trí.

## Kiểm chứng
- `npx tsc --noEmit`
- Browser screenshot vùng giao giữa ServicesGrid và Customers để xác nhận hairline + đổi tone hiển thị đúng trên desktop và mobile.
