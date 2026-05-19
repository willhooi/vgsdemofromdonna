## Mục tiêu
Tạo một "shared-element" giữa CTA Hero và section "A member of Accrete" — một chip nhỏ xuất hiện cạnh nút **Contact Experts**, rồi khi user bắt đầu scroll, chip đó bay xuống và morph thành heading của TrustBand. Tác dụng: dẫn mắt + chuyển tải thông điệp "VietGuys được Accrete bảo chứng" ngay tại điểm chuyển đổi từ pitch → trust.

## Trải nghiệm người dùng

```text
[ Where conversations… ]
[ Contact Experts → ]  ◀ "A member of [Accrete]"   ← chip tĩnh, pulse nhẹ
        │
   user scrolls
        │  chip rời vị trí, bay xuống theo đường cong
        ▼
┌─────────────────────────────────┐
│  A member of [Accrete logo]     │ ← chip morph vào đúng heading
│  Backed by Japan's leading…     │
└─────────────────────────────────┘
```

1. **Trạng thái nghỉ (Hero in view):** Chip nằm bên phải/below nút CTA, kích thước nhỏ (~ 11–12px text + logo Accrete cao ~18px), border mảnh, glow nhẹ. Có một mũi tên ↓ rất subtle, pulse 1 nhịp/3s để gợi ý "có gì đó bên dưới".
2. **Khi user scroll qua một ngưỡng** (Hero rời viewport ~20%): chip detach khỏi layout, chuyển sang `position: fixed`, di chuyển theo đường cong (cubic ease-out) về vị trí heading TrustBand bằng FLIP technique (đo bounding rect target). Trong lúc bay, font-size + logo height scale dần lên kích thước heading.
3. **Khi tới đích:** chip fade-out, heading thật của TrustBand đồng thời fade-in + có một vệt sáng (shimmer) quét qua một lần để đánh dấu "đã đến nơi". Sau đó chip không xuất hiện lại trong phiên này.
4. **Reduced motion:** bỏ animation bay, chỉ giữ chip tĩnh + scroll bình thường. Heading TrustBand vẫn shimmer 1 lần khi vào view.
5. **Mobile:** chip hiển thị thành 1 dòng nhỏ ngay dưới CTA (full-width text-center) thay vì cạnh phải, animation y hệt.

## Thay đổi code

### Component mới: `src/components/site/AccreteFlightChip.tsx`
- Render chip với text "A member of" + logo Accrete (dùng cùng asset đang import trong TrustBand) + arrow xuống.
- Quản lý 3 state: `idle` → `flying` → `landed`.
- Đọc `data-accrete-target` của heading trong TrustBand qua `document.querySelector` để lấy bounding rect đích.
- Dùng `IntersectionObserver` trên Hero section để detect "Hero rời viewport ~20%" → trigger flight.
- Animation thuần CSS transform (translate + scale) trên một wrapper `position: fixed`, không dùng library mới.
- Tôn trọng `prefers-reduced-motion`.
- Lưu `sessionStorage` flag để không replay khi user scroll lên rồi xuống lại.

### `src/components/site/Hero.tsx`
- Mount `<AccreteFlightChip />` ngay sau khối `<Button> Contact Experts </Button>` (cùng container CTA), để chip thừa hưởng vị trí khởi đầu cạnh CTA. Không đổi gì khác về layout/text.

### `src/components/site/TrustBand.tsx`
- Thêm `data-accrete-target` + `id="accrete-heading"` lên `<h2>` "A member of [logo]" để chip biết đích.
- Thêm class kích hoạt shimmer-once khi chip "landed" (lắng nghe custom event `accrete:landed` trên window). Shimmer dùng keyframe `metallic-sweep` đã có sẵn trong `index.css`.

### `src/index.css`
- Thêm util `accrete-chip` (border, glow, pulse arrow) và keyframe `chip-arrow-pulse`. Không đụng token màu — dùng brand green/orange hiện có.

## Edge cases & QA
- User scroll cực nhanh → clamp animation duration tối đa 700ms, snap về landed.
- Target chưa mount (TrustBand lazy) → fallback: chip fade out tại chỗ thay vì bay.
- Resize giữa lúc bay → recompute target rect on `resize`.
- SSR safe: mọi DOM access trong `useEffect`.
- Kiểm tra trên viewport 360px, 768px, 1088px (hiện tại), 1440px.

## Ngoài phạm vi
- Không đổi copy của CTA hoặc heading.
- Không đổi màu nền / gradient giữa 2 section (đã có gradient white→green).
- Không thêm dependency mới (Framer Motion etc.) — dùng CSS transform thuần.