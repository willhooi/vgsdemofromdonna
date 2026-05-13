import { Landmark, Plane, ShoppingCart, Truck, ArrowUpRight, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { VWatermark } from "@/components/brand/VWatermark";

const cards = [
  {
    icon: Landmark,
    title: "Banking and Finance",
    href: "/industries/banking",
    desc: "OTP, fraud alerts, and customer notifications for Vietnam's banks and insurers.",
  },
  {
    icon: Plane,
    title: "Airlines and Travel",
    href: "/industries/airlines",
    desc: "Flight updates, booking confirmations, and loyalty messaging at scale.",
  },
  {
    icon: ShoppingCart,
    title: "Retail and E-commerce",
    href: "/industries/retail",
    desc: "Promotional campaigns, order updates, and cart recovery across SMS and Zalo.",
  },
  {
    icon: Truck,
    title: "Logistics and Enterprise",
    href: "/industries/logistics",
    desc: "Delivery notifications, workforce alerts, and bulk operational messaging.",
  },
];

export const Industries = () => {
  return (
    <section id="industries" className="relative overflow-hidden bg-secondary/30 py-24 md:py-32">
      <VWatermark
        tone="orange"
        className="absolute -right-16 bottom-12 h-[360px] w-[360px] opacity-[0.04]"
      />
      <div className="container-tight relative">
        <div className="max-w-2xl">
          <span className="chapter-eyebrow">04 — Cho ai</span>
          <h2 className="heading-section mt-4 text-balance">
            Được xây dựng cho các ngành dẫn đầu Việt Nam
          </h2>
          <p className="mt-4 text-base text-muted-foreground">
            Use case theo ngành, đúc kết từ 19 năm phục vụ enterprise.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map(({ icon: Icon, title, href, desc }) => (
            <Link
              key={title}
              to={href}
              className="group relative overflow-hidden rounded-3xl border border-border bg-background p-6 shadow-[var(--shadow-soft)] transition-all duration-300 hover:-translate-y-1 hover:border-primary/30"
            >
              <div className="flex items-center gap-3">
                <span className="grid h-11 w-11 place-items-center rounded-2xl bg-[hsl(var(--primary-soft))] text-[hsl(var(--primary-deep))]">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="text-lg font-bold tracking-tight text-foreground">{title}</h3>
              </div>

              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{desc}</p>

              <div className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
                Learn more
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </div>

              <span className="pointer-events-none absolute right-0 top-0 h-32 w-32 -translate-y-12 translate-x-12 rounded-full bg-[hsl(var(--accent))]/0 blur-3xl transition-all duration-500 group-hover:bg-[hsl(var(--accent))]/10" />
            </Link>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            to="/contact"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline"
          >
            Don't see your sector? Talk to us <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};
