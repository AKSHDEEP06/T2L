import React from "react";
import { Link } from "react-router-dom";
import { PRODUCTS } from "./products";

function Col({ title, links }) {
  return (
    <div>
      <h2 className="font-mono text-[11px] font-medium tracking-[0.14em] uppercase text-gold mb-4">{title}</h2>
      <ul className="flex flex-col gap-2.5">
        {links.map((l) => (
          <li key={l.label}>
            {l.to ? (
              <Link to={l.to} className="text-[14px] text-white/75 hover:text-gold transition-colors">{l.label}</Link>
            ) : (
              <a href={l.href} target={l.ext ? "_blank" : undefined} rel={l.ext ? "noopener noreferrer" : undefined} className="text-[14px] text-white/75 hover:text-gold transition-colors">{l.label}</a>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Footer() {
  const products = PRODUCTS.map((p) => ({ label: p.name, to: p.to }));
  const resources = [{ label: "Resource library", to: "/resources" }];
  const company = [
    { label: "Platform", to: "/#products" },
    { label: "Contact", to: "/#contact" },
    { label: "LinkedIn", href: "https://www.linkedin.com/company/turn2law", ext: true },
  ];
  const legal = [{ label: "Privacy Policy", to: "/privacy" }];

  return (
    <footer className="bg-navy text-white pt-16 pb-8">
      <div className="wrap">
        <div className="grid gap-10 grid-cols-2 lg:grid-cols-[1.6fr_1fr_1fr_1fr_1fr]">
          <div className="col-span-2 lg:col-span-1">
            <Link to="/" className="flex items-center gap-1.5 font-display font-extrabold text-[22px] tracking-tight leading-none mb-4">
              <span>Turn2</span><span className="text-gold">Law</span>
              <span className="w-1.5 h-1.5 rounded-full bg-gold ml-1" />
            </Link>
            <p className="text-[14px] leading-relaxed text-white/70 max-w-[300px]">India's legal operating system, for the founder who cannot afford a lawyer on retainer and the lawyer who cannot afford a bench.</p>
          </div>
          <Col title="Products" links={products} />
          <Col title="Resources" links={resources} />
          <Col title="Company" links={company} />
          <Col title="Legal" links={legal} />
        </div>

        <div className="mt-12 rounded-2xl bg-navy-2 p-5 sm:p-6">
          <p className="text-[14px] leading-relaxed text-white/85">
            Turn2Law is a technology platform, not a law firm, and does not provide legal representation. Nothing here is legal advice. AI output is decision support: review it with a qualified professional before relying on it.
          </p>
        </div>

        <div className="mt-6 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-[13px] text-white/60">
          <div>
            <span className="font-mono tracking-wide">Effivia Turn2Law Legal Pvt. Ltd. · CIN: U63110DL2025PTC443434</span>
            <span className="block mt-1">© 2026 Effivia Turn2Law Legal Pvt. Ltd. All rights reserved.</span>
          </div>
          <a href="#top" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }} className="font-semibold text-gold hover:underline w-fit">Back to top</a>
        </div>
      </div>
    </footer>
  );
}