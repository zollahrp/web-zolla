"use client";
import Image from "next/image";
import HelloBox from "../HelloBox";
import Services from "./Services";
import { FiDownload } from "react-icons/fi";

export default function Home() {
  return (
    <section className="relative w-full overflow-hidden mt-16">
      {/* === Hero Section === */}
      <div className="max-w-screen-xl mx-auto flex flex-col-reverse lg:flex-row items-center justify-between pt-20 px-8 lg:px-20 gap-10">
        {/* Left Text */}
        <div className="lg:w-1/2 w-full space-y-6 pb-10">
          <HelloBox />

          <h1 className="text-4xl sm:text-5xl lg:text-5xl font-bold text-[#263650] leading-tight">
            Saya <span className="text-[#FD853A]">Zolla Perdana</span>,<br />
            Software Engineering dan Penulis.
          </h1>

          <p className="text-gray-600 text-base leading-relaxed max-w-xl">
            Mahasiswa Sarjana Terapan Teknologi Rekayasa Perangkat Lunak di Sekolah Vokasi IPB University. Aktif mengikuti berbagai kompetisi dan menjelajahi tantangan di bidang teknologi, lingkungan, dan pendidikan melalui pendekatan yang kreatif dan inovatif.
          </p>

          <a
            href="https://drive.google.com/drive/folders/1EhEvBS-iIfQeeEwjsmT3CbLtlw-eXeQr"
            target="_blank"
            rel="noopener noreferrer"
            className="relative w-[300px] block group"
          >
            {/* Background Orange */}
            <div className="bg-[#FD853A] h-[42px] w-[230px] rounded-full"></div>

            {/* Button Biru Tua */}
            <div className="absolute top-0 left-0 bg-[#263650] text-white rounded-full h-[42px] w-[160px] flex items-center justify-between pl-6 pr-10 z-10">
              <span className="text-sm md:text-base whitespace-nowrap">
                Lihat CV Saya
              </span>
            </div>

            {/* Icon Panah + Bulatan Putih */}
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
          </a>
        </div>

        {/* Right Image */}
        <div className="relative w-full lg:w-1/2 flex justify-center items-end lg:items-center mt-10">
          <div className="absolute -z-10 w-[300px] h-[300px] lg:w-[400px] lg:h-[400px]" />
          <Image
            src="/img/gambar_home.png"
            alt="Zolla Perdana"
            width={450}
            height={600}
            // className="object-cover h-[700px] !h-[700px]"
            className="relative z-10 object-cover"
            priority
          />
        </div>
      </div>

      {/* === Marquee Section === */}
      <div className="relative w-full overflow-visible">
        {/* Miring */}
        <div className="bg-[#263650] -rotate-[2.1deg] origin-bottom h-[60px] w-[120%] absolute -left-10 -translate-y-2 z-10"></div>
        {/* Lurus */}
        <div className="bg-[#FD853A] py-4 relative z-10 overflow-hidden whitespace-nowrap">
          <div className="marquee-track">
            <span className="mx-8 text-white font-medium text-lg tracking-widest">
              UI/UX Design
            </span>
            <span className="mx-8 text-white font-medium text-lg tracking-widest">
              Website Design
            </span>
            <span className="mx-8 text-white font-medium text-lg tracking-widest">
              Fullstack Developer
            </span>
            <span className="mx-8 text-white font-medium text-lg tracking-widest">
              Writing
            </span>
            <span className="mx-8 text-white font-medium text-lg tracking-widest">
              Research
            </span>
            <span className="mx-8 text-white font-medium text-lg tracking-widest">
              Problem Solving
            </span>
            <span className="mx-8 text-white font-medium text-lg tracking-widest">
              UI/UX Design
            </span>
            <span className="mx-8 text-white font-medium text-lg tracking-widest">
              Website Design
            </span>
            <span className="mx-8 text-white font-medium text-lg tracking-widest">
              Fullstack Developer
            </span>
            <span className="mx-8 text-white font-medium text-lg tracking-widest">
              Writing
            </span>
            <span className="mx-8 text-white font-medium text-lg tracking-widest">
              Research
            </span>
            <span className="mx-8 text-white font-medium text-lg tracking-widest">
              Problem Solving
            </span>
          </div>
          <div className="marquee-track">
            <span className="mx-8 text-white font-medium text-lg tracking-widest">
              UI/UX Design
            </span>
            <span className="mx-8 text-white font-medium text-lg tracking-widest">
              Website Design
            </span>
            <span className="mx-8 text-white font-medium text-lg tracking-widest">
              Fullstack Developer
            </span>
            <span className="mx-8 text-white font-medium text-lg tracking-widest">
              Writing
            </span>
            <span className="mx-8 text-white font-medium text-lg tracking-widest">
              Research
            </span>
            <span className="mx-8 text-white font-medium text-lg tracking-widest">
              Problem Solving
            </span>
            <span className="mx-8 text-white font-medium text-lg tracking-widest">
              UI/UX Design
            </span>
            <span className="mx-8 text-white font-medium text-lg tracking-widest">
              Website Design
            </span>
            <span className="mx-8 text-white font-medium text-lg tracking-widest">
              Fullstack Developer
            </span>
            <span className="mx-8 text-white font-medium text-lg tracking-widest">
              Writing
            </span>
            <span className="mx-8 text-white font-medium text-lg tracking-widest">
              Research
            </span>
            <span className="mx-8 text-white font-medium text-lg tracking-widest">
              Problem Solving
            </span>
          </div>
        </div>
      </div>

      {/* === Services Section === */}
      <Services />
    </section>
  );
}
