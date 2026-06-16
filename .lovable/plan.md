## Mục tiêu
Giảm khoảng cách từ đỉnh section `#solutions` đến tiêu đề "Every conversation, a moment of growth." để bố cục gọn gàng hơn.

## Phân tích nguyên nhân
- Section `#solutions` đang có `pt-16 md:pt-24` (64px / 96px padding-top) tại `src/components/site/Solutions.tsx` dòng 65.
- Các phần tử phía trước (`VDivider`, `TrustBand`) không tạo ra margin-bottom lớn đáng kể.
- Vậy khoảng trống chủ yếu đến từ padding-top của chính section.

## Thay đổi
Chỉnh sửa 1 dòng trong `src/components/site/Solutions.tsx`:
- Giảm `pt-16 md:pt-24` → `pt-8 md:pt-12` (hoặc `pt-10 md:pt-14` tùy đánh giá trực quan sau khi preview).

## Không thay đổi
- Nội dung text, layout bên trong section.
- Các component khác (`TrustBand`, `VDivider`, `GalaxyBackdrop`).
- Padding-bottom (`pb-0`) giữ nguyên.