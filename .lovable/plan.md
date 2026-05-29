
# About Us — Editorial Story

Tái cấu trúc `src/pages/About.tsx` thành một trang kể chuyện theo chương (chapter-based), tập trung vào giọng văn biên tập, typography lớn và nhịp đọc chậm.

## Cấu trúc trang (theo thứ tự)

1. **Editorial Hero** (mới — `AboutHero.tsx`)
   - Eyebrow "Chapter 00 — Since 2007"
   - Headline typographic cỡ lớn: "Mười chín năm, một tín hiệu."
   - Dòng dẫn 2–3 câu, ảnh nền mờ / watermark `VWatermark`
   - Không CTA — giữ tinh thần biên tập

2. **Chapter 01 — The Beginning (2007)** (mới — `AboutChapter.tsx` dùng lại được)
   - Layout 2 cột: số chương lớn bên trái, nội dung bên phải
   - Câu chuyện 25m² đầu tiên ở TP.HCM, SMS gateway đầu tiên sáng đèn
   - 1 ảnh / illustration đi kèm

3. **Chapter 02 — Growing With Our Customers**
   - Cùng component `AboutChapter`
   - Kể về Samsung E-warranty (2008), LG (2017), top SMS e-commerce (2018), 5.000+ brands (2021)
   - Trích 1 con số nổi bật như pull-quote

4. **Chapter 03 — The Vietnam–Japan Bridge**
   - Câu chuyện sáp nhập Accrete Inc. (2022), governance chuẩn Tokyo
   - Tái sử dụng nội dung từ `JapanBridge` / `AccreteBacking` nhưng viết lại theo giọng kể

5. **`AboutMilestones`** (giữ nguyên — timeline đầy đủ làm "phụ lục" cho 3 chương)

6. **`Team`** (giữ nguyên — "The people behind VietGuys")

7. **`AboutStoryPillars`** (giữ nguyên — giá trị cốt lõi)

8. **`CTASection`** (giữ nguyên — form liên hệ ở cuối)

## Component mới cần tạo

- `src/components/site/AboutHero.tsx` — hero typographic editorial
- `src/components/site/AboutChapter.tsx` — component chương tái sử dụng, props: `chapterNumber`, `eyebrow`, `title`, `body` (ReactNode), `pullQuote?`, `image?`, `reverse?`

## Component loại khỏi About hiện tại

Sẽ xem `src/pages/About.tsx` hiện tại khi vào build mode để quyết định bỏ section nào trùng lặp (ví dụ `HumanStory` nếu có), tránh kể 2 lần.

## Design notes

- Dùng `heading-display` / `heading-section` và `chapter-eyebrow` đã có sẵn trong `index.css`
- Số chương cỡ rất lớn (text-7xl/8xl), opacity thấp, làm điểm neo thị giác
- Khoảng trắng rộng giữa các chương (py-24 → py-32)
- Animation `animate-fade-up` nhẹ khi scroll, không hiệu ứng nặng
- Tuân thủ design tokens HSL, không hardcode màu

## Sau khi user duyệt plan

Vào build mode sẽ: đọc `About.tsx` hiện tại + `HumanStory.tsx` + `JapanBridge.tsx` để viết nội dung chương cho khớp, tạo 2 component mới, lắp ráp lại `About.tsx`.
