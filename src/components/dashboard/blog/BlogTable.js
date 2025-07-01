export default function BlogTable({ blogs, onEdit, onDelete }) {
  return (
    <table className="w-full">
      <thead>
        <tr>
          <th>Judul</th>
          <th>Kategori</th>
          <th>Excerpt</th>
          <th>Tanggal</th>
          <th>Gambar</th>
          <th>Aksi</th>
        </tr>
      </thead>
      <tbody>
        {blogs.map((b, i) => (
          <tr key={i}>
            <td>{b.title}</td>
            <td>{b.category}</td>
            <td>{b.excerpt}</td>
            <td>
              <img
                src={b.image}
                alt="thumb"
                className="w-20 h-14 object-cover rounded"
              />
            </td>
            <td>
              <td>{new Date(b.created_at).toLocaleDateString("id-ID")}</td>
              <button onClick={() => onEdit(b)}>Edit</button>
              <button onClick={() => onDelete(b)}>Hapus</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
