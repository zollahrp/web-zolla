"use client";

import { useState, useEffect } from "react";
import { FiEdit, FiTrash2, FiPlus } from "react-icons/fi";
import PortfolioModal from "./PortfolioModal";
import Pagination from "../shared/Pagination";
import Swal from "sweetalert2";
import {
  FaReact,
  FaFigma,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaNode,
} from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss } from "react-icons/si";

export default function PortfolioTable() {
  const [projects, setProjects] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [modalOpen, setModalOpen] = useState(false);
  const [editingProject, setEditingProject] = useState(null);

  const perPage = 5;
  const totalPages = Math.ceil(projects.length / perPage);
  const displayedProjects = projects.slice(
    (currentPage - 1) * perPage,
    currentPage * perPage
  );

  const fetchProjects = async () => {
    try {
      const res = await fetch("/api/portfolio");
      const data = await res.json();
      console.log("Data dari API:", data);
      if (Array.isArray(data)) {
        setProjects(data);
      }
    } catch (err) {
      console.error("Gagal ambil data:", err);
    }
  };

  const iconMap = {
    react: <FaReact className="text-[#61DBFB]" size={20} />,
    figma: <FaFigma className="text-[#A259FF]" size={20} />,
    html: <FaHtml5 className="text-[#e34c26]" size={20} />,
    css: <FaCss3Alt className="text-[#264de4]" size={20} />,
    js: <FaJsSquare className="text-[#f7df1e]" size={20} />,
    next: <SiNextdotjs className="text-black" size={20} />,
    node: <FaNode className="text-[#3C873A]" size={20} />,
    tailwind: <SiTailwindcss className="text-[#38B2AC]" size={20} />,
  };

  const getIcon = (tech) =>
    iconMap[tech.toLowerCase()] || (
      <span className="text-sm bg-white/70 px-2 rounded-full">
        {tech.toUpperCase()}
      </span>
    );

  useEffect(() => {
    fetchProjects();
  }, []);

  const handleRefetch = () => {
    fetchProjects();
    setModalOpen(false);
    setEditingProject(null);
  };

  const handleEdit = (project) => {
    setEditingProject(project);
    setModalOpen(true);
  };

  const handleDelete = async (id) => {
    Swal.fire({
      title: "Hapus Project?",
      text: "Data yang dihapus tidak bisa dikembalikan!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#FD853A",
      cancelButtonColor: "#d33",
      confirmButtonText: "Ya, Hapus!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          await fetch(`/api/portfolio/${id}`, {
            method: "DELETE",
          });
          fetchProjects();
          Swal.fire({
            icon: "success",
            title: "Berhasil!",
            text: "Project berhasil dihapus.",
            timer: 1500,
            showConfirmButton: false,
          });
        } catch (err) {
          console.error("Gagal hapus:", err);
        }
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
              <th className="p-4 font-semibold text-gray-700">Link</th>
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
                    src={item.image?.[0] || "/img/default.jpg"}
                    alt={item.title}
                    className="w-16 h-16 object-cover rounded"
                  />
                </td>
                <td className="p-4">{item.title}</td>
                <td className="p-4">{item.desc}</td>
                <td className="p-4">
                  <div className="flex flex-wrap gap-1">
                    {item.category?.map((cat, i) => (
                      <span
                        key={i}
                        className="bg-gray-200 text-gray-700 text-xs px-2 py-1 rounded-full"
                      >
                        {cat}
                      </span>
                    ))}
                  </div>
                </td>
                <td className="p-4">
                  <div className="flex gap-1 items-center flex-wrap">
                    {item.tech?.map((t) => (
                      <span key={t} title={t.toUpperCase()}>
                        {getIcon(t)}
                      </span>
                    ))}
                  </div>
                </td>
                <td className="p-4">
                  {item.link ? (
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 hover:underline"
                    >
                      Kunjungi
                    </a>
                  ) : (
                    "-"
                  )}
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

      {modalOpen && (
        <PortfolioModal
          isOpen={modalOpen}
          onClose={() => setModalOpen(false)}
          onSubmit={handleRefetch}
          initialData={editingProject}
        />
      )}
    </div>
  );
}
