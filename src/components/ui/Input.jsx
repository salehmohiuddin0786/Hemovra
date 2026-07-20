import { cn } from "../../utils/cn.js";

export function Field({ label, error, required, children, hint }) {
  return (
    <label className="block">
      <span className="block text-sm font-medium text-foreground mb-1.5">
        {label}
        {required && <span className="text-primary ml-0.5">*</span>}
      </span>
      {children}
      {hint && !error && (
        <span className="mt-1 block text-xs text-muted-foreground">{hint}</span>
      )}
      {error && (
        <span className="mt-1 block text-xs text-danger">{error}</span>
      )}
    </label>
  );
}

const inputBase =
  "w-full rounded-xl border border-border bg-white px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/70 outline-none transition focus:border-primary focus:ring-4 focus:ring-primary/10";

export function Input({ className = "", error, ...props }) {
  return (
    <input
      className={cn(inputBase, error && "border-danger focus:ring-danger/10", className)}
      {...props}
    />
  );
}

export function Textarea({ className = "", error, ...props }) {
  return (
    <textarea
      className={cn(inputBase, "min-h-[110px] resize-y", error && "border-danger focus:ring-danger/10", className)}
      {...props}
    />
  );
}

export function Select({ className = "", error, children, ...props }) {
  return (
    <select
      className={cn(inputBase, "appearance-none bg-white pr-10", error && "border-danger focus:ring-danger/10", className)}
      style={{
        backgroundImage:
          "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%236b7280' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'><polyline points='6 9 12 15 18 9'/></svg>\")",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "right 0.9rem center",
        backgroundSize: "16px",
      }}
      {...props}
    >
      {children}
    </select>
  );
}
