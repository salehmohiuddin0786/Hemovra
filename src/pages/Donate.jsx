import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { AnimatePresence, motion } from "framer-motion";
import { toast } from "sonner";
import { HeartHandshake, Loader2 } from "lucide-react";
import { Field, Input, Select } from "../components/ui/Input.jsx";
import { Button } from "../components/ui/Button.jsx";
import { SuccessScreen } from "../components/ui/SuccessScreen.jsx";
import { BLOOD_GROUPS, CITIES } from "../data/donors.js";
import { validate, required, email, phone, minNum, maxNum } from "../utils/validators.js";

const INITIAL = {
  fullName: "",
  age: "",
  bloodGroup: "",
  phone: "",
  email: "",
  city: "",
  weight: "",
  lastDonation: "",
  availability: "available",
};

const fieldVariants = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 200, damping: 22 } },
};

export default function Donate() {
  const [values, setValues] = useState(INITIAL);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(null);
  const [loading, setLoading] = useState(false);

  const setField = (k) => (e) => {
    setValues((v) => ({ ...v, [k]: e.target.value }));
    if (errors[k]) setErrors((prev) => ({ ...prev, [k]: undefined }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const errs = validate(values, {
      fullName: [required],
      age: [required, minNum(18), maxNum(65)],
      bloodGroup: [required],
      phone: [required, phone],
      email: [required, email],
      city: [required],
      weight: [required, minNum(50)],
    });
    setErrors(errs);
    if (Object.keys(errs).length > 0) {
      toast.error("Please check your details", {
        description: "A few required fields need your attention.",
      });
      return;
    }
    setLoading(true);
    const payload = { ...values };
    setTimeout(() => {
      setLoading(false);
      setSubmitted(payload);
      toast.success("You're officially a Hemovra donor!", {
        description: `We'll reach out when someone nearby needs ${payload.bloodGroup} blood.`,
      });
      setValues(INITIAL);
    }, 900);
  };

  const reset = () => setSubmitted(null);

  return (
    <>
      <Helmet>
        <title>Become a Blood Donor — Hemovra</title>
        <meta name="description" content="Register as a Hemovra blood donor in under two minutes and help save lives in your community." />
      </Helmet>

      <section className="bg-hero">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16 md:py-20 text-center">
          <span className="inline-block text-xs font-semibold tracking-[0.18em] uppercase text-primary mb-3">
            Donate blood
          </span>
          <h1 className="text-4xl md:text-5xl font-bold">Become a Hemovra donor</h1>
          <p className="mt-4 text-muted-foreground">
            Fill in a few details and we'll notify you when someone nearby needs
            your blood type. You're always in control of your availability.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 -mt-6 pb-20">
        <AnimatePresence mode="wait">
          {submitted ? (
            <SuccessScreen
              key="success"
              title="Welcome to the Hemovra family"
              message="Your donor profile is live. We'll reach out the moment someone nearby needs your help."
              summary={[
                { label: "Name", value: submitted.fullName },
                { label: "Blood Group", value: submitted.bloodGroup },
                { label: "City", value: submitted.city },
                { label: "Availability", value: submitted.availability === "available" ? "Available" : "Unavailable" },
              ]}
              primaryLabel="Register another donor"
              onPrimary={reset}
              secondaryLabel="Back to home"
              onSecondary={() => { window.location.href = "/"; }}
            />
          ) : (
            <motion.form
              key="form"
              onSubmit={onSubmit}
              noValidate
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4 }}
              className="rounded-3xl bg-card border border-border shadow-[var(--shadow-elegant)] p-6 md:p-10"
            >
              <motion.div
                variants={{ hidden: {}, show: { transition: { staggerChildren: 0.06, delayChildren: 0.1 } } }}
                initial="hidden"
                animate="show"
                className="grid sm:grid-cols-2 gap-5"
              >
                <motion.div variants={fieldVariants}>
                  <Field label="Full Name" required error={errors.fullName}>
                    <Input value={values.fullName} onChange={setField("fullName")} placeholder="Jane Doe" error={errors.fullName} />
                  </Field>
                </motion.div>
                <motion.div variants={fieldVariants}>
                  <Field label="Age" required error={errors.age} hint="18–65 years">
                    <Input type="number" min="18" max="65" value={values.age} onChange={setField("age")} placeholder="28" error={errors.age} />
                  </Field>
                </motion.div>
                <motion.div variants={fieldVariants}>
                  <Field label="Blood Group" required error={errors.bloodGroup}>
                    <Select value={values.bloodGroup} onChange={setField("bloodGroup")} error={errors.bloodGroup}>
                      <option value="">Select blood group</option>
                      {BLOOD_GROUPS.map((g) => (
                        <option key={g} value={g}>{g}</option>
                      ))}
                    </Select>
                  </Field>
                </motion.div>
                <motion.div variants={fieldVariants}>
                  <Field label="Phone Number" required error={errors.phone}>
                    <Input value={values.phone} onChange={setField("phone")} placeholder="+91 98200 00000" error={errors.phone} />
                  </Field>
                </motion.div>
                <motion.div variants={fieldVariants}>
                  <Field label="Email Address" required error={errors.email}>
                    <Input type="email" value={values.email} onChange={setField("email")} placeholder="you@email.com" error={errors.email} />
                  </Field>
                </motion.div>
                <motion.div variants={fieldVariants}>
                  <Field label="City" required error={errors.city}>
                    <Select value={values.city} onChange={setField("city")} error={errors.city}>
                      <option value="">Select your city</option>
                      {CITIES.map((c) => (
                        <option key={c} value={c}>{c}</option>
                      ))}
                    </Select>
                  </Field>
                </motion.div>
                <motion.div variants={fieldVariants}>
                  <Field label="Weight (kg)" required error={errors.weight} hint="Minimum 50 kg">
                    <Input type="number" min="0" value={values.weight} onChange={setField("weight")} placeholder="65" error={errors.weight} />
                  </Field>
                </motion.div>
                <motion.div variants={fieldVariants}>
                  <Field label="Last Donation Date">
                    <Input type="date" value={values.lastDonation} onChange={setField("lastDonation")} />
                  </Field>
                </motion.div>
                <motion.div variants={fieldVariants} className="sm:col-span-2">
                  <Field label="Availability Status">
                    <Select value={values.availability} onChange={setField("availability")}>
                      <option value="available">Available to donate</option>
                      <option value="unavailable">Currently unavailable</option>
                    </Select>
                  </Field>
                </motion.div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4"
              >
                <p className="text-xs text-muted-foreground">
                  By submitting, you agree to be contacted for urgent donation matches.
                </p>
                <Button type="submit" size="lg" disabled={loading} className="group">
                  {loading ? (
                    <>
                      <Loader2 className="h-5 w-5 animate-spin" /> Submitting…
                    </>
                  ) : (
                    <>
                      <HeartHandshake className="h-5 w-5 transition-transform group-hover:scale-110 group-hover:-rotate-6" />
                      Register as Donor
                    </>
                  )}
                </Button>
              </motion.div>
            </motion.form>
          )}
        </AnimatePresence>
      </section>
    </>
  );
}
