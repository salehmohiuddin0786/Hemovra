import { motion } from "framer-motion";
import { Phone, MapPin, Droplet } from "lucide-react";
import { Button } from "../ui/Button.jsx";

export function DonorCard({ donor, index = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.04 }}
      whileHover={{ y: -4 }}
      className="rounded-2xl bg-card border border-border p-5 shadow-[var(--shadow-card)] hover:border-primary/30 hover:shadow-[var(--shadow-elegant)] transition-all"
    >
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-center gap-3 min-w-0">
          <span
            className="grid h-12 w-12 place-items-center rounded-2xl text-white shrink-0"
            style={{ backgroundImage: "var(--gradient-primary)" }}
          >
            <Droplet className="h-5 w-5" fill="currentColor" />
          </span>
          <div className="min-w-0">
            <h3 className="font-semibold truncate">{donor.name}</h3>
            <p className="text-sm text-muted-foreground flex items-center gap-1">
              <MapPin className="h-3.5 w-3.5" /> {donor.city}
            </p>
          </div>
        </div>
        <span className="rounded-full bg-accent text-primary text-xs font-bold px-2.5 py-1 shrink-0">
          {donor.group}
        </span>
      </div>

      <div className="mt-4 flex items-center justify-between gap-3">
        <span
          className={`inline-flex items-center gap-1.5 text-xs font-medium ${
            donor.available ? "text-success" : "text-muted-foreground"
          }`}
        >
          <span
            className={`h-2 w-2 rounded-full ${
              donor.available ? "bg-success animate-pulse" : "bg-muted-foreground/40"
            }`}
          />
          {donor.available ? "Available now" : "Unavailable"}
        </span>
        <Button
          as="a"
          href={`tel:${donor.phone.replace(/\s/g, "")}`}
          size="sm"
          variant={donor.available ? "primary" : "outline"}
          className="!px-4 !py-2"
        >
          <Phone className="h-3.5 w-3.5" /> Contact
        </Button>
      </div>
    </motion.div>
  );
}
