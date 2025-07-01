import { supabase } from "@/lib/supabaseClient";

export default async function BlogDetail({ params }) {
  // Ambil slug dari params dan decode karakter aneh
  const slug = decodeURIComponent(params.slug);

  // Fetch data blog dari Supabase berdasarkan slug
  const { data, error } = await supabase
    .from("blogs")
    .select("*")
    .eq("slug", slug)
    .single();

  if (error || !data) {
    console.error("Gagal ambil blog:", error?.message);
    return <div className="p-20">Blog tidak ditemukan</div>;
  }

  const blog = data;

  return (
    <div className="pt-20 px-6 lg:px-20 max-w-screen-md mx-auto">
      <h1 className="text-3xl font-bold mb-2">{blog.title}</h1>

      <div className="flex gap-2 text-sm mb-6 text-gray-600">
        <span>{blog.category}</span>
        <span>•</span>
        <span>
          {new Date(blog.created_at).toLocaleDateString("id-ID", {
            day: "numeric",
            month: "long",
            year: "numeric",
          })}
        </span>
      </div>

      {blog.image && (
        <img
          src={blog.image}
          alt={blog.title}
          className="w-full h-64 object-cover rounded-md mb-6"
        />
      )}

      {blog.excerpt && (
        <p className="text-base text-black/70 mb-6">{blog.excerpt}</p>
      )}

      <div
        className="prose max-w-none text-black/90"
        dangerouslySetInnerHTML={{ __html: blog.content }}
      />
    </div>
  );
}
