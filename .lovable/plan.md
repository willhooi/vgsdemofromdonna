# Signature V-notch cho thẻ Core khi expand

## Ý tưởng

Khi hover vào 4 thẻ Core (SMS Brandname, Zalo, OTT Multi Service, Mobile Top-up), pill bo tròn sẽ "morph" thành dáng có đuôi nhọn chữ V ở mép phải — vết cắt xéo mirror lại cạnh chéo của logo VG (V xanh + L cam). Hiệu ứng cho cảm giác như mũi tên/lưỡi dao đặc trưng, tách 4 dịch vụ chủ lực ra khỏi các pill phụ trơn tru.

```text
Trạng thái nghỉ (pill core):        Trạng thái expand (V-notch):
┌──────────────────┐                ┌─────────────────────────────────╲
│ ◆  SMS Brandname │      hover →   │ ◆  SMS Brandname │ description    ╲
└──────────────────┘                └─────────────────────────────────╱
                                     (mép phải cắt chữ V vào trong)
```

## Cơ chế kỹ thuật

- Dùng `clip-path: polygon(...)` trên thẻ core với 2 trạng thái:
  - **Nghỉ**: polygon hình pill (8 điểm bo góc) — gần như tròn.
  - **Hover**: polygon cùng cạnh trái pill bo, cạnh phải biến thành ∨-notch (3 điểm: trên-phải, giữa-thụt-vào, dưới-phải).
- Transition `clip-path` 500ms cubic-bezier(0.22, 1, 0.36, 1) — cùng easing với max-width hiện có để 2 chuyển động đồng pha.
- Padding-right được tăng thêm khi hover để text không bị notch ăn vào.
- Thêm 1 viền sáng mảnh (`::after` hoặc inset shadow) chạy theo cạnh chéo của notch — màu primary, làm điểm nhấn signature.
- Thẻ phụ (Viber, Voice, Email, Smart Warranty) giữ nguyên pill tròn hiện tại — không clip-path, không thay đổi.

## Phạm vi sửa

Chỉ động vào `src/components/site/Solutions.tsx` — `ServiceTile`:
1. Tách style theo `s.featured`: core dùng class mới có `clip-path` + padding-right động.
2. Thêm CSS inline-style cho 2 polygon (nghỉ / hover) bằng custom property để Tailwind không cần keyframes.
3. Tinh chỉnh `max-width` của description trong core (rộng hơn ~40px) để bù khoảng notch.

## Fallback & QA

- Trình duyệt cũ không hỗ trợ `clip-path` animation → nhận pill tĩnh không notch (graceful degrade).
- Test 3 viewport: mobile (375), tablet (768), desktop (1280) — đảm bảo notch không lệch khi pill xuống dòng hoặc bị chèn.
- Reduce-motion: tắt transition của clip-path, giữ nguyên dáng pill.

Không đụng tới layout flex-wrap, không đụng tới DeliveryRateCard, CDPSupportStrip hay phần stage trái.