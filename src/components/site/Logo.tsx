type Props = { className?: string };

export const Logo = ({ className }: Props) => (
  <span className={`group inline-flex items-center gap-2.5 ${className ?? ""}`}>
    <span className="relative grid h-9 w-9 place-items-center rounded-xl bg-primary text-primary-foreground shadow-[var(--shadow-soft)]">
      <span className="text-sm font-extrabold tracking-tight">VG</span>
      <span className="absolute -right-0.5 -top-0.5 h-2 w-2 rounded-full bg-[hsl(var(--accent))] ring-2 ring-background" />
    </span>
    <span className="flex flex-col leading-none">
      <span className="text-base font-extrabold tracking-tight text-foreground">VietGuys</span>
      <span className="text-[10px] font-medium uppercase tracking-[0.16em] text-muted-foreground">
        Customer Engagement
      </span>
    </span>
  </a>
);
