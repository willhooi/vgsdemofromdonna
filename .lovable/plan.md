## Mục tiêu

Chỉnh sửa trang `/market-insights`:
1. **Hero section**: rút gọn text — tiêu đề "Market Insights" và mô tả phía dưới ít chữ hơn (tách biệt, không liên quan đến list bài viết).
2. **Featured section**: thay vì 1 bài viết lớn, hiển thị **2 bài viết nổi bật** xếp cạnh nhau theo dạng **2 cột bằng nhau**.

## Chi tiết kỹ thuật

### 1. Hero text rút gọn
- Trong `src/pages/MarketInsights.tsx`, phần hero (dòng 74–102):
  - Đổi `h1` và `p` mô tả thành nội dung ngắn gọn hơn (tối đa 1 dòng tiêu đề + 1 dòng mô tả).
  - Giữ lại breadcrumb "Back to home".

### 2. 2 bài viết nổi bật (2 cột)
- Thay đổi logic `featuredArticles()` hoặc sử dụng trực tiếp `featured[0]` và `featured[1]`.
- Layout: thay thế card lớn 1 bài (grid 12 cols, 7+5) bằng **grid 2 cột** (`md:grid-cols-2`), mỗi cột là 1 card bài viết.
- Mỗi card bao gồm:
  - Ảnh bìa (aspect-ratio ~16/10)
  - Badge category
  - Tiêu đề bài viết (giữ nguyên, không rút gọn — vì user chỉ muốn rút gọn text hero)
  - Excerpt rút gọn (2–3 dòng)
  - Meta: tác giả, ngày, thời gian đọc
  - Hover: border primary + shadow
- Đảm bảo responsive: trên mobile xếp chồng (1 cột), trên tablet/desktop-2 cột.

### 3. Data layer
- Trong `src/content/insights/articles.ts`:
  - Kiểm tra `featuredArticles()` trả về ít nhất 2 bài có `featured: true`.
  - Nếu chỉ có 1 bài `featured`, bổ sung thêm 1 bài khác để đủ 2.

### 4. Các phần còn lại
- Giữ nguyên category chips + grid các bài viết còn lại.
- Giữ nguyên newsletter CTA và footer.

## Files cần chỉnh sửa
- `src/pages/MarketInsights.tsx`
- `src/content/insights/articles.ts` (nếu cần bổ sung featured article)