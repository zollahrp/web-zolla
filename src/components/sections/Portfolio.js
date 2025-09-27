"use client";
import Image from "next/image";
import { FaStar } from "react-icons/fa";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import {
  FaReact,
  FaFigma,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaNode,
} from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss } from "react-icons/si";

const iconMap = {
  react: <FaReact className="text-[#61DBFB]" size={20} />,
  figma: <FaFigma className="text-[#A259FF]" size={20} />,
  html: <FaHtml5 className="text-[#e34c26]" size={20} />,
  css: <FaCss3Alt className="text-[#264de4]" size={20} />,
  js: <FaJsSquare className="text-[#f7df1e]" size={20} />,
  next: <SiNextdotjs className="text-black" size={20} />,
  node: <FaNode className="text-[#3C873A]" size={20} />,
  tailwind: <SiTailwindcss className="text-[#38B2AC]" size={20} />,
};

const getIcon = (tech) =>
  iconMap[tech.toLowerCase()] || (
    <span className="text-sm bg-white/70 px-2 rounded-full">
      {tech.toUpperCase()}
    </span>
  );

export default function Portfolio() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchLatestProjects = async () => {
      const res = await fetch("/api/portfolio");
      const data = await res.json();

      const parseStartDate = (dateString) => {
        const monthMap = {
          Januari: 0,
          Februari: 1,
          Maret: 2,
          April: 3,
          Mei: 4,
          Juni: 5,
          Juli: 6,
          Agustus: 7,
          September: 8,
          Oktober: 9,
          November: 10,
          Desember: 11,
        };

        if (!dateString) return new Date(0);

        const cleaned = dateString.replace(/[-–—]/g, "–");
        const parts = cleaned.includes("–")
          ? cleaned.split("–")
          : [cleaned, cleaned];

        const start = parts[0].trim();
        const [monthStr, yearStr] = start.split(" ");

        const month = monthMap[monthStr?.trim()];
        let year = parseInt(yearStr?.trim());
        if (year < 100) year += 2000;

        if (isNaN(month) || isNaN(year)) return new Date(0);

        return new Date(year, month);
      };

      const filteredData = data.filter(
        (item) =>
          item.date &&
          !(Array.isArray(item.category) && item.category.includes("Tulisan"))
      );

      const sorted = filteredData.sort(
        (a, b) => parseStartDate(b.date) - parseStartDate(a.date)
      );

      setProjects(sorted.slice(0, 6));
    };

    fetchLatestProjects();
  }, []);

  return (
    <section id="portfolio" className="bg-[#F2F4F7] py-20">
      <div className="max-w-screen-xl mx-auto px-6 lg:px-20">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-10 gap-6">
          {/* Judul + Subjudul */}
          <div>
            <motion.div
              className="flex items-center gap-2 mb-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <FaStar className="text-[#FD853A]" />
              <span className="text-black font-semibold">Portfolio</span>
            </motion.div>
            <motion.h2
              className="text-3xl sm:text-4xl font-bold"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <span className="text-[#FD853A]">Proyek</span>{" "}
              <span className="text-black">Terbaru Saya</span>
            </motion.h2>
          </div>

          {/* Tombol */}
          <motion.a
            href="/projects"
            className="relative w-[250px] group sm:self-start"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            {/* Background orange */}
            <div className="bg-[#FD853A] h-[42px] w-[250px] rounded-full" />

            {/* Layer biru dengan teks */}
            <div className="absolute top-0 left-0 bg-[#263650] text-white rounded-full h-[42px] w-[180px] flex items-center justify-between pl-6 pr-10 z-10">
              <span className="text-sm md:text-base whitespace-nowrap">
                Lihat Semua Proyek
              </span>
            </div>

            {/* Ikon panah putih */}
            <div className="absolute top-1/2 left-[190px] -translate-y-1/2 transform transition-transform duration-300 ease-in-out group-hover:translate-x-2 bg-white w-[38px] h-[38px] rounded-full flex items-center justify-center z-20">
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
          </motion.a>
        </div>

        {/* Grid Project */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: i * 0.2,
                ease: "easeOut",
              }}
              viewport={{ once: true, amount: 0.3 }}
              className="group bg-white rounded-2xl p-4 shadow-sm cursor-pointer transition duration-300"
              onClick={() => {
                if (project.link) {
                  window.open(project.link, "_blank");
                }
              }}
            >
              {/* Gambar */}
              <div className="w-full h-[272px] relative rounded-xl overflow-hidden mb-4 group">
                <Image
                  src={project.image?.[0] || "/img/default.jpg"}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />

                {/* Overlay hitam */}
                <div className="hidden md:block absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />

                {/* Panah diagonal */}
                <div className="hidden md:flex absolute top-4 right-4 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="#FD853A"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13 5h6m0 0v6m0-6L10 18"
                    />
                  </svg>
                </div>

                {/* Tech Icons */}
                <div className="absolute bottom-4 left-4 flex gap-2 z-30">
                  {project.tech?.map((tag, i) => (
                    <div
                      key={i}
                      className="bg-white/70 backdrop-blur-sm p-2 rounded-full"
                    >
                      {getIcon(tag)}
                    </div>
                  ))}
                </div>
              </div>

              {/* Kategori & Tanggal */}
              <div className="flex items-center justify-between mb-2 flex-wrap gap-2">
                <div className="flex flex-wrap gap-2">
                  {Array.isArray(project.category) &&
                    project.category.map((cat, idx) => (
                      <span
                        key={idx}
                        className="text-sm font-semibold bg-[#FD853A] text-white px-3 py-1 rounded-full"
                      >
                        {cat}
                      </span>
                    ))}
                </div>
                <span className="text-sm text-gray-500">{project.date}</span>
              </div>

              {/* Judul & Deskripsi */}
              <h3 className="text-lg font-bold text-black">{project.title}</h3>
              <p className="text-sm text-gray-600 mb-2">
                {project.desc?.length > 100
                  ? project.desc.slice(0, 100) + "..."
                  : project.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
