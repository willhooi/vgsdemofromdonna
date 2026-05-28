## Mục tiêu

thay thế lớp plexus thành signal waves

Thứ tự lớp (z-index từ dưới lên):

1. Base gradient xanh hiện có
2. **Aurora / blob gradient mềm** (mới)
3. **Signal waves** (mới)
4. Lớp gradient trắng fade trên/dưới + viền trái/phải
5. Nội dung card

## 1. Aurora / blob gradient mềm

- 3–4 khối tròn lớn (`absolute`, `rounded-full`, kích thước 480–720px) blur mạnh (`filter: blur(90–120px)`), opacity ~0.35–0.5.
- Màu: xanh lá brand `rgba(57,180,74,...)`, xanh mint nhạt `rgba(140,220,170,...)`, trắng-xanh `rgba(220,245,225,...)`.
- Vị trí so le: top-left, top-right hơi lệch, bottom-center, mid-right.
- Animation: drift chậm bằng keyframe `translate` + `scale` 18–26s, ease-in-out, `alternate infinite`. Thêm keyframes mới vào `tailwind.config.ts` (vd: `aurora-drift-1/2/3`) hoặc dùng inline `<style>` trong component.
- `pointer-events-none`, `mix-blend-mode: screen` để hoà với plexus.

## 2. Signal waves

- 3 cụm "đài phát" đặt rải rác (vd: 15% / 85% chiều ngang, độ cao khác nhau).
- Mỗi cụm: 3 vòng tròn SVG `circle` chỉ stroke (không fill), bán kính tăng dần (40 → 120 → 200), stroke màu xanh brand opacity giảm dần theo bán kính.
- Animation: keyframe `signal-ping` (scale 0.6 → 1.4, opacity 0.55 → 0), 4–6s, `infinite`, mỗi vòng `animation-delay` lệch nhau 1.2s để tạo hiệu ứng sóng phát liên tục.
- Render bằng SVG riêng `absolute inset-0`, opacity tổng 0.35 để không lấn plexus.
- `pointer-events-none`.

## Triển khai

File chính: `src/components/site/ServicesGrid.tsx`

- Trong block `aria-hidden` background (sau base gradient, trước `<PlexusBackground />`):
  - Thêm `<AuroraBlobs />` component nội bộ.
  - Thêm `<SignalWaves />` component nội bộ.
- Thêm keyframes:
  - Cách gọn: chèn `<style>{`@keyframes aurora-drift-a {...} @keyframes signal-ping {...}`}</style>` ngay trong component để không động `tailwind.config.ts`.
- Đảm bảo `z-index`: các lớp mới đặt cùng `absolute inset-0` trong cùng wrapper `aria-hidden` đã có; thứ tự DOM quyết định stack.

## Không thay đổi

- Gradient nền xanh gốc + 2 dải fade trắng trên/dưới + viền 2 bên.
- Card dịch vụ (transparent default / hover trắng nhẹ).
- Layout grid, spacing, typography.