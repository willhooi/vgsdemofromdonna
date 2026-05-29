export const AboutOrigin = () => (
  <section className="py-24 md:py-32 bg-background">
    <div className="container-tight grid gap-16 lg:grid-cols-2 lg:gap-20 lg:items-center">
      <div className="order-2 lg:order-1">
        <span className="chapter-eyebrow">Our Story</span>
        <h2 className="heading-section mt-4 text-balance">
          From a 25m² room to Vietnam&apos;s messaging backbone.
        </h2>
        <div className="mt-6 space-y-5 text-muted-foreground leading-relaxed">
          <p>
            Nearly two decades of persistent effort — starting from a small workplace with young
            founders full of conviction. From day one, VietGuys chose its own direction: build
            constantly-improved Mobile Marketing Solutions for Vietnamese enterprises.
          </p>
          <p>
            Today, we&apos;re widely recognised as one of Vietnam&apos;s leading SMS Brandname
            providers and among the few enterprises licensed by the Authority of
            Telecommunications. We&apos;ve grown into a multi-channel customer engagement platform —
            SMS, Email, Viber, Zalo and more — powered by a core CDP that turns every message into
            measurable growth.
          </p>
        </div>
      </div>
      <div className="order-1 lg:order-2 relative">
        <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-border shadow-[var(--shadow-card)]">
          <img
            src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=80"
            alt="VietGuys team collaborating in the office"
            loading="lazy"
            decoding="async"
            width={1200}
            height={900}
            className="h-full w-full object-cover"
          />
        </div>
        <div className="absolute -bottom-5 -left-5 hidden md:block bg-background px-5 py-3 border border-border shadow-[var(--shadow-soft)] rounded-2xl">
          <div className="text-[10px] uppercase tracking-widest text-muted-foreground font-bold">
            Established
          </div>
          <div className="font-display text-2xl font-extrabold text-primary">2007</div>
        </div>
      </div>
    </div>
  </section>
);
