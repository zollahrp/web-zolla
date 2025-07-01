"use client";

import { useState, useEffect } from "react";

export default function BlogModal({ blog, onClose, onSave }) {
  const [title, setTitle] = useState(blog.title);
  const [category, setCategory] = useState(blog.category);
  const [content, setContent] = useState(blog.content);
  const [excerpt, setExcerpt] = useState(blog.excerpt);
  const [image, setImage] = useState(blog.image);

  // Biar form keisi ulang saat ganti blog
  useEffect(() => {
    setTitle(blog.title);
    setCategory(blog.category);
    setContent(blog.content);
    setExcerpt(blog.excerpt);
    setImage(blog.image);
  }, [blog]);

  const handleSubmit = (e) => {
    e.preventDefault();

    onSave({
      id: blog.id,
      title,
      category,
      content,
      excerpt,
      image,
    });
  };

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded-md w-[90%] max-w-xl space-y-4 shadow-xl">
        <h2 className="text-xl font-semibold text-[#263650]">Edit Blog</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Judul"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full p-2 border rounded"
          />
          <input
            type="text"
            placeholder="Kategori"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full p-2 border rounded"
          />
          <input
            type="text"
            placeholder="URL Gambar Header"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            className="w-full p-2 border rounded"
          />
          <textarea
            placeholder="Ringkasan blog"
            value={excerpt}
            onChange={(e) => setExcerpt(e.target.value)}
            className="w-full p-2 border rounded"
          />
          <textarea
            placeholder="Konten (sementara, belum pakai editor)"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="w-full p-2 border rounded h-32"
          />

          <div className="flex justify-end gap-2">
            <button
              type="button"
              onClick={onClose}
              className="bg-gray-300 px-4 py-2 rounded"
            >
              Batal
            </button>
            <button
              type="submit"
              className="bg-[#FD853A] text-white px-4 py-2 rounded"
            >
              Simpan
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
