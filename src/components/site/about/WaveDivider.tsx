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
      viewBox="0 0 1440 120"
      preserveAspectRatio="none"
      className="block h-[120px] w-full"
      style={{ transform: flip ? "scaleY(-1)" : undefined }}
    >
      <path
        d="M0,60 C180,10 360,110 540,70 C720,30 900,100 1080,75 C1230,55 1350,30 1440,55 L1440,120 L0,120 Z"
        fill={to}
      />
    </svg>
  </div>
);
