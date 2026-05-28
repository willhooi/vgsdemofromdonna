# Bổ sung Plexus + gradient fade mượt cho nền Services

## 1. Lớp Plexus (SVG)
Thêm component nội bộ `PlexusBackground` trong `ServicesGrid.tsx` — SVG absolute full-section, `pointer-events:none`, `z-index:0`.

- Sinh ~55 node ngẫu nhiên (seed cố định để render ổn định, không nhấp nháy) chia thành 2 cụm:
  - Cụm trái-trên: ~28 node trong vùng (0–40% width, 0–70% height)
  - Cụm phải-dưới: ~27 node trong vùng (55–100% width, 25–95% height)
  - Giữa để trống (giống ảnh mẫu).
- Nối cạnh giữa các node cùng cụm khi khoảng cách < ngưỡng (~140px), `stroke="#39B44A"`, `stroke-width:0.7`, `stroke-opacity:0.35`.
- Node: 3 loại
  - dot nhỏ r=2, fill `#39B44A`, opacity 0.85
  - dot vừa r=3.5 + vòng tròn rỗng r=6 stroke 1px (giống "node có quầng" trong ảnh)
  - dot mờ r=2, opacity 0.35
- Animation rất nhẹ: vài node lớn pulse opacity 3–4s (CSS keyframe `signal-pulse` đã có). Không animate toàn bộ để tránh nặng.
- Mobile: giảm còn ~30 node, ẩn vòng quầng.

## 2. Gradient fade mượt trên/dưới
Thay base gradient hiện tại để 2 mép trắng hoàn toàn, ở giữa mới chuyển sang mint:

```
background: linear-gradient(180deg,
  #FFFFFF 0%,
  #FFFFFF 8%,
  #F4FBF5 25%,
  #E8F7EA 50%,
  #F4FBF5 75%,
  #FFFFFF 92%,
  #FFFFFF 100%);
```

Thêm 2 overlay div phụ để "loang" mượt hơn, phủ trên cả lớp plexus:
- Top fade: absolute top:0, height ~180px, `linear-gradient(180deg, #FFFFFF 0%, rgba(255,255,255,0.85) 40%, rgba(255,255,255,0) 100%)`.
- Bottom fade: absolute bottom:0, height ~200px, `linear-gradient(0deg, #FFFFFF 0%, rgba(255,255,255,0.85) 40%, rgba(255,255,255,0) 100%)`.

Hai overlay này đặt `z-index:1`, plexus `z-index:0`, cards giữ `z-index:2`. Nhờ vậy node plexus sát mép sẽ fade dần vào trắng (giống ảnh).

## 3. Thứ tự layer trong section
```
z-0: base gradient + arc SVG mint + 2 blob (giữ nguyên)
z-0: PlexusBackground (mới)
z-1: top fade + bottom fade (mới)  ← che cả arc lẫn plexus ở 2 mép
z-1: vignette trái/phải (giữ)
z-2: container grid + 9 thẻ
```

## 4. Chi tiết kỹ thuật

- Node positions sinh bằng hàm pseudo-random dùng seed cố định trong `useMemo`, không phụ thuộc render → không nhảy khi re-render.
- SVG dùng `viewBox="0 0 1440 900"` và `preserveAspectRatio="xMidYMid slice"` để stretch theo section.
- Tất cả màu plexus dùng `#39B44A` (brand green) với các mức opacity 0.35 / 0.5 / 0.85.
- Không tạo file mới — toàn bộ thêm vào `src/components/site/ServicesGrid.tsx`.
- Không đổi nội dung 9 thẻ, không đổi logic.

## Kết quả

Nền section giống ảnh đính kèm: 2 cụm mạng lưới plexus xanh ở góc trên-trái và dưới-phải, vùng giữa thoáng, mép trên & dưới fade trắng mượt nối liền các section khác, 9 thẻ kính vẫn nổi rõ ở lớp trên cùng.
