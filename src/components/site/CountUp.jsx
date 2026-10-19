import React, { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

export default function CountUp({ to, duration = 1400, suffix = "", prefix = "", className = "" }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.4 });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let start = null;
    const step = (ts) => {
      if (!start) start = ts;
      const p = Math.min((ts - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setCount(Math.round(eased * to));
      if (p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [inView, to, duration]);

  return (
    <span ref={ref} className={className}>
      {prefix}{count.toLocaleString("en-IN")}{suffix}
    </span>
  );
}