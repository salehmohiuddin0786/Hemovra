import { cn } from "../../utils/cn.js";

export function Button({
  as: Comp = "button",
  variant = "primary",
  size = "md",
  className = "",
  children,
  ...props
}) {
  const base =
    "inline-flex items-center justify-center gap-2 font-semibold rounded-full transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:ring-offset-2 disabled:opacity-60 disabled:pointer-events-none";
  const variants = {
    primary:
      "text-primary-foreground shadow-[var(--shadow-elegant)] hover:-translate-y-0.5 hover:brightness-110 active:translate-y-0",
    outline:
      "border border-border bg-white text-foreground hover:border-primary hover:text-primary hover:-translate-y-0.5",
    ghost: "text-foreground hover:bg-muted",
    danger:
      "bg-danger text-white hover:brightness-110 shadow-[var(--shadow-elegant)]",
  };
  const sizes = {
    sm: "text-sm px-4 py-2",
    md: "text-sm px-6 py-3",
    lg: "text-base px-8 py-4",
  };
  const style =
    variant === "primary"
      ? { backgroundImage: "var(--gradient-primary)" }
      : undefined;
  return (
    <Comp
      className={cn(base, variants[variant], sizes[size], className)}
      style={style}
      {...props}
    >
      {children}
    </Comp>
  );
}
