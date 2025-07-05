"use client";
import BlogList from "@/components/blog/BlogList";
import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";

export default function BlogPage() {
    const [sort, setSort] = useState("newest");
  return (
    <>
      {/* Hero Section */}
      <section className="relative w-full h-[70vh] rounded-s">
        <Image
          src="/img/baner_blog.jpg" 
          alt="Hero Background"
          layout="fill"
          objectFit="cover"
          quality={90}
          className="z-0"
        />
        <div className="absolute inset-0 bg-black/20 z-10" />
        <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-white text-2xl sm:text-3xl md:text-4xl font-bold mb-2">
            INGIN JUARA DALAM LOMBA ESAI? BERIKUT TIPS ZOLLA
          </h1>
          <p className="text-white text-sm sm:text-base mb-6">
            Kompetisi
          </p>
          <a
            href="https://www.zollahrp.my.id/blog/tips-juara-esai-ala-zolla"
            className="bg-[#FD853A] text-white font-semibold px-6 py-2 rounded-full hover:opacity-90 transition"
          >
            Lihat postingan
          </a>
        </div>
      </section>

      {/* Blog List Section */}
      <section
        id="list"
        className="pt-10 px-6 lg:px-20 max-w-screen-xl mx-auto"
      >
        {/* Header dan Filter */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 ">
          {/* Judul Intro */}
          <motion.h2
            className="text-2xl sm:text-3xl font-bold text-[#263650]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Selamat datang di laman <span className="text-[#FD853A]">Zolla nge-Blog</span>{" "}
            teman-teman👋
          </motion.h2>

          {/* Dropdown Filter */}
          <div className="relative">
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className="border border-gray-300 rounded-full px-4 py-2 text-sm font-medium text-[#263650] focus:outline-none"
            >
              <option value="newest">Terbaru</option>
              <option value="oldest">Terlama</option>
            </select>
          </div>
        </div>

        {/* List Blog */}
        <BlogList sort={sort} />
      </section>
    </>
  );
}
