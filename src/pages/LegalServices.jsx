import React, { useState } from "react";
import { Link } from "react-router-dom";
import Reveal from "@/components/site/Reveal";
import SectionHeading from "@/components/site/SectionHeading";
import FAQCard from "@/components/site/FAQCard";
import CTABand from "@/components/site/CTABand";
import NGlow from "@/components/site/NGlow";
import { AnimatePresence, motion } from "framer-motion";

const ICONS = {
  building: <><path d="M4 21V6a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v15" /><path d="M12 21V10a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v11" /><path d="M2 21h20" /><path d="M7 8h1M7 12h1M7 16h1M16 12h1M16 16h1" /></>,
  award: <><circle cx="12" cy="8" r="6" /><path d="M8.2 13.9 7 23l5-3 5 3-1.2-9.1" /></>,
  clipboard: <><path d="M9 4H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-3" /><rect x="8" y="2" width="8" height="4" rx="1" /><path d="m9 14 2 2 4-4" /></>,
  trending: <><path d="M23 6 13.5 15.5l-5-5L1 18" /><path d="M17 6h6v6" /></>,
  users: <><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" /></>,
  dispute: <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />,
  shield: <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />,
  briefcase: <><rect x="2" y="7" width="20" height="14" rx="2" /><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" /></>,
};

const SERVICES = [
  {
    code: "01 · Incorporation", name: "Company incorporation", icon: "building",
    tags: ["PVT LTD", "OPC", "LLP", "SECTION 8"],
    desc: "Private Limited, OPC, LLP, Section 8, and conversions, with the whole process visible before you pay. Pricing below is exactly what you see at checkout, entity by entity.",
    entities: [
      { name: "Private Limited", tiers: [
        { name: "Basic", price: "₹14,999", billing: "one-time", features: ["DSC for 2 directors", "DIN for 2 directors", "Name approval (RUN)", "MOA & AOA drafting", "Incorporation certificate", "Company PAN & TAN"] },
        { name: "Standard", price: "₹19,999", billing: "one-time", rec: true, features: ["Everything in Basic", "Current bank account", "GST registration", "Commencement certificate", "Share certificates", "Priority support"] },
        { name: "Premium", price: "₹29,999", billing: "one-time", features: ["Everything in Standard", "MSME / Udyam registration", "Trademark registration", "ESI & PF registration", "Professional tax", "Dedicated account manager"] },
      ] },
      { name: "OPC", tiers: [
        { name: "Basic", price: "₹12,999", billing: "one-time", features: ["DSC for director", "DIN for director", "Name approval", "MOA & AOA", "Incorporation certificate", "PAN & TAN"] },
        { name: "Standard", price: "₹17,999", billing: "one-time", rec: true, features: ["Everything in Basic", "Bank account", "GST registration", "Share certificate", "Priority support"] },
        { name: "Premium", price: "₹24,999", billing: "one-time", features: ["Everything in Standard", "MSME registration", "Trademark filing", "Tax consultation", "Account manager"] },
      ] },
      { name: "LLP", tiers: [
        { name: "Basic", price: "₹11,999", billing: "one-time", features: ["DSC for 2 partners", "DIN for designated partners", "Name approval", "LLP agreement drafting", "LLP registration", "PAN & TAN"] },
        { name: "Standard", price: "₹16,999", billing: "one-time", rec: true, features: ["Everything in Basic", "Bank account assistance", "GST registration", "Certificate of incorporation", "Priority support"] },
        { name: "Premium", price: "₹23,999", billing: "one-time", features: ["Everything in Standard", "MSME registration", "Trademark filing", "Legal consultation", "Dedicated manager"] },
      ] },
      { name: "Section 8", tiers: [
        { name: "Basic", price: "₹16,999", billing: "one-time", features: ["DSC for 2 directors", "DIN for 2 directors", "Name approval", "MOA & AOA (non-profit clauses)", "Section 8 licence & incorporation", "PAN & TAN"] },
        { name: "Standard", price: "₹22,999", billing: "one-time", rec: true, features: ["Everything in Basic", "12A & 80G groundwork", "Bank account", "Priority support"] },
        { name: "Premium", price: "₹32,999", billing: "one-time", features: ["Everything in Standard", "FCRA readiness review", "Dedicated account manager", "Annual compliance briefing"] },
      ] },
    ],
    note: "No minimum capital required. Private Limited needs at least 2 directors (max 15); OPC needs 1; LLPs and Partnerships need at least 2 partners.",
  },
  {
    code: "02 · Trademark & IP", name: "Trademark and IP", icon: "award",
    tags: ["SEARCH", "FILING", "OPPOSITION", "COPYRIGHT"],
    desc: "Search, filing, opposition, renewal, copyright, and patent assistance, handled by the bench. Government fees are billed at actuals on top of the professional fee below.",
    tiers: [
      { name: "Search & file", price: "₹4,999", billing: "+ govt fee", features: ["Comprehensive trademark search", "Filing in one class", "Applicant-type fee guidance", "Application tracking"] },
      { name: "Filing & defence", price: "₹9,999", billing: "+ govt fee", rec: true, features: ["Everything in Search & file", "Examination report response", "Opposition reply drafting", "Hearing brief preparation"] },
      { name: "Full IP cover", price: "₹18,999", billing: "+ govt fee", features: ["Everything in Filing & defence", "Copyright registration (1 work)", "Renewal reminders for 10 years", "Dedicated IP counsel"] },
    ],
  },
  {
    code: "03 · Registrations", name: "Business registrations", icon: "clipboard",
    tags: ["GST", "MSME", "IEC", "FSSAI", "SHOPS"],
    desc: "GST, MSME/Udyam, IEC, FSSAI, and Shops & Establishment registrations, filed end-to-end with document checks in plain language.",
    entities: [
      { name: "GST", tiers: [
        { name: "Basic", price: "₹2,999", billing: "one-time", features: ["GST registration filing", "GSTIN certificate", "Filing assistance", "Expert guidance", "Email support"] },
        { name: "Standard", price: "₹4,999", billing: "one-time", rec: true, features: ["Everything in Basic", "Return filing (3 months)", "Invoice generation tool", "Priority support", "Compliance calendar"] },
        { name: "Premium", price: "₹9,999", billing: "one-time", features: ["Everything in Standard", "Annual return filing", "Tax planning session", "Dedicated CA", "Audit support"] },
      ] },
      { name: "IEC", tiers: [{ name: "Basic", price: "₹2,999", billing: "one-time", features: ["IEC number registration", "Document preparation", "Application filing", "Certificate delivery"] }, { name: "Standard", price: "₹4,999", billing: "one-time", rec: true, features: ["Everything in Basic", "Priority processing", "PAN–IEC linking", "Compliance checklist", "Dedicated support"] }, { name: "Premium", price: "₹7,999", billing: "one-time", features: ["Everything in Standard", "Post-registration guidance", "Export compliance training", "Legal consultation (2 sessions)", "Dedicated account manager"] }] },
      { name: "MSME / Udyam", tiers: [{ name: "Assisted filing", price: "₹1,499", billing: "one-time", rec: true, features: ["Udyam registration filing", "Certificate delivery", "Investment & turnover classification check", "Email support"] }] },
      { name: "FSSAI", tiers: [{ name: "Basic registration", price: "₹2,999", billing: "+ govt fee", rec: true, features: ["Eligibility check (basic / state / central)", "Application filing", "Document preparation", "Certificate delivery"] }] },
      { name: "Shops & Establishment", tiers: [{ name: "Assisted filing", price: "₹1,999", billing: "+ govt fee", rec: true, features: ["State-specific application filing", "Document preparation", "Certificate delivery"] }] },
    ],
  },
  {
    code: "04 · ROC compliance", name: "ROC and annual compliance", icon: "shield",
    tags: ["AOC-4", "MGT-7", "DIR-3 KYC", "REGISTERS"],
    desc: "Annual filings, statutory registers, director KYC, and board minutes — maintained on a calendar with WhatsApp reminders so nothing slips.",
    tiers: [{ name: "Annual compliance", price: "₹18,000", billing: "/ year", rec: true, features: ["AOC-4 and MGT-7 annual filings", "DIR-3 KYC for all directors", "Statutory registers maintained", "Board & AGM minutes drafted", "Compliance calendar with WhatsApp reminders"] }],
  },
  {
    code: "05 · Fundraising", name: "Fundraising advisory", icon: "trending",
    tags: ["ESOP", "CAP TABLE", "TERM SHEET", "FEMA"],
    desc: "Term sheet review, ESOP schemes, and full round support with FEMA/RBI filings, so you raise on terms you understand.",
    tiers: [
      { name: "Term sheet review", price: "₹14,999", billing: "fixed fee", features: ["Clause-by-clause review", "Investor-friendliness flags", "One round of negotiation notes", "Turnaround in 3 business days"] },
      { name: "ESOP scheme", price: "₹24,999", billing: "fixed fee", rec: true, features: ["ESOP pool structuring", "Scheme drafting and board resolutions", "Cap table modelling", "Grant letter templates"] },
      { name: "Full round support", price: "Custom quote", billing: "engagement", features: ["Shareholders' agreement drafting", "FEMA / RBI filings (FC-GPR)", "Cap table and waterfall modelling", "Closing checklist management"] },
    ],
  },
  {
    code: "06 · Employment & HR", name: "Employment and HR legal", icon: "users",
    tags: ["CONTRACTS", "POSH", "PF / ESI", "POLICIES"],
    desc: "Employment contracts, POSH compliance, PF/ESI guidance, and employee handbooks — drafted for Indian labour law.",
    tiers: [
      { name: "Contract pack", price: "₹2,999", billing: "per template", features: ["Employment agreement, role-specific", "Offer letter and NDA", "Plain-language explainer per clause"] },
      { name: "POSH compliance", price: "₹9,999", billing: "one-time", rec: true, features: ["POSH policy drafting", "Internal Committee (IC) constitution", "Employee awareness deck", "Annual report template"] },
      { name: "Full HR legal pack", price: "₹19,999", billing: "one-time", features: ["Everything in Contract pack and POSH", "PF & ESI registration guidance", "Employee handbook and policy manuals", "Priority support"] },
    ],
  },
  {
    code: "07 · Disputes", name: "Disputes and recovery", icon: "dispute",
    tags: ["NOTICES", "RECOVERY", "MEDIATION"],
    desc: "Legal notices, payment recovery, and mediation support — drafted by the bench and tracked to resolution.",
    tiers: [
      { name: "Legal notice", price: "₹2,999", billing: "per notice", features: ["Drafted by the bench", "Sent via registered post and email", "One round of revisions"] },
      { name: "Payment recovery", price: "₹4,999", billing: "starting", rec: true, features: ["Demand notice drafting and dispatch", "Structured follow-up cadence", "Settlement negotiation support"] },
      { name: "Mediation support", price: "Custom quote", billing: "engagement", features: ["Mediation-readiness review", "Documentation and evidence organisation", "Referral to empanelled mediators"] },
    ],
  },
  {
    code: "08 · Virtual GC", name: "Virtual general counsel", icon: "briefcase",
    tags: ["RETAINER", "PRIORITY SLA", "MONTHLY"],
    desc: "A named lead counsel on a monthly retainer, with priority SLAs and a quarterly legal health review — like an in-house team, without the overhead.",
    tiers: [
      { name: "Starter", price: "₹14,999", billing: "/ month", features: ["Up to 5 requests / month", "48-hour turnaround SLA", "Contract review and redlines", "Email support"] },
      { name: "Growth", price: "₹29,999", billing: "/ month", rec: true, features: ["Up to 12 requests / month", "24-hour turnaround SLA", "Contract review, policy drafting, notices", "Priority support channel"] },
      { name: "Scale", price: "₹49,999", billing: "/ month", features: ["Unlimited standard requests", "Same-day turnaround SLA", "Named lead counsel", "Quarterly legal health review"] },
    ],
  },
];

const FAQS = [
  { q: "Are the prices all-inclusive?", a: "Professional fees are all-inclusive and shown exactly as you see them at checkout. Government fees, where applicable (trademark, FSSAI, Shops & Establishment), are billed at actuals on top." },
  { q: "Who actually does the work?", a: "An in-house bench of lawyers, Chartered Accountants, and Company Secretaries. Every matter has a named owner you can see, and updates land on WhatsApp and your dashboard." },
  { q: "How long does incorporation take?", a: "Typically 7–12 working days from document submission, depending on the registrar's verification. Any query from the MCA is relayed to you in plain language the same day." },
  { q: "Can I switch plans or get a custom quote?", a: "Yes. Services are modular — start with one and add as you grow. For multi-service engagements or Virtual GC, request a custom quote through the contact form." },
];

function TierCard({ tier }) {
  return (
    <div className={`relative rounded-2xl border p-6 flex flex-col ${tier.rec ? "border-gold-deep bg-bgtint shadow-[0_12px_34px_rgba(17,17,17,0.06)]" : "border-line bg-surface"}`}>
      {tier.rec && <span className="absolute -top-2.5 left-6 text-[10px] font-mono tracking-[0.1em] px-2.5 py-1 rounded-full bg-gold-deep text-white">RECOMMENDED</span>}
      <div className="font-display font-semibold text-[16px]">{tier.name}</div>
      <div className="mt-2 flex items-baseline gap-1.5">
        <span className="font-display font-bold text-[26px] text-ink">{tier.price}</span>
        <span className="text-[12px] text-tgray">{tier.billing}</span>
      </div>
      <ul className="mt-4 flex-1 flex flex-col gap-2.5">
        {tier.features.map((f, i) => (
          <li key={i} className="flex items-start gap-2.5 text-[13px] text-tgray leading-relaxed">
            <svg viewBox="0 0 24 24" width="15" height="15" className="text-gold-deep shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>
            {f}
          </li>
        ))}
      </ul>
      <Link to="/#contact" className={`btn mt-6 w-full ${tier.rec ? "btn-gold" : "btn-ghost"}`}>Engage</Link>
    </div>
  );
}

export default function LegalServices() {
  const [active, setActive] = useState(0);
  const svc = SERVICES[active];

  return (
    <>
      {/* HERO */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="hero-bg"><div className="hero-mesh" /><div className="hero-grid-lines" />
          <div className="absolute left-1/2 -translate-x-1/2 top-[4%] w-[clamp(280px,40vw,520px)] h-[clamp(280px,40vw,520px)]"><NGlow className="w-full h-full" /></div>
        </div>
        <div className="wrap relative z-10">
          <Reveal><span className="font-mono text-[12px] tracking-wide text-tgray"><Link to="/" className="hover:text-gold-deep">Home</Link> / Legal Services</span></Reveal>
          <Reveal delay={0.06}>
            <h1 className="font-display font-bold text-[clamp(36px,6vw,64px)] leading-[1.05] tracking-tight mt-5 text-balance max-w-[760px]">
              Done right,<br /><span className="g">not just fast.</span>
            </h1>
          </Reveal>
          <Reveal delay={0.14}>
            <p className="lede mt-5">Human-delivered legal, compliance, and IP work, sold and tracked like a modern product. Incorporation, registrations, ROC compliance, trademark, and advisory, all on one platform with an in-house bench behind it.</p>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="flex flex-wrap gap-2 mt-7">
              {["Incorporation", "GST · MSME", "ROC compliance", "Trademark", "Virtual GC"].map((c) => <span key={c} className="chip"><i />{c}</span>)}
            </div>
          </Reveal>
        </div>
      </section>

      {/* SERVICES + PRICING */}
      <section id="services" className="pad-t">
        <div className="wrap">
          <SectionHeading eyebrow="The catalogue · 8 services" title="Pick a service. See the price." lede="Every service is transparently priced, with a named owner and live tracking from Received to Delivered." />
          <div className="grid lg:grid-cols-[340px_1fr] gap-8 mt-12">
            <div className="flex flex-col gap-2.5">
              {SERVICES.map((s, i) => (
                <button key={i} onClick={() => setActive(i)} className={`text-left rounded-2xl border p-4 transition-all flex items-start gap-3.5 ${active === i ? "bg-solid text-white border-solid" : "bg-surface text-ink border-line hover:border-ink/20"}`}>
                  <span className={`w-10 h-10 shrink-0 rounded-xl flex items-center justify-center [&_svg]:w-5 [&_svg]:h-5 ${active === i ? "bg-white/10 text-gold" : "bg-bgtint text-gold-deep"}`}>
                    <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.7" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">{ICONS[s.icon]}</svg>
                  </span>
                  <div>
                    <div className={`font-mono text-[10.5px] tracking-[0.12em] ${active === i ? "text-gold" : "text-tgray"}`}>{s.code}</div>
                    <div className="font-display font-semibold text-[15px] mt-0.5">{s.name}</div>
                    <div className="flex flex-wrap gap-1.5 mt-2">
                      {s.tags.map((t) => <span key={t} className={`text-[9.5px] font-mono px-1.5 py-0.5 rounded ${active === i ? "bg-white/10 text-white/70" : "bg-bgtint text-tgray"}`}>{t}</span>)}
                    </div>
                  </div>
                </button>
              ))}
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -14 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              >
                <p className="text-[15px] leading-relaxed text-tgray max-w-[640px]">{svc.desc}</p>
                {svc.note && <p className="mt-3 text-[13px] text-gold-text bg-gold-soft rounded-xl px-4 py-3 inline-block">{svc.note}</p>}

                {svc.entities ? (
                  <div className="mt-7">
                    <div className="flex flex-wrap gap-2 mb-5">
                      {svc.entities.map((e, i) => <span key={i} className="chip"><i />{e.name}</span>)}
                    </div>
                    {svc.entities.map((e, ei) => (
                      <div key={ei} className="mb-8">
                        <div className="font-display font-semibold text-[18px] mb-4 pb-2 border-b border-line">{e.name}</div>
                        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{e.tiers.map((t, ti) => <TierCard key={ti} tier={t} />)}</div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{svc.tiers.map((t, ti) => <TierCard key={ti} tier={t} />)}</div>
                )}
              </motion.div>
            </AnimatePresence>
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

      <CTABand title="Bring your next matter to the bench." lede="From incorporation to disputes, get a transparent quote and a named owner — tracked live from Received to Delivered." primary={{ label: "Talk to us", to: "/#contact" }} secondary={{ label: "View pricing", to: "/legal-services#services" }} />
    </>
  );
}