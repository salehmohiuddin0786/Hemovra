import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { HeartHandshake, Droplet, ArrowRight } from "lucide-react";
import { Button } from "../ui/Button.jsx";
import heroImg from "../../assets/hero-donation.jpg";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-hero">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-14 pb-20 md:pt-20 md:pb-28">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-white/70 px-3 py-1 text-xs font-semibold text-primary backdrop-blur">
              <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
              Every drop counts
            </span>
            <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.05] text-foreground">
              Donate Blood,{" "}
              <span className="text-gradient">Save Lives</span>
            </h1>
            <p className="mt-5 text-lg text-muted-foreground max-w-xl leading-relaxed">
              One donation can help save up to three lives. Hemovra connects
              compassionate donors with hospitals and families in urgent need —
              quickly, safely, and with dignity.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button as={Link} to="/donate" size="lg">
                <HeartHandshake className="h-5 w-5" />
                Become a Donor
              </Button>
              <Button as={Link} to="/request" size="lg" variant="outline">
                <Droplet className="h-5 w-5" />
                Request Blood
              </Button>
            </div>

            <div className="mt-10 flex items-center gap-4 text-sm text-muted-foreground">
              <div className="flex -space-x-2">
                {["A+", "O-", "B+", "AB+"].map((g, i) => (
                  <span
                    key={i}
                    className="grid h-9 w-9 place-items-center rounded-full border-2 border-white bg-accent text-xs font-bold text-primary shadow-sm"
                  >
                    {g}
                  </span>
                ))}
              </div>
              <span>
                <strong className="text-foreground">24,500+</strong> donors ready
                to help
              </span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
            className="relative"
          >
            <div className="relative rounded-[2rem] overflow-hidden shadow-[var(--shadow-elegant)] border border-white/60">
              <img
                src={heroImg}
                alt="Community members supporting blood donation at Hemovra"
                className="w-full h-auto object-cover"
                loading="eager"
              />
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="hidden sm:flex absolute -bottom-6 -left-6 glass rounded-2xl p-4 items-center gap-3 shadow-[var(--shadow-card)]"
            >
              <span
                className="grid h-10 w-10 place-items-center rounded-xl text-white"
                style={{ backgroundImage: "var(--gradient-primary)" }}
              >
                <Droplet className="h-5 w-5" fill="currentColor" />
              </span>
              <div>
                <p className="text-xs text-muted-foreground">Last hour</p>
                <p className="text-sm font-semibold">
                  17 successful matches
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="hidden sm:flex absolute -top-6 -right-6 glass rounded-2xl p-4 items-center gap-3 shadow-[var(--shadow-card)]"
            >
              <div>
                <p className="text-xs text-muted-foreground">Response time</p>
                <p className="text-sm font-semibold flex items-center gap-1">
                  ~7 min <ArrowRight className="h-3 w-3 text-primary" />
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
