import Home from "../components/sections/Home";
import About from "../components/sections/About";
import Services from "../components/sections/Services";
import Skills from "../components/sections/Skills";
import Portfolio from "../components/sections/Portfolio";
import Achievement from "../components/sections/Achievement";
import Contact from "../components/sections/Contact";
import BlogPreview from "../components/sections/BlogPreview";
import Experience from "../components/sections/Experience";
import LenisWrapper from "@/components/LenisWrapper";

export const metadata = {
  title: "Website Zolla Perdana Putra Harahap",
  description:
    "Website resmi Zolla. Jelajahi portofolio, artikel, pencapaian, dan kontak dalam satu halaman interaktif.",
  keywords:
    "Zolla, Portofolio, Penulis, Software Engineer, Lomba, IPB, Essay, Developer",
  authors: [{ name: "Zolla Perdana Putra Harahap" }],
};

export default function LandingPage() {
  return (
    <>
      <LenisWrapper />
      <Home />
      <Experience />
      <About />
      <Skills />
      <Portfolio />
      <Achievement />
      <Contact />
      <BlogPreview />
    </>
  );
}
