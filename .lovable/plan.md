# Plan — Dot color journey + VietGuys chevron pulses + smooth morph

## 1. Dot màu chuyển: Đỏ Nhật → Cam → Xanh lá

Dùng `@property --brand-cycle` cho color interpolation mượt (đã có). Cập nhật keyframe **3 stops thay vì 4**, bỏ teal — đúng story "Nhật Bản backing → VietGuys (cam + xanh)":

```css
@keyframes accrete-color-cycle {
  0%   { --brand-cycle: #bc002d; }  /* Japan red — gốc Nhật */
  50%  { --brand-cycle: #ff6b00; }  /* VietGuys orange */
  100% { --brand-cycle: #39b44a; }  /* VietGuys green */
}
```

- Duration: 6s linear infinite (1 chu kỳ trùng với 1 vòng orbit ~5.5–6s → dot chạy đúng 1 vòng = đúng 1 cycle màu, kể được câu chuyện ngay từ vòng đầu).
- Thêm `box-shadow: 0 0 8px var(--brand-cycle)` để dot có quầng sáng đồng màu, "vẽ" vệt sáng quanh ring.
- **Trail effect (mới):** thêm 1 pseudo-element `.accrete-orbit-dot::after` cũng chạy offset-path với delay 200ms, opacity 0.35 → tạo cảm giác sao chổi/vệt khí, sang trọng hơn dot trần.

## 2. Pulse: thay vòng tròn đồng tâm bằng **chevron V** (giống logo VietGuys)

### Concept
Logo VietGuys là 2 chevron "V" lồng nhau (xanh + cam). Thay 2 vòng tròn đồng tâm bằng **2 cặp chevron** phát ra **2 bên trái-phải** của ring chính (không bao tròn nữa, mà bắn ra horizontal):

```text
    ◁◁  [  •ring•  ]  ▷▷
   xanh                 cam
```

- **Cặp trái** (2 chevron `<` xanh lá): phát ra từ cạnh trái ring, trôi dạt sang trái + fade out.
- **Cặp phải** (2 chevron `>` cam): phát ra từ cạnh phải ring, trôi dạt sang phải + fade out.
- Stagger: chevron #2 delay 1.2s sau chevron #1 → cảm giác sóng liên tục.

### Shape
SVG chevron tam giác mảnh (stroke 1.25px, không fill):
```xml
<svg viewBox="0 0 12 16"><path d="M2 2 L10 8 L2 14" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
```
Mirror cho chevron trái (`scaleX(-1)`).

### Animation
```css
@keyframes vg-chevron-right {
  0%   { transform: translateX(0)    scale(0.6); opacity: 0;   }
  20%  {                              opacity: 0.7; }
  100% { transform: translateX(28px) scale(1.1); opacity: 0;   }
}
@keyframes vg-chevron-left {
  0%   { transform: translateX(0)     scaleX(-1) scale(0.6); opacity: 0;   }
  20%  {                                           opacity: 0.7; }
  100% { transform: translateX(-28px) scaleX(-1) scale(1.1); opacity: 0;   }
}
```
- Duration: 2.6s ease-out infinite, stagger 1.3s.
- Chevron xanh dùng `color: #39b44a`, chevron cam dùng `color: #ff6b00` (giữ identity logo, **không** blend theo brand-cycle — để dot là yếu tố animate màu, chevron là yếu tố identity tĩnh-màu).
- Mỗi bên 2 chevron (gần + xa), tổng 4 chevron.

### Layout
```text
position: absolute trên morph wrapper
left side:  right: 100%; margin-right: 4px
right side: left:  100%; margin-left:  4px
top: 50%; translateY(-50%)
```

## 3. Morph mượt xuống headline

Hiện đã scroll-linked easeInOutCubic. Bổ sung để chevron + dot fade hợp lý:

| Element | Fade start (rawProgress) | Fade end |
|---|---|---|
| Chevron pulses | 0 | 0.20 |
| Pulse glow (nếu giữ vòng tròn ở idle xa) | — | bỏ |
| Orbit dot | 0 | 0.30 |
| Ring border | 0 | 0.45 |
| Logo + text (morph vào headline) | 0 | 1 |

Thứ tự fade: **chevron biến mất sớm nhất** (vì là yếu tố mạnh nhất, dễ gây nhiễu khi scale up) → dot → ring → để text+logo "đáp" vào headline sạch sẽ.

Thêm 2 tinh chỉnh để morph cảm giác sang hơn:
- **Ring co lại nhẹ trước khi tan**: progress 0→0.45, scale ring riêng từ 1 → 0.92 (CSS transform trên `[data-ring] > span`) — gợi "đóng cổng" trước khi mở vào trạng thái headline.
- **Chevron "thu hồi"**: khi user scroll xuống, chevron đang trôi ra ngoài → đổi thành trôi ngược về tâm (animation-play-state pause + 1 burst inward). Đơn giản hơn: chỉ fade opacity theo progress, không đổi direction (tránh phức tạp). **Chọn phương án fade đơn giản.**

## 4. File changes

| File | Thay đổi |
|---|---|
| `src/index.css` | Rút gọn `accrete-color-cycle` còn 3 stops, đổi duration 6s. Thêm `.vg-chevron`, `.vg-chevron-left`, `.vg-chevron-right` + 2 keyframes. Thêm `.accrete-orbit-dot::after` trail. Bỏ `.accrete-pulse-ring*` + `@keyframes accrete-pulse`. |
| `src/components/site/AccreteFlightChip.tsx` | Trong portal morph: thay block `[data-pulse]` (2 ring tròn) bằng block `[data-pulse]` chứa 4 SVG chevron (2 trái xanh + 2 phải cam). Tinh chỉnh fade threshold trong `update()`: chevron fade tại 0.20, dot 0.30, ring 0.45. |

## 5. Verification

1. Idle: dot chạy đủ 1 vòng quanh ring trong ~6s, đổi màu đỏ→cam→xanh đúng story.
2. Idle: 2 chevron xanh bắn trái + 2 chevron cam bắn phải, stagger mượt, không giật.
3. Scroll xuống: chevron tan trước (~150–200px đầu), dot mờ dần, ring co + tan, text/logo "đáp" vào headline TrustBand.
4. Scroll lên: reverse mượt, không flash.
5. Mobile 375px: chevron không tràn ra ngoài container Hero (giới hạn translate 20px thay vì 28px).
6. `prefers-reduced-motion`: tắt orbit + chevron + color cycle; render chip tĩnh.

## Out of scope

- Không đổi text chip / headline.
- Không đổi TrustBand layout.
- Không thêm asset mới (chevron là inline SVG).
