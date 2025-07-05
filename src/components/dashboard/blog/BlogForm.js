"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import { supabase } from "@/lib/supabaseClient";

// Biar TinyMCE aman dari hydration error (cuma jalan di client)
const Editor = dynamic(
  () => import("@tinymce/tinymce-react").then((mod) => mod.Editor),
  { ssr: false }
);

export default function BlogForm({ onSubmit }) {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [content, setContent] = useState("");

  const [image, setImage] = useState("");
  const [excerpt, setExcerpt] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const slug = title
      .toLowerCase()
      .replace(/[^\w\s-]/g, "") // hapus karakter aneh
      .replace(/\s+/g, "-"); // ganti spasi ke strip

    const { data, error } = await supabase
      .from("blogs")
      .insert([{ title, slug, category, content, image, excerpt }]);

    if (error) return alert("Gagal simpan: " + error.message);
    alert("Berhasil disimpan!");
    setTitle("");
    setCategory("");
    setContent("");
    setImage("");
    setExcerpt("");
  };

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const fileExt = file.name.split(".").pop();
    const fileName = `${Date.now()}.${fileExt}`;
    const filePath = `blog/${fileName}`;

    let { error } = await supabase.storage
      .from("blog-images")
      .upload(filePath, file);

    if (error) {
      alert("Gagal upload gambar: " + error.message);
      return;
    }

    const { data } = supabase.storage
      .from("blog-images")
      .getPublicUrl(filePath);

    setImage(data.publicUrl); // langsung masukin ke form
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
      <input
        type="file"
        placeholder="URL Gambar Header"
        onChange={handleImageUpload}
        className="w-full p-2 border rounded"
      />
      {image && (
        <img
          src={image}
          alt="Preview"
          className="w-32 h-32 object-cover rounded border"
        />
      )}
      <textarea
        placeholder="Ringkasan blog (excerpt)"
        value={excerpt}
        onChange={(e) => setExcerpt(e.target.value)}
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
            "advlist autolink lists link image charmap preview anchor \
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
              console.log("Upload response:", data);

              if (data.location) {
                success(data.location); // HARUS `location`
              } else {
                failure("Upload berhasil tapi tidak dapat URL.");
              }
            } catch (err) {
              console.error("Upload error:", err);
              failure("Gagal upload gambar: " + err.message);

              console.log("Upload result:", data);
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
