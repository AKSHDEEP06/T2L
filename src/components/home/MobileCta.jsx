import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

// Mobile-only bar: appears after the hero, hides while the contact section is on screen.
export default function MobileCta() {
  const [pastHero, setPastHero] = useState(false);
  const [atContact, setAtContact] = useState(false);

  useEffect(() => {
    const onScroll = () => setPastHero(window.scrollY > window.innerHeight * 0.8);
    window.addEventListener("scroll", onScroll, { passive: true });
    const el = document.getElementById("contact");
    const io = el ? new IntersectionObserver(([e]) => setAtContact(e.isIntersecting)) : null;
    if (io) io.observe(el);
    return () => { window.removeEventListener("scroll", onScroll); io?.disconnect(); };
  }, []);

  if (!pastHero || atContact) return null;
  return (
    <div className="fixed bottom-0 inset-x-0 z-40 p-3 bg-surface border-t border-line md:hidden" style={{ paddingBottom: "max(12px, env(safe-area-inset-bottom))" }}>
      <Link to="/login" className="btn btn-gold w-full !py-3.5">Get started</Link>
    </div>
  );
}