"use client";
import { FaEnvelope, FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-screen-md mx-auto text-center px-8">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl font-bold mb-8"
        >
          Memiliki ide, pertanyaan, atau kolaborasi? Saya terbuka untuk{" "}
          <span className="text-[#FD853A]">berdiskusi dan bekerja sama.</span>
        </motion.h2>

        {/* Form */}
        <motion.form
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row items-center gap-4 border-2 border-[#E5E7EB] rounded-full px-4 py-2 shadow-sm"
        >
          <div className="flex items-center justify-center w-10 h-10 bg-[#FD853A] rounded-full">
            <FaEnvelope className="text-white" />
          </div>

          <input
            type="email"
            placeholder="Masukkan alamat email"
            className="flex-1 outline-none bg-transparent px-2 text-sm text-black"
          />

          <button
            type="submit"
            className="bg-[#FD853A] text-white font-semibold px-6 py-2 rounded-full hover:opacity-90 transition"
          >
            Kirim
          </button>
        </motion.form>

        {/* Socials */}
        <motion.div
          className="flex justify-center flex-wrap gap-6 mt-6 text-sm text-[#263650] font-medium"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.15,
              },
            },
          }}
        >
          {[{
            icon: <FaInstagram />,
            label: "@zollahrp",
            href: "https://www.instagram.com/zollahrp",
          },
          {
            icon: <FaLinkedin />,
            label: "Zolla Perdana Putra Harahap",
            href: "https://www.linkedin.com/in/zolla/",
          },
          {
            icon: <FaGithub />,
            label: "zollahrp",
            href: "https://github.com/zollahrp",
          }].map((item, i) => (
            <motion.a
              key={i}
              href={item.href}
              target="_blank"
              className="flex items-center gap-2 hover:underline"
              variants={{
                hidden: { opacity: 0, y: 10 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              {item.icon} {item.label}
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
