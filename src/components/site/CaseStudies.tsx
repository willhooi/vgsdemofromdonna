import { ArrowUpRight, TrendingUp, Users, Zap } from "lucide-react";
import { VWatermark } from "@/components/brand/VWatermark";

const cases = [
  {
    industry: "Tài chính – Ngân hàng",
    client: "Ngân hàng TMCP hàng đầu",
    title: "Tăng tỷ lệ kích hoạt thẻ tín dụng qua kênh OTT đa lớp",
    summary:
      "Triển khai kịch bản fallback SMS Brandname → Zalo ZNS → Viber Message giúp đảm bảo 100% khách hàng nhận được thông tin kích hoạt thẻ trong vòng 24 giờ.",
    metrics: [
      { icon: TrendingUp, label: "Tăng tỷ lệ kích hoạt", value: "+38%" },
      { icon: Zap, label: "Tốc độ gửi", value: "<3s" },
      { icon: Users, label: "Khách hàng tiếp cận", value: "1.2M+" },
    ],
    accent: "primary" as const,
  },
  {
    industry: "Bán lẻ – TMĐT",
    client: "Chuỗi bán lẻ điện máy Top 3 Việt Nam",
    title: "Cá nhân hoá CSKH bằng PangoCDP & Behavioural AI",
    summary:
      "Hợp nhất dữ liệu 8 triệu khách hàng từ POS, App, Website. AI phân tích hành vi để gửi thông điệp đúng người – đúng kênh – đúng thời điểm trên SMS, Zalo và Email.",
    metrics: [
      { icon: TrendingUp, label: "Tăng doanh thu / chiến dịch", value: "+27%" },
      { icon: Zap, label: "Giảm chi phí gửi tin", value: "-41%" },
      { icon: Users, label: "Phân khúc tự động", value: "120+" },
    ],
    accent: "accent" as const,
  },
  {
    industry: "FMCG – Hospitality",
    client: "Thương hiệu F&B đa quốc gia",
    title: "Loyalty 360° trên Zalo Mini App với OTP & Smart Warranty",
    summary:
      "Tích hợp xác thực OTPBox, ZNS chăm sóc và Mobile Topup quà tặng để đẩy mạnh chương trình thành viên, đem lại trải nghiệm liền mạch không cần cài app.",
    metrics: [
      { icon: Users, label: "Thành viên mới / tháng", value: "85K" },
      { icon: TrendingUp, label: "Tỷ lệ quay lại", value: "+52%" },
      { icon: Zap, label: "Thời gian xác thực", value: "0.8s" },
    ],
    accent: "primary" as const,
  },
];

export const CaseStudies = () => (
  <section id="case-studies" className="relative overflow-hidden bg-secondary/40 py-20 md:py-28">
    <VWatermark
      tone="brand"
      className="absolute -left-24 -top-10 h-[400px] w-[400px] opacity-[0.035]"
    />
    <div className="container-tight relative">
      <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
        <div className="max-w-2xl">
          <span className="chapter-eyebrow">06 — Kết quả thật</span>
          <h2 className="heading-section mt-3">
            Kết quả thực tế từ các <span className="italic text-[hsl(var(--accent-deep))]">enterprise</span> hàng đầu
          </h2>
          <p className="mt-4 text-base text-muted-foreground">
            Mỗi giải pháp được đo lường bằng KPI kinh doanh cụ thể — không phải chỉ là số tin nhắn gửi đi.
          </p>
        </div>
        <a
          href="#contact"
          className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary-deep"
        >
          Xem tất cả case studies <ArrowUpRight className="h-4 w-4" />
        </a>
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {cases.map((c) => (
          <article
            key={c.title}
            className="group flex flex-col rounded-2xl border border-border bg-background p-6 transition-all hover:-translate-y-1 hover:border-primary/30 hover:shadow-[var(--shadow-card)]"
          >
            <div className="flex items-center gap-2">
              <span
                className={`inline-block h-1.5 w-1.5 rounded-full ${
                  c.accent === "accent" ? "bg-accent" : "bg-primary"
                }`}
              />
              <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                {c.industry}
              </span>
            </div>

            <h3 className="mt-4 text-lg font-bold leading-snug text-foreground">{c.title}</h3>
            <p className="mt-1 text-xs font-medium uppercase tracking-wider text-primary">{c.client}</p>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{c.summary}</p>

            <div className="mt-6 grid grid-cols-3 gap-3 border-t border-border pt-5">
              {c.metrics.map((m) => (
                <div key={m.label}>
                  <m.icon className={`h-4 w-4 ${c.accent === "accent" ? "text-accent" : "text-primary"}`} />
                  <p className="mt-2 text-lg font-extrabold tracking-tight text-foreground">{m.value}</p>
                  <p className="mt-0.5 text-[11px] leading-tight text-muted-foreground">{m.label}</p>
                </div>
              ))}
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);
