import accreteLogo from "@/assets/brand/accrete-logo.png";

export const AboutAccrete = () => (
  <section className="py-24 md:py-28 px-6 border-y border-border bg-background">
    <div className="container-tight max-w-4xl mx-auto text-center">
      <p className="text-muted-foreground text-[10px] font-bold uppercase tracking-[0.3em] mb-10">
        Global Strength — Local Fluency
      </p>
      <h2 className="font-['Instrument_Serif'] italic text-4xl md:text-5xl mb-8 text-foreground">
        A member of Accrete Inc. Japan
      </h2>
      <p className="text-muted-foreground font-light mb-12 max-w-2xl mx-auto leading-relaxed">
        Backed by Japan&apos;s leading SMS gateway group, recognized by{" "}
        <span className="font-semibold text-foreground">Forbes Asia</span> among Asia&apos;s{" "}
        <span className="font-semibold text-foreground">&ldquo;Best Under A Billion&rdquo;</span>{" "}
        companies — empowering VietGuys with global expertise and Tokyo Stock Exchange-grade
        governance.
      </p>
      <div className="flex justify-center">
        <a
          href="https://www.accrete-inc.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center transition-opacity hover:opacity-80"
        >
          <img
            src={accreteLogo}
            alt="Accrete Inc."
            className="h-12 md:h-16 w-auto"
            loading="lazy"
            decoding="async"
          />
        </a>
      </div>
    </div>
  </section>
);
