"use client";
import { motion } from "framer-motion";
import { MdWork } from "react-icons/md";

export default function Experience() {
  const data = [
    {
      company: "Puna Indonesia",
      period: "April 2025 - Sekarang",
      position: "Head of Creative and Innovation",
      desc: "Bertanggung jawab dalam mengelola media sosial, content creator, serta ide inovasi.",
      dotColor: "#FD853A",
    },
    {
      company: "MicroIT IPB University",
      period: "Sep 2023 - Juli 2024",
      position: "Web Master",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lacus nunc, posuere in justo vulputate, bibendum sodales.",
      dotColor: "#263650",
    },
    {
      company: "Bem SV IPB",
      period: "Sep 2023 - Des 2024",
      position: "Ketua",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lacus nunc, posuere in justo vulputate, bibendum sodales.",
      dotColor: "#FD853A",
    },
  ];

  return (
    <section id="experience" className="bg-white py-0">
      <div className="max-w-screen-xl mx-auto px-6 lg:px-20 text-center">
        {/* Title */}
        <div className="flex justify-center items-center gap-2 mb-2">
          <MdWork className="text-[#FD853A]" size={20} />
          <h3 className="text-base sm:text-lg font-semibold text-black">
            Experience
          </h3>
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold mb-16">
          <span className="text-[#FD853A]">Pengalaman Kerja</span> Saya
        </h2>

        {/* Timeline */}
        <div className="relative">
          {/* Garis Vertikal Global */}
          <motion.div
            initial={{ height: 0 }}
            whileInView={{ height: "100%" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-px border-l-2 border-dashed border-[#263650] z-0"
          />

          {data.map((item, i) => (
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
                {/* Dot dengan Lingkaran Putus-Putus */}
                <div className="w-10 h-10 rounded-full border-2 border-dashed border-[#263650] flex items-center justify-center bg-white">
                  <div
                    className="w-6 h-6 rounded-full"
                    style={{ backgroundColor: item.dotColor }}
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
