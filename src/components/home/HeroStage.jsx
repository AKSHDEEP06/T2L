import React, { useEffect, useState } from "react";
import { useReducedMotion } from "framer-motion";
import StageFrame from "./StageFrame";
import ComplianceStage from "./ComplianceStage";
import DocumentStage from "./DocumentStage";
import ResearchStage from "./ResearchStage";

const SCENES = [
  { id: "incorporation", label: "Incorporation", C: ComplianceStage },
  { id: "document", label: "Document", C: DocumentStage },
  { id: "research", label: "Research", C: ResearchStage },
];

export default function HeroStage({ first = 0 }) {
  const reduce = useReducedMotion();
  const [idx, setIdx] = useState(first);
  const [paused, setPaused] = useState(false);

  useEffect(() => { setIdx(first); }, [first]);
  useEffect(() => {
    if (reduce || paused) return;
    const t = setInterval(() => setIdx((i) => (i + 1) % SCENES.length), 6000);
    return () => clearInterval(t);
  }, [reduce, paused]);

  const Scene = SCENES[idx].C;
  return (
    <div onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)} onFocus={() => setPaused(true)} onBlur={() => setPaused(false)}>
      <StageFrame className="min-h-[380px]">
        <div role="tablist" aria-label="Product scenes" className="flex gap-1.5">
          {SCENES.map((s, i) => (
            <button key={s.id} role="tab" aria-selected={i === idx} onClick={() => setIdx(i)} className={`rounded-full px-3.5 py-1.5 text-[12px] font-mono transition-colors ${i === idx ? "bg-gold text-[#111]" : "text-white/70 hover:text-white bg-white/5"}`}>
              {s.label}
            </button>
          ))}
        </div>
        <div role="tabpanel"><Scene /></div>
      </StageFrame>
    </div>
  );
}