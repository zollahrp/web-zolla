"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

const navLinks = [
  { name: "Home", href: "home" },
  { name: "Services", href: "service" },
  { name: "About", href: "about" },
  { name: "Skills", href: "skills" },
  { name: "Portfolio", href: "portfolio" },
  { name: "Achievement", href: "achievement" },
  { name: "Contact", href: "contact" },
  { name: "Blogs", href: "blogs" },
];

export default function Navbar() {
  const [activeHash, setActiveHash] = useState("#home");
  useEffect(() => {
    const el = document.getElementById("home");
    if (el) {
      setTimeout(() => {
        const y = el.getBoundingClientRect().top + window.pageYOffset - 100;
        window.scrollTo({ top: y, behavior: "smooth" });
        history.replaceState(null, null, " ");
      }, 20);
    }
  }, []);

  // Smooth scroll dengan custom easing (mirip Easy Ease)
  const handleScroll = (id) => {
    const target = document.getElementById(id);
    if (!target) return;

    const yOffset = -window.innerHeight / 12; // biar agak di tengah
    const targetPosition =
      target.getBoundingClientRect().top + window.pageYOffset + yOffset;

    const startY = window.scrollY;
    const distance = targetPosition - startY;
    const duration = 700;
    let startTime = null;

    const easeInOutCubic = (t) =>
      t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const progress = Math.min(timeElapsed / duration, 1);
      const ease = easeInOutCubic(progress);
      window.scrollTo(0, startY + distance * ease);

      if (timeElapsed < duration) {
        requestAnimationFrame(animate);
      } else {
        setActiveHash(`#${id}`);
      }
    };

    requestAnimationFrame(animate);
  };

  // Scroll spy untuk nav active saat scroll
  useEffect(() => {
    const handleScrollSpy = () => {
      const offsets = navLinks
        .map((link) => {
          const el = document.getElementById(link.href);
          if (el) {
            return { id: link.href, offsetTop: el.offsetTop };
          }
          return null;
        })
        .filter(Boolean);

      const scrollY = window.scrollY + 120;
      const current = offsets
        .reverse()
        .find((section) => scrollY >= section.offsetTop);
      if (current) {
        setActiveHash(`#${current.id}`);
      }
    };

    window.addEventListener("scroll", handleScrollSpy);
    return () => window.removeEventListener("scroll", handleScrollSpy);
  }, []);

  return (
    <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-full">
      <div className="max-w-screen-xl mx-auto px-8 lg:px-20 bg-[#263650] text-white py-3 rounded-full flex items-center justify-between shadow-md">
        {/* Left */}
        <div className="flex gap-6 items-center">
          {navLinks.slice(0, 4).map((link) => (
            <button
              key={link.name}
              onClick={() => handleScroll(link.href)}
              className={`px-4 py-2 rounded-full transition-all duration-300 ease-in-out ${
                activeHash === `#${link.href}`
                  ? "bg-[#FD853A] font-semibold"
                  : "hover:text-[#FD853A]"
              }`}
            >
              {link.name}
            </button>
          ))}
        </div>

        {/* Center Logo */}
        <div className="relative group flex items-center gap-2 cursor-pointer">
          {/* Logo */}
          <Image
            src="/img/logo_zh.jpeg"
            alt="Logo Zolla"
            width={34}
            height={34}
            className="rounded-full object-cover"
          />

          {/* Teks dengan animasi */}
          <div className="relative flex flex-col leading-tight">
            {/* Website (animasi muncul) */}
            <span className="absolute top-0 left-0 text-[10px] text-white opacity-0 group-hover:opacity-100 group-hover:-translate-y-1 transition-all duration-300">
              Website
            </span>

            {/* Nama utama */}
            <span className="text-white font-bold tracking-wide transition-all duration-300 group-hover:text-sm group-hover:font-medium group-hover:leading-snug">
              <span className="group-hover:hidden">ZOLLAHRP</span>
              <span className="hidden group-hover:inline text-xs relative top-[5px]">
                Zolla Perdana Putra Harahap
              </span>
            </span>
          </div>
        </div>

        {/* Right */}
        <div className="flex gap-6 items-center">
          {navLinks.slice(4).map((link) => (
            <button
              key={link.name}
              onClick={() => handleScroll(link.href)}
              className={`px-4 py-2 rounded-full transition-all duration-300 ease-in-out ${
                activeHash === `#${link.href}`
                  ? "bg-[#FD853A] font-semibold"
                  : "hover:text-[#FD853A]"
              }`}
            >
              {link.name}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}
