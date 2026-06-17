## Mục tiêu
Thay component `AboutCertificatesNew.tsx` hiện tại (4 card phức tạp) bằng layout đơn giản giống ảnh tham chiếu: 2 khu vực logo, mỗi logo là 1 entry trong mảng — thêm/bớt chỉ bằng cách sửa array.

## Cấu trúc

**Section 1 — "OUR CERTIFICATIONS ARE ISSUED BY"**
Mặc định 4 ô:
- VNTA (Vietnam Telecommunications Authority)
- BSI — ISO/IEC 27001
- VNCERT
- (ô thứ 4 — placeholder, bạn upload logo + đặt tên sau)

**Section 2 — "VIETGUYS IS CURRENTLY AN ACTIVE MEMBER OF"**
Mặc định 3 ô:
- MMA — Mobile Marketing Association
- VECOM — Vietnam E-Commerce Association
- VDCA — Vietnam Digital Communications Association

## Thiết kế
- Nền `bg-background` (sáng), giữ tone xanh để fit concept About.
- Tiêu đề: chữ in hoa, letter-spacing rộng, có 2 line ngang 2 bên (giống ảnh).
- Grid responsive: 2 cột (mobile) → 4 cột (cert) / 3 cột (member) (desktop).
- Mỗi ô: khung trắng bo nhẹ, padding, logo `object-contain` căn giữa; nếu chưa có logo thì fallback hiển thị chữ viết tắt (MMA/VECOM/VDCA…) + dòng mô tả nhỏ phía dưới (như mock).
- Hover: nhẹ nhàng (translate-y, shadow xanh mờ).

## Cách thêm/bớt logo
Trong file, mỗi section có 1 mảng đơn giản:
```ts
const certifications = [
  { name: "VNTA", caption: "Vietnam Telecom Authority", image: "" },
  { name: "BSI",  caption: "ISO/IEC 27001",            image: "" },
  ...
];
```
Thêm/bớt: thêm/xóa 1 dòng. Khi upload logo, gán đường dẫn vào `image` — fallback chữ tự động ẩn.

## File chịu ảnh hưởng
- Viết lại `src/components/site/about/AboutCertificatesNew.tsx`.
- Không đổi vị trí mount trong `pages/About.tsx`.

## Sau khi approve
Mình tạo layout với placeholder. Khi bạn upload logo, mình gắn vào mảng và xóa fallback chữ.