import React from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { useQuery } from "@tanstack/react-query";
import { base44 } from "@/api/base44Client";
import NGlow from "@/components/site/NGlow";

export default function PageNotFound() {
  const location = useLocation();
  const pageName = location.pathname.substring(1);

  const { data: authData, isFetched } = useQuery({
    queryKey: ["user"],
    queryFn: async () => {
      try {
        const user = await base44.auth.me();
        return { user, isAuthenticated: true };
      } catch (error) {
        return { user: null, isAuthenticated: false };
      }
    },
  });

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-6 py-24 bg-background text-foreground">
      <div className="hero-bg">
        <div className="hero-grid-lines" />
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 0.45, scale: 1 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="absolute left-1/2 -translate-x-1/2 top-[14%] w-[clamp(260px,40vw,460px)] h-[clamp(260px,40vw,460px)]"
        >
          <NGlow className="w-full h-full" />
        </motion.div>
      </div>

      <div className="relative z-10 max-w-[560px] w-full text-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="eyebrow center">Turn2Law</span>
          <h1 className="font-display font-bold text-[clamp(72px,16vw,140px)] leading-none tracking-tight mt-5">
            <span className="text-gold-deep">4</span>0<span className="text-gold-deep">4</span>
          </h1>
          <div className="mx-auto mt-5 h-px w-16 bg-gold/50" />
          <h2 className="font-display font-semibold text-[22px] mt-6">This page isn't on the bench.</h2>
          <p className="text-tgray leading-relaxed mt-3 max-w-[440px] mx-auto">
            The page <span className="font-mono text-ink">/{pageName || "..."}</span> could not be found. It may have moved, been retired, or never existed.
          </p>
        </motion.div>

        {isFetched && authData.isAuthenticated && authData.user?.role === "admin" && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="mt-8 rounded-2xl border border-gold/30 bg-bgtint p-4 text-left"
          >
            <div className="flex items-start gap-3">
              <span className="w-8 h-8 shrink-0 rounded-full bg-gold/15 text-gold-deep flex items-center justify-center">
                <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 9v4M12 17h.01M10.3 3.9 1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0z" /></svg>
              </span>
              <div>
                <p className="text-[13px] font-semibold text-ink">Admin note</p>
                <p className="text-[13px] text-tgray leading-relaxed mt-0.5">This route may not be implemented yet — ask the builder in chat to create it.</p>
              </div>
            </div>
          </motion.div>
        )}

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 0.5 }}
          className="mt-9 flex flex-wrap items-center justify-center gap-3"
        >
          <Link to="/" className="btn btn-gold">
            <svg viewBox="0 0 24 24" width="17" height="17" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 0 0 1 1h3m10-11l2 2m-2-2v10a1 1 0 0 1-1 1h-3m-6 0a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1m-6 0h6" /></svg>
            Back to home
          </Link>
          <Link to="/resources" className="btn btn-ghost">Browse resources</Link>
        </motion.div>
      </div>
    </section>
  );
}