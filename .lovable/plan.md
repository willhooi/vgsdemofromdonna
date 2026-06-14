## Vấn đề

Mockup HTML dùng kỹ thuật: card stats có `margin-top: -86px` để **đè lên đáy banner ảnh**, tạo hiệu ứng floating card chồng lên ảnh hero. Section bên dưới chỉ cần đủ chỗ cho phần card nhô ra.

Hiện tại trong `AboutHeroNew.tsx`:
- Card dùng `absolute -bottom-[40px] md:-bottom-[30px]` → card nằm gần như tách rời ảnh, không overlap.
- Section padding `pb-72 md:pb-80` → tạo khoảng trắng lớn dư thừa bên dưới.
- Kết quả: stats card "rơi" xuống vùng trắng thay vì "nổi" lên trên ảnh banner.

## Thay đổi (chỉ trong `src/components/site/about/AboutHeroNew.tsx`)

1. **Card position** — đổi từ tách rời sang overlap đúng mockup:
   - Mobile: `-bottom-[80px]` (overlap ~80px vào đáy ảnh)
   - Desktop: `md:-bottom-[90px]` (tương đương `-86px` của mockup)

2. **Section bottom padding** — giảm để chỉ chứa phần card nhô ra dưới ảnh (~nửa chiều cao card, ~120-140px):
   - Từ `pb-72 md:pb-80` → `pb-40 md:pb-44`

3. Giữ nguyên mọi thứ khác: ảnh banner, particle field, nội dung text, layout 4 cột, count-up animation, accent bar màu cam.

## Kết quả mong đợi

- Card trắng đè lên ~1/2 chiều cao card vào đáy banner hero (giống mockup).
- 4 ô số liệu (19+, 5,000+, 5M+, 15+) hiển thị đầy đủ, không bị cắt.
- Khoảng cách xuống section "Our Story" gọn lại, không còn vùng trắng thừa.
