import React from "react";
import { Link } from "react-router-dom";
import { Check, ArrowRight } from "lucide-react";
import Reveal from "@/components/site/Reveal";

const CARDS = [
  { label: "For founders", title: "Run the company, not the paperwork.", to: "/legal-services", cta: "Start with Legal Services", dark: false,
    items: ["Incorporate and register", "Draft contracts in minutes", "Never miss a filing deadline", "Know who owns your matter"] },
  { label: "For lawyers", title: "A research bench you can cite.", to: "/introspector", cta: "See Introspector", dark: true,
    items: ["Precedent and statute search", "Citations on every claim", "IPC to BNS mapping", "Private by design"] },
];

export default function Audiences() {
  return (
    <section className="pad bg-surface">
      <div className="wrap grid gap-6 md:grid-cols-2">
        {CARDS.map((c, i) => (
          <Reveal key={c.label} delay={i * 0.08} className="h-full">
            <div className={`h-full rounded-2xl p-8 sm:p-10 ${c.dark ? "bg-navy text-white" : "bg-bgtint border border-line"}`}>
              <span className={`font-mono text-[11px] tracking-[0.14em] uppercase ${c.dark ? "text-gold" : "text-gold-text"}`}>{c.label}</span>
              <h3 className="font-display font-semibold text-[26px] leading-tight mt-3">{c.title}</h3>
              <ul className="mt-6 space-y-3">
                {c.items.map((t) => <li key={t} className="flex items-center gap-3 text-[15px]"><Check size={17} className={c.dark ? "text-gold" : "text-gold-text"} />{t}</li>)}
              </ul>
              <Link to={c.to} className="btn btn-gold mt-8 !py-3.5">{c.cta}<ArrowRight size={17} /></Link>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}