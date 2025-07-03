"use client";

import { useState, useEffect } from "react";
import Swal from "sweetalert2";
import ExperienceTable from "@/components/dashboard/experience/ExperienceTable";
import ExperienceModal from "@/components/dashboard/experience/ExperienceModal";

export default function ExperiencePage() {
  const [experiences, setExperiences] = useState([]);
  const [editing, setEditing] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const addExperience = (newExp) => {
    setExperiences((prev) => [...prev, newExp]);
    setShowModal(false);
  };

  const editExperience = (updatedExp) => {
    setExperiences((prev) =>
      prev.map((exp) => (exp.id === updatedExp.id ? updatedExp : exp))
    );
    setEditing(null);
    setShowModal(false);
  };

  const deleteExperience = (id) => {
    setExperiences((prev) => prev.filter((exp) => exp.id !== id));
  };

  const handleDelete = async (id) => {
    try {
      const res = await fetch(`/api/experiences?id=${id}`, {
        method: "DELETE",
      });

      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.error || "Gagal menghapus data.");
      }

      // Refresh data: tergantung cara kamu fetch data
      await fetchExperiences();
    } catch (err) {
      console.error("Delete error:", err.message);
      Swal.fire("Gagal", err.message, "error");
    }
  };

  const fetchExperiences = async () => {
    const res = await fetch("/api/experiences");
    const data = await res.json();
    setExperiences(data);
  };

  useEffect(() => {
    fetchExperiences();
  }, []);

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-semibold text-[#263650]">
          Kelola <span className="text-[#FD853A]">Pengalaman Kerja</span>
        </h1>
        <button
          onClick={() => {
            setEditing(null);
            setShowModal(true);
          }}
          className="bg-[#FD853A] text-white px-4 py-2 rounded"
        >
          + Tambah Pengalaman
        </button>
      </div>

      <ExperienceTable
        data={experiences}
        onDelete={handleDelete}
        onEdit={(exp) => {
          setEditing(exp);
          setShowModal(true);
        }}
      />

      <ExperienceModal
        isOpen={showModal}
        onClose={() => {
          setShowModal(false);
          setEditing(null);
        }}
        onSubmit={editing ? editExperience : addExperience}
        initialData={editing}
      />
    </div>
  );
}
