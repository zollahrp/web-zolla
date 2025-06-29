"use client";
import { useState } from "react";
import { FaAward } from "react-icons/fa";

export default function AchievementPage() {
  const [data, setData] = useState({
    kompetisi: [],
    organisasi: [],
  });

  const [form, setForm] = useState({
    type: "kompetisi", // kompetisi / organisasi
    title: "",
    event: "",
    date: "",
    logo: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleAdd = () => {
    if (!form.title || !form.event || !form.date) return alert("Lengkapi form!");
    const newData = { ...data };
    newData[form.type].push({ ...form });
    setData(newData);
    setForm({ type: "kompetisi", title: "", event: "", date: "", logo: "" });
  };

  const handleDelete = (type, index) => {
    const updated = { ...data };
    updated[type].splice(index, 1);
    setData(updated);
  };

  return (
    <div className="p-6">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-[#263650] flex items-center gap-2">
          <FaAward className="text-[#FD853A]" />
          Achievement Settings
        </h2>
      </div>

      {/* Form Tambah Data */}
      <div className="bg-white p-4 rounded shadow mb-8">
        <h3 className="text-lg font-semibold mb-4">Tambah Pencapaian</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
          <select
            name="type"
            value={form.type}
            onChange={handleChange}
            className="border px-3 py-2 rounded"
          >
            <option value="kompetisi">Kompetisi</option>
            <option value="organisasi">Organisasi</option>
          </select>
          <input
            type="text"
            name="title"
            placeholder="Judul"
            value={form.title}
            onChange={handleChange}
            className="border px-3 py-2 rounded"
          />
          <input
            type="text"
            name="event"
            placeholder="Event"
            value={form.event}
            onChange={handleChange}
            className="border px-3 py-2 rounded"
          />
          <input
            type="text"
            name="date"
            placeholder="Tanggal"
            value={form.date}
            onChange={handleChange}
            className="border px-3 py-2 rounded"
          />
          <input
            type="text"
            name="logo"
            placeholder="URL Logo (opsional)"
            value={form.logo}
            onChange={handleChange}
            className="border px-3 py-2 rounded"
          />
        </div>
        <button
          onClick={handleAdd}
          className="bg-[#FD853A] text-white px-6 py-2 rounded hover:bg-[#e47b2f]"
        >
          Tambah
        </button>
      </div>

      {/* Tabel Kompetisi */}
      <div className="mb-10">
        <h4 className="text-lg font-bold mb-4">🏆 Kompetisi</h4>
        {data.kompetisi.length === 0 ? (
          <p className="text-gray-500 italic">Belum ada data.</p>
        ) : (
          <div className="space-y-4">
            {data.kompetisi.map((item, i) => (
              <div
                key={i}
                className="flex justify-between items-center border p-4 rounded bg-white"
              >
                <div>
                  <h3 className="font-semibold">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.event}</p>
                  <p className="text-sm text-gray-400">{item.date}</p>
                </div>
                <button
                  onClick={() => handleDelete("kompetisi", i)}
                  className="text-red-500 hover:underline"
                >
                  Hapus
                </button>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Tabel Organisasi */}
      <div>
        <h4 className="text-lg font-bold mb-4">📌 Organisasi</h4>
        {data.organisasi.length === 0 ? (
          <p className="text-gray-500 italic">Belum ada data.</p>
        ) : (
          <div className="space-y-4">
            {data.organisasi.map((item, i) => (
              <div
                key={i}
                className="flex justify-between items-center border p-4 rounded bg-white"
              >
                <div>
                  <h3 className="font-semibold">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.event}</p>
                  <p className="text-sm text-gray-400">{item.date}</p>
                </div>
                <button
                  onClick={() => handleDelete("organisasi", i)}
                  className="text-red-500 hover:underline"
                >
                  Hapus
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
