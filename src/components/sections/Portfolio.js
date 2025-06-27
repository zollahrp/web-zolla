"use client";
import Image from "next/image";
import { FiArrowRight } from "react-icons/fi";
import { FaStar } from "react-icons/fa";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Judul Project",
    desc: "Deskripsi singkat project",
    category: "Website",
    date: "Jun 2025",
    image: "/img/blog_1.JPG",
  },
    {
    title: "Judul Project",
    desc: "Deskripsi singkat project",
    category: "Website",
    date: "Jun 2025",
    image: "/img/blog_1.JPG",
  },
  // Tambahkan lebih banyak project di sini...
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="bg-[#F2F4F7] py-20">
      <div className="max-w-screen-xl mx-auto px-6 lg:px-20">
        {/* Header */}
        <div className="flex justify-between items-center mb-10">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <FaStar className="text-[#FD853A]" />
              <span className="text-black font-semibold">Portfolio</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold">
              <span className="text-[#FD853A]">Project</span> Terbaru saya
            </h2>
          </div>

          <a href="/projects" className="relative w-[290px] group">
            <div className="bg-[#FD853A] h-[42px] w-[270px] rounded-full" />
            <div className="absolute top-0 left-0 bg-[#263650] text-white rounded-full h-[42px] w-[200px] flex items-center justify-between pl-6 pr-10 z-10">
              <span className="text-sm md:text-base whitespace-nowrap">
                Lihat Semua Projects
              </span>
            </div>
            <div className="absolute top-1/2 left-[210px] -translate-y-1/2 transform transition-transform duration-300 ease-in-out group-hover:translate-x-2 bg-white w-[38px] h-[38px] rounded-full flex items-center justify-center z-20">
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
          </a>
        </div>

        {/* Grid Project */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{
                duration: 0.6,
                delay: i * 0.2,
                ease: "easeOut",
              }}
              viewport={{ once: true, amount: 0.3 }}
              className="bg-white rounded-2xl p-4 shadow-sm"
            >
              <div className="w-full h-[272px] relative rounded-xl overflow-hidden mb-4">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-semibold bg-[#FD853A] text-white px-3 py-1 rounded-full">
                  {project.category}
                </span>
                <span className="text-sm text-gray-500">{project.date}</span>
              </div>

              <h3 className="text-lg font-bold text-black">{project.title}</h3>
              <p className="text-sm text-gray-600">{project.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
