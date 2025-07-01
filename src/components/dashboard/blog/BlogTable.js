import { FaEdit, FaTrash } from "react-icons/fa";

export default function BlogTable({ blogs, onEdit, onDelete }) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-left border border-gray-200">
        <thead className="bg-gray-100 text-sm text-gray-600">
          <tr>
            <th className="p-3">Judul</th>
            <th className="p-3">Kategori</th>
            <th className="p-3">Excerpt</th>
            <th className="p-3">Tanggal</th>
            <th className="p-3">Gambar</th>
            <th className="p-3">Aksi</th>
          </tr>
        </thead>
        <tbody className="text-sm">
          {blogs.map((b, i) => (
            <tr key={i} className="border-t border-gray-100 hover:bg-gray-50">
              <td className="p-3">{b.title}</td>
              <td className="p-3">{b.category}</td>
              <td className="p-3 max-w-[250px] truncate">{b.excerpt}</td>
              <td className="p-3">
                {new Date(b.created_at).toLocaleDateString("id-ID")}
              </td>
              <td className="p-3">
                <img
                  src={b.image}
                  alt="thumb"
                  className="w-20 h-14 object-cover rounded border"
                />
              </td>
              <td className="p-3">
                <div className="flex gap-2">
                  <button
                    onClick={() => onEdit(b)}
                    className="text-blue-500 hover:text-blue-700"
                    title="Edit"
                  >
                    <FaEdit />
                  </button>
                  <button
                    onClick={() => onDelete(b)}
                    className="text-red-500 hover:text-red-700"
                    title="Hapus"
                  >
                    <FaTrash />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
