# Kế hoạch: Nền "Soft Aurora Curves" cho mục 9 dịch vụ

## 1. Nền section (`ServicesGrid.tsx` – `<section id="services">`)

Đổi `bg-background` thành nền tổng hợp nhiều lớp, đặt `position: relative` + `overflow: hidden`:

- **Lớp base**: gradient dọc `linear-gradient(180deg, #FFFFFF 0%, #F4FBF5 55%, #E8F7EA 100%)`
- **Lớp arc trên** (SVG absolute, top, full-width, height ~55%): đường cong lõm xuống, fill radial từ `rgba(57,180,74,0.18)` → trong suốt, blur 40px.
- **Lớp arc dưới** (SVG absolute, bottom): đường cong lồi lên, fill `rgba(57,180,74,0.28)` → trong suốt, blur 30px – giống "chân trời" trong ảnh.
- **2 blob phụ** (div absolute, blur 120px, opacity 0.35): 1 ở top-right màu mint sáng, 1 ở bottom-left màu xanh đậm hơn – tạo chiều sâu.
- **Vignette mép**: lớp gradient trắng mờ ở 2 cạnh trái/phải để chữ dễ đọc trên màn rộng.

Tất cả lớp nền đặt `pointer-events: none` và `z-index: 0`. Grid thẻ đặt `position: relative; z-index: 1`.

## 2. Thẻ dịch vụ trong suốt (`DesktopCard` + `MobileCard`)

Cập nhật style nền thẻ để hoà vào background mà vẫn nổi:

- **Thẻ đóng (default)**:
  - `background: rgba(255,255,255,0.55)`
  - `backdrop-filter: blur(14px) saturate(140%)`
  - `border: 1px solid rgba(255,255,255,0.7)`
  - `box-shadow: 0 4px 20px -8px rgba(57,180,74,0.12)`
- **Thẻ mở (active/hover)**:
  - `background: rgba(240,251,241,0.85)` (giữ tông GREEN_BG nhưng có alpha)
  - `border: 1.5px solid rgba(57,180,74,0.9)`
  - `box-shadow: 0 18px 40px -14px rgba(57,180,74,0.35)`
- Các ô stats bên trong: `background: rgba(255,255,255,0.6)` thay vì `bg-secondary` đặc.

## 3. Responsive & accessibility

- Mobile: giảm blur xuống 8px để tiết kiệm GPU; arc dưới rút gọn chiều cao.
- Kiểm tra contrast text (`text-muted-foreground`) trên nền mint – nếu cần tăng độ đậm.
- Thêm `@media (prefers-reduced-motion)` không ảnh hưởng (nền tĩnh).

## 4. Chi tiết kỹ thuật

- Dùng 2 SVG `<path>` cho 2 arc, viewBox `0 0 1440 600`, preserveAspectRatio `none` để stretch full width.
- Blob: `<div class="absolute rounded-full" style="filter:blur(120px); background: radial-gradient(...)">`.
- Không tạo file mới – sửa trong `src/components/site/ServicesGrid.tsx`.

## Kết quả mong đợi

Nền mềm mại như ảnh đính kèm (trắng → mint với 2 vòng cung), 9 thẻ kính trong suốt nổi nhẹ trên nền, thẻ active sáng rõ với viền xanh thương hiệu.
