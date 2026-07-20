import { motion } from "framer-motion";
import { HeartPulse, Ambulance, Stethoscope, Users2, ShieldCheck, Sparkles } from "lucide-react";
import { SectionHeading } from "../ui/SectionHeading.jsx";

const REASONS = [
  {
    icon: HeartPulse,
    title: "Support emergency healthcare",
    text: "Hospitals and trauma centers rely on a steady supply of safe blood every single day.",
  },
  {
    icon: Ambulance,
    title: "Help accident victims",
    text: "Road accidents and disasters demand rapid access to matched blood units within minutes.",
  },
  {
    icon: Stethoscope,
    title: "Assist surgeries & treatments",
    text: "Complex surgeries, cancer therapy, and chronic conditions all depend on donated blood.",
  },
  {
    icon: Users2,
    title: "Strengthen your community",
    text: "A single donation ripples outward — patients, families, and neighborhoods all benefit.",
  },
  {
    icon: ShieldCheck,
    title: "Safe and rewarding",
    text: "Sterile equipment, trained professionals, and free health screening with every donation.",
  },
  {
    icon: Sparkles,
    title: "A healthier you",
    text: "Regular donation supports cardiovascular health and gives you a mini check-up each visit.",
  },
];

export function WhyDonate() {
  return (
    <section className="bg-muted/60 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Why donate"
          title="Why blood donation matters"
          subtitle="Every 2 seconds, someone somewhere needs blood. Here's what your one donation makes possible."
        />

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {REASONS.map((r, i) => (
            <motion.div
              key={r.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              whileHover={{ y: -6 }}
              className="group rounded-2xl bg-card border border-border p-6 shadow-[var(--shadow-card)] hover:border-primary/30 hover:shadow-[var(--shadow-elegant)] transition-all"
            >
              <span
                className="grid h-12 w-12 place-items-center rounded-xl bg-accent text-primary group-hover:text-white transition-colors"
                style={{
                  backgroundImage:
                    "linear-gradient(135deg, transparent, transparent)",
                }}
              >
                <r.icon className="h-6 w-6" />
              </span>
              <h3 className="mt-5 text-lg font-semibold">{r.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                {r.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
