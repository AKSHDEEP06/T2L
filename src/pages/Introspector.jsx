import React, { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useScroll, useTransform } from "framer-motion";
import Reveal from "@/components/site/Reveal";
import SectionHeading from "@/components/site/SectionHeading";
import CountUp from "@/components/site/CountUp";
import FAQCard from "@/components/site/FAQCard";
import CTABand from "@/components/site/CTABand";
import NGlow from "@/components/site/NGlow";

const STATS = [
  { v: 90, suffix: "%", k: "Citation accuracy" },
  { v: 2400, suffix: "+", k: "Judgments searchable" },
  { v: 1, suffix: ".9s", k: "Median retrieval" },
  { v: 3, suffix: "s", k: "To a grounded answer" },
];

const WORKFLOWS = [
  { label: "research · legal query", t: "Ask in plain language", d: "Type a question in English or Hinglish. Introspector parses intent, maps it to the right statute and jurisdiction, and shows its reasoning before it answers." },
  { label: "search · judgments", t: "Search the case corpus", d: "2,400+ indexed judgments from SCC, AIR, and the High Courts, filtered by court, bench, date, and treatment. No keyword gymnastics." },
  { label: "discovery · similar cases", t: "Discover similar matters", d: "Surface factually analogous cases and the arguments that won them, organised by how closely they track your fact pattern." },
  { label: "citations · treatment check", t: "Check citation treatment", d: "Every authority is checked for whether it was followed, distinguished, or overruled. You never rely on a case that has been quietly overturned." },
  { label: "briefs · draft assembly", t: "Assemble a research brief", d: "Turn a research session into a structured brief with citations, headnotes, and the passages you flagged, exportable to your matter." },
  { label: "matter · case organisation", t: "Organise by matter", d: "Every query, judgment, and brief is filed under its matter. Pick up where you left off, with full history and notes." },
  { label: "timeline · chronology", t: "Build a chronology", d: "Drop events, dates, and documents into a visual timeline that becomes the spine of your case strategy." },
];

const TESTIMONIALS = [
  { q: "The citation treatment view is the part I did not know I needed. Knowing a case has been distinguished before I rely on it has saved real embarrassment.", who: "M. Verma", rl: "Senior Legal Counsel · In-house", av: "MV" },
  { q: "What used to be a half-day of SCC digests is now ten minutes with a brief I can actually trust, because every line points to a source.", who: "A. Iyer", rl: "Advocate · Bombay HC", av: "AI" },
];

const FAQS = [
  { q: "Is Introspector available to everyone?", a: "It is in a closed pilot for advocates, law firms, and corporate legal teams. Request access and we will onboard you in batches, prioritising practising professionals." },
  { q: "Does it really cite every claim?", a: "Yes. Uncited research is blocked at the pipeline level. Every sentence in an Introspector answer links to a source judgment or statute, and the treatment of that authority is checked before it is shown to you." },
  { q: "Which jurisdictions does it cover?", a: "Indian law — Supreme Court, High Courts, and central statutes including the new criminal codes (BNS, BNSS, BSA). State-specific regulations are being added through the pilot." },
  { q: "Is my research data used to train models?", a: "No. Your queries, matters, and uploaded documents are never used to train models. Sensitive material lives in isolated, encrypted storage with per-matter access controls." },
  { q: "Can it replace a junior's research?", a: "It accelerates research, but it is decision support, not a substitute for professional judgment. Think of it as a very fast, very careful research assistant that always shows its working." },
];

const TYPE_TEXT = "Is anticipatory bail available for a non-bailable offence under the BNSS?";

function ProductWindow() {
  const [typed, setTyped] = useState("");
  const [caret, setCaret] = useState(true);
  const [state, setState] = useState("hidden");
  const ref = useRef(null);

  useEffect(() => {
    let i = 0;
    let timer;
    const start = () => {
      timer = setInterval(() => {
        setTyped(TYPE_TEXT.slice(0, i));
        i++;
        if (i > TYPE_TEXT.length) {
          clearInterval(timer);
          setCaret(false);
          setState("loading");
          setTimeout(() => setState("done"), 2000);
        }
      }, 40);
    };
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((e) => { if (e.isIntersecting) { setTimeout(start, 500); obs.disconnect(); } });
    }, { threshold: 0.2 });
    if (ref.current) obs.observe(ref.current);
    return () => { clearInterval(timer); obs.disconnect(); };
  }, []);

  return (
    <div ref={ref} className="relative">
      <div className="absolute -left-4 -top-6 z-20 rounded-full border border-line bg-surface/90 backdrop-blur px-3.5 py-2 text-[12px] font-mono text-ink shadow-[0_12px_34px_rgba(17,17,17,0.09)] flex items-center gap-2">
        <span className="w-1.5 h-1.5 rounded-full bg-gold" />Retrieval-grounded · <b>0 hallucinated citations</b>
      </div>
      <div className="absolute -right-3 top-16 z-20 rounded-full border border-line bg-navy text-white px-3.5 py-2 text-[12px] font-mono shadow-[0_12px_34px_rgba(17,17,17,0.14)]">
        <b>2,400+</b> judgments searched in 1.9s
      </div>

      <div className="rounded-2xl border border-line bg-surface shadow-[0_30px_70px_rgba(17,17,17,0.14)] overflow-hidden">
        <div className="flex items-center gap-3 border-b border-line px-4 py-3 bg-bgtint">
          <div className="flex gap-1.5"><i className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" /><i className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" /><i className="w-2.5 h-2.5 rounded-full bg-[#28c840]" /></div>
          <div className="flex items-center gap-2 text-[12px] text-tgray font-mono flex-1 justify-center">
            <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" strokeWidth="1.7"><rect x="3" y="11" width="18" height="10" rx="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" /></svg>
            app.introspector.turn2law.in / research
          </div>
          <div className="hidden sm:flex gap-1.5">
            <span className="text-[10px] font-mono px-2 py-1 rounded-full bg-gold-soft text-gold-deep">BNS · BNSS · BSA</span>
            <span className="text-[10px] font-mono px-2 py-1 rounded-full bg-ink/[0.04] text-tgray">SCC · AIR</span>
          </div>
        </div>
        <div className="grid grid-cols-[180px_1fr] min-h-[320px]">
          <aside className="border-r border-line bg-bgtint p-3 hidden sm:block">
            {[
              { on: true, label: "Research", icon: <><circle cx="11" cy="11" r="7" /><path d="M21 21l-4.35-4.35" /></> },
              { label: "Judgments", cnt: "2.4k", icon: <path d="M3 6h18M3 12h18M3 18h12" /> },
              { label: "Precedents", icon: <><circle cx="12" cy="12" r="3" /><circle cx="5" cy="6" r="2" /><circle cx="19" cy="7" r="2" /><circle cx="18" cy="18" r="2" /><path d="M9.5 10.5 6.5 7M14 11l3.3-3M14 13.5l3 3.2" /></> },
              { label: "Briefs", icon: <><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" /><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" /></> },
            ].map((r, i) => (
              <div key={i} className={`flex items-center gap-2.5 px-3 py-2.5 rounded-xl text-[13px] mb-1 [&_svg]:w-4 [&_svg]:h-4 ${r.on ? "bg-solid text-white" : "text-tgray hover:bg-ink/[0.04]"}`}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">{r.icon}</svg>
                {r.label}{r.cnt && <span className="ml-auto text-[10px] font-mono opacity-70">{r.cnt}</span>}
              </div>
            ))}
            <div className="font-mono text-[10px] tracking-[0.14em] uppercase text-tgray px-3 mt-4 mb-1">Matters</div>
            {["State v. Sharma", "Mehta Bail App."].map((m) => (
              <div key={m} className="flex items-center gap-2.5 px-3 py-2.5 rounded-xl text-[13px] text-tgray hover:bg-ink/[0.04] [&_svg]:w-4 [&_svg]:h-4">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /></svg>
                {m}
              </div>
            ))}
          </aside>
          <div className="p-5">
            <div className="flex items-center gap-2.5 rounded-xl border border-line bg-bgtint px-3.5 py-3">
              <svg viewBox="0 0 24 24" width="16" height="16" className="text-gold-deep shrink-0" fill="none" stroke="currentColor" strokeWidth="1.7"><path d="M12 3v3M12 18v3M3 12h3M18 12h3M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M18.4 5.6l-2.1 2.1M7.7 16.3l-2.1 2.1" /></svg>
              <span className="text-[14px] text-ink flex-1">{typed}{caret && <span className="inline-block w-[2px] h-4 bg-gold-deep align-middle ml-0.5 animate-pulse" />}</span>
              <span className="text-[10px] font-mono px-2 py-1 rounded-md bg-solid text-white">Enter</span>
            </div>
            <AnimatePresence>
              {state !== "hidden" && (
                <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="mt-4 rounded-xl border border-line bg-surface p-4">
                  <div className="flex items-center gap-2 text-[12px] font-mono text-tgray mb-3">
                    {state === "loading" ? <span className="w-4 h-4 rounded-full border-2 border-gold/30 border-t-gold-deep animate-spin" /> : <span className="w-4 h-4 rounded-full bg-gold-deep/15 text-gold-deep flex items-center justify-center"><svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M20 6 9 17l-5-5" /></svg></span>}
                    Grounded answer · 4 authorities
                  </div>
                  <p className="text-[13.5px] leading-relaxed text-ink">
                    Anticipatory bail under Section 482 of the BNSS (formerly Section 438 CrPC) is available for a non-bailable offence, but its grant is discretionary and guided by the gravity of the accusation and the applicant's antecedents<sup className="text-gold-deep">1</sup>. For economic offences the Supreme Court has cautioned against a mechanical grant<sup className="text-gold-deep">2</sup>, while custodial interrogation being unnecessary weighs in the applicant's favour<sup className="text-gold-deep">3</sup>.
                  </p>
                  {state === "done" && (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mt-3 pt-3 border-t border-line flex flex-wrap gap-2">
                      {["BNSS §482", "SCC 2023", "AIR 2022", "Delhi HC 2024"].map((s, i) => (
                        <span key={s} className="text-[11px] font-mono px-2.5 py-1 rounded-full bg-gold-soft text-gold-deep">{i + 1}. {s}</span>
                      ))}
                    </motion.div>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Introspector() {
  const [active, setActive] = useState(0);
  const { scrollY } = useScroll();
  const glowY = useTransform(scrollY, [0, 900], [0, 108]);

  useEffect(() => {
    const id = setInterval(() => setActive((p) => (p + 1) % WORKFLOWS.length), 5000);
    return () => clearInterval(id);
  }, []);

  return (
    <>
      {/* HERO */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="hero-bg">
          <motion.div style={{ y: glowY }} className="absolute left-1/2 -translate-x-1/2 top-[6%] w-[clamp(280px,42vw,560px)] h-[clamp(280px,42vw,560px)]"><NGlow className="w-full h-full" /></motion.div>
        </div>
        <div className="wrap relative z-10">
          <div className="max-w-[760px]">
            <Reveal>
              <span className="inline-flex items-center gap-2.5 rounded-full border border-line bg-surface/60 backdrop-blur px-3.5 py-1.5 text-[12px] font-mono text-tgray">
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-solid text-white">INTROSPECTOR</span>
                <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><circle cx="11" cy="11" r="7" /><path d="M21 21l-4.35-4.35" /></svg>
                The AI research workspace for legal professionals
              </span>
            </Reveal>
            <Reveal delay={0.07}>
              <h1 className="font-display font-bold text-[clamp(36px,6.5vw,72px)] leading-[1.03] tracking-tight mt-6 text-balance">
                The fastest way<br />to research <span className="g">Indian law.</span>
              </h1>
            </Reveal>
            <Reveal delay={0.15}>
              <p className="text-[clamp(16px,1.6vw,19px)] text-tgray leading-relaxed mt-6 max-w-[600px]">
                Introspector is the AI research workspace built for advocates, law firms, and corporate legal teams. Ask a question, and get a grounded answer with judgment search, precedent discovery, and citation intelligence.
              </p>
            </Reveal>
            <Reveal delay={0.22}>
              <div className="flex flex-wrap items-center gap-3 mt-8">
                <a href="#contact" className="btn btn-gold">Request early access <svg viewBox="0 0 24 24" width="17" height="17" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg></a>
                <a href="#contact" className="btn btn-ghost">Book a demo</a>
              </div>
            </Reveal>
            <Reveal delay={0.28}>
              <div className="flex items-center gap-2 mt-6 text-[13px] text-tgray">
                <svg viewBox="0 0 24 24" width="16" height="16" className="text-gold-deep" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 6 9 17l-5-5" /></svg>
                Grounded in Indian law. A citation on every claim. Now in closed pilot.
              </div>
            </Reveal>
          </div>
          <Reveal delay={0.2}>
            <div id="live" className="mt-14 max-w-[860px] mx-auto">
              <ProductWindow />
            </div>
          </Reveal>
        </div>
      </section>

      {/* STATS */}
      <section className="pad-t">
        <div className="wrap">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {STATS.map((s, i) => (
              <Reveal key={i} delay={i * 0.08}>
                <div className="rounded-2xl border border-line bg-surface p-7 text-center">
                  <div className="font-display font-bold text-[clamp(30px,4vw,44px)] text-ink leading-none">
                    <CountUp to={s.v} suffix={s.suffix} />
                  </div>
                  <div className="font-mono text-[11px] tracking-[0.12em] uppercase text-tgray mt-3">{s.k}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* WORKFLOWS */}
      <section id="workflows" className="pad">
        <div className="wrap">
          <SectionHeading center eyebrow="The workspace" title="Seven workflows. One research bench." lede="Every part of legal research, connected — from the first question to a filed brief." />
          <div className="grid lg:grid-cols-[300px_1fr] gap-8 mt-12">
            <div className="flex lg:flex-col gap-2 overflow-x-auto no-scrollbar">
              {WORKFLOWS.map((w, i) => (
                <button key={i} onClick={() => setActive(i)} className={`text-left px-4 py-3.5 rounded-xl border transition-all whitespace-nowrap lg:whitespace-normal ${active === i ? "bg-solid text-white border-solid" : "bg-surface text-tgray border-line hover:border-ink/20"}`}>
                  <span className="font-mono text-[11px] tracking-[0.1em] block">{w.label}</span>
                </button>
              ))}
            </div>
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                className="rounded-2xl border border-line bg-bgtint p-7 sm:p-10"
              >
                <h3 className="font-display font-bold text-[clamp(22px,2.6vw,30px)] tracking-tight">{WORKFLOWS[active].t}</h3>
                <p className="text-[15px] leading-relaxed text-tgray mt-4 max-w-[560px]">{WORKFLOWS[active].d}</p>
                <div className="flex items-center gap-1.5 mt-7">
                  {WORKFLOWS.map((_, i) => <span key={i} className={`h-1 rounded-full transition-all ${i === active ? "w-8 bg-gold-deep" : "w-2 bg-line"}`} />)}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section id="security" className="pad-t">
        <div className="wrap">
          <SectionHeading eyebrow="From the pilot" title="Lawyers who stopped digging." />
          <div className="grid gap-5 mt-10 md:grid-cols-2">
            {TESTIMONIALS.map((t, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <div className="rounded-2xl border border-line bg-surface p-7 h-full flex flex-col">
                  <p className="text-[16px] leading-relaxed text-ink flex-1">"{t.q}"</p>
                  <div className="flex items-center gap-3 mt-6 pt-5 border-t border-line">
                    <span className="w-11 h-11 rounded-full bg-navy text-white flex items-center justify-center font-display font-semibold text-[14px]">{t.av}</span>
                    <div>
                      <div className="font-display font-semibold text-[14px]">{t.who}</div>
                      <div className="text-[12.5px] text-tgray">{t.rl}</div>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="pad">
        <div className="wrap max-w-[760px]">
          <SectionHeading center eyebrow="Frequently asked" title="Questions, answered." />
          <div className="flex flex-col gap-3.5 mt-10">
            {FAQS.map((f, i) => <FAQCard key={i} question={f.q} answer={f.a} delay={i * 0.05} />)}
          </div>
        </div>
      </section>

      <CTABand title="Research Indian law in minutes, not days." lede="Request early access to Introspector — the AI research workspace with a citation on every claim." primary={{ label: "Request access", to: "/#contact" }} secondary={{ label: "Book a demo", to: "/#contact" }} />
    </>
  );
}