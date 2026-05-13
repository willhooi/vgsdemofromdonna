import { BrandMark } from "@/components/brand/BrandMark";

type Props = { className?: string };

/** Backwards-compatible wrapper — uses the real BrandMark internally. */
export const Logo = ({ className }: Props) => (
  <BrandMark variant="horizontal" className={className} />
);
