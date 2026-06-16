## Mục tiêu

Cập nhật section `#certificates` ("Trust, on paper.") theo hướng **Modern glass corporate** đã chọn — mỗi certificate có khung ảnh/logo riêng (4:3), badge phân loại nhiều màu, hover lift mềm.

## Phạm vi

Chỉnh sửa duy nhất file: `src/components/site/about/AboutCertificatesNew.tsx`

## Thay đổi cụ thể

### 1. Data model
Mở rộng mảng `certs` thêm field:
- `image?: string` — đường dẫn logo certificate (để rỗng `undefined` cho 4 mục cho tới khi user cung cấp ảnh)
- `accent: string` — HSL accent cho từng cert (giữ semantic, đặt inline qua CSS var):
  - ISO 27001 → primary (xanh thương hiệu)
  - VNCERT → amber `38 92% 50%`
  - VNTA → blue `210 80% 50%`
  - Zalo → zalo blue `212 100% 50%`

### 2. Card layout (mỗi cert)
```text
┌─────────────────────┐
│  ┌─ aspect-4/3 ──┐  │   ← Logo slot: bg-muted/40, rounded-xl
│  │   [LOGO]      │  │     - Có image → <img object-contain>
│  │  (placeholder)│  │     - Không có image → vòng tròn accent + initial
│  └───────────────┘  │
│                     │
│  [BADGE accent]     │   ← pill nhỏ, bg accent/10, text accent
│  Title (xl bold)    │   ← hover đổi sang primary
│  Body (sm muted)    │
└─────────────────────┘
```

- `<article>` giữ `rounded-2xl`, `border border-border`, `bg-background`
- Hover: `-translate-y-2`, shadow nhuộm theo accent (`0 20px 50px hsl(accent / 0.15)`)
- Heading "Trust, on paper." — chữ "on paper." nhuộm `text-primary`
- Giữ nguyên container, `Reveal` stagger, copy text, section id, padding.

### 3. Tokens
- Tất cả màu dùng HSL semantic + CSS var (không hardcode `#xxx` trong JSX).
- Định nghĩa `accent` của từng card qua `style={{ "--cert-accent": "..." }}` rồi xài `hsl(var(--cert-accent) / 0.1)` cho badge và shadow.

### 4. Placeholder logo
Khi `image` chưa có, render circle 96px với bg accent/10 và ký tự đầu của title — sẵn sàng swap sang `<img>` khi user upload.

## Không thay đổi
- Copy/text content
- Section id, anchor links
- Component `Reveal`, hệ thống animation hiện có
- File khác trong project

## Bước tiếp theo sau khi build
User gửi 4 file logo → mình import vào `src/assets/certificates/` và gán vào field `image`.
