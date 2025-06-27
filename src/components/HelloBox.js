"use client";

import { motion } from "framer-motion";

export default function HelloBox() {
  const cornerVariants = {
    initial: { x: 0, y: 0, rotate: 0 },
    topLeft: { x: -87, y: -22, rotate: 360 },
    topRight: { x: 87, y: -22, rotate: 360 },
    bottomLeft: { x: -87, y: 22, rotate: 360 },
    bottomRight: { x: 87, y: 22, rotate: 360 },
  };

  return (
    <motion.div
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="relative inline-block px-8 py-2 text-[#263650] font-semibold"
    >
      {/* Teks */}
      <motion.span
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 1.2, // muncul setelah animasi kotak selesai
          duration: 0.4,
          ease: "easeOut",
        }}
        className="relative z-10 text-lg"
      >
        Hallo Semua!
      </motion.span>

      {/* Garis Horizontal */}
      <motion.span
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
        className="absolute inset-0 border border-[#263650] z-0 origin-center"
      />

      {/* Kotak Kecil 4 Sudut dengan ROTASI */}
      {[
        { animate: "topLeft", delay: 0.3 },
        { animate: "topRight", delay: 0.35 },
        { animate: "bottomLeft", delay: 0.4 },
        { animate: "bottomRight", delay: 0.45 },
      ].map((corner, idx) => (
        <motion.div
          key={idx}
          variants={cornerVariants}
          initial="initial"
          animate={corner.animate}
          transition={{
            delay: corner.delay,
            duration: 0.6,
            ease: "easeOut",
            type: "spring",
            stiffness: 200,
            damping: 15,
          }}
          className="w-3 h-3 bg-[#FD853A] absolute z-20 border border-[#263650] left-1/2 top-1/2 -ml-[6px] -mt-[6px]"
        />
      ))}
    </motion.div>
  );
}
