'use client';
import Image from 'next/image';
import { FiUser, FiDownload } from 'react-icons/fi';

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
            Who is <span className="text-[#FD853A]">Zolla Perdana</span>?
          </h2>

          <p className="text-black text-base sm:text-lg leading-relaxed mb-8">
            Mahasiswa Sarjana Terapan Teknologi Rekayasa Perangkat Lunak di Sekolah Vokasi IPB University yang memiliki nama lengkap Zolla Perdana Putra Harahap ini memiliki adaptif, penuh rasa ingin tahu, dan berjiwa inovator. Aktif mengejar tantangan di bidang teknologi, lingkungan, dan pendidikan dengan pendekatan kreatif dan inovatif.
          </p>

          {/* Stat */}
          <div className="flex gap-12 text-[#FD853A] font-bold text-3xl mb-8">
            <div>
              <p>10+</p>
              <p className="text-black text-sm font-medium">Project selesai</p>
            </div>
            <div>
              <p>24</p>
              <p className="text-black text-sm font-medium">Mengikuti Kompetisi</p>
            </div>
            <div>
              <p>2</p>
              <p className="text-black text-sm font-medium">Tahun pengalaman</p>
            </div>
          </div>

          {/* Button + Tanda tangan */}
          <div className="flex items-center gap-6">
            <a
              href="/cv.pdf"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#263650] text-white rounded-full border-2 border-[#FD853A] hover:bg-[#FD853A] hover:text-white transition-all duration-300"
              download
            >
              <FiDownload className="text-xl" />
              Download CV
            </a>
            <span className="text-[#FD853A] italic font-[cursive] text-xl">Zolla Perdana</span>
          </div>
        </div>
      </div>
    </section>
  );
}
