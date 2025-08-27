import React from 'react';

const Navigation = ({ config }) => (
  <header className="fixed top-0 left-0 right-0 z-50 p-4 w-full min-h-18 bg-white/10 backdrop-blur-md">
    <div className="max-w-6xl mx-auto flex items-center justify-between gap-4">
      <nav className="flex gap-6 items-center" aria-label="Primary">
        <a href="#home" className="text-white font-light text-sm tracking-wide px-3 py-2 rounded-md transition-all duration-200 hover:bg-white/15">Home</a>
        <a href="#services" className="text-white font-light text-sm tracking-wide px-3 py-2 rounded-md transition-all duration-200 hover:bg-white/15">Services</a>
        <a href="#about" className="text-white font-light text-sm tracking-wide px-3 py-2 rounded-md transition-all duration-200 hover:bg-white/15">About us</a>
        <a href="#courses" className="text-white font-light text-sm tracking-wide px-3 py-2 rounded-md transition-all duration-200 hover:bg-white/15">Courses</a>
        <a href="#work" className="text-white font-light text-sm tracking-wide px-3 py-2 rounded-md transition-all duration-200 hover:bg-white/15">Our Work</a>
        <a href="#blog" className="text-white font-light text-sm tracking-wide px-3 py-2 rounded-md transition-all duration-200 hover:bg-white/15">Blog</a>
        <a href="#contact" className="text-white font-light text-sm tracking-wide px-3 py-2 rounded-md transition-all duration-200 hover:bg-white/15">Contact Us</a>
      </nav>
      <a href="#contact" className="bg-white/15 text-white font-normal text-sm px-5 py-3 rounded-md border border-white/30 transition-all duration-200 hover:bg-white/25 hover:border-white/50">
        Get in touch
      </a>
    </div>
  </header>
);
export default Navigation;


