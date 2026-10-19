import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import Reveal from "@/components/site/Reveal";
import SectionHeading from "@/components/site/SectionHeading";
import FAQCard from "@/components/site/FAQCard";
import CTABand from "@/components/site/CTABand";
import NGlow from "@/components/site/NGlow";

const STATS = [
  { v: "13+", k: "Ready templates" },
  { v: "< 60s", k: "To a first draft" },
  { v: "PDF & DOCX", k: "Export, versioned" },
];

const FLOW = [
  { n: "STEP 01", t: "Prompt", d: "Describe what you need in plain language. The engine shows what it understood before it drafts." },
  { n: "STEP 02", t: "Confirm or guide", d: "Missing details are collected inline, or through a step-by-step Q&A written for non-lawyers." },
  { n: "STEP 03", t: "Generate", d: "Assembled from a versioned, India-specific clause library. The AI never free-writes statutory language." },
  { n: "STEP 04", t: "Review", d: "Every clause carries a plain-language explainer. Anything one-sided is flagged with severity and a reason." },
  { n: "STEP 05", t: "Decide", d: "Accept, edit clause by clause, or bring in a Turn2Law lawyer for a fixed-fee review." },
  { n: "STEP 06", t: "Execute", d: "Sign online with a tamper-evident audit trail, export to PDF and DOCX. Versions kept forever." },
];

const TEMPLATES = [
  ["NDA", "MUTUAL · ONE-WAY"], ["MOU", "GENERAL"], ["Founders' Agreement", "EQUITY · VESTING"],
  ["Employment Agreement", "FULL-TIME"], ["Consultancy Agreement", "FREELANCER"], ["Vendor & service", "B2B"],
  ["Privacy Policy & Terms", "WEB · APP"], ["Non-Compete", "RESTRICTIVE"], ["IP Assignment", "TRANSFER"],
  ["Shareholders' Agreement", "INVESTMENT"], ["Term Sheet", "FUNDRAISE"], ["Rental / Lease", "PROPERTY"],
  ["Loan Agreement", "PROMISSORY"],
];

const FEATURES = [
  { t: "AI risk flagging", d: "Unusual or one-sided clauses are surfaced before a signature, not after, with a severity and a plain reason.", tag: "BEFORE YOU SIGN", icon: (<><path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" /><line x1="4" y1="22" x2="4" y2="15" /></>) },
  { t: "Plain-language explainers", d: "Every clause is paired with an explanation a non-lawyer can act on. No Latin without a translation.", tag: "EVERY CLAUSE", icon: (<><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" /><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" /></>) },
  { t: "Smart clause suggestions", d: "Suggestions based on document type and party details, drawn from an India-specific library updated as law changes.", tag: "CONTEXT AWARE", icon: (<path d="M12 3v3M12 18v3M3 12h3M18 12h3M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M18.4 5.6l-2.1 2.1M7.7 16.3l-2.1 2.1" />) },
  { t: "Multi-party review", d: "Share, comment, and resolve with the other side in one flow, no email attachments ricocheting around.", tag: "COLLABORATE", icon: (<><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" /></>) },
  { t: "E-signature", d: "Sign online with a tamper-evident audit trail. Executed versions lock automatically.", tag: "TAMPER-EVIDENT", icon: (<><path d="M12 19l7-7 3 3-7 7-3-3z" /><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18z" /><path d="M2 2l7.586 7.586" /><circle cx="11" cy="11" r="2" /></>) },
  { t: "Version history", d: "Full version history and audit trail on every document, exportable to PDF and DOCX forever.", tag: "KEPT FOREVER", icon: (<><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></>) },
];

const FAQS = [
  { q: "What is Doc Engine?", a: "Doc Engine turns a plain-language prompt into a well-drafted, India-specific legal document in minutes. It flags risky clauses, explains each clause in plain language, and lets you sign online with a full audit trail." },
  { q: "Does the AI write the legal language itself?", a: "No. Documents are assembled from a versioned, India-specific clause library. The AI never free-writes statutory language, and every clause carries a plain-language explainer so you know what you are signing." },
  { q: "What documents can I generate?", a: "More than thirteen templates, including NDAs, MOUs, Founders' Agreements, employment and consultancy contracts, vendor agreements, privacy policies, IP assignments, shareholders' agreements, term sheets, leases, and loan agreements." },
  { q: "Can a lawyer review my document?", a: "Yes. At any point you can bring in a Turn2Law lawyer for a fixed-fee review. AI output is decision support and, for high-stakes documents, should be reviewed by qualified counsel before use." },
  { q: "How do I sign and export?", a: "Sign online with a tamper-evident audit trail. Executed versions lock automatically and export to PDF and DOCX, with full version history kept forever." },
];

export default function DocEngine() {
  const [prompt, setPrompt] = useState("");
  const ref = useRef(null);
  const chips = [
    "A mutual NDA between my startup and a vendor in Bengaluru, with a 2-year term.",
    "A founders' agreement for two co-founders splitting equity 60/40 with a 4-year vesting schedule and a 1-year cliff.",
    "A full-time employment agreement for a software engineer in Delhi, with a 3-month probation and standard notice period.",
    "A consultancy agreement for a freelance designer engaged for 6 months, paid monthly, with IP assigned to the company.",
  ];
  const onChip = (t) => {
    setPrompt(t);
    setTimeout(() => { if (ref.current) { ref.current.style.height = "auto"; ref.current.style.height = Math.min(ref.current.scrollHeight, 172) + "px"; ref.current.focus(); } }, 0);
  };
  const onInput = (e) => {
    setPrompt(e.target.value);
    if (ref.current) { ref.current.style.height = "auto"; ref.current.style.height = Math.min(ref.current.scrollHeight, 172) + "px"; }
  };

  return (
    <>
      {/* HERO */}
      <section className="relative pt-36 pb-20 overflow-hidden">
        <div className="hero-bg"><div className="hero-mesh" /><div className="hero-grid-lines" />
          <div className="absolute left-1/2 -translate-x-1/2 top-[6%] w-[clamp(280px,40vw,520px)] h-[clamp(280px,40vw,520px)]"><NGlow className="w-full h-full" /></div>
        </div>
        <div className="wrap relative z-10 text-center">
          <Reveal>
            <span className="font-mono text-[12px] tracking-wide text-tgray"><Link to="/" className="hover:text-gold-deep">Home</Link> / Doc Engine</span>
          </Reveal>
          <Reveal delay={0.06}>
            <h1 className="font-display font-bold text-[clamp(36px,6vw,64px)] leading-[1.05] tracking-tight mt-5 text-balance">
              Prompt in.<br /><span className="g">Drafted document out.</span>
            </h1>
          </Reveal>
          <Reveal delay={0.14}>
            <p className="lede mx-auto mt-5 text-center">Plain language in. A well-drafted, India-specific document out, in minutes.</p>
          </Reveal>

          <Reveal delay={0.22}>
            <div className="max-w-[680px] mx-auto mt-10 text-left">
              <div className="rounded-2xl border border-line bg-surface shadow-[0_12px_34px_rgba(17,17,17,0.09)] p-2 flex items-end gap-2">
                <svg className="shrink-0 w-6 h-6 ml-3 mb-3 text-gold-deep" viewBox="0 0 24 24" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3v3M12 18v3M3 12h3M18 12h3M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M18.4 5.6l-2.1 2.1M7.7 16.3l-2.1 2.1" /></svg>
                <textarea ref={ref} rows={1} value={prompt} onChange={onInput} placeholder="e.g. A mutual NDA with a vendor in Bengaluru, 2-year term" className="flex-1 resize-none border-0 outline-none text-[15px] py-3 bg-transparent max-h-[172px]" />
                <button className="btn btn-gold m-1" type="button">
                  Draft it
                  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
                </button>
              </div>
              <div className="text-[12px] text-tgray mt-2.5 px-1"><b className="text-ink">Press Enter</b> to draft · Shift + Enter for a new line</div>
              <div className="flex flex-wrap gap-2 mt-3.5">
                {["Mutual NDA", "Founders' Agreement", "Employment", "Consultancy"].map((c, i) => (
                  <button key={c} type="button" onClick={() => onChip(chips[i])} className="chip hover:border-gold-deep hover:text-gold-deep transition-colors cursor-pointer">{c}</button>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* STATS */}
      <section className="wrap -mt-7 relative z-10">
        <Reveal>
          <div className="grid grid-cols-3 rounded-2xl border border-line bg-surface shadow-[0_12px_34px_rgba(17,17,17,0.09)] overflow-hidden">
            {STATS.map((s, i) => (
              <div key={i} className={`p-6 sm:p-8 text-center ${i < 2 ? "border-r border-line" : ""}`}>
                <div className="font-display font-bold text-[clamp(22px,3vw,32px)] text-ink">{s.v}</div>
                <div className="font-mono text-[11px] tracking-[0.12em] uppercase text-tgray mt-1.5">{s.k}</div>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* FLOW */}
      <section id="how" className="pad">
        <div className="wrap">
          <SectionHeading eyebrow="From plain language to signed document" title="Six steps. Minutes, not weeks." />
          <Reveal>
            <div className="relative overflow-hidden rounded-[28px] border border-line bg-bgtint p-7 sm:p-12 mt-10">
              <div className="absolute left-1/2 -translate-x-1/2 -top-10 w-[320px] h-[320px] opacity-30"><NGlow className="w-full h-full" /></div>
              <div className="font-mono text-[10.5px] tracking-[0.16em] uppercase text-gold-deep mb-7 relative z-10">The drafting flow</div>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 relative z-10">
                {FLOW.map((s, i) => (
                  <Reveal key={i} delay={i * 0.06}>
                    <div className="border-l-2 border-gold/40 pl-5">
                      <div className="font-mono text-[11px] tracking-[0.14em] text-gold-deep">{s.n}</div>
                      <div className="font-display font-semibold text-[18px] mt-1.5">{s.t}</div>
                      <div className="text-[13.5px] leading-relaxed text-tgray mt-2">{s.d}</div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* TEMPLATES */}
      <section id="templates" className="pad-t">
        <div className="wrap">
          <SectionHeading eyebrow="The template library · 13+" title="Documents your company actually signs." lede="Every template is India-specific and drawn from a versioned clause library that updates as the law changes." />
          <div className="grid gap-3.5 mt-10 sm:grid-cols-2 lg:grid-cols-3">
            {TEMPLATES.map((t, i) => (
              <Reveal key={i} delay={(i % 3) * 0.05}>
                <div className="group rounded-2xl border border-line bg-surface p-5 flex items-center justify-between hover:border-gold-deep/40 hover:bg-bgtint transition-colors cursor-pointer">
                  <div className="font-display font-semibold text-[15.5px] text-ink">{t[0]}</div>
                  <div className="font-mono text-[10px] tracking-[0.1em] text-tgray">{t[1]}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="pad-t">
        <div className="wrap">
          <SectionHeading eyebrow="The intelligence layer" title="More than a template filler." lede="Doc Engine reads what it drafts. It flags risk, explains clauses in plain language, and keeps a full audit trail." />
          <div className="grid gap-5 mt-10 sm:grid-cols-2 lg:grid-cols-3">
            {FEATURES.map((f, i) => (
              <Reveal key={i} delay={(i % 3) * 0.06}>
                <div className="rounded-2xl border border-line bg-surface p-7 h-full hover:border-ink/15 hover:shadow-[0_12px_34px_rgba(17,17,17,0.09)] transition-all">
                  <span className="w-12 h-12 rounded-2xl bg-gold-soft text-gold-deep flex items-center justify-center mb-5 [&_svg]:w-6 [&_svg]:h-6">
                    <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.7" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">{f.icon}</svg>
                  </span>
                  <h3 className="font-display font-semibold text-[18px]">{f.t}</h3>
                  <p className="text-[14px] leading-relaxed text-tgray mt-2.5">{f.d}</p>
                  <div className="font-mono text-[10px] tracking-[0.12em] text-gold-deep mt-5">{f.tag}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* RESPONSIBLE USE */}
      <section className="pad-t">
        <div className="wrap">
          <Reveal>
            <div className="flex items-start gap-5 rounded-2xl border border-gold-deep/25 bg-gold-soft p-6 sm:p-7">
              <span className="w-12 h-12 shrink-0 rounded-2xl bg-surface text-gold-deep flex items-center justify-center [&_svg]:w-6 [&_svg]:h-6">
                <svg viewBox="0 0 24 24" fill="none" strokeLinecap="round" strokeLinejoin="round" stroke="currentColor"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
              </span>
              <div>
                <div className="font-mono text-[11px] tracking-[0.14em] uppercase text-gold-text">Important</div>
                <b className="font-display text-[16px] block mt-1">AI output is decision support.</b>
                <p className="text-[14px] leading-relaxed text-tgray mt-1.5 max-w-[680px]">Doc Engine drafts and flags risk, but it doesn't replace a lawyer's judgment. For high-stakes documents, get a fixed-fee Turn2Law review before you sign.</p>
              </div>
            </div>
          </Reveal>
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

      <CTABand title="Draft your next document in minutes." lede="Plain language in, an India-specific drafted document out, with risk flags and e-signature built in." />
    </>
  );
}