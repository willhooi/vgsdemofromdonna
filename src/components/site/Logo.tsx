import logoImg from "@/assets/brand/vietguys-accrete-horizontal.png";

type Props = { className?: string };

export const Logo = ({ className }: Props) => (
  <img
    src={logoImg}
    alt="VietGuys — A member of Accrete from Japan"
    className={className ?? "h-10 w-auto md:h-12"}
    loading="eager"
    decoding="async"
  />
);
