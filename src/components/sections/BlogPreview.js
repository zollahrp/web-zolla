"use client";
import Image from "next/image";
import { FaPenNib } from "react-icons/fa6";

const blogs = [
  {
    title: "Integer Maecenas Eget Viverra",
    category: "Website",
    date: "6 Juni 2025",
    excerpt:
      "Aenean eleifend ante maecenas pulvinar montes lorem et pede dis dolor pretium donec dictum. Vici consequat justo enim. Venenatis eget adipiscing luctus lorem.",
    image: "/img/blog_1.jpg",
  },
  {
    title: "Aenean eleifend ante maecenas",
    category: "Website",
    date: "6 Juni 2025",
    excerpt:
      "Aenean eleifend ante maecenas pulvinar montes lorem et pede dis dolor pretium donec dictum. Vici consequat justo enim. Venenatis eget adipiscing luctus lorem.",
    image: "/img/blog_1.jpg",
  },
  {
    title: "Integer Maecenas Eget Viverra",
    category: "Website",
    date: "6 Juni 2025",
    excerpt:
      "Aenean eleifend ante maecenas pulvinar montes lorem et pede dis dolor pretium donec dictum. Vici consequat justo enim. Venenatis eget adipiscing luctus lorem.",
    image: "/img/blog_1.jpg",
  },
];

export default function BlogPreview() {
  return (
    <section className="pt-20 bg-gray-50">
      {/* Header Section */}
      <div className="max-w-screen-xl mx-auto flex flex-col-reverse lg:flex-row items-center justify-between px-8 lg:px-20 gap-10">
        {/* Kiri - Teks */}
        <div className="w-full lg:w-1/2">
          <div className="flex items-center gap-2 mb-2">
            <FaPenNib className="text-[#FD853A]" size={20} />
            <span className="font-semibold text-black">Blogs</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold">
            <span className="text-[#FD853A]">Blog</span>{" "}
            <span className="text-black">Terbaru</span>
          </h2>
        </div>

        {/* Kanan - Tombol */}
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
          <button className="flex items-center gap-2 bg-[#263650] text-white px-6 py-3 rounded-full text-sm font-semibold shadow-md hover:opacity-90 transition">
            Lihat semua blog
            <span className="inline-block bg-[#FD853A] text-white rounded-full p-2 ml-2">
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                strokeWidth={3}
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </span>
          </button>
        </div>
      </div>

      {/* Grid Card Section */}
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-8 lg:px-20 mt-10">
        {blogs.map((blog, i) => (
          <div key={i} className="bg-white rounded-xl shadow-sm overflow-hidden border">
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
                  {blog.date}
                </span>
              </div>
              <h3 className="text-xl font-bold text-black">{blog.title}</h3>
              <p className="text-sm text-black/70">{blog.excerpt}</p>
              <p className="text-sm font-semibold text-black border-t border-gray-200 pt-3">
                Lihat postingan
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
