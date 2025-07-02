import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

export async function GET() {
  const { data, error } = await supabase
    .from("experiences")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) return Response.json({ error: error.message }, { status: 500 });
  return Response.json(data);
}

export async function POST(req) {
  const body = await req.json();
  const { company, period, position, desc } = body;

  const { data, error } = await supabase
    .from("experiences")
    .insert([{ company, period, position, desc }])
    .select();

  if (error) return Response.json({ error: error.message }, { status: 400 });
  return Response.json(data[0]);
}

export async function PUT(req) {
  const body = await req.json();
  const { id, company, period, position, desc } = body;

  const { data, error } = await supabase
    .from("experiences")
    .update({ company, period, position, desc })
    .eq("id", id)
    .select();

  if (error) return Response.json({ error: error.message }, { status: 500 });
  return Response.json(data[0]);
}

export async function DELETE(req) {
  const { searchParams } = new URL(req.url);
  const id = searchParams.get("id");

  const { error } = await supabase.from("experiences").delete().eq("id", id);

  if (error) return Response.json({ error: error.message }, { status: 500 });
  return Response.json({ message: "Deleted" });
}
