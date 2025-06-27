"use client";
import { FiMonitor, FiLayout, FiCode, FiPenTool } from "react-icons/fi";
import { motion } from "framer-motion";
// import Experience from './Experience';

const services = [
  {
    icon: <FiLayout className="text-3xl text-[#263650]" />, // ukuran icon dikurangi juga
    title: "UI/UX Design",
    description: (
      <>
        Mendesain antarmuka dan pengalaman pengguna yang menarik dan{" "}
        <em>user-friendly</em>.
      </>
    ),
  },
  {
    icon: <FiMonitor className="text-3xl text-[#263650]" />,
    title: "Website Design",
    description: (
      <>
        Mendesain tampilan website yang menarik, responsif, dan{" "}
        <em>user-friendly</em>.
      </>
    ),
  },
  {
    icon: <FiCode className="text-3xl text-[#263650]" />,
    title: "Fullstack Developer",
    description:
      "Membangun website secara menyeluruh, mulai dari frontend hingga backend.",
  },
  {
    icon: <FiPenTool className="text-3xl text-[#263650]" />,
    title: "Writing",
    description:
      "Menulis esai, artikel, dan berbagai karya tulis sebagai sarana ekspresi dan kontribusi intelektual.",
  },
];

export default function Services() {
  return (
    <section className="bg-white py-20" id="service">
      <div className="max-w-screen-xl mx-auto px-8 lg:px-20">
        {/* Header */}
        <div className="mb-20 text-left">
          {" "}
          {/* <- jarak ditambah di sini */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 2.9 }}
            className="flex items-center gap-2 mb-2"
          >
            <span className="text-[#FD853A] text-xl">⚙</span>
            <span className="font-semibold text-gray-700">Services</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 3.1 }}
            className="text-3xl sm:text-4xl font-bold"
          >
            <span className="text-[#FD853A]">Layanan</span>{" "}
            <span className="text-[#263650]">yang Saya Tawarkan</span>
          </motion.h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-24 gap-x-6 mt-10">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: i * 0.2, // Stagger effect
                ease: "easeOut",
              }}
              viewport={{ once: true, amount: 0.3 }}
              className="relative flex flex-col items-center text-center p-6 sm:p-8 rounded-3xl bg-gradient-to-b from-black/5 to-white"
            >
              <div className="relative w-20 h-20 sm:w-24 sm:h-24 lg:w-24 lg:h-24 -mt-16 sm:-mt-20 flex items-center justify-center rounded-full bg-white border border-black">
                {service.icon}
              </div>
              <h3 className="text-xl sm:text-2xl text-[#263650] font-semibold mt-8 sm:mt-10">
                {service.title}
              </h3>
              <p className="text-sm sm:text-base text-gray-600 mt-2">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
      {/* <Experience /> */}
    </section>
  );
}
