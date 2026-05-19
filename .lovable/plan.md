## Vấn đề

`AccreteFlightChip` dùng `sessionStorage` để chỉ chạy animation 1 lần/session. Sau khi bạn test lần đầu (hoặc sau hot-reload), flag `vg.accrete.morph.played` đã được set → mỗi lần reload/scroll, chip mount thẳng vào phase `landed` và bỏ qua keyframe.

## Cách fix

### File: `src/components/site/AccreteFlightChip.tsx`

1. **Bỏ `sessionStorage` gate**, hoặc đổi sang re-trigger mỗi lần scroll từ top:
   - Mount → luôn phase `idle`.
   - Lắng nghe scroll: khi `window.scrollY > 24` lần đầu → chuyển sang `morphing`.
   - Animation chạy → `animationend` chuyển sang `landed` (giữ style đã morph).
   - Nếu user scroll về top (`scrollY < 8`) → reset về `idle` để có thể replay khi scroll xuống lại (tuỳ chọn, nice-to-have).

2. **Đăng ký scroll listener ngay khi mount**, không phụ thuộc `[data-accrete-target]` (đã làm ở lần trước, giữ nguyên).

3. **Force trigger nếu trang load ở giữa**: nếu `window.scrollY > 24` ngay tại mount → trigger luôn (handle case user reload khi đã scroll).

### File: cleanup
- Xoá khai báo `SESSION_KEY` không còn dùng.

## Verification

1. Reload trang ở đầu page → chip ở trạng thái idle với metallic + chevron pulse.
2. Scroll xuống vài chục px → thấy chip morph (scale 1.08, border tan, bg tan, weight tăng, letter-spacing tighten, dịch xuống 6px).
3. Reload lại → animation vẫn chạy được (không bị `sessionStorage` chặn).
4. Scroll lên top → chip reset; scroll xuống lại → morph lại.

## Out of scope
- Không đổi keyframe CSS (`accrete-chip-morph`) — đã đúng.
- Không đổi TrustBand.
