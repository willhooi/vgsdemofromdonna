## Mục tiêu

1. Chip "A member of Accrete" canh đúng trục với headline (hiện đang lệch do `mt-5/6` + `justify-center`).
2. Thay mũi tên cam (`ChevronDown`) bằng icon **cờ Nhật Bản** (hinomaru) — nhấn mạnh nguồn gốc Nhật.
3. Nâng cấp hiệu ứng morph chip ⇄ headline lên cảm giác **premium SaaS enterprise**: mượt hơn, có chiều sâu, có "story", không còn cảm giác chỉ scale + fade.

---

## 1) Alignment của chip trong Hero

File: `src/components/site/Hero.tsx` + `AccreteFlightChip.tsx` (placeholder wrapper).

- Đưa chip **lên trên headline** (eyebrow position), cách headline 16–20px — pattern chuẩn của Stripe / Linear / Vercel.
- Canh `text-center lg:text-left` đồng bộ với headline (hiện placeholder dùng `justify-center lg:justify-start` nhưng margin-top làm nó rơi xuống dưới H1 — sẽ chuyển order: chip trước, H1 sau).
- Mobile: chip canh giữa; Desktop (lg+): canh trái, cùng padding-left với H1 (0px — cùng container).
- Bỏ `mt-5 md:mt-6` ở placeholder, thay bằng `mb-5 md:mb-6` khi đặt trên headline.

## 2) Icon cờ Nhật Bản thay chevron cam

- Tạo component nhỏ `JapanFlag` (inline SVG, 16×11, viewBox `0 0 15 10`): nền trắng + hình tròn đỏ `#bc002d` (chuẩn hinomaru), bo `rounded-[2px]`, border `1px hsl(0 0% 0% / 0.08)` để nổi trên nền champagne của chip.
- Thay `<ChevronDown data-arrow>` trong `AccreteFlightChip.tsx` bằng `<JapanFlag data-flag>`.
- Khi morph → headline: flag **không biến mất** mà scale theo logo Accrete, đứng cạnh logo như một huy hiệu xuất xứ (giữ story "from Japan"). Bỏ logic `opacity: 1 - progress*4` cho arrow.
- Cập nhật cả TrustBand headline target để có 1 slot cờ Nhật bên cạnh logo Accrete (đảm bảo morph "khớp" landing point) — chỉ visual, không đổi text.

## 3) Premium SaaS morph — nâng cấp hiệu ứng

Hiện tại: scale + opacity bg + font-weight. Quá phẳng.

Nâng cấp (vẫn scroll-linked, bidirectional, GPU-only):

**a. Easing & timing curve**
- Bỏ map tuyến tính `scrollY / endScroll`. Dùng `easeInOutCubic` cho progress → cảm giác "có quán tính".
- Tăng `endScroll` ~ `vh * 0.65` để morph kéo dài hơn, không "snap".

**b. Layered depth (chiều sâu)**
- Thêm **glow halo** phía sau chip (radial gradient champagne→transparent, blur 24px). Halo expand từ 0 → 1.4× theo progress rồi fade ở cuối → cảm giác "lift off".
- Thêm **subtle drop-shadow** chuyển từ `0 4px 12px rgba(191,138,46,.25)` (chip state) → `0 18px 48px rgba(15,27,61,.18)` (headline state, navy enterprise shadow).

**c. Specular sweep ăn theo scroll**
- Lớp shimmer hiện chạy CSS animation độc lập → đổi thành **gradient position drive theo progress** (background-position x: -100% → 200%). Cảm giác "scanner sweep" khi user scroll.

**d. Logo Accrete transition**
- Logo PNG hiện chỉ scale. Thêm: `filter: saturate(0.85) → saturate(1)` + `drop-shadow` tăng dần → logo "nở ra" thay vì phóng to đơn thuần.

**e. Text "A member of"**
- Hiện chỉ đổi font-weight + letter-spacing. Thêm:
  - Color transition: `hsl(128 55% 20%)` → `hsl(var(--foreground))`.
  - Text-shadow nhẹ ở cuối (`0 1px 0 rgba(255,255,255,0.6)`) cho cảm giác emboss editorial.
  - Slight `translateY` so le giữa "A member of" và logo (parallax 4px) để có chiều sâu khi morph.

**f. Surface dissolve**
- Thay `opacity 1 → 0` thẳng bằng 2 layer:
  - Border ring: `box-shadow inset 0 0 0 1px champagne` → fade 0→0.5 progress.
  - Background gradient: fade 0.3→0.8 progress (chậm hơn border).
  - Tạo cảm giác "vỏ tan dần lộ nội dung" thay vì "biến mất 1 phát".

**g. Micro-motion khi idle (chip state, progress=0)**
- Halo có breathing animation rất nhẹ (scale 1 ↔ 1.04, 4s ease-in-out infinite) — chỉ active khi progress < 0.05. Tạo cảm giác "alive" không tĩnh.

**h. Reduced motion**
- Giữ fallback hiện tại (tắt morph, render static chip + static headline).

---

## File changes

| File | Thay đổi |
|------|----------|
| `src/components/site/Hero.tsx` | Đặt `<AccreteFlightChip />` **trên** `<h1>` thay vì dưới |
| `src/components/site/AccreteFlightChip.tsx` | Thêm `JapanFlag` inline SVG, đổi placeholder margin (`mb-*` thay `mt-*`), thêm halo layer, drive shimmer + filter + color + shadow theo progress, easeInOutCubic |
| `src/components/site/TrustBand.tsx` | Thêm Japan flag nhỏ cạnh logo Accrete trong headline (target landing) |
| `src/index.css` | Thêm/cập nhật class: `.accrete-morph-halo`, `.accrete-morph-shimmer`, breathing keyframe, navy enterprise shadow token |

## Verification

1. Desktop: chip nằm ngay trên headline, canh trái, cách 16–20px.
2. Mobile (375px): chip canh giữa, không vỡ layout.
3. Cờ Nhật hiển thị rõ nét trên chip champagne (border tinh tế, không lẫn).
4. Scroll xuống: halo nở → shimmer sweep → border tan → bg tan → logo + flag scale tới đúng kích thước trong TrustBand headline → text đổi weight/color mượt.
5. Scroll lên: reverse y nguyên, không giật.
6. `prefers-reduced-motion`: chip + headline render tĩnh, không morph.

## Out of scope

- Không đổi copy headline / chip text.
- Không đổi layout TrustBand (chỉ thêm flag icon nhỏ cạnh logo).
- Không đổi HeroChatAnimation.
