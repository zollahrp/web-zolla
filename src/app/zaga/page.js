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
      <div className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
        <div className="bg-white rounded-2xl shadow p-6 hover:shadow-md transition">
          <h2 className="text-xl font-semibold mb-2">Total Blog Views</h2>
          <p className="text-3xl font-bold text-orange-500">
            {stats.totalViews}
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow p-6 hover:shadow-md transition">
          <h2 className="text-xl font-semibold mb-2">Total Blog</h2>
          <p className="text-3xl font-bold text-blue-500">
            {stats.totalBlog}
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow p-6 hover:shadow-md transition">
          <h2 className="text-xl font-semibold mb-2">Total Project</h2>
          <p className="text-3xl font-bold text-green-500">
            {stats.totalProject}
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow p-6 hover:shadow-md transition">
          <h2 className="text-xl font-semibold mb-2">Total Achievement</h2>
          <p className="text-3xl font-bold text-purple-600">
            {stats.totalAchievement}
          </p>
        </div>
      </div>
    </AuthGuard>
  );
}
