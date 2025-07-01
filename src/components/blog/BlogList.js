"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { supabase } from "@/lib/supabaseClient";

export default function BlogList({ sort }) {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      const { data, error } = await supabase
        .from("blogs")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) console.error("Gagal ambil data:", error.message);
      else setBlogs(data);
    };

    fetchBlogs();
  }, []);

  const sortedBlogs = [...blogs].sort((a, b) => {
    return sort === "newest"
      ? new Date(b.created_at) - new Date(a.created_at)
      : new Date(a.created_at) - new Date(b.created_at);
  });

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 py-10">
      {sortedBlogs.map((blog, i) => (
        <motion.div
          key={blog.id || i}
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
  );
}
