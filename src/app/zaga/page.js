"use client";

import { useEffect, useState } from "react";
import AuthGuard from "@/lib/AuthGuard";

export default function Dashboard() {
  const [stats, setStats] = useState({
    totalViews: 0,
    totalBlog: 0,
    totalProject: 0,
    totalAchievement: 0,
  });

  useEffect(() => {
    async function fetchStats() {
      try {
        const resView = await fetch("/api/stats/blog");
        const { totalViews, totalBlog } = await resView.json();

        const resProjects = await fetch("/api/data/projects");
        const projects = await resProjects.json();
        const totalProject = projects.length;

        const resAchievements = await fetch("/api/achievements");
        const achievements = await resAchievements.json();
        const totalAchievement = achievements.length;

        setStats({ totalViews, totalBlog, totalProject, totalAchievement });
      } catch (err) {
        console.error("Gagal ambil statistik:", err);
      }
    }

    fetchStats();
  }, []);

  return (
    <AuthGuard>
      <div className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white rounded-2xl shadow p-6 hover:shadow-md transition flex flex-col justify-between">
          <div>
            <h2 className="text-xl font-semibold mb-2">Analytics Umami</h2>
            <p className="text-sm text-gray-600">Mau pake API mereka harus bayar :c</p>
          </div>
          <a
            href="https://cloud.umami.is/websites/ae58a994-1d16-47de-b5fd-a590fd494be7"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-block bg-black text-white text-sm px-4 py-2 rounded-xl hover:bg-gray-800 transition"
          >
            Buka Umami
          </a>
        </div>
        {/* Total Views */}
        <div className="bg-white rounded-2xl shadow p-6 hover:shadow-md transition">
          <h2 className="text-xl font-semibold mb-2">Total Blog Views</h2>
          <p className="text-3xl font-bold text-orange-500">
            {stats.totalViews}
          </p>
        </div>

        {/* Total Blog */}
        <div className="bg-white rounded-2xl shadow p-6 hover:shadow-md transition">
          <h2 className="text-xl font-semibold mb-2">Total Blog</h2>
          <p className="text-3xl font-bold text-blue-500">{stats.totalBlog}</p>
        </div>

        {/* Total Project */}
        <div className="bg-white rounded-2xl shadow p-6 hover:shadow-md transition">
          <h2 className="text-xl font-semibold mb-2">Total Project</h2>
          <p className="text-3xl font-bold text-green-500">
            {stats.totalProject}
          </p>
        </div>
      </div>
    </AuthGuard>
  );
}
