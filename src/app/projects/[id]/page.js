// app/projects/[id]/page.js atau .jsx

import { notFound } from "next/navigation";

export default async function ProjectDetail({ params }) {
  const { id } = params;

  const res = await fetch(`http://localhost:3001/api/portfolio/${id}`);
  const data = await res.json();

  if (!data) return notFound();

  return (
    <section className="max-w-screen-md mx-auto px-6 pt-20">
      <h1 className="text-2xl font-bold mb-4">{data.title}</h1>
      <p className="text-gray-700 mb-4">{data.desc}</p>
      {/* tambahkan gambar, tech, dll */}
    </section>
  );
}
