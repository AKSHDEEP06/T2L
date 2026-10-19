import React from "react";

export default function NGlow({ className = "", style }) {
  return (
    <div className={`nglow ${className}`} style={style} aria-hidden="true">
      <svg width="100%" height="100%" viewBox="0 0 96 118" fill="none">
        <g stroke="currentColor" strokeWidth="15" strokeLinecap="round" strokeLinejoin="round">
          <path d="M13 108 V26 L70 100 V34" />
          <path d="M49 44 L70 18 L91 44" />
        </g>
      </svg>
    </div>
  );
}