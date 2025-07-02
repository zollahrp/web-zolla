// "use client";

// import Image from "next/image";
// import { useState } from "react";
// import { FaReact, FaFigma, FaHtml5 } from "react-icons/fa";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Pagination } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/pagination";
// import { projects } from "@/components/data/ProjectList";

// const categories = ["Semua", "Website", "Aplikasi", "Desain", "Tulisan"];

// export default function ProjectsList() {
//   const [selected, setSelected] = useState("Semua");

//   const filteredProjects =
//     selected === "Semua"
//       ? projects
//       : projects.filter((proj) => proj.category === selected);

//   const getIcon = (tech) => {
//     switch (tech) {
//       case "React":
//         return <FaReact className="text-[#61DBFB]" size={20} />;
//       case "Figma":
//         return <FaFigma className="text-[#A259FF]" size={20} />;
//       case "HTML":
//         return <FaHtml5 className="text-[#e34c26]" size={20} />;
//       default:
//         return null;
//     }
//   };

//   return (
//     <section className="max-w-screen-md mx-auto px-6 flex flex-col gap-16 pt-20">
//       {/* Filter */}
//       <div className="flex flex-wrap justify-center gap-3">
//         {categories.map((cat) => (
//           <button
//             key={cat}
//             onClick={() => setSelected(cat)}
//             className={`px-4 py-2 rounded-full text-sm transition font-medium ${
//               selected === cat
//                 ? "bg-[#FD853A] text-white"
//                 : "bg-gray-200 text-black hover:bg-[#FD853A]/80 hover:text-white"
//             }`}
//           >
//             {cat}
//           </button>
//         ))}
//       </div>

//       {/* List of Projects */}
//       {filteredProjects.map((project, idx) => (
//         <div key={idx} className="flex flex-col gap-4 text-center">
//           {/* Gambar (Slider) */}
//           <div className="relative w-full h-[280px] overflow-hidden rounded-2xl">
//             <Swiper
//               modules={[Pagination]}
//               spaceBetween={10}
//               slidesPerView={1}
//               pagination={{
//                 clickable: true,
//                 el: `.swiper-pagination-${idx}`,
//               }}
//               className="w-full h-full"
//             >
//               {project.images.map((img, i) => (
//                 <SwiperSlide key={i}>
//                   <div className="relative w-full h-[280px]">
//                     <Image
//                       src={img}
//                       alt={project.title}
//                       fill
//                       className="object-cover"
//                     />
//                   </div>
//                 </SwiperSlide>
//               ))}
//             </Swiper>

//             {/* Icon Teknologi dalam Gambar */}
//             <div className="absolute bottom-4 left-4 flex gap-2 z-10">
//               {project.tags?.map((tag, i) => (
//                 <div
//                   key={i}
//                   className="bg-white/70 backdrop-blur-sm p-2 rounded-full"
//                 >
//                   {getIcon(tag)}
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Pagination Dot (di bawah gambar) */}
//           <div className={`swiper-pagination-${idx} !relative !mt-3 flex justify-center`} />

//           {/* Tag Teknologi (text) */}
//           {project.techTags?.length > 0 && (
//             <div className="flex flex-wrap justify-center gap-2">
//               {project.techTags.map((tag, i) => (
//                 <span
//                   key={i}
//                   className="bg-gray-100 text-gray-800 text-sm px-3 py-1 rounded-full"
//                 >
//                   {tag}
//                 </span>
//               ))}
//             </div>
//           )}

//           {/* Judul + Icon */}
//           <div className="flex justify-center items-center gap-2 mt-1">
//             <h3 className="text-xl font-bold text-[#263650]">
//               {project.title}
//             </h3>
//             <div className="bg-[#FD853A] p-2 rounded-full">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 strokeWidth="2"
//                 stroke="white"
//                 className="w-4 h-4"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   d="M13.25 4.75L20.25 11.75L13.25 18.75M4 11.75H20.25"
//                 />
//               </svg>
//             </div>
//           </div>

//           {/* Deskripsi */}
//           <p className="text-sm text-gray-600 max-w-lg mx-auto">{project.desc}</p>

//           {/* Garis Pembatas */}
//           <hr className="border-gray-300 mt-4" />
//         </div>
//       ))}
//     </section>
//   );
// }

"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { useRouter } from "next/navigation";
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

const categories = ["Semua", "Website", "Mobile App", "UI/UX", "Tulisan"];

export default function ProjectsList() {
  const [selected, setSelected] = useState("Semua");
  const [projects, setProjects] = useState([]);
  const router = useRouter();

  useEffect(() => {
    const fetchProjects = async () => {
      const res = await fetch("/api/portfolio"); // route GET semua
      const data = await res.json();
      setProjects(data);
    };
    fetchProjects();
  }, []);

  const filteredProjects =
    selected === "Semua"
      ? projects
      : projects.filter((proj) =>
          Array.isArray(proj.category)
            ? proj.category.includes(selected)
            : proj.category === selected
        );

  const getIcon = (tech) =>
    iconMap[tech.toLowerCase()] || (
      <span className="text-sm bg-white/70 px-2 rounded-full">
        {tech.toUpperCase()}
      </span>
    );

  return (
    <section className="max-w-screen-md mx-auto px-6 flex flex-col gap-16 pt-20">
      {/* Filter */}
      <div className="flex flex-wrap justify-center gap-3">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelected(cat)}
            className={`px-4 py-2 rounded-full text-sm transition font-medium ${
              selected === cat
                ? "bg-[#FD853A] text-white"
                : "bg-gray-200 text-black hover:bg-[#FD853A]/80 hover:text-white"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* List of Projects */}
      {filteredProjects.map((project, idx) => (
        <div
          key={project.id}
          className="flex flex-col gap-4 text-center cursor-pointer"
          onClick={() => {
            if (project.link) {
              window.open(project.link, "_blank");
            } else {
              router.push(`/projects/${project.id}`);
            }
          }}
        >
          {/* Gambar (Slider) */}
          <div className="relative w-full h-[280px] overflow-hidden rounded-2xl">
            <Swiper
              modules={[Pagination]}
              spaceBetween={10}
              slidesPerView={1}
              pagination={{
                clickable: true,
                el: `.swiper-pagination-${idx}`,
              }}
              className="w-full h-full"
            >
              {(project.image || []).map((img, i) => (
                <SwiperSlide key={i}>
                  <div className="relative w-full h-[280px]">
                    <Image
                      src={img}
                      alt={project.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Icon Teknologi dalam Gambar */}
            <div className="absolute bottom-4 left-4 flex gap-2 z-10">
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

          {/* Pagination Dot */}
          <div
            className={`swiper-pagination-${idx} !relative !mt-3 flex justify-center`}
          />

          {Array.isArray(project.category) && project.category.length > 0 && (
            <div className="flex flex-wrap justify-center gap-2">
              {project.category.map((cat, i) => (
                <span
                  key={i}
                  className="bg-[#FD853A] text-white font-semibold text-sm px-3 py-1 rounded-full"
                >
                  {cat}
                </span>
              ))}
            </div>
          )}

          {/* Judul + Icon */}
          <div className="flex justify-center items-center gap-2 mt-1">
            <h3 className="text-xl font-bold text-[#263650]">
              {project.title}
            </h3>
            <div className="bg-[#FD853A] p-2 rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="white"
                className="w-4 h-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.25 4.75L20.25 11.75L13.25 18.75M4 11.75H20.25"
                />
              </svg>
            </div>
          </div>

          {/* Deskripsi */}
          <p className="text-sm text-gray-600 max-w-lg mx-auto">
            {project.desc}
          </p>

          <hr className="border-gray-300 mt-4" />
        </div>
      ))}
    </section>
  );
}
