import { MessageSquare, Sparkles, Brain, Database, ArrowUpRight, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const cards = [
  {
    icon: MessageSquare,
    title: "SMS Brandname",
    href: "/solutions/sms-brandname",
    desc: "High-volume branded messaging for OTP, transactional alerts, and promotions via direct carrier routes.",
  },
  {
    icon: Sparkles,
    title: "Zalo ZBS",
    href: "/solutions/zalo-zbs",
    desc: "Reach Vietnam's 74 million Zalo users with verified, high-deliverability transactional and promotional templates.",
    badge: "Strategic pick",
    featured: true,
  },
  {
    icon: Brain,
    title: "AI Campaign Services",
    href: "/solutions/ai-campaigns",
    desc: "Intelligent audience segmentation, send-time optimisation, and real-time campaign analytics powered by AI.",
    badge: "New",
    featured: true,
  },
  {
    icon: Database,
    title: "PangoCDP",
    href: "/solutions/pangodcp",
    desc: "Unified customer data platform for cross-channel personalisation and journey orchestration.",
  },
];

export const Solutions = () => {
  return (
    <section id="solutions" className="py-24 md:py-32">
      <div className="container-tight">
        <div className="max-w-2xl">
          <span className="eyebrow">Solutions</span>
          <h2 className="heading-section mt-4 text-balance">
            Everything your brand needs to reach customers in Vietnam
          </h2>
          <p className="mt-4 text-base text-muted-foreground">
            From transactional alerts to AI-powered campaign orchestration.
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {cards.map(({ icon: Icon, title, href, desc, badge, featured }) => (
            <Link
              key={title}
              to={href}
              className={`group relative overflow-hidden rounded-3xl border bg-background p-7 transition-all duration-300 hover:-translate-y-1 ${
                featured
                  ? "border-primary/50 shadow-[var(--shadow-glow)]"
                  : "border-border shadow-[var(--shadow-soft)] hover:border-primary/30"
              }`}
            >
              {badge && (
                <span
                  className={`absolute right-5 top-5 rounded-full px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider ${
                    badge === "New"
                      ? "bg-[hsl(var(--accent))] text-[hsl(var(--accent-foreground))]"
                      : "bg-primary text-primary-foreground"
                  }`}
                >
                  {badge}
                </span>
              )}

              <div className="flex items-center gap-3">
                <span
                  className={`grid h-12 w-12 place-items-center rounded-2xl ${
                    featured
                      ? "bg-primary text-primary-foreground"
                      : "bg-[hsl(var(--primary-soft))] text-[hsl(var(--primary-deep))]"
                  }`}
                >
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="text-xl font-bold tracking-tight text-foreground">{title}</h3>
              </div>

              <p className="mt-5 text-sm leading-relaxed text-muted-foreground">{desc}</p>

              <div className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
                Learn more
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </div>

              <span className="pointer-events-none absolute right-0 top-0 h-32 w-32 -translate-y-12 translate-x-12 rounded-full bg-[hsl(var(--accent))]/0 blur-3xl transition-all duration-500 group-hover:bg-[hsl(var(--accent))]/10" />
            </Link>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            to="/solutions"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline"
          >
            View all solutions <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};
