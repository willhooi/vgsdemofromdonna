## Vision

Chuyển section "Solutions" từ **danh sách dịch vụ** sang **kiến trúc nền tảng enterprise** — visual hoá data flow theo 3 lớp: Inputs → CDP brain → Channels (outputs). Tham chiếu phong cách: Twilio Segment, Braze, Infobip platform diagram.

Mục tiêu perception: VietGuys không bán "tin SMS" — VietGuys vận hành một **enterprise communication platform** mà ByteTech CDP là bộ não.

## Layout (desktop)

```text
┌─────────────────────────────────────────────────────────────────┐
│  EYEBROW: The Platform                                          │
│  H2: One ecosystem. Every conversation, orchestrated.           │
│  Sub: Data in → intelligence → message out. At enterprise scale.│
└─────────────────────────────────────────────────────────────────┘

┌──────────────┐      ┌──────────────────────┐      ┌──────────────┐
│  INPUTS      │ ───▶ │   CDP CORE           │ ───▶ │  CHANNELS    │
│  (left rail) │      │   (center, dominant) │      │  (right rail)│
│              │      │                      │      │              │
│ • CRM        │      │  [ByteTech logo]     │      │  SMS         │
│ • Web/App    │      │  PangoCDP            │      │  Zalo        │
│ • POS        │      │  ───────────────     │      │  Viber       │
│ • E-com      │      │  Mini live dashboard │      │  Email       │
│ • Survey     │      │   ├ Unified profiles │      │  OTP         │
│ • Ads        │      │   ├ Segments live    │      │  Voice       │
│              │      │   ├ Journeys 24/7    │      │  Smart Warr. │
│              │      │   └ AI next-best     │      │  Rewards     │
│              │      │                      │      │  Custom      │
│              │      │  "Strategic partner  │      │              │
│              │      │   with ByteTech"     │      │              │
└──────────────┘      └──────────────────────┘      └──────────────┘
       ▲                       ▲                          │
       │                       │                          ▼
       └────── feedback loop (events, attribution) ◀──────┘

┌─────────────────────────────────────────────────────────────────┐
│  FOOTER STRIP: 5M msgs/day · 76 enterprises · 99.95% SLA · ...  │
└─────────────────────────────────────────────────────────────────┘
```

Animated connector lines (dashed, flowing dots) chạy từ Inputs → CDP → Channels, và một loop nhỏ vòng ngược lại = feedback. Cho cảm giác "platform đang chạy".

## Section breakdown

**1. Header block**
- Eyebrow: "The Platform"
- H2: "One ecosystem. Every conversation, orchestrated."
- Sub: positioning enterprise platform, không phải vendor.

**2. Architecture diagram (core)**
3 cột grid `[0.9fr_1.4fr_0.9fr]` desktop / stack vertical mobile.

- **Inputs column** (left): 6 small cards (CRM, Web/App, POS, E-commerce, Survey, Ads) — icon + label, viền mảnh, animation fade-in tuần tự.
- **CDP Core** (center): khối lớn nhất, glow nhẹ. Header có logo ByteTech + "PangoCDP — Strategic CDP Partner". Bên trong là **mock dashboard tile**: 4 widgets nhỏ (Unified Profiles 2.4M, Active Segments 142, Live Journeys 38, AI Recommendations 89%) với số đếm animate. Footer khối: dòng "Powered by VietGuys × ByteTech" + link.
- **Channels column** (right): 9 dịch vụ dạng pill cards xếp dọc (SMS, Zalo, Viber, Email, OTP, Voice, Smart Warranty, Rewards, Customized Solutions). Mỗi pill có dot pulse màu thương hiệu kênh.

**3. Flow connectors**
SVG overlay nối Inputs↔CDP↔Channels bằng dashed line + moving dots (đã có pattern `line-flow` trong codebase). Một đường cong dưới cùng = feedback loop từ Channels về Inputs.

**4. Footer metrics strip**
4 KPIs nhỏ: messages/day · enterprises · uptime · channels. Reinforce scale.

## Mobile behaviour

Stack dọc theo thứ tự: Inputs grid 2 cột → CDP card full-width (dashboard rút gọn còn 2 widgets) → Channels grid 2 cột → metrics strip. Connectors ẩn hoặc chuyển thành dấu chevron dọc giữa các block.

## Files affected

- `src/components/site/Solutions.tsx` — viết lại hoàn toàn.
- `src/locales/en.ts` & `vi.ts` — thêm copy cho inputs, CDP dashboard widgets, 9 channels, footer metrics. Service list đổi sang đúng 9 mục yêu cầu.
- `src/index.css` — thêm keyframes cho flow dots + dashboard count-up glow nếu chưa có.
- Asset: tái sử dụng `src/assets/brand/bytetech.svg`.

## Out of scope

- Không thay đổi Hero, TrustBand, hay các section khác.
- Không build trang `/solutions` con — chỉ refactor section trên Index.

## Câu hỏi xác nhận trước khi build

1. Mock dashboard widgets — dùng số minh hoạ (2.4M profiles, 142 segments...) hay để placeholder generic ("Live")?
2. Footer metrics strip — giữ trong section Solutions hay bỏ vì đã có TrustBand stats?
