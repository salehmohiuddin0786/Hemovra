import { motion } from "framer-motion";
import { CheckCircle2, Sparkles } from "lucide-react";
import { Button } from "./Button.jsx";

export function SuccessScreen({ title, message, summary = [], primaryLabel = "Done", onPrimary, secondaryLabel, onSecondary }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.96 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -10, scale: 0.98 }}
      transition={{ type: "spring", stiffness: 220, damping: 22 }}
      className="relative overflow-hidden rounded-3xl bg-card border border-border shadow-[var(--shadow-elegant)] p-8 md:p-12 text-center"
    >
      {/* animated backdrop blobs */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full bg-primary/10 blur-3xl"
        animate={{ scale: [1, 1.15, 1], opacity: [0.4, 0.7, 0.4] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-success/10 blur-3xl"
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
      />

      {/* burst ring */}
      <div className="relative mx-auto mb-6 flex h-24 w-24 items-center justify-center">
        <motion.span
          className="absolute inset-0 rounded-full bg-success/20"
          initial={{ scale: 0.4, opacity: 0.9 }}
          animate={{ scale: 1.8, opacity: 0 }}
          transition={{ duration: 1.2, repeat: Infinity, ease: "easeOut" }}
        />
        <motion.span
          className="absolute inset-0 rounded-full bg-success/25"
          initial={{ scale: 0.4, opacity: 0.9 }}
          animate={{ scale: 2.2, opacity: 0 }}
          transition={{ duration: 1.4, repeat: Infinity, ease: "easeOut", delay: 0.3 }}
        />
        <motion.div
          initial={{ scale: 0, rotate: -30 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ type: "spring", stiffness: 260, damping: 14, delay: 0.1 }}
          className="relative flex h-20 w-20 items-center justify-center rounded-full bg-success text-white shadow-lg"
        >
          <CheckCircle2 className="h-10 w-10" strokeWidth={2.4} />
        </motion.div>
        <motion.div
          className="absolute -top-2 -right-2 text-primary"
          initial={{ scale: 0, rotate: 0 }}
          animate={{ scale: [0, 1.2, 1], rotate: [0, 20, 0] }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Sparkles className="h-6 w-6" />
        </motion.div>
      </div>

      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.25 }}
        className="relative text-2xl md:text-3xl font-bold"
      >
        {title}
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.35 }}
        className="relative mt-3 text-muted-foreground max-w-lg mx-auto"
      >
        {message}
      </motion.p>

      {summary.length > 0 && (
        <motion.dl
          initial="hidden"
          animate="show"
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.08, delayChildren: 0.45 } } }}
          className="relative mt-6 mx-auto max-w-md grid sm:grid-cols-2 gap-3 text-left"
        >
          {summary.map((s) => (
            <motion.div
              key={s.label}
              variants={{ hidden: { opacity: 0, y: 8 }, show: { opacity: 1, y: 0 } }}
              className="rounded-xl border border-border bg-muted/40 px-4 py-3"
            >
              <dt className="text-[11px] uppercase tracking-wider text-muted-foreground">{s.label}</dt>
              <dd className="text-sm font-semibold truncate">{s.value}</dd>
            </motion.div>
          ))}
        </motion.dl>
      )}

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="relative mt-8 flex flex-col sm:flex-row items-center justify-center gap-3"
      >
        {secondaryLabel && (
          <Button type="button" variant="outline" onClick={onSecondary}>
            {secondaryLabel}
          </Button>
        )}
        <Button type="button" onClick={onPrimary}>
          {primaryLabel}
        </Button>
      </motion.div>
    </motion.div>
  );
}
