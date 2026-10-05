import { ThemeProvider } from "./context/ThemeContext";
import { LanguageProvider } from "./context/LanguageContext";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import TechStack from "./components/sections/TechStack";
import Projects from "./components/sections/Projects";
import Testimonials from "./components/sections/Testimonials";
import Contact from "./components/sections/Contact";

export default function App() {
  const handleContextMenu = (e) => {
    if (!e.target.closest("input, textarea")) {
      e.preventDefault();
    }
  };

  return (
    <ThemeProvider>
      <LanguageProvider>
        <div onContextMenu={handleContextMenu} onCopy={(e) => e.preventDefault()}>
        <Navbar />
        <main>
          <Hero />
          <About />
          <TechStack />
          <Projects />
          <Testimonials />
          <Contact />
        </main>
        <Footer />
        </div>
      </LanguageProvider>
    </ThemeProvider>
  );
}
