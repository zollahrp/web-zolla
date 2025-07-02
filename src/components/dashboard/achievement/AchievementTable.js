"use client";
import { useEffect, useState } from "react";
import { FiEdit, FiTrash2, FiPlus } from "react-icons/fi";
import AchievementModal from "./AchievementModal";
import Swal from "sweetalert2";

export default function AchievementTable() {
  const [data, setData] = useState({
    kompetisi: [],
    organisasi: [],
  });

  const [modalOpen, setModalOpen] = useState(false);
  const [editing, setEditing] = useState(null);

  // 🔄 Fetch data dari Supabase
  const fetchData = async () => {
    try {
      const res = await fetch("/api/achievements");
      const result = await res.json();
      const grouped = { kompetisi: [], organisasi: [] };

      result.forEach((item) => {
        if (grouped[item.type]) grouped[item.type].push(item);
      });

      setData(grouped);
    } catch (err) {
      console.error("Gagal fetch data:", err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  // ✅ Tambah atau Update
  const handleAdd = async (item) => {
    try {
      const method = item.id ? "PUT" : "POST";

      const res = await fetch("/api/achievements", {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(item),
      });

      const result = await res.json();
      if (!res.ok) {
        Swal.fire("Gagal", result.error || "Terjadi kesalahan", "error");
        return;
      }

      fetchData(); // refresh ulang
      Swal.fire({
        icon: "success",
        title: "Berhasil!",
        text: item.id ? "Data diperbarui." : "Data ditambahkan.",
        timer: 1200,
        showConfirmButton: false,
      });
    } catch (err) {
      console.error(err);
      Swal.fire("Error", "Gagal menyimpan data", "error");
    }
  };

  // 🗑️ Delete dari Supabase
  const handleDelete = async (type, id) => {
    const confirm = await Swal.fire({
      title: "Hapus?",
      text: "Data yang dihapus tidak bisa dikembalikan.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#FD853A",
      cancelButtonColor: "#d33",
      confirmButtonText: "Ya, hapus!",
    });

    if (!confirm.isConfirmed) return;

    try {
      const res = await fetch(`/api/achievements?id=${id}`, { method: "DELETE" });
      const result = await res.json();
      if (!res.ok) {
        Swal.fire("Gagal", result.error || "Gagal hapus data", "error");
        return;
      }

      fetchData(); // refresh
      Swal.fire("Dihapus!", "Data berhasil dihapus.", "success");
    } catch (err) {
      console.error(err);
      Swal.fire("Error", "Terjadi kesalahan saat menghapus", "error");
    }
  };

  // UI builder
  const renderTable = (type, title) => (
    <div className="mb-10">
      <h4 className="text-lg font-bold mb-4">
        {type === "kompetisi" ? "🏆" : "📌"} {title}
      </h4>
      {data[type].length === 0 ? (
        <p className="text-gray-500 italic">Belum ada data.</p>
      ) : (
        <div className="space-y-4">
          {data[type].map((item) => (
            <div
              key={item.id}
              className="flex justify-between items-center border p-4 rounded bg-white"
            >
              <div className="flex gap-4 items-center">
                {item.logo && (
                  <img
                    src={item.logo}
                    alt="logo"
                    className="w-12 h-12 rounded-full object-cover border"
                  />
                )}
                <div>
                  <h3 className="font-semibold">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.event}</p>
                  <p className="text-sm text-gray-400">{item.date}</p>
                </div>
              </div>
              <div className="flex gap-2 text-lg">
                <button
                  onClick={() => {
                    setEditing(item);
                    setModalOpen(true);
                  }}
                  className="text-blue-600 hover:text-blue-800"
                >
                  <FiEdit />
                </button>
                <button
                  onClick={() => handleDelete(type, item.id)}
                  className="text-red-600 hover:text-red-800"
                >
                  <FiTrash2 />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );

  return (
    <div className="space-y-10">
      <div className="flex justify-end">
        <button
          onClick={() => {
            setEditing(null);
            setModalOpen(true);
          }}
          className="bg-[#FD853A] hover:bg-[#e47b2f] text-white font-semibold px-4 py-2 rounded flex items-center gap-2"
        >
          <FiPlus /> Tambah Pencapaian
        </button>
      </div>

      {renderTable("kompetisi", "Kompetisi")}
      {renderTable("organisasi", "Organisasi")}

      {modalOpen && (
        <AchievementModal
          isOpen={modalOpen}
          onClose={() => setModalOpen(false)}
          onSubmit={handleAdd}
          initialData={editing}
        />
      )}
    </div>
  );
}
