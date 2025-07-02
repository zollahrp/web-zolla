import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

// ✅ Ambil semua data pencapaian
export async function GET() {
  const { data, error } = await supabase
    .from("achievements")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
    });
  }

  return new Response(JSON.stringify(data), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}

// ✅ Tambah data pencapaian baru
export async function POST(req) {
  try {
    const body = await req.json();
    const { type, title, event, date, logo } = body;

    if (!type || !title || !event || !date) {
      return new Response(
        JSON.stringify({ error: "Field wajib tidak lengkap." }),
        {
          status: 400,
        }
      );
    }

    const { data, error } = await supabase
      .from("achievements")
      .insert([{ type, title, event, date, logo }])
      .select(); // penting! agar data[0] nggak undefined

    if (error) {
      return new Response(JSON.stringify({ error: error.message }), {
        status: 500,
      });
    }

    return new Response(JSON.stringify(data[0]), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    return new Response(JSON.stringify({ error: "Bad Request" }), {
      status: 400,
    });
  }
}

// ✅ Update data
export async function PUT(req) {
  const body = await req.json();
  const { id, type, title, event, date, logo } = body;

  if (!id || !type || !title || !event || !date) {
    return new Response(JSON.stringify({ error: "Field wajib tidak lengkap." }), {
      status: 400,
    });
  }

  const { data, error } = await supabase
    .from("achievements")
    .update({ type, title, event, date, logo })
    .eq("id", id)
    .select(); // ⬅️ penting! agar data[0] terisi

  if (error) return new Response(JSON.stringify({ error: error.message }), { status: 500 });

  return new Response(JSON.stringify(data[0]), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}

// ✅ Hapus data
export async function DELETE(req) {
  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");

    const { error } = await supabase.from("achievements").delete().eq("id", id);

    if (error) {
      return new Response(JSON.stringify({ error: error.message }), {
        status: 500,
      });
    }

    return new Response(JSON.stringify({ message: "Deleted" }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    return new Response(JSON.stringify({ error: "Bad Request" }), {
      status: 400,
    });
  }
}
