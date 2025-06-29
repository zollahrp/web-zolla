"use client";

import { useState } from "react";
import ExperienceForm from "@/components/dashboard/experience/ExperienceForm";
import ExperienceTable from "@/components/dashboard/experience/ExperienceTable";

export default function ExperiencePage() {
  const [experiences, setExperiences] = useState([]);
  const [editing, setEditing] = useState(null);

  const addExperience = (newExp) => {
    setExperiences((prev) => [...prev, newExp]);
  };

  const editExperience = (updatedExp) => {
    setExperiences((prev) =>
      prev.map((exp) => (exp.id === updatedExp.id ? updatedExp : exp))
    );
    setEditing(null);
  };

  const deleteExperience = (id) => {
    setExperiences((prev) => prev.filter((exp) => exp.id !== id));
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-4 text-[#263650]">
        Kelola <span className="text-[#FD853A]">Pengalaman Kerja</span>
      </h1>
      <ExperienceForm
        onAdd={addExperience}
        onEdit={editExperience}
        editingData={editing}
        cancelEdit={() => setEditing(null)}
      />
      <ExperienceTable
        data={experiences}
        onDelete={deleteExperience}
        onEdit={(exp) => setEditing(exp)}
      />
    </div>
  );
}
