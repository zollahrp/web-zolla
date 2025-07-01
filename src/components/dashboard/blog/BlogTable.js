export default function BlogTable({ blogs, onEdit, onDelete }) {
  return (
    <table className="w-full">
      <thead>
        <tr>
          <th>Judul</th>
          <th>Kategori</th>
          <th>Aksi</th>
        </tr>
      </thead>
      <tbody>
        {blogs.map((b, i) => (
          <tr key={i}>
            <td>{b.title}</td>
            <td>{b.category}</td>
            <td>
              <button onClick={() => onEdit(b)}>Edit</button>
              <button onClick={() => onDelete(b)}>Hapus</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
