/**
 * Solutions — extensible service grid.
 *
 * TO ADD A NEW SERVICE: append one entry to the `services` array below.
 * The grid automatically reflows to 1 / 2 / 3 columns.
 */
import { Link } from "react-router-dom";
import {
  ArrowUpRight,
  MessageSquare,
  MessageCircle,
  Mail,
  ShieldCheck,
  Sparkles,
  Send,
  type LucideIcon,
} from "lucide-react";

type Service = {
  id: string;
  icon: LucideIcon;
  name: string;
  tagline: string;
  bullets: string[];
  href: string;
};

const services: Service[] = [
  {
    id: "sms",
    icon: MessageSquare,
    name: "SMS Brandname",
    tagline: "Branded transactional & promotional SMS via direct carrier routes.",
    bullets: ["Sub-second OTP delivery", "Whitelisted sender IDs", "99.95% uptime SLA"],
    href: "/solutions/sms-brandname",
  },
  {
    id: "zalo",
    icon: MessageCircle,
    name: "Zalo ZNS",
    tagline: "Verified templates to 74M+ Vietnamese Zalo users.",
    bullets: ["Zalo Trusted Partner", "Rich template library", "Two-way conversation"],
    href: "/solutions/zalo-zbs",
  },
  {
    id: "viber",
    icon: Send,
    name: "Viber Business",
    tagline: "Rich-media business messages across the APAC Viber base.",
    bullets: ["Buttons, cards, media", "Read receipts", "Cross-border ready"],
    href: "/solutions",
  },
  {
    id: "email",
    icon: Mail,
    name: "Email",
    tagline: "Transactional and lifecycle email at carrier-grade deliverability.",
    bullets: ["DKIM/DMARC enforced", "Inbox warm-up", "Deliverability dashboard"],
    href: "/solutions",
  },
  {
    id: "otp",
    icon: ShieldCheck,
    name: "OTP & Alerts",
    tagline: "Mission-critical authentication and real-time alerts.",
    bullets: ["Multi-channel fallback", "<2s delivery", "PCI-aware routing"],
    href: "/solutions/otp-alerts",
  },
  {
    id: "ai",
    icon: Sparkles,
    name: "AI Campaigns",
    tagline: "Audience segmentation, send-time, and copy optimised by AI.",
    bullets: ["Plain-language segments", "Auto send-time", "Lift attribution"],
    href: "/solutions/ai-campaigns",
  },
];

export const Solutions = () => {
  return (
    <section id="solutions" className="relative overflow-hidden bg-background py-24 md:py-32">
      <div className="container-tight">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow justify-center">Solutions</span>
          <h2 className="heading-section mt-4 text-balance">
            One brand. Every channel your customers actually use.
          </h2>
          <p className="mt-4 text-base text-muted-foreground">
            Built to plug straight into your CRM, CDP, and product. Mix any combination — pay only for what you send.
          </p>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <ServiceCard key={s.id} service={s} />
          ))}
        </div>
      </div>
    </section>
  );
};

const ServiceCard = ({ service }: { service: Service }) => {
  const { icon: Icon, name, tagline, bullets, href } = service;
  return (
    <Link
      to={href}
      className="group relative flex flex-col overflow-hidden rounded-3xl border border-border bg-card p-6 shadow-[var(--shadow-soft)] transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-[var(--shadow-glow)]"
    >
      <span className="grid h-12 w-12 place-items-center rounded-2xl bg-[hsl(var(--primary-soft))] text-[hsl(var(--primary-deep))]">
        <Icon className="h-5 w-5" />
      </span>

      <h3 className="mt-5 font-display text-xl font-bold tracking-tight text-foreground">
        {name}
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{tagline}</p>

      <ul className="mt-5 space-y-2">
        {bullets.map((b) => (
          <li key={b} className="v-bullet text-sm text-foreground">
            {b}
          </li>
        ))}
      </ul>

      <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-[hsl(var(--accent-deep))]">
        Learn more
        <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
      </span>
    </Link>
  );
};
