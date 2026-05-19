import { useEffect, useState } from "react";
import { AudioLines, Gift, Lightbulb, Mail } from "lucide-react";

/**
 * HeroChatAnimation — phone mockup with sequential chat bubbles
 * and orbiting channel icons that pulse in sequence.
 * Pure CSS + a single interval timer. Decorative (aria-hidden).
 */

type Bubble = {
  side: "left" | "right";
  text: React.ReactNode;
  srText: string;
};

const BUBBLES: Bubble[] = [
  {
    side: "left",
    text: (
      <>
        Xin chào <b>Nguyễn An</b>, cảm ơn bạn đã đăng ký 👋
      </>
    ),
    srText: "Xin chào Nguyễn An, cảm ơn bạn đã đăng ký",
  },
  {
    side: "left",
    text: (
      <>
        Mã OTP xác thực: <b className="font-mono tracking-wider">482916</b>
      </>
    ),
    srText: "Mã OTP xác thực 482916",
  },
  {
    side: "right",
    text: <>Đăng ký trải nghiệm sản phẩm mới!</>,
    srText: "Đăng ký trải nghiệm sản phẩm mới",
  },
  {
    side: "left",
    text: (
      <span className="inline-flex items-center gap-1.5">
        Tặng bạn Voucher <b>30%</b> cho đơn hàng tiếp theo
        <Gift className="h-3.5 w-3.5 inline-block text-[#ff9b17]" />
      </span>
    ),
    srText: "Tặng bạn Voucher 30% cho đơn hàng tiếp theo",
  },
];

// Orbit chips — 8 slots arranged around the phone.
type Chip = {
  /** absolute position via top/left/right/bottom in % of container */
  pos: React.CSSProperties;
  bg: string;
  content: React.ReactNode;
  label: string;
};

const SmsIcon = () => (
  <svg viewBox="0 0 24 24" className="h-6 w-6 text-white" fill="currentColor" aria-hidden>
    <path d="M4 4h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H9l-5 4V6a2 2 0 0 1 2-2z" />
    <text x="12" y="13.5" textAnchor="middle" fontSize="6" fontWeight="800" fill="#39b44a" fontFamily="system-ui">SMS</text>
  </svg>
);

const ViberIcon = () => (
  <svg viewBox="0 0 24 24" className="h-6 w-6 text-white" fill="currentColor" aria-hidden>
    <path d="M12 2C6.5 2 2 5.6 2 10c0 2.5 1.5 4.7 3.8 6.1L5 21l4.5-2.3c.8.1 1.7.2 2.5.2 5.5 0 10-3.6 10-8s-4.5-9-10-9z" />
    <circle cx="9" cy="10" r="1" fill="#7360f2" />
    <circle cx="12" cy="10" r="1" fill="#7360f2" />
    <circle cx="15" cy="10" r="1" fill="#7360f2" />
  </svg>
);

const ZaloIcon = () => (
  <svg viewBox="0 0 32 24" className="h-5 w-auto" aria-hidden>
    <path d="M3 4h22a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3H12l-6 4v-4H3a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3z" fill="#0068ff" />
    <text x="14" y="14.5" textAnchor="middle" fontSize="8" fontWeight="800" fill="#fff" fontFamily="system-ui">Zalo</text>
  </svg>
);

const DotsIcon = () => (
  <svg viewBox="0 0 24 24" className="h-6 w-6" aria-hidden>
    <g fill="#fff">
      {[6, 12, 18].map((y) =>
        [6, 12, 18].map((x) => <circle key={`${x}-${y}`} cx={x} cy={y} r="1.6" />)
      )}
    </g>
  </svg>
);

const CHIPS: Chip[] = [
  { pos: { top: "4%", left: "4%" }, bg: "#39b44a", content: <SmsIcon />, label: "SMS" },
  { pos: { top: "-2%", left: "42%" }, bg: "#39b44a", content: <AudioLines className="h-5 w-5 text-white" />, label: "Voice" },
  { pos: { top: "12%", right: "0%" }, bg: "#7360f2", content: <ViberIcon />, label: "Viber" },
  { pos: { top: "38%", left: "-4%" }, bg: "#2962ff", content: <DotsIcon />, label: "Channels" },
  { pos: { top: "42%", right: "-6%" }, bg: "#fff", content: <ZaloIcon />, label: "Zalo" },
  { pos: { bottom: "18%", left: "2%" }, bg: "#39b44a", content: <Lightbulb className="h-5 w-5 text-white" />, label: "Insight" },
  { pos: { bottom: "2%", left: "38%" }, bg: "#39b44a", content: <Mail className="h-5 w-5 text-white" />, label: "Email" },
  { pos: { bottom: "8%", right: "6%" }, bg: "#39b44a", content: <Gift className="h-5 w-5 text-white" />, label: "Rewards" },
];

export const HeroChatAnimation = () => {
  const [visibleCount, setVisibleCount] = useState(1);
  const [activeChip, setActiveChip] = useState(0);

  // Chat bubble sequence — advance every 1.8s, hold full state ~3s, reset.
  useEffect(() => {
    const totalSteps = BUBBLES.length + 2; // +2 = hold frames after last
    let step = 1;
    const id = setInterval(() => {
      step = step >= totalSteps ? 1 : step + 1;
      setVisibleCount(Math.min(step, BUBBLES.length));
    }, 1800);
    return () => clearInterval(id);
  }, []);

  // Sequenced chip highlight — cycle every 500ms.
  useEffect(() => {
    const id = setInterval(() => {
      setActiveChip((c) => (c + 1) % CHIPS.length);
    }, 500);
    return () => clearInterval(id);
  }, []);

  return (
    <div
      className="hero-anim relative mx-auto w-full max-w-[420px] aspect-[5/6]"
      aria-hidden="true"
    >
      {/* Soft radial glow behind phone */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(circle at 50% 45%, hsl(128 52% 46% / 0.14), transparent 65%)",
        }}
      />

      {/* Faint dot grid */}
      <div
        className="absolute inset-0 -z-10 opacity-40"
        style={{
          backgroundImage:
            "radial-gradient(hsl(128 55% 25% / 0.12) 1px, transparent 1px)",
          backgroundSize: "18px 18px",
          maskImage: "radial-gradient(ellipse at center, black 35%, transparent 75%)",
        }}
      />

      {/* Orbit chips */}
      {CHIPS.map((chip, i) => (
        <div
          key={chip.label}
          className="absolute"
          style={{
            ...chip.pos,
            animation: `chip-float 5.4s ease-in-out infinite`,
            animationDelay: `${i * 0.28}s`,
          }}
        >
          <div
            className="flex h-11 w-11 items-center justify-center rounded-2xl shadow-[0_8px_22px_-10px_rgba(20,80,30,0.35)] transition-transform duration-300"
            style={{
              background: chip.bg,
              border: chip.bg === "#fff" ? "1px solid hsl(var(--border))" : "none",
              transform: activeChip === i ? "scale(1.14)" : "scale(1)",
              boxShadow:
                activeChip === i
                  ? "0 0 0 4px hsl(128 52% 46% / 0.18), 0 12px 28px -10px rgba(20,80,30,0.5)"
                  : "0 8px 22px -10px rgba(20,80,30,0.35)",
            }}
          >
            {chip.content}
          </div>
        </div>
      ))}

      {/* Phone frame */}
      <div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[58%] aspect-[9/16] rounded-[28px] bg-white shadow-[0_22px_60px_-20px_rgba(20,80,30,0.35),0_0_0_1px_hsl(var(--border))] overflow-hidden phone-float"
      >
        {/* Header */}
        <div className="flex items-center gap-2 border-b border-border/70 px-3 py-2">
          <div
            className="flex h-7 w-7 items-center justify-center rounded-full"
            style={{
              background: "linear-gradient(135deg, #39b44a 0 50%, #ff9b17 50% 100%)",
            }}
          >
            <span className="text-[10px] font-extrabold text-white">V</span>
          </div>
          <div className="flex flex-col">
            <span className="text-[10px] font-bold leading-none text-foreground">VietGuys</span>
            <span className="flex items-center gap-1 text-[8px] text-muted-foreground">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#39b44a]" />
              Online
            </span>
          </div>
        </div>

        {/* Chat list */}
        <div className="flex flex-col gap-1.5 px-2.5 py-3">
          {BUBBLES.map((b, i) => {
            const visible = i < visibleCount;
            return (
              <div
                key={i}
                className={`flex ${b.side === "right" ? "justify-end" : "justify-start"}`}
                style={{
                  opacity: visible ? 1 : 0,
                  transform: visible ? "translateY(0) scale(1)" : "translateY(6px) scale(0.94)",
                  transition: "opacity 320ms ease-out, transform 320ms cubic-bezier(0.22,1,0.36,1)",
                }}
              >
                <div
                  className={`max-w-[82%] rounded-2xl px-2.5 py-1.5 text-[10px] leading-snug shadow-sm ${
                    b.side === "left"
                      ? "rounded-tl-md bg-[hsl(128_60%_94%)] text-[hsl(128_55%_18%)]"
                      : "rounded-tr-md bg-foreground/90 text-white"
                  }`}
                >
                  {b.text}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* SR-only readout */}
      <ul className="sr-only">
        {BUBBLES.map((b, i) => (
          <li key={i}>{b.srText}</li>
        ))}
      </ul>
    </div>
  );
};
