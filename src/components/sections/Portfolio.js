'use client';
import { FiArrowRight } from 'react-icons/fi';
import { FaStar } from 'react-icons/fa';

const projects = [
  {
    title: 'Judul Project',
    desc: 'Deskripsi singkat project',
    category: 'Website',
    date: 'Jun 2025',
    image: '/img/sample.jpg', // ganti dengan path sebenarnya
  },
  // tambahkan data lainnya
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

          <a
            href="/projects"
            className="inline-flex items-center gap-2 px-5 py-2 bg-[#263650] text-white rounded-full border-2 border-[#FD853A] hover:bg-[#FD853A] transition-all"
          >
            Lihat semua projects
            <FiArrowRight />
          </a>
        </div>

        {/* Grid Project */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <div key={i} className="bg-white rounded-2xl p-4 shadow-sm">
              {/* Gambar (placeholder) */}
              <div className="w-full h-58 bg-black rounded-xl mb-4" />

              {/* Label + Tanggal */}
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-semibold bg-[#FD853A] text-white px-3 py-1 rounded-full">
                  {project.category}
                </span>
                <span className="text-sm text-gray-500">{project.date}</span>
              </div>

              {/* Judul */}
              <h3 className="text-lg font-bold text-black">{project.title}</h3>
              <p className="text-sm text-gray-600">{project.desc}</p>

              {/* Icon panah */}
              <div className="flex justify-end mt-4">
                <div className="w-8 h-8 bg-[#263650] text-white flex items-center justify-center rounded-full hover:bg-[#FD853A] transition">
                  <FiArrowRight size={16} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
