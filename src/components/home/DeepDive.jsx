import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Reveal from "@/components/site/Reveal";
import StageFrame from "./StageFrame";

export default function DeepDive({ num, eyebrow, title, lede, features, cta, to, stage, mirror = false, tone = "paper", children }) {
  const chamber = tone === "chamber";
  const bg = chamber ? "bg-navy text-white" : tone === "parchment" ? "bg-bgtint" : "bg-surface";
  return (
    <section className={`pad ${bg}`}>
      <div className="wrap grid gap-12 lg:grid-cols-12 lg:items-center">
        <div className={`lg:col-span-5 ${mirror ? "lg:order-2 lg:col-start-8" : ""}`}>
          <Reveal><span className={`font-mono text-[12px] tracking-[0.14em] uppercase ${chamber ? "text-gold" : "text-gold-text"}`}>{num} · {eyebrow}</span></Reveal>
          <Reveal delay={0.06}><h2 className="h2 mt-4">{title}</h2></Reveal>
          <Reveal delay={0.1}><p className={`text-[17px] leading-relaxed mt-4 ${chamber ? "text-white/75" : "text-tgray"}`}>{lede}</p></Reveal>
          <ul className="mt-7 space-y-4">
            {features.map(([t, d]) => (
              <li key={t} className="flex gap-3"><span className="w-1.5 h-1.5 rounded-full bg-gold mt-2.5 shrink-0" /><span className="text-[15px]"><b>{t}.</b> <span className={chamber ? "text-white/70" : "text-tgray"}>{d}</span></span></li>
            ))}
          </ul>
          {children}
          <Link to={to} className="btn btn-gold mt-8 !py-3.5">{cta}<ArrowRight size={17} /></Link>
        </div>
        <div className={`lg:col-span-6 ${mirror ? "lg:order-1 lg:col-start-1" : "lg:col-start-7"}`}>
          <Reveal delay={0.1}>
            {chamber ? <div className="rounded-3xl bg-navy-2 border border-white/10 p-5 sm:p-6 relative">{stage}</div> : <StageFrame>{stage}</StageFrame>}
          </Reveal>
        </div>
      </div>
    </section>
  );
}