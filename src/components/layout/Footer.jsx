import { Link } from "react-router-dom";
import { Droplet, Facebook, Instagram, Twitter, Linkedin, Mail, Phone, MapPin } from "lucide-react";
import { useState } from "react";

export function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const onSubscribe = (e) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
    setEmail("");
    setTimeout(() => setSubscribed(false), 3500);
  };

  return (
    <footer className="mt-24 border-t border-border bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link to="/" className="flex items-center gap-2">
              <span
                className="grid h-9 w-9 place-items-center rounded-xl text-white"
                style={{ backgroundImage: "var(--gradient-primary)" }}
              >
                <Droplet className="h-5 w-5" fill="currentColor" />
              </span>
              <span className="text-xl font-bold">Hemovra</span>
            </Link>
            <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
              A modern platform connecting blood donors with hospitals and
              communities in need — because every drop matters.
            </p>
            <div className="mt-5 flex items-center gap-3">
              {[Facebook, Instagram, Twitter, Linkedin].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label="social"
                  className="grid h-9 w-9 place-items-center rounded-full border border-border text-foreground/70 hover:text-primary hover:border-primary transition"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold tracking-wider uppercase text-foreground">
              Quick Links
            </h4>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              {[
                ["Home", "/"],
                ["About", "/about"],
                ["Donate Blood", "/donate"],
                ["Request Blood", "/request"],
                ["Find Donors", "/find-donors"],
                ["Eligibility", "/eligibility"],
                ["FAQ", "/faq"],
              ].map(([label, to]) => (
                <li key={to}>
                  <Link
                    to={to}
                    className="hover:text-primary transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold tracking-wider uppercase text-foreground">
              Contact
            </h4>
            <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
              <li className="flex gap-3">
                <MapPin className="h-4 w-4 mt-0.5 text-primary shrink-0" />
                <span>221B Baker Health Complex, Mumbai, India</span>
              </li>
              <li className="flex gap-3">
                <Phone className="h-4 w-4 mt-0.5 text-primary shrink-0" />
                <span>+91 98200 00000</span>
              </li>
              <li className="flex gap-3">
                <Mail className="h-4 w-4 mt-0.5 text-primary shrink-0" />
                <span>hello@hemovra.org</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold tracking-wider uppercase text-foreground">
              Newsletter
            </h4>
            <p className="mt-4 text-sm text-muted-foreground">
              Get donation drive updates and stories from lives saved.
            </p>
            <form onSubmit={onSubscribe} className="mt-4 flex gap-2">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@email.com"
                className="flex-1 rounded-full border border-border bg-white px-4 py-2.5 text-sm outline-none focus:border-primary focus:ring-4 focus:ring-primary/10"
              />
              <button
                type="submit"
                className="rounded-full px-4 py-2.5 text-sm font-semibold text-white"
                style={{ backgroundImage: "var(--gradient-primary)" }}
              >
                Join
              </button>
            </form>
            {subscribed && (
              <p className="mt-2 text-xs text-success">Subscribed — thank you!</p>
            )}
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-border flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} Hemovra. All rights reserved.</p>
          <p>Donate blood. Save lives. Build community.</p>
        </div>
      </div>
    </footer>
  );
}
