"use client";
import { useState } from "react";
import { Editor } from "@tinymce/tinymce-react";

export default function BlogForm({ onSubmit }) {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ title, category, content, id: Date.now() });
    setTitle("");
    setCategory("");
    setContent("");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 bg-white p-6 rounded shadow">
      <h2 className="text-xl font-semibold text-[#263650]">Tulis Blog Baru</h2>
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
      <Editor
        apiKey="no-api-key" // Lo bisa daftarin key gratis, tapi ini udah cukup buat lokal/dev
        value={content}
        onEditorChange={(newContent) => setContent(newContent)}
        init={{
          height: 300,
          menubar: false,
          plugins: "link image code preview lists",
          toolbar:
            "undo redo | formatselect | bold italic underline | alignleft aligncenter alignright | bullist numlist outdent indent | code preview",
        }}
      />
      <button type="submit" className="bg-[#FD853A] text-white px-4 py-2 rounded">
        Simpan Blog
      </button>
    </form>
  );
}
