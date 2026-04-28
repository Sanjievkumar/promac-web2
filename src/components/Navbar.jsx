import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '../assets/promac-logo.png';

const navLinks = [
  { to: '/', label: 'HOME' },
  { to: '/about', label: 'ABOUT' },
  { to: '/brands', label: 'BRANDS' },
  { to: '/services', label: 'SERVICES' },
  { to: '/consultancy', label: 'CONSULTANCY' },
  { to: '/contact', label: 'CONTACT' },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  // Close menu on route change
  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  // Lock body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  return (
    <>
      <nav className="fixed top-0 w-full flex justify-between items-center px-6 md:px-24 py-5 text-xs tracking-[0.3em] z-50 bg-white/70 backdrop-blur-md border-b border-black/5">
        {/* Logo */}
        <Link to="/" className="hover:opacity-80 transition-opacity">
          <img src={logo} alt="Promac Logo" className="h-10 w-auto" />
        </Link>

        {/* Desktop Links */}
        <div className="hidden lg:flex gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`hover:text-[#0B3C5D] transition-colors ${
                location.pathname === link.to ? 'text-[#0B3C5D] font-semibold' : ''
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden relative z-[60] w-10 h-10 flex flex-col items-center justify-center gap-1.5 focus:outline-none"
          aria-label="Toggle navigation menu"
        >
          <motion.span
            animate={open ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
            className="block w-6 h-[2px] bg-[#0F172A] origin-center"
            transition={{ duration: 0.3 }}
          />
          <motion.span
            animate={open ? { opacity: 0 } : { opacity: 1 }}
            className="block w-6 h-[2px] bg-[#0F172A]"
            transition={{ duration: 0.2 }}
          />
          <motion.span
            animate={open ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
            className="block w-6 h-[2px] bg-[#0F172A] origin-center"
            transition={{ duration: 0.3 }}
          />
        </button>
      </nav>

      {/* ── Mobile Menu Overlay ── */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: '0%' }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="fixed inset-0 z-[55] flex flex-col items-center justify-center backdrop-blur-2xl border-l border-white/30"
            style={{ backgroundColor: 'rgba(220, 234, 245, 0.92)' }}
          >
            <div className="flex flex-col items-center gap-8">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.to}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.06, duration: 0.4 }}
                >
                  <Link
                    to={link.to}
                    onClick={() => setOpen(false)}
                    className={`text-2xl font-serif tracking-[0.15em] transition-colors ${
                      location.pathname === link.to
                        ? 'text-[#0B3C5D] font-bold'
                        : 'text-[#0F172A]/70 hover:text-[#0B3C5D]'
                    }`}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* Bottom tag */}
            <p className="absolute bottom-10 text-[10px] font-bold tracking-[0.3em] uppercase text-[#0B3C5D]/40">
              Promac Technologies
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
