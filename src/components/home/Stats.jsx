import { motion } from "framer-motion";
import { STATS } from "../../data/stats.js";
import { AnimatedCounter } from "../ui/AnimatedCounter.jsx";
import { Users, HeartPulse, Droplets, Building2 } from "lucide-react";

const ICONS = [Users, HeartPulse, Droplets, Building2];

export function Stats() {
  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 -mt-8 md:-mt-14 relative z-10">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        {STATS.map((s, i) => {
          const Icon = ICONS[i];
          return (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ y: -4 }}
              className="rounded-2xl bg-white border border-border shadow-[var(--shadow-card)] p-5 md:p-6"
            >
              <span
                className="grid h-11 w-11 place-items-center rounded-xl text-white mb-4"
                style={{ backgroundImage: "var(--gradient-primary)" }}
              >
                <Icon className="h-5 w-5" />
              </span>
              <p className="text-3xl md:text-4xl font-bold text-foreground">
                <AnimatedCounter value={s.value} suffix={s.suffix} />
              </p>
              <p className="mt-1 text-sm text-muted-foreground">{s.label}</p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
