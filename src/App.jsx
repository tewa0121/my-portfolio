import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      {/* <Projects /> */}    {/* ← Comment out Projects */}
      {/* <Contact /> */}     {/* ← Comment out Contact */}
      {/* <Footer /> */}      {/* ← Comment out Footer */}
    </>
  );
}

export default App;