"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { FiUser } from "react-icons/fi";
import CountUp from "@/components/elements/CountUp";

export default function About() {
  return (
    <section id="about" className="bg-[#F2F4F7] py-20">
      <div className="max-w-screen-xl mx-auto flex flex-col-reverse lg:flex-row items-center justify-between px-8 lg:px-20 gap-12">
        {/* === Left - Foto (tapi muncul terakhir di mobile karena flex-col-reverse) === */}
        <motion.div
          className="w-full lg:w-2/4 flex justify-center relative"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <div className="relative z-10 rounded-[30px] overflow-hidden">
            <Image
              src="/img/gambar_about.png"
              alt="Zolla Perdana"
              width={400}
              height={550}
              className="object-cover z-10 relative"
              priority
            />
          </div>
        </motion.div>

        {/* === Right - Konten === */}
        <motion.div
          className="w-full lg:w-3/4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.2 },
            },
          }}
        >
          {/* Icon & Title */}
          <motion.div
            className="flex items-center gap-2 mb-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <FiUser className="text-[#FD853A]" size={20} />
            <span className="font-semibold text-black">About Me</span>
          </motion.div>

          <motion.h2
            className="text-3xl sm:text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <span className="text-black">Siapa itu</span>{" "}
            <span className="text-[#FD853A]">Zolla Perdana</span>?
          </motion.h2>

          <motion.p
            className="text-black text-base sm:text-lg leading-relaxed mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            viewport={{ once: true }}
          >
            Mahasiswa Berprestasi IPB University sekaligus mahasiswa Sarjana
            Terapan Teknologi Rekayasa Perangkat Lunak di Sekolah Vokasi IPB
            University. Dikenal sebagai pribadi yang adaptif, memiliki rasa
            ingin tahu tinggi, dan berjiwa inovator. Aktif mengikuti berbagai
            kompetisi serta mengembangkan solusi di bidang teknologi,
            lingkungan, dan pendidikan melalui pendekatan yang kreatif,
            inovatif, dan berorientasi pada dampak.
          </motion.p>

          {/* Statistik */}
          <div className="grid grid-cols-3 gap-6 text-center text-[#FD853A] font-bold text-3xl mb-8">
            <div className="border-r border-gray-300">
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                viewport={{ once: true }}
              >
                <CountUp to={10} duration={1.2} delay={0.4} />
              </motion.span>
              <motion.p
                className="text-black text-sm font-medium mt-1"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                viewport={{ once: true }}
              >
                Project Selesai
              </motion.p>
            </div>

            <div className="border-r border-gray-300">
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                viewport={{ once: true }}
              >
                <CountUp to={24} duration={1.5} delay={0.6} />
              </motion.span>
              <motion.p
                className="text-black text-sm font-medium mt-1"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                viewport={{ once: true }}
              >
                Mengikuti Kompetisi
              </motion.p>
            </div>

            <div>
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                viewport={{ once: true }}
              >
                <CountUp to={2} duration={1.3} delay={0.8} />
              </motion.span>
              <motion.p
                className="text-black text-sm font-medium mt-1"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                viewport={{ once: true }}
              >
                Tahun Pengalaman
              </motion.p>
            </div>
          </div>

          {/* Tombol dan Tanda Tangan */}
          <motion.div
            className="flex items-center gap-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.1 }}
            viewport={{ once: true }}
          >
            {/* Button Download CV */}
            <a
              href="https://rcljtsnaqwlqnbwknsdm.supabase.co/storage/v1/object/public/cv-files/CV_Zolla%20Perdana%20Putra%20Harahap.pdf"
              download
              className="relative w-[300px] block group"
            >
              <div className="bg-[#FD853A] h-[42px] w-[250px] rounded-full"></div>
              <div className="absolute top-0 left-0 bg-[#263650] text-white rounded-full h-[42px] w-[180px] flex items-center justify-between pl-6 pr-10 z-10">
                <span className="text-sm md:text-base whitespace-nowrap">
                  Download CV Saya
                </span>
              </div>
              <div className="absolute top-1/2 left-[190px] -translate-y-1/2 bg-white w-[38px] h-[38px] rounded-full flex items-center justify-center z-20">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2.5"
                  stroke="currentColor"
                  className="w-5 h-5 text-black transform transition-transform duration-300 ease-in-out group-hover:translate-y-1"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5m0 0l5-5m-5 5V4"
                  />
                </svg>
              </div>
            </a>

            {/* Signature */}
            <span className="text-[#FD853A] italic [font-family:'Great_Vibes',_cursive] text-xl">
              Zolla Perdana Putra Harahap
            </span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
