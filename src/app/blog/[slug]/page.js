import { supabase } from "@/lib/supabaseClient";

export default async function BlogDetail({ params }) {
  const { slug } = params;

  // Ambil data blog dari Supabase pakai slug
  const { data, error } = await supabase
    .from("blogs")
    .select("*")
    .eq("slug", slug)
    .single(); // hanya ambil satu

  if (error || !data)
    return <div className="p-20">Blog tidak ditemukan</div>;

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
      <img
        src={blog.image}
        alt={blog.title}
        className="w-full h-64 object-cover rounded-md mb-6"
      />
      <p
        className="text-lg text-black/80"
        dangerouslySetInnerHTML={{ __html: blog.content }}
      />
    </div>
  );
}
