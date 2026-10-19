import React from "react";
import Reveal from "@/components/site/Reveal";

const STEPS = [
  { t: "Tell us", d: "Describe what you need in plain language." },
  { t: "We file", d: "A named professional prepares and files it." },
  { t: "Track live", d: "Follow every stage, from received to delivered." },
  { t: "Stay compliant", d: "Deadlines are surfaced before they are missed." },
];

export default function HowItWorks() {
  return (
    <section className="pad bg-bgtint border-y border-line">
      <div className="wrap">
        <div className="text-center max-w-[600px] mx-auto">
          <Reveal><span className="eyebrow center">How it works</span></Reveal>
          <Reveal delay={0.06}><h2 className="h2 mt-4">From request to compliant, in four steps.</h2></Reveal>
        </div>
        <ol className="grid gap-8 mt-14 md:grid-cols-4 relative">
          {STEPS.map((s, i) => (
            <Reveal key={s.t} delay={i * 0.06}>
              <li className="relative list-none">
                <div className="flex items-center gap-3">
                  <span className="w-11 h-11 rounded-full border-2 border-gold bg-surface flex items-center justify-center font-mono text-[13px] text-gold-text">0{i + 1}</span>
                  {i < STEPS.length - 1 && <span className="hidden md:block flex-1 h-px bg-line" />}
                </div>
                <h3 className="font-display font-semibold text-[18px] mt-5">{s.t}</h3>
                <p className="text-[14px] text-tgray leading-relaxed mt-1.5">{s.d}</p>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}