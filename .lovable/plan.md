# Điều chỉnh vị trí & độ lan tỏa cụm Plexus

Chỉnh `PlexusBackground` trong `src/components/site/ServicesGrid.tsx` cho khớp ảnh mẫu (cụm trái và cụm phải lớn full chiều cao, . Không đổi base gradient/arc/blob.

## Thay đổi cluster

**Cụm trái và cụm phải (lớn, dày, full-height — đi từ top sát mép tới đáy)**

- count: 42 → **58 node**
- vùng: x `[-40, 560]` → `x [-60, 540]`, y `[0, 780]` → **y `[-20, 900]**`
- ngưỡng kết nối: 150 → **170** (mạng lưới dày hơn, nhiều cạnh chéo dài như ảnh)

&nbsp;

## Cân bằng visual

- Tỷ lệ node "lớn có quầng" (kind=1) giữ ~18%, nhưng vì cụm trái nhiều node hơn nên tự nhiên sẽ có nhiều quầng bên trái — đúng như ảnh.
- Giữ nguyên opacity/màu/stroke đã chỉnh ở bước trước.
- Giữ overlay fade trắng top/bottom và side vignette mỏng hiện tại.

## Kỹ thuật

- Sửa duy nhất 2 dòng `buildCluster(...)` và 1 hằng `threshold` (tách thành 2 giá trị cho 2 cụm) trong `PlexusBackground`.
- Không tạo file mới, không đụng base gradient.

## Kết quả

Cụm trái phủ kín dải trái từ trên xuống dưới (giống ảnh), cụm phải gọn hơn và lệch xuống góc dưới-phải, vùng giữa vẫn thoáng.