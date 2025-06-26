"use client";
import { FaAward } from "react-icons/fa";

const achievements = {
  kompetisi: [
    {
      title: "Juara 1 Essay Competition National",
      event: "Kopma Fair Season 10 – UIN Malang",
      date: "April 2025",
    },
    {
      title: "Juara 1 Business Model Canvas National",
      event: "BEM Fakultas Ilmu Administrasi – Universitas Brawijaya",
      date: "Juni 2025",
    },
    {
      title: "Top 10 Business Model Canvas Competition",
      event: "Agrifest – Universitas Jember",
      date: "April 2024",
    },
    {
      title: "Top 5 Best Essay National Competition",
      event: "NEC (National Essay Competition) – UNNES",
      date: "Juni 2024",
    },
  ],
  organisasi: [
    {
      title: "Movers Facilitator",
      event: "UNPD Indonesia",
      date: "Juni 2025",
    },
    {
      title: "Staff Teraktif Se-LS Biro Departement Akpres",
      event: "BEM SV IPB",
      date: "Des 2024",
    },
  ],
};

export default function Achievement() {
  return (
    <section id="achievement" className="bg-white py-20">
      <div className="max-w-screen-xl mx-auto px-8 lg:px-20">
        {/* Title */}
        <div className="flex items-center gap-2 mb-2">
          <FaAward className="text-[#FD853A]" size={20} />
          <span className="font-semibold text-black">Achievement</span>
        </div>

        <h2 className="text-3xl sm:text-4xl font-bold mb-10">
          <span className="text-[#FD853A]">Pencapaian</span> yang saya peroleh
        </h2>

        {/* Grid Achievement */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
          {/* Kolom Kiri - Kompetisi */}
          <div className="divide-y-2 divide-black">
            {achievements.kompetisi.map((item, i) => (
              <div key={i} className="relative pl-8 border-l-2 border-black">
                {/* Dot */}
                <div className="absolute -left-[22px] top-1/2 -translate-y-1/2">
                  <div className="w-10 h-10 rounded-full border-2 border-[#263650] flex items-center justify-center bg-white">
                    <div className="w-6 h-6 rounded-full bg-gray-300" />
                  </div>
                </div>

                {/* Info */}
                <div className="py-6">
                  <h3 className="font-bold text-black">{item.title}</h3>
                  <p className="italic text-black/70">{item.event}</p>
                  <p className="text-sm text-black/50 mt-1">{item.date}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Kolom Kanan - Organisasi */}
          <div className="divide-y-2 divide-black">
            {achievements.organisasi.map((item, i) => (
              <div
                key={i}
                className="relative pr-8 border-r-2 border-black text-right"
              >
                {/* Dot */}
                <div className="absolute -right-[22px] top-1/2 -translate-y-1/2">
                  <div className="w-10 h-10 rounded-full border-2 border-[#263650] flex items-center justify-center bg-white">
                    <div className="w-6 h-6 rounded-full bg-gray-300" />
                  </div>
                </div>

                {/* Info */}
                <div className="py-6">
                  <h3 className="font-bold text-black">{item.title}</h3>
                  <p className="italic text-black/70">{item.event}</p>
                  <p className="text-sm text-black/50 mt-1">{item.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
