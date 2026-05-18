# Gộp Accrete + Certifications thành một section

## Mục tiêu
Hợp nhất hai section đang đứng riêng (`AccreteBacking` và phần Certifications trong `TrustBand`) thành một block thống nhất, bố cục 2 cột giống hình mẫu: bên trái là branding + stats với "red accent bar", bên phải là trophy + 3 cert cards.

## Bố cục mới (desktop ≥1024px)

```
┌─────────────────────────────────────────────────────────────────┐
│  Outer wrapper trắng, border-radius 20px, padding 32px          │
│  ┌───────────────────────────┬─────────────────────────────┐    │
│  │ LEFT (≈55%)               │ RIGHT (≈45%)                │    │
│  │                           │ ┌─────────────────────────┐ │    │
│  │ A member of [Accrete]     │ │  TROPHY ZALO (lớn)      │ │    │
│  │ (heading typo giữ nguyên) │ │  ảnh cúp + footer caption│ │    │
│  │                           │ └─────────────────────────┘ │    │
│  │ Mô tả Forbes Asia /       │ ┌─────────────────────────┐ │    │
│  │ Best Under A Billion ...  │ │ Cert card 1 (ISO)       │ │    │
│  │                           │ ├─────────────────────────┤ │    │
│  │ ┌──┬─────────┐ ┌──┬────┐  │ │ Cert card 2 (VNTA)      │ │    │
│  │ │██│ 5000+   │ │██│5M+ │  │ ├─────────────────────────┤ │    │
│  │ │  │ since   │ │  │msg │  │ │ Cert card 3 (VNCERT)    │ │    │
│  │ └──┴─────────┘ └──┴────┘  │ └─────────────────────────┘ │    │
│  └───────────────────────────┴─────────────────────────────┘    │
└─────────────────────────────────────────────────────────────────┘
```

## Chi tiết từng phần

### Wrapper
- Nền trắng `#ffffff`, border-radius 20px, padding `32px` desktop / `20px` mobile, shadow nhẹ.
- Section background bên ngoài giữ light-green gradient hiện có của TrustBand để hai cụm hoà vào nhau.
- Vẫn đặt chip "Certifications & Licences" + heading "Certifications & Awards" (frame gradient cam→xanh) ở đầu phần phải, hoặc ẩn đi tuỳ chọn (mặc định: ẩn heading trùng lặp, giữ chip trên cùng wrapper).

### Cột trái — Branding + Stats
- **Heading**: giữ nguyên typo hiện tại của AccreteBacking — `heading-display`, `text-3xl md:text-5xl`, "A member of" + logo Accrete inline.
- **Mô tả**: giữ nguyên đoạn Forbes Asia / Best Under A Billion, `text-base text-muted-foreground`.
- **2 stat cards** xếp ngang (grid 2 cột), phong cách "red accent bar" giống hình mẫu:
  - Bỏ card border + shadow hiện tại, đổi sang layout flex: thanh dọc 2px màu `brand.orange` (#ff9b17) bên trái + nội dung.
  - Số lớn (`5000+`, `5M+`) màu `brand.orange`, font-display, đậm.
  - Label nhỏ bên dưới, muted.
  - Bỏ icon tròn xanh để gọn giống mẫu (hoặc giữ nhỏ ở góc — mặc định bỏ).
  - Vẫn dùng `useCountUp` đang có.

### Cột phải — Trophy + 3 Cert cards
- **Trophy Zalo (trên cùng)**: card lớn full width của cột phải, dùng layout hiện có (ảnh cúp object-cover + footer trắng với 3 dòng caption). Chiều cao ~260–300px.
- **3 Cert cards** xếp dọc bên dưới trophy, gap 10px. Giữ nguyên thiết kế hiện tại: nền xanh đậm `#1e5c2a`, accent bar trái theo màu (cam / lime / trắng mờ), logo box trắng, tag uppercase + tên + mô tả + issuer.

## Responsive

- **≥1024px**: grid `1fr 1fr` (hoặc `1.1fr 1fr`), gap 32px.
- **768–1023px**: grid 2 cột nhưng co lại; stats giữ 2 cột; trophy + certs co theo.
- **<768px**: chuyển thành 1 cột:
  1. Heading "A member of Accrete" + mô tả (center).
  2. 2 stats 2 cột nhỏ.
  3. Trophy full width, height 280px.
  4. 3 cert cards xếp dọc.
- Padding wrapper giảm về 16–20px ở mobile.

## Thay đổi file

- **`src/pages/Index.tsx`**: xoá `<AccreteBacking />` riêng (nội dung được gộp vào TrustBand).
- **`src/components/site/TrustBand.tsx`**:
  - Import logo Accrete.
  - Tạo wrapper trắng mới chứa 2 cột.
  - Cột trái: render heading + mô tả Accrete + 2 `StatCard` (restyle theo red-bar).
  - Cột phải: giữ block trophy + 3 cert cards hiện tại, nhét vào cột phải thay vì grid `[210px 1fr]`.
  - Xoá phần stats band cũ ở đầu component (đã chuyển sang trong wrapper).
- **`src/components/site/AccreteBacking.tsx`**: có thể xoá hoặc giữ lại (không dùng nữa). Đề xuất xoá để giữ codebase sạch.

## Giữ nguyên
- Toàn bộ section "Brand marquee" (BRANDS_ROW_1/2) bên dưới — không động vào.
- Nội dung text, ảnh, logo của cả 6 khối — không đổi.
- Typo của heading "A member of Accrete" — không đổi font/size, chỉ đặt vào cột trái.
