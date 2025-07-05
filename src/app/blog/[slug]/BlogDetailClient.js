"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import {
  FaInstagram,
  FaLinkedin,
  FaGithub,
  FaNewspaper,
  FaYoutube,
  FaTiktok,
  FaXTwitter,
} from "react-icons/fa6";

export default function BlogDetailClient({ blog }) {
  const router = useRouter();
  const [latestBlogs, setLatestBlogs] = useState([]);
  const [popularBlogs, setPopularBlogs] = useState([]); // <- Tambah state ini

  // Tambah view setiap blog dibuka
  useEffect(() => {
    if (!blog?.id) return;
    fetch(`/api/blogs/${blog.id}/view`, {
      method: "POST",
    });
  }, [blog?.id]);

  // Copy protection + fetch latest & popular
  useEffect(() => {
    const handleCopy = (e) => {
      const selection = window.getSelection();
      const copiedText = selection?.toString();
      if (!copiedText) return;

      const sourceInfo = `

Konten ini telah tayang di zollahrp.my.id/blog dengan judul "${
        blog.title
      }", Klik untuk baca:
https://www.zollahrp.my.id/blog/${blog.slug || "slug-blog-kamu"}

Website zollahrp.my.id adalah tempat Zolla berbagi cerita, karya, dan pengalaman hidupnya.

Bagikan dengan bijak dan sertakan sumber saat menyalin ya.
`;
      e.clipboardData.setData("text/plain", copiedText + sourceInfo);
      e.preventDefault();
    };

    const fetchData = async () => {
      try {
        const [latestRes, popularRes] = await Promise.all([
          fetch("/api/blogs/latest"),
          fetch("/api/blogs/popular"),
        ]);

        if (latestRes.ok) {
          const latestData = await latestRes.json();
          setLatestBlogs(latestData);
        } else {
          console.warn("Gagal fetch blog terbaru");
        }

        if (popularRes.ok) {
          const popularData = await popularRes.json();
          setPopularBlogs(popularData);
        } else {
          console.warn("Gagal fetch blog populer");
        }
      } catch (err) {
        console.error("Error fetching blog data:", err);
      }
    };

    document.addEventListener("copy", handleCopy);
    fetchData();

    return () => document.removeEventListener("copy", handleCopy);
  }, [blog]);

  return (
    <div className="pt-20 px-6 lg:px-20 max-w-screen-xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
      {/* KONTEN BLOG */}
      <div className="lg:col-span-8">
        <div className="bg-white p-8 rounded-xl shadow-sm">
          {/* Tombol kembali */}
          <button
            onClick={() => router.back()}
            className="mb-4 flex items-center gap-1 text-[#263650] hover:text-[#FD853A] transition font-medium"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 19l-7-7 7-7"
              />
            </svg>
            <span>Kembali</span>
          </button>

          <h1 className="text-3xl font-bold mb-2">{blog.title}</h1>

          <div className="flex gap-2 text-sm mb-6 text-gray-600 items-center flex-wrap">
            <span>{blog.category}</span>
            <span>•</span>
            <span>
              {new Date(blog.created_at).toLocaleDateString("id-ID", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </span>
            <span>•</span>
            <span>{blog.views ?? 0}x dilihat</span>
          </div>

          {blog.image && (
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-64 object-cover rounded-md mb-6"
            />
          )}

          {blog.excerpt && (
            <p className="text-base text-black/70 mb-6">{blog.excerpt}</p>
          )}

          <div
            className="blog-content prose max-w-none text-black/90"
            dangerouslySetInnerHTML={{ __html: blog.content }}
          />
        </div>
      </div>

      {/* SIDEBAR KANAN */}
      <div className="lg:col-span-4 mt-[20px]">
        <aside className="lg:col-span-4 space-y-10">
          <div>
            <h3 className="font-bold mb-4">Follow Saya</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              <a
                href="https://www.instagram.com/zollahrp"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center text-center p-3 bg-white rounded-xl shadow-sm hover:shadow-md transition"
              >
                <FaInstagram className="text-pink-500 text-2xl mb-1" />
                <p className="font-semibold text-sm">Instagram</p>
                <p className="text-sm font-bold">20K</p>
                <p className="text-xs text-gray-500">Followers</p>
              </a>

              <a
                href="https://www.linkedin.com/in/zolla/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center text-center p-3 bg-white rounded-xl shadow-sm hover:shadow-md transition"
              >
                <FaLinkedin className="text-blue-700 text-2xl mb-1" />
                <p className="font-semibold text-sm">LinkedIn</p>
                <p className="text-sm font-bold">5K</p>
                <p className="text-xs text-gray-500">Connections</p>
              </a>

              <a
                href="https://github.com/zollahrp"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center text-center p-3 bg-white rounded-xl shadow-sm hover:shadow-md transition"
              >
                <FaGithub className="text-black text-2xl mb-1" />
                <p className="font-semibold text-sm">GitHub</p>
                <p className="text-sm font-bold">88</p>
                <p className="text-xs text-gray-500">Repos</p>
              </a>

              <a
                href="https://www.kompasiana.com/zollahrp"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center text-center p-3 bg-white rounded-xl shadow-sm hover:shadow-md transition"
              >
                <FaNewspaper className="text-orange-500 text-2xl mb-1" />
                <p className="font-semibold text-sm">Kompasiana</p>
                <p className="text-sm font-bold">30+</p>
                <p className="text-xs text-gray-500">Articles</p>
              </a>

              <a
                href="https://www.youtube.com/@Zero-Starr"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center text-center p-3 bg-white rounded-xl shadow-sm hover:shadow-md transition"
              >
                <FaYoutube className="text-red-500 text-2xl mb-1" />
                <p className="font-semibold text-sm">YouTube</p>
                <p className="text-sm font-bold">625K</p>
                <p className="text-xs text-gray-500">Subscribers</p>
              </a>

              <a
                href="https://www.tiktok.com/@zollahrp"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center text-center p-3 bg-white rounded-xl shadow-sm hover:shadow-md transition"
              >
                <FaTiktok className="text-black text-2xl mb-1" />
                <p className="font-semibold text-sm">TikTok</p>
                <p className="text-sm font-bold">50K</p>
                <p className="text-xs text-gray-500">Followers</p>
              </a>

              <a
                href="https://x.com/zollahrp"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center text-center p-3 bg-white rounded-xl shadow-sm hover:shadow-md transition"
              >
                <FaXTwitter className="text-black text-2xl mb-1" />
                <p className="font-semibold text-sm">X (Twitter)</p>
                <p className="text-sm font-bold">60K</p>
                <p className="text-xs text-gray-500">Followers</p>
              </a>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm text-center">
            <p className="text-xs text-gray-500 mb-2 tracking-widest">AUTHOR</p>
            <h3 className="text-lg font-bold text-gray-800 mb-2">
              Zolla Perdana Putra Harahap
            </h3>

            <img
              src="/img/author-blog.jpg"
              alt="Foto Zolla"
              className="w-24 h-24 rounded-full mx-auto object-cover mb-4"
            />

            <p className="text-sm text-gray-600 leading-relaxed">
              Penulis, pemimpi, dan pembelajar seumur hidup. Blog ini adalah
              tempat saya berbagi cerita, pikiran, dan perjalanan dalam hidup,
              teknologi, dan makna-makna kecil sehari-hari.
            </p>
          </div>

          <div>
            <h3 className="font-bold mb-2">Blog Terbaru</h3>
            <ul className="space-y-4">
              {latestBlogs.map((item) => (
                <li key={item.id}>
                  <a
                    href={`/blog/${item.slug}`}
                    className="flex gap-3 hover:bg-gray-100 rounded-xl p-2 transition"
                  >
                    {item.image && (
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-16 h-16 rounded object-cover"
                      />
                    )}
                    <div className="flex flex-col justify-between text-sm">
                      <strong className="line-clamp-2">{item.title}</strong>
                      <span className="text-xs text-gray-500">
                        {new Date(item.created_at).toLocaleDateString("id-ID", {
                          day: "numeric",
                          month: "long",
                          year: "numeric",
                        })}
                      </span>
                    </div>
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-2">Blog Terpopuler</h3>
            <ul className="space-y-4">
              {popularBlogs.map((item) => (
                <li key={item.id}>
                  <a
                    href={`/blog/${item.slug}`}
                    className="flex gap-3 hover:bg-gray-100 rounded-xl p-2 transition"
                  >
                    {item.image && (
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-16 h-16 rounded object-cover"
                      />
                    )}
                    <div className="flex flex-col justify-between text-sm">
                      <strong className="line-clamp-2">{item.title}</strong>
                      <span className="text-xs text-gray-500">
                        {item.views ?? 0}x dilihat
                      </span>
                    </div>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </div>
    </div>
  );
}
