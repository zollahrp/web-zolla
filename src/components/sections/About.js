"use client";
import Image from "next/image";
import { FiUser, FiDownload } from "react-icons/fi";

export default function About() {
  return (
    <section id="about" className="bg-[#F2F4F7] py-20">
      <div className="max-w-screen-xl mx-auto flex flex-col lg:flex-row items-center justify-between px-8 lg:px-20 gap-12">
        {/* Left - Foto */}
        <div className="w-full lg:w-2/4 flex justify-center relative">
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
        </div>

        {/* Right - Konten */}
        <div className="w-full lg:w-3/4">
          {/* Icon dan Title */}
          <div className="flex items-center gap-2 mb-2">
            <FiUser className="text-[#FD853A]" size={20} />
            <span className="font-semibold text-black">About Me</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Siapa itu <span className="text-[#FD853A]">Zolla Perdana</span>?
          </h2>

          <p className="text-black text-base sm:text-lg leading-relaxed mb-8">
            Seorang Mahasiswa Sarjana Terapan Teknologi Rekayasa Perangkat Lunak
            di Sekolah Vokasi IPB University yang dikenal memiliki sifat
            adaptif, penuh rasa ingin tahu, dan berjiwa inovator. Aktif
            mengikuti berbagai kompetisi dan menjelajahi tantangan di bidang
            teknologi, lingkungan, dan pendidikan melalui pendekatan yang
            kreatif dan inovatif.
          </p>

          {/* Stat */}
          <div className="grid grid-cols-3 gap-6 text-center text-[#FD853A] font-bold text-3xl mb-8">
            {/* Project */}
            <div className="border-r border-gray-300">
              <p>10+</p>
              <p className="text-black text-sm font-medium mt-1">
                Project Selesai
              </p>
            </div>

            {/* Kompetisi */}
            <div className="border-r border-gray-300">
              <p>24</p>
              <p className="text-black text-sm font-medium mt-1">
                Mengikuti Kompetisi
              </p>
            </div>

            {/* Pengalaman */}
            <div>
              <p>2</p>
              <p className="text-black text-sm font-medium mt-1">
                Tahun Pengalaman
              </p>
            </div>
          </div>

          {/* Button + Tanda Tangan */}
          <div className="flex items-center gap-6">
            {/* Button Download CV */}
            <a
              href="/cv.pdf"
              download
              className="relative w-[300px] block group"
            >
              {/* Background Orange */}
              <div className="bg-[#FD853A] h-[42px] w-[250px] rounded-full"></div>

              {/* Button Biru Tua */}
              <div className="absolute top-0 left-0 bg-[#263650] text-white rounded-full h-[42px] w-[180px] flex items-center justify-between pl-6 pr-10 z-10">
                <span className="text-sm md:text-base whitespace-nowrap">
                  Download CV Saya
                </span>
              </div>

              {/* Icon Download + Bulatan Putih */}
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

            {/* Tanda Tangan */}
            <span className="text-[#FD853A] italic [font-family:'Great_Vibes',_cursive] text-xl">
              Zolla Perdana Putra Harahap
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
