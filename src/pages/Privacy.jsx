import React from "react";
import { Link } from "react-router-dom";
import Reveal from "@/components/site/Reveal";

const SECTIONS = [
  { h: "Information we collect", p: "We collect information you provide when you contact us, create an account, or use Turn2Law products. This may include your name, email address, organisation details, and information needed to provide a requested service." },
  { h: "How we use information", p: "We use information to operate and improve the platform, respond to enquiries, provide requested services, maintain security, and communicate important account or service updates. We do not use your confidential documents to train public models." },
  { h: "Data storage and security", p: "Sensitive and privileged material lives in isolated, encrypted storage in India, with per-matter access controls and a full access log visible to you. Access is granted on a least-privilege basis to the named professionals working on your matter." },
  { h: "AI and your data", p: "AI output across Introspector and Doc Engine is decision support. Your queries, matters, and uploaded documents are never used to train models. Processing happens under the access controls of the matter they belong to." },
  { h: "Sharing and disclosure", p: "We do not sell your data. We share information only with the professionals delivering your service, with service providers bound by confidentiality, or where required by law. Government fees, where applicable, are billed at actuals." },
  { h: "Your rights", p: "You may request access to, correction of, or deletion of your personal information, or a copy of your data. Reach us at hello@turn2law.in and we will respond within a reasonable timeframe." },
  { h: "Contact", p: "Questions about this policy can be sent to hello@turn2law.in. For legal information, please consult qualified counsel. Turn2Law is a technology platform, not a law firm." },
];

export default function Privacy() {
  return (
    <section className="pt-36 pb-24">
      <div className="wrap max-w-[760px]">
        <Reveal><span className="eyebrow">Turn2Law policy</span></Reveal>
        <Reveal delay={0.06}><h1 className="font-display font-bold text-[clamp(34px,5vw,52px)] tracking-tight mt-4">Privacy Policy</h1></Reveal>
        <Reveal delay={0.12}><p className="text-[16px] text-tgray leading-relaxed mt-4 max-w-[600px]">Turn2Law respects the privacy of founders, lawyers, and teams using its legal technology platform.</p></Reveal>
        <div className="mt-10 space-y-8">
          {SECTIONS.map((s, i) => (
            <Reveal key={i} delay={i * 0.04}>
              <section className="border-l-2 border-gold/30 pl-5">
                <h2 className="font-display font-semibold text-[19px]">{s.h}</h2>
                <p className="text-[15px] text-tgray leading-relaxed mt-2.5 max-w-[640px]">{s.p}</p>
              </section>
            </Reveal>
          ))}
        </div>
        <Link to="/" className="btn btn-ghost mt-10">Return home</Link>
      </div>
    </section>
  );
}