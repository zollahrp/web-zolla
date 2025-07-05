import { supabase } from "@/lib/supabaseClient";
import { NextResponse } from "next/server";

export async function POST(req) {
  const formData = await req.formData();
  const file = formData.get("file");

  if (!file) {
    return NextResponse.json({ error: "No file uploaded." }, { status: 400 });
  }

  const ext = file.name.split(".").pop();
  const filename = `${Date.now()}.${ext}`;
  const filePath = `content-images/${filename}`;

  const { error } = await supabase.storage
    .from("blog-images") // bucket name kamu
    .upload(filePath, file);

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  const { data } = supabase.storage
    .from("blog-images")
    .getPublicUrl(filePath);

  return NextResponse.json({ location: data.publicUrl });
}
