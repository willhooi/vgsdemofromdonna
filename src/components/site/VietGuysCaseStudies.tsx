import { useState } from "react";
import { ArrowRight } from "lucide-react";

type CaseItem = {
  id: number;
  brand: string;
  abbr: string;
  color: string;
  metric: string;
  metricLabel: string;
  title: string;
  description: string;
  tags: string[];
  image: string;
};

const cases: CaseItem[] = [
  {
    id: 0, brand: "Sea Group", abbr: "S", color: "#005a24",
    metric: "↓ Cost", metricLabel: "OTP & SMS Optimized",
    title: "Cost Optimization for SMS & OTP Services",
    description:
      "Triển khai kết hợp SMS OTP, Voice OTP và failover cho hệ sinh thái Shopee, Garena, AirPay — tối ưu chi phí xác thực quy mô lớn.",
    tags: ["SMS OTP", "Voice OTP", "Failover"],
    image: "/images/sea-group.jpg",
  },
  {
    id: 1, brand: "LG Electronics", abbr: "LG", color: "#008134",
    metric: "Smart", metricLabel: "Warranty System",
    title: "Smart Warranty System Optimization",
    description:
      "Xây dựng hệ thống bảo hành thông minh: web platform, app Android/iOS và quản lý dữ liệu tập trung cho LGE.",
    tags: ["Web Platform", "Android", "iOS"],
    image: "/images/lge.jpg",
  },
  {
    id: 2, brand: "CGV Cinemas", abbr: "▶", color: "#39b44a",
    metric: "80%", metricLabel: "Email Open Rate",
    title: "Boosting Box Office via Email Marketing",
    description:
      "Triển khai Email Marketing và transactional email tự động hóa booking, target open rate 80% và click rate 50%.",
    tags: ["Email Marketing", "Automation"],
    image: "/images/cgv.jpg",
  },
  {
    id: 3, brand: "Pharmacity", abbr: "Rx", color: "#ff9b17",
    metric: "↑ UX", metricLabel: "OTP Reliability",
    title: "Enhancing Customer Verification Monitoring",
    description:
      "Áp dụng SMS Brandname và Voice OTP — nâng cao xác thực khách hàng, giảm tỷ lệ OTP thất bại.",
    tags: ["SMS Brandname", "Voice OTP"],
    image: "/images/pharmacity.jpg",
  },
  {
    id: 4, brand: "San Miguel Vietnam", abbr: "SM", color: "#d76e00",
    metric: "Zalo", metricLabel: "Chatbot Integrated",
    title: "Topup Reward Campaign with Zalo Chatbot",
    description:
      "Hệ thống đổi thưởng tự động tích hợp Zalo Chatbot cho San Miguel — hiện đại hóa trải nghiệm đổi quà.",
    tags: ["Zalo Chatbot", "Reward Automation"],
    image: "/images/sanmiguel.jpg",
  },
];

export const VietGuysCaseStudies = () => {
  const [active, setActive] = useState(0);

  return (
    <section
      id="vg-case-studies"
      className="relative overflow-hidden bg-background py-20 md:py-28"
    >
      <div className="container-tight">
        <div className="mx-auto max-w-3xl text-center">
          <span className="chapter-eyebrow">Case studies</span>
          <h2 className="heading-section mt-3">
            <span className="text-foreground">Khách hàng của </span>
            <span className="bg-gradient-to-r from-[hsl(var(--primary))] to-[hsl(var(--accent))] bg-clip-text text-transparent">
              VietGuys
            </span>
          </h2>
          <p className="mt-4 text-base text-muted-foreground">
            Những thương hiệu hàng đầu tin chọn VietGuys cho hạ tầng tin nhắn doanh nghiệp.
          </p>
        </div>

        {/* Expandable row */}
        <div className="mt-12 flex h-[460px] w-full gap-3 md:h-[520px]">
          {cases.map((c) => {
            const isActive = active === c.id;
            return (
              <button
                key={c.id}
                type="button"
                onMouseEnter={() => setActive(c.id)}
                onFocus={() => setActive(c.id)}
                onClick={() => setActive(c.id)}
                aria-expanded={isActive}
                className="vg-chamfer-card group relative h-full min-w-0 overflow-hidden border border-border bg-foreground/90 text-left text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[hsl(var(--primary))]/50"
                style={{
                  flex: isActive ? 3.8 : 1,
                  transition: "flex 0.55s cubic-bezier(0.4, 0, 0.2, 1)",
                  backgroundColor: c.color,
                }}
              >
                {/* Background image */}
                <img
                  src={c.image}
                  alt={c.brand}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover opacity-70 transition-transform duration-700 group-hover:scale-105"
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).style.display = "none";
                  }}
                />

                {/* Dark gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/40 to-black/85" />

                {/* Brand color tint on collapsed */}
                <div
                  className="absolute inset-0 transition-opacity duration-500"
                  style={{
                    background: `linear-gradient(180deg, ${c.color}00 0%, ${c.color}cc 100%)`,
                    opacity: isActive ? 0 : 0.55,
                  }}
                />

                {/* Collapsed: vertical brand label */}
                <div
                  className="absolute inset-0 flex items-end justify-center pb-6 transition-opacity duration-300"
                  style={{ opacity: isActive ? 0 : 1, pointerEvents: isActive ? "none" : "auto" }}
                >
                  <span
                    className="font-display text-[13px] font-bold uppercase tracking-[0.28em] text-white"
                    style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
                  >
                    {c.brand}
                  </span>
                </div>

                {/* Expanded content */}
                <div
                  className="absolute inset-0 flex flex-col justify-end p-6 md:p-8"
                  style={{
                    maxHeight: isActive ? "100%" : "0%",
                    opacity: isActive ? 1 : 0,
                    transition:
                      "opacity 0.45s ease 0.15s, max-height 0.55s cubic-bezier(0.4,0,0.2,1)",
                    pointerEvents: isActive ? "auto" : "none",
                  }}
                >
                  <div className="flex items-center gap-3">
                    <span
                      className="inline-flex h-10 w-10 items-center justify-center rounded-md font-display text-lg font-extrabold text-white shadow-md"
                      style={{ backgroundColor: c.color }}
                    >
                      {c.abbr}
                    </span>
                    <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white/80">
                      {c.brand}
                    </span>
                  </div>

                  <div className="mt-5">
                    <div className="font-display text-3xl font-extrabold leading-none tracking-tight text-[hsl(35_100%_70%)] md:text-4xl">
                      {c.metric}
                    </div>
                    <div className="mt-1 text-[11.5px] font-semibold uppercase tracking-wider text-white/80">
                      {c.metricLabel}
                    </div>
                  </div>

                  <h3 className="mt-4 font-display text-xl font-bold leading-tight text-white md:text-2xl">
                    {c.title}
                  </h3>
                  <p className="mt-2 max-w-xl text-sm leading-relaxed text-white/85">
                    {c.description}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {c.tags.map((t) => (
                      <span
                        key={t}
                        className="rounded-full bg-white/10 px-2.5 py-1 text-[11px] font-semibold text-white/90 ring-1 ring-white/15 backdrop-blur"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <span className="vg-cta-slant mt-6 inline-flex w-fit items-center gap-2 rounded-full bg-[hsl(var(--accent))] px-5 py-2.5 text-xs font-semibold text-[hsl(var(--accent-foreground))] transition-transform group-hover:-translate-y-0.5">
                    Read case study
                    <ArrowRight className="h-3.5 w-3.5" />
                  </span>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default VietGuysCaseStudies;
