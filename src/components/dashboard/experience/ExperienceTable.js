"use client";
import { useState } from "react";
import Swal from "sweetalert2";

export default function ExperienceTable({ data, onDelete, onEdit }) {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const totalPages = Math.ceil(data.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedData = data.slice(startIndex, startIndex + itemsPerPage);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Hapus Data?",
      text: "Data yang dihapus tidak bisa dikembalikan!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#FD853A",
      cancelButtonColor: "#d33",
      confirmButtonText: "Ya, Hapus!",
    }).then((result) => {
      if (result.isConfirmed) {
        onDelete(id);
        Swal.fire({
          icon: "success",
          title: "Berhasil!",
          text: "Data pengalaman berhasil dihapus.",
          timer: 1500,
          showConfirmButton: false,
        });

        // Reset page jika data dihapus di halaman terakhir dan jadi kosong
        if (paginatedData.length === 1 && currentPage > 1) {
          setCurrentPage((prev) => prev - 1);
        }
      }
    });
  };

  return (
    <div className="overflow-x-auto bg-white shadow-md rounded-xl border border-gray-200">
      <table className="min-w-full divide-y divide-gray-200 text-sm text-left">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-4 font-semibold text-gray-700">Perusahaan</th>
            <th className="px-6 py-4 font-semibold text-gray-700">Periode</th>
            <th className="px-6 py-4 font-semibold text-gray-700">Posisi</th>
            <th className="px-6 py-4 font-semibold text-gray-700">Deskripsi</th>
            <th className="px-6 py-4 font-semibold text-gray-700">Aksi</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-100 text-gray-800">
          {paginatedData.length === 0 ? (
            <tr>
              <td colSpan="5" className="px-6 py-6 text-center text-gray-500">
                Belum ada pengalaman ditambahkan.
              </td>
            </tr>
          ) : (
            paginatedData.map((item) => (
              <tr key={item.id} className="hover:bg-gray-50 transition">
                <td className="px-6 py-4">{item.company}</td>
                <td className="px-6 py-4">{item.period}</td>
                <td className="px-6 py-4">{item.position}</td>
                <td className="px-6 py-4">{item.desc}</td>
                <td className="px-6 py-4 flex items-center gap-2">
                  <button
                    onClick={() => onEdit(item)}
                    className="text-white bg-blue-500 hover:bg-blue-600 px-3 py-1 rounded text-xs"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(item.id)}
                    className="text-white bg-red-500 hover:bg-red-600 px-3 py-1 rounded text-xs"
                  >
                    Hapus
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>

      {/* Pagination */}
      {data.length > itemsPerPage && (
        <div className="flex justify-between items-center px-6 py-4 text-sm text-gray-600">
          <p>
            Menampilkan {startIndex + 1} -{" "}
            {Math.min(startIndex + itemsPerPage, data.length)} dari {data.length}
          </p>

          <div className="flex gap-1">
            <button
              onClick={() => setCurrentPage((prev) => prev - 1)}
              disabled={currentPage === 1}
              className={`px-3 py-1 rounded ${
                currentPage === 1
                  ? "bg-gray-200 text-gray-400"
                  : "bg-white border hover:bg-gray-100"
              }`}
            >
              Prev
            </button>

            {Array.from({ length: totalPages }, (_, i) => (
              <button
                key={i}
                onClick={() => setCurrentPage(i + 1)}
                className={`px-3 py-1 rounded border ${
                  currentPage === i + 1
                    ? "bg-[#FD853A] text-white"
                    : "bg-white hover:bg-gray-100"
                }`}
              >
                {i + 1}
              </button>
            ))}

            <button
              onClick={() => setCurrentPage((prev) => prev + 1)}
              disabled={currentPage === totalPages}
              className={`px-3 py-1 rounded ${
                currentPage === totalPages
                  ? "bg-gray-200 text-gray-400"
                  : "bg-white border hover:bg-gray-100"
              }`}
            >
              Next
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
