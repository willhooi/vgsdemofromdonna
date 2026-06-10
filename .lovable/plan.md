
# Galaxy unification — Solutions → Bridge → ServicesGrid

Direction chosen: **Cosmic orbit narrative**, but adapted to a **clean / clear / bright background** (light theme, không dark) — ý tưởng galaxy thể hiện qua artwork (orbits, nebula glow, stars) và animation flow, không qua màu nền tối.

## 1. Hợp nhất background (bright galaxy)

Tạo một component nền dùng chung `GalaxyBackdrop` (`src/components/site/GalaxyBackdrop.tsx`), được đặt như một lớp `absolute inset-0 -z-10` ở wrapper bao cả `<Solutions />`, `<SolutionsToServicesBridge />`, `<ServicesGrid />`.

- Nền: trắng → `hsl(145 60% 97%)` rất nhạt, **không** đổi sang dark.
- 2 vùng radial nebula màu primary green (`hsl(var(--primary)/0.10-0.14)`) đặt lệch tâm — một ở khu vực Solutions, một ở khu vực ServicesGrid → tạo cảm giác hai "thiên hà" cùng một dải.
- 2–3 vòng orbit SVG mảnh, `stroke-dasharray`, opacity 15–25%, trải dài qua cả 3 section, xoay rất chậm (`animation: spin 90s linear infinite`).
- Lớp stars: dots SVG nhỏ thưa, opacity 25–40%, drift rất nhẹ (`translateY` 8s ease-in-out infinite).
- Mọi animation tôn trọng `prefers-reduced-motion`.

Trong `Index.tsx`: bọc 3 section trong `<div className="relative isolate">` + `<GalaxyBackdrop />`. Bỏ background riêng của Solutions và ServicesGrid (để chúng trong suốt) — chỉ giữ padding/spacing.

## 2. Bridge → Cosmic warp transition

Refactor `SolutionsToServicesBridge.tsx`:
- Bỏ "Chapter 02 — Activation" chip + chevron tròn cũ.
- Thay bằng: một **orbit ring SVG** ở giữa (vòng dashed green xoay chậm) ôm lấy một core dot pulsing green; phía trên/dưới là 2 streak particle mảnh chạy dọc (`@keyframes warp-streak` translateY + fade) → cảm giác "data warp" từ platform xuống services.
- Giữ tiêu đề ngắn ở giữa: `From the platform → to the services that run on it.` (rút gọn 1 câu, bỏ paragraph mô tả dài).
- Không còn nền riêng — trong suốt trên `GalaxyBackdrop`.

## 3. Service cards — giảm text

Trong `ServicesGrid.tsx` data + render card:
- Bỏ trường `description` dài; thay bằng `tag` ngắn ≤ 4 từ (vd `Rich Media · Engagement`, `Branded ID · Trust`).
- Card layout mới: icon nhỏ trong ô bo tròn (bg `primary/10`), tiêu đề 1 dòng, dòng tag uppercase tracking-wider text-[11px] màu `muted-foreground`.
- Bỏ chế độ "mở rộng chi tiết" hoặc giữ nó nhưng chỉ kích hoạt khi click → mặc định card cực gọn (icon + title + tag).
- Hover: viền `primary/40`, glow nhẹ `shadow-[0_0_24px_-8px_hsl(var(--primary)/0.35)]`, icon scale 1.08.
- Grid 3×3 giữ nguyên, `backdrop-blur-sm` + `bg-white/60` để card "nổi" trên galaxy backdrop.

## 4. Solutions section adaptions

- Bỏ background gradient cục bộ của `Solutions.tsx` (đã extend xuống trắng); thay bằng `bg-transparent`.
- Giữ nguyên cấu trúc tier/infographic nội dung — chỉ chỉnh nền + thêm 1 "core glow" nhỏ phía sau headline để khớp ngôn ngữ galaxy.

## 5. Files touched

- **New**: `src/components/site/GalaxyBackdrop.tsx`
- **Edit**: `src/pages/Index.tsx` (bọc wrapper + render backdrop)
- **Edit**: `src/components/site/Solutions.tsx` (bg transparent, core glow nhỏ)
- **Edit**: `src/components/site/SolutionsToServicesBridge.tsx` (orbit + warp streaks, bỏ chip & chevron cũ)
- **Edit**: `src/components/site/ServicesGrid.tsx` (data: bỏ description dài → tag ngắn; card layout gọn; nền transparent)
- **Edit**: `src/index.css` (keyframes: `orbit-spin`, `warp-streak`, `star-drift`)

## Acceptance

- Cả 3 section dùng chung một bright galaxy backdrop liền mạch, không còn vạch màu hay đổi tông giữa các vùng.
- Orbit rings + stars + nebula glow thấy rõ nhưng không cướp sự chú ý khỏi nội dung.
- Bridge là orbit ring + streaks, không còn chip "Chapter 02".
- Mỗi service card chỉ còn icon + title + 1 dòng tag ngắn.
- Animation mượt, tắt khi `prefers-reduced-motion`.
- Không thay đổi business logic, số lượng tier/service, hay routing.

## Out of scope

- Đổi sang dark theme.
- Thay nội dung tier Solutions hay icon services.
- Thêm 3D/Three.js (chỉ SVG + CSS).
