"use client";
import { useEffect, useState } from "react";
import { useInView } from "framer-motion";

export default function Counter({ target, suffix = "", duration = 2000 }) {
  const [count, setCount] = useState(0);
  const ref = useInView({ triggerOnce: true });
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (!ref.inView || hasAnimated) return;

    let start = 0;
    const end = parseInt(target);
    const incrementTime = 30; // ms
    const steps = duration / incrementTime;
    const step = Math.ceil(end / steps);

    const interval = setInterval(() => {
      start += step;
      if (start >= end) {
        start = end;
        clearInterval(interval);
        setHasAnimated(true);
      }
      setCount(start);
    }, incrementTime);

    return () => clearInterval(interval);
  }, [ref.inView, target, duration, hasAnimated]);

  return (
    <span ref={ref.ref}>
      {count}
      {suffix}
    </span>
  );
}
