import { supabase } from "@/lib/supabaseClient";
import { NextResponse } from "next/server";

// READ Single Project
export async function GET(req, { params }) {
  const { id } = params;

  const { data, error } = await supabase
    .from("portfolio")
    .select("*")
    .eq("id", id)
    .single();

  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json(data);
}

// DELETE
export async function DELETE(req, { params }) {
  const { id } = params;

  const { error } = await supabase.from("portfolio").delete().eq("id", id);

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ message: "Project berhasil dihapus" });
}

// UPDATE
export async function PUT(req, { params }) {
  const { id } = params;
  const body = await req.json();

  const { title, desc, category, date, tech, image } = body;

  const { error } = await supabase
    .from("portfolio") // ✅ udah bener sekarang
    .update({ title, desc, category, date, tech, image })
    .eq("id", id);

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ message: "Updated successfully" });
}
