## Build plan — Mở rộng & làm rõ plexus hiện tại

Giữ nguyên phong cách **organic cluster plexus** đang có (node tròn xanh nhấp nháy + glow + đường nối nearest-neighbors). Chỉ làm 3 việc: (1) mở rộng vùng phủ từ trên 4 ô conversation xuống hết 9 ô services, (2) tăng độ rõ nét, (3) mask plexus quanh dòng "From the platform → to the services that orbit it".

### 1. `src/pages/Index.tsx` — gộp 3 section vào một wrapper
- Bọc `Solutions` (4 ô conversation) + `SolutionsToServicesBridge` + `ServicesGrid` (9 ô) vào **một** `<div className="relative isolate overflow-hidden">`.
- Mount `ServicesPlexusBackdrop` **một lần** ở wrapper này (absolute inset-0 z-0) để mesh trải liên tục từ đầu khối conversation đến hết khối services.
- Giữ `GalaxyBackdrop` cho hero, không đụng các section khác.

### 2. `src/components/site/ServicesGrid.tsx` — gỡ mount cũ
- Bỏ `<ServicesPlexusBackdrop />` đang mount bên trong (đã đẩy lên Index wrapper).
- Card vẫn `bg-card` để nổi trên mesh.

### 3. `src/components/site/ServicesPlexusBackdrop.tsx` — làm rõ nét (không đổi kiểu)
Giữ nguyên kiến trúc hiện tại (grid jitter + nearest-neighbors + twinkle + glow). Chỉ tăng các thông số:
- Wrapper opacity: `opacity-40 md:opacity-70` → `opacity-65 md:opacity-95`.
- Line: stroke-opacity `0.18 → 0.40`, stroke-width `0.75 → 1.1`.
- Node: bán kính range `1.8–3 → 2.6–4.2`; fill opacity `0.5 → 0.95`; glow `feGaussianBlur stdDeviation 2.5 → 3.2`.
- Grid density: `6×7 → 8×9` jittered points (vẫn dùng `mulberry32` PRNG xác định, không random mỗi render).
- Twinkle keyframes giữ nguyên (0.25↔0.9 opacity, scale 1↔1.35), respect `prefers-reduced-motion`.
- ViewBox tăng chiều dọc `0 0 1800 1200 → 0 0 1800 1600` để phân bố node đều khi section cao hơn.

### 4. `src/components/site/SolutionsToServicesBridge.tsx` — mask quanh chữ
- Bọc dòng headline trong `relative` container.
- Thêm lớp absolute phía sau (z-0, pointer-events-none):
  - background: `radial-gradient(ellipse 70% 160% at 50% 50%, hsl(var(--background)) 0%, hsl(var(--background)/0.92) 55%, transparent 100%)`
  - `backdrop-blur-[2px]`
- Chữ ở `relative z-10`, giữ nguyên typography & màu.
- Hiệu quả: plexus mờ dần quanh chữ, không có viền cứng, chữ nổi bật.

### Không đổi
- `index.css`, tokens màu, `GalaxyBackdrop`, `Solutions.tsx` (nội dung 4 ô), `ServicesGrid` (nội dung 9 ô), các section khác.

### Verify
- Plexus liên tục, rõ nét từ trên 4 ô conversation xuống hết 9 ô services.
- Dòng "From the platform..." nổi bật, plexus fade quanh chữ, không viền cứng.
- Card trắng vẫn sắc nét.
- `prefers-reduced-motion`: tắt nhấp nháy.
- Mobile: opacity giảm hơn desktop, không vỡ layout.
