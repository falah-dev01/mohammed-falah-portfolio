import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Tools from './components/Tools';
import Experience from './components/Experience';
import Services from './components/Services';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

import Certificates from './components/Certificates';

function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <Hero />
        <Skills />
        <Tools />
        <Experience />
        <Certificates />
        <Services />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
