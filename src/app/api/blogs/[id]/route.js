import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

export async function PUT(req, { params }) {
  const { id } = params;
  const body = await req.json();
  const { title, category, content } = body;

  const { data, error } = await supabase
    .from("blogs")
    .update({ title, category, content })
    .eq("id", id);

  if (error) return Response.json({ error: error.message }, { status: 500 });
  return Response.json(data[0]);
}

export async function DELETE(req, { params }) {
  const { id } = params;

  const { error } = await supabase.from("blogs").delete().eq("id", id);
  if (error) return Response.json({ error: error.message }, { status: 500 });

  return Response.json({ message: "Berhasil dihapus" });
}
