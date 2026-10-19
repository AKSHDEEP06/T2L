import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { ChevronDown, Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";
import MegaMenu from "./MegaMenu";
import MobileMenu from "./MobileMenu";
import { PRODUCTS } from "./products";

function NavLink({ to, active, children }) {
  return (
    <Link to={to} aria-current={active ? "page" : undefined} className={`relative text-[14px] font-medium px-3.5 py-2 rounded-lg transition-colors ${active ? "text-ink" : "text-tgray hover:text-ink"}`}>
      {children}
      {active && <span className="absolute left-3.5 right-3.5 -bottom-[13px] h-0.5 bg-gold" />}
    </Link>
  );
}

export default function Navbar({ ctaText = "Get started", ctaTo = "/login", loginText = "Log in", loginTo = "/login" }) {
  const { pathname } = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [mega, setMega] = useState(false);
  const megaRef = useRef(null);
  const inProducts = PRODUCTS.some((p) => p.to === pathname);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setMenuOpen(false); setMega(false); }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    const onKey = (e) => { if (e.key === "Escape") { setMega(false); setMenuOpen(false); } };
    window.addEventListener("keydown", onKey);
    return () => { document.body.style.overflow = ""; window.removeEventListener("keydown", onKey); };
  }, [menuOpen]);

  const solid = scrolled || menuOpen;

  return (
    <>
      <header className={`fixed top-0 inset-x-0 z-50 h-16 transition-all duration-300 ${solid ? "bg-surface border-b border-line shadow-sm" : "border-b border-transparent"}`}>
        <div className="wrap h-full flex items-center justify-between gap-4">
          <Link to="/" className="flex items-center gap-1.5 font-display font-extrabold text-[20px] tracking-tight text-ink leading-none" aria-label="Turn2Law home">
            <span>Turn2</span><span className="text-gold-text">Law</span>
            <span className="w-1.5 h-1.5 rounded-full bg-gold ml-1" />
          </Link>

          <nav className="hidden lg:flex items-center gap-1 mr-auto ml-8" aria-label="Primary">
            <div ref={megaRef} className="relative" onMouseEnter={() => setMega(true)} onMouseLeave={() => setMega(false)}>
              <button onClick={() => setMega((p) => !p)} aria-expanded={mega} aria-haspopup="true" className={`relative inline-flex items-center gap-1 text-[14px] font-medium px-3.5 py-2 rounded-lg ${inProducts ? "text-ink" : "text-tgray hover:text-ink"}`}>
                Products <ChevronDown size={15} className={`transition-transform ${mega ? "rotate-180" : ""}`} />
                {inProducts && <span className="absolute left-3.5 right-3.5 -bottom-[13px] h-0.5 bg-gold" />}
              </button>
              {mega && <MegaMenu onNavigate={() => setMega(false)} />}
            </div>
            <NavLink to="/legal-services#pricing" active={false}>Pricing</NavLink>
            <NavLink to="/resources" active={pathname === "/resources"}>Resources</NavLink>
          </nav>

          <div className="hidden lg:flex items-center gap-2">
            <ThemeToggle />
            <Link to={loginTo} className="text-[14px] font-semibold text-ink px-3.5 py-2 hover:text-gold-text transition-colors">{loginText}</Link>
            <Link to={ctaTo} className="btn btn-gold !text-[14px] !py-2.5 !px-5">{ctaText}</Link>
          </div>

          <div className="flex lg:hidden items-center gap-2">
            <ThemeToggle />
            <button onClick={() => setMenuOpen((p) => !p)} aria-expanded={menuOpen} aria-label={menuOpen ? "Close menu" : "Open menu"} className="w-11 h-11 rounded-xl border border-line flex items-center justify-center text-ink">
              {menuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </header>
      {menuOpen && <MobileMenu ctaText={ctaText} ctaTo={ctaTo} loginText={loginText} loginTo={loginTo} />}
    </>
  );
}