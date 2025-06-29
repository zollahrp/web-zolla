"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  FiHome,
  FiSettings,
  FiAward,
  FiBriefcase,
  FiEdit2,
  FiBookOpen,
} from "react-icons/fi";

const navItems = [
  {
    title: "Navigation",
    links: [
      {
        name: "Dashboard",
        href: "/zaga",
        icon: <FiHome size={18} />,
      },
    ],
  },
  {
    title: "Website Manager",
    links: [
      {
        name: "Customize Web",
        href: "/zaga/customize",
        icon: <FiSettings size={18} />,
      },
      {
        name: "Experience",
        href: "/zaga/experience",
        icon: <FiAward size={18} />,
      },
      {
        name: "Portfolio",
        href: "/zaga/portfolio",
        icon: <FiBriefcase size={18} />,
      },
      {
        name: "Achievement",
        href: "/zaga/achievement",
        icon: <FiEdit2 size={18} />,
      },
      {
        name: "Blogs Post",
        href: "/zaga/blogs",
        icon: <FiBookOpen size={18} />,
      },
    ],
  },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-64 min-h-screen border-r border-gray-200 bg-white px-4 py-6">
      {/* Logo */}
      <div className="flex items-center gap-2 mb-8 px-2">
        <Image src="/img/logo_zh.jpeg" alt="Logo Zolla" width={32} height={32} className="rounded" />
        <span className="font-semibold text-lg">Zolla</span>
      </div>

      {/* Navigasi */}
      <nav className="space-y-6 text-sm">
        {navItems.map((section, i) => (
          <div key={i}>
            <h4 className="text-gray-400 uppercase font-semibold text-xs mb-2">{section.title}</h4>
            <ul className="space-y-1">
              {section.links.map((link, j) => {
                const isActive = pathname === link.href;
                return (
                  <li key={j}>
                    <Link
                      href={link.href}
                      className={`flex items-center gap-3 px-3 py-2 rounded-md transition text-sm ${
                        isActive
                          ? "bg-[#f0f0f0] font-medium text-black"
                          : "text-gray-600 hover:bg-gray-100"
                      }`}
                    >
                      {link.icon}
                      {link.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </nav>
    </aside>
  );
}
