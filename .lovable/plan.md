## Mục tiêu

Thay 20 logo brand đang load qua Clearbit API (`https://logo.clearbit.com/...`) bằng 10 file PNG thực tế user vừa upload. Lưu logo vào `src/assets/brands/` để được Vite bundle/optimize đúng cách (đồng nhất với pattern đang dùng cho cert logos ở `src/assets/certs/`).

## Files affected

**Tạo mới** (10 file, copy từ user-uploads):
- `src/assets/brands/sony.png`
- `src/assets/brands/tokyo-deli.png`
- `src/assets/brands/traveloka.png`
- `src/assets/brands/uob.png`
- `src/assets/brands/vascara.png`
- `src/assets/brands/vietnam-airlines.png`
- `src/assets/brands/vinfast.png`
- `src/assets/brands/vnvc.png`
- `src/assets/brands/vpbank.png`
- `src/assets/brands/yola.png`

**Sửa**: `src/components/site/TrustBand.tsx`
- Thêm 10 import ES6 cho logo PNG.
- Đổi type `Brand` từ `{ name; domain }` sang `{ name; logo }` (import path).
- Gộp lại `BRANDS_ROW_1` (5 logo) + `BRANDS_ROW_2` (5 logo) — chia đều theo nhóm hợp lý:
  - Row 1 (Finance + Tech + Edu): VPBank · UOB · VinFast · SONY · YOLA
  - Row 2 (Travel + Retail + Health): Vietnam Airlines · Traveloka · Tokyo Deli · Vascara · VNVC
- Component `BrandLogo`: bỏ logic `failed`/`onError` (không cần fallback text vì asset đã có sẵn), thay `<img src={`https://logo.clearbit.com/...`} />` thành `<img src={brand.logo} />`.
- Marquee logic (duplicate items, animation) giữ nguyên.

## Out of scope

- Không thay đổi cert cards, stats, hay heading Accrete.
- Không đổi animation speed/direction của marquee.
- Không xoá Clearbit fallback ở chỗ khác (nếu có) — chỉ refactor trong TrustBand.

## Lưu ý

- Logo có aspect ratio khác nhau (Traveloka rất ngang, SONY/Tokyo Deli vuông). Giữ `max-h-10 w-auto object-contain` để tự co cho vừa khung 160×64px.
- Một vài logo nền trắng full (UOB, Vinfast, VNVC) — vẫn fit OK vào card nền trắng hiện tại.
