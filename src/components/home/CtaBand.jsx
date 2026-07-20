import { Link } from "react-router-dom";
import { Button } from "../ui/Button.jsx";
import { HeartHandshake, Droplet } from "lucide-react";

export function CtaBand() {
  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
      <div
        className="rounded-[2rem] p-8 md:p-14 text-white relative overflow-hidden"
        style={{ backgroundImage: "var(--gradient-primary)" }}
      >
        <div className="absolute inset-0 opacity-20 pointer-events-none"
             style={{ backgroundImage:
               "radial-gradient(600px 200px at 10% 0%, white, transparent), radial-gradient(600px 200px at 100% 100%, white, transparent)" }} />
        <div className="relative grid md:grid-cols-[1fr_auto] items-center gap-6">
          <div>
            <h3 className="text-2xl md:text-3xl font-bold leading-tight">
              Ready to make a real difference?
            </h3>
            <p className="mt-2 text-white/90 max-w-xl">
              Join thousands of Hemovra donors. Sign up in under two minutes and
              be ready when your community needs you.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Button
              as={Link}
              to="/donate"
              size="lg"
              className="!bg-white !text-primary !shadow-none hover:!brightness-100 hover:!bg-white/95"
              style={{ backgroundImage: "none" }}
            >
              <HeartHandshake className="h-5 w-5" /> Become a Donor
            </Button>
            <Button
              as={Link}
              to="/request"
              size="lg"
              variant="outline"
              className="!bg-transparent !border-white !text-white hover:!bg-white/10"
            >
              <Droplet className="h-5 w-5" /> Request Blood
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
