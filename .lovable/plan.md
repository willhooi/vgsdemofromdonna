## Mục tiêu
Card "AI Customer Engagement Platform" hiện đang thấp & rộng (INPUT/OUTPUT dùng grid 2 cột). Cần biến nó thành layout **dọc cao** giống ảnh đính kèm, để chiều cao card mapping vừa với chiều cao cột phải (cô gái + popups).

## Thay đổi trong `src/components/site/Solutions.tsx`

### 1. Container card (vùng wrapper bên trái, ~ line 443-470)
- Bỏ `min-h-[260px]` cứng trên `<div>` chứa `<CDPWave />` (line 465).
- Thêm `h-full` để card stretch theo grid row height (đang là `lg:grid-cols-[1fr_minmax(0,38%)]` → 2 cột stretch bằng nhau).
- Đảm bảo wrapper card (line 444-445) đã có `h-full` (giữ nguyên).

### 2. `CDPWave` panels — chuyển INPUT & OUTPUT thành cột dọc (giống reference)
- `.cdp-src-grid`, `.cdp-out-grid`: đổi `grid-template-columns: 1fr 1fr` → `1fr` (1 cột), gap 8px.
- `.cdp-src`, `.cdp-out`: tăng `width: 170px` → `180px`; thêm `align-self: stretch` để panel cao full theo flex container.
- `.cdp-stage` (line 524): thêm `items-stretch` thay vì `items-center`; các panel sẽ tự cao full.
- `.cdp-badge`, `.cdp-badge-out`: tăng padding dọc một chút (`8px 10px`), label căn giữa cho gọn.

### 3. Connector SVG (input→hub, hub→output)
- Tăng chiều cao SVG: `height="64"` → một giá trị responsive lớn hơn (dùng `height="100%"` với min 200px, hoặc cho SVG `preserveAspectRatio="none"` và để parent `flex-1`).
- Cách đơn giản: đổi `.cdp-connector` thành `align-self: stretch; height: 100%`, SVG dùng `width="64" height="100%" viewBox="0 0 64 200" preserveAspectRatio="none"`, vẽ lại path để fan-out từ 6 input points (y=20,50,80,110,140,170 chẳng hạn) hội tụ về điểm giữa phải (64, 100). Tương tự cho output (mirror).
- Particles `animateMotion` vẫn chạy trên các path mới.

### 4. AI HUB orb
- Tăng `width: clamp(90px, 12vw, 130px)` → `clamp(110px, 14vw, 160px)` để cân với panel cao hơn.
- Orb tự `align-self: center` trong flex row dọc.

### 5. Responsive
- `@media (max-width: 1199px)`: panel width 160px, grid vẫn 1 cột.
- `@media (max-width: 767px)`: giữ logic stack dọc hiện có (flex-direction: column), grid panel có thể quay lại 2 cột để không quá dài.

### 6. Label trên cùng
- Giữ "AI Customer Engagement Platform" như hiện tại.

## Kết quả mong đợi
- Card trái cao bằng cột phải (cô gái + popup), không còn khoảng trống dư.
- Layout flow trông giống reference: 3 cột dọc (INPUT list • HUB ở giữa • OUTPUT list) với dotted connectors fan-out theo chiều dọc.

## Files
- Chỉ sửa `src/components/site/Solutions.tsx`. Không tạo file mới.
