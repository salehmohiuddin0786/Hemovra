import { cn } from "../../utils/cn.js";

export function Card({ className = "", children, ...props }) {
  return (
    <div
      className={cn(
        "rounded-2xl bg-card border border-border/70 shadow-[var(--shadow-card)] p-6 transition-all duration-300",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}
