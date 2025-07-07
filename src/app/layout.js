import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from '@/components/layout/Navbar';
import Footer from "@/components/layout/Footer";
import ClientLayout from "@/components/layout/ClientLayout";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Website Zolla Perdana Putra Harahap",
  description: "Website resmi Zolla yang berisi berbagai informasi dan blogs.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script
          defer
          src="https://cloud.umami.is/script.js"
          data-website-id="ae58a994-1d16-47de-b5fd-a590fd494be7"
        ></script>
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <div className="fixed top-0 left-0 w-full h-16 z-40 bg-gradient-to-b pointer-events-none" /> 
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}