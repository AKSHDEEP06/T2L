import React from "react";

const Cite = ({ n }) => <span className="inline-block mx-0.5 rounded bg-gold/20 text-gold font-mono text-[10px] px-1.5 py-0.5">[{n}]</span>;

export default function ResearchStage() {
  return (
    <div className="pt-6">
      <div className="rounded-xl bg-navy-2 border border-white/10 px-4 py-3 text-[13px] text-white/90">Is a post-employment non-compete enforceable in India?</div>
      <p className="mt-4 text-[13.5px] leading-relaxed text-white/85">
        Post-employment non-compete clauses are generally void as restraints of trade under Section 27 of the Indian Contract Act, 1872<Cite n={1} />, a position courts have applied to employment covenants<Cite n={2} />.
      </p>
      <div className="mt-4 grid gap-2.5 sm:grid-cols-2">
        {[
          ["[1]", "Indian Contract Act, 1872", "Section 27"],
          ["[2]", "Superintendence Co. of India v. Krishan Murgai", "Supreme Court, 1980"],
        ].map(([n, t, m]) => (
          <div key={n} className="rounded-xl bg-navy-2 border border-white/10 p-3">
            <div className="font-mono text-[10px] text-gold">{n}</div>
            <div className="text-[12.5px] font-medium mt-1 leading-snug">{t}</div>
            <div className="text-[11.5px] text-white/55 mt-0.5">{m}</div>
          </div>
        ))}
      </div>
      <p className="mt-4 text-[11.5px] text-white/55">Sample output. AI output is decision support; verify citations before relying on them.</p>
    </div>
  );
}