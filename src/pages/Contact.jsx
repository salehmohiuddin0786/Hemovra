import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Mail, Phone, MapPin, CheckCircle2, Send, Facebook, Instagram, Twitter, Linkedin } from "lucide-react";
import { Field, Input, Textarea } from "../components/ui/Input.jsx";
import { Button } from "../components/ui/Button.jsx";
import { validate, required, email } from "../utils/validators.js";

export default function Contact() {
  const [values, setValues] = useState({ name: "", email: "", subject: "", message: "" });
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);
  const setField = (k) => (e) => setValues((v) => ({ ...v, [k]: e.target.value }));

  const onSubmit = (e) => {
    e.preventDefault();
    const errs = validate(values, {
      name: [required],
      email: [required, email],
      message: [required],
    });
    setErrors(errs);
    if (Object.keys(errs).length === 0) {
      setSent(true);
      setValues({ name: "", email: "", subject: "", message: "" });
    }
  };

  return (
    <>
      <Helmet>
        <title>Contact Hemovra</title>
        <meta name="description" content="Reach the Hemovra team for partnerships, support, or press inquiries." />
      </Helmet>

      <section className="bg-hero">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-16 md:py-20 text-center">
          <span className="inline-block text-xs font-semibold tracking-[0.18em] uppercase text-primary mb-3">
            Contact
          </span>
          <h1 className="text-4xl md:text-5xl font-bold">We'd love to hear from you</h1>
          <p className="mt-4 text-muted-foreground">
            Whether you're a hospital, donor, or organization — reach out and
            let's build a healthier community together.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16 grid lg:grid-cols-[1fr_1.3fr] gap-8">
        <div className="space-y-4">
          {[
            { icon: MapPin, title: "Visit us", text: "221B Baker Health Complex, Mumbai, India" },
            { icon: Phone, title: "Call us", text: "+91 98200 00000" },
            { icon: Mail, title: "Email us", text: "hello@hemovra.org" },
          ].map((it) => (
            <div key={it.title} className="rounded-2xl bg-card border border-border p-5 shadow-[var(--shadow-card)] flex items-center gap-4">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-accent text-primary">
                <it.icon className="h-5 w-5" />
              </span>
              <div>
                <p className="text-sm font-semibold">{it.title}</p>
                <p className="text-sm text-muted-foreground">{it.text}</p>
              </div>
            </div>
          ))}

          <div className="rounded-2xl overflow-hidden border border-border shadow-[var(--shadow-card)] aspect-[4/3] bg-muted grid place-items-center">
            <div className="text-center text-muted-foreground text-sm p-6">
              <MapPin className="mx-auto h-8 w-8 text-primary mb-2" />
              Google Maps placeholder<br />
              <span className="text-xs">Map integration ready</span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            {[Facebook, Instagram, Twitter, Linkedin].map((Icon, i) => (
              <a
                key={i}
                href="#"
                aria-label="social"
                className="grid h-10 w-10 place-items-center rounded-full border border-border text-foreground/70 hover:text-primary hover:border-primary transition"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <form
          onSubmit={onSubmit}
          noValidate
          className="rounded-3xl bg-card border border-border shadow-[var(--shadow-elegant)] p-6 md:p-8"
        >
          {sent && (
            <div className="mb-6 flex items-center gap-3 rounded-2xl bg-success/10 border border-success/30 px-4 py-3 text-success">
              <CheckCircle2 className="h-5 w-5" />
              <p className="text-sm font-medium">Message sent — we'll be in touch soon.</p>
            </div>
          )}
          <div className="grid sm:grid-cols-2 gap-5">
            <Field label="Your Name" required error={errors.name}>
              <Input value={values.name} onChange={setField("name")} placeholder="Jane Doe" error={errors.name} />
            </Field>
            <Field label="Email" required error={errors.email}>
              <Input type="email" value={values.email} onChange={setField("email")} placeholder="you@email.com" error={errors.email} />
            </Field>
            <div className="sm:col-span-2">
              <Field label="Subject">
                <Input value={values.subject} onChange={setField("subject")} placeholder="How can we help?" />
              </Field>
            </div>
            <div className="sm:col-span-2">
              <Field label="Message" required error={errors.message}>
                <Textarea value={values.message} onChange={setField("message")} placeholder="Write your message…" error={errors.message} />
              </Field>
            </div>
          </div>
          <div className="mt-6 flex justify-end">
            <Button type="submit" size="lg">
              <Send className="h-4 w-4" /> Send Message
            </Button>
          </div>
        </form>
      </section>
    </>
  );
}
