import { useMemo, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Search } from "lucide-react";
import { BLOOD_GROUPS, CITIES, DONORS } from "../data/donors.js";
import { Select, Input } from "../components/ui/Input.jsx";
import { DonorCard } from "../components/donors/DonorCard.jsx";

export default function FindDonors() {
  const [group, setGroup] = useState("");
  const [city, setCity] = useState("");
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    return DONORS.filter((d) => {
      if (group && d.group !== group) return false;
      if (city && d.city !== city) return false;
      if (query && !d.name.toLowerCase().includes(query.toLowerCase())) return false;
      return true;
    });
  }, [group, city, query]);

  return (
    <>
      <Helmet>
        <title>Find Blood Donors — Hemovra</title>
        <meta name="description" content="Search Hemovra donors by blood group and city and connect instantly with those available near you." />
      </Helmet>

      <section className="bg-hero">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-16 md:py-20 text-center">
          <span className="inline-block text-xs font-semibold tracking-[0.18em] uppercase text-primary mb-3">
            Find donors
          </span>
          <h1 className="text-4xl md:text-5xl font-bold">Search donors near you</h1>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Filter by blood group and city to find verified Hemovra donors ready
            to help.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 -mt-6 pb-24">
        <div className="rounded-3xl bg-card border border-border shadow-[var(--shadow-elegant)] p-5 md:p-6 grid md:grid-cols-[1fr_1fr_2fr] gap-3">
          <Select value={group} onChange={(e) => setGroup(e.target.value)}>
            <option value="">All blood groups</option>
            {BLOOD_GROUPS.map((g) => <option key={g} value={g}>{g}</option>)}
          </Select>
          <Select value={city} onChange={(e) => setCity(e.target.value)}>
            <option value="">All cities</option>
            {CITIES.map((c) => <option key={c} value={c}>{c}</option>)}
          </Select>
          <div className="relative">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search donor by name…"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="pl-10"
            />
          </div>
        </div>

        <p className="mt-6 text-sm text-muted-foreground">
          Showing <strong className="text-foreground">{filtered.length}</strong> donor{filtered.length === 1 ? "" : "s"}
        </p>

        <div className="mt-4 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((d, i) => (
            <DonorCard key={d.id} donor={d} index={i} />
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="mt-8 rounded-2xl border border-dashed border-border p-12 text-center text-muted-foreground">
            No donors match your filters. Try broadening your search.
          </div>
        )}
      </section>
    </>
  );
}
