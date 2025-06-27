"use client";
import Link from "next/link";
import { motion } from "framer-motion";

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

export default function BlogList({ sort }) {
  const sortedBlogs = [...blogs].sort((a, b) => {
    return sort === "newest"
      ? new Date(b.date) - new Date(a.date)
      : new Date(a.date) - new Date(b.date);
  });

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 py-10">
      {sortedBlogs.map((blog, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{
            duration: 0.6,
            delay: i * 0.2,
            ease: "easeOut",
          }}
        >
          <Link
            href={`/blog/${encodeURIComponent(blog.title.toLowerCase().replace(/\s+/g, "-"))}`}
            className="block bg-white rounded-s shadow-sm overflow-hidden hover:shadow-md transition"
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
                  {blog.date}
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
  );
}
