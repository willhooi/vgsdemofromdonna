import { Mail, Phone, MapPin, ArrowRight, Facebook, Linkedin, MessageCircle, Sparkles, ExternalLink } from "lucide-react";
import { Logo } from "./Logo";
import { Button } from "@/components/ui/button";
import accreteLogo from "@/assets/brand/accrete-logo.png";
import isoLogo from "@/assets/certs/iso-27001-v2.png";
import vncertLogo from "@/assets/certs/vncert-new.jpg";
import vntaLogo from "@/assets/certs/vnta-new.png";
import zaloLogo from "@/assets/certs/zalo-trusted-v3.png";

const aiServices = [
  { t: "AI Campaign Services", h: "/solutions/ai-campaigns" },
  { t: "PangoCDP", h: "/solutions/pangodcp" },
  { t: "Customized AI Solutions", h: "/solutions/customized-ai" },
];

const messaging = [
  { t: "SMS Brandname", h: "/solutions/sms-brandname" },
  { t: "Voice Brandname", h: "/solutions/voice-brandname" },
  { t: "Viber Message", h: "/solutions/viber" },
  { t: "Zalo ZBS Template", h: "/solutions/zalo-zbs" },
  { t: "Email Marketing", h: "/solutions/email-marketing" },
];

const otpVerification = [
  { t: "OTPBox", h: "/solutions/otpbox" },
  { t: "Voice OTP", h: "/solutions/voice-otp" },
  { t: "Email OTP", h: "/solutions/email-otp" },
];

const topup = [
  { t: "Mobile Topup", h: "/solutions/mobile-topup" },
  { t: "Customized Reward Solutions", h: "/solutions/rewards" },
];

const customize = [
  { t: "Zalo Engagement — MiniApp", h: "/solutions/zalo-miniapp" },
  { t: "Smart Warranty", h: "/solutions/smart-warranty" },
  { t: "Automation System", h: "/solutions/automation" },
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

const LinkList = ({ items }: { items: { t: string; h: string }[] }) => (
  <ul className="mt-4 space-y-2.5">
    {items.map((i) => (
      <li key={i.t}>
        <a href={i.h} className="text-sm text-muted-foreground transition-colors hover:text-primary">
          {i.t}
        </a>
      </li>
    ))}
  </ul>
);

const ColHeading = ({ children }: { children: React.ReactNode }) => (
  <h4 className="text-xs font-bold uppercase tracking-[0.18em] text-foreground">{children}</h4>
);

export const Footer = () => (
  <footer className="border-t border-border bg-background">
    {/* BAND 1 — Accrete backing */}
    <div className="bg-[var(--gradient-brand)] text-primary-foreground">
      <div className="container-tight flex flex-col items-center gap-5 py-8 md:flex-row md:justify-between md:py-10">
        <div className="flex items-center gap-5">
          <img
            src={accreteLogo}
            alt="Accrete Inc."
            className="h-12 w-auto md:h-14"
            loading="lazy"
            decoding="async"
          />
          <div>
            <div className="text-base font-bold md:text-lg">Backed by Accrete Inc. Japan</div>
            <div className="text-xs text-primary-foreground/85 md:text-sm">
              Tokyo Stock Exchange Listed · Forbes Asia &ldquo;Best Under A Billion&rdquo;
            </div>
          </div>
        </div>
        <a
          href="https://www.accrete-inc.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/30 bg-primary-foreground/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] transition-colors hover:bg-primary-foreground/20"
        >
          Learn more <ExternalLink className="h-3.5 w-3.5" />
        </a>
      </div>
    </div>

    {/* BAND 2 — Link grid */}
    <div className="container-tight space-y-10 py-14">
      {/* Row A — Brand + AI Services highlight */}
      <div className="grid gap-8 lg:grid-cols-[1.4fr_2fr]">
        {/* Brand & contact */}
        <div>
          <Logo />
          <p className="mt-4 text-sm text-muted-foreground">
            Enterprise messaging & AI engagement — trusted by 5,000+ brands across Vietnam.
          </p>
          <ul className="mt-5 space-y-2.5 text-sm text-muted-foreground">
            <li>
              <a href="mailto:sales@vietguys.biz" className="inline-flex items-center gap-2 hover:text-primary">
                <Mail className="h-4 w-4" /> sales@vietguys.biz
              </a>
            </li>
            <li>
              <a href="tel:+842873008027" className="inline-flex items-center gap-2 hover:text-primary">
                <Phone className="h-4 w-4" /> 028 7300 8027
              </a>
            </li>
            <li className="flex items-start gap-2">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
              <span>1st Floor & T Floor, HBT Building, 456–458 Hai Ba Trung St., Tan Dinh Ward, HCMC.</span>
            </li>
          </ul>
          <Button variant="cta" size="default" asChild className="mt-5">
            <a href="/demo">
              Request a Demo <ArrowRight className="h-4 w-4" />
            </a>
          </Button>
        </div>

        {/* AI Services (highlighted banner) */}
        <div className="relative overflow-hidden rounded-2xl border border-primary/30 bg-gradient-to-br from-primary/10 via-primary/5 to-transparent p-6 ring-1 ring-primary/10">
          <div className="flex items-center gap-2">
            <Sparkles className="h-4 w-4 text-primary" />
            <ColHeading>
              <span className="text-primary">AI Services</span>
            </ColHeading>
            <span className="ml-auto rounded-full bg-primary px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-primary-foreground">
              New
            </span>
          </div>
          <p className="mt-3 text-sm text-muted-foreground">
            Next-gen automation, data activation & intelligent campaigns powered by AI.
          </p>
          <ul className="mt-4 grid gap-2.5 sm:grid-cols-2">
            {aiServices.map((i) => (
              <li key={i.t}>
                <a
                  href={i.h}
                  className="inline-flex items-center gap-2 text-sm font-medium text-foreground transition-colors hover:text-primary"
                >
                  <ArrowRight className="h-3.5 w-3.5 text-primary" /> {i.t}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Row B — Service groups + Company */}
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
        <div>
          <ColHeading>Messaging Solution</ColHeading>
          <LinkList items={messaging} />
        </div>
        <div>
          <ColHeading>OTP Verification</ColHeading>
          <LinkList items={otpVerification} />
        </div>
        <div>
          <ColHeading>Topup</ColHeading>
          <LinkList items={topup} />
        </div>
        <div>
          <ColHeading>Customize Solutions</ColHeading>
          <LinkList items={customize} />
        </div>
        <div>
          <ColHeading>Company</ColHeading>
          <LinkList items={company} />
        </div>
      </div>
    </div>


    {/* BAND 3 — Certifications */}
    <div className="border-t border-border">
      <div className="container-tight py-8">
        <div className="mb-5 flex items-center justify-center gap-3">
          <div className="h-px flex-1 bg-border" />
          <span className="text-[11px] font-bold uppercase tracking-[0.22em] text-muted-foreground">
            Certified & Trusted
          </span>
          <div className="h-px flex-1 bg-border" />
        </div>
        <ul className="grid grid-cols-2 gap-3 md:grid-cols-4">
          {certs.map((c) => (
            <li
              key={c.name}
              className="group flex items-center gap-3 rounded-xl border border-border bg-background p-3 transition-all hover:border-primary/40 hover:shadow-[var(--shadow-soft)]"
            >
              <img
                src={c.logo}
                alt={c.name}
                className="h-10 w-10 shrink-0 object-contain grayscale transition-all group-hover:grayscale-0"
                loading="lazy"
                decoding="async"
              />
              <span className="text-xs font-semibold leading-tight text-foreground">{c.name}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>

    {/* BAND 4 — Legal bar */}
    <div className="border-t border-border">
      <div className="container-tight flex flex-col items-start justify-between gap-4 py-6 text-xs text-muted-foreground md:flex-row md:items-center">
        <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
          <span>© {new Date().getFullYear()} VietGuys Joint Stock Company</span>
          <a href="/privacy" className="hover:text-foreground">Privacy Policy</a>
          <a href="/terms" className="hover:text-foreground">Terms of Service</a>
          <a href="/sitemap" className="hover:text-foreground">Sitemap</a>
          <span className="text-primary">PDPL 2023 Compliant</span>
        </div>
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
          <div className="inline-flex overflow-hidden rounded-full border border-border text-xs font-semibold">
            <button className="bg-primary px-3 py-1.5 text-primary-foreground">EN</button>
            <button className="px-3 py-1.5 text-muted-foreground hover:text-foreground">VI</button>
          </div>
        </div>
      </div>
    </div>
  </footer>
);
