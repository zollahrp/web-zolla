"use client";
import { useState, useEffect } from "react";

export default function ExperienceForm({ onAdd, onEdit, editingData, cancelEdit }) {
  const [formData, setFormData] = useState({
    company: "",
    period: "",
    position: "",
    desc: "",
  });

  useEffect(() => {
    if (editingData) setFormData(editingData);
  }, [editingData]);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingData) {
      onEdit(formData);
    } else {
      onAdd({ ...formData, id: Date.now() });
    }
    setFormData({ company: "", period: "", position: "", desc: "" });
  };

  return (
    <form onSubmit={handleSubmit} className="mb-6 bg-white p-4 shadow rounded">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input name="company" value={formData.company} onChange={handleChange} placeholder="Nama Perusahaan" required className="input" />
        <input name="period" value={formData.period} onChange={handleChange} placeholder="Periode" required className="input" />
        <input name="position" value={formData.position} onChange={handleChange} placeholder="Posisi" required className="input" />
        <input name="desc" value={formData.desc} onChange={handleChange} placeholder="Deskripsi" required className="input" />
      </div>
      <div className="flex mt-4 gap-2">
        <button type="submit" className="btn btn-primary">
          {editingData ? "Update" : "Tambah"}
        </button>
        {editingData && (
          <button type="button" onClick={cancelEdit} className="btn btn-secondary">
            Batal
          </button>
        )}
      </div>
    </form>
  );
}
