import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { base44 } from "@/api/base44Client";

export default function ContactForm() {
  const [data, setData] = useState({ firstName: "", lastName: "", email: "", message: "", consent: false });
  const [errors, setErrors] = useState({});
  const [sending, setSending] = useState(false);
  const [done, setDone] = useState(false);
  const [failed, setFailed] = useState(false);

  const change = (e) => {
    const { name, value, type } = e.target;
    const val = type === "checkbox" ? e.target.checked : value;
    setData((p) => ({ ...p, [name]: val }));
    setErrors((p) => ({ ...p, [name]: "" }));
  };

  const submit = async (e) => {
    e.preventDefault();
    const fn = data.firstName.trim();
    const em = data.email.trim();
    const msg = data.message.trim();
    const okEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(em);
    const errs = {
      firstName: fn ? "" : "Please enter your first name.",
      email: em ? (okEmail ? "" : "Enter a valid email address.") : "Please enter your email.",
      message: msg ? "" : "Please tell us what you need help with.",
      consent: data.consent ? "" : "Please accept the Privacy Policy to continue.",
    };
    setErrors(errs);
    if (errs.firstName || errs.email || errs.message || errs.consent) return;
    setSending(true);
    setFailed(false);
    try {
      await base44.entities.ContactMessage.create({ firstName: fn, lastName: data.lastName.trim(), email: em, message: msg, consent: true });
      setDone(true);
      setData({ firstName: "", lastName: "", email: "", message: "", consent: false });
    } catch {
      setFailed(true);
    }
    setSending(false);
  };

  if (done) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        className="rounded-2xl border border-gold-deep/30 bg-bgtint p-8 flex flex-col items-center text-center"
      >
        <span className="w-14 h-14 rounded-full bg-gold-deep/15 text-gold-deep flex items-center justify-center mb-4">
          <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><path d="M22 4 12 14.01l-3-3" /></svg>
        </span>
        <b className="font-display text-lg text-ink">Thank you.</b>
        <p className="text-tgray text-[14px] mt-1.5 max-w-[320px]">Your message has been received, we will write back shortly.</p>
        <button onClick={() => setDone(false)} className="mt-5 text-[13px] font-semibold text-gold-deep hover:underline">Send another message</button>
      </motion.div>
    );
  }

  return (
    <form onSubmit={submit} noValidate className="grid grid-cols-2 gap-4">
      <div className="col-span-1">
        <label className="block text-[13px] font-medium text-ink mb-1.5">First name</label>
        <input name="firstName" value={data.firstName} onChange={change} placeholder="Ananya" className="field-input" />
        {errors.firstName && <small className="text-[12px] text-red-600 mt-1 block">{errors.firstName}</small>}
      </div>
      <div className="col-span-1">
        <label className="block text-[13px] font-medium text-ink mb-1.5">Last name</label>
        <input name="lastName" value={data.lastName} onChange={change} placeholder="Rao" className="field-input" />
      </div>
      <div className="col-span-2">
        <label className="block text-[13px] font-medium text-ink mb-1.5">Email</label>
        <input name="email" type="email" value={data.email} onChange={change} placeholder="you@company.in" className="field-input" />
        {errors.email && <small className="text-[12px] text-red-600 mt-1 block">{errors.email}</small>}
      </div>
      <div className="col-span-2">
        <label className="block text-[13px] font-medium text-ink mb-1.5">Message</label>
        <textarea name="message" value={data.message} onChange={change} placeholder="Tell us what you need help with..." rows={4} className="field-input resize-none" />
        {errors.message && <small className="text-[12px] text-red-600 mt-1 block">{errors.message}</small>}
      </div>
      <label className="col-span-2 flex items-start gap-3 cursor-pointer">
        <input type="checkbox" name="consent" checked={data.consent} onChange={change} className="mt-1 w-4 h-4 accent-gold-deep" />
        <span className="text-[13px] text-tgray leading-relaxed">
          I agree to the <Link to="/privacy" className="text-gold-deep underline">Privacy Policy</Link> and consent to Turn2Law contacting me about my enquiry.
        </span>
      </label>
      {errors.consent && <small className="col-span-2 text-[12px] text-red-600 -mt-2 block">{errors.consent}</small>}
      {failed && (
        <div role="alert" className="col-span-2 rounded-xl border border-red-600/30 bg-red-600/5 p-3 text-[13px] text-ink">
          We could not send your message. Please try again, or write to <a href="mailto:hello@turn2law.in" className="underline text-gold-text">hello@turn2law.in</a>.
        </div>
      )}
      <div className="col-span-2">
        <button type="submit" disabled={sending} className="btn btn-gold w-full sm:w-auto">
          {sending ? "Sending…" : "Send message"}
          <svg viewBox="0 0 24 24" width="17" height="17" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 2 11 13M22 2l-7 20-4-9-9-4z" /></svg>
        </button>
      </div>
    </form>
  );
}