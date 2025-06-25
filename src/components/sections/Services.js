'use client';
import { FiMonitor, FiLayout, FiCode, FiPenTool } from 'react-icons/fi';
import Experience from './Experience';

const services = [
  {
    icon: <FiLayout className="text-3xl text-[#263650]" />, // ukuran icon dikurangi juga
    title: 'UI/UX Design',
    description: 'Desain antarmuka dan pengalaman pengguna yang menarik dan intuitif.',
  },
  {
    icon: <FiMonitor className="text-3xl text-[#263650]" />,
    title: 'Website Design',
    description: 'Pembuatan desain website modern, responsif, dan cepat.',
  },
  {
    icon: <FiCode className="text-3xl text-[#263650]" />,
    title: 'Fullstack Developer',
    description: 'Pengembangan web dari sisi frontend dan backend secara menyeluruh.',
  },
  {
    icon: <FiPenTool className="text-3xl text-[#263650]" />,
    title: 'Creative Writing',
    description: 'Penulisan konten kreatif untuk esai, artikel, dan narasi branding.',
  },
];

export default function Services() {
  return (
    <section className="bg-white py-20" id="services">
      <div className="max-w-screen-xl mx-auto px-8 lg:px-20">
        {/* Header */}
        <div className="mb-20 text-left"> {/* <- jarak ditambah di sini */}
          <div className="flex items-center gap-2 mb-2">
            <span className="text-[#FD853A] text-xl">⚙</span>
            <span className="font-semibold text-gray-700">Services</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold">
            <span className="text-[#FD853A]">Services</span> <span className="text-[#263650]">I Provide</span>
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-24 gap-x-6 mt-10">
          {services.map((service, i) => (
            <div
              key={i}
              className="relative flex flex-col items-center text-center p-6 sm:p-8 rounded-3xl bg-gradient-to-b from-black/5 to-white"
            >
              <div className="relative w-20 h-20 sm:w-24 sm:h-24 lg:w-24 lg:h-24 -mt-16 sm:-mt-20 flex items-center justify-center rounded-full bg-white border border-black">
                {service.icon}
              </div>
              <h3 className="text-xl sm:text-2xl text-[#263650] font-semibold mt-8 sm:mt-10">{service.title}</h3>
              <p className="text-sm sm:text-base text-gray-600 mt-2">{service.description}</p>
            </div>
          ))}
        </div>
      </div>

      <Experience />
    </section>
  );
}
