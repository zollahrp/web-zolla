import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

export async function GET() {
  const { data, error } = await supabase
    .from("blogs")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) return Response.json({ error: error.message }, { status: 500 });
  return Response.json(data);
}

export async function POST(req) {
  const body = await req.json();
  const { title, category, content } = body;

  const { data, error } = await supabase.from("blogs").insert([
    { title, category, content },
  ]);

  if (error) return Response.json({ error: error.message }, { status: 500 });
  return Response.json(data[0]); // kirim balik item yg baru dibuat
}
