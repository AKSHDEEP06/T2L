import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Reveal from "./Reveal";

export default function FAQCard({ question, answer, icon, defaultOpen = false, delay = 0 }) {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  return (
    <Reveal delay={delay}>
      <div
        className={`rounded-2xl border transition-colors duration-300 ${isOpen ? "border-gold-deep/40 bg-bgtint" : "border-line bg-surface hover:border-ink/15"}`}
      >
        <button
          type="button"
          aria-expanded={isOpen}
          onClick={() => setIsOpen((p) => !p)}
          className="w-full flex items-center gap-4 text-left px-5 py-5 sm:px-6"
        >
          {icon && (
            <span className="w-10 h-10 shrink-0 rounded-xl bg-bgtint border border-line flex items-center justify-center text-gold-deep">
              {icon}
            </span>
          )}
          <span className="font-display font-semibold text-[15px] sm:text-base text-ink flex-1 pr-3">{question}</span>
          <span
            className={`w-7 h-7 shrink-0 rounded-full border border-line flex items-center justify-center transition-transform duration-500 ${isOpen ? "rotate-[135deg] bg-solid text-white border-solid" : "text-ink"}`}
          >
            <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round">
              <path d="M12 5v14M5 12h14" />
            </svg>
          </span>
        </button>
        <AnimatePresence initial={false}>
          {isOpen && (
            <motion.div
              key="panel"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="overflow-hidden"
            >
              <p className="px-5 pb-5 sm:px-6 text-[14.5px] leading-relaxed text-tgray max-w-[640px]">{answer}</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </Reveal>
  );
}