# About Us — Human-First Direction

Tái cấu trúc `src/pages/About.tsx` theo hướng đặt con người làm trung tâm: nhân sự, văn hoá, và cộng đồng khách hàng là nhân vật chính; số liệu & công nghệ đóng vai trò hỗ trợ.

## Cấu trúc trang mới (theo thứ tự)

1. **Hero — Panorama con người**
   - Eyebrow: "About VietGuys"
   - Headline lớn: "19 năm — vẫn là những con người gửi đi từng tin nhắn."
   - Sub: 1-2 câu về việc công nghệ chỉ là phương tiện, con người mới là cam kết.
   - Background: ảnh team panorama (dùng `founder.jpg`/`support-lead.jpg`/`engineer.jpg` ghép hoặc 1 ảnh rộng) + `VWatermark` mờ.
   - Không có KPI số to ở hero — giữ cảm giác "ấm".

2. **Manifesto — "Why we exist"**
   - 1 đoạn văn lớn, typographic, italic accent.
   - Nội dung: lý do VietGuys tồn tại — kết nối thương hiệu với con người thật, không phải "users".

3. **3 Pillars — People · Quality · Community**
   - Tái dùng `AboutStoryPillars` (đã có) hoặc viết lại 3 card:
     - **People-first** — đội ngũ 24/7, không bot trả lời khách.
     - **Quality obsessed** — 99.95% uptime, ISO 27001, từng tin nhắn được log.
     - **Community-rooted** — 17+ năm cùng SMB Việt Nam, sponsor cộng đồng MarTech.

4. **Voices from the team** (mới — tái dùng `HumanStory`)
   - Giữ nguyên `HumanStory.tsx` — 3 nhân vật với quote cá nhân.

5. **Leadership grid** (tái dùng `Team.tsx`)
   - 4 thành viên ban lãnh đạo.

6. **Life at VietGuys — Gallery**
   - Mới: 6-8 ảnh dạng masonry/asymmetric (văn phòng, sự kiện, team building, khách hàng workshop).
   - Dùng placeholder Unsplash nếu chưa có asset.

7. **Our customers are our story** (tái dùng `VietGuysCaseStudies` hoặc rút gọn)
   - 2-3 quote ngắn từ khách hàng dài hạn để khẳng định "human-first" được khách hàng cảm nhận.

8. **Trust strip nhẹ** (tái dùng `LogoMarquee`)
   - Cert + đối tác — đặt cuối, không phô trương.

9. **Join us / CTA** (tái dùng `CTASection` hiện tại)
   - Headline đổi: "Muốn cùng chúng tôi gửi đi những tin nhắn tiếp theo?"
   - Form liên hệ giữ nguyên.

## Components

**Tái dùng**: `AboutStoryPillars`, `HumanStory`, `Team`, `VietGuysCaseStudies`, `LogoMarquee`, `CTASection`, `VWatermark`.

**Tạo mới** (3 component nhỏ trong `src/components/site/about/`):
- `AboutHumanHero.tsx` — hero panorama + headline + watermark.
- `AboutManifesto.tsx` — section typographic 1 đoạn lớn.
- `AboutLifeGallery.tsx` — masonry 6-8 ảnh + caption ngắn.

## Files thay đổi

```text
src/pages/About.tsx                              (rewrite — compose sections)
src/components/site/about/AboutHumanHero.tsx     (new)
src/components/site/about/AboutManifesto.tsx     (new)
src/components/site/about/AboutLifeGallery.tsx   (new)
```

## Design notes

- Giữ design tokens hiện có (`--accent-deep`, `--primary-soft`, `--accent-soft`, `font-display`).
- Tông ấm, nhiều ảnh người thật, ít số liệu to.
- Typography: heading lớn dùng `font-display` italic cho accent words.
- Spacing rộng (`py-24 md:py-32`) giữ nhịp giống `HumanStory` để đồng bộ.

Bấm Implement để mình bắt tay làm.
