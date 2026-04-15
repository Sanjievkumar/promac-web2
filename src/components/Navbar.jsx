import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full flex justify-between items-center px-10 md:px-24 py-6 text-xs tracking-[0.3em] z-50 bg-white/70 backdrop-blur-md border-b border-black/5">
      <div className="font-serif text-lg tracking-normal font-bold">
        <Link to="/" className="hover:text-[#0B3C5D] transition-colors">PROMAC</Link>
      </div>
      <div className="hidden md:flex gap-8">
        <Link to="/" className="hover:text-[#0B3C5D] transition-colors">HOME</Link>
        <Link to="/about" className="hover:text-[#0B3C5D] transition-colors">ABOUT</Link>
        <Link to="/brands" className="hover:text-[#0B3C5D] transition-colors">BRANDS</Link>
        <Link to="/services" className="hover:text-[#0B3C5D] transition-colors">SERVICES</Link>
        <Link to="/consultancy" className="hover:text-[#0B3C5D] transition-colors">CONSULTANCY</Link>
        <Link to="/contact" className="hover:text-[#0B3C5D] transition-colors">CONTACT</Link>
      </div>
    </nav>
  );
};

export default Navbar;
