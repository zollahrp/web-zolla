import Home from '../components/sections/Home';
import About from '../components/sections/About';
import Services from '../components/sections/Services';
import Skills from '../components/sections/Skills';
import Portfolio from '../components/sections/Portfolio';
import Achievement from '../components/sections/Achievement';
import Contact from '../components/sections/Contact';
import BlogPreview from '../components/sections/BlogPreview';
import Experience from '../components/sections/Experience';

export default function LandingPage() {
  return (
    <>
      <Home />
      {/* <Services /> */}
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
