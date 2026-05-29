const shots = [
  {
    src: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=80",
    alt: "Cả team họp sáng tại văn phòng VietGuys",
    caption: "Standup sáng thứ Hai — nơi mọi tuần bắt đầu.",
    span: "md:col-span-2 md:row-span-2",
    ratio: "aspect-[4/3]",
  },
  {
    src: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=900&q=80",
    alt: "Workshop cùng khách hàng",
    caption: "Workshop cùng đối tác bán lẻ.",
    span: "",
    ratio: "aspect-square",
  },
  {
    src: "https://images.unsplash.com/photo-1531058020387-3be344556be6?auto=format&fit=crop&w=900&q=80",
    alt: "Team building VietGuys",
    caption: "Team building — Đà Lạt.",
    span: "",
    ratio: "aspect-square",
  },
  {
    src: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=900&q=80",
    alt: "Kỹ sư trực hệ thống ban đêm",
    caption: "On-call đêm — vì 99.95% không tự nhiên có.",
    span: "",
    ratio: "aspect-[4/5]",
  },
  {
    src: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=900&q=80",
    alt: "Brainstorm trên bảng trắng",
    caption: "Tranh luận để sản phẩm tốt hơn.",
    span: "",
    ratio: "aspect-[4/5]",
  },
  {
    src: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?auto=format&fit=crop&w=1200&q=80",
    alt: "Hoạt động cộng đồng",
    caption: "Chương trình thiện nguyện cùng cộng đồng địa phương.",
    span: "md:col-span-2",
    ratio: "aspect-[16/9]",
  },
];

export const AboutLifeGallery = () => (
  <section className="bg-[hsl(var(--accent-soft))]/40 py-24 md:py-32">
    <div className="container-tight">
      <div className="max-w-2xl">
        <span className="chapter-eyebrow">Life at VietGuys</span>
        <h2 className="heading-section mt-4 text-balance">
          Một nơi làm việc, được{" "}
          <span className="italic text-[hsl(var(--accent-deep))]">sống</span>{" "}
          mỗi ngày.
        </h2>
        <p className="mt-5 text-muted-foreground">
          Không phải khẩu hiệu trên tường. Là những buổi sáng, những đêm trực
          hệ thống, những chuyến đi cùng nhau — đã làm nên VietGuys hôm nay.
        </p>
      </div>

      <div className="mt-12 grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
        {shots.map((s, i) => (
          <figure
            key={s.alt}
            className={`group relative overflow-hidden rounded-2xl bg-[hsl(var(--primary-soft))] shadow-[var(--shadow-soft)] animate-fade-up ${s.span}`}
            style={{ animationDelay: `${i * 70}ms` }}
          >
            <div className={`relative ${s.ratio} w-full overflow-hidden`}>
              <img
                src={s.src}
                alt={s.alt}
                loading="lazy"
                decoding="async"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
              />
              <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-foreground/70 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <figcaption className="absolute inset-x-0 bottom-0 translate-y-2 px-4 pb-4 text-xs text-background opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100 md:text-sm">
                {s.caption}
              </figcaption>
            </div>
          </figure>
        ))}
      </div>
    </div>
  </section>
);
