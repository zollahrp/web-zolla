"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { MdWork } from "react-icons/md";

export default function Experience() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchExperience = async () => {
      const res = await fetch("/api/experiences");
      const result = await res.json();

      // kasih warna default atau acak
      const colored = result.map((item, i) => ({
        ...item,
        dotColor: item.dotColor || (i % 2 === 0 ? "#FD853A" : "#263650"),
      }));

      setData(colored);
    };

    fetchExperience();
  }, []);

  return (
    <section id="experience" className="bg-white py-0">
      <div className="max-w-screen-xl mx-auto px-6 lg:px-20 text-center">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
          className="flex justify-center items-center gap-2 mb-2"
        >
          <MdWork className="text-[#FD853A]" size={20} />
          <h3 className="text-base sm:text-lg font-semibold text-black">
            Experience
          </h3>
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.5 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl font-bold mb-16"
        >
          <span className="text-[#FD853A]">Pengalaman Kerja</span>{" "}
          <span className="text-[#263650]">Saya</span>
        </motion.h2>

        {/* Timeline */}
        <div className="relative">
          <motion.div
            initial={{ height: 0 }}
            whileInView={{ height: "100%" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-px border-l-2 border-dashed border-[#263650] z-0"
          />

          {data.slice(0, 5).map((item, i) => (
            <motion.div
              key={i}
              className="grid grid-cols-[2fr_40px_2fr] items-center mb-14 relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.2, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              {/* Left Side */}
              <div className="text-right pr-10">
                <h3 className="text-xl sm:text-2xl text-[#263650] font-semibold">
                  {item.company}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 mt-1">
                  {item.period}
                </p>
              </div>

              {/* Center Dot */}
              <div className="relative z-10 flex flex-col items-center">
                <div className="w-10 h-10 rounded-full border-2 border-dashed border-[#263650] flex items-center justify-center bg-white">
                  <div
                    className="w-6 h-6 rounded-full"
                    style={{ backgroundColor: item.dotColor || "#FD853A" }}
                  />
                </div>
              </div>

              {/* Right Side */}
              <div className="text-left pl-10">
                <h3 className="text-xl sm:text-2xl text-[#263650] font-semibold">
                  {item.position}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 mt-2 max-w-md">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
