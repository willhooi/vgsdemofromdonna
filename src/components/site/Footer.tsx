import { Mail, Phone, MapPin, ArrowRight, Facebook, Linkedin, MessageCircle, ExternalLink } from "lucide-react";
import { Logo } from "./Logo";
import { Button } from "@/components/ui/button";
import accreteLogo from "@/assets/brand/accrete-logo.png";
import isoLogo from "@/assets/certs/iso-27001-v2.png";
import vncertLogo from "@/assets/certs/vncert-new.jpg";
import vntaLogo from "@/assets/certs/vnta-new.png";
import zaloLogo from "@/assets/certs/zalo-trusted-v3.png";

const messaging = [
  { t: "SMS Brandname", h: "/solutions/sms-brandname" },
  { t: "Voice Brandname", h: "/solutions/voice-brandname" },
  { t: "Viber Message", h: "/solutions/viber" },
  { t: "Zalo ZBS Template", h: "/solutions/zalo-zbs" },
  { t: "Email Marketing", h: "/solutions/email-marketing" },
];

const aiDigital = [
  { t: "AI Campaign Services", h: "/solutions/ai-campaigns", badge: "AI" as const },
  { t: "PangoCDP", h: "/solutions/pangodcp", badge: "NEW" as const },
  { t: "Customized AI Solutions", h: "/solutions/customized-ai" },
  { t: "Zalo Engagement — MiniApp", h: "/solutions/zalo-miniapp" },
  { t: "Smart Warranty", h: "/solutions/smart-warranty" },
  { t: "Automation System", h: "/solutions/automation" },
];

const verification = [
  { t: "OTPBox", h: "/solutions/otpbox" },
  { t: "Voice OTP", h: "/solutions/voice-otp" },
  { t: "Email OTP", h: "/solutions/email-otp" },
];

const topup = [
  { t: "Mobile Topup", h: "/solutions/mobile-topup" },
  { t: "Customized Rewards", h: "/solutions/rewards" },
];

const company = [
  { t: "About Us", h: "/about" },
  { t: "Strategic Partnership", h: "/about/strategic-partnership" },
  { t: "Careers", h: "/about/careers" },
  { t: "Case Studies", h: "/case-studies" },
  { t: "Market Insights", h: "/market-insights" },
];

const certs = [
  { logo: isoLogo, name: "ISO/IEC 27001:2013" },
  { logo: vncertLogo, name: "VNCERT/CC" },
  { logo: vntaLogo, name: "VNTA Licensed" },
  { logo: zaloLogo, name: "Zalo Trusted Partner" },
];

const socials = [
  { Icon: Facebook, label: "Facebook", h: "https://www.facebook.com/VIETGUYS" },
  { Icon: Linkedin, label: "LinkedIn", h: "https://www.linkedin.com/company/vietguys/" },
  { Icon: MessageCircle, label: "Zalo", h: "https://zalo.me/4404293319006178133" },
];

const ColHeading = ({ children }: { children: React.ReactNode }) => (
  <h4 className="text-xs font-bold uppercase tracking-[0.18em] text-primary">{children}</h4>
);

const LinkItem = ({ t, h }: { t: string; h: string }) => (
  <li>
    <a href={h} className="text-sm text-muted-foreground transition-colors hover:text-primary">
      {t}
    </a>
  </li>
);

export const Footer = () => (
  <footer className="border-t border-border bg-background">
    {/* BAND 1 — Accrete backing */}
    <div className="border-b border-primary/10 bg-primary/5">
      <div className="container-tight flex flex-col items-center gap-5 py-6 text-center md:flex-row md:justify-center md:gap-8 md:py-7 md:text-left">
        <div className="flex items-center gap-3">
          <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-muted-foreground">
            A member of
          </span>
          <img src={accreteLogo} alt="Accrete Inc." className="h-7 w-auto" loading="lazy" decoding="async" />
        </div>
        <p className="max-w-2xl text-sm leading-relaxed text-muted-foreground">
          Backed by Japan&rsquo;s leading SMS gateway group, recognized by{" "}
          <span className="font-semibold text-foreground">Forbes Asia</span> among Asia&rsquo;s{" "}
          <span className="font-semibold text-foreground">Best Under A Billion</span> companies — Tokyo Stock Exchange Listed.
        </p>
        <a
          href="https://www.accrete-inc.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex shrink-0 items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-primary hover:text-primary/80"
        >
          Learn more <ExternalLink className="h-3.5 w-3.5" />
        </a>
      </div>
    </div>

    {/* BAND 2 — Main grid */}
    <div className="container-tight py-14 lg:py-16">
      <div className="grid gap-12 lg:grid-cols-12">
        {/* Brand & contact */}
        <div className="space-y-7 lg:col-span-4">
          <Logo />
          <p className="text-sm font-semibold leading-relaxed text-foreground">
            Backed by Accrete Inc. Japan (TOKYO STOCK EXCHANGE Listed)
          </p>
          <ul className="space-y-3.5 text-sm">
            <li className="flex items-start gap-3">
              <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
              <span className="text-muted-foreground">
                1st Floor & T Floor, HBT Building, 456–458 Hai Ba Trung St., Tan Dinh Ward, HCMC.
              </span>
            </li>
            <li>
              <a href="mailto:sales@vietguys.biz" className="inline-flex items-center gap-3 font-medium text-foreground hover:text-primary">
                <Mail className="h-5 w-5 text-primary" /> sales@vietguys.biz
              </a>
            </li>
            <li>
              <a href="tel:+842873008027" className="inline-flex items-center gap-3 font-medium text-foreground hover:text-primary">
                <Phone className="h-5 w-5 text-primary" /> (+84) 28 7300 8027
              </a>
            </li>
          </ul>
          <Button variant="cta" size="default" asChild>
            <a href="/demo">
              Request a Demo <ArrowRight className="h-4 w-4" />
            </a>
          </Button>
        </div>

        {/* Links Area */}
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4 lg:col-span-8">
          {/* Messaging */}
          <div className="space-y-5">
            <ColHeading>Messaging Solution</ColHeading>
            <ul className="space-y-3">
              {messaging.map((i) => <LinkItem key={i.t} {...i} />)}
            </ul>
          </div>

          {/* AI & Digital */}
          <div className="space-y-5">
            <ColHeading>AI &amp; Digital</ColHeading>
            <ul className="space-y-3">
              {aiDigital.map((i) =>
                i.badge ? (
                  <li key={i.t} className="flex items-center gap-2">
                    <a href={i.h} className="text-sm font-semibold text-foreground hover:text-primary transition-colors">
                      {i.t}
                    </a>
                    <span
                      className={
                        i.badge === "AI"
                          ? "rounded bg-primary/10 px-1.5 py-0.5 text-[10px] font-bold text-primary"
                          : "rounded bg-[hsl(var(--cta))]/15 px-1.5 py-0.5 text-[10px] font-bold text-[hsl(var(--cta))]"
                      }
                    >
                      {i.badge}
                    </span>
                  </li>
                ) : (
                  <LinkItem key={i.t} t={i.t} h={i.h} />
                )
              )}
            </ul>
          </div>

          {/* Verification + Topup stacked */}
          <div className="space-y-8">
            <div className="space-y-5">
              <ColHeading>Verification</ColHeading>
              <ul className="space-y-3">
                {verification.map((i) => <LinkItem key={i.t} {...i} />)}
              </ul>
            </div>
            <div className="space-y-5">
              <ColHeading>Topup</ColHeading>
              <ul className="space-y-3">
                {topup.map((i) => <LinkItem key={i.t} {...i} />)}
              </ul>
            </div>
          </div>

          {/* Company */}
          <div className="space-y-5">
            <ColHeading>Company</ColHeading>
            <ul className="space-y-3">
              {company.map((i) => <LinkItem key={i.t} {...i} />)}
            </ul>
          </div>
        </div>
      </div>

      {/* Cert + social row */}
      <div className="mt-16 border-t border-border pt-10">
        <div className="flex flex-col items-center justify-between gap-8 lg:flex-row">
          <ul className="flex flex-wrap items-center justify-center gap-x-10 gap-y-5">
            {certs.map((c) => (
              <li
                key={c.name}
                className="group flex items-center gap-2.5 opacity-70 transition-opacity hover:opacity-100"
                title={c.name}
              >
                <img
                  src={c.logo}
                  alt={c.name}
                  className="h-10 w-10 object-contain grayscale transition-all group-hover:grayscale-0"
                  loading="lazy"
                  decoding="async"
                />
                <span className="text-[11px] font-semibold uppercase tracking-wide text-muted-foreground">
                  {c.name}
                </span>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-4">
            <ul className="flex items-center gap-2">
              {socials.map(({ Icon, label, h }) => (
                <li key={label}>
                  <a
                    href={h}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-primary hover:bg-primary hover:text-primary-foreground"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                </li>
              ))}
            </ul>
            <div className="h-6 w-px bg-border" />
            <div className="inline-flex overflow-hidden rounded-full border border-border text-[11px] font-bold">
              <button className="bg-primary px-3 py-1.5 text-primary-foreground">EN</button>
              <button className="px-3 py-1.5 text-muted-foreground hover:text-foreground">VI</button>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* BAND 3 — Legal bar */}
    <div className="border-t border-border bg-muted/30">
      <div className="container-tight flex flex-col items-center justify-between gap-3 py-5 text-xs text-muted-foreground md:flex-row">
        <p>
          © {new Date().getFullYear()} VietGuys Joint Stock Company. Proudly part of Accrete Group. All rights reserved.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-[11px] font-bold uppercase tracking-[0.16em]">
          <a href="/privacy" className="hover:text-primary">Privacy Policy</a>
          <a href="/terms" className="hover:text-primary">Terms of Use</a>
          <a href="/sitemap" className="hover:text-primary">Sitemap</a>
          <span className="text-primary">PDPL 2023</span>
        </div>
      </div>
    </div>
  </footer>
);
