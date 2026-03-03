import React, { useEffect, useRef } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Internship from './components/Internship';
import Projects from './components/Projects';
import Awards from './components/Awards';
import Certifications from './components/Certifications';
import Education from './components/Education';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';
import CustomCursor from './components/CustomCursor';

function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div style={{ position: 'relative' }}>
      {/* Animated Background */}
      <div className="bg-animated" />

      {/* Scroll Progress */}
      <motion.div
        id="scroll-progress"
        style={{ scaleX, width: '100%' }}
      />

      <CustomCursor />
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Internship />
        <Experience />
        <Projects />
        <Awards />
        <Certifications />
        <Education />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}

export default App;
