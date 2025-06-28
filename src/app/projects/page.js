"use client";
import ProjectsList from "@/components/projects/ProjectsList";

export default function ProjectsPage() {
  return (
    <section className="py-20 bg-white px-6 lg:px-20">
      {/* Header di sini */}
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-[#263650]">
          Berikut merupakan semua{" "}
          <span className="text-[#FD853A]">Projects</span> yang Saya kerjakan
        </h2>
      </div>

      {/* Komponen Projects */}
      <ProjectsList />
    </section>
  );
}
