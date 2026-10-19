import React from "react";
import { Check, Clock, AlertCircle } from "lucide-react";

const ROWS = [
  { t: "Company incorporation", d: "Filed", s: "done" },
  { t: "GST registration", d: "In progress", s: "wip" },
  { t: "MGT-7 annual return", d: "Due in 14 days", s: "due" },
  { t: "Trademark application", d: "Query raised", s: "query" },
];
const TONE = {
  done: { icon: Check, cls: "bg-emerald-400/15 text-emerald-300" },
  wip: { icon: Clock, cls: "bg-sky-400/15 text-sky-300" },
  due: { icon: Clock, cls: "bg-gold/15 text-gold" },
  query: { icon: AlertCircle, cls: "bg-red-400/15 text-red-300" },
};

export default function ComplianceStage() {
  return (
    <div className="pt-6">
      <div className="font-mono text-[11px] tracking-[0.14em] uppercase text-gold mb-4">Compliance tracker</div>
      <ul className="flex flex-col gap-2.5">
        {ROWS.map((r) => {
          const T = TONE[r.s];
          return (
            <li key={r.t} className="flex items-center justify-between gap-3 rounded-xl bg-navy-2 px-4 py-3.5">
              <span className="text-[14px] font-medium">{r.t}</span>
              <span className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[11px] font-mono ${T.cls}`}><T.icon size={12} />{r.d}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}