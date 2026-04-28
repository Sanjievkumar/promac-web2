import React from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import PageTransition from './components/PageTransition';
import Home from './pages/Home';
import About from './pages/About';
import Brands from './pages/Brands';
import Service from './pages/Service';
import Consultancy from './pages/Consultancy';
import Contact from './pages/Contact';

// Brands Pages
import SeaLion from './pages/brands/SeaLion';
import Kannegiesser from './pages/brands/Kannegiesser';
import Maestrelli from './pages/brands/Maestrelli';
import Maxipress from './pages/brands/Maxipress';


/* ── Animated Routes wrapper ── */
function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageTransition><Home /></PageTransition>} />
        <Route path="/about" element={<PageTransition><About /></PageTransition>} />
        <Route path="/brands" element={<PageTransition><Brands /></PageTransition>} />
        <Route path="/brands/sea-lion" element={<PageTransition><SeaLion /></PageTransition>} />
        <Route path="/brands/kannegiesser" element={<PageTransition><Kannegiesser /></PageTransition>} />
        <Route path="/brands/maestrelli" element={<PageTransition><Maestrelli /></PageTransition>} />
        <Route path="/brands/maxipress" element={<PageTransition><Maxipress /></PageTransition>} />

        <Route path="/services" element={<PageTransition><Service /></PageTransition>} />
        <Route path="/consultancy" element={<PageTransition><Consultancy /></PageTransition>} />
        <Route path="/contact" element={<PageTransition><Contact /></PageTransition>} />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />

      {/* ── Global client-branded gradient background ── */}
      <div className="min-h-screen bg-gradient-to-br from-[#c9e1f5] via-[#e8f2f9] to-white">
        <div className="flex flex-col min-h-screen">
          <Navbar />

          <div className="flex-grow">
            <AnimatedRoutes />
          </div>

          <Footer />

          {/* Floating Global WhatsApp Anchor */}
          <a href="https://wa.me/919566340888" target="_blank" rel="noopener noreferrer" className="fixed bottom-8 right-8 z-[100] group">
            <motion.div 
              initial={{ scale: 0 }} 
              animate={{ scale: 1 }} 
              transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.5 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="bg-[#25D366] w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center shadow-[0_10px_20px_-5px_rgba(37,211,102,0.6)] border-[3px] border-white group-hover:shadow-[0_20px_40px_-5px_rgba(37,211,102,0.8)] transition-all cursor-pointer"
            >
              <svg viewBox="0 0 24 24" className="w-8 h-8 md:w-10 md:h-10 fill-white drop-shadow-md" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
            </motion.div>
            {/* Hover Tooltip Bounding */}
            <div className="absolute -top-16 right-0 md:-top-14 bg-[#0F172A] text-white text-xs md:text-sm font-bold px-4 py-2 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-xl border border-white/10 pointer-events-none tracking-widest uppercase">
              Emergency Support
            </div>
          </a>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
