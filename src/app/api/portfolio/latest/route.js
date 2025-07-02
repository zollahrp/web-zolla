// file: app/api/portfolio/latest/route.js
import { supabase } from "@/lib/supabaseClient";

export async function GET() {
  const { data, error } = await supabase
    .from("portfolio")
    .select("*")
    .order("date", { ascending: false })
    .limit(6);

  if (error) return Response.json({ error: error.message }, { status: 500 });

  return Response.json(data);
}
