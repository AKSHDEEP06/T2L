import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Check, BookOpen } from "lucide-react";
import Reveal from "@/components/site/Reveal";
import { PRODUCTS } from "@/components/site/products";

const FACTS = {
  "Legal Services": ["Incorporation, GST, MSME, ROC", "Trademark and IP protection", "Live status, named owner"],
  "Doc Engine": ["NDAs, agreements, legal notices", "India-specific clause library", "E-signature with audit trail"],
  Introspector: ["Precedent and statute search", "IPC to BNS mapping", "Uncited claims are blocked"],
};

export default function ProductsSection() {
  return (
    <section id="products" className="pad bg-surface">
      <div className="wrap">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div className="max-w-[560px]">
            <Reveal><span className="eyebrow">The platform</span></Reveal>
            <Reveal delay={0.06}><h2 className="h2 mt-4">Three products. One legal OS.</h2></Reveal>
          </div>
          <Reveal><Link to="/resources" className="text-[14px] font-semibold text-gold-text hover:underline">Explore the resource library</Link></Reveal>
        </div>
        <div className="grid gap-6 mt-12 md:grid-cols-3">
          {PRODUCTS.map((p, i) => (
            <Reveal key={p.name} delay={i * 0.06} className="h-full">
              <div className="h-full flex flex-col rounded-2xl border border-line bg-surface p-6 hover:-translate-y-0.5 hover:shadow-sm transition-all duration-200">
                <div className="flex items-start justify-between">
                  <span className="w-12 h-12 rounded-xl bg-gold-soft text-gold-text flex items-center justify-center"><p.icon size={22} /></span>
                  <span className="font-mono text-[12px] tracking-[0.14em] text-gold-text">{p.num}</span>
                </div>
                <h3 className="font-display font-semibold text-[22px] mt-5">{p.name}</h3>
                <p className="text-[15px] text-tgray leading-relaxed mt-2">{p.line}</p>
                <ul className="mt-5 space-y-2.5 flex-1">
                  {FACTS[p.name].map((f) => <li key={f} className="flex items-start gap-2.5 text-[14px]"><Check size={16} className="text-gold-text mt-0.5 shrink-0" />{f}</li>)}
                </ul>
                <div className="mt-6 pt-5 border-t border-line flex items-center justify-between">
                  <Link to={p.to} className="inline-flex items-center gap-2 font-semibold text-[14px] hover:text-gold-text">Explore <ArrowRight size={15} /></Link>
                  <span className="chip !text-[10px]">{p.chip}</span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal>
          <Link to="/resources" className="mt-6 h-16 rounded-xl border border-line bg-bgtint px-5 flex items-center gap-3 hover:border-gold transition-colors">
            <BookOpen size={20} className="text-gold-text" />
            <span className="text-[14px] flex-1"><b>Resources:</b> legal news, case law, acts, templates and events in one library.</span>
            <ArrowRight size={16} />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}