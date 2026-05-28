# Đề xuất artwork & animation cho khối CDP

Dựa trên ảnh ref (source panel với 4 icon tròn → CDP blob hữu cơ → orbital rings) và concept chung của web (motif "tín hiệu / sóng / kết nối", primary green #39B44A, accent orange, gradient-hero, nhịp animation nhẹ — fade-up, pulse, dash).

## 1. Artwork — 3 hướng đề xuất

### Hướng A — "Signal Constellation" (khuyến nghị)

Giữ tinh thần ref nhưng tinh chỉnh để khớp web:

- **Source panel (trái)**: glass slab nghiêng nhẹ (rotateY 14°), nền trắng gradient mềm, 4 icon tròn (E-commerce, POS, Web, Search) màu cam gradient (#ff8a72 → #b8341f) — đồng bộ accent của web. Icon arranged theo cụm 2-2 thay vì grid cứng.
- **Connector (giữa)**: 2 đường cong SVG hội tụ (xanh + cam) + 3 chevron "▶▶▶" đang chạy (cdp-dash) thể hiện luồng dữ liệu — gợi lại motif SignalArt của Hero.
- **CDP orb (phải)**: blob hữu cơ (border-radius bất đối xứng kiểu morphing) thay cho hình tròn cứng, gradient xanh #39B44A → #2a8038, có highlight gloss + 2 orbital rings (dashed ngoài + solid trong) quay ngược chiều.
- **Background section**: trắng → #f4faf6 radial (như hiện tại), thêm noise grain rất nhẹ để có chiều sâu.

### Hướng B — "Holographic Data Stream"

- Source panel thành "holo card" với grid lines mờ phía sau, icon nổi 3D hơn (drop-shadow đa lớp).
- Connector là dải particle stream (nhiều dot nhỏ chạy theo đường cong) thay vì line đơn.
- CDP orb dạng "core" với 3 vòng quỹ đạo + vài data-node nhỏ orbit quanh.
- Cảm giác sci-fi hơn, hợp với phần AI Core của web.

### Hướng C — "Editorial Minimal"

- Bỏ orbital rings, đơn giản hoá: source panel phẳng white card, connector mỏng tinh tế, CDP là circle solid với typography "CDP" lớn.
- Tập trung vào typography và whitespace — hợp nếu muốn tone editorial nhẹ.
- Ít animation nhất, performance tốt nhất.

## 2. Hướng Animation

Tất cả dùng CSS keyframes + SVG SMIL, không thêm thư viện:


| Element                 | Animation                     | Duration       |
| ----------------------- | ----------------------------- | -------------- |
| Source panel            | float nhẹ ±3px                | 6s ease-in-out |
| Icon badges             | float so le + sheen quét chéo | 4s / 3s        |
| Connector paths         | stroke-dashoffset chạy        | 2s linear      |
| Chevron ▶▶▶             | opacity twinkle so le         | 1.5s           |
| Particle dots (hướng B) | animateMotion theo path       | 3-4s stagger   |
| CDP orb                 | bob ±3px + pulse glow         | 4s / 3s        |
| Orbital rings           | rotate ngược chiều            | 18s / 24s      |
| Orb gloss highlight     | static (giả 3D)               | —              |


**Nguyên tắc giảm chuyển động**: bọc trong `@media (prefers-reduced-motion: reduce)` để tắt bob/rings/sheen.

## 3. Responsive — tối ưu mọi thiết bị

```text
Desktop (≥1024px)   : layout 2 cột, panel 280px × orb 160px, đầy đủ rings + particles
Tablet  (768-1023)  : 2 cột thu nhỏ, panel 220px × orb 130px, giảm 1 ring
Mobile  (<768px)    : stack dọc, panel full-width max 320px, orb 110px,
                      connector xoay 90° (cong dọc), ẩn particle stream,
                      giữ orb pulse + chevron, tắt orbital ring ngoài
```

Kỹ thuật:

- SVG connector dùng `viewBox` + `preserveAspectRatio="xMidYMid meet"` để scale mượt.
- Canvas particle (nếu giữ ở hướng B) dùng `devicePixelRatio` + resize observer; tắt hẳn ở `<768px` để tiết kiệm pin.
- Icon dùng SVG inline (không raster) — sắc nét mọi DPR.
- Orb dùng `clamp(90px, 14vw, 160px)` thay vì fixed size.
- Container dùng `aspect-ratio` thay vì height cứng để tránh vỡ layout.

## 4. Chi tiết kỹ thuật (chỉ sửa Solutions.tsx)

- File: `src/components/site/Solutions.tsx` (khối CDP hiện tại, ~line 460-880)
- Token màu: dùng `hsl(var(--primary))`, `hsl(var(--accent))` từ index.css — không hardcode hex trong component (hiện đang hardcode #39B44A, sẽ refactor sang token).
- Thêm `@media (prefers-reduced-motion)` trong style block hiện có.
- Thêm breakpoint mobile cho SVG connector (xoay path).
- Không thêm dependency mới, không đụng file khác.

## 5. Câu hỏi xác nhận

1. **Chọn hướng nào**: A (Signal Constellation — gần ref nhất, khuyến nghị), B (Holographic — sci-fi hơn), hay C (Editorial Minimal — gọn nhất)? --> Ans: B nhưng light sci-fi tone (clean & clear)
2. **Particle stream ở connector**: có muốn thêm không, hay giữ chevron ▶▶▶ như hiện tại cho nhẹ? 
3. **Orb shape**: blob hữu cơ (như ref) hay tròn đều (như hiện tại)? --> Ans: tròn đều 
4. **Refactor màu sang design token** (hsl var) hay giữ hex cứng? --> Ans: tuỳ bạn chọn để phù hợp tone & mood Enterprise của thương hiệu 