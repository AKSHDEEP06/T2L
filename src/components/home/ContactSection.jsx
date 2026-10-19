import React from "react";
import { Mail, MapPin, Linkedin } from "lucide-react";
import Reveal from "@/components/site/Reveal";
import ContactForm from "@/components/site/ContactForm";

const INFO = [
  { k: "Email", v: "hello@turn2law.in", href: "mailto:hello@turn2law.in", icon: Mail },
  { k: "Office", v: "New Delhi, India", icon: MapPin },
  { k: "LinkedIn", v: "linkedin.com/company/turn2law", href: "https://www.linkedin.com/company/turn2law", icon: Linkedin },
];

export default function ContactSection() {
  return (
    <section id="contact" className="pad bg-bgtint border-t border-line">
      <div className="wrap grid gap-12 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <Reveal><span className="eyebrow">Get in touch</span></Reveal>
          <Reveal delay={0.06}><h2 className="h2 mt-4">Let's talk about your legal work.</h2></Reveal>
          <Reveal delay={0.1}><p className="lede mt-4">Questions, partnerships, or a matter you need help with. We typically reply within 24 hours.</p></Reveal>
          <div className="mt-8">
            {INFO.map((c) => (
              <div key={c.k} className="cinfo">
                <span className="ico"><c.icon /></span>
                <div>
                  <div className="k">{c.k}</div>
                  <div className="v">{c.href ? <a href={c.href} target={c.href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" className="hover:text-gold-text">{c.v}</a> : c.v}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="lg:col-span-6 lg:col-start-7">
          <Reveal><div className="rounded-3xl border border-line bg-surface p-6 sm:p-8"><ContactForm /></div></Reveal>
        </div>
      </div>
    </section>
  );
}