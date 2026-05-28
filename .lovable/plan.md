## Mục tiêu

Điều chỉnh trạng thái nền của các card dịch vụ trong `ServicesGrid.tsx` (desktop grid):

- Mặc định (chưa hover, chưa open): gần như trong suốt nhưng ko quá trong, vẫn có viền để nhìn rõ background màu nền và  plexus bên dưới.
- Khi cursor chạm đếm: nền chuyển sang trắng ửng nhẹ (không trắng đặc) để dễ đọc nội dung.
- Không thay đổi grid layout, kích thước, padding, border-radius, height, hay hiệu ứng `-translate-y-0.5`.

## Thay đổi cụ thể

File: `src/components/site/ServicesGrid.tsx`, component card (dòng ~206-220).

Điều chỉnh inline style `background`, `border`, `boxShadow` theo 2 trạng thái: default và chạm cursor  
