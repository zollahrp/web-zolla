"use client";
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import BlogForm from "@/components/dashboard/blog/BlogForm";
import BlogTable from "@/components/dashboard/blog/BlogTable";
import BlogModal from "@/components/dashboard/blog/BlogModal"; // pastikan ada ini

export default function BlogDashboardPage() {
  const [blogs, setBlogs] = useState([]);
  const [editingBlog, setEditingBlog] = useState(null);
  const [showModal, setShowModal] = useState(false);

  // ⬇ Fetch from Supabase
  useEffect(() => {
    async function fetchBlogs() {
      const { data, error } = await supabase
        .from("blogs")
        .select("*")
        .order("created_at", { ascending: false });
      if (error) console.error("Error fetch:", error);
      else setBlogs(data);
    }
    fetchBlogs();
  }, []);

  const handleAddBlog = async (newBlog) => {
    const { data, error } = await supabase.from("blogs").insert([newBlog]);
    if (error) return alert("Gagal simpan: " + error.message);
    setBlogs([data[0], ...blogs]);
  };

  const handleDeleteBlog = async (blog) => {
    const confirm = window.confirm("Yakin mau hapus?");
    if (!confirm) return;
    const { error } = await supabase.from("blogs").delete().eq("id", blog.id);
    if (error) return alert("Gagal hapus: " + error.message);
    setBlogs(blogs.filter((b) => b.id !== blog.id));
  };

  const handleEditBlog = (blog) => {
    setEditingBlog(blog);
    setShowModal(true);
  };

  const handleUpdateBlog = async (updatedBlog) => {
    const { data, error } = await supabase
      .from("blogs")
      .update({
        title: updatedBlog.title,
        category: updatedBlog.category,
        content: updatedBlog.content,
        image: updatedBlog.image,
        excerpt: updatedBlog.excerpt,
        slug: updatedBlog.title.toLowerCase().replace(/\s+/g, "-"),
      })
      .eq("id", updatedBlog.id)
      .select(); // ⬅️ ini penting buat dapetin data[0] setelah update

    if (error) return alert("Gagal update: " + error.message);

    setBlogs(blogs.map((b) => (b.id === updatedBlog.id ? data[0] : b)));
    setShowModal(false);
    setEditingBlog(null);
  };

  return (
    <div className="p-10 space-y-10">
      <h1 className="text-3xl font-bold text-[#263650]">Kelola Blog</h1>

      <BlogForm onSubmit={handleAddBlog} />

      <BlogTable
        blogs={blogs}
        onEdit={handleEditBlog}
        onDelete={handleDeleteBlog}
      />

      {showModal && editingBlog && (
        <BlogModal
          blog={editingBlog}
          onClose={() => setShowModal(false)}
          onSave={handleUpdateBlog}
        />
      )}
    </div>
  );
}
