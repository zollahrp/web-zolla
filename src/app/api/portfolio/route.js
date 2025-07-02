import { supabase } from "@/lib/supabaseClient";

// CREATE Project
export async function POST(req) {
  try {
    const body = await req.json();
    console.log("Body diterima:", body); // DEBUG LINE

    const { title, desc, category, date, tech, image } = body;

    const { error } = await supabase.from("portfolio").insert({
      title,
      desc,
      category,
      date,
      tech: Array.isArray(tech) ? tech : [],
      image: Array.isArray(image) ? image : [],
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
    desc: item.description,
    tech: item.technologies,
    image: item.image,
  }));

  return Response.json(mappedData);
}


