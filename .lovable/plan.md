## Mục tiêu
Thay nền plexus đều hiện tại (sau "From the platform → ..." và 9 ô dịch vụ) bằng plexus hữu cơ kiểu cụm, có các nút giao nhấp nháy nhẹ + glow xanh mềm, giữ nguyên tông xanh VietGuys.

## Thay đổi
**File duy nhất: `src/components/site/ServicesPlexusBackdrop.tsx`** — viết lại hoàn toàn:

- Một SVG `absolute inset-0 w-full h-full` với `preserveAspectRatio="xMidYMid slice"`, viewBox `0 0 1800 1200`.
- Một `<defs>` chứa:
  - `@keyframes twinkle` (opacity 0.2 ↔ 0.85, scale 1 ↔ 1.35, 3.5s ease-in-out infinite).
  - `<filter id="nodeGlow">` dùng `feGaussianBlur stdDeviation="2.5"` + merge → glow xanh mềm quanh node.
  - Class `.line` (stroke `hsl(128 52% 46%)`, opacity 0.18, width 0.75), `.node` (fill `hsl(145 100% 25%)`, filter glow, animation twinkle).
- Sinh ~36 điểm theo lưới jitter (6×6) trong JS một lần (useMemo) để có cảm giác cụm hữu cơ nhưng phủ đều toàn vùng — đảm bảo coverage từ trên xuống dưới, không bị mảng trống.
- Nối mỗi điểm với 2–3 điểm gần nhất → mảng `<line>` với class `.line`.
- Render circles cho từng điểm, r ngẫu nhiên 1.8–3, `animation-delay` ngẫu nhiên 0–3.5s.
- Wrapper: `absolute inset-0 pointer-events-none opacity-60 md:opacity-70` (mobile nhẹ hơn: `opacity-40`).
- Respect `prefers-reduced-motion`: thêm `<style>` media query tắt animation.

## Không đổi
- `index.css`, tokens màu, `ServicesGrid.tsx`, `SolutionsToServicesBridge.tsx`, `Index.tsx` (component vẫn được mount cùng chỗ).
- Không thêm thư viện mới.

## Verify
- Scroll qua bridge + 9 cards thấy mạng lưới hữu cơ phủ đều, nodes xanh đậm nhấp nháy với glow mềm.
- Cards trắng vẫn rõ, không bị nhiễu.
- Mobile dịu hơn; reduced-motion tắt twinkle.
