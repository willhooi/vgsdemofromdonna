import { useEffect, useRef, useState } from "react";

export const useCountUp = (target: number, duration = 1800) => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (target === 0) {
      setValue(0);
      return;
    }

    const t0 = performance.now();
    let raf = 0;
    const tick = (t: number) => {
      const p = Math.min(1, (t - t0) / duration);
      const eased = 1 - Math.pow(1 - p, 4);
      setValue(Math.round(target * eased));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [target, duration]);

  return value;
};
