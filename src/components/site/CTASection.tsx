import { ArrowRight, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { trackDemoRequest, trackContactClick } from "@/lib/analytics";

export const CTASection = () => (
  <section id="contact" className="py-20 md:py-28">
    <div className="container-tight">
      <div className="relative overflow-hidden rounded-[2rem] border border-border bg-background p-10 shadow-[var(--shadow-card)] md:p-16">
        <div className="pointer-events-none absolute inset-0 opacity-60" style={{ background: "var(--gradient-hero)" }} />
        <div className="relative grid gap-8 md:grid-cols-[1.4fr_1fr] md:items-center">
          <div>
            <span className="eyebrow">Start the conversation</span>
            <h2 className="heading-section mt-4 text-balance">
              Move beyond the dead contact form.
            </h2>
            <p className="mt-4 max-w-xl text-muted-foreground">
              Talk to a VietGuys engagement strategist. We&apos;ll scan, hypothesise, and assemble
              an outcome-led proposal — in Vietnamese, English, or Japanese.
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <Button variant="cta" size="xl" asChild>
              <a href="#book" onClick={() => trackDemoRequest("cta_strip")}>
                Book a Demo <ArrowRight className="h-4 w-4" />
              </a>
            </Button>
            <Button variant="outline" size="xl" asChild>
              <a href="tel:+842839868899" onClick={() => trackContactClick("phone")}>
                <Phone className="h-4 w-4" /> Speak to Sales
              </a>
            </Button>
            <p className="mt-2 text-center text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
              Average response · under 2 hours
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);
