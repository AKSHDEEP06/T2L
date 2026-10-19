import React, { useState } from "react";
import { Plus } from "lucide-react";
import Reveal from "@/components/site/Reveal";

const FAQS = [
  { q: "Is Turn2Law a law firm?", a: "No. Turn2Law is a technology platform, not a law firm, and does not provide legal representation. Legal and compliance work is delivered by an in-house bench of qualified professionals; AI output is decision support and must be reviewed by qualified counsel." },
  { q: "What legal services does Turn2Law offer?", a: "Company incorporation and registrations, trademark and IP protection, GST and MSME registration, ROC and annual compliance, fundraising and ESOP advisory, employment and HR legal, disputes and recovery, plus AI document drafting through Doc Engine and AI legal research through Introspector." },
  { q: "How is my data kept private and secure?", a: "Confidentiality is a design requirement, not a policy footnote. Sensitive and privileged material lives in isolated, encrypted storage in India, with per-matter access controls and a full access log visible to you. Your documents are never used to train models." },
  { q: "Can I use Turn2Law entirely online?", a: "Yes. Turn2Law is built for virtual legal support: draft documents, run research, file registrations, and track every matter online from anywhere in India, with live status, named owners, and updates on WhatsApp." },
];

export default function HomeFAQ() {
  const [open, setOpen] = useState(0);
  return (
    <section className="pad bg-surface border-t border-line">
      <div className="wrap grid gap-10 lg:grid-cols-12">
        <div className="lg:col-span-4 lg:sticky lg:top-28 self-start">
          <Reveal><span className="eyebrow">Frequently asked</span></Reveal>
          <Reveal delay={0.06}><h2 className="h2 mt-4">Questions, answered.</h2></Reveal>
          <Reveal delay={0.1}><p className="text-tgray mt-4 text-[15px]">Still unsure? <a href="#contact" className="font-semibold text-gold-text underline">Talk to us</a>.</p></Reveal>
        </div>
        <div className="lg:col-span-7 lg:col-start-6 flex flex-col gap-3">
          {FAQS.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={f.q} className={`rounded-2xl border transition-colors ${isOpen ? "border-gold bg-bgtint" : "border-line bg-surface"}`}>
                <h3>
                  <button id={`faq-b-${i}`} aria-expanded={isOpen} aria-controls={`faq-p-${i}`} onClick={() => setOpen(isOpen ? -1 : i)} className="w-full flex items-center justify-between gap-4 text-left px-6 py-5 min-h-[56px]">
                    <span className="font-display font-semibold text-[16px]">{f.q}</span>
                    <Plus size={20} className={`shrink-0 transition-transform duration-250 ${isOpen ? "rotate-45 text-gold-text" : ""}`} />
                  </button>
                </h3>
                <div id={`faq-p-${i}`} role="region" aria-labelledby={`faq-b-${i}`} hidden={!isOpen} className="px-6 pb-6 text-[15px] leading-relaxed text-tgray">{f.a}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}