import React from "react";
import { Flag } from "lucide-react";

const FLAGS = ["Missing governing law clause", "Notice period is one-sided", "Stamp duty not stated"];

export default function DocumentStage() {
  return (
    <div className="pt-6 grid gap-4 sm:grid-cols-[1.2fr_1fr]">
      <div className="rounded-lg bg-white text-neutral-800 p-5 aspect-[3/4] max-h-[300px] overflow-hidden">
        <div className="font-display font-bold text-[13px] text-neutral-900">NON-DISCLOSURE AGREEMENT</div>
        <div className="mt-3 space-y-2 text-[10.5px] leading-relaxed">
          <p>This Agreement is made on <mark className="bg-gold/40 px-1 rounded">8 October 2026</mark> between <mark className="bg-gold/40 px-1 rounded">Acme Labs Pvt. Ltd.</mark> and <mark className="bg-gold/40 px-1 rounded">Ananya Rao</mark>.</p>
          <div className="h-1.5 rounded bg-neutral-200" /><div className="h-1.5 rounded bg-neutral-200 w-5/6" /><div className="h-1.5 rounded bg-neutral-200 w-4/6" />
          <p>Governed by the laws of India, courts at <mark className="bg-gold/40 px-1 rounded">New Delhi</mark>.</p>
          <div className="h-1.5 rounded bg-neutral-200" /><div className="h-1.5 rounded bg-neutral-200 w-3/6" />
        </div>
      </div>
      <div>
        <div className="font-mono text-[11px] tracking-[0.14em] uppercase text-gold mb-3">Risk flags</div>
        <ul className="flex flex-col gap-2">
          {FLAGS.map((f) => (
            <li key={f} className="flex items-start gap-2 rounded-xl bg-navy-2 px-3 py-2.5 text-[12.5px]"><Flag size={13} className="text-gold mt-0.5 shrink-0" />{f}</li>
          ))}
        </ul>
        <span className="inline-block mt-4 rounded-full bg-emerald-400/15 text-emerald-300 px-3 py-1 text-[11px] font-mono">Signed</span>
      </div>
    </div>
  );
}