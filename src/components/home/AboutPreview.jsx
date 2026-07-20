import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Sparkles, Target, HeartHandshake } from "lucide-react";
import aboutImg from "../../assets/about-community.jpg";
import { Button } from "../ui/Button.jsx";

export function AboutPreview() {
  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 md:py-28">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <div className="rounded-[2rem] overflow-hidden shadow-[var(--shadow-elegant)] border border-border">
            <img
              src={aboutImg}
              alt="Volunteers and donors at Hemovra"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
          <div className="absolute -bottom-6 -right-6 hidden md:block">
            <div
              className="rounded-2xl p-5 text-white max-w-[220px] shadow-[var(--shadow-elegant)]"
              style={{ backgroundImage: "var(--gradient-primary)" }}
            >
              <p className="text-3xl font-bold">1 : 3</p>
              <p className="text-sm text-white/90 mt-1">
                Every donation can save up to three lives.
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block text-xs font-semibold tracking-[0.18em] uppercase text-primary mb-3">
            About Hemovra
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Building a stronger community, one drop at a time
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Hemovra is a modern platform dedicated to connecting voluntary blood
            donors with hospitals, families, and communities in need. We make
            donation simple, accessible, and impactful — bringing compassion and
            technology together.
          </p>

          <div className="mt-8 space-y-4">
            {[
              {
                icon: Target,
                title: "Our Mission",
                text: "Ensure no life is lost due to blood shortage by connecting donors and requesters in real time.",
              },
              {
                icon: Sparkles,
                title: "Our Vision",
                text: "A world where blood donation is routine, celebrated, and community-driven.",
              },
              {
                icon: HeartHandshake,
                title: "Our Commitment",
                text: "Privacy, safety, and dignity for every donor and recipient we serve.",
              },
            ].map((it) => (
              <div key={it.title} className="flex gap-4">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-accent text-primary">
                  <it.icon className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="font-semibold">{it.title}</h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    {it.text}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <Button as={Link} to="/about" className="mt-8" variant="outline">
            Learn more about us <ArrowRight className="h-4 w-4" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
