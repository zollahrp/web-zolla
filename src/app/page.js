import Home from '../components/sections/Home';
import About from '../components/sections/About';
import Services from '../components/sections/Services';
import Skills from '../components/sections/Skills';
import Portfolio from '../components/sections/Portfolio';
import Kompetisi from '../components/sections/Kompetisi';
import Contact from '../components/sections/Contact';
import BlogPreview from '../components/sections/BlogPreview';

export default function LandingPage() {
  return (
    <>
      <Home />
      <Services />
      <About />
      <Skills />
      <Portfolio />
      <Kompetisi />
      <Contact />
      <BlogPreview />
    </>
  );
}
