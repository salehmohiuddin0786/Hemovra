import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { CalendarRange, Scale, Activity, Timer, Check, X } from "lucide-react";
import { SectionHeading } from "../components/ui/SectionHeading.jsx";

const RULES = [
  { icon: CalendarRange, title: "Age 18–65", text: "You must be at least 18 and no older than 65 years to donate blood." },
  { icon: Scale, title: "Minimum 50 kg", text: "Donors should weigh at least 50 kilograms to donate safely." },
  { icon: Activity, title: "Good overall health", text: "You should feel well, have normal vitals, and no active infections on donation day." },
  { icon: Timer, title: "3-month interval", text: "Wait a minimum of three months between whole-blood donations to fully recover." },
];

const DOS = [
  "Sleep well the night before",
  "Eat an iron-rich meal",
  "Drink plenty of water",
  "Bring a valid ID",
];
const DONTS = [
  "Avoid alcohol for 24 hours",
  "Don't donate on an empty stomach",
  "Avoid heavy exercise post-donation",
  "Do not donate if unwell or feverish",
];

export default function Eligibility() {
  return (
    <>
      <Helmet>
        <title>Blood Donation Eligibility — Hemovra</title>
        <meta name="description" content="Basic requirements and preparation tips to donate blood safely through Hemovra." />
      </Helmet>

      <section className="bg-hero">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-16 md:py-20 text-center">
          <span className="inline-block text-xs font-semibold tracking-[0.18em] uppercase text-primary mb-3">
            Eligibility
          </span>
          <h1 className="text-4xl md:text-5xl font-bold">Can I donate blood?</h1>
          <p className="mt-4 text-muted-foreground">
            A quick overview of who can donate and how to prepare for a safe,
            comfortable experience.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {RULES.map((r, i) => (
            <motion.div
              key={r.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ y: -4 }}
              className="rounded-2xl bg-card border border-border p-6 shadow-[var(--shadow-card)]"
            >
              <span
                className="grid h-12 w-12 place-items-center rounded-xl text-white"
                style={{ backgroundImage: "var(--gradient-primary)" }}
              >
                <r.icon className="h-6 w-6" />
              </span>
              <h3 className="mt-5 font-semibold text-lg">{r.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{r.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="bg-muted/60 py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Donation day" title="How to prepare" />
          <div className="mt-10 grid md:grid-cols-2 gap-5">
            <div className="rounded-2xl bg-card border border-border p-6 shadow-[var(--shadow-card)]">
              <h3 className="font-semibold text-success flex items-center gap-2">
                <Check className="h-5 w-5" /> Do
              </h3>
              <ul className="mt-4 space-y-2.5">
                {DOS.map((d) => (
                  <li key={d} className="flex items-start gap-2 text-sm">
                    <Check className="h-4 w-4 mt-0.5 text-success shrink-0" />
                    <span>{d}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl bg-card border border-border p-6 shadow-[var(--shadow-card)]">
              <h3 className="font-semibold text-danger flex items-center gap-2">
                <X className="h-5 w-5" /> Don't
              </h3>
              <ul className="mt-4 space-y-2.5">
                {DONTS.map((d) => (
                  <li key={d} className="flex items-start gap-2 text-sm">
                    <X className="h-4 w-4 mt-0.5 text-danger shrink-0" />
                    <span>{d}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
