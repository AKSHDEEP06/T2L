import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Reveal from "@/components/site/Reveal";
import NGlow from "@/components/site/NGlow";

const SUBNAV = [
  { id: "featured", label: "Featured" },
  { id: "tools", label: "Turn2Law Tools" },
  { id: "news", label: "Legal News" },
  { id: "caselaw", label: "Case Law" },
  { id: "acts", label: "Acts & Regulations" },
  { id: "templates", label: "Templates" },
  { id: "portals", label: "Gov Portals" },
  { id: "events", label: "Events" },
  { id: "learning", label: "Learning" },
  { id: "glossary", label: "Glossary" },
];

const FEATURED = [
  { k: "Collection · 12 resources", t: "Founder's Compliance Starter Kit", d: "Everything a new company needs in year one: ROC calendar, GST basics, board resolutions, and registers.", meta: "Most saved this month", href: "#compliance" },
  { k: "Collection · 9 resources", t: "New Criminal Codes: BNS, BNSS & BSA", d: "Section-by-section mapping from the IPC, CrPC, and Evidence Act to the three new codes, with landmark reading.", meta: "Trending in Case Law", href: "#caselaw" },
  { k: "Collection · 18 events", t: "Startup Law & Legal Tech Events 2026", d: "Conferences, summits, and meetups worth attending this year, for founders, litigators, and law students alike.", meta: "Updated 2 days ago", href: "#events" },
];

const TOOLS = [
  { t: "Introspector", d: "AI legal research with citations on every claim.", to: "/introspector" },
  { t: "Doc Engine", d: "Draft India-specific legal documents in minutes.", to: "/docengine" },
  { t: "Compliance Calendar", d: "Never miss a ROC, GST, or TDS deadline again.", to: "/legal-services" },
  { t: "Virtual GC", d: "A named lead counsel on a monthly retainer.", to: "/legal-services" },
];

const NEWS = [
  { tag: "SC", t: "Supreme Court reserves judgment on anticipatory bail in economic offences", d: "Bench considers whether gravity alone can deny relief under BNSS §482.", date: "2 days ago" },
  { tag: "MCA", t: "MCA extends AOC-4 filing window for newly incorporated companies", d: "Relief for startups incorporated after April 2025.", date: "4 days ago" },
  { tag: "GST", t: "GST Council clarifies input credit on shared services", d: "New circular impacts group company billing structures.", date: "1 week ago" },
  { tag: "IP", t: "Delhi HC: descriptive marks need distinct secondary meaning", d: "Ruling tightens the bar for trademark opposition defence.", date: "1 week ago" },
];

const CASELAW = [
  { c: "SC", t: "State v. Mehta (2025)", d: "Custodial interrogation unnecessary weighs in favour of anticipatory bail.", tag: "BNS §482" },
  { c: "Delhi HC", t: "Acme Pvt Ltd v. Revenue (2024)", d: "Input credit on shared services allowed with documentary proof.", tag: "GST" },
  { c: "Bombay HC", t: "Sharma v. Registrar of Companies (2024)", d: "Delay in DIR-3 KYC condoned for genuine hardship.", tag: "ROC" },
  { c: "SC", t: "Verma v. Trademark Registry (2025)", d: "Descriptive mark denied without proven secondary meaning.", tag: "Trademark" },
];

const ACTS = [
  { t: "Bharatiya Nyaya Sanhita, 2023", d: "Replaces the Indian Penal Code.", tag: "Criminal" },
  { t: "BNSS, 2023", d: "Replaces the Code of Criminal Procedure.", tag: "Procedure" },
  { t: "BSA, 2023", d: "Replaces the Indian Evidence Act.", tag: "Evidence" },
  { t: "Companies Act, 2013", d: "Incorporation, governance, and compliance.", tag: "Corporate" },
  { t: "GST Act, 2017", d: "Goods and Services Tax framework.", tag: "Tax" },
  { t: "IT Act, 2000", d: "Digital signatures, data, and cyber law.", tag: "Tech" },
];

const TEMPLATES = [
  "Mutual NDA", "Founders' Agreement", "Employment Contract", "Consultancy Agreement", "Shareholders' Agreement", "Term Sheet", "Privacy Policy", "Non-Compete", "IP Assignment", "Rental Lease", "Loan Agreement", "Vendor Agreement",
];

const PORTALS = [
  { t: "Ministry of Corporate Affairs", d: "mca.gov.in" },
  { t: "GST Portal", d: "gst.gov.in" },
  { t: "Trademark Registry", d: "ipindia.gov.in" },
  { t: "Income Tax Dept", d: "incometax.gov.in" },
  { t: "EPFO", d: "epfindia.gov.in" },
  { t: "FSSAI", d: "foscos.fssai.gov.in" },
];

const EVENTS = [
  { t: "Startup Law Summit 2026", d: "Bengaluru · Founders & GCs", date: "12 Feb 2026", type: "Summit" },
  { t: "AI in Legal Practice", d: "Online · Live webinar", date: "28 Jan 2026", type: "Webinar" },
  { t: "Criminal Law Bootcamp", d: "New Delhi · Litigators", date: "5 Mar 2026", type: "Bootcamp" },
];

const LEARNING = [
  { t: "Incorporation 101", d: "Free course · 6 modules", level: "Beginner" },
  { t: "Reading a judgment", d: "Free course · 4 modules", level: "Beginner" },
  { t: "Drafting NDAs", d: "Free course · 5 modules", level: "Intermediate" },
  { t: "GST compliance deep-dive", d: "Free course · 8 modules", level: "Advanced" },
];

const GLOSSARY = [
  ["Anticipatory bail", "Bail granted before arrest, anticipating a non-bailable charge."],
  ["DSC", "Digital Signature Certificate, required for MCA filings."],
  ["RUN", "Reserve Unique Name, the MCA name-approval service."],
  ["FC-GPR", "Foreign Currency-Gross Provisional Return, for FDI filings."],
  ["POSH", "Prevention of Sexual Harassment at Workplace Act."],
  ["MoA / AoA", "Memorandum and Articles of Association — a company's constitution."],
];

const HSTATS = [
  { v: "1,240+", k: "Judgments" },
  { v: "85+", k: "Templates" },
  { v: "40+", k: "Gov Portals" },
  { v: "Daily", k: "Updated" },
];

const ALL_ITEMS = [...FEATURED, ...NEWS.map(n => ({ t: n.t, d: n.d, cat: "News" })), ...CASELAW.map(c => ({ t: c.t, d: c.d, cat: "Case Law" })), ...ACTS.map(a => ({ t: a.t, d: a.d, cat: "Act" })), ...TEMPLATES.map(t => ({ t, d: "Template", cat: "Template" })), ...PORTALS.map(p => ({ t: p.t, d: p.d, cat: "Portal" })), ...EVENTS.map(e => ({ t: e.t, d: e.d, cat: "Event" })), ...LEARNING.map(l => ({ t: l.t, d: l.d, cat: "Course" })), ...GLOSSARY.map(g => ({ t: g[0], d: g[1], cat: "Glossary" }))];

function SectionHead({ id, title, desc, link }) {
  return (
    <div className="flex items-end justify-between gap-4 mb-7">
      <div>
        <Reveal><h2 id={id} className="font-display font-bold text-[clamp(22px,2.6vw,30px)] tracking-tight scroll-mt-32">{title}</h2></Reveal>
        {desc && <Reveal delay={0.06}><p className="text-[14px] text-tgray mt-1.5">{desc}</p></Reveal>}
      </div>
      {link && <a href={link} className="hidden sm:inline-flex items-center gap-1.5 text-[13px] font-semibold text-ink hover:text-gold-deep transition-colors shrink-0">Browse all <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg></a>}
    </div>
  );
}

export default function Resources() {
  const [query, setQuery] = useState("");
  const results = query.trim()
    ? ALL_ITEMS.filter((it) => (it.t + " " + (it.d || "")).toLowerCase().includes(query.trim().toLowerCase()))
    : [];

  return (
    <>
      {/* HERO */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="hero-bg"><div className="hero-mesh" /><div className="hero-grid-lines" />
          <div className="absolute left-1/2 -translate-x-1/2 top-[4%] w-[clamp(280px,40vw,520px)] h-[clamp(280px,40vw,520px)]"><NGlow className="w-full h-full" /></div>
        </div>
        <div className="wrap relative z-10 text-center">
          <Reveal><span className="font-mono text-[12px] tracking-wide text-tgray"><Link to="/" className="hover:text-gold-deep">Home</Link> / Resources</span></Reveal>
          <Reveal delay={0.06}>
            <h1 className="font-display font-bold text-[clamp(36px,6vw,64px)] leading-[1.05] tracking-tight mt-5 text-balance">
              Everything legal,<br /><span className="g">searchable in one place.</span>
            </h1>
          </Reveal>
          <Reveal delay={0.14}>
            <p className="lede mx-auto text-center mt-5">Judgments, acts, templates, government portals, and legal events, curated for founders, lawyers, students, and legal teams. Search it, save it, and stay updated with India's legal ecosystem.</p>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="max-w-[640px] mx-auto mt-8">
              <div className="flex items-center gap-2 rounded-2xl border border-line bg-surface shadow-[0_12px_34px_rgba(17,17,17,0.09)] p-2">
                <svg className="w-5 h-5 ml-3 text-tgray shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7"><circle cx="11" cy="11" r="7" /><path d="M21 21l-4.35-4.35" /></svg>
                <input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search judgments, acts, templates…" className="flex-1 border-0 outline-none text-[15px] py-2.5 bg-transparent" aria-label="Search resources" />
                <span className="hidden sm:flex items-center gap-1.5 text-[11px] font-mono px-2.5 py-1 rounded-full bg-gold-soft text-gold-deep"><i className="w-1.5 h-1.5 rounded-full bg-gold-deep" />AI Search</span>
                <button className="btn btn-gold m-1">Search</button>
              </div>
              <div className="text-[12.5px] text-tgray mt-3"><b className="text-ink">1,240+</b> resources indexed · Try <b>“anticipatory bail”</b>, <b>“GST deadline”</b>, or <b>“startup law summit”</b></div>
            </div>
          </Reveal>
          <Reveal delay={0.26}>
            <div className="flex flex-wrap justify-center gap-2 mt-7">
              {SUBNAV.map((s) => <a key={s.id} href={`#${s.id}`} className="chip hover:border-gold-deep hover:text-gold-deep transition-colors">{s.label}</a>)}
            </div>
          </Reveal>
          <Reveal delay={0.32}>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-[640px] mx-auto mt-10">
              {HSTATS.map((s) => (
                <div key={s.k} className="text-center">
                  <div className="font-display font-bold text-[26px] text-ink">{s.v}</div>
                  <div className="font-mono text-[10.5px] tracking-[0.12em] uppercase text-tgray mt-1">{s.k}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* SEARCH RESULTS or BROWSE */}
      {query.trim() ? (
        <section className="pad">
          <div className="wrap">
            <div className="flex items-center justify-between mb-7">
              <h2 className="font-display font-bold text-[24px] tracking-tight">{results.length} result{results.length !== 1 ? "s" : ""} for “{query}”</h2>
              <button onClick={() => setQuery("")} className="text-[13px] font-semibold text-gold-deep hover:underline">Clear search</button>
            </div>
            {results.length ? (
              <div className="grid gap-3.5 sm:grid-cols-2 lg:grid-cols-3">
                {results.map((r, i) => (
                  <Reveal key={i} delay={(i % 3) * 0.05}>
                    <div className="rounded-2xl border border-line bg-surface p-5 hover:border-gold-deep/40 hover:bg-bgtint transition-colors">
                      <span className="font-mono text-[10px] tracking-[0.12em] text-gold-deep">{r.cat}</span>
                      <div className="font-display font-semibold text-[15.5px] mt-1.5">{r.t}</div>
                      <p className="text-[13px] text-tgray mt-1.5 leading-relaxed">{r.d}</p>
                    </div>
                  </Reveal>
                ))}
              </div>
            ) : (
              <p className="text-tgray text-[15px]">No resources match your search. Try a different term.</p>
            )}
          </div>
        </section>
      ) : (
        <div className="pad">
          <div className="wrap space-y-16">
            {/* FEATURED */}
            <section id="featured">
              <SectionHead title="Featured collections" desc="Editor-curated resources, refreshed weekly" link="#news" />
              <div className="grid gap-4 md:grid-cols-3">
                {FEATURED.map((f, i) => (
                  <Reveal key={i} delay={i * 0.08}>
                    <a href={f.href} className="block rounded-2xl border border-line bg-surface p-6 h-full hover:border-gold-deep/40 hover:shadow-[0_12px_34px_rgba(17,17,17,0.09)] transition-all group">
                      <span className="font-mono text-[10.5px] tracking-[0.1em] text-gold-deep">{f.k}</span>
                      <h3 className="font-display font-semibold text-[18px] mt-3">{f.t}</h3>
                      <p className="text-[13.5px] text-tgray mt-2 leading-relaxed">{f.d}</p>
                      <div className="flex items-center gap-1.5 mt-5 text-[12px] text-tgray"><svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" strokeWidth="1.7"><path d="M12 2l3 6.5 7 .9-5 4.8 1.3 7-6.6-3.6-6.6 3.6 1.3-7-5-4.8 7-.9z" /></svg>{f.meta}</div>
                    </a>
                  </Reveal>
                ))}
              </div>
            </section>

            {/* TOOLS */}
            <section id="tools">
              <SectionHead title="Turn2Law tools" desc="The official product ecosystem" />
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {TOOLS.map((t, i) => (
                  <Reveal key={i} delay={i * 0.06}>
                    <Link to={t.to} className="block rounded-2xl border border-line bg-bgtint p-6 h-full hover:border-gold-deep/40 hover:bg-ink/[0.04] transition-all group">
                      <h3 className="font-display font-semibold text-[16px] group-hover:text-gold-deep transition-colors">{t.t}</h3>
                      <p className="text-[13px] text-tgray mt-2">{t.d}</p>
                      <span className="inline-flex items-center gap-1 mt-4 text-[12.5px] font-semibold text-ink">Open <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg></span>
                    </Link>
                  </Reveal>
                ))}
              </div>
            </section>

            {/* NEWS */}
            <section id="news">
              <SectionHead title="Legal news" desc="The rulings and updates that matter" link="#caselaw" />
              <div className="grid gap-4 md:grid-cols-2">
                {NEWS.map((n, i) => (
                  <Reveal key={i} delay={i * 0.06}>
                    <div className="rounded-2xl border border-line bg-surface p-6 hover:border-ink/15 transition-colors">
                      <div className="flex items-center gap-2 mb-3">
                        <span className="text-[10px] font-mono px-2 py-1 rounded-full bg-gold-soft text-gold-deep">{n.tag}</span>
                        <span className="text-[12px] text-tgray">{n.date}</span>
                      </div>
                      <h3 className="font-display font-semibold text-[16px] leading-snug">{n.t}</h3>
                      <p className="text-[13.5px] text-tgray mt-2 leading-relaxed">{n.d}</p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </section>

            {/* CASE LAW */}
            <section id="caselaw">
              <SectionHead title="Case law" desc="Landmark and recent judgments" link="#acts" />
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-2">
                {CASELAW.map((c, i) => (
                  <Reveal key={i} delay={i * 0.06}>
                    <div className="rounded-2xl border border-line bg-surface p-6 hover:border-gold-deep/40 hover:bg-bgtint transition-colors">
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-[10px] font-mono px-2 py-1 rounded-full bg-solid text-white">{c.c}</span>
                        <span className="text-[10px] font-mono text-gold-deep">{c.tag}</span>
                      </div>
                      <h3 className="font-display font-semibold text-[16px]">{c.t}</h3>
                      <p className="text-[13.5px] text-tgray mt-2 leading-relaxed">{c.d}</p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </section>

            {/* ACTS */}
            <section id="acts">
              <SectionHead title="Acts & regulations" desc="Central statutes, with the new codes" link="#templates" />
              <div className="grid gap-3.5 sm:grid-cols-2 lg:grid-cols-3">
                {ACTS.map((a, i) => (
                  <Reveal key={i} delay={(i % 3) * 0.05}>
                    <div className="rounded-2xl border border-line bg-surface p-5 hover:border-gold-deep/40 transition-colors">
                      <span className="text-[10px] font-mono px-2 py-1 rounded-full bg-bgtint text-tgray">{a.tag}</span>
                      <h3 className="font-display font-semibold text-[15px] mt-3">{a.t}</h3>
                      <p className="text-[13px] text-tgray mt-1.5">{a.d}</p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </section>

            {/* TEMPLATES */}
            <section id="templates">
              <SectionHead title="Templates" desc="India-specific, ready to draft" link="#portals" />
              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {TEMPLATES.map((t, i) => (
                  <Reveal key={i} delay={(i % 3) * 0.04}>
                    <Link to="/docengine" className="flex items-center justify-between rounded-xl border border-line bg-surface px-4 py-3.5 hover:border-gold-deep/40 hover:bg-bgtint transition-colors group">
                      <span className="font-display font-medium text-[14px]">{t}</span>
                      <svg viewBox="0 0 24 24" width="14" height="14" className="text-tgray group-hover:text-gold-deep transition-colors" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
                    </Link>
                  </Reveal>
                ))}
              </div>
            </section>

            {/* PORTALS */}
            <section id="portals">
              <SectionHead title="Government portals" desc="Direct links to the official sources" link="#events" />
              <div className="grid gap-3.5 sm:grid-cols-2 lg:grid-cols-3">
                {PORTALS.map((p, i) => (
                  <Reveal key={i} delay={(i % 3) * 0.05}>
                    <div className="rounded-2xl border border-line bg-surface p-5 hover:border-ink/15 transition-colors">
                      <h3 className="font-display font-semibold text-[15px]">{p.t}</h3>
                      <p className="text-[13px] font-mono text-gold-deep mt-1.5">{p.d}</p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </section>

            {/* EVENTS */}
            <section id="events">
              <SectionHead title="Legal events" desc="Summits, webinars, and bootcamps" link="#learning" />
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {EVENTS.map((e, i) => (
                  <Reveal key={i} delay={i * 0.06}>
                    <div className="rounded-2xl border border-line bg-bgtint p-6 hover:border-gold-deep/40 transition-colors">
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-[10px] font-mono px-2 py-1 rounded-full bg-gold-soft text-gold-deep">{e.type}</span>
                        <span className="text-[12px] text-tgray">{e.date}</span>
                      </div>
                      <h3 className="font-display font-semibold text-[16px]">{e.t}</h3>
                      <p className="text-[13px] text-tgray mt-2">{e.d}</p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </section>

            {/* LEARNING */}
            <section id="learning">
              <SectionHead title="Learning" desc="Free courses for every level" link="#glossary" />
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {LEARNING.map((l, i) => (
                  <Reveal key={i} delay={i * 0.06}>
                    <div className="rounded-2xl border border-line bg-surface p-6 h-full hover:border-ink/15 transition-colors">
                      <span className="text-[10px] font-mono px-2 py-1 rounded-full bg-bgtint text-tgray">{l.level}</span>
                      <h3 className="font-display font-semibold text-[15px] mt-3">{l.t}</h3>
                      <p className="text-[13px] text-tgray mt-1.5">{l.d}</p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </section>

            {/* GLOSSARY */}
            <section id="glossary">
              <SectionHead title="Glossary" desc="Plain-language legal terms" />
              <div className="grid gap-3 sm:grid-cols-2">
                {GLOSSARY.map((g, i) => (
                  <Reveal key={i} delay={(i % 2) * 0.05}>
                    <div className="rounded-xl border border-line bg-surface px-5 py-4">
                      <div className="font-display font-semibold text-[14.5px] text-ink">{g[0]}</div>
                      <p className="text-[13px] text-tgray mt-1">{g[1]}</p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </section>
          </div>
        </div>
      )}

      {/* NEWSLETTER CTA */}
      <section className="pad-t">
        <div className="wrap">
          <Reveal>
            <div className="relative overflow-hidden rounded-[28px] bg-navy text-white p-8 sm:p-14 text-center">
              <div className="absolute left-1/2 -translate-x-1/2 -top-16 w-[420px] h-[420px] opacity-30"><NGlow className="w-full h-full" /></div>
              <div className="relative z-10 max-w-[560px] mx-auto">
                <h2 className="font-display font-bold text-[clamp(26px,3.4vw,38px)] tracking-tight">Stay current with Indian law.</h2>
                <p className="text-white/70 mt-4">Get the week's rulings, compliance deadlines, and resources in one email. No spam, unsubscribe anytime.</p>
                <form className="flex flex-col sm:flex-row gap-2.5 mt-7 max-w-[460px] mx-auto" onSubmit={(e) => e.preventDefault()}>
                  <input type="email" placeholder="you@company.in" className="flex-1 rounded-full border border-white/15 bg-white/5 px-5 py-3.5 text-[15px] text-white placeholder:text-white/40 outline-none focus:border-gold" />
                  <button className="btn btn-gold">Subscribe</button>
                </form>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}