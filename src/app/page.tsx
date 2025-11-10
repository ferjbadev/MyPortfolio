import Navbar from "./components/Navbar";
import About from "./components/About";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";
import BackToTop from "./components/BackToTop";
import ParticlesBackground from "./components/ParticlesBackground";

export default function Home() {
  return (
    <div className="relative pt-16 scroll-smooth">
      {/* Particles Background - Cubre toda la página */}
      <div className="fixed inset-0 z-0">
        <ParticlesBackground />
      </div>
      
      {/* Contenido principal - Por encima de las partículas */}
      <div className="relative z-10">
        <Navbar />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
        <WhatsAppButton />
        <BackToTop />
      </div>
    </div>);
}
