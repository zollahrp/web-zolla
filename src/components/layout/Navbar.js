"use client";
import Image from 'next/image';
import Link from "next/link";
import { useEffect, useState } from "react";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "Services", href: "#service" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Portfolio", href: "#portfolio" },
  { name: "Kompetisi", href: "#kompetisi" },
  { name: "Blogs", href: "#blogs" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [activeHash, setActiveHash] = useState("");

  useEffect(() => {
    const updateHash = () => {
      setActiveHash(window.location.hash || "#home");
    };

    updateHash();
    window.addEventListener("hashchange", updateHash);
    return () => window.removeEventListener("hashchange", updateHash);
  }, []);

  return (
    <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-full">
      <div className="max-w-screen-xl mx-auto px-8 lg:px-20 bg-[#263650] text-white py-3 rounded-full flex items-center justify-between shadow-md">
        {/* Left */}
        <div className="flex gap-6 items-center">
          {navLinks.slice(0, 4).map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`px-4 py-2 rounded-full transition-all duration-300 ${
                activeHash === link.href
                  ? "bg-[#FD853A] font-semibold"
                  : "hover:text-[#FD853A]"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Center Logo */}
        <div className="flex items-center gap-2">
          <Image
            src="/img/logo_zh.jpeg"
            alt="Logo Zolla"
            width={34}
            height={34}
            className="rounded-full object-cover"
          />
          <span className="font-bold tracking-wide text-white">ZOLLAHRP</span>
        </div>

        {/* Right */}
        <div className="flex gap-6 items-center">
          {navLinks.slice(4).map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`px-4 py-2 rounded-full transition-all duration-300 ${
                activeHash === link.href
                  ? "bg-[#FD853A] font-semibold"
                  : "hover:text-[#FD853A]"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
