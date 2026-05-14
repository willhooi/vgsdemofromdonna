/**
 * MediaShowcase — Hero-adjacent media slot.
 *
 * HOW TO CUSTOMISE:
 *   Edit the `media` array below.
 *   - To show a single video:        [{ type: "video", src: "/your.mp4", poster: "/cover.jpg" }]
 *   - To show a single banner:       [{ type: "image", src: "/banner.jpg", alt: "..." }]
 *   - To show a slide carousel:      add 2+ image entries — autoplay every 6s.
 *   You can mix images and videos in the carousel.
 */
import { useEffect, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";

type MediaItem =
  | { type: "video"; src: string; poster?: string; caption?: string }
  | { type: "image"; src: string; alt: string; caption?: string; href?: string };

const media: MediaItem[] = [
  {
    type: "image",
    src: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=2000&q=80",
    alt: "Enterprise team reviewing customer engagement dashboards",
    caption: "From SMS to Zalo to AI campaigns — one platform powering Vietnam's enterprise messaging.",
  },
];

export const MediaShowcase = () => {
  return (
    <section
      id="media"
      className="relative overflow-hidden py-16 md:py-20"
      style={{ background: "hsl(var(--primary-soft) / 0.45)" }}
    >
      <div className="container-tight">
        {media.length === 1 ? (
          <SingleMedia item={media[0]} />
        ) : (
          <MediaCarousel items={media} />
        )}
      </div>
    </section>
  );
};

const SingleMedia = ({ item }: { item: MediaItem }) => (
  <div className="relative overflow-hidden rounded-3xl border border-border bg-background shadow-[var(--shadow-card)]">
    <MediaFrame item={item} />
  </div>
);

const MediaCarousel = ({ items }: { items: MediaItem[] }) => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) return;
    setCurrent(api.selectedScrollSnap());
    api.on("select", () => setCurrent(api.selectedScrollSnap()));
    const id = setInterval(() => api.scrollNext(), 6000);
    return () => clearInterval(id);
  }, [api]);

  return (
    <div className="relative">
      <Carousel setApi={setApi} opts={{ loop: true }}>
        <CarouselContent>
          {items.map((item, i) => (
            <CarouselItem key={i}>
              <div className="overflow-hidden rounded-3xl border border-border bg-background shadow-[var(--shadow-card)]">
                <MediaFrame item={item} />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      <div className="mt-5 flex justify-center gap-2">
        {items.map((_, i) => (
          <button
            key={i}
            onClick={() => api?.scrollTo(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`h-1.5 rounded-full transition-all ${
              current === i ? "w-8 bg-[hsl(var(--accent))]" : "w-3 bg-border"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

const MediaFrame = ({ item }: { item: MediaItem }) => {
  const inner =
    item.type === "video" ? (
      <video
        src={item.src}
        poster={item.poster}
        autoPlay
        muted
        loop
        playsInline
        className="aspect-[16/9] w-full object-cover"
      />
    ) : (
      <img
        src={item.src}
        alt={item.alt}
        className="aspect-[16/9] w-full object-cover"
        loading="lazy"
      />
    );

  const wrapper = (
    <div className="relative">
      {inner}
      {item.caption && (
        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/65 via-black/30 to-transparent p-6 md:p-8">
          <p className="max-w-2xl font-display text-lg font-semibold text-white md:text-2xl">
            {item.caption}
          </p>
        </div>
      )}
    </div>
  );

  if (item.type === "image" && item.href) {
    return (
      <a href={item.href} className="block">
        {wrapper}
      </a>
    );
  }
  return wrapper;
};
