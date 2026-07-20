import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { AnimatePresence, motion } from "framer-motion";
import { toast } from "sonner";
import { Droplet, Loader2 } from "lucide-react";
import { Field, Input, Select, Textarea } from "../components/ui/Input.jsx";
import { Button } from "../components/ui/Button.jsx";
import { SuccessScreen } from "../components/ui/SuccessScreen.jsx";
import { BLOOD_GROUPS, CITIES } from "../data/donors.js";
import { validate, required, phone } from "../utils/validators.js";

const INITIAL = {
  patientName: "",
  bloodGroup: "",
  hospital: "",
  city: "",
  contact: "",
  urgency: "normal",
  requiredDate: "",
  notes: "",
};

const fieldVariants = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 200, damping: 22 } },
};

const URGENCY_LABEL = {
  normal: "Normal",
  urgent: "Urgent (24h)",
  critical: "Critical — now",
};

export default function Request() {
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
      patientName: [required],
      bloodGroup: [required],
      hospital: [required],
      city: [required],
      contact: [required, phone],
      requiredDate: [required],
    });
    setErrors(errs);
    if (Object.keys(errs).length > 0) {
      toast.error("We couldn't submit your request", {
        description: "Please fill in every required field so donors can reach you.",
      });
      return;
    }
    setLoading(true);
    const payload = { ...values };
    setTimeout(() => {
      setLoading(false);
      setSubmitted(payload);
      if (payload.urgency === "critical") {
        toast.error("Critical request broadcast", {
          description: `Alerting all ${payload.bloodGroup} donors in ${payload.city} right now.`,
        });
      } else {
        toast.success("Request received", {
          description: `Matched donors in ${payload.city} are being notified.`,
        });
      }
      setValues(INITIAL);
    }, 900);
  };

  const reset = () => setSubmitted(null);

  return (
    <>
      <Helmet>
        <title>Request Blood — Hemovra</title>
        <meta name="description" content="Submit an urgent blood request through Hemovra and reach matched donors near you within minutes." />
      </Helmet>

      <section className="bg-hero">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16 md:py-20 text-center">
          <span className="inline-block text-xs font-semibold tracking-[0.18em] uppercase text-primary mb-3">
            Request blood
          </span>
          <h1 className="text-4xl md:text-5xl font-bold">Ask for the help you need</h1>
          <p className="mt-4 text-muted-foreground">
            Fill in the details below. We'll match your request with verified
            donors in your city and notify you immediately.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 -mt-6 pb-20">
        <AnimatePresence mode="wait">
          {submitted ? (
            <SuccessScreen
              key="success"
              title="Request sent to nearby donors"
              message="We've alerted matched donors in your city. You'll receive a call or message from responders very soon."
              summary={[
                { label: "Patient", value: submitted.patientName },
                { label: "Blood Needed", value: submitted.bloodGroup },
                { label: "Hospital", value: submitted.hospital },
                { label: "City", value: submitted.city },
                { label: "Required By", value: submitted.requiredDate },
                { label: "Urgency", value: URGENCY_LABEL[submitted.urgency] },
              ]}
              primaryLabel="Submit another request"
              onPrimary={reset}
              secondaryLabel="Find donors now"
              onSecondary={() => { window.location.href = "/find-donors"; }}
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
                  <Field label="Patient Name" required error={errors.patientName}>
                    <Input value={values.patientName} onChange={setField("patientName")} placeholder="Full name" error={errors.patientName} />
                  </Field>
                </motion.div>
                <motion.div variants={fieldVariants}>
                  <Field label="Blood Group Needed" required error={errors.bloodGroup}>
                    <Select value={values.bloodGroup} onChange={setField("bloodGroup")} error={errors.bloodGroup}>
                      <option value="">Select blood group</option>
                      {BLOOD_GROUPS.map((g) => (
                        <option key={g} value={g}>{g}</option>
                      ))}
                    </Select>
                  </Field>
                </motion.div>
                <motion.div variants={fieldVariants}>
                  <Field label="Hospital Name" required error={errors.hospital}>
                    <Input value={values.hospital} onChange={setField("hospital")} placeholder="City General Hospital" error={errors.hospital} />
                  </Field>
                </motion.div>
                <motion.div variants={fieldVariants}>
                  <Field label="City" required error={errors.city}>
                    <Select value={values.city} onChange={setField("city")} error={errors.city}>
                      <option value="">Select city</option>
                      {CITIES.map((c) => (
                        <option key={c} value={c}>{c}</option>
                      ))}
                    </Select>
                  </Field>
                </motion.div>
                <motion.div variants={fieldVariants}>
                  <Field label="Contact Number" required error={errors.contact}>
                    <Input value={values.contact} onChange={setField("contact")} placeholder="+91 98200 00000" error={errors.contact} />
                  </Field>
                </motion.div>
                <motion.div variants={fieldVariants}>
                  <Field label="Emergency Level">
                    <Select value={values.urgency} onChange={setField("urgency")}>
                      <option value="normal">Normal — within a few days</option>
                      <option value="urgent">Urgent — within 24 hours</option>
                      <option value="critical">Critical — needed now</option>
                    </Select>
                  </Field>
                </motion.div>
                <motion.div variants={fieldVariants}>
                  <Field label="Required Date" required error={errors.requiredDate}>
                    <Input type="date" value={values.requiredDate} onChange={setField("requiredDate")} error={errors.requiredDate} />
                  </Field>
                </motion.div>
                <motion.div variants={fieldVariants} className="sm:col-span-2">
                  <Field label="Additional Notes">
                    <Textarea value={values.notes} onChange={setField("notes")} placeholder="Any additional information that would help donors respond faster." />
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
                  For life-threatening emergencies, also call your local emergency number.
                </p>
                <Button type="submit" size="lg" disabled={loading} className="group">
                  {loading ? (
                    <>
                      <Loader2 className="h-5 w-5 animate-spin" /> Sending…
                    </>
                  ) : (
                    <>
                      <Droplet className="h-5 w-5 transition-transform group-hover:scale-110 group-hover:-rotate-6" />
                      Submit Request
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
