import { supabase } from "@/lib/supabaseClient";

export async function GET() {
  const { data: blogs, error } = await supabase.from("blogs").select("views");

  if (error || !blogs) {
    console.error("Supabase error:", error);
    return new Response(
      JSON.stringify({ error: error?.message || "Gagal ambil data" }),
      {
        status: 500,
      }
    );
  }

  const totalViews = blogs.reduce((sum, item) => sum + (item.views || 0), 0);
  const totalBlog = blogs.length;

  return new Response(JSON.stringify({ totalViews, totalBlog }), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}
