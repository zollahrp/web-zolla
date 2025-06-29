"use client";

import { usePathname } from "next/navigation";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function ClientLayout({ children }) {
  const pathname = usePathname();

  const hideLayout = pathname.startsWith("/zaga");

  return (
    <>
      {/* Hanya tampilkan blur jika layout tidak disembunyikan */}
      {!hideLayout && (
        <div className="fixed top-0 left-0 w-full h-16 z-40 bg-gradient-to-b from-white/70 to-transparent backdrop-blur-md pointer-events-none" />
      )}

      {/* Navbar dan Footer di-handle masing-masing */}
      <Navbar />
      {children}
      <Footer />
    </>
  );
}
