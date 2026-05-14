import accreteLogo from "@/assets/brand/accrete-logo.png";

export const AccreteBacking = () => {
  return (
    <section className="bg-background py-14 md:py-20">
      <div className="container-tight">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="heading-display flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-3xl md:text-5xl">
            <span>A member of</span>
            <img
              src={accreteLogo}
              alt="Accrete Inc."
              className="inline-block h-10 w-auto md:h-14 lg:h-16"
              loading="lazy"
              decoding="async"
            />
          </h2>
          <p className="mt-6 text-base leading-relaxed text-muted-foreground md:text-lg">
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
