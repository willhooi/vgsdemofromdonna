import { CATEGORIES } from "./categories";

export type InsightArticle = {
  slug: string;
  category: (typeof CATEGORIES)[number]["slug"];
  title: string;
  excerpt: string;
  /** Plain-text paragraphs. Rendered as <p> with prose styling. */
  body: string[];
  author: string;
  authorRole: string;
  date: string; // ISO yyyy-mm-dd
  readMinutes: number;
  tags: string[];
  image: string; // absolute URL or local
  featured?: boolean;
  legacyUrl?: string; // for 301 mapping reference
};

// Curated Unsplash imagery — neutral, premium B2B feel.
const img = (id: string) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=1600&q=80`;

export const ARTICLES: InsightArticle[] = [
  // ─────────────────────────────  MESSAGING CHANNELS  ─────────────────────────────
  {
    slug: "zalo-zns-template-explained",
    category: "messaging-channels",
    title: "Ads dependency vs owned audience: the growth dilemma of Vietnam's beauty sector",
    excerpt:
      "ZNS templates are the only way to reach Zalo's 74M+ Vietnamese users at scale with branded, verified content. Here is how the approval flow, pricing and use cases really work.",
    body: [
      "Zalo Notification Service (ZNS) is Zalo's official channel for businesses to send template-based notifications to users who have interacted with the brand. Unlike SMS, every message must use a pre-approved template — which is the trade-off Zalo enforces in exchange for inbox-grade trust.",
      "For Vietnamese enterprises, ZNS is now a default layer in the customer journey: OTPs, order updates, appointment reminders, loyalty alerts. CellphoneS, for example, replaced a large share of legacy SMS notifications with ZNS templates and saw a measurable lift in open rate and customer satisfaction.",
      "Approval typically takes 24–48 hours, with template categories ranging from transactional to care and rating flows. Pricing is template-tier based, and a good rule of thumb is that ZNS becomes more cost-effective than SMS when monthly volume per template crosses a few thousand messages.",
      "The biggest mistake we see is treating ZNS as a like-for-like SMS replacement. ZNS shines when you design the template natively — rich variables, action buttons, and a clear call to a Zalo Mini App or OA conversation.",
    ],
    author: "VietGuys Team",
    authorRole: "Channel Strategy",
    date: "2026-02-12",
    readMinutes: 6,
    tags: ["Zalo ZNS", "CPaaS", "Vietnam"],
    image: "/__l5e/assets-v1/44dc459e-7cf8-4900-91a7-1316714c90a9/beauty-ads-insight.png",
    featured: true,
    legacyUrl:
      "/vi/tin-tuc/cellphones-nang-cao-trai-nghiem-khach-hang-voi-zalo-zns-template",
  },
  {
    slug: "otp-the-revenue-bottleneck",
    category: "messaging-channels",
    title: "OTP: the closest touchpoint to revenue — and the easiest to break",
    excerpt:
      "A delayed OTP looks like a 3-second technical glitch. On a checkout funnel it is an abandoned order. Why enterprise OTP needs multi-channel fallback by default.",
    body: [
      "OTP is often treated as plumbing — until a single failed delivery costs a transaction. In high-volume e-commerce and banking flows, OTP latency above five seconds materially increases drop-off. At scale, even a 1% miss rate translates into millions of VND lost per day.",
      "The fix is not 'a faster SMS gateway'. It is a multi-channel routing layer: Zalo ZNS first for cost and speed, SMS Brandname as fallback, and voice OTP as the last mile for high-value transactions.",
      "VietGuys' OTP routing is sub-2-second on the primary path and observes per-route delivery health in real time, automatically degrading to a backup channel before the user notices.",
    ],
    author: "VietGuys Team",
    authorRole: "Reliability",
    date: "2026-04-09",
    readMinutes: 5,
    tags: ["OTP", "SMS", "Reliability"],
    image: img("photo-1563013544-824ae1b704d3"),
    legacyUrl:
      "/vi/tin-tuc/otp-diem-gan-nhat-voi-doanh-thu-nhung-cung-la-diem-nghen-neu-den-tre",
  },
  {
    slug: "multi-channel-messaging-2026",
    category: "messaging-channels",
    title: "Multi-channel messaging in 2026: when to use SMS, Zalo, Viber or Email",
    excerpt:
      "A practical decision matrix for picking the right channel by use case, cost, reach and regulatory requirement in Vietnam.",
    body: [
      "The default question in 2020 was 'should we add Zalo?'. In 2026 the question is 'which channel goes first, and which one is the safety net?'.",
      "Banks lean on SMS for legally binding notifications, ZNS for customer-care touchpoints, and email for statements. Retailers invert the stack: ZNS for promotions and order updates, SMS only for OTP, email for loyalty.",
      "The decision matrix that holds up across industries: reach (does the user have the app?), cost per delivered conversation, latency tolerance, regulatory weight, and whether you need two-way interaction.",
    ],
    author: "VietGuys Team",
    authorRole: "Channel Strategy",
    date: "2026-03-13",
    readMinutes: 7,
    tags: ["Multi-channel", "Strategy", "Vietnam"],
    image: img("photo-1551434678-e076c223a692"),
    legacyUrl:
      "/vi/tin-tuc/messaging-da-kenh-la-gi-xu-huong-giup-doanh-nghiep-nang-cao-trai-nghiem-khach-hang-nam-2026",
  },

  // ─────────────────────────────  INDUSTRY PLAYBOOK  ─────────────────────────────
  {
    slug: "sms-five-touchpoints-restaurants-cafes",
    category: "industry-playbooks",
    title: "The 5-touchpoint SMS strategy that lifts restaurant & cafe return rates",
    excerpt:
      "Restaurants and cafes spend on first-visit acquisition and forget the return journey. Five well-placed SMS touchpoints can quietly compound traffic without touching the ad budget.",
    body: [
      "In F&B, the second visit is where the unit economics flip. The first visit pays for acquisition; every visit after that pays the bills. SMS Brandname remains the most reliable channel to nudge that second visit in Vietnam, because phone numbers are collected at checkout anyway.",
      "Touchpoint 1 — the thank-you. Send within an hour of the visit, no offer attached. Goal: anchor the brand in memory while the experience is still fresh.",
      "Touchpoint 2 — the segmented offer at day 3. Use POS data to recommend the next dish or drink the customer is most likely to try. A relevant nudge converts at multiples of a generic promo.",
      "Touchpoint 3 — the weekend reminder. A simple SMS on Friday afternoon to the segment that visited mid-week reliably lifts weekend covers without discounting.",
      "Touchpoint 4 — the win-back at day 30. Customers who skip a month are at risk. A small, time-boxed incentive recovers a meaningful share before the silence becomes permanent.",
      "Touchpoint 5 — the loyalty milestone. Acknowledge the 5th and 10th visit publicly inside the message. Recognition outperforms discounts on long-term repeat rate.",
      "What makes the programme work is not the copy — it is having the customer data unified so each SMS is targeted, not blasted. That is where SMS Brandname plus a CDP layer outperforms a standalone messaging tool.",
    ],
    author: "VietGuys Team",
    authorRole: "Industry",
    date: "2026-06-02",
    readMinutes: 7,
    tags: ["F&B", "SMS", "Retention"],
    image: "/__l5e/assets-v1/be2b35a5-cd6e-4002-958d-c20aed3f90be/sms-marketing-restaurants.png",
    featured: true,
  },
  {
    slug: "ads-dependency-vs-owned-audience",
    category: "customer-engagement",
    title: "Ads dependency vs owned audience: the growth dilemma of Vietnam's beauty sector",
    excerpt:
      "Many beauty brands run on Facebook and Google Ads alone. The booked calendar hides a fragile economics story — and a clear path to owned-channel growth.",
    body: [
      "Vietnam's beauty industry has scaled on paid acquisition. The flip side is a CAC that creeps up every quarter and zero leverage when the platforms change their auctions.",
      "The brands quietly winning the next cycle are the ones building owned audiences: Zalo OA followers, SMS-opted segments, and a CDP that lets them re-engage at a fraction of the paid cost.",
      "Owned-channel growth is not anti-ads. It is the asset that makes ads profitable again.",
    ],
    author: "VietGuys Team",
    authorRole: "Growth",
    date: "2026-04-01",
    readMinutes: 6,
    tags: ["Growth", "Beauty", "Owned media"],
    image: img("photo-1487412947147-5cebf100ffc2"),
    legacyUrl:
      "/vi/tin-tuc/phu-thuoc-ads-hay-xay-tai-san-bai-toan-tang-truong-cua-nganh-lam-dep-viet-nam",
  },
  {
    slug: "post-first-order-moment",
    category: "customer-engagement",
    title: "The quiet moment after the first order that decides FMCG revenue",
    excerpt:
      "FMCG growth is won or lost in the 14 days after the first purchase. A look at the lifecycle programme that turns one-time buyers into a repeat base.",
    body: [
      "First-order acquisition gets all the attention. But for FMCG, the second order is the one that compounds revenue — and the window is short.",
      "A simple lifecycle programme — order-confirmation ZNS, a thank-you nudge at day 3, a usage tip at day 7, and a tailored offer at day 14 — consistently lifts second-order rate by double digits.",
      "The unlock is having the data layer that knows what was bought, by whom, and through which channel they prefer to be reached.",
    ],
    author: "VietGuys Team",
    authorRole: "Lifecycle",
    date: "2026-04-22",
    readMinutes: 5,
    tags: ["FMCG", "Lifecycle", "Retention"],
    image: img("photo-1542838132-92c53300491e"),
    legacyUrl:
      "/vi/tin-tuc/khoanh-khac-fmcg-am-tham-quyet-dinh-doanh-thu-sau-don-hang-dau-tien",
  },

  // ─────────────────────────────  DATA, AI & MARTECH  ─────────────────────────────
  {
    slug: "cdp-for-vietnamese-enterprises",
    category: "data-ai-martech",
    title: "What a CDP actually does — for Vietnamese enterprises that already have a CRM",
    excerpt:
      "CRM tracks deals. CDP tracks people across every channel and stitches their identity. Why the two coexist, and what to build first.",
    body: [
      "A CRM is built for sales teams to manage pipelines. A CDP is built for marketing and CX to unify customer identity across web, app, ZNS, SMS, email and offline POS.",
      "For enterprises in Vietnam, the practical starting point is identity stitching — one customer = one ID across Zalo, phone number and email — and a real-time event stream that any channel can subscribe to.",
      "PangoCDP, our customer data platform, is designed for exactly that: ingest fast, unify identity, activate any channel without rebuilding the segment.",
    ],
    author: "VietGuys Team",
    authorRole: "Data Platform",
    date: "2026-01-20",
    readMinutes: 7,
    tags: ["CDP", "PangoCDP", "Data"],
    image: img("photo-1551288049-bebda4e38f71"),
    featured: true,
  },
  {
    slug: "ai-campaigns-segmentation",
    category: "data-ai-martech",
    title: "AI campaign optimisation: segmentation in plain language, send-time on autopilot",
    excerpt:
      "Modern AI marketing is not a chatbot bolted onto a campaign tool. It is segmentation, send-time and copy decided by models running on first-party data.",
    body: [
      "The interesting AI question for marketers in 2026 is not 'can it write copy'. It is 'can it decide who to send to, when, and on which channel — better than my best campaign manager'.",
      "When the AI sits on top of a clean CDP, the lift is meaningful: double-digit increases in conversion per send and lower opt-out rates because the system stops over-messaging.",
      "The risk is the opposite: bolting AI onto messy data produces confidently wrong segments at scale.",
    ],
    author: "VietGuys Team",
    authorRole: "AI Practice",
    date: "2025-12-10",
    readMinutes: 6,
    tags: ["AI", "Campaigns", "Segmentation"],
    image: img("photo-1677442136019-21780ecad995"),
  },
  {
    slug: "first-party-data-2026",
    category: "data-ai-martech",
    title: "First-party data in 2026: how Vietnamese enterprises are catching up",
    excerpt:
      "Third-party cookies are gone, regulation is tightening, and the brands with their own data are running away with the next cycle.",
    body: [
      "The shift to first-party data is no longer a CMO slide — it is a board-level conversation. The brands that own their customer relationships, their consent records and their behavioural events have a structural advantage.",
      "In Vietnam, the fastest movers are banks, airlines and large retail groups, all of whom are consolidating data into a CDP and activating directly through their owned channels.",
      "The playbook is consistent: capture consent at every channel, unify into a CDP, activate through ZNS, SMS, email and in-app, measure end-to-end.",
    ],
    author: "VietGuys Team",
    authorRole: "Data Platform",
    date: "2026-02-05",
    readMinutes: 6,
    tags: ["First-party data", "CDP", "Strategy"],
    image: img("photo-1518770660439-4636190af475"),
  },
  {
    slug: "mobile-app-install-data",
    category: "data-ai-martech",
    title: "Using data to maximise Mobile App Install campaigns",
    excerpt:
      "App install is the easy part. Driving day-7 and day-30 retention is where most budgets quietly leak. A data-led approach to fix it.",
    body: [
      "Most Mobile App Install campaigns are measured at the install event. The real economics live further downstream — at activation, retention and revenue.",
      "A data-led approach connects install attribution to in-app behaviour, then loops back into the CDP so the next campaign already knows which segments retain and which churn fast.",
      "Layer messaging on top: ZNS welcomes on day 0, lifecycle nudges on day 3 and 7, win-back on day 30. The compounding effect on LTV is significant.",
    ],
    author: "VietGuys Team",
    authorRole: "Growth",
    date: "2022-10-07",
    readMinutes: 5,
    tags: ["Mobile", "Growth", "Attribution"],
    image: img("photo-1512941937669-90a1b58e7e9c"),
    legacyUrl:
      "/vi/tin-tuc/su-dung-du-lieu-the-nao-de-toi-da-hieu-qua-chien-dich-mobile-app-install",
  },

  // ─────────────────────────────  INDUSTRY PLAYBOOKS  ─────────────────────────────
  {
    slug: "cellphones-zalo-zns-case-study",
    category: "industry-playbooks",
    title: "CellphoneS lifts customer experience with Zalo ZNS Template",
    excerpt:
      "How one of Vietnam's largest electronics retailers re-architected its post-purchase journey on ZNS — and what other retailers can copy.",
    body: [
      "CellphoneS sends millions of post-purchase notifications a month. Moving from SMS-only to a ZNS-first model improved open rate, lowered cost per delivered message, and unlocked richer content like order tracking and review prompts.",
      "The migration playbook: identify the top 5 transactional flows, design ZNS templates with explicit calls to action, route through SMS as fallback for customers without Zalo, and measure end-to-end uplift versus the previous baseline.",
      "The headline result was customer experience, not cost — and that is usually the order in which retail wins.",
    ],
    author: "VietGuys Team",
    authorRole: "Customer Stories",
    date: "2024-11-05",
    readMinutes: 5,
    tags: ["Retail", "Zalo ZNS", "Case study"],
    image: img("photo-1556742044-3c52d6e88c62"),
    featured: true,
    legacyUrl:
      "/vi/tin-tuc/cellphones-nang-cao-trai-nghiem-khach-hang-voi-zalo-zns-template",
  },
  {
    slug: "fmcg-cx-2026-revenue-driver",
    category: "industry-playbooks",
    title: "2026 trend: turning FMCG customer care into a revenue engine",
    excerpt:
      "FMCG brands historically saw customer care as a cost line. The leading players in Vietnam are now measuring it as a revenue driver — and the data backs them up.",
    body: [
      "When customer care is wired into the CDP, every conversation becomes a behavioural signal that can feed back into segmentation, lifecycle and even product decisions.",
      "The brands ahead in 2026 are running care as a P&L: response time, resolution rate, NPS — but also incremental revenue per resolved conversation.",
      "Messaging plays a central role here. Chat threads on Zalo and Messenger create the persistent canvas. ZNS templates re-engage the customer with the next-best action.",
    ],
    author: "VietGuys Team",
    authorRole: "Industry",
    date: "2026-05-07",
    readMinutes: 6,
    tags: ["FMCG", "CX", "Vietnam"],
    image: img("photo-1604719312566-8912e9227c6a"),
    legacyUrl:
      "/vi/tin-tuc/xu-huong-2026-chuyen-hoa-cskh-trong-fmcg-thanh-dong-luc-doanh-thu",
  },
];

export const articlesByCategory = (slug: string) =>
  ARTICLES.filter((a) => a.category === slug).sort(
    (a, b) => +new Date(b.date) - +new Date(a.date),
  );

export const getArticle = (slug: string) =>
  ARTICLES.find((a) => a.slug === slug);

export const featuredArticles = () =>
  ARTICLES.filter((a) => a.featured).sort(
    (a, b) => +new Date(b.date) - +new Date(a.date),
  );

export const latestArticles = (limit?: number) => {
  const sorted = [...ARTICLES].sort(
    (a, b) => +new Date(b.date) - +new Date(a.date),
  );
  return typeof limit === "number" ? sorted.slice(0, limit) : sorted;
};

export const formatDate = (iso: string) =>
  new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
