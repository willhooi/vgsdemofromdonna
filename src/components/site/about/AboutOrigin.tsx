export const AboutOrigin = () => (
  <section className="py-24 md:py-32 bg-[#fcfaf7]">
    <div className="container-tight grid md:grid-cols-2 gap-16 lg:gap-20 items-center">
      <div>
        <span className="text-primary text-xs font-bold tracking-widest uppercase mb-4 block">
          Our Story
        </span>
        <h2 className="font-['Instrument_Serif'] text-4xl md:text-5xl leading-tight mb-8 text-foreground text-balance">
          From a 25m² room to Vietnam&apos;s messaging backbone.
        </h2>
        <div className="space-y-5 text-muted-foreground leading-relaxed font-light">
          <p>
            Nearly two decades of persistent effort began in a small workplace with young founders
            full of conviction. From day one, VietGuys chose its own direction: build
            constantly-improved Mobile Marketing Solutions for Vietnamese enterprises.
          </p>
          <p>
            Today, we are recognized as one of Vietnam&apos;s leading SMS Brandname providers,
            powered by a core CDP that turns every message into measurable growth.
          </p>
        </div>
      </div>
      <div className="relative aspect-[4/3] overflow-hidden border border-border shadow-[var(--shadow-card)]">
        <img
          src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=80"
          alt="VietGuys team collaborating in the office"
          loading="lazy"
          decoding="async"
          width={1200}
          height={900}
          className="h-full w-full object-cover grayscale"
        />
        <div className="absolute bottom-4 left-4 bg-background/90 backdrop-blur-sm px-4 py-2 text-[10px] uppercase tracking-widest font-bold border border-border">
          Circa 2007
        </div>
      </div>
    </div>
  </section>
);
