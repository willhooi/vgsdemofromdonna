## Mục tiêu
Triển khai hướng **Constellation orbit** (v3): biến toàn section Solutions thành một bản đồ chòm sao — AIPlatformCard là cụm sao trung tâm, ServicesGrid là chùm vệ tinh, nối nhau bằng các đường nét đứt phát sáng với data flow chạy dọc (animate `stroke-dashoffset`).

**Ràng buộc cứng:** Không sửa cấu trúc/nội dung AIPlatformCard. Chỉ thêm layer SVG overlay + đổi background hợp nhất. Không dark mode, light theme xanh lá hiện tại.

## Các thay đổi

### 1. New `src/components/site/ConstellationOverlay.tsx`
Layer SVG full-section, `position: absolute inset-0 pointer-events-none z-[5]`, render phía trên GalaxyBackdrop và phía dưới các card.
- **Anchor points** đo bằng `ResizeObserver` + `getBoundingClientRect` của 4 cột AIPlatformCard (bottom-center mỗi cột) và 9 service card (top-center). Section ref được forward từ `Solutions` qua context hoặc prop.
- **Constellation lines:** vẽ `<path>` từ mỗi cột AIPlatformCard fan-out tới 2-3 service card gần nhất; cộng thêm các đường ngang nối các service trong cùng hàng tạo cảm giác chòm sao.
- **Style:** `stroke="hsl(145 55% 42% / 0.22)"`, `stroke-width="1"`, `stroke-dasharray="4 6"`, `stroke-linecap="round"`.
- **Data flow animation:** `@keyframes constellation-flow { to { stroke-dashoffset: -200 } }` chạy 6s linear infinite. Mỗi path random delay 0-3s để dòng dữ liệu trông tự nhiên, không đồng loạt.
- **Node stars:** `<circle r="3">` tại mỗi anchor + 8-12 floating stars rải rác, dùng `animate-pulse` với staggered delay; thêm 3 "bright nodes" `r="2.5"` với `filter: drop-shadow(0 0 6px ...)`.
- **Reduced motion:** wrap keyframe trong `@media (prefers-reduced-motion: no-preference)`.

### 2. `src/components/site/Solutions.tsx`
- Bọc nguyên section bằng `ref={sectionRef}` và truyền `aiCardRef` + `servicesRef` xuống.
- Thêm `<ConstellationOverlay sectionRef={...} aiCardRef={...} servicesRef={...} />` trước children, sau backdrop.
- Giữ nguyên markup AIPlatformCard.

### 3. `src/components/site/ServicesGrid.tsx`
- Forward `ref` ra ngoài (hoặc nhận `gridRef` qua prop) để overlay đo vị trí 9 card.
- Gắn `data-service-anchor` lên mỗi DesktopCard wrapper để overlay query.

### 4. `src/components/site/AIPlatformCard` (chỉ thêm anchor, không đổi layout)
- Gắn `data-platform-anchor` lên 4 column root (không thay đổi class/spacing/content).

### 5. `src/components/site/PlatformToServicesFlow.tsx`
- Giảm vai trò: giữ glow halo dưới AICard, **bỏ 3 signal rails** vì đã được thay bằng constellation lines từ overlay (tránh chồng chéo). Hoặc xoá hẳn import nếu trùng lặp hoàn toàn.

### 6. `src/index.css`
- Thêm:
```css
@keyframes constellation-flow {
  to { stroke-dashoffset: -200; }
}
.constellation-flow { animation: constellation-flow 6s linear infinite; }
@keyframes star-twinkle {
  0%,100% { opacity: .25; transform: scale(.9); }
  50% { opacity: .9; transform: scale(1.15); }
}
.star-twinkle { animation: star-twinkle 3.6s ease-in-out infinite; transform-origin: center; }
@media (prefers-reduced-motion: reduce) {
  .constellation-flow, .star-twinkle { animation: none; }
}
```

### 7. `src/components/site/SolutionsToServicesBridge.tsx`
- Giảm visual weight để overlay là nhân vật chính: bỏ orbit ring + warp streaks, chỉ giữ headline "From the platform to the services that orbit it" trên 1 thin vertical line (như prototype). Padding `py-8 md:py-12`.

## Out of scope
- Không đổi nội dung text, icon, copy các service.
- Không đổi cấu trúc/spacing AIPlatformCard.
- Không tạo Three.js/canvas; chỉ SVG + CSS keyframes.
- GalaxyBackdrop giữ nguyên (chỉ làm lớp nền).

## Files
- **New:** `src/components/site/ConstellationOverlay.tsx`
- **Edit:** `src/components/site/Solutions.tsx`, `src/components/site/ServicesGrid.tsx`, `src/components/site/AIPlatformCard.tsx` (chỉ thêm `data-*` anchors), `src/components/site/PlatformToServicesFlow.tsx`, `src/components/site/SolutionsToServicesBridge.tsx`, `src/index.css`
