"use client";

import { FaStar } from "react-icons/fa";
import PortfolioTable from "@/components/dashboard/portfolio/PortfolioTable";
import AuthGuard from "@/lib/AuthGuard";

export default function PortfolioPage() {
  return (
    <AuthGuard>
      <div className="space-y-8">
        {/* Heading */}
        <div className="flex items-center gap-2 mb-6">
          <FaStar className="text-[#FD853A]" />
          <h1 className="text-2xl font-bold text-[#263650]">
            Kelola Project Portofolio
          </h1>
        </div>

        {/* Table */}
        <PortfolioTable />
      </div>
    </AuthGuard>
  );
}
