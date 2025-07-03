import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

export default function MarqueeSection() {
  const marqueeRef = useRef(null);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (marqueeRef.current) {
      observer.observe(marqueeRef.current);
    }

    return () => {
      if (marqueeRef.current) {
        observer.unobserve(marqueeRef.current);
      }
    };
  }, []);

  const items = [
    "UI/UX Design",
    "Website Design",
    "Fullstack Developer",
    "Writing",
    "Research",
    "Problem Solving",
    "UI/UX Design",
    "Website Design",
    "Fullstack Developer",
    "Writing",
    "Research",
    "Problem Solving",
  ];

  const repeated = [...items, ...items];

  return (
    <motion.div
      className="relative w-full overflow-visible"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 2.7 }}
    >
      <div className="bg-[#263650] -rotate-[2.1deg] origin-bottom h-[60px] w-[120%] absolute -left-10 -translate-y-2 z-10"></div>
      <div
        ref={marqueeRef}
        className="bg-[#FD853A] py-4 relative z-10 overflow-hidden whitespace-nowrap"
      >
        <div className={`marquee-track ${!isVisible ? "marquee-paused" : ""}`}>
          {repeated.map((text, i) => (
            <span
              key={i}
              className="mx-8 text-white font-medium text-lg tracking-widest"
            >
              {text}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
