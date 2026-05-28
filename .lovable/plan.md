## Mục tiêu

Thay hiệu ứng `SignalWaves` trong `ServicesGrid` bằng hình dãy núi tuyết (từ ảnh đính kèm), tách nền — chỉ giữ silhouette núi, đặt mờ nhẹ hoà vào background gradient hiện tại.

## Các bước

1. **Chuẩn bị ảnh núi (tách nền)**
   - Copy `user-uploads://image-21.png` → `src/assets/services-mountains.png`.
   - Dùng `imagegen--edit_image` với `transparent_background: true` và prompt giữ nguyên dãy núi tuyết, loại bỏ phần trời/nền → xuất `src/assets/services-mountains.png` (PNG trong suốt).

2. **Cập nhật `src/components/site/ServicesGrid.tsx`**
   - Xoá component `SignalWaves` và keyframes `signal-ping`, `signal-core`.
   - Thêm component nội bộ `MountainBackdrop`:
     - `import mountains from "@/assets/services-mountains.png"`.
     - `<img>` `absolute inset-x-0 bottom-0 w-full h-auto object-cover object-bottom pointer-events-none select-none`.
     - Style: `opacity: 0.18`, `filter: blur(2px) saturate(0.6)`, `mix-blend-mode: luminosity` để chìm vào gradient xanh.
     - Thêm mask gradient `mask-image: linear-gradient(to top, black 40%, transparent 100%)` để mép trên fade mượt.
   - Thứ tự DOM trong block `aria-hidden`: base gradient → `AuroraBlobs` → `MountainBackdrop` → các dải fade trắng → nội dung.

3. **Giữ nguyên**
   - Base gradient, `AuroraBlobs`, 2 dải fade trắng trên/dưới, viền 2 bên.
   - Card dịch vụ (transparent default / hover trắng nhẹ).
   - Layout grid, spacing, typography.

## Chi tiết kỹ thuật

- File chỉnh: `src/components/site/ServicesGrid.tsx`
- File mới: `src/assets/services-mountains.png` (PNG nền trong suốt)
- Không động `tailwind.config.ts` / `index.css`.
- Nếu việc tách nền AI không sạch, fallback: dùng ảnh gốc với `mix-blend-mode: multiply` + opacity thấp + mask để loại bỏ phần trời sáng.
