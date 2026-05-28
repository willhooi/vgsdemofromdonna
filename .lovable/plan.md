
# Plan — CDP "Holographic Data Stream" (Bright Theme)

## Phạm vi
Chỉ sửa **`src/components/site/Solutions.tsx`** — khối artwork CDP (component `CDPWave` hiện tại). Không đụng file khác, không thêm dependency.

## Cấu trúc component sẽ build

```text
<section role="img" aria-label="CDP data flow diagram">
  <div class="cdp-stage">              ← flex row, gap 32, justify-center, align-center
    ├── <SourcePanel/>                 ← 200px, rotateY(10deg), float
    │     ├── header label "● DATA SOURCES"
    │     ├── holo grid ::before (18×18 lines)
    │     └── grid 2×2 badges (E-commerce, POS, Web, Search)
    │
    ├── <ParticleConnector/>           ← 88×64 SVG + chevron row
    │     ├── 2 path cong (xanh + cam, opacity 0.12)
    │     ├── 5 dots animateMotion (3 xanh + 2 cam)
    │     └── 3 chevron ▶▶▶ stagger pulse
    │
    └── <CDPOrb/>                      ← clamp(100,15vw,150), aspect 1/1, bob
          ├── ring3 (dashed, -18 inset, 28s)
          ├── ring2 (solid, -6 inset, -18s)
          ├── ring1 (dashed, +4 inset, 12s)
          ├── 2 data-node dots orbit (xanh 6s, cam 4s)
          ├── pulse glow border (3s)
          └── core circle (#39B44A) + gloss + "CDP / PLATFORM"
  </div>

  <style>{/* keyframes + responsive */}</style>
</section>
```

## Keyframes cần định nghĩa
`srcFloat` · `dotBlink` · `badgeFloat` · `chevPulse` · `dash` (cho stroke path nếu cần) · `ringSpin` / `ringSpinRev` · `nodeOrbit` · `orbGlow` · `orbBob`

## Token màu
Dùng **hex cứng theo spec** (#39B44A, #ff8a72, #f0faf2, …) cho artwork — đồng bộ với brand tokens `brand.green` / `brand.orange` đã có sẵn trong `tailwind.config.ts`. Không refactor sang `hsl(var(--…))` để giữ đúng spec màu chính xác và tránh drift visual.

## Responsive
- **≥1024px**: layout đầy đủ như spec.
- **768–1023px**: source panel 165px, ẩn ring3, giảm còn 3 particle dots.
- **<768px**: `flex-direction: column`, source panel full-width max 300px, bỏ rotateY, xoay connector SVG 90°, ẩn data-node dots + particle, giữ chevron + ring1 + orb pulse.

## Accessibility
- `role="img"` + `aria-label` ở section gốc.
- `@media (prefers-reduced-motion: reduce)`: tắt `srcFloat`, `orbBob`, `orbGlow`, ring rotations, badge float; chevron giảm biên độ 0.4→0.7; particle `dur ×2`.
- 4 icon là **SVG inline outline** (shopping-bag, monitor, globe, search) — không raster.

## Chi tiết kỹ thuật

- 4 icon SVG outline tự vẽ inline (viewBox 24×24, stroke #39B44A 1.8px, stroke-linecap round):
  - `shopping-bag`: thân túi + 2 quai cong
  - `monitor`: rect + chân đế ngang
  - `globe`: circle + ellipse ngang + đường cong dọc
  - `search`: circle + tay cầm chéo
- Particle dots dùng `<circle><animateMotion><mpath href="#..."/></animateMotion></circle>` (SMIL) với `repeatCount="indefinite"`.
- Orb `aspect-ratio: 1/1` + `width: clamp(100px,15vw,150px)`, container `position: relative` cho rings absolute.
- Bob/glow/orbit dùng pure CSS keyframes, không JS.
- Holo grid trên source panel: lớp absolute `inset:0`, 2 linear-gradient 18×18, `overflow:hidden` ở panel cha.

## Out of scope
- Không đổi heading / copy section CDP.
- Không đổi background section ngoài (vẫn radial trắng → #f4faf6 đã có).
- Không đụng `index.css`, `tailwind.config.ts`, hay component khác.
- Bỏ canvas particle hiện tại (orbitCanvasRef) — thay bằng SVG SMIL theo spec.

## Verify sau khi build
1. Build pass.
2. Mở preview ở 1298px (desktop hiện tại) — kiểm orb bob, rings quay ngược chiều, particle chảy mượt, chevron nhấp nháy stagger.
3. Resize 800px và 400px — kiểm fallback (ẩn ring3, stack dọc, xoay connector).
4. Toggle `prefers-reduced-motion` (DevTools Rendering) — kiểm animation tắt đúng.
