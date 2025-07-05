import { supabase } from "@/lib/supabaseClient";
import BlogDetailClient from "./BlogDetailClient";

export default async function BlogDetailPage({ params }) {
  const slug = decodeURIComponent(params.slug);

  const { data, error } = await supabase
    .from("blogs")
    .select("*")
    .eq("slug", slug)
    .single();

  if (error || !data) {
    return <div className="p-20">Blog tidak ditemukan</div>;
  }

  return <BlogDetailClient blog={data} />;
}
