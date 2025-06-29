// src/app/zaga/layout.js
import { Geist, Geist_Mono } from "next/font/google";
import "@/app/globals.css";
import Sidebar from "@/components/dashboard/layout/sidebar";
// Ini BENAR (huruf besar, sesuai nama file)
import Header from "@/components/dashboard/layout/header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Zaga Dashboard",
  description: "Halaman admin/dashboard untuk Zolla",
};

export default function ZagaLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="flex min-h-screen">
          {/* Sidebar */}
          <Sidebar />

          {/* Konten Utama */}
          <div className="flex flex-col flex-1">
            {/* Header di atas konten, sejajar dengan Sidebar */}
            <Header />

            {/* Konten Halaman */}
            <main className="flex-1 p-6 bg-gray-50">{children}</main>
          </div>
        </div>
      </body>
    </html>
  );
}
