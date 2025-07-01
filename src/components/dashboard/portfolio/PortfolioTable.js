"use client";

import { useState } from "react";
import { FiEdit, FiTrash2, FiPlus } from "react-icons/fi";
import PortfolioModal from "./PortfolioModal";
import Pagination from "../shared/Pagination.js";
import Swal from "sweetalert2";

export default function PortfolioTable() {
  const [projects, setProjects] = useState([
    {
      id: 1,
      title: "Judul Project",
      desc: "Deskripsi singkat project",
      category: "Website",
      date: "Jun 2025",
      image: ["/img/blog_1.JPG"],
      tech: ["html", "css", "js"],
    },
  ]);

  const [currentPage, setCurrentPage] = useState(1);
  const [modalOpen, setModalOpen] = useState(false);
  const [editingProject, setEditingProject] = useState(null);

  const perPage = 5;
  const totalPages = Math.ceil(projects.length / perPage);
  const displayedProjects = projects.slice(
    (currentPage - 1) * perPage,
    currentPage * perPage
  );

  const handleAdd = (project) => {
    if (project.id) {
      setProjects((prev) =>
        prev.map((p) => (p.id === project.id ? project : p))
      );
    } else {
      setProjects((prev) => [...prev, { ...project, id: Date.now() }]);
    }
    setModalOpen(false);
    setEditingProject(null);
    Swal.fire({
      icon: "success",
      title: "Berhasil",
      text: `Project berhasil ${project.id ? "diupdate" : "ditambahkan"}`,
      timer: 1500,
      showConfirmButton: false,
    });
  };

  const handleEdit = (project) => {
    setEditingProject(project);
    setModalOpen(true);
  };

  const handleDelete = (id) => {
    Swal.fire({
      title: "Hapus Project?",
      text: "Data yang dihapus tidak bisa dikembalikan!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#FD853A",
      cancelButtonColor: "#d33",
      confirmButtonText: "Ya, Hapus!",
    }).then((result) => {
      if (result.isConfirmed) {
        setProjects(projects.filter((p) => p.id !== id));
        Swal.fire({
          icon: "success",
          title: "Berhasil!",
          text: "Project berhasil dihapus.",
          timer: 1500,
          showConfirmButton: false,
        });
      }
    });
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-end">
        <button
          onClick={() => {
            setEditingProject(null);
            setModalOpen(true);
          }}
          className="bg-[#FD853A] hover:bg-[#e0722e] text-white font-semibold px-4 py-2 rounded flex items-center gap-2"
        >
          <FiPlus /> Tambah Project
        </button>
      </div>

      <div className="overflow-x-auto rounded-xl border border-gray-200 shadow">
        <table className="min-w-full text-sm text-left divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="p-4 font-semibold text-gray-700">Gambar</th>
              <th className="p-4 font-semibold text-gray-700">Judul</th>
              <th className="p-4 font-semibold text-gray-700">Deskripsi</th>
              <th className="p-4 font-semibold text-gray-700">Kategori</th>
              <th className="p-4 font-semibold text-gray-700">Teknologi</th>
              <th className="p-4 font-semibold text-gray-700">Tanggal</th>
              <th className="p-4 font-semibold text-gray-700">Aksi</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {displayedProjects.length === 0 && (
              <tr>
                <td colSpan="7" className="p-6 text-center text-gray-500">
                  Belum ada project ditambahkan.
                </td>
              </tr>
            )}
            {displayedProjects.map((item) => (
              <tr key={item.id} className="hover:bg-gray-50">
                <td className="p-4">
                  <img
                    src={item.image[0]}
                    alt={item.title}
                    className="w-16 h-16 object-cover rounded"
                  />
                </td>
                <td className="p-4">{item.title}</td>
                <td className="p-4">{item.desc}</td>
                <td className="p-4">{item.category}</td>
                <td className="p-4">
                  <div className="flex gap-1 items-center flex-wrap">
                    {item.tech.map((t) => (
                      <img
                        key={t}
                        src={`/icons/${t}.svg`}
                        alt={t}
                        className="w-5 h-5"
                        title={t.toUpperCase()}
                      />
                    ))}
                  </div>
                </td>
                <td className="p-4">{item.date}</td>
                <td className="p-4 flex gap-2">
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

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={(page) => setCurrentPage(page)}
      />

      {/* Modal */}
      {modalOpen && (
        <PortfolioModal
          isOpen={modalOpen}
          onClose={() => setModalOpen(false)}
          onSubmit={handleAdd}
          initialData={editingProject}
        />
      )}
    </div>
  );
}
