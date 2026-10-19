import React from "react";
import { Link } from "react-router-dom";
import Reveal from "./Reveal";
import NGlow from "./NGlow";

export default function CTABand({ title, lede, primary = { label: "Get started", to: "/login" }, secondary = { label: "Talk to us", to: "/#contact" } }) {
  return (
    <section className="pad-t">
      <div className="wrap">
        <Reveal>
          <div className="relative overflow-hidden rounded-[28px] bg-navy text-white px-6 py-16 sm:px-16 sm:py-20 text-center">
            <NGlow className="!opacity-30 left-1/2 top-0 -translate-x-1/2 w-[420px] h-[420px]" />
            <div className="ablob" style={{ top: "-30%", right: "-10%", width: 360, height: 360, background: "radial-gradient(circle,rgba(216,171,91,.22),transparent 70%)" }} />
            <div className="relative z-10 max-w-[640px] mx-auto">
              <h2 className="font-display font-bold text-[clamp(28px,3.6vw,42px)] leading-[1.1] tracking-tight text-balance">{title}</h2>
              {lede && <p className="mt-5 text-[16px] leading-relaxed text-white/70 max-w-[520px] mx-auto">{lede}</p>}
              <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
                <Link to={primary.to} className="btn btn-gold">{primary.label}</Link>
                <Link to={secondary.to} className="btn btn-ghost" style={{ background: "rgba(255,255,255,.08)", color: "#fff", borderColor: "rgba(255,255,255,.2)" }}>{secondary.label}</Link>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}