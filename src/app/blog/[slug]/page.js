export default function BlogDetail({ params }) {
  const { slug } = params;

  const blogs = [/* array blog sama kayak sebelumnya */];
  const blog = blogs.find(
    (b) =>
      b.title.toLowerCase().replace(/\s+/g, "-") === slug.toLowerCase()
  );

  if (!blog) return <div className="p-20">Blog tidak ditemukan</div>;

  return (
    <div className="pt-20 px-6 lg:px-20 max-w-screen-md mx-auto">
      <h1 className="text-3xl font-bold mb-2">{blog.title}</h1>
      <div className="flex gap-2 text-sm mb-6 text-gray-600">
        <span>{blog.category}</span>
        <span>•</span>
        <span>{blog.date}</span>
      </div>
      <img src={blog.image} alt={blog.title} className="w-full h-64 object-cover rounded-md mb-6" />
      <p className="text-lg text-black/80">{blog.excerpt}</p>
    </div>
  );
}
