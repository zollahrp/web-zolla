"use client";
import { FaAward } from "react-icons/fa";
import AchievementTable from "@/components/dashboard/achievement/AchievementTable";
import AuthGuard from "@/lib/AuthGuard";

export default function AchievementPage() {
  return (
    <AuthGuard>
      <div className="p-6 space-y-6">
        <div className="flex items-center gap-2">
          <FaAward className="text-[#FD853A]" size={24} />
          <h2 className="text-2xl font-bold text-[#263650]">
            Kelola Pencapaian
          </h2>
        </div>
        <AchievementTable />
      </div>
    </AuthGuard>
  );
}
