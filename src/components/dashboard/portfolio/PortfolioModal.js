"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import Dropzone from "react-dropzone";
import { FiX } from "react-icons/fi";
import { supabase } from "@/lib/supabaseClient";
import Swal from "sweetalert2";

export default function PortfolioModal({
  isOpen,
  onClose,
  onSubmit,
  initialData,
}) {
  const [form, setForm] = useState({
    title: "",
    desc: "",
    category: [],
    date: "",
    image: [],
    tech: [],
    link: "",
  });

  const [allCategories, setAllCategories] = useState([
    "Website",
    "Mobile App",
    "UI/UX",
    "Tulisan",
    "Motion Graphics",
    "Powerpoint",
  ]);
  const [newCategory, setNewCategory] = useState("");

  const [allTechs] = useState([
    "html",
    "css",
    "js",
    "react",
    "next",
    "node",
    "tailwind",
    "figma",
  ]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await fetch("/api/portfolio/categories");
        const data = await res.json();
        if (Array.isArray(data)) {
          setAllCategories(data.map((cat) => cat.name));
        }
      } catch (error) {
        console.error("Gagal ambil kategori:", error);
      }
    };
    fetchCategories();
  }, []);

  useEffect(() => {
    if (isOpen) {
      if (initialData) {
        setForm({
          title: initialData.title || "",
          desc: initialData.desc || "",
          category: initialData.category || "",
          date: initialData.date || "",
          image: Array.isArray(initialData.image) ? initialData.image : [],
          tech: Array.isArray(initialData.tech) ? initialData.tech : [],
          id: initialData.id, 
          link: initialData.link || "",
        });
      } else {
        setForm({
          title: "",
          desc: "",
          category: [],
          date: "",
          image: [],
          tech: [],
          link: "",
        });
      }
    }
  }, [initialData, isOpen]);

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const uploadImagesToSupabase = async (files) => {
    const uploadedUrls = [];

    for (const file of files) {
      const fileExt = file.name.split(".").pop();
      const fileName = `${Date.now()}-${Math.random()}.${fileExt}`;

      const { error } = await supabase.storage
        .from("project-images")
        .upload(fileName, file);

      if (error) throw new Error("Upload gagal: " + error.message);

      const { data: publicUrl } = supabase.storage
        .from("project-images")
        .getPublicUrl(fileName);

      uploadedUrls.push(publicUrl.publicUrl);
    }

    return uploadedUrls;
  };

  const handleTechToggle = (tech) => {
    setForm((prev) => ({
      ...prev,
      tech: (prev.tech || []).includes(tech)
        ? prev.tech.filter((t) => t !== tech)
        : [...(prev.tech || []), tech],
    }));
  };

  const handleAddCategory = async () => {
    if (newCategory && !allCategories.includes(newCategory)) {
      setAllCategories((prev) => [...prev, newCategory]);
      setForm((prev) => ({ ...prev, category: newCategory }));

      await fetch("/api/portfolio/categories", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: newCategory }),
      });

      setNewCategory("");
    }
  };

  const handleImageDrop = (acceptedFiles) => {
    const imagePreviews = acceptedFiles.map((file) =>
      Object.assign(file, {
        preview: URL.createObjectURL(file),
      })
    );
    setForm((prev) => ({
      ...prev,
      image: [...(prev.image || []), ...imagePreviews],
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newImages = form.image.filter((img) => typeof img !== "string");
    const oldImages = form.image.filter((img) => typeof img === "string");

    let uploadedUrls = [];
    if (newImages.length > 0) {
      try {
        uploadedUrls = await uploadImagesToSupabase(newImages);
      } catch (error) {
        Swal.fire({
          icon: "error",
          title: "Upload Gagal",
          text: error.message,
        });
        return;
      }
    }

    const payload = {
      title: form.title || "",
      desc: form.desc || "",
      category: form.category || "",
      date: form.date || "",
      tech: Array.isArray(form.tech) ? form.tech : [],
      image: [...oldImages, ...uploadedUrls],
      link: form.link || "",
    };

    try {
      const endpoint = form.id ? `/api/portfolio/${form.id}` : "/api/portfolio";
      const method = form.id ? "PUT" : "POST";

      const res = await fetch(endpoint, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) throw new Error("Gagal menyimpan ke database");

      Swal.fire({
        icon: "success",
        title: "Berhasil!",
        text: form.id
          ? "Project berhasil diupdate."
          : "Project berhasil ditambahkan.",
        timer: 1500,
        showConfirmButton: false,
      });

      onSubmit();
      onClose();
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Gagal",
        text: error.message,
      });
    }
  };

  if (!isOpen) return null;

  return createPortal(
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center px-4">
      <div className="bg-white rounded-xl p-6 w-full max-w-2xl shadow-lg space-y-4">
        <div className="flex justify-between items-center mb-2">
          <h2 className="text-xl font-bold">Form Portofolio</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-red-500"
          >
            <FiX size={24} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            name="title"
            value={form.title}
            onChange={handleChange}
            required
            placeholder="Judul Project"
            className="input w-full"
          />
          <input
            name="desc"
            value={form.desc}
            onChange={handleChange}
            required
            placeholder="Deskripsi"
            className="input w-full"
          />
          <input
            name="date"
            value={form.date}
            onChange={handleChange}
            required
            placeholder="Tanggal (e.g. Jul 2025)"
            className="input w-full"
          />

          {/* Kategori */}
          <div className="space-y-2">
            <label className="block font-medium text-sm">Kategori</label>
            <div className="flex flex-wrap gap-2">
              {allCategories.map((cat) => (
                <label key={cat} className="flex items-center gap-1">
                  <input
                    type="checkbox"
                    value={cat}
                    checked={form.category.includes(cat)}
                    onChange={(e) => {
                      const checked = e.target.checked;
                      setForm((prev) => ({
                        ...prev,
                        category: checked
                          ? [...prev.category, cat]
                          : prev.category.filter((c) => c !== cat),
                      }));
                    }}
                  />
                  <span className="text-sm">{cat}</span>
                </label>
              ))}
            </div>
            <div className="flex gap-2 mt-1">
              <input
                type="text"
                placeholder="Tambah kategori baru"
                value={newCategory}
                onChange={(e) => setNewCategory(e.target.value)}
                className="input flex-1"
              />
              <button
                type="button"
                onClick={handleAddCategory}
                className="btn btn-secondary"
              >
                Tambah
              </button>
            </div>
          </div>

          {/* Teknologi */}
          <div>
            <label className="block font-medium text-sm mb-1">Teknologi</label>
            <div className="flex flex-wrap gap-2">
              {allTechs.map((tech) => (
                <button
                  key={tech}
                  type="button"
                  onClick={() => handleTechToggle(tech)}
                  className={`border px-2 py-1 rounded text-sm ${
                    (form.tech || []).includes(tech)
                      ? "bg-[#FD853A] text-white border-[#FD853A]"
                      : "text-gray-700"
                  }`}
                >
                  {tech.toUpperCase()}
                </button>
              ))}
            </div>
          </div>

          <input
            name="link"
            value={form.link || ""}
            onChange={handleChange}
            placeholder="Tautan proyek (optional)"
            className="input w-full"
          />

          {/* Upload Gambar */}
          <div>
            <label className="block font-medium text-sm mb-1">
              Upload Gambar
            </label>
            <Dropzone onDrop={handleImageDrop} accept={{ "image/*": [] }}>
              {({ getRootProps, getInputProps }) => (
                <div
                  {...getRootProps()}
                  className="border border-dashed border-gray-400 p-4 rounded-lg cursor-pointer text-center hover:bg-gray-50"
                >
                  <input {...getInputProps()} />
                  <p className="text-gray-600 text-sm">
                    Drag & drop gambar ke sini, atau klik untuk memilih
                  </p>
                </div>
              )}
            </Dropzone>

            {/* Preview */}
            <div className="flex gap-2 mt-3 flex-wrap">
              {(form.image || []).map((img, idx) => (
                <img
                  key={idx}
                  src={typeof img === "string" ? img : img.preview}
                  alt="preview"
                  className="w-20 h-20 object-cover rounded"
                />
              ))}
            </div>
          </div>

          <div className="flex justify-end gap-2">
            <button
              type="button"
              onClick={onClose}
              className="btn btn-secondary"
            >
              Batal
            </button>
            <button type="submit" className="btn btn-primary">
              {form.id ? "Update" : "Tambah"}
            </button>
          </div>
        </form>
      </div>
    </div>,
    document.body
  );
}
