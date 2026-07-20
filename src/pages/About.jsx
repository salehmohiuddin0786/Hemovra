import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Target, Sparkles, HeartHandshake, ShieldCheck, Users2, Globe2 } from "lucide-react";
import aboutImg from "../assets/about-community.jpg";
import { SectionHeading } from "../components/ui/SectionHeading.jsx";

const VALUES = [
  { icon: ShieldCheck, title: "Safety first", text: "Sterile, medically supervised donations and rigorous screening." },
  { icon: HeartHandshake, title: "Compassion", text: "Dignity and empathy for donors and recipients alike." },
  { icon: Users2, title: "Community", text: "Neighbors helping neighbors, across cities and cultures." },
  { icon: Globe2, title: "Access", text: "A modern, mobile-first experience anyone can use in an emergency." },
];

export default function About() {
  return (
    <>
      <Helmet>
        <title>About Hemovra — Our Mission & Vision</title>
        <meta
          name="description"
          content="Hemovra's mission is to make voluntary blood donation simple, safe, and impactful for every community."
        />
      </Helmet>

      <section className="bg-hero">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-24 text-center">
          <span className="inline-block text-xs font-semibold tracking-[0.18em] uppercase text-primary mb-3">
            About Hemovra
          </span>
          <h1 className="text-4xl md:text-5xl font-bold max-w-3xl mx-auto">
            A modern platform for a timeless act of kindness
          </h1>
          <p className="mt-5 max-w-2xl mx-auto text-muted-foreground">
            Hemovra brings donors, hospitals, and patients together on one
            trusted platform — because when seconds matter, technology should
            not stand in the way of compassion.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.img
            src={aboutImg}
            alt="Hemovra donors and community volunteers"
            loading="lazy"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-[2rem] shadow-[var(--shadow-elegant)] border border-border w-full"
          />
          <div className="space-y-8">
            {[
              { icon: Target, title: "Our Mission", text: "To ensure no life is lost due to blood shortage by connecting compassionate donors with the people, hospitals, and communities that need them — in real time." },
              { icon: Sparkles, title: "Our Vision", text: "A world where blood donation is a normal part of community life: celebrated, accessible, and driven by volunteers." },
              { icon: HeartHandshake, title: "Our Commitment", text: "We hold ourselves to the highest standards of safety, privacy, and respect for every person who donates or requests through Hemovra." },
            ].map((it, i) => (
              <motion.div
                key={it.title}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex gap-4"
              >
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-accent text-primary">
                  <it.icon className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="text-lg font-semibold">{it.title}</h3>
                  <p className="mt-1.5 text-muted-foreground leading-relaxed">{it.text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-muted/60 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="What we stand for" title="Our core values" />
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {VALUES.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                whileHover={{ y: -4 }}
                className="rounded-2xl bg-card border border-border p-6 shadow-[var(--shadow-card)]"
              >
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-accent text-primary">
                  <v.icon className="h-5 w-5" />
                </span>
                <h3 className="mt-4 font-semibold">{v.title}</h3>
                <p className="mt-1.5 text-sm text-muted-foreground">{v.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
