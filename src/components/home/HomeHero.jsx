import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Reveal from "@/components/site/Reveal";
import HeroStage from "./HeroStage";

const AUDIENCES = {
  founder: { label: "I'm a founder", stage: 0, primary: { t: "Start incorporation", to: "/legal-services" }, secondary: { t: "Draft a document", to: "/docengine" } },
  lawyer: { label: "I'm a lawyer", stage: 2, primary: { t: "See Introspector", to: "/introspector" }, secondary: { t: "Browse resources", to: "/resources" } },
};
const FACTS = ["Grounded in Indian law", "Citation on every claim", "Named owner on every matter"];

export default function HomeHero() {
  const [who, setWho] = useState("founder");
  const a = AUDIENCES[who];
  return (
    <section className="relative bg-bgtint border-b border-line pt-28 pb-16 lg:pt-[120px] lg:pb-20 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(50% 50% at 90% 0%, rgb(var(--gold) / 0.08), transparent 70%)" }} />
      <div className="wrap relative grid gap-12 lg:grid-cols-12 lg:items-center lg:min-h-[70vh]">
        <div className="lg:col-span-6">
          <Reveal><span className="chip"><i />India's legal operating system</span></Reveal>
          <Reveal delay={0.06}>
            <h1 className="font-display font-bold text-[clamp(36px,5.6vw,64px)] leading-[1.05] tracking-[-0.03em] mt-6 text-balance">
              We simplify legal access for <span className="text-gold-text">everyone.</span>
            </h1>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="lede mt-6 max-w-[520px]">One platform for founders and lawyers: services, documents and research, grounded in Indian law.</p>
          </Reveal>
          <Reveal delay={0.18}>
            <div role="radiogroup" aria-label="I am a" className="inline-flex mt-8 p-1 rounded-xl border border-line bg-surface">
              {Object.entries(AUDIENCES).map(([k, v]) => (
                <button key={k} role="radio" aria-checked={who === k} onClick={() => setWho(k)} className={`px-4 py-2.5 rounded-lg text-[14px] font-medium transition-colors min-h-[44px] ${who === k ? "bg-solid text-white" : "text-tgray hover:text-ink"}`}>{v.label}</button>
              ))}
            </div>
          </Reveal>
          <Reveal delay={0.24}>
            <div className="flex flex-col sm:flex-row gap-3 mt-6">
              <Link to={a.primary.to} className="btn btn-gold !py-3.5">{a.primary.t}<ArrowRight size={17} /></Link>
              <Link to={a.secondary.to} className="btn btn-ghost !py-3.5">{a.secondary.t}</Link>
            </div>
          </Reveal>
          <Reveal delay={0.3}>
            <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-[13px] text-tgray">
              {FACTS.map((f) => <li key={f} className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-gold" />{f}</li>)}
            </ul>
          </Reveal>
        </div>
        <div className="lg:col-span-6"><Reveal delay={0.15}><HeroStage first={a.stage} /></Reveal></div>
      </div>
    </section>
  );
}