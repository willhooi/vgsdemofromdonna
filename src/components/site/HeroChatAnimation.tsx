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
import houseAvatar from "@/assets/hero-icons/house-avatar.png";

/**
 * HeroChatAnimation
 * - Phone mockup with sequential VietGuys chat bubbles.
 * - 8 channel icons orbit around the phone, pulsing in sequence.
 * - Editor mode (toggle via floating button or ?edit=1) lets you drag icons.
 *   Positions persist to localStorage under HERO_ICON_POS_KEY.
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
        Mã OTP xác thực:
        <br />
        <b className="font-mono tracking-[0.2em] text-[#39b44a] text-[11px]">482916</b>
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
      <>
        Cảm ơn Quý khách đã sử dụng dịch vụ của chúng tôi!
        <br />
        <span className="mt-1 inline-flex items-center gap-0.5">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} className="h-3 w-3 fill-[#ff9b17] text-[#ff9b17]" />
          ))}
        </span>
      </>
    ),
    srText: "Cảm ơn Quý khách đã sử dụng dịch vụ của chúng tôi",
  },
  {
    side: "left",
    text: (
      <>
        <span>
          Tặng Quý khách Voucher <b>30%</b> cho lần mua sắm tiếp theo
          <Gift className="ml-0.5 inline-block h-3 w-3 text-[#ff9b17] align-[-2px]" />
        </span>
        <br />
        <span className="mt-1.5 inline-block rounded-full bg-[#39b44a] px-2 py-0.5 text-[9px] font-bold text-white shadow-sm">
          Sử dụng ngay!
        </span>
      </>
    ),
    srText: "Tặng Quý khách Voucher 30% cho lần mua sắm tiếp theo. Sử dụng ngay",
  },
];

type Chip = {
  id: string;
  label: string;
  icon: string;
  /** default position as % of container (top-left origin of chip) */
  default: { x: number; y: number };
};

const CHIPS: Chip[] = [
  { id: "sms", label: "SMS", icon: smsIcon, default: { x: 4, y: 6 } },
  { id: "voice", label: "Voice", icon: voiceIcon, default: { x: 44, y: 0 } },
  { id: "viber", label: "Viber", icon: viberIcon, default: { x: 84, y: 10 } },
  { id: "customized", label: "Customized", icon: customizedIcon, default: { x: 0, y: 42 } },
  { id: "zalo", label: "Zalo", icon: zaloIcon, default: { x: 86, y: 44 } },
  { id: "miniapp", label: "Mini App", icon: miniappIcon, default: { x: 2, y: 78 } },
  { id: "email", label: "Email", icon: emailIcon, default: { x: 44, y: 90 } },
  { id: "rewards", label: "Rewards", icon: rewardsIcon, default: { x: 84, y: 80 } },
];

const STORAGE_KEY = "vg.hero.icon.positions.v1";

type PositionMap = Record<string, { x: number; y: number }>;

const loadPositions = (): PositionMap => {
  if (typeof window === "undefined") return {};
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as PositionMap) : {};
  } catch {
    return {};
  }
};

const savePositions = (p: PositionMap) => {
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(p));
  } catch {
    /* noop */
  }
};

const ADMIN_KEY = "vg_admin";

export const HeroChatAnimation = () => {
  const [visibleCount, setVisibleCount] = useState(1);
  const [activeChip, setActiveChip] = useState(0);
  const [editMode, setEditMode] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [positions, setPositions] = useState<PositionMap>(() => loadPositions());
  const containerRef = useRef<HTMLDivElement>(null);
  const dragRef = useRef<{ id: string; offX: number; offY: number } | null>(null);

  // Admin gate: ?admin=1 unlocks (persists in localStorage), ?admin=0 revokes.
  // Public viewers never see the Edit toolbar.
  useEffect(() => {
    if (typeof window === "undefined") return;
    const params = new URLSearchParams(window.location.search);
    const flag = params.get("admin");
    try {
      if (flag === "1") window.localStorage.setItem(ADMIN_KEY, "1");
      if (flag === "0") window.localStorage.removeItem(ADMIN_KEY);
    } catch {
      /* noop */
    }
    const unlocked = (() => {
      try { return window.localStorage.getItem(ADMIN_KEY) === "1"; } catch { return false; }
    })();
    setIsAdmin(unlocked);
    if (unlocked && params.get("edit") === "1") setEditMode(true);
  }, []);


  // Chat bubble sequence
  useEffect(() => {
    const totalSteps = BUBBLES.length + 2;
    let step = 1;
    const id = setInterval(() => {
      step = step >= totalSteps ? 1 : step + 1;
      setVisibleCount(Math.min(step, BUBBLES.length));
    }, 1800);
    return () => clearInterval(id);
  }, []);

  // Sequenced chip highlight (paused in edit mode for clarity)
  useEffect(() => {
    if (editMode) return;
    const id = setInterval(() => {
      setActiveChip((c) => (c + 1) % CHIPS.length);
    }, 600);
    return () => clearInterval(id);
  }, [editMode]);

  const getPos = (chip: Chip) => positions[chip.id] ?? chip.default;

  const onPointerDown = useCallback(
    (e: React.PointerEvent, id: string) => {
      if (!editMode) return;
      e.preventDefault();
      e.stopPropagation();
      const target = e.currentTarget as HTMLElement;
      target.setPointerCapture(e.pointerId);
      const rect = containerRef.current?.getBoundingClientRect();
      const chipRect = target.getBoundingClientRect();
      if (!rect) return;
      dragRef.current = {
        id,
        offX: e.clientX - chipRect.left,
        offY: e.clientY - chipRect.top,
      };
    },
    [editMode]
  );

  const onPointerMove = useCallback((e: React.PointerEvent) => {
    const drag = dragRef.current;
    const rect = containerRef.current?.getBoundingClientRect();
    if (!drag || !rect) return;
    const x = ((e.clientX - drag.offX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - drag.offY - rect.top) / rect.height) * 100;
    const clampedX = Math.max(-4, Math.min(96, x));
    const clampedY = Math.max(-4, Math.min(96, y));
    setPositions((prev) => ({ ...prev, [drag.id]: { x: clampedX, y: clampedY } }));
  }, []);

  const onPointerUp = useCallback((e: React.PointerEvent) => {
    if (dragRef.current) {
      savePositions(positions);
    }
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
      window.localStorage.removeItem(STORAGE_KEY);
    } catch {
      /* noop */
    }
  };

  return (
    <div className="relative">
      {/* Edit-mode floating toolbar — admin only */}
      {isAdmin && (
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
            aria-label={editMode ? "Lock icons" : "Edit icon positions"}
          >
            {editMode ? <Lock className="h-3 w-3" /> : <Move className="h-3 w-3" />}
            {editMode ? "Done" : "Edit"}
          </button>
          {editMode && (
            <button
              type="button"
              onClick={resetPositions}
              className="flex items-center gap-1 rounded-full border border-border bg-white/90 px-2.5 py-1 text-[11px] font-semibold text-foreground shadow-sm hover:bg-white"
              aria-label="Reset positions"
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
              className="absolute select-none"
              style={{
                left: `${pos.x}%`,
                top: `${pos.y}%`,
                animation: editMode ? "none" : `chip-float 5.4s ease-in-out infinite`,
                animationDelay: `${i * 0.28}s`,
                cursor: editMode ? "grab" : "default",
                touchAction: "none",
                zIndex: editMode ? 15 : 5,
              }}
              onPointerDown={(e) => onPointerDown(e, chip.id)}
            >
              <div
                className="flex h-11 w-11 sm:h-12 sm:w-12 items-center justify-center rounded-2xl bg-white/0 transition-transform duration-300"
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
            </div>
          );
        })}

        {/* Phone frame */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[58%] aspect-[9/16] rounded-[28px] bg-white shadow-[0_22px_60px_-20px_rgba(20,80,30,0.35),0_0_0_1px_hsl(var(--border))] overflow-hidden phone-float">
          <div className="flex items-center gap-2 border-b border-border/70 px-3 py-2">
            <div className="flex h-7 w-7 items-center justify-center overflow-hidden rounded-full bg-white ring-1 ring-border">
              <img src={houseAvatar} alt="VietGuys" className="h-full w-full object-contain p-0.5" />
            </div>
            <div className="flex flex-col">
              <span className="text-[10px] font-bold leading-none text-foreground">BRAND NAME</span>
              <span className="flex items-center gap-1 text-[8px] text-muted-foreground">
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#39b44a]" />
                Online
              </span>
            </div>
          </div>

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

        <ul className="sr-only">
          {BUBBLES.map((b, i) => (
            <li key={i}>{b.srText}</li>
          ))}
        </ul>
      </div>

      {editMode && (
        <p className="mt-2 text-center text-[11px] text-muted-foreground">
          Kéo các icon để sắp xếp lại quanh điện thoại. Vị trí được lưu tự động trên thiết bị này.
        </p>
      )}
    </div>
  );
};
