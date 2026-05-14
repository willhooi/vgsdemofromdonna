import accreteLogo from "@/assets/brand/accrete-logo.png";

export const AccreteBacking = () => {
  return (
    <section className="bg-background pt-14 pb-6 md:pt-20 md:pb-8">
      <div className="container-tight">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="heading-display flex flex-wrap items-baseline justify-center gap-x-4 gap-y-2 text-3xl md:text-5xl">
            <span>A member of</span>
            <a
              href="https://www.accrete-inc.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Accrete Inc. (opens in new tab)"
              className="inline-flex items-center transition-opacity hover:opacity-80"
            >
              <img
                src={accreteLogo}
                alt="Accrete Inc."
                className="inline-block h-12 w-auto md:h-16 lg:h-20"
                loading="lazy"
                decoding="async"
              />
            </a>
          </h2>
          <p className="mt-6 text-base leading-relaxed text-muted-foreground md:text-base">
            Backed by Japan's leading SMS gateway group, recognized by{" "}
            <span className="font-semibold text-foreground">Forbes Asia</span> among Asia's{" "}
            <span className="font-semibold text-foreground">"Best Under A Billion"</span> companies —
            empowering VietGuys with global expertise and scalable enterprise messaging capabilities.
          </p>
        </div>
      </div>
    </section>
  );
};
