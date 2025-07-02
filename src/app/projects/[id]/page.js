// // src/app/api/portfolio/[id]/route.js
// import { supabase } from "@/lib/supabaseClient";

// export async function GET(req, { params }) {
//   const { id } = params;
//   const { data, error } = await supabase.from("portfolio").select("*").eq("id", id).single();
//   if (error) return Response.json({ error: error.message }, { status: 500 });
//   return Response.json(data);
// }

// export async function PUT(req, { params }) {
//   const { id } = params;
//   const body = await req.json();
//   const { data, error } = await supabase.from("portfolio").update(body).eq("id", id).select();
//   if (error) return Response.json({ error: error.message }, { status: 500 });
//   return Response.json(data[0]);
// }

// export async function DELETE(req, { params }) {
//   const { id } = params;
//   const { error } = await supabase.from("portfolio").delete().eq("id", id);
//   if (error) return Response.json({ error: error.message }, { status: 500 });
//   return Response.json({ success: true });
// }
