import React from "react";
import { Link } from "react-router-dom";
import { PRODUCTS } from "./products";

export default function MegaMenu({ onNavigate }) {
  return (
    <div className="absolute left-0 top-full pt-3 w-[760px] z-50">
      <div className="rounded-2xl border border-line bg-surface shadow-md p-3">
        <div className="grid grid-cols-3 gap-2">
          {PRODUCTS.map((p) => (
            <Link key={p.to} to={p.to} onClick={onNavigate} className="rounded-xl p-4 hover:bg-bgtint transition-colors block">
              <span className="w-10 h-10 rounded-xl bg-gold-soft text-gold-text flex items-center justify-center mb-3"><p.icon size={20} /></span>
              <div className="font-display font-semibold text-[15px] text-ink">{p.name}</div>
              <p className="text-[13px] text-tgray leading-snug mt-1">{p.line}</p>
              <span className="chip mt-3 !text-[10px] !py-1">{p.chip}</span>
            </Link>
          ))}
        </div>
        <div className="border-t border-line mt-2 pt-2 px-2">
          <Link to="/#products" onClick={onNavigate} className="text-[13px] font-semibold text-gold-text hover:underline">Compare products</Link>
        </div>
      </div>
    </div>
  );
}