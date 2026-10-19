import React from "react";

export default function Marquee({ items = [] }) {
  const row = [...items, ...items];
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee-track">
        {row.map((it, i) => (
          <span className="marquee-item" key={i}>
            {it}
            <span></span>
          </span>
        ))}
      </div>
    </div>
  );
}