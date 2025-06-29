"use client";

import { useState } from "react";
import { FiEdit, FiTrash2 } from "react-icons/fi";

export default function PortfolioTable() {
  const [projects, setProjects] = useState([
    {
      id: 1,
      title: "Judul Project",
      desc: "Deskripsi singkat project",
      category: "Website",
      date: "Jun 2025",
      image: "/img/blog_1.JPG",
    },
  ]);

  const [form, setForm] = useState({
    title: "",
    desc: "",
    category: "",
    date: "",
    image: "",
  });

  const [editId, setEditId] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleAdd = () => {
    if (editId !== null) {
      setProjects((prev) =>
        prev.map((p) => (p.id === editId ? { ...form, id: editId } : p))
      );
      setEditId(null);
    } else {
      setProjects([...projects, { ...form, id: Date.now() }]);
    }
    setForm({ title: "", desc: "", category: "", date: "", image: "" });
  };

  const handleEdit = (project) => {
    setForm(project);
    setEditId(project.id);
  };

  const handleDelete = (id) => {
    setProjects(projects.filter((p) => p.id !== id));
  };

  return (
    <div className="space-y-8">
      {/* Form */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input
          type="text"
          name="title"
          placeholder="Judul Project"
          value={form.title}
          onChange={handleChange}
          className="border px-4 py-2 rounded"
        />
        <input
          type="text"
          name="desc"
          placeholder="Deskripsi"
          value={form.desc}
          onChange={handleChange}
          className="border px-4 py-2 rounded"
        />
        <input
          type="text"
          name="category"
          placeholder="Kategori"
          value={form.category}
          onChange={handleChange}
          className="border px-4 py-2 rounded"
        />
        <input
          type="text"
          name="date"
          placeholder="Tanggal (Mis. Jun 2025)"
          value={form.date}
          onChange={handleChange}
          className="border px-4 py-2 rounded"
        />
        <input
          type="text"
          name="image"
          placeholder="URL Gambar"
          value={form.image}
          onChange={handleChange}
          className="border px-4 py-2 rounded col-span-full"
        />
        <button
          onClick={handleAdd}
          className="bg-[#FD853A] hover:bg-[#e0722e] text-white font-semibold py-2 px-4 rounded col-span-full"
        >
          {editId !== null ? "Update Project" : "Tambah Project"}
        </button>
      </div>

      {/* Tabel */}
      <div className="overflow-x-auto">
        <table className="w-full table-auto border text-sm">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-2 border">Gambar</th>
              <th className="p-2 border">Judul</th>
              <th className="p-2 border">Deskripsi</th>
              <th className="p-2 border">Kategori</th>
              <th className="p-2 border">Tanggal</th>
              <th className="p-2 border">Aksi</th>
            </tr>
          </thead>
          <tbody>
            {projects.map((item) => (
              <tr key={item.id}>
                <td className="p-2 border">
                  <img src={item.image} alt={item.title} className="w-16 h-16 object-cover rounded" />
                </td>
                <td className="p-2 border">{item.title}</td>
                <td className="p-2 border">{item.desc}</td>
                <td className="p-2 border">{item.category}</td>
                <td className="p-2 border">{item.date}</td>
                <td className="p-2 border space-x-2">
                  <button
                    onClick={() => handleEdit(item)}
                    className="text-blue-600 hover:text-blue-800"
                  >
                    <FiEdit />
                  </button>
                  <button
                    onClick={() => handleDelete(item.id)}
                    className="text-red-600 hover:text-red-800"
                  >
                    <FiTrash2 />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
