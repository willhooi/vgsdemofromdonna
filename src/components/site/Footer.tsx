import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";
import { Logo } from "./Logo";
import { Button } from "@/components/ui/button";

const solutions = [
  { t: "SMS Brandname", h: "/solutions/sms-brandname" },
  { t: "Zalo ZBS", h: "/solutions/zalo-zbs" },
  { t: "AI Campaign Services", h: "/solutions/ai-campaigns" },
  { t: "PangoCDP", h: "/solutions/pangodcp" },
  { t: "OTP and Alerts", h: "/solutions/otp-alerts" },
];

const company = [
  { t: "About Us", h: "/about" },
  { t: "Certifications", h: "/about/certifications" },
  { t: "Careers", h: "/about/careers" },
  { t: "Resources", h: "/resources" },
  { t: "Case Studies", h: "/resources/case-studies" },
];

export const Footer = () => (
  <footer className="border-t border-border bg-background py-14">
    <div className="container-tight grid gap-10 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
      {/* Column 1 */}
      <div>
        <Logo />
        <ul className="mt-5 space-y-2 text-sm text-muted-foreground">
          <li className="flex items-start gap-2">
            <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
            Ho Chi Minh City, Vietnam
          </li>
          <li>Backed by Accrete Inc. Japan (TSE Listed)</li>
          <li>© {new Date().getFullYear()} VietGuys Joint Stock Company</li>
        </ul>
        <div className="mt-5 inline-flex overflow-hidden rounded-full border border-border text-xs font-semibold">
          <button className="bg-primary px-3 py-1.5 text-primary-foreground">EN</button>
          <button className="px-3 py-1.5 text-muted-foreground hover:text-foreground">VI</button>
        </div>
      </div>

      {/* Column 2 */}
      <div>
        <h4 className="text-xs font-bold uppercase tracking-[0.18em] text-foreground">Solutions</h4>
        <ul className="mt-4 space-y-2.5">
          {solutions.map((i) => (
            <li key={i.t}>
              <a href={i.h} className="text-sm text-muted-foreground transition-colors hover:text-primary">
                {i.t}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Column 3 */}
      <div>
        <h4 className="text-xs font-bold uppercase tracking-[0.18em] text-foreground">Company</h4>
        <ul className="mt-4 space-y-2.5">
          {company.map((i) => (
            <li key={i.t}>
              <a href={i.h} className="text-sm text-muted-foreground transition-colors hover:text-primary">
                {i.t}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Column 4 */}
      <div>
        <h4 className="text-xs font-bold uppercase tracking-[0.18em] text-foreground">Contact</h4>
        <ul className="mt-4 space-y-2.5 text-sm text-muted-foreground">
          <li>
            <a href="mailto:sales@vietguys.biz" className="inline-flex items-center gap-2 hover:text-primary">
              <Mail className="h-4 w-4" /> sales@vietguys.biz
            </a>
          </li>
          <li>
            <a href="tel:+842839868899" className="inline-flex items-center gap-2 hover:text-primary">
              <Phone className="h-4 w-4" /> +84 28 3986 8899
            </a>
          </li>
          <li className="flex items-start gap-2">
            <MapPin className="mt-0.5 h-4 w-4 shrink-0" />
            <span>Level 8, 123 Nguyen Dinh Chieu, District 3, Ho Chi Minh City</span>
          </li>
        </ul>
        <Button variant="cta" size="default" asChild className="mt-5">
          <a href="/demo">
            Request a Demo <ArrowRight className="h-4 w-4" />
          </a>
        </Button>
      </div>
    </div>

    <div className="container-tight mt-12 flex flex-col items-start justify-between gap-3 border-t border-border pt-6 text-xs text-muted-foreground md:flex-row md:items-center">
      <div className="flex flex-wrap gap-x-5 gap-y-2">
        <a href="/privacy" className="hover:text-foreground">Privacy Policy</a>
        <a href="/terms" className="hover:text-foreground">Terms of Service</a>
        <a href="/sitemap" className="hover:text-foreground">Sitemap</a>
        <span className="text-primary">PDPL 2023 Compliant</span>
      </div>
    </div>
  </footer>
);
