## Mục tiêu
Hiện tại section "AI Customer Engagement Platform" đang là 2 card tách biệt trong grid `lg:grid-cols-[1fr_minmax(0,38%)]`:
- **Card trái**: `AIPlatformCard` (INPUT → AI HUB → OUTPUT)
- **Card phải**: `OutcomeStage` (cô gái + 3 popup: review 5★, ORDER STATUS, OTP)

Trên màn nhỏ hai card xếp chồng, mất cảm giác "flow liền mạch từ input đến outcome người dùng cuối". Cần **gộp thành 1 card duy nhất** chứa toàn bộ flow `INPUT → HUB → OUTPUT → cô gái/popup`, hiển thị trọn vẹn trên mọi thiết bị.

## Thay đổi trong `src/components/site/Solutions.tsx`

### 1. Wrapper layout (lines 90-98)
Bỏ grid 2 cột. Thay bằng **1 card duy nhất** full-width chứa cả `AIPlatformCard` (đã mở rộng) và `OutcomeStage` bên trong.

```text
┌─────────────────────────────────────────────────────────────┐
│              AI Customer Engagement Platform                 │
│  ┌──────┐    ┌─────┐    ┌───────┐    ┌──────────────────┐  │
│  │INPUT │───▶│ HUB │───▶│OUTPUT │───▶│  Girl + Popups    │  │
│  │ list │    │card │    │ list  │    │  (outcome stage)  │  │
│  └──────┘    └─────┘    └───────┘    └──────────────────┘  │
└─────────────────────────────────────────────────────────────┘
```

### 2. `AIPlatformCard` (lines 443-470)
- Đổi container thành single card wrapping cả 2 phần
- Khu vực animation `CDPWave` chiếm khoảng 60-65% chiều ngang trái
- Thêm cột phụ bên phải chứa `<OutcomeStage>` (cô gái + popup), ngăn cách bằng connector dotted từ OUTPUT panel sang cô gái (animated particles tiếp nối flow)
- Bỏ `min-h-[420px]` cứng, dùng aspect ratio mềm hoặc auto-height

### 3. Layout responsive trong card gộp
- **Desktop (≥1024px)**: flex-row, CDPWave bên trái (flex 1) + OutcomeStage bên phải (width ~340px). Có connector SVG nối từ panel OUTPUT sang khu vực cô gái.
- **Tablet (768-1023px)**: vẫn flex-row nhưng OutcomeStage thu nhỏ (~260px), CDPWave gọn lại (giảm panel width còn 110/130px, hub nhỏ hơn).
- **Mobile (<768px)**: flex-col — CDPWave ở trên (full width, panel có thể quay về grid 2 cột compact như cũ), OutcomeStage ở dưới (max-w 320px, căn giữa). Connector ẩn hoặc chuyển thành mũi tên dọc đơn giản.

### 4. `OutcomeStage` (lines 119-207)
- Giữ nguyên cấu trúc (girl + 3 popup + blob backdrop)
- Bỏ wrapper `max-w-[380px]` cứng, cho phép parent điều khiển width
- Giảm scale popup ở breakpoint nhỏ (`scale-[0.7]` thay `scale-[0.85]`)

### 5. Connector OUTPUT → Girl (mới)
- Thêm 1 SVG dotted curve nhỏ ở giữa OUTPUT panel và OutcomeStage (chỉ hiển thị từ `md:` trở lên)
- Vài particle xanh `animateMotion` chạy từ OUTPUT panel đến vùng cô gái → cảm giác flow liền mạch
- Mobile: ẩn (`hidden md:block`)

### 6. CSS điều chỉnh
- `.cdp-stage`: bỏ `absolute inset-0`, dùng `relative w-full h-full` để fit vào flex parent
- Media query `@media (max-width: 767px)`: stack column, panel width về `calc(50% - 4px)` dạng grid như reference cũ
- Đảm bảo overflow visible cho popup không bị cắt

## Kết quả mong đợi
- **1 card duy nhất** kể trọn câu chuyện: Dữ liệu (INPUT) → AI xử lý (HUB) → Kích hoạt kênh (OUTPUT) → Khách hàng nhận được giá trị (cô gái + thông báo OTP/Order/Review).
- Trên mobile: flow dọc từ trên xuống, không bị tách rời cảm xúc.
- Trên desktop: flow ngang liền mạch, có particle chạy từ trái sang phải xuyên suốt.

## Files
- Chỉ sửa `src/components/site/Solutions.tsx`.
