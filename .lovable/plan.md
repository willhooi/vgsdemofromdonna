## Mục tiêu

Chuyển section "Solutions" từ kiến trúc 3 cột thiên về kỹ thuật (Inputs → CDP → Channels) sang **outcome-first storytelling** đúng tinh thần hero: *"where customer conversations become business growth"*.

- Nhân vật trung tâm: end-user vui mừng mua sắm + nhận thông báo (ảnh minh hoạ user upload).
- Các dịch vụ VietGuys = những "outcome moments" xảy ra quanh khách hàng.
- PangoCDP × ByteTech = bổ trợ (supporting strip ở dưới), không còn là trục chính.

## Layout mới (desktop)

```text
┌──────────────────────────────────────────────────────────────────────┐
│ EYEBROW: The Outcome                                                 │
│ H2: Every conversation, a moment of growth.                          │
│ Sub: SMS, Zalo, Viber, Email, OTP — when they land right,            │
│      customers buy, return, and recommend.                           │
└──────────────────────────────────────────────────────────────────────┘

┌─────────────────────────────┐   ┌────────────────────────────────────┐
│  STAGE (left, 0.95fr)       │   │  OUTCOME RAIL (right, 1.05fr)      │
│                             │   │                                    │
│   [Happy shopper photo      │   │  Outcome cards (2×2 grid):         │
│    cut-out, blue blob bg]   │   │  ┌──────────┐ ┌──────────┐         │
│   Floating pop-ups:         │   │  │ 5★ Review│ │ Order ✓  │         │
│   · ★★★★★ review            │   │  │ +18% NPS │ │ -42% calls│        │
│   · Trạng thái đơn hàng     │   │  └──────────┘ └──────────┘         │
│   · Mã OTP 371235           │   │  ┌──────────┐ ┌──────────┐         │
│                             │   │  │ OTP <2s  │ │ Reward   │         │
│   Channel chips orbit photo │   │  │ 99.95%   │ │ +27% LTV │         │
│   (SMS·Zalo·Viber·Email·OTP)│   │  └──────────┘ └──────────┘         │
│                             │   │                                    │
│                             │   │  → "See all 9 services"            │
└─────────────────────────────┘   └────────────────────────────────────┘

┌──────────────────────────────────────────────────────────────────────┐
│ SUPPORT STRIP — Powered by PangoCDP × ByteTech                       │
│ [bytetech logo]  Unified profiles · Real-time segments · AI next-best│
│ "Strategic CDP partnership →"                                        │
└──────────────────────────────────────────────────────────────────────┘

┌──────────────────────────────────────────────────────────────────────┐
│ METRICS STRIP (giữ nguyên): 5M/day · 76 clients · 99.95% · 9 channels│
└──────────────────────────────────────────────────────────────────────┘
```

## Breakdown từng khối

**1. Header** — đổi positioning từ "platform diagram" sang "outcome":
- Eyebrow: `The Outcome`
- H2: `Every conversation, a moment of growth.`
- Sub: nối thẳng vào key message hero.

**2. Stage (cột trái)** — sân khấu cảm xúc
- Ảnh cô gái vui mừng cầm điện thoại (re-generate hoặc dùng ảnh user upload làm reference) đặt trên blob xanh-cam mềm.
- 3 pop-up nổi với typography rõ ràng tiếng Việt:
  - `★★★★★ "Giao hàng siêu nhanh!"`
  - `Trạng thái đơn hàng · Đã xác nhận`
  - `Mã xác thực: 371235`
- 5 channel chip nhỏ (SMS · Zalo · Viber · Email · OTP) lượn quanh theo orbit nhẹ — mỗi chip có pulse dot màu thương hiệu, hover hiện tooltip "Powered by VietGuys".

**3. Outcome rail (cột phải)** — 4 outcome card lớn, mỗi card = 1 service kể bằng kết quả kinh doanh, không phải tính năng:
| Card | Service | Outcome metric |
|------|---------|----------------|
| 5★ Review | Zalo ZNS post-purchase | +18% NPS |
| Order Confirmed | SMS Brandname + Email | −42% support calls |
| OTP < 2s | OTPBox multi-channel | 99.95% deliverability |
| Reward Unlocked | Rewards + Smart Warranty | +27% repeat LTV |

Mỗi card có icon kênh, headline outcome (số đếm count-up), 1 dòng giải thích, link `Learn more`. Card thứ 5 (collapsed): `+ 5 more services` → `/solutions`.

**4. Support strip — ByteTech CDP** (bổ trợ, không chiếm spotlight)
- 1 hàng ngang full-width, nền `hsl(145 50% 97%)`, viền mảnh.
- Trái: logo ByteTech + dòng `Powered by PangoCDP — Strategic CDP partnership with ByteTech`.
- Giữa: 3 capability bullet inline (Unified profiles · Real-time segments · AI next-best action).
- Phải: link `Read the partnership →`.
- Không còn live dashboard widgets / throughput bar (chuyển thành chi tiết phụ, giảm tải visual).

**5. Metrics strip + CTA** — giữ nguyên 4 KPI và nút `Explore the platform`.

## Mobile

Stack dọc: Header → Stage (photo + pop-ups stack tự nhiên, channel chips ẩn) → Outcome rail (2×2 grid) → Support strip (logo + text 2 dòng) → Metrics → CTA.

## Files affected

- `src/components/site/Solutions.tsx` — refactor lớn: bỏ `Column` 3 cột, thay bằng `OutcomeStage` + `OutcomeRail` + `CDPSupportStrip`. Giữ `useCountUp`, `MetricsStrip`, `ConnectorSVG` (có thể bỏ hoặc đổi thành đường cong nối Stage → Rail).
- `src/assets/channels-girl.png` — re-generate ảnh end-user vui mừng theo style hình user upload (blob xanh, pop-up sạch, không text gibberish — render text overlay bằng HTML thay vì để AI sinh chữ trong ảnh).
- `src/locales/en.ts` & `vi.ts` — thêm copy cho outcome cards, eyebrow mới, support strip.
- Không động đến Hero, TrustBand, các section khác.

## Technical notes

- Pop-up cards và channel chips dùng `absolute` positioning trên container `relative`; viewport `<lg` thì chuyển flex stack.
- Count-up cho metric trong outcome card kích hoạt qua `IntersectionObserver` đã có.
- Ảnh nhân vật cần background trong suốt (transparent PNG) để layer blob xanh sau lưng.
- Giữ tone palette hiện tại (primary green + accent orange) — không thêm xanh dương đậm như reference; reference chỉ để mô phỏng *bố cục* (nhân vật + pop-up + blob).

## Câu hỏi xác nhận trước khi build

1. Outcome metrics (+18% NPS, −42% calls, +27% LTV) — dùng số minh hoạ kiểu này hay cần con số thật từ case study?
2. Có giữ link `/solutions` ở cuối section không, hay đổi thành CTA `Book a demo`?
3. Ảnh nhân vật: re-generate (AI) theo style hình upload, hay user sẽ cung cấp ảnh thật?
