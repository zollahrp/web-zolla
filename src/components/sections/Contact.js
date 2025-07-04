"use client";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { FaEnvelope, FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";
import Swal from "sweetalert2";

export default function Contact() {
  const form = useRef();
  const [status, setStatus] = useState(null);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_lchzkiu",
        "template_8gv148h",
        form.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      )
      .then(
        (result) => {
          form.current.reset();

          Swal.fire({
            icon: "success",
            title: "Berhasil!",
            text: "Auto-reply sudah dikirim ke email kamu. Terima kasih telah menghubungi Zolla",
            confirmButtonColor: "#FD853A",
          });
        },
        (error) => {
          console.error(error.text);

          Swal.fire({
            icon: "error",
            title: "Gagal mengirim!",
            text: "Maaf, terjadi kesalahan. Silakan coba lagi nanti.",
            confirmButtonColor: "#FD853A",
          });
        }
      );
  };

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
          ref={form}
          onSubmit={sendEmail}
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
            name="email"
            placeholder="Alamat email kamu"
            required
            className="flex-1 outline-none bg-transparent px-2 text-sm text-black"
          />

          <button
            type="submit"
            className="bg-[#FD853A] text-white font-semibold px-6 py-2 rounded-full hover:opacity-90 transition"
          >
            Kirim
          </button>
        </motion.form>

        {/* Status */}
        {status === "success" && (
          <p className="mt-4 text-green-600 font-medium">
            Pesan berhasil dikirim! Cek email kamu ya 😊
          </p>
        )}
        {status === "error" && (
          <p className="mt-4 text-red-600 font-medium">
            Ups, terjadi kesalahan. Coba lagi nanti ya.
          </p>
        )}

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
          {[
            {
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
            },
          ].map((item, i) => (
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
