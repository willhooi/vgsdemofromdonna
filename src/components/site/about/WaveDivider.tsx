interface WaveDividerProps {
  from: string;
  to: string;
  flip?: boolean;
  className?: string;
}

export const WaveDivider = ({ from, to, flip, className }: WaveDividerProps) => (
  <div
    aria-hidden
    className={`relative w-full ${className ?? ""}`}
    style={{ background: from, lineHeight: 0 }}
  >
    <svg
      viewBox="0 0 1440 90"
      preserveAspectRatio="none"
      className="block h-[90px] w-full"
      style={{ transform: flip ? "scaleY(-1)" : undefined }}
    >
      <path
        d="M0,40 C320,90 720,0 1080,50 C1260,75 1380,55 1440,40 L1440,90 L0,90 Z"
        fill={to}
      />
    </svg>
  </div>
);
