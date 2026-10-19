import React from "react";
import CountUp from "@/components/site/CountUp";

const STATS = [
  { n: 3, label: "Connected products" },
  { n: 60, pre: "< ", suf: " s", label: "Doc Engine first draft" },
  { n: 100, suf: "%", label: "Research claims cited" },
  { n: 7, label: "Service lines on one bench" },
];

export default function ProofStrip() {
  return (
    <section aria-label="Platform facts" className="bg-bgtint border-b border-line">
      <div className="wrap grid grid-cols-2 lg:grid-cols-4">
        {STATS.map((s, i) => (
          <div key={s.label} className={`py-8 px-4 ${i % 2 ? "border-l border-line" : ""} ${i > 1 ? "border-t lg:border-t-0 border-line" : ""} ${i === 2 ? "lg:border-l" : ""}`}>
            <div className="font-display font-bold text-[32px] leading-none tabular-nums"><CountUp to={s.n} prefix={s.pre} suffix={s.suf} /></div>
            <div className="font-mono text-[11px] tracking-[0.14em] uppercase text-tgray mt-2">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}