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

import ScrollReveal from './components/ScrollReveal';

function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <ScrollReveal><Hero /></ScrollReveal>
        <ScrollReveal><Skills /></ScrollReveal>
        <ScrollReveal><Tools /></ScrollReveal>
        <ScrollReveal><Experience /></ScrollReveal>
        <ScrollReveal><Certificates /></ScrollReveal>
        <ScrollReveal><Services /></ScrollReveal>
        <ScrollReveal><Projects /></ScrollReveal>
        <ScrollReveal><Contact /></ScrollReveal>
      </main>
      <Footer />
    </div>
  );
}

export default App;
