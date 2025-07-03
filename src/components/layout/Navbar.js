"use client";
import { usePathname } from "next/navigation"; // <--- Tambahin ini

import {
  Navbar as RootNavbar,
  NavBody,
  NavItems,
  MobileNav,
  NavbarLogo,
  NavbarButton,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "@/components/ui/resizable-navbar";

import { useState, useEffect } from "react";

const navLinks = [
  { name: "Home", href: "home" },
  { name: "Services", href: "service" },
  { name: "About", href: "about" },
  { name: "Skills", href: "skills" },
  { name: "Portfolio", href: "portfolio" },
  { name: "Achievement", href: "achievement" },
  { name: "Contact", href: "contact" },
  // { name: "Blogs", href: "blogs" },
];

export default function Navbar() {
  const pathname = usePathname(); // <--- Tambahin ini
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeHash, setActiveHash] = useState("#home");

  const handleScroll = (id) => {
    if (typeof window === "undefined") return;

    const isHomePage = window.location.pathname === "/";

    // Kalau bukan di landing page, langsung redirect ke landing + id
    if (!isHomePage) {
      window.location.href = `/#${id}`;
      return;
    }

    const target = document.getElementById(id);
    if (!target) return; // Hindari error offsetTop

    const yOffset = -window.innerHeight / 12;
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

  useEffect(() => {
    if (typeof window === "undefined") return;

    const isLandingPage = window.location.pathname === "/";

    // Kalau bukan landing page, reset activeHash & stop scroll spy
    if (!isLandingPage) {
      setActiveHash(null);
      return;
    }

    const handleScrollSpy = () => {
      const offsets = navLinks
        .map((link) => {
          const el = document.getElementById(link.href);
          if (el) {
            return {
              id: link.href,
              offsetTop: el.offsetTop,
              height: el.offsetHeight,
            };
          }
          return null;
        })
        .filter(Boolean);

      if (offsets.length === 0) return;

      const scrollY = window.scrollY + 120;

      const lastSection = offsets[offsets.length - 1];
      const endOfLastSection = lastSection.offsetTop + lastSection.height;

      if (scrollY > endOfLastSection) {
        setActiveHash(null);
        return;
      }

      const current = offsets
        .reverse()
        .find((section) => scrollY >= section.offsetTop);

      if (current) {
        setActiveHash(`#${current.id}`);
      } else {
        setActiveHash(null);
      }
    };

    window.addEventListener("scroll", handleScrollSpy);
    return () => window.removeEventListener("scroll", handleScrollSpy);
  }, []);

  // Kalau lagi di halaman dashboard, jangan render navbar
  if (pathname.startsWith("/zaga")) return null;

  return (
    <div className="relative w-full">
      <RootNavbar className="fixed top-0 left-0 z-50 w-full">
        {/* Desktop Navigation */}
        <NavBody>
          <NavbarLogo />
          <NavItems
            items={navLinks.map((link) => ({
              name: link.name,
              link: `#${link.href}`,
              onClick: () => handleScroll(link.href),
              active: activeHash === `#${link.href}`,
            }))}
          />
          <div className="flex items-center gap-4">
            <NavbarButton
              variant="primary"
              onClick={() => handleScroll("blogs")}
            >
              Blogs
            </NavbarButton>
          </div>
        </NavBody>

        {/* Mobile Navigation */}
        <MobileNav>
          <MobileNavHeader>
            <NavbarLogo />
            <MobileNavToggle
              isOpen={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            />
          </MobileNavHeader>

          <MobileNavMenu
            isOpen={isMobileMenuOpen}
            onClose={() => setIsMobileMenuOpen(false)}
          >
            {navLinks.map((item, idx) => (
              <a
                key={`mobile-link-${idx}`}
                onClick={() => {
                  handleScroll(item.href);
                  setIsMobileMenuOpen(false);
                }}
                className={`relative text-neutral-600 dark:text-neutral-300 ${
                  activeHash === `#${item.href}`
                    ? "font-semibold text-[#FD853A]"
                    : ""
                }`}
              >
                <span className="block">{item.name}</span>
              </a>
            ))}
            <div className="flex w-full flex-col gap-4">
              <div className="flex items-center gap-4">
                <NavbarButton
                  variant="primary"
                  onClick={() => handleScroll("blogs")}
                  className={
                    activeHash === "#blogs" ? "ring-2 ring-[#FD853A]" : ""
                  }
                >
                  Blogs
                </NavbarButton>
              </div>
            </div>
          </MobileNavMenu>
        </MobileNav>
      </RootNavbar>
    </div>
  );
}
