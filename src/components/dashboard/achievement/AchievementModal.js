"use client";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import Dropzone from "react-dropzone";
import { FiX } from "react-icons/fi";
import Swal from "sweetalert2";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

export default function AchievementModal({
  isOpen,
  onClose,
  onSubmit,
  initialData,
}) {
  const [form, setForm] = useState({
    type: "kompetisi",
    title: "",
    event: "",
    date: "",
    logo: "",
  });

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (initialData) setForm(initialData);
    else
      setForm({ type: "kompetisi", title: "", event: "", date: "", logo: "" });
  }, [initialData, isOpen]);

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleDrop = async (acceptedFiles) => {
    const file = acceptedFiles[0];
    const fileExt = file.name.split(".").pop();
    const fileName = `${Date.now()}.${fileExt}`;
    const filePath = `${fileName}`;

    const { error: uploadError } = await supabase.storage
      .from("achievement-images")
      .upload(filePath, file);

    if (uploadError) {
      console.error("Upload gagal:", uploadError.message);
      Swal.fire("Error", "Upload gambar gagal", "error");
      return;
    }

    const { data } = supabase.storage
      .from("achievement-images")
      .getPublicUrl(filePath);

    setForm((prev) => ({ ...prev, logo: data.publicUrl }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const method = initialData ? "PUT" : "POST";

      const res = await fetch("/api/achievements", {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const result = await res.json();
      if (!res.ok) {
        Swal.fire("Gagal", result.error || "Terjadi kesalahan", "error");
        return;
      }

      onSubmit(result); // supaya update state di table
      onClose(); // tutup modal
    } catch (err) {
      console.error(err);
      Swal.fire("Error", "Terjadi kesalahan", "error");
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  return createPortal(
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center px-4">
      <div className="bg-white rounded-xl p-6 w-full max-w-lg shadow-lg space-y-4">
        <div className="flex justify-between items-center mb-2">
          <h2 className="text-xl font-bold">
            {initialData ? "Edit" : "Tambah"} Pencapaian
          </h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-red-500"
          >
            <FiX size={24} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-3">
          <select
            name="type"
            value={form.type}
            onChange={handleChange}
            className="input w-full"
          >
            <option value="kompetisi">Kompetisi</option>
            <option value="organisasi">Organisasi</option>
          </select>

          <input
            name="title"
            value={form.title}
            onChange={handleChange}
            required
            placeholder="Judul"
            className="input w-full"
          />
          <input
            name="event"
            value={form.event}
            onChange={handleChange}
            required
            placeholder="Event"
            className="input w-full"
          />
          <input
            name="date"
            value={form.date}
            onChange={handleChange}
            required
            placeholder="Tanggal (e.g. Apr 2025)"
            className="input w-full"
          />

          <Dropzone onDrop={handleDrop} accept={{ "image/*": [] }}>
            {({ getRootProps, getInputProps }) => (
              <div
                {...getRootProps()}
                className="border border-dashed p-3 text-sm text-center text-gray-500 cursor-pointer rounded hover:bg-gray-50"
              >
                <input {...getInputProps()} />
                {form.logo ? (
                  <img
                    src={form.logo}
                    alt="preview"
                    className="w-16 h-16 object-cover mx-auto rounded-full"
                  />
                ) : (
                  <p>Drag & drop logo, atau klik untuk upload</p>
                )}
              </div>
            )}
          </Dropzone>

          <div className="flex justify-end gap-2">
            <button
              type="button"
              onClick={onClose}
              className="btn btn-secondary"
            >
              Batal
            </button>
            <button
              type="submit"
              className="btn btn-primary"
              disabled={loading}
            >
              {loading ? "Menyimpan..." : initialData ? "Update" : "Tambah"}
            </button>
          </div>
        </form>
      </div>
    </div>,
    document.body
  );
}
