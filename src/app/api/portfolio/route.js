import { supabase } from "@/lib/supabaseClient";

// CREATE Project
export async function POST(req) {
  try {
    const body = await req.json();
    console.log("Body diterima:", body);

    const { title, desc, category, date, tech, image, link } = body;

    const { error } = await supabase.from("portfolio").insert({
      title,
      desc,
      category,
      date,
      tech: Array.isArray(tech) ? tech : [],
      image: Array.isArray(image) ? image : [],
      link, // tambahin link di insert
    });

    if (error) {
      return Response.json({ error: error.message }, { status: 500 });
    }

    return Response.json({ message: "Berhasil simpan project" });
  } catch (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }
}

// READ All Projects
export async function GET() {
  const { data, error } = await supabase.from("portfolio").select("*");

  if (error) return Response.json({ error: error.message }, { status: 500 });

  // mapping agar sesuai nama di frontend
  const mappedData = data.map((item) => ({
    ...item,
    desc: item.desc,
    tech: item.tech,
    image: item.image,
    link: item.link,
  }));

  return Response.json(mappedData);
}


