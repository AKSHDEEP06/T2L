import React, { useRef } from "react";
import { Link } from "react-router-dom";

export default function InteractiveCard({ children, className = "", to, href, style = {}, delay = 0 }) {
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    const card = cardRef.current;
    if (!card) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const rect = card.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    card.style.transform = `translateY(-6px) rotateX(${py * -4}deg) rotateY(${px * 4}deg)`;
  };
  const handleMouseLeave = () => {
    const card = cardRef.current;
    if (!card) return;
    card.style.transform = "";
  };

  const common = {
    ref: cardRef,
    className,
    style,
    onMouseMove: handleMouseMove,
    onMouseLeave: handleMouseLeave,
  };

  if (to) return <Link ref={cardRef} to={to} {...common}>{children}</Link>;
  if (href) return <a ref={cardRef} href={href} {...common}>{children}</a>;
  return <div ref={cardRef} {...common}>{children}</div>;
}