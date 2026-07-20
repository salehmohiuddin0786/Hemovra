import { Helmet } from "react-helmet-async";
import { Accordion } from "../components/ui/Accordion.jsx";
import { FAQS } from "../data/faqs.js";

export default function FAQ() {
  return (
    <>
      <Helmet>
        <title>FAQ — Hemovra</title>
        <meta name="description" content="Common questions about blood donation, safety, eligibility, and how Hemovra works." />
      </Helmet>

      <section className="bg-hero">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16 md:py-20 text-center">
          <span className="inline-block text-xs font-semibold tracking-[0.18em] uppercase text-primary mb-3">
            Support
          </span>
          <h1 className="text-4xl md:text-5xl font-bold">Frequently asked questions</h1>
          <p className="mt-4 text-muted-foreground">
            Everything you need to know about donating and requesting blood
            through Hemovra.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16">
        <Accordion items={FAQS} />
      </section>
    </>
  );
}
