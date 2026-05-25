# Dấu ấn VietGuys — Hệ thống "VG Signature"

## Ý tưởng cốt lõi

Icon VG (V xanh + G cam, hai mảng tam giác chéo) đã là DNA hình học của VietGuys. Thay vì chỉ đặt logo ở header/footer, ta **rút gọn nó thành 1 ngôn ngữ thị giác** dùng lại ở mọi tầng giao diện: shape, đường cắt, gradient, motion, micro-icon. Mục tiêu: người dùng lướt bất kỳ section nào cũng "cảm" thấy VG mà không cần thấy logo.

## 5 lớp ứng dụng (từ tinh tế → đậm)

### 1. Lớp Shape — V-notch & V-chamfer (đã có ở Core service tiles)

Mở rộng `clip-path` chữ V ra các điểm chạm:

- **Section divider**: thay `<hr>` bằng đường gãy chữ V mảnh (đã có `VDivider`) — đặt giữa Hero ↔ TrustBand, Solutions ↔ Industries, Industries ↔ FAQ.
- **Card corners**: tất cả primary card (Outcome, Case Study, Stat) bo góc trên-phải kiểu chamfer 12px — giống đỉnh V cắt vát.
- **Button shape**: primary CTA có mép phải vát chéo 6° (rất nhẹ), gợi đường chéo của G.
- **Image masks**: ảnh hero/case study được mask hình thang lệch (V-cut bottom) thay vì hình chữ nhật.

### 2. Lớp Color — Dual-tone V/L gradient

Chuẩn hoá `--gradient-brand` thành 1 công thức duy nhất: green → orange theo góc 135° (đúng góc nghiêng của V→G.

- Headline accent: nửa sau của tiêu đề mỗi section dùng `bg-clip-text` với gradient này (đã có ở Industries).
- Stat numbers: số liệu lớn dùng gradient.
- Hover state: viền card chuyển từ green → orange khi hover (lerp qua `--brand-cycle`).
- Focus ring: `outline` 2 màu (top-left green, bottom-right orange).

### 3. Lớp Watermark — VMark nền

Dùng `VWatermark` (đã có) như texture nền với opacity 3-5%:

- Đặt 1 watermark cực lớn (40-60vw) lệch góc ở mỗi section dài — không section nào trùng vị trí (xen kẽ trái/phải/cắt mép).
- Pattern lặp: tạo SVG pattern các V nhỏ rải đều cho khu vực Footer / CTA bottom.

### 4. Lớp Motion — "V-reveal" & orbit dot

- **V-reveal**: mọi `animate-fade-up` được nâng cấp thành 2 mảnh tam giác (green-left, orange-right) trượt vào từ 2 phía rồi khớp lại — chỉ dùng cho headline section, không spam.
- **Orbit dot** (đã có ở chip Accrete): tái dùng làm bullet list marker — chấm nhỏ chạy đổi màu cycle ở các list quan trọng (Why VietGuys, Outcome bullets).
- **Loading/skeleton**: thanh loading dùng 2 mảnh V trượt thay vì shimmer trắng.

### 5. Lớp Micro — Iconography

- **Bullet point**: thay `•` mặc định bằng mini-V svg (8px) — green cho positive, orange cho highlight.
- **Link arrow**: `→` thay bằng mũi tên hình thang lệch giống chân chữ L.
- **Cursor accent** (optional): trên nút CTA chính, cursor hover hiển thị mini V theo con trỏ.

## Bản đồ áp dụng theo section

```text
Hero            → Lớp 2 (gradient headline ✓) + Lớp 4 (V-reveal mới)
AccreteChip     → Lớp 4 (orbit dot ✓)
TrustBand       → Lớp 1 (V-divider trên) + Lớp 3 (watermark lệch trái)
Solutions       → Lớp 1 (V-notch core ✓) + Lớp 2 (gradient 99%) + Lớp 5 (bullet V)
Industries      → Lớp 1 (card chamfer) + Lớp 2 (headline ✓) + Lớp 3 (watermark phải)
WhyVietGuys     → Lớp 5 (bullet V) + Lớp 4 (orbit dot trên check icon)
CTA Bottom      → Lớp 3 (pattern V lặp) + Lớp 1 (button vát)
Footer          → Lớp 3 (pattern V mờ) + Lớp 5 (link arrow L)
```

## Token hoá trong design system

Thêm vào `src/index.css` & `tailwind.config.ts`:

```css
--vg-chamfer: 12px;                    /* bán kính vát V-corner */
--vg-notch: 14px;                       /* độ sâu V-notch */
--vg-angle: 135deg;                     /* góc nghiêng signature */
--gradient-vg: linear-gradient(135deg, hsl(var(--primary)) 0%, hsl(var(--accent)) 100%);
--shadow-vg: 0 10px 30px -10px hsl(var(--primary)/.25), 0 10px 30px -10px hsl(var(--accent)/.2);
```

Utility classes mới: `.vg-chamfer-card`, `.vg-notch-right`, `.vg-bullet`, `.vg-divider`, `.vg-text-gradient`.

## Nguyên tắc kiềm chế

1. **Một section — tối đa 2 lớp signature**. Không dồn cả 5 lớp vào 1 chỗ → loãng.
2. **Watermark luôn ≤ 6% opacity** — texture, không content.
3. **Motion chỉ trigger 1 lần** khi section vào viewport, không loop (trừ orbit dot ở chip).
4. **Không đổi shape của body text, form input, navigation** — giữ đọc được, signature chỉ dành cho element trang trí/CTA/card.

## Triển khai theo giai đoạn

- **Phase 1 (nền móng)**: token CSS + utility classes + `VDivider` rải khắp section.
- **Phase 2 (shape)**: chamfer card + button vát + V-notch cho tất cả primary CTA.
- **Phase 3 (color/motion)**: chuẩn hoá gradient headline + bullet V + orbit dot cho list.
- **Phase 4 (polish)**: watermark/pattern nền + V-reveal headline + cursor accent.

Mỗi phase độc lập, có thể dừng/đảo thứ tự tuỳ phản hồi.

## Phạm vi file dự kiến

- `src/index.css` — token + utility classes
- `tailwind.config.ts` — gradient + shadow tokens
- `src/components/brand/VWatermark.tsx` — thêm `VPattern`, `VBullet`, `LArrow`
- Các section components — áp class mới, không refactor logic

Sau khi bạn duyệt, tôi sẽ bắt đầu từ Phase nào bạn muốn (mặc định Phase 1).