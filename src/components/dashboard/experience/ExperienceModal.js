"use client";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import Swal from "sweetalert2"; // ⬅️ ini import sweetalert2

export default function ExperienceModal({
  isOpen,
  onClose,
  onSubmit,
  initialData,
}) {
  const [formData, setFormData] = useState({
    company: "",
    period: "",
    position: "",
    desc: "",
  });

  useEffect(() => {
    if (initialData) setFormData(initialData);
    else setFormData({ company: "", period: "", position: "", desc: "" });
  }, [initialData, isOpen]);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const method = initialData ? "PUT" : "POST";

      const res = await fetch("/api/experiences", {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(
          initialData ? { ...formData, id: initialData.id } : formData
        ),
      });

      const result = await res.json();
      if (!res.ok) {
        Swal.fire("Gagal", result.error || "Terjadi kesalahan", "error");
        return;
      }

      onSubmit(result);
      onClose();

      Swal.fire({
        icon: "success",
        title: initialData ? "Data Diperbarui" : "Data Ditambahkan",
        text: "Pengalaman kerja berhasil disimpan.",
        timer: 1500,
        showConfirmButton: false,
      });
    } catch (err) {
      console.error(err);
      Swal.fire("Error", "Terjadi kesalahan", "error");
    }
  };

  if (!isOpen) return null;

  return createPortal(
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur">
      <div className="bg-white rounded-xl w-full max-w-lg p-6 shadow-lg relative">
        <h2 className="text-lg font-semibold mb-4 text-[#263650]">
          {initialData ? "Edit Pengalaman" : "Tambah Pengalaman"}
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            name="company"
            value={formData.company}
            onChange={handleChange}
            placeholder="Nama Perusahaan"
            required
            className="w-full border p-2 rounded"
          />
          <input
            name="period"
            value={formData.period}
            onChange={handleChange}
            placeholder="Periode"
            required
            className="w-full border p-2 rounded"
          />
          <input
            name="position"
            value={formData.position}
            onChange={handleChange}
            placeholder="Posisi"
            required
            className="w-full border p-2 rounded"
          />
          <input
            name="desc"
            value={formData.desc}
            onChange={handleChange}
            placeholder="Deskripsi Singkat"
            required
            className="w-full border p-2 rounded"
          />

          <div className="flex justify-end gap-2 mt-4">
            <button
              type="button"
              onClick={onClose}
              className="bg-gray-300 text-black px-4 py-2 rounded"
            >
              Batal
            </button>
            <button
              type="submit"
              className="bg-[#FD853A] text-white px-4 py-2 rounded"
            >
              {initialData ? "Update" : "Tambah"}
            </button>
          </div>
        </form>
      </div>
    </div>,
    document.body
  );
}
