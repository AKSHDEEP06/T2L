import React from "react";

// Chamber product stage: navy panel, 24px radius, always labelled as illustration.
export default function StageFrame({ children, label = "Illustration", className = "" }) {
  return (
    <div className={`relative rounded-3xl bg-navy border border-white/10 p-5 sm:p-6 shadow-md text-white ${className}`}>
      <span className="absolute top-3 right-4 font-mono text-[10px] tracking-[0.14em] uppercase text-white/50">{label}</span>
      {children}
    </div>
  );
}