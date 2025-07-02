"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaPenNib } from "react-icons/fa6";
import Link from "next/link";

export default function BlogPreview() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      const res = await fetch("/api/blogs");
      const data = await res.json();

      // Ambil maksimal 6 blog terbaru
      const latest = data
        .sort((a, b) => new Date(b.created_at) - new Date(a.created_at))
        .slice(0, 6);

      setBlogs(latest);
    };

    fetchBlogs();
  }, []);

  return (
    <section id="blogs" className="pt-20 bg-gray-50 py-20">
      {/* Header Section */}
      <div className="max-w-screen-xl mx-auto flex flex-col-reverse lg:flex-row items-center justify-between px-8 lg:px-20 gap-10">
        {/* Kiri - Teks */}
        <div className="w-full lg:w-1/2">
          <motion.div
            className="flex items-center gap-2 mb-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <FaPenNib className="text-[#FD853A]" size={20} />
            <span className="font-semibold text-black">Blogs Post</span>
          </motion.div>
          <motion.h2
            className="text-3xl sm:text-4xl font-bold"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <span className="text-black">Kumpulan</span>{" "}
            <span className="text-[#FD853A]">Blog</span>{" "}
            <span className="text-black">Terbaru</span>
          </motion.h2>
        </div>

        {/* Kanan - Tombol */}
        <motion.a
          href="/blog"
          className="relative w-[250px] group"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <div className="bg-[#FD853A] h-[42px] w-[250px] rounded-full" />
          <div className="absolute top-0 left-0 bg-[#263650] text-white rounded-full h-[42px] w-[180px] flex items-center justify-between pl-6 pr-10 z-10">
            <span className="text-sm md:text-base whitespace-nowrap">
              Lihat Semua Blogs
            </span>
          </div>
          <div className="absolute top-1/2 left-[190px] -translate-y-1/2 transform transition-transform duration-300 ease-in-out group-hover:translate-x-2 bg-white w-[38px] h-[38px] rounded-full flex items-center justify-center z-20">
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
        </motion.a>
      </div>

      {/* Grid Card Section */}
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-8 lg:px-20 mt-10">
        {blogs.map((blog, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{
              duration: 0.6,
              delay: i * 0.2,
              ease: "easeOut",
            }}
            viewport={{ once: true, amount: 0.3 }}
            className="bg-white rounded-xl shadow-sm overflow-hidden"
          >
            <Link
              href={`/blog/${encodeURIComponent(
                blog.title.toLowerCase().replace(/\s+/g, "-")
              )}`}
              className="block"
            >
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-52 object-cover"
              />
              <div className="p-4 space-y-3">
                <div className="flex items-center gap-2 text-sm">
                  <span className="bg-[#FD853A] text-white px-3 py-1 rounded-full">
                    {blog.category}
                  </span>
                  <span className="bg-[#FD853A] text-white px-3 py-1 rounded-full">
                    {new Date(blog.created_at).toLocaleDateString("id-ID", {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    })}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-black">{blog.title}</h3>
                <p className="text-sm text-black/70">{blog.excerpt}</p>
                <p className="text-sm font-semibold text-black border-t border-gray-200 pt-3">
                  Lihat postingan
                </p>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
