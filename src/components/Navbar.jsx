import React from 'react';
import { Rocket } from 'lucide-react';

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-black/60 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3 text-white">
        <a href="#home" className="inline-flex items-center gap-2 font-semibold">
          <Rocket size={18} /> Innovator.dev
        </a>
        <nav className="hidden items-center gap-6 text-sm md:flex">
          <a href="#about" className="text-white/80 hover:text-white">About</a>
          <a href="#projects" className="text-white/80 hover:text-white">Projects</a>
          <a href="#contact" className="text-white/80 hover:text-white">Contact</a>
        </nav>
        <a href="#contact" className="rounded-lg bg-white/10 px-3 py-1.5 text-sm text-white ring-1 ring-white/20 hover:bg-white/15">
          Hire Me
        </a>
      </div>
    </header>
  );
};

export default Navbar;
