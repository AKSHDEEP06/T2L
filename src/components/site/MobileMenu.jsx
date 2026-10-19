import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import { PRODUCTS } from "./products";

export default function MobileMenu({ ctaText, ctaTo, loginText, loginTo }) {
  const [open, setOpen] = useState(true);
  const row = "block font-display font-semibold text-[22px] py-3 text-ink border-b border-line-soft";
  return (
    <div className="fixed inset-x-0 top-16 bottom-0 z-[45] bg-surface flex flex-col lg:hidden">
      <div className="flex-1 overflow-y-auto px-5 py-4">
        <button onClick={() => setOpen((p) => !p)} aria-expanded={open} className={`${row} w-full flex items-center justify-between`}>
          Products <ChevronDown className={`transition-transform ${open ? "rotate-180" : ""}`} size={20} />
        </button>
        {open && PRODUCTS.map((p) => (
          <Link key={p.to} to={p.to} className="flex items-center gap-3 py-3 pl-2">
            <span className="w-10 h-10 rounded-xl bg-gold-soft text-gold-text flex items-center justify-center"><p.icon size={18} /></span>
            <span><b className="block text-[15px] text-ink">{p.name}</b><span className="text-[13px] text-tgray">{p.line}</span></span>
          </Link>
        ))}
        <Link to="/legal-services#pricing" className={row}>Pricing</Link>
        <Link to="/resources" className={row}>Resources</Link>
        <Link to={loginTo} className={row}>{loginText}</Link>
      </div>
      <div className="p-5 border-t border-line bg-surface">
        <Link to={ctaTo} className="btn btn-gold w-full !py-4">{ctaText}</Link>
      </div>
    </div>
  );
}