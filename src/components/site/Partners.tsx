import { useState } from "react";

const BASE = "https://www.vietguys.biz/images/partners";

const industries: { key: string; label: string; logos: string[] }[] = [
  {
    key: "finance",
    label: "Tài chính – Ngân hàng",
    logos: [
      "finance-banking/hsbc.png", "finance-banking/uob.png", "finance-banking/vpbank.png",
      "finance-banking/msb.png", "finance-banking/nam-a-bank.png", "finance-banking/fwd.png",
      "finance-banking/fubon-life.png", "finance-banking/bao-minh.png", "finance-banking/hanwha.png",
      "finance-banking/ssi.png", "finance-banking/rong-viet.png", "finance-banking/petro.png",
    ],
  },
  {
    key: "retail",
    label: "Bán lẻ",
    logos: [
      "retail/thegioididong.png", "retail/nguyenkim.png", "retail/aeon.png", "retail/lotte.png",
      "retail/emart.png", "retail/familymart.png", "retail/concung.png", "retail/bach-hoa-xah.png",
      "retail/phong-vu.png", "retail/thienhoa.png", "retail/sai-gon-center.png",
    ],
  },
  {
    key: "tech",
    label: "Công nghệ – Điện tử",
    logos: [
      "technology-electronic/samsung.png", "technology-electronic/sony.png", "technology-electronic/lg.png",
      "technology-electronic/dell.png", "technology-electronic/canon.png", "technology-electronic/momo.png",
      "technology-electronic/shopeepay.png", "technology-electronic/garena.png", "technology-electronic/foody.png",
      "technology-electronic/moca.png", "technology-electronic/comet.png", "technology-electronic/cashback.png",
    ],
  },
  {
    key: "ecommerce",
    label: "Thương mại điện tử",
    logos: [
      "ecommerce/shopee.png", "ecommerce/lazada.png", "ecommerce/cho-tot.png",
      "ecommerce/haravan.png", "ecommerce/kiotviet.png", "ecommerce/sapo.png", "ecommerce/nhat-tao.png",
    ],
  },
  {
    key: "fmcg",
    label: "FMCG",
    logos: [
      "fmcg/p-g.png", "fmcg/nutifood.png", "fmcg/mead-johnson-nutrition.png",
      "fmcg/vitadairy.png", "fmcg/san-miguel.png", "fmcg/c2.png",
    ],
  },
  {
    key: "pharmacy",
    label: "Y dược",
    logos: [
      "pharmacy/bayer.png", "pharmacy/gsk.png", "pharmacy/hoan-my.png", "pharmacy/vnvc.png",
      "pharmacy/eco-pharma.png", "pharmacy/pharma-city.png", "pharmacy/phano-pharmacy.png",
    ],
  },
  {
    key: "fashion",
    label: "Thời trang – Làm đẹp",
    logos: [
      "fashion-beauty/acfc.png", "fashion-beauty/elise.png", "fashion-beauty/ngoc-dung.png",
      "fashion-beauty/pnj-watch.png", "fashion-beauty/thefaceshop.png", "fashion-beauty/triumph.png",
      "fashion-beauty/vascara.png", "fashion-beauty/shynh.png", "fashion-beauty/hnoss.png",
      "fashion-beauty/zema.png", "fashion-beauty/loc-phuc.png", "fashion-beauty/kim-ngoc-thuy.png",
    ],
  },
  {
    key: "education",
    label: "Giáo dục",
    logos: [
      "education/fpt.png", "education/hoa-sen.png", "education/apollo-english.png", "education/yola.png",
      "education/vas.png", "education/wall-street-english.png", "education/american-learning-lab.png",
      "education/saigon-american-english.png", "education/ctim.png", "education/cao-dang-sai-gon.png",
    ],
  },
  {
    key: "realestate",
    label: "Bất động sản",
    logos: [
      "real-estate/vinhomes.png", "real-estate/novaland.png", "real-estate/ecopark.png",
      "real-estate/hung-thinh-land.png", "real-estate/dat-xanh-mien-bac.png", "real-estate/propzy.png",
    ],
  },
  {
    key: "hospitality",
    label: "Hospitality",
    logos: [
      "hospitality/cgv.png", "hospitality/mcdonalds.png", "hospitality/the-coffee-house.png",
      "hospitality/agodalogo.png", "hospitality/traveloka.png", "hospitality/vietravel.png",
      "hospitality/tokyo-deli.png", "hospitality/tiniworld.png", "hospitality/tinistore.png",
      "hospitality/ong-bau.png", "hospitality/citigym.png", "hospitality/california.png",
      "hospitality/bhd-star-cinema.png", "hospitality/jumbomau.png",
    ],
  },
  {
    key: "carriage",
    label: "Vận tải",
    logos: [
      "carriage/grab.png", "carriage/gojek.png", "carriage/be.png",
      "carriage/ghtk.png", "carriage/lalamove.png",
    ],
  },
  {
    key: "industry",
    label: "Công nghiệp",
    logos: [
      "industry/bridgestone.png", "industry/kubota.png", "industry/hoa-sen.png",
      "industry/duytan.png", "industry/loc-troi.png", "industry/syngenta.png",
      "industry/akzonobelpng.png", "industry/dam-ca-mau.png", "industry/vfc.png",
      "industry/bao-ve-thuc-vat-an-giang.png",
    ],
  },
];

export const Partners = () => {
  const [active, setActive] = useState(industries[0].key);
  const current = industries.find((i) => i.key === active)!;

  return (
    <section id="partners" className="py-20 md:py-28">
      <div className="container-tight">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">Khách hàng của chúng tôi</span>
          <h2 className="heading-section mt-3">
            Hơn <span className="text-primary">5,000 nhãn hàng</span> đã chọn VietGuys
          </h2>
          <p className="mt-4 text-base text-muted-foreground">
            Đồng hành cùng các doanh nghiệp đầu ngành tại Việt Nam và quốc tế trên hành trình
            kết nối khách hàng đa kênh.
          </p>
        </div>

        {/* Industry tabs */}
        <div className="mt-10 flex flex-wrap justify-center gap-2">
          {industries.map((ind) => (
            <button
              key={ind.key}
              onClick={() => setActive(ind.key)}
              className={`rounded-full border px-4 py-2 text-xs font-semibold transition-all ${
                active === ind.key
                  ? "border-primary bg-primary text-primary-foreground shadow-[var(--shadow-soft)]"
                  : "border-border bg-background text-muted-foreground hover:border-primary/40 hover:text-foreground"
              }`}
            >
              {ind.label}
            </button>
          ))}
        </div>

        {/* Logo grid */}
        <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
          {current.logos.map((src) => (
            <div
              key={src}
              className="group flex aspect-[3/2] items-center justify-center rounded-xl border border-border bg-background p-4 transition-all hover:border-primary/30 hover:shadow-[var(--shadow-soft)]"
            >
              <img
                src={`${BASE}/${src}`}
                alt={src.split("/").pop()?.replace(".png", "") || "partner"}
                loading="lazy"
                decoding="async"
                width={180}
                height={120}
                className="max-h-12 w-full object-contain opacity-70 grayscale transition-all duration-300 group-hover:opacity-100 group-hover:grayscale-0"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
