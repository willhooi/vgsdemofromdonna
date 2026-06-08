## Mục tiêu
Tái bố cục `src/components/site/Solutions.tsx` theo flow dọc mới, đơn giản hoá nội dung.

## Bố cục mới (top → bottom)

```text
┌──────────────────────────────────────────────────────────┐
│  H2: Every conversation, a moment of growth.             │  ← bỏ eyebrow "Comprehensive Solution"
│  short description (giữ nguyên text hiện tại)            │
├──────────────────────────────────────────────────────────┤
│  Strategic partnership with [ByteTech] [CNV] [CX Genie]  │  ← tách ra khỏi CDP card, đặt center
├──────────────────────────────────────────────────────────┤
│  AI CUSTOMER ENGAGEMENT PLATFORM (label trên cùng)        │
│  ┌─────────────────────────────────┬──────────────────┐  │
│  │  INPUT  →  AI HUB  →  OUTPUT    │   Girl + popups  │  │
│  │  (animation flow 3 cột)         │  (OutcomeStage)  │  │
│  └─────────────────────────────────┴──────────────────┘  │
└──────────────────────────────────────────────────────────┘
```

## Thay đổi cụ thể

1. **Header block (lines 74–85)**: xoá `<p>Comprehensive Solution</p>`. Giữ H2 + description.

2. **Partnership strip mới**: tách logo strip ra khỏi `CDPSupportStrip`, render center ngay dưới description. Layout: "Strategic partnership with" + 3 logos inline, căn giữa, spacing thoáng.

3. **Xoá hoàn toàn**:
   - `DeliveryRateCard` (không còn dùng, lines 241–276)
   - 99% Delivery Rate badge bên trong `CDPSupportStrip` (lines 552–579)
   - `CDP_BULLETS` + `<ul>` (lines 419–423, 537–550)
   - Eyebrow "CDP Solution" (lines 504–506) — thay bằng label mới "AI Customer Engagement Platform" đặt trên animation

4. **Animation flow mới** (mở rộng `CDPWave`):
   - Cột trái — **INPUT** badges: ERP, POS, Loyalty App, Ecom Website, Social Channel, MKT Campaign (dùng style `cdp-src` hiện có, đổi tiêu đề "DATA SOURCES" → "INPUT")
   - Cột giữa — **AI HUB**: giữ orb hiện tại, đổi label "CDP / PLATFORM" → "AI HUB"
   - Cột phải — **OUTPUT** badges mới: SMS, Zalo, Email, Voice, Business Report, Retargeting (panel mirror cột trái, particles xanh chạy từ orb sang output, dùng lại keyframes `cdp-src-float`, `cdp-badge-float`)
   - Thêm 2 path SVG connector cho luồng OUTPUT (orb → output panel), particles màu xanh & cam giống connector input
   - Label "AI CUSTOMER ENGAGEMENT PLATFORM" trên cùng card (thay "CDP Solution")

5. **Layout 2 cột mới** cho phần dưới partnership:
   - Grid `lg:grid-cols-[1fr_minmax(0,38%)]`
   - Trái: card chứa animation flow (INPUT→AI HUB→OUTPUT)
   - Phải: `OutcomeStage` (girl + popups) — giữ nguyên component
   - Đảo lại vị trí so với hiện tại (trước đây girl bên trái, CDP bên phải)

6. **Cleanup**: xoá import `useCountUp` ở `CDPSupportStrip` nếu không còn dùng, xoá `Zap` import nếu chỉ còn dùng cho 99% badge.

## Files
- `src/components/site/Solutions.tsx` — toàn bộ thay đổi ở 1 file
- Không tạo file mới, không đụng routes/data

## Responsive
- Mobile: stack dọc — animation flow chuyển column (input → hub → output stacked), girl popup nằm dưới
- Tablet: giữ 2 cột nhưng giảm output badges xuống 4
- Reuse media queries có sẵn trong `<style>` của `CDPWave`
