import { useEffect, useRef, useState } from "react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { ChatBubble } from "@/components/site/ChatBubble";
import { CTASection } from "@/components/site/CTASection";

type Cat = "sms" | "ott" | "email" | "reward" | "sol";

type Study = {
  cat: Cat;
  featured?: boolean;
  image: string;
  badge: string;
  client: string;
  title: string;
  description?: string;
  metrics: { value: string; label: string }[];
  href: string;
  darkThumb?: boolean;
};

const CDN = "https://www.vietguys.biz/storage/case_study/";

const studies: Study[] = [
  {
    cat: "sms",
    featured: true,
    darkThumb: true,
    image: CDN + "kwItsEh7KbUlxJvmpdqcc79VSDzch9QzMV44l2xR.png",
    badge: "SMS Brandname",
    client: "Sea Group · E-Commerce & Technology",
    title: "Cracking the SMS cost equation for Southeast Asia's super app.",
    description:
      "Dynamic carrier failover and routing redesign — VietGuys slashed SMS delivery costs across customer-facing and internal communications without sacrificing speed or compliance.",
    metrics: [
      { value: "35%", label: "Cost Reduction" },
      { value: "99.7%", label: "Delivery Rate" },
      { value: "3×", label: "Throughput" },
    ],
    href: "/en/case-study-detail/sea-group-va-bai-toan-chi-phi-ve-dich-vu-sms",
  },
  {
    cat: "sol",
    featured: true,
    image: CDN + "1rfwp9h2vaqwIVuSfiQVpM0fp0g0a2XsoRCLXtpC.png",
    badge: "Smart Warranty",
    client: "LG Electronics · Consumer Technology",
    title: "From paper warranty cards to a smart digital after-sales ecosystem.",
    description:
      "A custom-built digital warranty platform replaced paper cards with QR-driven registration, real-time service tracking, and automated reminders — transforming LG's after-sales experience across Vietnam.",
    metrics: [
      { value: "3×", label: "Registration Rate" },
      { value: "−40%", label: "Support Tickets" },
    ],
    href: "/en/case-study-detail/lge-voi-mong-muon-toi-uu-hoa-he-thong-bao-hanh",
  },
  {
    cat: "email",
    featured: true,
    darkThumb: true,
    image: CDN + "5chXSpNDxQbR8Zh394nW0OyOt0nf3JhnjDoUoedO.png",
    badge: "Email Marketing",
    client: "CGV Cinemas · Entertainment Retail",
    title: "Breaking box office records with email — pre-sale campaigns that shattered benchmarks.",
    description:
      "Segmented genre-match email campaigns drove pre-sale conversions to record highs. Transactional OTP emails ensured a seamless booking experience end to end.",
    metrics: [
      { value: "42%", label: "Open Rate" },
      { value: "3.5×", label: "Revenue ↑" },
    ],
    href: "/en/case-study-detail/dot-pha-doanh-thu-phong-ve-voi-chien-dich-email-marketing-cgv-hop-tac-trien-khai-cung-vietguys",
  },
  {
    cat: "reward",
    featured: true,
    darkThumb: true,
    image: CDN + "k5D5WigfUK2ZWtrW7Q3mpq1NHfmPvFrAvPJwsfiA.png",
    badge: "Topup + Zalo Chatbot",
    client: "San Miguel Vietnam (SMBVCL) · FMCG / Beer",
    title: "A reward campaign that made Southeast Asia's top beer brand unforgettable in Vietnam.",
    description:
      "Consumers scanned a code, chatted with a Zalo bot, and received instant mobile credit. The seamless O2O flow delivered record campaign participation and brand recall scores.",
    metrics: [
      { value: "4.5×", label: "Participation ↑" },
      { value: "92%", label: "Redemption Rate" },
    ],
    href: "/en/case-study-detail/tra-thuong-qua-topup-ket-hop-chatbot-zalo-su-ket-hop-tao-dau-an-cho-thuong-hieu-bia-hang-dau-nam-a-san-miguel-viet-nam-smbvcl",
  },
  {
    cat: "sms",
    image: CDN + "gNCxYFQOgkODakwETTm5bViDuHk1HUBXvdwICWnp.png",
    badge: "SMS Brandname",
    client: "Grab · Mobility & Super App",
    title: "Earning brand love at every ride — Grab's SMS Brandname journey in Vietnam.",
    metrics: [
      { value: "4.2%", label: "CTR (vs. 1.8% avg)" },
      { value: "2M+", label: "Msgs/Month" },
    ],
    href: "/en/case-study-detail/hanh-trinh-tao-dau-an-trong-long-khach-hang-cua-grab-thong-qua-dich-vu-sms-brandname",
  },
  {
    cat: "ott",
    featured: true,
    darkThumb: true,
    image: CDN + "mVbt8LoCQnmRwTWa40xC1WjoClhDqC8RSupT9G9u.png",
    badge: "OTT Multi-Channel",
    client: "Đại Phát Group · Real Estate",
    title: "Reaching high-intent buyers across every digital touchpoint.",
    description:
      "Zalo ZBS + Viber omnichannel strategy unified fragmented outreach into a high-converting lead pipeline — from first contact to showroom visit in a single automated journey.",
    metrics: [
      { value: "3.1×", label: "Lead Volume ↑" },
      { value: "62%", label: "Zalo Open Rate" },
    ],
    href: "/en/case-study-detail/tiep-can-khach-hang-tiem-nang-tu-nhieu-nguon-kenh-cung-dai-phat-group",
  },
  {
    cat: "sms",
    image: CDN + "Go5RvYvnEf7dhgOyn7iBvLyPGcB1FZrzZ2mdG6qV.png",
    badge: "SMS Brandname",
    client: "Pharmacity · Pharmaceutical Retail",
    title: "Measuring customer health beyond the purchase — Vietnam's largest pharmacy chain.",
    metrics: [
      { value: "+28%", label: "Repeat Visit Rate" },
      { value: "1,000+", label: "Outlets" },
    ],
    href: "/en/case-study-detail/mong-muon-do-luong-duoc-tinh-trang-khach-hang-cua-pharmacity-chuoi-ban-le-duoc-pham-lon-nhat-viet-nam",
  },
  {
    cat: "email",
    image: CDN + "0HWX9eNsHgJyz31PxJxL4iODmtLVec10BdGxkhUh.png",
    badge: "Email Marketing",
    client: "Vascara · Fashion Retail",
    title: "From browse to buy — unlocking a higher purchase conversion rate with email.",
    metrics: [
      { value: "+27%", label: "Purchase CVR" },
      { value: "45%", label: "Cart Recovery Rate" },
    ],
    href: "/en/case-study-detail/thuong-hieu-vascara-va-c-u-chuyen-ty-le-chuyen-doi-mua-hang-thong-qua-email-marketing",
  },
  {
    cat: "reward",
    image: CDN + "UZ3vDVSf0b39cmHViL1kRYuKimnyIXDA7cHuCsYT.png",
    badge: "Mobile Topup",
    client: "Hoa Sen Group · Steel & Building Materials",
    title: "The 2-in-1 lucky draw campaign that grew revenue and rewarded loyalty simultaneously.",
    metrics: [
      { value: "+22%", label: "Distributor Revenue" },
      { value: "100%", label: "Automated" },
    ],
    href: "/en/case-study-detail/hoa-sen-group-chien-dich-quay-so-trung-thuong-2-trong-1",
  },
  {
    cat: "ott",
    image: CDN + "gjCyxwHLCxHcC449YmITSAaAq5AnD68rScXcJ2YD.png",
    badge: "OTT Integrated",
    client: "GSK (SCK Group, UK) · Global Pharma",
    title: "A global pharma giant finds its Vietnamese voice via integrated OTT messaging.",
    metrics: [
      { value: "78%", label: "Message Read Rate" },
      { value: "−40%", label: "Cost vs. Traditional" },
    ],
    href: "/en/case-study-detail/gsk-tap-doan-duoc-pham-quoc-te-anh-tiep-can-khach-hang-viet-voi-giai-phap-tin-nhan-tich-hop",
  },
  {
    cat: "email",
    image: CDN + "J8FFnmASlwq5ko8ByJeKPsg9CXVgT9p4X6QFYih8.png",
    badge: "Email Marketing",
    client: "Canon Marketing Vietnam · Consumer Electronics",
    title: "The email strategy that made Canon PhotoMarathon 2020 a nationwide phenomenon.",
    metrics: [
      { value: "38%", label: "Open Rate" },
      { value: "220%", label: "Registration Target" },
    ],
    href: "/en/case-study-detail/canon-marketing-viet-nam-va-chia-khoa-mo-ra-thanh-cong-trong-chien-dich-email-marketing-cho-cuoc-thi-canon-photomarathon-2020",
  },
  {
    cat: "ott",
    image: CDN + "IvVaaSAjiXOgEZhbh4b5Alq0HWcTQoUXEnbUrHXB.png",
    badge: "Viber + Zalo",
    client: "Index Living Mall · Home & Lifestyle Retail",
    title: "How a Thai lifestyle brand built a Vietnamese OTT messaging presence that converts.",
    metrics: [
      { value: "2.8×", label: "Showroom Traffic ↑" },
      { value: "68%", label: "Viber Open Rate" },
    ],
    href: "/en/case-study-detail/thuong-hieu-index-living-mall-da-truyen-thong-qua-cac-kenh-tin-nhan-nhu-the-nao",
  },
  {
    cat: "reward",
    image: CDN + "vYAeqfmoHbfP2U9nMx1UBfatlv7RJ3cMGaT8f7jT.png",
    badge: "Mobile Topup",
    client: "Lộc Trời Group · Agriculture",
    title: "Saying thank you to 100,000 farmers — delivered straight to their phones.",
    metrics: [
      { value: "100K+", label: "Farmers Reached" },
      { value: "98%", label: "Delivery Rate" },
    ],
    href: "/en/case-study-detail/tap-doan-loc-troi-voi-mong-muon-tri-an-nguoi-nong-dan-va-xay-dung-ket-noi-ben-chat-voi-doanh-nghiep",
  },
  {
    cat: "sol",
    image: CDN + "mIfSasksj24t22yzi4Bd5lDGrf8lcHlWC8jTs1J3.png",
    badge: "OTP + Verification",
    client: "Mead Johnson · Global Nutrition",
    title: "Smart sampling, verified data — building a trusted customer database with OTP.",
    metrics: [
      { value: "94%", label: "Data Accuracy Rate" },
      { value: "2×", label: "Retargeting Hit Rate" },
    ],
    href: "/en/case-study-detail/mead-johnson-va-bai-toan-xac-minh-so-dien-thoai-khach-hang-nhung-chua-co-he-thong-xac-minh-va-tao-ma-otp",
  },
  {
    cat: "ott",
    darkThumb: true,
    image: CDN + "yNpSMVy1rs3ffxXVxWg3G1R4bIPYOBINvacdReDB.png",
    badge: "Zalo ZBS",
    client: "IMM Group · Multi-sector Conglomerate",
    title: "From broadcast to conversation — IMM Group's customer engagement transformation.",
    metrics: [
      { value: "+55%", label: "Engagement Rate" },
      { value: "1", label: "Unified Platform" },
    ],
    href: "/en/case-study-detail/cau-chuyen-cua-tap-doan-imm-group-trong-viec-tiep-can-khach-hang",
  },
  {
    cat: "email",
    image: CDN + "hOPigZ4QWjbj8WjK25H29FBbsmdavyMLqF7c1JHV.png",
    badge: "Email Marketing",
    client: "Nam A Bank · Financial Services",
    title: "Inbox wins — boosting email open rates in Vietnam's competitive banking sector.",
    metrics: [
      { value: "+19%", label: "Open Rate ↑" },
      { value: "98.5%", label: "Deliverability" },
    ],
    href: "/en/case-study-detail/tang-ty-le-mo-email-thanh-cong-cung-nam-a-bank",
  },
  {
    cat: "sms",
    image: CDN + "SpIPE2sJEs3SYswFtFB18MkK7qfDbcSsuoPXQYuk.png",
    badge: "SMS Brandname",
    client: "SmartPro · Technology Products",
    title: "Launching without limits — navigating SMS Brandname registration with zero communication blackout.",
    metrics: [
      { value: "0", label: "Days Gap" },
      { value: "14", label: "Days Approval" },
    ],
    href: "/en/case-study-detail/smartpro-va-noi-lo-gap-kho-khan-khi-dang-ky-sms-brandname",
  },
  {
    cat: "email",
    image: CDN + "FBi1R3J4HN4LZqfPshNn9FMgxicq0UNrRPKeAWAJ.png",
    badge: "Email Marketing",
    client: "Phát Đạt Real Estate · Property Development",
    title: "From cold list to warm prospects — email as a real estate revenue engine.",
    metrics: [
      { value: "12%", label: "Lead-to-Visit Rate" },
      { value: "5×", label: "ROI vs. Display Ads" },
    ],
    href: "/en/case-study-detail/chi-voi-dich-vu-email-marketing-bat-dong-san-phat-dat-da-thanh-cong-trong-viec-tiep-can-khach-hang-tiem-nang",
  },
  {
    cat: "reward",
    image: CDN + "nTUGBqhLNiXbYXU7Lx8RyimKo4uLeWZeW7iQpN2e.png",
    badge: "Automated Reward",
    client: "VFC (Vietnam Fumigation Corp) · Consumer FMCG",
    title: "Zero manual work, full loyalty — automated reward distribution for a consumer loyalty program.",
    metrics: [
      { value: "−80%", label: "Ops Cost" },
      { value: "Real-time", label: "Delivery" },
    ],
    href: "/en/case-study-detail/cong-ty-cp-khu-trung-viet-nam-vfc-tiet-kiem-thoi-gian-chi-phi-trong-chuong-trinh-tra-thuong-voi-kich-ban-tu-dong",
  },
  {
    cat: "sol",
    image: CDN + "IcdJFSAjD5TMJc545FsKq8ag1l5B4sw5qhqVQS6Q.png",
    badge: "Custom Solution",
    client: "Hoa Sen Group · Custom Solution",
    title: "Fraud-proof lucky draws at scale — periodic prize automation for Vietnam's #1 steel group.",
    metrics: [
      { value: "0", label: "Fraud Incidents" },
      { value: "100%", label: "Audit Coverage" },
    ],
    href: "/en/case-study-detail/thanh-cong-cua-tap-doan-hoa-sen-trong-viec-trien-khai-quay-so-trung-thuong-dinh-ky",
  },
];

const FILTERS: { value: "all" | Cat; label: string; dot?: string }[] = [
  { value: "all", label: "All stories" },
  { value: "sms", label: "SMS Brandname", dot: "#43a047" },
  { value: "ott", label: "OTT · Zalo · Viber", dot: "#1e88e5" },
  { value: "email", label: "Email Marketing", dot: "#fb8c00" },
  { value: "reward", label: "Reward", dot: "#e53935" },
  { value: "sol", label: "Solutions", dot: "#8e24aa" },
];

const lightGradients: Record<Cat, string> = {
  sms: "linear-gradient(145deg, #e8f5e9, #a5d6a7)",
  ott: "linear-gradient(145deg, #e3f2fd, #90caf9)",
  email: "linear-gradient(145deg, #fff8e1, #ffe082)",
  reward: "linear-gradient(145deg, #fce4ec, #f48fb1)",
  sol: "linear-gradient(145deg, #ede7f6, #ce93d8)",
};
const darkGradients: Record<Cat, string> = {
  sms: "linear-gradient(145deg, #1b5e20, #2e7d32)",
  ott: "linear-gradient(145deg, #0d47a1, #1565c0)",
  email: "linear-gradient(145deg, #bf360c, #e64a19)",
  reward: "linear-gradient(145deg, #880e4f, #ad1457)",
  sol: "linear-gradient(145deg, #4a148c, #6a1b9a)",
};
const lightBadge: Record<Cat, { bg: string; color: string }> = {
  sms: { bg: "rgba(232,245,233,.92)", color: "#1b5e20" },
  ott: { bg: "rgba(227,242,253,.92)", color: "#0d47a1" },
  email: { bg: "rgba(255,248,225,.92)", color: "#c84b00" },
  reward: { bg: "rgba(252,228,236,.92)", color: "#880e4f" },
  sol: { bg: "rgba(237,231,246,.92)", color: "#4a148c" },
};

const Card = ({ s, idx, featured }: { s: Study; idx: number; featured?: boolean }) => {
  const isFeatured = featured ?? s.featured;
  s = { ...s, featured: isFeatured };
  const ref = useRef<HTMLElement>(null);
  const [hovered, setHovered] = useState(false);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setRevealed(true);
          io.disconnect();
        }
      },
      { threshold: 0.08 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const gradient = s.darkThumb ? darkGradients[s.cat] : lightGradients[s.cat];
  const badgeStyle = s.darkThumb
    ? { background: "rgba(255,255,255,.18)", color: "#fff" }
    : lightBadge[s.cat];

  const staggerDelay = `${(idx % 3) * 0.06}s`;

  return (
    <article
      ref={ref}
      data-cat={s.cat}
      data-featured={s.featured ? "true" : undefined}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        gridColumn: s.featured ? "span 2" : "span 1",
        display: s.featured ? "grid" : "flex",
        gridTemplateColumns: s.featured ? "46% 1fr" : undefined,
        flexDirection: s.featured ? undefined : "column",
        background: "#fff",
        border: "1px solid hsl(0 0% 90%)",
        borderRadius: 16,
        overflow: "hidden",
        transition: "transform .28s cubic-bezier(.16,1,.3,1), box-shadow .28s cubic-bezier(.16,1,.3,1), opacity .7s cubic-bezier(.16,1,.3,1)",
        transform: revealed
          ? hovered
            ? "translateY(-4px)"
            : "translateY(0)"
          : "translateY(22px)",
        opacity: revealed ? 1 : 0,
        boxShadow: hovered ? "0 18px 56px rgba(0,0,0,.09)" : "0 1px 2px rgba(0,0,0,.02)",
        transitionDelay: revealed ? "0s" : staggerDelay,
      }}
      className="cs-card"
    >
      <div
        className="card-thumb"
        style={{
          position: "relative",
          overflow: "hidden",
          background: gradient,
          minHeight: s.featured ? 280 : undefined,
          height: s.featured ? "100%" : 200,
        }}
      >
        <img
          src={s.image}
          alt={s.client}
          loading="lazy"
          style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
        />
        <div style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,.18)" }} />
        <span
          style={{
            position: "absolute",
            top: 12,
            left: 12,
            padding: "4px 10px",
            borderRadius: 999,
            fontSize: 10.5,
            fontWeight: 700,
            textTransform: "uppercase",
            letterSpacing: ".04em",
            ...badgeStyle,
          }}
        >
          {s.badge}
        </span>
        <a
          href={s.href}
          aria-label="Read case study"
          style={{
            position: "absolute",
            bottom: 12,
            right: 12,
            width: 34,
            height: 34,
            borderRadius: "50%",
            background: hovered ? "#fff" : "rgba(255,255,255,.88)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#0e1a0f",
            fontSize: 16,
            fontWeight: 700,
            transition: "transform .2s, background .2s",
            transform: hovered ? "scale(1.1)" : "scale(1)",
          }}
        >
          ↗
        </a>
      </div>
      <div
        className="card-body"
        style={{
          padding: s.featured ? "28px 30px" : "20px 22px 22px",
          display: "flex",
          flexDirection: "column",
          justifyContent: s.featured ? "center" : undefined,
          flex: 1,
        }}
      >
        <div
          style={{
            fontSize: 10.5,
            fontWeight: 700,
            textTransform: "uppercase",
            letterSpacing: ".07em",
            color: "hsl(0 0% 42%)",
            marginBottom: 8,
          }}
        >
          {s.client}
        </div>
        <h3
          style={{
            fontSize: s.featured ? 20 : 15,
            fontWeight: 700,
            lineHeight: s.featured ? 1.3 : 1.45,
            color: "hsl(0 0% 10%)",
            marginBottom: 10,
          }}
        >
          {s.title}
        </h3>
        {s.featured && s.description && (
          <p
            style={{
              fontSize: 13,
              lineHeight: 1.65,
              color: "hsl(0 0% 42%)",
              marginBottom: 14,
            }}
          >
            {s.description}
          </p>
        )}
        <div
          style={{
            display: "flex",
            marginTop: "auto",
            paddingTop: 16,
            borderTop: "1px solid hsl(0 0% 90%)",
          }}
        >
          {s.metrics.map((m, i) => (
            <div
              key={i}
              style={{
                flex: 1,
                textAlign: "center",
                borderLeft: i === 0 ? "none" : "1px solid hsl(0 0% 90%)",
              }}
            >
              <div
                style={{
                  fontSize: s.featured ? 26 : 20,
                  fontWeight: 800,
                  color: "hsl(145 100% 25%)",
                  letterSpacing: "-.02em",
                }}
              >
                {m.value}
              </div>
              <div
                style={{
                  fontSize: 10,
                  fontWeight: 600,
                  color: "hsl(0 0% 42%)",
                  marginTop: 2,
                }}
              >
                {m.label}
              </div>
            </div>
          ))}
        </div>
        <a
          href={s.href}
          style={{
            fontSize: 12.5,
            fontWeight: 700,
            color: hovered ? "hsl(145 100% 25%)" : "hsl(128 52% 46%)",
            marginTop: 14,
            display: "inline-flex",
            alignItems: "center",
            gap: hovered ? 9 : 5,
            transition: "gap .2s, color .2s",
          }}
        >
          Read case study <span style={{ fontSize: 11 }}>↗</span>
        </a>
      </div>
    </article>
  );
};

const PAGE_SIZE = 8;

const CaseStudies = () => {
  const [filter, setFilter] = useState<"all" | Cat>("all");
  const [page, setPage] = useState(1);

  useEffect(() => {
    document.title = "Case Studies — VietGuys | Enterprise Messaging Vietnam";
    let m = document.querySelector('meta[name="description"]');
    if (!m) {
      m = document.createElement("meta");
      m.setAttribute("name", "description");
      document.head.appendChild(m);
    }
    m.setAttribute(
      "content",
      "From Fortune 500 enterprises to Vietnam's fastest-scaling brands — explore 20 VietGuys case studies across SMS, Zalo, Email and reward automation.",
    );
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", window.location.origin + "/case-studies");
  }, []);

  useEffect(() => {
    setPage(1);
  }, [filter]);

  const visible = studies.filter((s) => filter === "all" || s.cat === filter);
  const totalPages = Math.max(1, Math.ceil(visible.length / PAGE_SIZE));
  const currentPage = Math.min(page, totalPages);
  const start = (currentPage - 1) * PAGE_SIZE;
  const pageItems = visible.slice(start, start + PAGE_SIZE);

  return (
    <div className="min-h-screen bg-background" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
      <Header />

      {/* HERO */}
      <section
        style={{
          maxWidth: 1160,
          margin: "0 auto",
          padding: "140px 24px 72px",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "space-between",
            gap: 48,
            flexWrap: "wrap",
          }}
        >
          <div style={{ flex: "1 1 480px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 18 }}>
              <span
                style={{
                  width: 20,
                  height: 2,
                  background: "hsl(128 52% 46%)",
                  borderRadius: 2,
                  display: "inline-block",
                }}
              />
              <span
                style={{
                  fontSize: 11,
                  fontWeight: 700,
                  letterSpacing: ".09em",
                  textTransform: "uppercase",
                  color: "hsl(128 52% 46%)",
                }}
              >
                Case Studies
              </span>
            </div>
            <h1
              style={{
                fontSize: "clamp(38px, 5vw, 60px)",
                fontWeight: 800,
                lineHeight: 1.05,
                letterSpacing: "-2px",
                color: "hsl(0 0% 10%)",
              }}
            >
              Results
              <br />
              <span
                style={{
                  fontStyle: "italic",
                  fontWeight: 400,
                  color: "hsl(0 0% 42%)",
                }}
              >
                that speak
              </span>
              <br />
              for themselves.
            </h1>
          </div>

        </div>
      </section>

      <div style={{ borderTop: "1px solid hsl(0 0% 90%)" }} />

      {/* FILTER BAR */}
      <div
        style={{
          position: "sticky",
          top: 62,
          zIndex: 40,
          background: "rgba(255,255,255,.9)",
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
          borderBottom: "1px solid hsl(0 0% 90%)",
        }}
      >
        <div
          style={{
            maxWidth: 1160,
            margin: "0 auto",
            padding: "0 24px",
            height: 54,
            display: "flex",
            alignItems: "center",
            gap: 4,
            overflowX: "auto",
            scrollbarWidth: "none",
          }}
          className="cs-filter-scroll"
        >
          {FILTERS.map((f) => {
            const active = filter === f.value;
            return (
              <button
                key={f.value}
                onClick={() => setFilter(f.value)}
                style={{
                  padding: "6px 15px",
                  borderRadius: 999,
                  fontSize: 13,
                  fontWeight: 600,
                  color: active ? "#fff" : "hsl(0 0% 42%)",
                  background: active ? "hsl(0 0% 10%)" : "transparent",
                  border: `1.5px solid ${active ? "hsl(0 0% 10%)" : "transparent"}`,
                  whiteSpace: "nowrap",
                  cursor: "pointer",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 6,
                  transition: "color .15s, background .15s, border-color .15s",
                }}
              >
                {f.dot && (
                  <span
                    style={{
                      width: 6,
                      height: 6,
                      borderRadius: "50%",
                      background: active ? "rgba(255,255,255,.6)" : f.dot,
                      display: "inline-block",
                    }}
                  />
                )}
                {f.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* GRID */}
      <section
        style={{
          maxWidth: 1160,
          margin: "0 auto",
          padding: "44px 24px 100px",
        }}
      >
        <div
          className="cs-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 20,
            alignItems: "stretch",
          }}
        >
          {pageItems.map((s, i) => (
            <Card key={s.href} s={s} idx={i} featured={i === 0} />
          ))}
          {pageItems.length === 0 && (
            <div style={{ gridColumn: "1/-1", padding: "80px 0", textAlign: "center" }}>
              <p style={{ fontSize: 15, color: "hsl(0 0% 42%)" }}>
                No case studies found for this filter.
              </p>
            </div>
          )}
        </div>

        {totalPages > 1 && (
          <nav
            aria-label="Pagination"
            style={{
              marginTop: 48,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: 8,
              flexWrap: "wrap",
            }}
          >
            <button
              onClick={() => {
                setPage((p) => Math.max(1, p - 1));
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              disabled={currentPage === 1}
              style={{
                padding: "9px 16px",
                borderRadius: 999,
                fontSize: 13,
                fontWeight: 700,
                background: "#fff",
                border: "1.5px solid hsl(0 0% 88%)",
                color: currentPage === 1 ? "hsl(0 0% 70%)" : "hsl(0 0% 10%)",
                cursor: currentPage === 1 ? "not-allowed" : "pointer",
                transition: "border-color .15s, color .15s",
              }}
            >
              ← Previous
            </button>
            {Array.from({ length: totalPages }).map((_, i) => {
              const p = i + 1;
              const active = p === currentPage;
              return (
                <button
                  key={p}
                  onClick={() => {
                    setPage(p);
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                  aria-current={active ? "page" : undefined}
                  style={{
                    minWidth: 38,
                    height: 38,
                    padding: "0 12px",
                    borderRadius: 999,
                    fontSize: 13,
                    fontWeight: 700,
                    background: active ? "hsl(0 0% 10%)" : "#fff",
                    color: active ? "#fff" : "hsl(0 0% 42%)",
                    border: `1.5px solid ${active ? "hsl(0 0% 10%)" : "hsl(0 0% 88%)"}`,
                    cursor: "pointer",
                    transition: "all .15s",
                  }}
                >
                  {p}
                </button>
              );
            })}
            <button
              onClick={() => {
                setPage((p) => Math.min(totalPages, p + 1));
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              disabled={currentPage === totalPages}
              style={{
                padding: "9px 16px",
                borderRadius: 999,
                fontSize: 13,
                fontWeight: 700,
                background: "#fff",
                border: "1.5px solid hsl(0 0% 88%)",
                color: currentPage === totalPages ? "hsl(0 0% 70%)" : "hsl(0 0% 10%)",
                cursor: currentPage === totalPages ? "not-allowed" : "pointer",
                transition: "border-color .15s, color .15s",
              }}
            >
              Next →
            </button>
          </nav>
        )}
      </section>

      {/* CTA — shared contact form */}
      <CTASection />

      <Footer />
      <ChatBubble />

      <style>{`
        .cs-grid { align-items: stretch !important; }
        .cs-filter-scroll::-webkit-scrollbar { display: none; }
        @media (max-width: 960px) {
          .cs-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 640px) {
          .cs-grid { grid-template-columns: 1fr !important; }
          .cs-card[data-featured="true"] {
            grid-column: span 1 !important;
            display: flex !important;
            flex-direction: column !important;
          }
        }
      `}</style>
    </div>
  );
};

export default CaseStudies;
