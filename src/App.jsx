import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen w-full bg-black text-white">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <footer className="border-t border-white/10 bg-black/80 py-6 text-center text-sm text-white/60">
        © {new Date().getFullYear()} Innovator.dev — Built with love for the open web.
      </footer>
    </div>
  );
}

export default App;
