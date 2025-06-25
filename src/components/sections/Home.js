"use client";
import Image from "next/image";
import HelloBox from "../HelloBox";
import Services from './Services';
import { FiDownload } from "react-icons/fi";

export default function Home() {
  return (
    <section className="relative w-full overflow-hidden">
      {/* === Hero Section === */}
      <div className="max-w-screen-xl mx-auto flex flex-col-reverse lg:flex-row items-center justify-between pt-20 px-8 lg:px-20 gap-10">
        {/* Left Text */}
        <div className="lg:w-1/2 w-full space-y-6 pb-10">
          <HelloBox />

          <h1 className="text-4xl sm:text-5xl lg:text-5xl font-bold text-[#263650] leading-tight">
            I’m <span className="text-[#FD853A]">Zolla Perdana</span>,<br />
            Software Engineering and Witer.
          </h1>

          <p className="text-gray-600 text-base leading-relaxed max-w-xl">
            Mahasiswa Sarjana Terapan Teknologi Rekayasa Perangkat Lunak di
            Sekolah Vokasi IPB University yang adaptif, penuh rasa ingin tahu,
            dan berjiwa inovator. Aktif mengejar tantangan di bidang teknologi,
            lingkungan, dan pendidikan dengan pendekatan kreatif dan inovatif.
          </p>

          <a
            href="/cv.pdf"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#263650] text-white rounded-full border-2 border-[#FD853A] hover:bg-[#FD853A] hover:text-white transition-all duration-300 w-fit"
            download
          >
            Lihat CV Saya
            <FiDownload className="text-xl" />
          </a>
        </div>

        {/* Right Image */}
        <div className="relative w-full lg:w-1/2 flex justify-center items-end lg:items-center mt-10">
          <div className="absolute -z-10 w-[300px] h-[300px] lg:w-[400px] lg:h-[400px]" />
          <Image
            src="/img/gambar_home.png"
            alt="Zolla Perdana"
            width={400}
            height={600}
            // className="object-cover h-[700px] !h-[700px]"
            className="relative z-10 object-cover"
            priority
          />
        </div>
      </div>

      {/* === Marquee Section === */}
      <div className="relative w-full -mt-4 overflow-visible">
        {/* Miring */}
        <div className="bg-[#263650] -rotate-[2.1deg] origin-bottom h-[60px] w-[120%] absolute -left-10 -translate-y-2 z-10"></div>
        {/* Lurus */}
        <div className="bg-[#FBAA06] py-4 relative z-10 overflow-hidden whitespace-nowrap">
          <div className="marquee-track">
            <span className="mx-8 text-white font-medium text-lg tracking-widest">App Design</span>
            <span className="mx-8 text-white font-medium text-lg tracking-widest">Website Design</span>
            <span className="mx-8 text-white font-medium text-lg tracking-widest">UI UX Design</span>
            <span className="mx-8 text-white font-medium text-lg tracking-widest">App Design</span>
            <span className="mx-8 text-white font-medium text-lg tracking-widest">Website Design</span>
            <span className="mx-8 text-white font-medium text-lg tracking-widest">UI UX Design</span>
          </div>
          <div className="marquee-track">
            <span className="mx-8 text-white font-medium text-lg tracking-widest">App Design</span>
            <span className="mx-8 text-white font-medium text-lg tracking-widest">Website Design</span>
            <span className="mx-8 text-white font-medium text-lg tracking-widest">UI UX Design</span>
            <span className="mx-8 text-white font-medium text-lg tracking-widest">App Design</span>
            <span className="mx-8 text-white font-medium text-lg tracking-widest">Website Design</span>
            <span className="mx-8 text-white font-medium text-lg tracking-widest">UI UX Design</span>
          </div>
        </div>
      </div>

      {/* === Services Section === */}
        <Services />
    </section>
  );
}
