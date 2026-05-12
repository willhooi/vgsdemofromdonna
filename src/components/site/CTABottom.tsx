import { ArrowRight, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { trackDemoRequest, trackProfileDownload } from "@/lib/analytics";

export const CTABottom = () => (
  <section className="bg-secondary py-16 md:py-22">
    <div className="container-tight text-center">
      <h2 className="heading-section text-balance">
        Ready to upgrade your customer engagement?
      </h2>
      <p className="mt-3 text-muted-foreground">
        Talk to our enterprise team. No commitment required.
      </p>
      <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
        <Button variant="cta" size="xl" asChild>
          <a href="/demo" onClick={() => trackDemoRequest("bottom_cta")}>
            Request a Demo <ArrowRight className="h-4 w-4" />
          </a>
        </Button>
        <Button variant="outline" size="xl" asChild>
          <a href="/download" onClick={() => trackProfileDownload("bottom_cta")}>
            <Download className="h-4 w-4" /> Download Company Profile
          </a>
        </Button>
      </div>
      <p className="mt-6 text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
        ISO certified · Zalo Trusted Partner · PDPL compliant · Response within 1 business day
      </p>
    </div>
  </section>
);
