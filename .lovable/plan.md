## Mục tiêu
Cải thiện bố cục Core Values: cân đối thị giác, dễ đọc, đồng thời "khâu" liền mạch với 2 section kề (Our Story xanh rêu → wave trắng kem ở trên, Mission/Vision mint-green ở dưới).

## Vấn đề hiện tại
- Layout 4 tile + 2 tile lệch trục, heading dồn 1 bên khiến không gian trái (thuyền) trống.
- Nền sail-white ấm "đứt mạch" với mint-green của Mission/Vision phía dưới.
- Thuyền buồm bị mask mạnh, đóng vai trò trang trí mờ chứ không tạo cảm giác "hành trình".

## Hướng đã chọn: A — Horizon Journey

### Bố cục mới (`src/components/site/about/AboutCoreValues.tsx`)
```text
┌─────────────────────────────────────────────────────┐
│            CORE VALUES (eyebrow, center)            │
│      Six values that have outlasted every trend.    │
│           ── (coral underline, center) ──           │
│         short description (max-w-2xl, center)       │
│                                                     │
│  ┌────────┐  ┌────────┐  ┌────────┐                │
│  │ Tile 1 │  │ Tile 2 │  │ Tile 3 │   (row 1)     │
│  └────────┘  └────────┘  └────────┘                │
│  ┌────────┐  ┌────────┐  ┌────────┐                │
│  │ Tile 4 │  │ Tile 5 │  │ Tile 6 │   (row 2)     │
│  └────────┘  └────────┘  └────────┘                │
│                                                     │
│   ～～～～ wave + sailboat (full-width horizon) ～～  │
└─────────────────────────────────────────────────────┘
```

### Thay đổi cụ thể
1. **Heading block**: chuyển từ cột phải (col-span-4) thành **centered top** (`max-w-2xl mx-auto text-center`), bỏ `sticky`. Eyebrow + h2 + coral underline + paragraph mô tả căn giữa.
2. **Grid tile**: đổi từ `lg:grid-cols-12` phức tạp sang `grid sm:grid-cols-2 lg:grid-cols-3 gap-6` — 6 tile đều nhau, 2 hàng × 3 cột trên desktop, 2 cột trên tablet, 1 cột mobile. `min-h` đồng nhất để hàng đều.
3. **Sailboat + wave**: di chuyển khỏi vị trí "left backdrop". Đặt thành **dải horizon full-width ở đáy section**:
   - Container `absolute inset-x-0 bottom-0 h-[40%]`.
   - Thuyền nhỏ hơn, đặt lệch trái 25–35% (`left-[8%]`, `bottom-[18%]`, max-h ~220px), giữ hướng mũi sang phải (bỏ `scaleX(-1)`).
   - Sóng SVG chạy ngang full-width ngay dưới thuyền, gradient từ `oceanDeep` → `horizonTeal` → `mint nhạt phía dưới` (nối Mission/Vision).
   - Parallax dọc nhẹ giữ nguyên, biên độ giảm còn ±20px.
4. **Nền section**: gradient 3 stop để khâu 2 đầu:
   - `0%`: `#FFFFFF` (nối wave trắng từ Our Story).
   - `55%`: `SAIL.sailWhite` (giữ chất ấm cho vùng tile).
   - `100%`: `hsl(130 60% 96.5%)` (đúng màu top của Mission/Vision → liền mạch tuyệt đối).
5. **Overlay đọc chữ**: bỏ overlay trái-phải (không còn thuyền bên trái). Thêm overlay đứng nhẹ `linear-gradient(to bottom, transparent 60%, rgba(246,241,231,0.5))` phía trên dải horizon để tile không bị sóng cắt.
6. **Tile style**: giữ bảng màu SAIL hiện có (border teal, underline coral, shadow oceanDeep). Bỏ blob teal ở góc tile thành accent nhỏ hơn cho đỡ rối khi xếp 3 cột.
7. **Padding section**: `py-20 md:py-24` giữ nguyên, nhưng thêm `pb-[clamp(120px,18vw,200px)]` để chừa chỗ cho dải horizon mà không đè tile.

### Kết nối 2 section kề
- **Trên (Our Story → wave trắng)**: stop `0% #FFFFFF` của Core Values khớp với màu wave `hsl(0 0% 97%)` → không thấy "đường nối".
- **Dưới (Mission/Vision mint)**: stop `100% hsl(130 60% 96.5%)` = đúng màu top của Mission/Vision; thêm sóng có stop màu mint ở rìa dưới → cảm giác "thuyền lướt vào vùng mint" rồi chuyển section.

### Không thay đổi
- Nội dung 6 giá trị, copy heading, asset thuyền buồm.
- Bảng màu SAIL, `DrawIcon`, `InViewGroup`, animation reveal.
- Các section khác và `About.tsx`.

### Kiểm tra sau khi build
- Preview desktop 1308px: 3×2 đều, thuyền + sóng ngang đáy, nối mint xuống Mission/Vision.
- Preview mobile: 1 cột tile, thuyền co lại hợp lý, không tràn.
- `npx tsc --noEmit` pass.
