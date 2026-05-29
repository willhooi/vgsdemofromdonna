import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { VWatermark } from "@/components/brand/VWatermark";

export const AboutHero = () => (
  <section
    className="relative overflow-hidden pt-32 pb-24 md:pt-44 md:pb-36"
    style={{ background: "var(--gradient-hero)" }}
  >
    {/* Oversized V watermark */}
    <VWatermark
      tone="brand"
      className="pointer-events-none absolute -right-32 -top-20 h-[680px] w-[680px] opacity-[0.05] md:opacity-[0.07]"
    />
    <VWatermark
      tone="muted"
      className="pointer-events-none absolute -left-40 bottom-[-200px] h-[520px] w-[520px] opacity-[0.04] rotate-12"
    />

    <div className="container-tight relative">
      <Link
        to="/"
        className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
      >
        <ArrowLeft className="h-4 w-4" /> Back to home
      </Link>
      <div className="mx-auto mt-10 max-w-4xl text-center">
        <span className="chapter-eyebrow justify-center">Our Manifesto · Since 2007</span>
        <h1 className="heading-display mt-6 text-balance text-foreground">
          Short steps on a <span className="text-primary">long journey.</span>
        </h1>
        <p className="mx-auto mt-8 max-w-2xl text-lg italic text-muted-foreground md:text-xl leading-relaxed">
          &ldquo;Towards holistic values for enterprises in particular and the entire community in
          general — not just sales or profit.&rdquo;
        </p>
        <p className="mx-auto mt-6 max-w-2xl text-sm text-muted-foreground">
          That silent mission has carried VietGuys since 2007 — the same force that drove our 2022
          merger with{" "}
          <a
            href="https://www.accrete-inc.com/"
            target="_blank"
            rel="noreferrer"
            className="text-primary underline underline-offset-4"
          >
            Accrete Inc.
          </a>
          , Japan&apos;s leading international SMS gateway.
        </p>
      </div>
    </div>
  </section>
);
