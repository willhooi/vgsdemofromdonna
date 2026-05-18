# Bố cục Option 2 — Accrete heading full-width + grid 3 cột bên dưới

## Mục tiêu
Đổi layout của khối hợp nhất Accrete + Certifications sang bố cục Option 2:
- **Trên**: heading "A member of Accrete" + mô tả Forbes Asia, full-width, căn giữa.
- **Dưới**: grid 3 cột — 2 stats bên trái, trophy Zalo ở giữa, 3 cert cards bên phải.

## Bố cục mới (desktop ≥1024px)

```
┌─────────────────────────────────────────────────────────────────────┐
│  Outer wrapper trắng, border-radius 20px, padding 32px              │
│                                                                     │
│              A member of  [Accrete logo]      (center)              │
│        Backed by Japan's leading SMS gateway group ...              │
│                                                                     │
│  ┌─────────────────┬───────────────────┬───────────────────────┐    │
│  │ STATS (≈28%)    │ TROPHY (≈30%)     │ CERTS (≈42%)          │    │
│  │                 │                   │                       │    │
│  │ ┌──┬─────────┐  │ ┌───────────────┐ │ ┌───────────────────┐ │    │
│  │ │██│ 5000+   │  │ │               │ │ │ ISO card          │ │    │
│  │ │  │ Since   │  │ │   ảnh cúp     │ │ ├───────────────────┤ │    │
│  │ └──┴─────────┘  │ │   Zalo        │ │ │ VNTA card         │ │    │
│  │                 │ │               │ │ ├───────────────────┤ │    │
│  │ ┌──┬─────────┐  │ │               │ │ │ VNCERT card       │ │    │
│  │ │██│ 5M+     │  │ ├───────────────┤ │ └───────────────────┘ │    │
│  │ │  │ Daily   │  │ │ caption       │ │                       │    │
│  │ └──┴─────────┘  │ └───────────────┘ │                       │    │
│  └─────────────────┴───────────────────┴───────────────────────┘    │
└─────────────────────────────────────────────────────────────────────┘
```

## Chi tiết từng phần

### Heading block (top, full width)
- Heading "A member of [Accrete logo]" giữ nguyên typo hiện tại (`heading-display`, `text-3xl md:text-5xl`), **căn giữa** (`justify-center`).
- Mô tả Forbes Asia / Best Under A Billion giữ nguyên text, căn giữa, `max-w-3xl mx-auto`, `text-base text-muted-foreground`.
- Margin-bottom ~32–40px trước khi vào grid 3 cột.

### Grid 3 cột (desktop)
- `grid-cols-[1fr_1fr_1.4fr]` hoặc `[0.9fr_1fr_1.4fr]`, gap 20–24px, items-stretch.

#### Cột 1 — Stats (2 thẻ xếp dọc)
- 2 `StatCard` xếp **dọc** (flex-col, gap 16–20px), giữ phong cách red-bar hiện có (thanh dọc cam #ff9b17 + số lớn cam + eyebrow + label).
- Mỗi card chiếm 50% chiều cao cột, căn giữa nội dung dọc.

#### Cột 2 — Trophy Zalo
- Card lớn dọc full chiều cao cột: ảnh cúp `object-cover` chiếm phần trên (flex-1), footer trắng bên dưới với 3 dòng caption ("2025 · Official Award" / "Zalo Business Solutions Trusted Partner" / "In appreciation of VietGuys").
- Border `#e0e0e0`, radius 14px, nền footer trắng, ảnh `object-position: center 10%`.

#### Cột 3 — 3 cert cards
- 3 cert cards xếp dọc, gap 10px, giữ nguyên thiết kế hiện tại (nền `#1e5c2a`, accent bar trái màu, logo box trắng, tag + tên + mô tả + issuer).
- Mỗi card cao đều nhau (flex-1) để lấp đầy chiều cao cột.

## Responsive

- **≥1024px**: grid 3 cột như trên.
- **768–1023px (tablet)**: vẫn full-width heading bên trên. Bên dưới chuyển thành grid 2 cột:
  - Hàng 1: stats (cột trái) + trophy (cột phải).
  - Hàng 2: 3 cert cards full width (xếp dọc hoặc 3 cột nhỏ — mặc định xếp dọc cho dễ đọc).
- **<768px (mobile)**: 1 cột, thứ tự stack:
  1. Heading Accrete + mô tả (center).
  2. 2 stats (grid 2 cột nhỏ).
  3. Trophy (full width, height 240–280px).
  4. 3 cert cards (xếp dọc).
- Padding wrapper: 20px mobile / 32px desktop.

## Thay đổi file

- **`src/components/site/TrustBand.tsx`** (file duy nhất cần sửa):
  - Đưa heading + mô tả Accrete lên đầu wrapper, căn giữa full-width.
  - Bỏ grid `[1.1fr_1fr]` hiện tại, thay bằng grid 3 cột mới.
  - Cột 1: 2 `StatCard` xếp dọc (đổi từ ngang sang dọc).
  - Cột 2: trophy block — đổi từ layout ngang (ảnh trái + caption phải) hiện tại sang **layout dọc** (ảnh trên + caption dưới) cho phù hợp tỉ lệ cột.
  - Cột 3: giữ nguyên 3 cert cards.
  - Các block trophy + cert cards + stat card style không đổi nội dung, chỉ đổi vị trí và hướng stack.

## Giữ nguyên
- Toàn bộ nội dung text, ảnh, logo của 6 khối.
- Style trophy card và cert cards.
- Style red-bar của StatCard.
- Section Brand marquee bên dưới, header chip "Backing & Certifications".
- `src/pages/Index.tsx` (đã xoá `<AccreteBacking />` ở lượt trước).
