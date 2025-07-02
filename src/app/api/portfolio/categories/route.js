import { supabase } from "@/lib/supabaseClient";

// GET All Categories
export async function GET() {
  const { data, error } = await supabase.from("categories").select("*");

  if (error) {
    return Response.json({ error: "Gagal ambil kategori" }, { status: 500 });
  }

  return Response.json(data);
}

// POST New Category
export async function POST(req) {
  try {
    const body = await req.json();
    const { name } = body;

    const { error } = await supabase.from("categories").insert({ name });

    if (error)
      return Response.json({ error: "Gagal simpan kategori" }, { status: 500 });

    return new Response("Berhasil", { status: 200 });
  } catch (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }
}
