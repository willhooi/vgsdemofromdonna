## Mục tiêu
Bám sát chính xác hình tham khảo cho 2 vùng:
1. **Connector lines / Data Flow Lines** — đường nối giữa 4 step.
2. **Khu vực Customer Experience (Step 4)** — bố cục cô gái + 4 popup + review.

---

## 1) Connector Lines (theo đúng reference)

Hiện tại chỉ có 3 đoạn dashed cực ngắn giữa các step. Hình tham khảo có hệ thống connector phong phú hơn:

### Step 1 → Step 2 (cam, dashed)
- **7 đường cong cam** đi từ cạnh phải của từng row Data Source (ERP, POS, Website/App, Social, Zalo OA, Loyalty, Campaign) → **hội tụ về 1 điểm cam tròn** ở cạnh trái cột AI Brain → tiếp tục thành 1 đường vào vòng tròn "Customer Profile 360°".
- Màu: `hsl(22 85% 55%)`, `stroke-dasharray="3 3"`, độ dày 1.25, đầu mút có dot tròn.
- Animate dash chạy nhẹ (giữ `flow-dash-move`).

### Step 2 → Step 3 (xanh, dashed)
- **4 đường cong xanh** đi từ cạnh phải vòng Customer Profile 360° → 4 row của Business Impact (Business Reports, Audience Segmentation, Automated Journeys, Omnichannel Engagement).
- Điểm xuất phát: 1 dot xanh ở cạnh phải vòng tròn brain, rồi tỏa ra 4 nhánh.
- Màu: `hsl(145 55% 42%)`, `stroke-dasharray="3 3"`.

### Step 3 → Step 4 (xanh, dashed)
- **4 đường cong xanh** từ cạnh phải 4 row Business Impact → hội tụ về 1 dot xanh ở cạnh trái khu CX → tỏa thành 4 đường ngắn vào 4 popup CX.

### Kỹ thuật
- Dùng 1 SVG overlay duy nhất `absolute inset-0` (đã có sẵn), nâng `viewBox="0 0 1000 600"` để vẽ Bezier curve mượt.
- Đặt SVG `z-index: 2` trên `bg` nhưng dưới content card (content `z-10`). Connector chỉ hiển thị `hidden lg:block`.
- Mobile (<lg): không vẽ connector, dùng mũi tên dọc nhỏ ↓ giữa các step (subtle, dot chain).

---

## 2) Customer Experience (Step 4) — bố cục mới

Hiện tại: cô gái nằm absolute đè ra ngoài card, popup xếp dọc bên trong. Reference: **popup nằm bên trái, cô gái nằm bên phải, cùng trong card**, review badge nằm dưới cô gái.

### Layout mới (desktop ≥lg)
```
┌─────────────────────────────────────┐
│ ④ CUSTOMER EXPERIENCE               │
│ Deliver personalized experiences... │
│                                     │
│ ┌──────────┐    ┌─────────────┐    │
│ │ Tag      │    │             │    │
│ │ Personali│    │             │    │
│ │ 15% OFF  │    │   👧 Cô gái │    │
│ ├──────────┤    │   (ảnh)     │    │
│ │ ✓ Order  │    │             │    │
│ │ #VG12345 │    │             │    │
│ ├──────────┤    │             │    │
│ │ 🎁 Birth │    │             │    │
│ │ 100 pts  │    │             │    │
│ ├──────────┤    └─────────────┘    │
│ │ 🛍 Recomm│    ┌─────────────┐    │
│ │ Check... │    │ ⭐⭐⭐⭐⭐ 5.0│    │
│ └──────────┘    │ "Thanks..."  │    │
│                 └─────────────┘    │
└─────────────────────────────────────┘
```

- Card Step 4 chuyển thành **2 cột nội bộ**: cột trái (popup list, ~55% width), cột phải (ảnh + review badge, ~45% width).
- Bỏ logic `lg:absolute -right-20` overflow ra ngoài → ảnh nằm **trong card** sạch sẽ.
- Bỏ `lg:pr-24 xl:pr-28 overflow-visible` ở `AIPlatformCard` wrapper.
- Review badge: full pill có `⭐⭐⭐⭐⭐ 5.0` + dòng `"Thanks for your feedback!"` (đúng text reference, không phải "Thanks!").
- Ảnh cô gái: `object-contain`, max-h khoảng 220px, có soft green glow phía sau (radial gradient nhẹ giống reference).

### Layout mobile (<md)
- Stack dọc: 4 popup trước, sau đó ảnh + review badge.
- Ảnh max-w-[200px] căn giữa.

### Layout tablet (md-lg)
- Giữ 2 cột nội bộ nhưng compact hơn.

---

## Thay đổi kỹ thuật

### File duy nhất: `src/components/site/Solutions.tsx`

1. **`AIPlatformCard`** (line 460-532):
   - Bỏ `lg:pr-24 xl:pr-28 lg:overflow-visible` → trở về `overflow-hidden`.
   - Thay block SVG connector (lines 481-504) bằng SVG mới với `viewBox="0 0 1000 600"`, vẽ:
     - 7 path cong cam từ left zone (Data Sources rows) → 1 dot cam → vào brain core
     - 4 path cong xanh từ brain → 4 row Business Impact
     - 4 path cong xanh từ Business Impact → 1 dot xanh → 4 popup CX
   - Toạ độ tính sẵn dựa trên grid 4 cột đều (mỗi cột ~250px wide), Bezier control points cho cong mượt.
   - Tất cả path dùng class `flow-dash` + delay so le (`flow-1` → `flow-12`).

2. **`StepCustomerExperience`** (line 704-755):
   - Rewrite body: thay flex-col đơn bằng `grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-3`.
   - Cột trái: map 4 popup (giữ logic hiện tại nhưng bỏ `step-row-float` để gọn).
   - Cột phải: 
     ```tsx
     <div className="relative flex flex-col items-center">
       <div className="relative">
         <div className="absolute inset-0 -z-10 rounded-full bg-[radial-gradient(...green glow...)]" />
         <img src={shopperImg} className="h-auto w-full max-w-[200px] object-contain" />
       </div>
       <div className="mt-2 rounded-2xl bg-white px-3 py-1.5 shadow ring-1 ring-border">
         ⭐⭐⭐⭐⭐ 5.0 + "Thanks for your feedback!"
       </div>
     </div>
     ```

3. **CSS thêm** trong `<style>` block (line 516):
   - Bổ sung `.flow-4` → `.flow-12` với delay khác nhau (0.1s, 0.2s... 1.2s) cho stagger animation mượt.

4. **Connector dots**: 2 SVG `<circle>` (1 cam ở trái brain, 1 xanh ở phải brain / trái CX), có `animate-pulse` opacity.

---

## Kết quả
- Đường nối toả/hội tụ rõ ràng theo flow ①→②→③→④ y như reference.
- Cô gái + review nằm gọn trong card, popup bên trái — không còn cảnh ảnh đè ra ngoài hay popup chồng lên ảnh.
- Mobile: stack dọc sạch, connector ẩn để tối ưu space.
