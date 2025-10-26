import Navbar from "./components/Navbar";
import About from "./components/About";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";

export default function Home() {
  return (
    <div>
      <Navbar />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </div>);
}
