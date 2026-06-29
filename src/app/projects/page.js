"use client";

import ProjectsList from "@/components/projects/ProjectsList";
import { useRouter } from "next/navigation";
import { IoArrowBack, IoSearch } from "react-icons/io5";
import { HiOutlineAdjustmentsHorizontal } from "react-icons/hi2";
import { useState } from "react";
import "swiper/css";
import "swiper/css/pagination";

export default function ProjectsPage() {
  const router = useRouter();
  const categories = ["Semua", "Website", "Mobile App", "UI/UX", "Research"];
  const [selectedCategory, setSelectedCategory] = useState("Semua");
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <section className="min-h-screen bg-[#F8F9FB] pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Back */}
        <button
          onClick={() => router.push("/")}
          className="mb-8 flex cursor-pointer items-center gap-2 text-[#FD853A] hover:gap-3 transition-all"
        >
          <IoArrowBack />
          <span>Kembali</span>
        </button>

        {/* Header */}
        <div className="mb-8">
          <p className="text-gray-400 text-sm">Portfolio</p>

          <h1 className="mt-2 text-5xl font-bold text-[#263650]">
            My <span className="text-[#FD853A]">Projects</span>
          </h1>

          <p className="mt-3 text-gray-500 max-w-xl">
            Explore website, mobile application, UI/UX, research, and digital
            innovation that I've built.
          </p>
        </div>

        {/* Search */}
        <div className="flex gap-3 mb-8">
          <div className="flex flex-1 items-center rounded-full bg-white px-5 py-3 shadow-sm">
            <IoSearch className="text-gray-400" size={20} />

            <input
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search project..."
              className="ml-3 w-full bg-transparent outline-none"
            />
          </div>

          <button className="flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-sm hover:bg-[#FD853A] hover:text-white transition">
            <HiOutlineAdjustmentsHorizontal size={22} />
          </button>
        </div>

        {/* Category */}
        <div className="mb-10 flex flex-wrap justify-center gap-3">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`cursor-pointer rounded-full px-6 py-2 transition-all duration-300 ${
                selectedCategory === category
                  ? "bg-[#FD853A] text-white shadow-md"
                  : "bg-white text-gray-600 shadow-sm hover:bg-orange-100"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* List */}

        <ProjectsList
          selectedCategory={selectedCategory}
          searchQuery={searchQuery}
        />
      </div>
    </section>
  );
}
