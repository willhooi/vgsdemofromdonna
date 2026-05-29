import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import founderImg from "@/assets/people/founder.jpg";
import supportImg from "@/assets/people/support-lead.jpg";
import engineerImg from "@/assets/people/engineer.jpg";
import { VWatermark } from "@/components/brand/VWatermark";

const panels = [
  { img: founderImg, alt: "Founder của VietGuys" },
  { img: supportImg, alt: "Customer Success Lead tại VietGuys" },
  { img: engineerImg, alt: "Platform Engineer tại VietGuys" },
];

export const AboutHumanHero = () => (
  <section
    className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28"
    style={{ background: "var(--gradient-hero)" }}
  >
    <VWatermark
      tone="brand"
      className="absolute -left-32 -top-10 h-[520px] w-[520px] opacity-[0.05]"
    />

    <div className="container-tight relative">
      <Link
        to="/"
        className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
      >
        <ArrowLeft className="h-4 w-4" /> Back to home
      </Link>

      <div className="mt-8 grid gap-12 lg:grid-cols-[1.1fr_1fr] lg:items-center">
        <div className="max-w-2xl">
          <span className="chapter-eyebrow">About VietGuys</span>
          <h1 className="heading-display mt-4 text-balance">
            19 năm — vẫn là những{" "}
            <span className="italic text-[hsl(var(--accent-deep))]">con người</span>{" "}
            gửi đi từng tin nhắn.
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground md:text-xl">
            Công nghệ giúp chúng tôi gửi nhanh. Nhưng chính những con người ở
            VietGuys — kỹ sư, chuyên viên hỗ trợ, người đồng hành cùng khách hàng
            — mới là lý do thương hiệu Việt quay lại sau gần hai thập kỷ.
          </p>
          <p className="mt-5 text-sm text-muted-foreground">
            Không phải một công ty công nghệ. Là một đội ngũ — đang lắng nghe.
          </p>
        </div>

        <div className="grid grid-cols-3 gap-3 md:gap-4">
          {panels.map((p, i) => (
            <div
              key={p.alt}
              className={`relative overflow-hidden rounded-2xl bg-[hsl(var(--primary-soft))] shadow-[var(--shadow-soft)] ${
                i === 1 ? "mt-8 md:mt-12" : i === 2 ? "mt-4 md:mt-6" : ""
              }`}
              style={{ aspectRatio: "3 / 4" }}
            >
              <img
                src={p.img}
                alt={p.alt}
                loading="eager"
                decoding="async"
                className="h-full w-full object-cover grayscale-[20%]"
              />
              <div
                className="pointer-events-none absolute inset-0 mix-blend-multiply opacity-20"
                style={{
                  background:
                    "linear-gradient(160deg, hsl(var(--primary) / 0.35), hsl(var(--accent) / 0.2))",
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);
