import { useEffect, useRef, useState } from "react";

export function useCountUp(target, { duration = 1600, start = false } = {}) {
  const [value, setValue] = useState(0);
  const raf = useRef();

  useEffect(() => {
    if (!start) return;
    const t0 = performance.now();
    const tick = (t) => {
      const p = Math.min(1, (t - t0) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      setValue(Math.round(eased * target));
      if (p < 1) raf.current = requestAnimationFrame(tick);
    };
    raf.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf.current);
  }, [target, duration, start]);

  return value;
}
