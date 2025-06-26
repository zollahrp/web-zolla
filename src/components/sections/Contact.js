import { FaEnvelope, FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";

export default function Contact() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-screen-md mx-auto text-center px-8">
        {/* Title */}
        <h2 className="text-3xl sm:text-4xl font-bold mb-8">
          Ingin terhubung dan berdiskusi?{" "}
          <span className="text-[#FD853A]">Kirim pesan</span>
        </h2>

        {/* Form */}
        <form className="flex flex-col sm:flex-row items-center gap-4 border-2 border-[#E5E7EB] rounded-full px-4 py-2 shadow-sm">
          {/* Icon Email */}
          <div className="flex items-center justify-center w-10 h-10 bg-[#FD853A] rounded-full">
            <FaEnvelope className="text-white" />
          </div>

          {/* Input */}
          <input
            type="email"
            placeholder="Masukkan alamat email"
            className="flex-1 outline-none bg-transparent px-2 text-sm text-black"
          />

          {/* Tombol Kirim */}
          <button
            type="submit"
            className="bg-[#FD853A] text-white font-semibold px-6 py-2 rounded-full hover:opacity-90 transition"
          >
            Kirim
          </button>
        </form>

        {/* Socials */}
        <div className="flex justify-center flex-wrap gap-6 mt-6 text-sm text-[#263650] font-medium">
          <a href="https://www.instagram.com/zollahrp" target="_blank" className="flex items-center gap-2 hover:underline">
            <FaInstagram /> @zollahrp
          </a>
          <a href="https://www.linkedin.com/in/zolla-perdana-putra-harahap" target="_blank" className="flex items-center gap-2 hover:underline">
            <FaLinkedin /> Zolla Perdana Putra Harahap
          </a>
          <a href="https://github.com/zollahrp" target="_blank" className="flex items-center gap-2 hover:underline">
            <FaGithub /> zollahrp
          </a>
        </div>
      </div>
    </section>
  );
}
