import founderImg from "@/assets/people/founder.jpg";
import supportImg from "@/assets/people/support-lead.jpg";
import engineerImg from "@/assets/people/engineer.jpg";
import { VWatermark } from "@/components/brand/VWatermark";

const people = [
  {
    name: "Anh Minh",
    role: "Founder & CEO",
    img: founderImg,
    quote:
      "Mỗi tin nhắn gửi đi là một lời cam kết — đến đúng người, đúng lúc, đúng cảm xúc.",
    sig: "— 19 năm cùng VietGuys",
  },
  {
    name: "Chị Hương",
    role: "Customer Success Lead",
    img: supportImg,
    quote:
      "Sau mỗi con số là một khách hàng đang chờ. Chúng tôi không bao giờ quên điều đó.",
    sig: "— Hỗ trợ 24/7",
  },
  {
    name: "Anh Khoa",
    role: "Platform Engineer",
    img: engineerImg,
    quote:
      "5 triệu tin nhắn mỗi ngày chạy ổn định không phải may mắn — đó là kỷ luật kỹ thuật.",
    sig: "— Core Platform",
  },
];

export const HumanStory = () => {
  return (
    <section
      id="human-story"
      className="relative overflow-hidden bg-[hsl(var(--accent-soft))]/40 py-24 md:py-32"
    >
      {/* Brand watermark — subtle, behind everything */}
      <VWatermark
        tone="brand"
        className="absolute -right-24 top-12 h-[420px] w-[420px] opacity-[0.04] md:opacity-[0.05]"
      />

      <div className="container-tight relative">
        <div className="max-w-2xl">
          <span className="chapter-eyebrow">05 — Behind the messages</span>
          <h2 className="heading-section mt-4 text-balance">
            Đằng sau mỗi tin nhắn là{" "}
            <span className="italic text-[hsl(var(--accent-deep))]">con người</span>{" "}
            đang lắng nghe.
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground">
            Công nghệ giúp chúng tôi gửi nhanh. Nhưng chính những con người ở
            VietGuys mới là lý do khách hàng quay lại — sau 19 năm vẫn vậy.
          </p>
        </div>

        <div className="mt-16 grid gap-10 md:mt-20 md:grid-cols-3 md:gap-8">
          {people.map((p, i) => (
            <figure
              key={p.name}
              className={`group relative ${
                i === 1 ? "md:mt-12" : i === 2 ? "md:mt-6" : ""
              }`}
            >
              <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-[hsl(var(--primary-soft))]">
                <img
                  src={p.img}
                  alt={`${p.name}, ${p.role} tại VietGuys`}
                  width={800}
                  height={1000}
                  loading="lazy"
                  className="h-full w-full object-cover grayscale-[35%] transition-all duration-700 group-hover:grayscale-0 group-hover:scale-[1.02]"
                />
                {/* Soft brand tint overlay for cohesion */}
                <div
                  className="pointer-events-none absolute inset-0 mix-blend-multiply opacity-25 transition-opacity duration-700 group-hover:opacity-0"
                  style={{
                    background:
                      "linear-gradient(160deg, hsl(var(--primary) / 0.4), hsl(var(--accent) / 0.25))",
                  }}
                />
                {/* Tiny brand mark in corner */}
                <span className="absolute right-3 top-3 inline-flex h-6 w-6 items-center justify-center rounded-full bg-background/90 backdrop-blur">
                  <svg viewBox="0 0 100 100" className="h-3.5 w-3.5">
                    <path d="M8 12 L42 12 L52 64 L48 88 L34 88 Z" fill="hsl(var(--primary))" />
                    <path d="M58 12 L92 12 L70 88 L48 88 L52 64 Z" fill="hsl(var(--accent))" />
                  </svg>
                </span>
              </div>

              <figcaption className="mt-5">
                <blockquote className="font-display text-lg leading-snug text-foreground">
                  <span className="text-[hsl(var(--accent))]">“</span>
                  {p.quote}
                  <span className="text-[hsl(var(--accent))]">”</span>
                </blockquote>
                <div className="mt-4 flex items-baseline justify-between gap-3">
                  <div>
                    <p className="text-sm font-semibold text-foreground">{p.name}</p>
                    <p className="text-xs text-muted-foreground">{p.role}</p>
                  </div>
                  <p className="font-display text-xs italic text-muted-foreground">
                    {p.sig}
                  </p>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
};
