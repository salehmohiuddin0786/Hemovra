import { useCountUp } from "../../hooks/useCountUp.js";
import { useInView } from "../../hooks/useInView.js";

function formatNumber(n) {
  return n.toLocaleString("en-US");
}

export function AnimatedCounter({ value, suffix = "", duration = 1800 }) {
  const [ref, inView] = useInView({ threshold: 0.3 });
  const count = useCountUp(value, { duration, start: inView });
  return (
    <span ref={ref} className="tabular-nums">
      {formatNumber(count)}
      {suffix}
    </span>
  );
}
