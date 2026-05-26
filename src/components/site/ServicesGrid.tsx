import { useEffect, useRef, useState } from "react";
import {
  MessageSquare,
  MessageCircle,
  Smartphone,
  Mail,
  CreditCard,
  Hash,
  PhoneCall,
  Settings2,
  Brain,
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
  Hand,
  X,
  type LucideIcon,
} from "lucide-react";

type Stat = { value: string; label: string };
type Service = {
  name: string;
  icon: LucideIcon;
  tag: string;
  short: string;
  desc: string;
  stats: Stat[];
  cta: string;
  comingSoon?: boolean;
};

const SERVICES: Service[] = [
  {
    name: "SMS Brandname",
    icon: MessageSquare,
    tag: "Kênh #1 Việt Nam",
    short: "Tỷ lệ đọc 98% trong 3 phút. Phù hợp OTP, CSKH, khuyến mãi.",
    desc: "Gửi tin nhắn có tên thương hiệu đến hàng triệu khách hàng. Tỷ lệ đọc lên đến 98% trong 3 phút đầu. Phù hợp cho OTP, CSKH, khuyến mãi, nhắc lịch hẹn — tích hợp dễ dàng vào mọi nền tảng CRM.",
    stats: [
      { value: "98%", label: "Open Rate" },
      { value: "<3s", label: "Delivery" },
    ],
    cta: "Tìm hiểu SMS Brandname",
  },
  {
    name: "Zalo ZBS",
    icon: MessageCircle,
    tag: "74M người dùng",
    short: "Tin nhắn rich media qua Zalo OA. Hình ảnh, nút CTA, voucher.",
    desc: "Gửi thông điệp giàu nội dung qua Zalo Official Account — hình ảnh, nút CTA, voucher, mini-app. Tăng tương tác và chuyển đổi O2O hiệu quả với tệp người dùng Việt Nam đông nhất.",
    stats: [
      { value: "74M", label: "Người dùng" },
      { value: "3×", label: "CTR vs SMS" },
    ],
    cta: "Tìm hiểu Zalo ZBS",
  },
  {
    name: "Viber Message",
    icon: Smartphone,
    tag: "Rich media messaging",
    short: "Nhắn tin có hình ảnh & nút hành động. Tiếp cận khách quốc tế.",
    desc: "Nhắn tin thương hiệu qua Viber với hình ảnh, nút hành động, sticker branded. Tiếp cận phân khúc cao cấp và người dùng quốc tế — tích hợp vào hành trình omnichannel.",
    stats: [
      { value: "1B+", label: "Global Users" },
      { value: "Rich", label: "Media" },
    ],
    cta: "Tìm hiểu Viber Message",
  },
  {
    name: "Email Marketing",
    icon: Mail,
    tag: "Highest ROI channel",
    short: "Cá nhân hóa theo hành vi. Automation journey, A/B testing.",
    desc: "Chiến dịch email cá nhân hóa theo hành vi và phân khúc khách hàng. Tích hợp automation journey, A/B testing, báo cáo realtime. ROI cao nhất trong tất cả kênh digital marketing.",
    stats: [
      { value: "$42", label: "ROI per $1" },
      { value: "Auto", label: "Journey" },
    ],
    cta: "Tìm hiểu Email Marketing",
  },
  {
    name: "Mobile Topup",
    icon: CreditCard,
    tag: "Reward & Loyalty",
    short: "Nạp tiền điện thoại tự động làm quà thưởng loyalty.",
    desc: "Nạp tiền điện thoại tự động làm quà tặng khách hàng, phần thưởng loyalty program, khuyến mãi đăng ký. Hỗ trợ tất cả nhà mạng Việt Nam, tích hợp trực tiếp vào CRM/CDP.",
    stats: [
      { value: "All", label: "Nhà mạng VN" },
      { value: "API", label: "Integration" },
    ],
    cta: "Tìm hiểu Mobile Topup",
  },
  {
    name: "SMS Short Code",
    icon: Hash,
    tag: "2-way interactive",
    short: "Khách nhắn tin về đầu số ngắn để tham gia minigame, nhận voucher.",
    desc: "Cho phép khách hàng nhắn tin về đầu số ngắn để tham gia minigame, bình chọn, nhận voucher, xác nhận đơn hàng. Thu thập Zero-party data hiệu quả, tương tác 2 chiều thực sự.",
    stats: [
      { value: "4-6", label: "Chữ số" },
      { value: "2-way", label: "Messaging" },
    ],
    cta: "Tìm hiểu SMS Short Code",
  },
  {
    name: "Voice Brandname",
    icon: PhoneCall,
    tag: "Audio engagement",
    short: "Gọi thoại tự động. OTP bằng giọng nói. Nhạc chờ thương hiệu.",
    desc: "Cuộc gọi thoại tự động có nhạc chờ thương hiệu, thông điệp OTP bằng giọng nói, nhắc nhở lịch hẹn. Tạo ấn tượng chuyên nghiệp và dễ tiếp cận hơn cho mọi tệp khách hàng.",
    stats: [
      { value: "AI", label: "Voice Synth" },
      { value: "TTS", label: "Text-to-speech" },
    ],
    cta: "Tìm hiểu Voice Brandname",
  },
  {
    name: "Customized Solution",
    icon: Settings2,
    tag: "Enterprise-grade",
    short: "Giải pháp tùy chỉnh 100%. API, white-label, CDP/CRM integration.",
    desc: "Giải pháp tùy chỉnh theo nhu cầu doanh nghiệp — API integration, white-label, tích hợp CDP/CRM, automation workflow phức tạp. Đội ngũ tech riêng hỗ trợ 24/7 theo SLA.",
    stats: [
      { value: "100%", label: "Tùy chỉnh" },
      { value: "SLA", label: "Enterprise" },
    ],
    cta: "Liên hệ tư vấn",
  },
  {
    name: "Dịch vụ AI",
    icon: Brain,
    tag: "Trí tuệ nhân tạo",
    short: "Chatbot, phân tích hành vi, cá nhân hóa siêu thực bằng AI.",
    desc: "Giải pháp AI sắp ra mắt — chatbot thông minh, phân tích dự đoán hành vi, cá nhân hóa siêu thực theo từng customer profile. Tích hợp vào toàn bộ hành trình khách hàng.",
    stats: [],
    cta: "",
    comingSoon: true,
  },
];

const GREEN = "#39B44A";
const GREEN_DEEP = "#008134";
const GREEN_BG = "#F0FBF1";
const ORANGE = "#FF9B17";
const BORDER = "0.5px solid #E5E5E5";
const BORDER_ACTIVE = "1.5px solid #39B44A";

function useIsMobile() {
  const [m, setM] = useState(false);
  useEffect(() => {
    const check = () => setM(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);
  return m;
}

function ComingSoonForm({ compact = false }: { compact?: boolean }) {
  return (
    <div className={compact ? "mt-3" : "mt-4"}>
      <span
        className="inline-block rounded-full px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-white"
        style={{ background: ORANGE }}
      >
        Coming Soon
      </span>
      <h4 className="mt-3 text-[15px] font-black" style={{ color: GREEN_DEEP }}>
        Đang phát triển
      </h4>
      <p className="mt-1 text-[12px] leading-[1.7] text-muted-foreground">
        Đăng ký để nhận thông tin sớm nhất khi giải pháp AI ra mắt.
      </p>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="mt-3 flex gap-2"
      >
        <input
          type="email"
          required
          placeholder="email@cong-ty.vn"
          className="min-w-0 flex-1 rounded-[9px] border border-border bg-background px-3 py-2 text-[12px] outline-none focus:border-foreground"
        />
        <button
          type="submit"
          className="rounded-[9px] px-4 text-[12px] font-bold text-white transition-opacity hover:opacity-90"
          style={{ background: ORANGE }}
        >
          Đăng ký
        </button>
      </form>
    </div>
  );
}

function DesktopCard({
  svc,
  index,
  total,
  active,
  onActivate,
  onClose,
}: {
  svc: Service;
  index: number;
  total: number;
  active: boolean;
  onActivate: () => void;
  onClose: () => void;
}) {
  const Icon = svc.icon;
  const isLastRow =
    Math.floor(index / 3) === Math.floor((total - 1) / 3);
  return (
    <article
      onMouseEnter={!active ? onActivate : undefined}
      className={`group relative flex flex-col rounded-[14px] p-5 transition-all duration-300 ${
        active ? "" : "cursor-pointer bg-background hover:-translate-y-0.5"
      }`}
      style={{
        gridColumn: active ? "span 2" : undefined,
        gridRow: active && !isLastRow ? "span 2" : undefined,
        background: active ? GREEN_BG : "hsl(var(--background))",
        border: active ? BORDER_ACTIVE : BORDER,
        minHeight: 130,
      }}
    >
      <header className="flex items-start justify-between gap-3">
        <div
          className="flex items-center justify-center rounded-[8px] transition-all"
          style={{
            width: active ? 42 : 36,
            height: active ? 42 : 36,
            background: active ? GREEN : "rgba(57,180,74,0.10)",
            borderRadius: active ? 10 : 8,
          }}
        >
          <Icon size={active ? 22 : 18} color={active ? "#fff" : GREEN} />
        </div>
        {svc.comingSoon && !active && (
          <span
            className="rounded-full px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider text-white"
            style={{ background: ORANGE }}
          >
            Soon
          </span>
        )}
        {!active && (
          <ArrowUpRight
            size={16}
            className="opacity-0 transition-opacity group-hover:opacity-60"
          />
        )}
      </header>

      <div className="mt-3">
        <h3
          className="font-bold transition-all"
          style={{
            fontSize: active ? 16 : 13,
            color: active ? GREEN_DEEP : "hsl(var(--foreground))",
            fontWeight: active ? 900 : 700,
          }}
        >
          {svc.name}
        </h3>
        {!active && (
          <p className="mt-1.5 text-[11px] leading-snug text-muted-foreground">
            {svc.short}
          </p>
        )}
      </div>

      {active && (
        <div
          className="mt-3 flex flex-1 flex-col"
          style={{ animation: "svcFade 0.3s ease both" }}
        >
          <p className="text-[12px] leading-[1.7] text-muted-foreground">
            {svc.desc}
          </p>

          {svc.comingSoon ? (
            <ComingSoonForm />
          ) : (
            <>
              <div className="mt-4 grid grid-cols-2 gap-2">
                {svc.stats.map((s) => (
                  <div
                    key={s.label}
                    className="rounded-[10px] bg-secondary p-3"
                  >
                    <div
                      className="text-[20px] font-black leading-none"
                      style={{ color: GREEN }}
                    >
                      {s.value}
                    </div>
                    <div className="mt-1 text-[11px] text-muted-foreground">
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-auto flex flex-wrap gap-2 pt-4">
                <button
                  className="rounded-[9px] px-4 py-2 text-[12px] font-bold text-white transition-opacity hover:opacity-90"
                  style={{ background: GREEN }}
                >
                  {svc.cta}
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    onClose();
                  }}
                  className="rounded-[9px] border border-border px-4 py-2 text-[12px] font-bold text-foreground transition-colors hover:bg-secondary"
                >
                  Đóng
                </button>
              </div>
            </>
          )}
        </div>
      )}

      {active && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            onClose();
          }}
          aria-label="Đóng"
          className="absolute right-3 top-3 rounded-full p-1 text-muted-foreground hover:bg-secondary"
        >
          <X size={14} />
        </button>
      )}
    </article>
  );
}

function MobileCard({ svc }: { svc: Service }) {
  const Icon = svc.icon;
  return (
    <div
      className="flex h-full w-full flex-col rounded-[16px] bg-background p-6"
      style={{ border: BORDER }}
    >
      <div className="flex items-start gap-3">
        <div
          className="flex items-center justify-center rounded-[12px]"
          style={{ width: 48, height: 48, background: GREEN }}
        >
          <Icon size={24} color="#fff" />
        </div>
        <div className="min-w-0 flex-1">
          <h3 className="text-[17px] font-black leading-tight text-foreground">
            {svc.name}
          </h3>
          <div
            className="mt-1 text-[11px] font-bold"
            style={{ color: GREEN }}
          >
            {svc.tag}
          </div>
        </div>
      </div>
      <p className="mt-4 text-[13px] leading-[1.7] text-muted-foreground">
        {svc.desc}
      </p>

      {svc.comingSoon ? (
        <ComingSoonForm />
      ) : (
        <>
          <div className="mt-5 grid grid-cols-2 gap-2">
            {svc.stats.map((s) => (
              <div key={s.label} className="rounded-[10px] bg-secondary p-3">
                <div
                  className="text-[20px] font-black leading-none"
                  style={{ color: GREEN }}
                >
                  {s.value}
                </div>
                <div className="mt-1 text-[11px] text-muted-foreground">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
          <button
            className="mt-5 w-full rounded-[9px] py-3 text-[13px] font-bold text-white"
            style={{ background: GREEN }}
          >
            {svc.cta}
          </button>
        </>
      )}
    </div>
  );
}

function MobileSwiper() {
  const [idx, setIdx] = useState(0);
  const startX = useRef<number | null>(null);
  const deltaX = useRef(0);
  const trackRef = useRef<HTMLDivElement>(null);
  const [drag, setDrag] = useState(0);
  const n = SERVICES.length;

  const go = (i: number) => setIdx(Math.max(0, Math.min(n - 1, i)));

  const onStart = (x: number) => {
    startX.current = x;
    deltaX.current = 0;
  };
  const onMove = (x: number) => {
    if (startX.current == null) return;
    deltaX.current = x - startX.current;
    setDrag(deltaX.current);
  };
  const onEnd = () => {
    if (Math.abs(deltaX.current) > 50) {
      if (deltaX.current < 0) go(idx + 1);
      else go(idx - 1);
    }
    startX.current = null;
    deltaX.current = 0;
    setDrag(0);
  };

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") go(idx + 1);
      if (e.key === "ArrowLeft") go(idx - 1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [idx]);

  return (
    <div className="md:hidden">
      <div className="mb-3 flex items-center justify-center gap-2 text-[12px] text-muted-foreground">
        <Hand size={14} />
        <span>Vuốt để xem dịch vụ tiếp theo</span>
      </div>

      <div
        className="overflow-hidden"
        onTouchStart={(e) => onStart(e.touches[0].clientX)}
        onTouchMove={(e) => onMove(e.touches[0].clientX)}
        onTouchEnd={onEnd}
        onMouseDown={(e) => onStart(e.clientX)}
        onMouseMove={(e) => {
          if (startX.current != null) onMove(e.clientX);
        }}
        onMouseUp={onEnd}
        onMouseLeave={() => startX.current != null && onEnd()}
      >
        <div
          ref={trackRef}
          className="flex"
          style={{
            transform: `translateX(calc(${-idx * 100}% + ${drag}px))`,
            transition: startX.current == null ? "transform 0.4s cubic-bezier(0.4,0,0.2,1)" : "none",
          }}
        >
          {SERVICES.map((s) => (
            <div key={s.name} className="w-full flex-shrink-0 px-1">
              <MobileCard svc={s} />
            </div>
          ))}
        </div>
      </div>

      <div className="mt-4 flex items-center justify-between">
        <button
          onClick={() => go(idx - 1)}
          disabled={idx === 0}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background disabled:opacity-40"
          aria-label="Trước"
        >
          <ChevronLeft size={18} />
        </button>
        <div className="text-[12px] font-bold text-muted-foreground">
          {idx + 1} / {n}
        </div>
        <button
          onClick={() => go(idx + 1)}
          disabled={idx === n - 1}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background disabled:opacity-40"
          aria-label="Sau"
        >
          <ChevronRight size={18} />
        </button>
      </div>

      <div className="mt-3 flex justify-center gap-1.5">
        {SERVICES.map((_, i) => (
          <button
            key={i}
            onClick={() => go(i)}
            aria-label={`Slide ${i + 1}`}
            className="h-1.5 rounded-full transition-all"
            style={{
              width: i === idx ? 20 : 6,
              background: i === idx ? GREEN : "#E5E5E5",
            }}
          />
        ))}
      </div>
    </div>
  );
}

export function ServicesGrid() {
  const isMobile = useIsMobile();
  const [activeSet, setActiveSet] = useState<Set<number>>(new Set());

  // Each card occupies cells in a 3-col grid. When expanded, it spans 2x2.
  // Clamp col to 1 max so the 2-wide span fits within 3 columns.
  const total = SERVICES.length;
  const lastRow = Math.floor((total - 1) / 3);
  const cellsFor = (i: number, expanded: boolean): string[] => {
    const r = Math.floor(i / 3);
    const c = i % 3;
    if (!expanded) return [`${r},${c}`];
    const cc = Math.min(c, 1);
    if (r === lastRow) return [`${r},${cc}`, `${r},${cc + 1}`];
    return [`${r},${cc}`, `${r},${cc + 1}`, `${r + 1},${cc}`, `${r + 1},${cc + 1}`];
  };

  const activate = (i: number) => {
    setActiveSet((prev) => {
      if (prev.has(i)) return prev;
      const incoming = new Set(cellsFor(i, true));
      const next = new Set(prev);
      // Evict any currently expanded card whose footprint overlaps the new one
      for (const j of prev) {
        const occ = cellsFor(j, true);
        if (occ.some((k) => incoming.has(k))) next.delete(j);
      }
      next.add(i);
      return next;
    });
  };

  const close = (i: number) => {
    setActiveSet((prev) => {
      if (!prev.has(i)) return prev;
      const next = new Set(prev);
      next.delete(i);
      return next;
    });
  };

  return (
    <section
      id="services"
      className="bg-background py-20"
      style={{ fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif" }}
    >
      <style>{`
        @keyframes svcFade {
          from { opacity: 0; transform: translateY(8px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      <div className="container-tight">
        <header className="mx-auto mb-10 max-w-2xl text-center">
          <div
            className="text-[11px] font-bold uppercase"
            style={{ color: GREEN, letterSpacing: "2px" }}
          >
            Giải pháp toàn diện
          </div>
          <h2
            className="mt-3 text-[26px] font-black leading-tight md:text-[36px]"
            style={{ fontWeight: 900 }}
          >
            Tiếp cận khách hàng{" "}
            <span style={{ color: GREEN }}>đúng kênh,</span> đúng thời điểm
          </h2>
          <p className="mx-auto mt-3 max-w-[500px] text-[14px] text-muted-foreground">
            Từ SMS đến AI, VietGuys cung cấp đa dạng kênh tiếp cận — kết nối
            khách hàng theo cách họ muốn.
          </p>
        </header>

        {isMobile ? (
          <MobileSwiper />
        ) : (
          <div
            className="hidden md:grid"
            style={{
              gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
              gridAutoRows: "minmax(150px, auto)",
              gap: "14px",
              transition: "all 0.35s cubic-bezier(0.4,0,0.2,1)",
            }}
          >
            {SERVICES.map((s, i) => (
              <DesktopCard
                key={s.name}
                svc={s}
                index={i}
                total={total}
                active={activeSet.has(i)}
                onActivate={() => activate(i)}
                onClose={() => close(i)}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default ServicesGrid;
