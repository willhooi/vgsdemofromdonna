# Tối giản khối Trust: 2 Stats + 4 Cert Cards

## Mục tiêu
Bỏ cột trophy Zalo riêng biệt với ảnh cúp. Chuyển giải thưởng Zalo thành **1 cert card** đồng dạng với ISO / VNTA / VNCERT, để toàn bộ khối chỉ còn 2 thành phần gọn gàng:
- **Stats** (2 ô): Since 2007, Daily volume.
- **Certifications** (4 ô đồng nhất): ISO 27001, VNTA, VNCERT, Zalo Business Solutions.

## Bố cục mới (desktop ≥1024px)

```
┌──────────────────────────────────────────────────────────────────┐
│  Wrapper trắng, radius 20px                                      │
│                                                                  │
│         A member of [Accrete logo]      (heading center)         │
│         Mô tả Forbes Asia ... (center, max-w-3xl)                │
│                                                                  │
│  ┌──────────────────┬─────────────────────────────────────────┐  │
│  │ STATS (≈35%)     │ CERTS 2×2 (≈65%)                        │  │
│  │                  │                                         │  │
│  │ ┌──┬──────────┐  │ ┌──────────────────┬──────────────────┐ │  │
│  │ │██│ 5000+    │  │ │ ISO 27001        │ VNTA License     │ │  │
│  │ │  │ Since…   │  │ ├──────────────────┼──────────────────┤ │  │
│  │ └──┴──────────┘  │ │ VNCERT           │ Zalo Trusted     │ │  │
│  │                  │ │                  │ Partner          │ │  │
│  │ ┌──┬──────────┐  │ └──────────────────┴──────────────────┘ │  │
│  │ │██│ 5M+      │  │                                         │  │
│  │ │  │ Daily…   │  │                                         │  │
│  │ └──┴──────────┘  │                                         │  │
│  └──────────────────┴─────────────────────────────────────────┘  │
└──────────────────────────────────────────────────────────────────┘
```

Grid: `lg:grid-cols-[0.9fr_1.6fr]`, gap 5–6.
- **Cột trái**: 2 StatCard xếp dọc (giữ style red-bar cam hiện tại, không đổi).
- **Cột phải**: 4 cert cards trong grid `grid-cols-1 sm:grid-cols-2` (2×2). Tất cả cùng style: nền `#1e5c2a`, accent bar trái, logo box trắng, tag + tên + mô tả + issuer.

## Cert card thứ 4 (Zalo) — nội dung đề xuất

- **logo**: dùng `zalo-trusted.svg` đã có sẵn trong `src/assets/certs/` (logo Zalo trên nền trắng), không dùng ảnh cúp `zalo-trophy.png` nữa.
- **tag**: `Trusted partner`
- **name**: `Zalo Business Solutions 2025`
- **description**: `Officially recognized Trusted Partner for enterprise Zalo OA messaging.`
- **issuer**: `Zalo · Awarded 2025`
- **accent / tagBg / tagColor / tagBorder**: dùng tông xanh dương Zalo, ví dụ `#0068ff` cho accent + tag pill phối tương ứng (giống pattern 3 cert hiện có).

## Responsive
- **≥1024px**: 2 cột tổng, cert grid 2×2.
- **640–1023px (tablet)**: stats 1 hàng 2 cột nhỏ trên cùng, cert grid 2×2 bên dưới.
- **<640px (mobile)**: 1 cột — stats (2 ô), tiếp 4 cert cards xếp dọc.

## Thay đổi file

Chỉ sửa **`src/components/site/TrustBand.tsx`**:
1. Thêm 1 entry vào mảng `certifications` (Zalo, dùng `zalo-trusted.svg`).
2. Xoá toàn bộ block "Col 2 — Trophy" (div min-h, ảnh cúp + footer caption).
3. Đổi grid từ 3 cột `[1.05fr_0.85fr_1.1fr]` → 2 cột `[0.9fr_1.6fr]` (md fallback `grid-cols-1`).
4. Bọc cột cert cards bằng grid trong `sm:grid-cols-2` để xếp 2×2 thay vì 1 cột dọc.
5. Bỏ import `zaloTrophy` (không còn dùng).

## Giữ nguyên
- Heading "A member of Accrete" + mô tả Forbes Asia.
- StatCard style (red-bar cam, count-up, text đen/cam).
- Style từng cert card (nền xanh đậm, accent bar, logo box trắng, tag pill, hierarchy text).
- Brand marquee 2 hàng bên dưới.
- Chip "Backing & Certifications" trên cùng.
