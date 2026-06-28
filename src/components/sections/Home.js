"use client";
import Image from "next/image";
import HelloBox from "../HelloBox";
import Services from "./Services";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { animate, stagger } from "motion";
import { splitText } from "motion-plus";
import MarqueeSection from "./MarqueeSection";

export default function Home() {
  const headlineRef = useRef(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    document.fonts.ready.then(() => {
      if (!headlineRef.current) return;
      const { words } = splitText(headlineRef.current);
      animate(
        words,
        { opacity: [0, 1], y: [10, 0] },
        {
          duration: 1.6,
          delay: stagger(0.05),
        }
      );
    });
  }, []);

  return (
    <section id="home" className="bg-white relative w-full overflow-hidden mt-16">
      {/* === Hero Section === */}
      <div className="bg-white max-w-screen-xl mx-auto px-8 lg:px-20 pt-20">
        {/* === Desktop Layout === */}
        <div className="hidden lg:flex flex-row items-center justify-between gap-10">
          {/* Left Text */}
          <motion.div
            className="lg:w-1/2 w-full space-y-6 pb-10"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.3,
                },
              },
            }}
          >
            <HelloBox />

            <motion.h1
              className="text-4xl sm:text-5xl lg:text-5xl font-bold text-[#263650] leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.6 }}
            >
              Saya <span className="text-[#FD853A]">Zolla Perdana</span>,<br />
              Software Engineering dan Penulis.
            </motion.h1>

            <motion.p
              className="text-gray-600 text-base leading-relaxed max-w-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.9 }}
            >
              Mahasiswa Sarjana Terapan Teknologi Rekayasa Perangkat Lunak di mana hayo
              Sekolah Vokasi IPB University. Aktif mengikuti berbagai kompetisi
              dan menjelajahi tantangan di bidang teknologi, lingkungan, dan
              pendidikan melalui pendekatan yang kreatif dan inovatif.
            </motion.p>

            <motion.button
              onClick={() => setShowModal(true)}
              className="relative w-[300px] block group"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 2.3 }}
            >
              <div className="bg-[#FD853A] h-[42px] w-[230px] rounded-full"></div>
              <div className="absolute top-0 left-0 bg-[#263650] text-white rounded-full h-[42px] w-[160px] flex items-center justify-between pl-6 pr-10 z-10 border border-[#FD853A]">
                <span className="text-sm md:text-base whitespace-nowrap">
                  Lihat CV Saya
                </span>
              </div>
              <div className="absolute top-1/2 left-[170px] -translate-y-1/2 transform transition-transform duration-300 ease-in-out group-hover:translate-x-2 bg-white w-[38px] h-[38px] rounded-full flex items-center justify-center z-20">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2.5"
                  stroke="currentColor"
                  className="w-5 h-5 text-black"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.25 4.75L20.25 11.75L13.25 18.75M4 11.75H20.25"
                  />
                </svg>
              </div>
            </motion.button>
          </motion.div>

          {/* Right Image */}
          <motion.div
            className="relative w-full lg:w-1/2 flex justify-center items-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 2.3 }}
          >
            <Image
              src="/img/gambar_home.png"
              alt="Zolla Perdana"
              width={450}
              height={600}
              className="relative z-10 object-cover"
              priority
            />
          </motion.div>
        </div>

        {/* === Mobile Layout === */}
        <div className="flex flex-col lg:hidden gap-8 items-center text-center">
          <motion.div
            className="space-y-6"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.3,
                },
              },
            }}
          >
            <HelloBox />

            <motion.h1
              className="text-4xl font-bold text-[#263650] leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.6 }}
            >
              Saya <span className="text-[#FD853A]">Zolla Perdana</span>,<br />
              Software Engineering dan Penulis.
            </motion.h1>

            <motion.p
              className="text-gray-600 text-base leading-relaxed max-w-md mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.9 }}
            >
              Mahasiswa Sarjana Terapan Teknologi Rekayasa Perangkat Lunak di
              Sekolah Vokasi IPB University. Aktif mengikuti berbagai kompetisi
              dan menjelajahi tantangan di bidang teknologi, lingkungan, dan
              pendidikan melalui pendekatan yang kreatif dan inovatif.
            </motion.p>

            <motion.button
              onClick={() => setShowModal(true)}
              className="relative w-[300px] block group"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 2.3 }}
            >
              <div className="bg-[#FD853A] h-[42px] w-[230px] rounded-full"></div>
              <div className="absolute top-0 left-0 bg-[#263650] text-white rounded-full h-[42px] w-[160px] flex items-center justify-between pl-6 pr-10 z-10 border border-[#FD853A]">
                <span className="text-sm md:text-base whitespace-nowrap">
                  Lihat CV Saya
                </span>
              </div>
              <div className="absolute top-1/2 left-[170px] -translate-y-1/2 transform transition-transform duration-300 ease-in-out group-hover:translate-x-2 bg-white w-[38px] h-[38px] rounded-full flex items-center justify-center z-20">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2.5"
                  stroke="currentColor"
                  className="w-5 h-5 text-black"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.25 4.75L20.25 11.75L13.25 18.75M4 11.75H20.25"
                  />
                </svg>
              </div>
            </motion.button>
          </motion.div>

          {/* Gambar di bawah button */}
          <motion.div
            className="w-full flex justify-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 2.7 }}
          >
            <Image
              src="/img/gambar_home.png"
              alt="Zolla Perdana"
              width={350}
              height={500}
              className="relative z-10 object-cover"
              priority
            />
          </motion.div>
        </div>
      </div>

      {/* === Marquee Section === */}
      <motion.div
        className="relative w-full overflow-visible"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 2.7 }}
      >
        <MarqueeSection />
      </motion.div>

      {/* === Services Section === */}
      <Services />

      {/* === Modal PDF CV === */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50">
          <div className="bg-white w-[90%] h-[90%] relative rounded-xl overflow-hidden shadow-xl">
            <button
              className="absolute top-4 right-4 bg-[#FD853A] text-white px-3 py-1 rounded-full z-10 hover:bg-[#e5732c]"
              onClick={() => setShowModal(false)}
            >
              ✕
            </button>
            <iframe
              src="https://rcljtsnaqwlqnbwknsdm.supabase.co/storage/v1/object/public/cv-files//CV_Zolla%20Perdana%20Putra%20Harahap.pdf"
              className="w-full h-full"
              loading="lazy"
              title="Curriculum Vitae Zolla Perdana"
            ></iframe>
          </div>
        </div>
      )}
    </section>
  );
}
