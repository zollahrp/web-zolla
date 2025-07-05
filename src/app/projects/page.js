"use client";
import ProjectsList from "@/components/projects/ProjectsList";
import { useRouter } from "next/navigation";
import { IoArrowBack } from "react-icons/io5";

export default function ProjectsPage() {
  const router = useRouter();

  return (
    <section className="py-26 bg-white">
      <div className="px-6 lg:px-100 mb-6">
        <button
          onClick={() => router.push("/")}
          className="flex items-center gap-2 text-[#FD853A] hover:underline"
        >
          <IoArrowBack size={20} />
          <span>Kembali</span>
        </button>
      </div>

      {/* Header */}
      <div className="text-center mb-12 px-6 lg:px-20">
        <h2 className="text-3xl font-bold text-[#263650]">
          Berikut merupakan semua{" "}
          <span className="text-[#FD853A]">Projects</span> yang Saya kerjakan
        </h2>
      </div>

      {/* Komponen Projects */}
      <div className="px-6 lg:px-20">
        <ProjectsList />
      </div>
    </section>
  );
}
