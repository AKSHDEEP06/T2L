import React from "react";
import Reveal from "./Reveal";

export default function SectionHeading({ eyebrow, title, lede, center = false, className = "" }) {
  return (
    <div className={`sec-head ${center ? "text-center flex flex-col items-center" : ""} ${className}`}>
      {eyebrow && (
        <Reveal>
          <span className={`eyebrow ${center ? "center" : ""}`}>{eyebrow}</span>
        </Reveal>
      )}
      {title && (
        <Reveal delay={0.08}>
          <h2 className="h2 mt-4 text-balance" style={center ? { maxWidth: 760 } : undefined}>{title}</h2>
        </Reveal>
      )}
      {lede && (
        <Reveal delay={0.14}>
          <p className={`lede mt-5 ${center ? "mx-auto" : ""}`}>{lede}</p>
        </Reveal>
      )}
    </div>
  );
}