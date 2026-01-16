import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Awards from './components/Awards';
import Education from './components/Education';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';
import CustomCursor from './components/CustomCursor';

function App() {
  return (
    <div className="app">
      <CustomCursor />
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Awards />
        <Education />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}

export default App;
