"use client";
import { useState } from "react";
import BlogForm from "@/components/dashboard/blog/BlogForm";
import BlogTable from "@/components/dashboard/blog/BlogTable";
import BlogModal from "@/components/dashboard/blog/BlogModal";

export default function BlogDashboardPage() {
  const [blogs, setBlogs] = useState([]);
  const [editingBlog, setEditingBlog] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const handleAddBlog = (newBlog) => {
    setBlogs([...blogs, { ...newBlog, id: Date.now() }]);
  };

  const handleDeleteBlog = (blog) => {
    const confirm = window.confirm("Yakin mau hapus?");
    if (confirm) {
      setBlogs(blogs.filter((b) => b.id !== blog.id));
    }
  };

  const handleEditBlog = (blog) => {
    setEditingBlog(blog);
    setShowModal(true);
  };

  const handleUpdateBlog = (updatedBlog) => {
    setBlogs(
      blogs.map((b) => (b.id === updatedBlog.id ? updatedBlog : b))
    );
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
