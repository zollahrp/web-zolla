"use client";

export default function ExperienceTable({ data, onDelete, onEdit }) {
  return (
    <div className="overflow-x-auto bg-white shadow rounded">
      <table className="min-w-full text-sm text-left">
        <thead className="bg-gray-100">
          <tr>
            <th className="px-4 py-2">Perusahaan</th>
            <th className="px-4 py-2">Periode</th>
            <th className="px-4 py-2">Posisi</th>
            <th className="px-4 py-2">Deskripsi</th>
            <th className="px-4 py-2">Aksi</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id} className="border-t">
              <td className="px-4 py-2">{item.company}</td>
              <td className="px-4 py-2">{item.period}</td>
              <td className="px-4 py-2">{item.position}</td>
              <td className="px-4 py-2">{item.desc}</td>
              <td className="px-4 py-2 flex gap-2">
                <button onClick={() => onEdit(item)} className="text-blue-600">Edit</button>
                <button onClick={() => onDelete(item.id)} className="text-red-600">Hapus</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
