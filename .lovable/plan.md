## Mục tiêu
Thay thế hoàn toàn nội dung và layout hiện tại của `AIPlatformCard` trong `src/components/site/Solutions.tsx` bằng câu chuyện 4 bước theo đúng hình tham khảo:

```text
① DATA SOURCES  →  ② AI CUSTOMER BRAIN  →  ③ BUSINESS IMPACT  →  ④ CUSTOMER EXPERIENCE
   (6 nguồn dữ liệu)   (Customer Profile 360°)   (4 kết quả KD)        (Cô gái + 4 popup)
```

## Nội dung chính xác (theo hình)

**① DATA SOURCES** — *Collect data from every touchpoint*
- ERP — Business systems
- POS — In-store transactions
- Website / App — Behavior & analytics
- Social Channels — Facebook, Instagram, TikTok
- Zalo OA — Messages & interactions
- Loyalty Program — Points & Membership
- Campaign / Ads — Ads & promotions

**② AI CUSTOMER BRAIN** — *Unify, understand and predict*
- Vòng tròn trung tâm: icon user + "Customer Profile 360°"
- 5 satellite nodes quanh vòng tròn: Purchase History, Interests & Behavior, Channel Preference, Lifetime Value, Loyalty Tier
- 4 capability pills bên dưới: Data Collected, AI Segmentation, Predictive Insights, Journey Automation

**③ BUSINESS IMPACT** — *Turn insights into measurable results*
- Business Reports — Real-time dashboards and analytics
- Audience Segmentation — Smart segments for better targeting
- Automated Journeys — Trigger personalized journeys at scale
- Omnichannel Engagement — Engage customers on their favorite channels

**④ CUSTOMER EXPERIENCE** — *Deliver personalized experiences that customers love*
- Cô gái (giữ ảnh `channels-girl.png` hiện tại)
- 4 popup nổi: Personalized Offer "15% OFF for you!", Order Confirmed "#VG123456", Birthday Reward "100 points earned!", Recommended for you "Check this out!"
- Review 5★ "Thanks for your feedback!" ở dưới

## Layout & responsive

### Desktop (≥1024px)
- Grid 4 cột: `grid-cols-[1fr_1.1fr_1fr_1.1fr]` trong cùng 1 card lớn (giữ wrapper card hiện tại).
- Mỗi cột là 1 panel nhẹ (border + bg trắng/tinted), có số thứ tự ①②③④ + tiêu đề + sub-line, items list bên dưới.
- Connector: dotted SVG lines giữa các cột (cam → xanh dần) + particle chạy ngang để tiếp nối flow animation hiện có.
- Cột ② có lõi tròn animate (giữ logic `cdp-orb` hiện tại nhưng đặt giữa cột) + satellite nodes orbit nhẹ.
- Cột ④ giữ `OutcomeStage` (cô gái + popup), bỏ wrapper max-width cứng để fit vào cột.

### Tablet (768–1023px)
- Grid 2×2: `grid-cols-2` — ①② hàng trên, ③④ hàng dưới.
- Connectors chuyển thành mũi tên ngang/dọc đơn giản giữa các ô.
- Brain core thu nhỏ, satellite nodes giảm xuống 3.

### Mobile (<768px)
- Stack dọc 1 cột: ① → ② → ③ → ④.
- Mỗi step có chip số "Step 1/2/3/4" + tiêu đề + sub-line + items (list compact, icon nhỏ).
- Cô gái + popup scale `0.7`, max-w-[300px] căn giữa.
- Connector: mũi tên dọc ↓ giữa các step (subtle, dotted).
- Bỏ 3D rotateY trên panels để tiết kiệm không gian.

## Thay đổi kỹ thuật

### File: `src/components/site/Solutions.tsx`

1. **Xóa/thay thế** toàn bộ `CDPWave` component và CSS `.cdp-src/.cdp-out/.cdp-orb*` hiện tại (không còn dùng pattern INPUT/HUB/OUTPUT 3-panel).

2. **Tạo 4 component con** (trong cùng file để gọn):
   - `<StepDataSources />` — column ① với 7 item rows
   - `<StepAIBrain />` — column ② với circle core + orbit nodes + 4 pills
   - `<StepBusinessImpact />` — column ③ với 4 item cards
   - `<StepCustomerExperience />` — column ④ wrap `OutcomeStage` (đã có sẵn, cập nhật 4 popup theo nội dung mới)

3. **Cập nhật `OutcomeStage`** (lines 119–207):
   - Thay nội dung 3 popup hiện tại bằng 4 popup mới đúng hình: Personalized Offer 15% OFF, Order Confirmed #VG123456, Birthday Reward 100 points, Recommended for you.
   - Review 5★ giữ nguyên với text "Thanks for your feedback!".
   - Bỏ max-width cứng, nhận `className` từ parent.

4. **Rewrite `AIPlatformCard`** (lines 443–470):
   - Container card lớn (giữ shadow/border hiện tại).
   - Header: title "AI Customer Engagement Platform" + subtitle ngắn.
   - Body: grid responsive `grid-cols-1 md:grid-cols-2 lg:grid-cols-4` chứa 4 step components.
   - SVG overlay connector cho desktop (absolute, hidden md:block).

5. **Icons** dùng từ `lucide-react` (đã import sẵn nhiều): Database, Store, Globe, ThumbsUp, MessageCircle, Award, Megaphone (data sources); BarChart3, Users, GitBranch, MessageSquare (business impact); User, ShoppingBag, Heart, Clock, Crown (brain satellites).

6. **Animation**: 
   - Giữ keyframes orbit/glow cho brain core.
   - Connector particles dùng SVG `animateMotion` chạy ngang qua 3 dotted curves (hoặc CSS `@keyframes` translate).
   - Reveal stagger nhẹ cho từng step khi `visible=true`.

## Kết quả
- Đúng nội dung và cảm giác visual của hình tham khảo.
- 4 cột rõ ràng trên desktop, 2×2 trên tablet, stack dọc trên mobile — không bị cắt nội dung.
- Cô gái + popup vẫn nằm trong cùng 1 card, là điểm cuối của flow.
- Animation flow Input → AI → Impact → Customer liền mạch nhờ connector + particles.

## Files
- Chỉ sửa `src/components/site/Solutions.tsx`.
