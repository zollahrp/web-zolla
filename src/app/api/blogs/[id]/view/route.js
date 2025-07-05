import { supabase } from "@/lib/supabaseClient";

export async function POST(req, { params }) {
  const { id } = params;

  // Ambil blog
  const { data: blog, error } = await supabase
    .from("blogs")
    .select("views")
    .eq("id", id)
    .single();

  if (error) {
    return new Response(JSON.stringify({ error: error.message }), { status: 500 });
  }

  // Tambah view
  const { error: updateError } = await supabase
    .from("blogs")
    .update({ views: (blog.views || 0) + 1 })
    .eq("id", id);

  if (updateError) {
    return new Response(JSON.stringify({ error: updateError.message }), { status: 500 });
  }

  return new Response(JSON.stringify({ success: true }), { status: 200 });
}
