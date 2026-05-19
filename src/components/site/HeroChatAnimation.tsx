import { useEffect, useRef, useState, useCallback } from "react";
import { Gift, Lock, RotateCcw, Move, Star } from "lucide-react";

import smsIcon from "@/assets/hero-icons/sms.png";
import zaloIcon from "@/assets/hero-icons/zalo.png";
import viberIcon from "@/assets/hero-icons/viber.png";
import emailIcon from "@/assets/hero-icons/email.png";
import rewardsIcon from "@/assets/hero-icons/rewards.png";
import voiceIcon from "@/assets/hero-icons/voice.png";
import customizedIcon from "@/assets/hero-icons/customized.png";
import miniappIcon from "@/assets/hero-icons/miniapp.png";
import phoneFrame from "@/assets/hero/phone-frame.png";
import vlAvatar from "@/assets/hero/vl-avatar.png";

/**
 * HeroChatAnimation
 * - Phone mockup with sequential VietGuys chat bubbles.
 * - 8 channel icons orbit around the phone, pulsing in sequence.
 * - Editor mode (admin only) lets you drag + resize icons.
 *   Enable via ?edit=1 or localStorage["vg.admin"]="1".
 *   Positions + sizes persist to localStorage.
 */

type Bubble = {
  side: "left" | "right";
  text: React.ReactNode;
  srText: string;
};

const BUBBLES: Bubble[] = [
  {
    side: "left",
    text: <>Xin chào <b>Nguyễn An</b>, cảm ơn bạn đã đăng ký 👋</>,
    srText: "Xin chào Nguyễn An, cảm ơn bạn đã đăng ký",
  },
  {
    side: "left",
    text: (
      <>
        Mã OTP xác thực:{" "}
        <b className="font-mono tracking-wider rounded-md bg-[#ff9b17]/15 px-1.5 py-0.5 text-[#b8650a]">
          482916
        </b>
      </>
    ),
    srText: "Mã OTP xác thực 482916",
  },
  {
    side: "right",
    text: <>Tôi cần hỗ trợ đổi mật khẩu</>,
    srText: "Tôi cần hỗ trợ đổi mật khẩu",
  },
  {
    side: "left",
    text: <>Đã gửi link reset qua Email ✉️</>,
    srText: "Đã gửi link reset qua Email",
  },
  {
    side: "right",
    text: <>Trải nghiệm sản phẩm mới!</>,
    srText: "Trải nghiệm sản phẩm mới",
  },
  {
    side: "left",
    text: (
      <span className="inline-flex items-center gap-1">
        Đơn hàng đã giao thành công!
        <span className="inline-flex items-center gap-[1px] text-[#ff9b17]">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} className="h-2.5 w-2.5 fill-current" />
          ))}
        </span>
      </span>
    ),
    srText: "Đơn hàng đã giao thành công - 5 sao",
  },
  {
    side: "left",
    text: (
      <span className="flex flex-col gap-1">
        <span className="inline-flex items-center gap-1">
          Tặng bạn Voucher <b>30%</b> cho đơn hàng tiếp theo
          <Gift className="h-3 w-3 inline-block text-[#ff9b17]" />
        </span>
        <span className="inline-flex w-fit rounded-full bg-[#39b44a] px-2 py-0.5 text-[8px] font-bold text-white shadow-sm">
          Sử dụng ngay!
        </span>
      </span>
    ),
    srText: "Tặng bạn Voucher 30% cho đơn hàng tiếp theo. Sử dụng ngay",
  },
];

type Chip = {
  id: string;
  label: string;
  icon: string;
  default: { x: number; y: number; size: number };
};

// Safe zones: x/y in % (chip top-left), size in % of container width.
// Default size 11% ≈ matches previous 11/12 px chip.
const CHIPS: Chip[] = [
  { id: "sms", label: "SMS", icon: smsIcon, default: { x: 2, y: 4, size: 12 } },
  { id: "voice", label: "Voice", icon: voiceIcon, default: { x: 44, y: -1, size: 12 } },
  { id: "viber", label: "Viber", icon: viberIcon, default: { x: 86, y: 6, size: 12 } },
  { id: "customized", label: "Customized", icon: customizedIcon, default: { x: -2, y: 42, size: 12 } },
  { id: "zalo", label: "Zalo", icon: zaloIcon, default: { x: 88, y: 44, size: 12 } },
  { id: "miniapp", label: "Mini App", icon: miniappIcon, default: { x: 0, y: 82, size: 12 } },
  { id: "email", label: "Email", icon: emailIcon, default: { x: 44, y: 92, size: 12 } },
  { id: "rewards", label: "Rewards", icon: rewardsIcon, default: { x: 86, y: 82, size: 12 } },
];

const POS_KEY = "vg.hero.icon.positions.v2";
const ADMIN_KEY = "vg.admin";

// Safe-zone clamps (in %) — keeps icons inside the visible band on mobile too.
const SAFE = { minX: -4, maxX: 96, minY: -4, maxY: 96, minSize: 7, maxSize: 18 };

type PosEntry = { x: number; y: number; size: number };
type PositionMap = Record<string, PosEntry>;

const loadPositions = (): PositionMap => {
  if (typeof window === "undefined") return {};
  try {
    const raw = window.localStorage.getItem(POS_KEY);
    return raw ? (JSON.parse(raw) as PositionMap) : {};
  } catch {
    return {};
  }
};

const savePositions = (p: PositionMap) => {
  try {
    window.localStorage.setItem(POS_KEY, JSON.stringify(p));
  } catch {
    /* noop */
  }
};

const isAdmin = () => {
  if (typeof window === "undefined") return false;
  try {
    const params = new URLSearchParams(window.location.search);
    if (params.get("edit") === "1") {
      window.localStorage.setItem(ADMIN_KEY, "1");
      return true;
    }
    if (params.get("edit") === "0") {
      window.localStorage.removeItem(ADMIN_KEY);
      return false;
    }
    return window.localStorage.getItem(ADMIN_KEY) === "1";
  } catch {
    return false;
  }
};

export const HeroChatAnimation = () => {
  const [visibleCount, setVisibleCount] = useState(1);
  const [activeChip, setActiveChip] = useState(0);
  const [admin, setAdmin] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [positions, setPositions] = useState<PositionMap>(() => loadPositions());
  const containerRef = useRef<HTMLDivElement>(null);
  const dragRef = useRef<{ mode: "move" | "resize"; id: string; offX: number; offY: number; startSize: number; startX: number; startY: number } | null>(null);

  useEffect(() => {
    setAdmin(isAdmin());
  }, []);

  // Chat bubble sequence
  useEffect(() => {
    const totalSteps = BUBBLES.length + 2;
    let step = 1;
    const id = setInterval(() => {
      step = step >= totalSteps ? 1 : step + 1;
      setVisibleCount(Math.min(step, BUBBLES.length));
    }, 1500);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    if (editMode) return;
    const id = setInterval(() => {
      setActiveChip((c) => (c + 1) % CHIPS.length);
    }, 600);
    return () => clearInterval(id);
  }, [editMode]);

  const getPos = (chip: Chip): PosEntry => positions[chip.id] ?? chip.default;

  const onPointerDown = useCallback(
    (e: React.PointerEvent, id: string, mode: "move" | "resize") => {
      if (!editMode) return;
      e.preventDefault();
      e.stopPropagation();
      const target = e.currentTarget as HTMLElement;
      target.setPointerCapture(e.pointerId);
      const rect = containerRef.current?.getBoundingClientRect();
      if (!rect) return;
      const chip = CHIPS.find((c) => c.id === id)!;
      const current = positions[id] ?? chip.default;
      const chipRect = (target.closest("[data-chip]") as HTMLElement)?.getBoundingClientRect() ?? target.getBoundingClientRect();
      dragRef.current = {
        mode,
        id,
        offX: e.clientX - chipRect.left,
        offY: e.clientY - chipRect.top,
        startSize: current.size,
        startX: e.clientX,
        startY: e.clientY,
      };
    },
    [editMode, positions]
  );

  const onPointerMove = useCallback((e: React.PointerEvent) => {
    const drag = dragRef.current;
    const rect = containerRef.current?.getBoundingClientRect();
    if (!drag || !rect) return;
    const chip = CHIPS.find((c) => c.id === drag.id)!;
    const current = positions[drag.id] ?? chip.default;

    if (drag.mode === "move") {
      const x = ((e.clientX - drag.offX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - drag.offY - rect.top) / rect.height) * 100;
      setPositions((prev) => ({
        ...prev,
        [drag.id]: {
          ...current,
          x: Math.max(SAFE.minX, Math.min(SAFE.maxX, x)),
          y: Math.max(SAFE.minY, Math.min(SAFE.maxY, y)),
        },
      }));
    } else {
      // Resize: drag right/down increases size
      const deltaPx = Math.max(e.clientX - drag.startX, e.clientY - drag.startY);
      const deltaPct = (deltaPx / rect.width) * 100;
      const next = Math.max(SAFE.minSize, Math.min(SAFE.maxSize, drag.startSize + deltaPct));
      setPositions((prev) => ({
        ...prev,
        [drag.id]: { ...current, size: next },
      }));
    }
  }, [positions]);

  const onPointerUp = useCallback((e: React.PointerEvent) => {
    if (dragRef.current) savePositions(positions);
    dragRef.current = null;
    try {
      (e.currentTarget as HTMLElement).releasePointerCapture(e.pointerId);
    } catch {
      /* noop */
    }
  }, [positions]);

  const resetPositions = () => {
    setPositions({});
    try {
      window.localStorage.removeItem(POS_KEY);
    } catch {
      /* noop */
    }
  };

  return (
    <div className="relative">
      {admin && (
        <div className="absolute -top-2 right-0 z-20 flex items-center gap-1.5">
          <button
            type="button"
            onClick={() => {
              if (editMode) savePositions(positions);
              setEditMode((v) => !v);
            }}
            className={`flex items-center gap-1 rounded-full border px-2.5 py-1 text-[11px] font-semibold shadow-sm transition-colors ${
              editMode
                ? "border-[#39b44a] bg-[#39b44a] text-white"
                : "border-border bg-white/90 text-foreground hover:bg-white"
            }`}
          >
            {editMode ? <Lock className="h-3 w-3" /> : <Move className="h-3 w-3" />}
            {editMode ? "Done" : "Edit"}
          </button>
          {editMode && (
            <button
              type="button"
              onClick={resetPositions}
              className="flex items-center gap-1 rounded-full border border-border bg-white/90 px-2.5 py-1 text-[11px] font-semibold text-foreground shadow-sm hover:bg-white"
            >
              <RotateCcw className="h-3 w-3" /> Reset
            </button>
          )}
        </div>
      )}

      <div
        ref={containerRef}
        className="hero-anim relative mx-auto w-full max-w-[420px] aspect-[5/6] touch-none"
        aria-hidden="true"
        onPointerMove={editMode ? onPointerMove : undefined}
        onPointerUp={editMode ? onPointerUp : undefined}
      >
        {/* Soft radial glow */}
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
        {CHIPS.map((chip, i) => {
          const pos = getPos(chip);
          const isActive = !editMode && activeChip === i;
          return (
            <div
              key={chip.id}
              data-chip
              className="absolute select-none"
              style={{
                left: `${pos.x}%`,
                top: `${pos.y}%`,
                width: `${pos.size}%`,
                aspectRatio: "1 / 1",
                animation: editMode ? "none" : `chip-float 5.4s ease-in-out infinite`,
                animationDelay: `${i * 0.28}s`,
                cursor: editMode ? "grab" : "default",
                touchAction: "none",
                zIndex: editMode ? 15 : 5,
              }}
              onPointerDown={(e) => onPointerDown(e, chip.id, "move")}
            >
              <div
                className="flex h-full w-full items-center justify-center rounded-2xl transition-transform duration-300"
                style={{
                  transform: isActive ? "scale(1.14)" : "scale(1)",
                  filter: editMode
                    ? "drop-shadow(0 0 0 2px rgba(57,180,74,0.6)) drop-shadow(0 6px 14px rgba(0,0,0,0.15))"
                    : isActive
                    ? "drop-shadow(0 10px 18px rgba(57,180,74,0.45))"
                    : "drop-shadow(0 6px 14px rgba(20,80,30,0.18))",
                }}
              >
                <img
                  src={chip.icon}
                  alt={chip.label}
                  draggable={false}
                  className="h-full w-full object-contain pointer-events-none"
                />
              </div>

              {editMode && (
                <button
                  type="button"
                  onPointerDown={(e) => onPointerDown(e, chip.id, "resize")}
                  className="absolute -bottom-1 -right-1 h-3.5 w-3.5 rounded-full border border-white bg-[#39b44a] shadow"
                  style={{ cursor: "nwse-resize", touchAction: "none" }}
                  aria-label={`Resize ${chip.label}`}
                />
              )}
            </div>
          );
        })}

        {/* Phone — uses uploaded frame image */}
        <div
          className="phone-float absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[62%] aspect-[392/720]"
          style={{ containerType: "inline-size" }}
        >
          <img
            src={phoneFrame}
            alt=""
            draggable={false}
            className="pointer-events-none absolute inset-0 h-full w-full object-contain"
          />
          {/* Screen safe area inside the frame (tuned to the uploaded mockup). */}
          <div className="absolute inset-[2.5%_3.5%_16%_3.5%] overflow-hidden rounded-[8%]">
            {/* Header — sizes scale with phone width via container queries */}
            <div
              className="flex items-center border-b border-border/70 bg-white/95 backdrop-blur"
              style={{ gap: "3cqw", padding: "3cqw 4cqw" }}
            >
              <div
                className="flex items-center justify-center overflow-hidden rounded-full bg-white ring-1 ring-border"
                style={{ width: "13cqw", height: "13cqw" }}
              >
                <img src={vlAvatar} alt="" className="h-full w-full object-contain p-[6%]" />
              </div>
              <div className="flex flex-col" style={{ gap: "1cqw" }}>
                <span className="font-bold leading-none text-foreground" style={{ fontSize: "4.8cqw" }}>
                  VietGuys
                </span>
                <span
                  className="flex items-center text-muted-foreground"
                  style={{ gap: "1.5cqw", fontSize: "3.6cqw" }}
                >
                  <span
                    className="inline-block rounded-full bg-[#39b44a]"
                    style={{ width: "1.8cqw", height: "1.8cqw" }}
                  />
                  Online
                </span>
              </div>
            </div>

            {/* Chat list */}
            <div className="flex flex-col" style={{ gap: "1.4cqw", padding: "2cqw 2cqw" }}>
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
                      className={`max-w-[86%] rounded-2xl shadow-sm leading-snug ${
                        b.side === "left"
                          ? "rounded-tl-md bg-[hsl(128_60%_94%)] text-[hsl(128_55%_18%)]"
                          : "rounded-tr-md bg-foreground/90 text-white"
                      }`}
                      style={{ fontSize: "3.6cqw", padding: "2cqw 2.8cqw" }}
                    >
                      {b.text}
                    </div>

                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <ul className="sr-only">
          {BUBBLES.map((b, i) => (
            <li key={i}>{b.srText}</li>
          ))}
        </ul>
      </div>

      {admin && editMode && (
        <p className="mt-2 text-center text-[11px] text-muted-foreground">
          Kéo icon để di chuyển, kéo chấm xanh góc dưới-phải để resize. Vùng an toàn được tự động giới hạn.
        </p>
      )}
    </div>
  );
};
