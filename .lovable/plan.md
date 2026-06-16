## Mục tiêu
Redesign section **Core Values** trong `src/components/site/about/AboutCoreValues.tsx` từ grid 3 cột đều nhau hiện tại → **asymmetric bento mosaic** lấy cảm hứng từ trang vietguys.biz/en/about-us/vietguys, vẫn giữ VietGuys color palette (xanh lá primary + đỏ accent).

## Phân tích layout tham chiếu (vietguys.biz)
- Tiêu đề **"Core Values"** đặt **lệch trái**, không center
- Nội dung dàn theo **mosaic 3 cột bất đối xứng**: panel chữ (nền xám/tint) xen kẽ với **ảnh thật** team/sự kiện
- **Icon outline khổng lồ** (cog-with-people, target, handshake…) đóng vai trò **divider** giữa các hàng — tạo nhịp thị giác mạnh
- Mỗi value chiếm 1 ô tint, ảnh chiếm các ô còn lại → cảm giác "kể chuyện" thay vì "liệt kê thẻ"

## Layout mới (6 values, không cần ảnh thật)
Vì hiện tại chưa có ảnh team riêng cho từng value, dùng **bento grid 12-col asymmetric** kết hợp 3 chất liệu:
1. **Value cards** (text + icon nhỏ) — nền tint xanh nhạt
2. **Accent tiles** (ảnh/illustration hoặc gradient + giant icon outline) — đóng vai trò "ảnh" trong mosaic
3. **Big outline icon dividers** giữa 2 hàng — cog-people / lightbulb / handshake stroke-only, opacity thấp, scale lớn

### Cấu trúc lưới (desktop, 12 cột)
```
┌─────────────────────┬──────────────────────────────────┐
│  CORE VALUES        │  People first          (col 5-8) │
│  (label + heading,  │──────────────────────────────────┤
│  col 1-4, sticky)   │  [photo tile]   │  Quality       │
│                     │   (col 5-8)     │  (col 9-12)    │
├─────────────────────┴──────────────────────────────────┤
│             ⚙ giant divider icon (full width)          │
├──────────────┬─────────────────────┬───────────────────┤
│ Integrity    │  [accent tile]      │  Accountability   │
│ (col 1-4)    │   (col 5-8)         │  (col 9-12)       │
├──────────────┴─────────────────────┴───────────────────┤
│             ✦ giant divider icon (full width)          │
├────────────────────────┬───────────────────────────────┤
│ Creativity & Innovation│  Honesty       (col 7-12)     │
│ (col 1-6, wider)       │                               │
└────────────────────────┴───────────────────────────────┘
```

### Chất liệu visual
- **Value tile**: nền `hsl(var(--primary) / 0.06)`, border `hsl(var(--primary) / 0.18)`, padding lớn, icon stroke ở góc trên, title font-display, body muted. Hover: nâng nhẹ + viền đậm hơn.
- **Accent tile** (thay ảnh): gradient mềm `primary → primary-deep` + 1 giant outline icon SVG ở giữa (opacity ~25%), góc red accent dot (`#cd3734`) như network art hiện tại để đồng bộ với section khác.
- **Divider icon row**: 1 SVG outline stroke-only chiếm chiều cao ~120px, opacity 0.10, primary color, căn giữa, animation `stroke-dasharray` draw-in khi vào viewport (giữ hệ thống animation `DrawIcon` hiện có).
- **Sticky title block** (col 1-4 hàng đầu): label "CORE VALUES" + heading lệch trái, dưới có 1 đoạn intro ngắn 1 câu + 1 line strike đỏ accent ngắn dưới heading.

### Mobile (< md)
- Stack 1 cột: title → value → divider icon → value → … 
- Accent tile co lại thành banner ngang ngắn (h-32) hoặc ẩn để giữ gọn

### Color palette giữ nguyên
- Primary green: `hsl(var(--primary))`
- Primary deep: `hsl(var(--primary-deep))`
- Red accent: `#cd3734` (dot/strike)
- Background section: gradient nhẹ `hsl(0 0% 98%) → white` (giữ như hiện tại) để vẫn nổi giữa các section khác

### Animation
- Giữ component `Reveal` + `DrawIcon` hiện có
- Stagger delay theo thứ tự đọc zigzag của mosaic (không đều theo index nữa)
- Giant divider icons draw-in khi scroll tới

## File đụng tới
- `src/components/site/about/AboutCoreValues.tsx` — refactor toàn bộ JSX layout + bổ sung `GiantDividerIcon`, `AccentTile` components nội bộ. Mảng `values` giữ nguyên nội dung 6 mục.

## Câu hỏi trước khi build
1. **Accent tile**: dùng **gradient + giant outline icon** (an toàn, đồng bộ brand), hay anh muốn mình **generate ảnh minh hoạ** (team/office abstract) để chèn vào như layout tham chiếu?
2. **Big divider icons**: dùng 2 icon (giữa hàng 1-2 và hàng 2-3) hay chỉ 1 icon duy nhất ở giữa section?
