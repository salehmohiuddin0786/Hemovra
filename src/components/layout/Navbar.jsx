import { useEffect, useState } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import { Menu, X, Droplet } from "lucide-react";
import { Button } from "../ui/Button.jsx";

const LINKS = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/donate", label: "Donate Blood" },
  { to: "/request", label: "Request Blood" },
  { to: "/find-donors", label: "Find Donors" },
  { to: "/eligibility", label: "Eligibility" },
  { to: "/faq", label: "FAQ" },
  { to: "/contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "glass shadow-[0_4px_20px_-12px_rgba(0,0,0,0.15)]"
          : "bg-background/40 backdrop-blur-sm"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between gap-4">
          <Link to="/" className="flex items-center gap-2 shrink-0">
            <span
              className="grid h-9 w-9 place-items-center rounded-xl text-white shadow-[var(--shadow-elegant)]"
              style={{ backgroundImage: "var(--gradient-primary)" }}
            >
              <Droplet className="h-5 w-5" fill="currentColor" />
            </span>
            <span className="text-xl font-bold tracking-tight">
              Hemovra
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {LINKS.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                end={l.to === "/"}
                className={({ isActive }) =>
                  `px-3 py-2 rounded-full text-sm font-medium transition-colors ${
                    isActive
                      ? "text-primary bg-accent"
                      : "text-foreground/80 hover:text-primary hover:bg-accent/60"
                  }`
                }
              >
                {l.label}
              </NavLink>
            ))}
          </nav>

          <div className="hidden lg:block">
            <Button as={Link} to="/donate" size="sm">
              Become a Donor
            </Button>
          </div>

          <button
            className="lg:hidden p-2 rounded-lg hover:bg-muted"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden border-t border-border glass">
          <div className="px-4 py-4 flex flex-col gap-1">
            {LINKS.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                end={l.to === "/"}
                className={({ isActive }) =>
                  `px-4 py-3 rounded-xl text-sm font-medium ${
                    isActive
                      ? "text-primary bg-accent"
                      : "text-foreground/80 hover:bg-muted"
                  }`
                }
              >
                {l.label}
              </NavLink>
            ))}
            <Button as={Link} to="/donate" size="md" className="mt-3">
              Become a Donor
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
