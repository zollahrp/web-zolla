"use client";

import { useState } from "react";
import dynamic from "next/dynamic";

// Biar TinyMCE aman dari hydration error (cuma jalan di client)
const Editor = dynamic(
  () => import("@tinymce/tinymce-react").then((mod) => mod.Editor),
  { ssr: false }
);

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
    <form
      onSubmit={handleSubmit}
      className="space-y-4 bg-white p-6 rounded shadow"
    >
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
        apiKey="rlskrql5lw0bg2cq2szokhqn2zror6f5sxgy4m53ek1h3z3d"
        value={content}
        onEditorChange={(newContent) => setContent(newContent)}
        init={{
          height: 500,
          menubar: true,
          plugins:
            "advlist autolink lists link image charmap print preview anchor \
            searchreplace visualblocks code fullscreen insertdatetime media table code help wordcount",
          toolbar:
            "undo redo | styleselect | fontselect fontsizeselect | " +
            "bold italic underline blockquote forecolor backcolor | " +
            "alignleft aligncenter alignright alignjustify | " +
            "bullist numlist outdent indent | link image media | " +
            "code preview fullscreen",

          automatic_uploads: true,
          paste_data_images: true,
          file_picker_types: "image",
          images_upload_handler: async (blobInfo, success, failure) => {
            const formData = new FormData();
            formData.append("file", blobInfo.blob(), blobInfo.filename());

            try {
              const res = await fetch("/api/upload", {
                method: "POST",
                body: formData,
              });
              const data = await res.json();
              success(data.url);
            } catch (err) {
              failure("Gagal upload gambar: " + err.message);
            }
          },
        }}
      />

      <button
        type="submit"
        className="bg-[#FD853A] text-white px-4 py-2 rounded"
      >
        Simpan Blog
      </button>
    </form>
  );
}
