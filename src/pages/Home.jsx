import React, { useState } from 'react';
import { motion, useScroll, useTransform, useMotionValue, animate } from 'framer-motion';
import { Zap, Monitor, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';

const Section = ({ children, className = "" }) => (
  <section className={className}>
    {children}
  </section>
);

const StatCounter = ({ end, suffix = "" }) => {
  const [inView, setInView] = useState(false);
  const count = useMotionValue(0);
  const rounded = useTransform(count, Math.round);

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      onViewportEnter={() => {
        if (!inView) {
          setInView(true);
          animate(count, end, { duration: 2, ease: "easeOut" });
        }
      }}
      className="text-5xl md:text-6xl font-serif text-[#0F172A] mb-2 font-medium flex items-center justify-center cursor-default"
    >
      <motion.span>{rounded}</motion.span>
      {suffix}
    </motion.div>
  );
};

const Home = () => {
  const { scrollYProgress } = useScroll();
  const yBg2 = useTransform(scrollYProgress, [0, 1], [0, -300]);

  const brands = ['MAXIPRESS', 'SEA-LION', 'KANNEGIESSER', 'MAESTRELLI', 'MAXIPRESS', 'SEA-LION', 'KANNEGIESSER', 'MAESTRELLI'];

  return (
    <div className="relative bg-transparent text-[#0F172A] font-sans overflow-hidden min-h-screen">
      
      {/* Background Textures */}
      <div aria-hidden className="pointer-events-none fixed inset-0 z-0 opacity-10" style={{ backgroundImage: `radial-gradient(circle at 1px 1px, rgba(11,60,93,0.3) 1px, transparent 1px)`, backgroundSize: '32px 32px' }} />
      {/* Light Grid Background as seen in the video */}
      <div aria-hidden className="pointer-events-none absolute inset-0 z-0" style={{ backgroundImage: `linear-gradient(rgba(11,60,93,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(11,60,93,0.05) 1px, transparent 1px)`, backgroundSize: '80px 80px' }} />

      {/* Floating Gradient */}
      <motion.div style={{ y: yBg2 }} className="absolute top-[20%] right-[-10%] w-[600px] h-[600px] rounded-full bg-slate-300/30 blur-[120px] pointer-events-none z-0" />

      {/* 1. HERO SECTION */}
      <Section className="min-h-screen pt-32 md:pt-40 pb-16 md:pb-20 px-4 md:px-6 flex flex-col justify-start relative z-10 text-center">
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }} 
          className="max-w-5xl mx-auto"
        >
          {/* Small Top Label */}
          <div className="inline-block bg-[#0B3C5D]/5 text-[#475569] text-[10px] font-bold px-4 py-2 rounded-full uppercase tracking-[0.2em] shadow-sm mb-6 border border-[#0B3C5D]/10">
            High-Performance Industrial Infrastructure
          </div>

          {/* Main Title */}
          <h1 className="text-4xl md:text-6xl lg:text-[5.5rem] font-serif text-[#0F172A] leading-[1.1] mb-6 md:mb-8 drop-shadow-sm">
            Engineering Excellence<br className="hidden md:block" />
            <span className="italic font-normal">in Industrial Laundry</span>
          </h1>

          {/* Subtitle inside the pill-shaped box */}
          <div className="max-w-3xl mx-auto mb-8 md:mb-10 px-2">
             <div className="bg-white/80 backdrop-blur-md rounded-2xl md:rounded-full px-6 md:px-8 py-4 md:py-5 shadow-sm inline-block">
               <p className="text-slate-500 md:text-lg leading-relaxed font-medium">
                 Leading the digital transformation of India's industrial laundry sector<br className="hidden md:block" />
                 through high-output automation and turnkey engineering.
               </p>
             </div>
          </div>
          
          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row flex-wrap justify-center items-center gap-3 sm:gap-4 px-4 sm:px-0">
            <Link to="/brands" className="group relative flex items-center justify-center gap-3 px-8 py-4 bg-[#0B3C5D] text-white rounded-full shadow-[0_10px_20px_rgba(11,60,93,0.2)] font-bold tracking-widest text-xs uppercase hover:bg-[#082a42] hover:shadow-[0_15px_30px_rgba(11,60,93,0.3)] transition-all w-full sm:w-auto">
              <span>Explore Brands</span>
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </Link>
            <Link to="/services" className="group px-8 py-4 bg-white text-[#0F172A] border border-[#0B3C5D]/10 rounded-full shadow-sm font-bold tracking-widest text-xs uppercase hover:bg-slate-50 transition-all w-full sm:w-auto text-center">
              Our Services
            </Link>
          </div>
        </motion.div>

        {/* BRANDS CAROUSEL STRIP */}
        <div className="mt-24 w-full max-w-[1400px] mx-auto overflow-hidden relative">
          {/* Subtle gradient edges for the carousel */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#e8f2f9]/80 to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#e8f2f9]/80 to-transparent z-10" />
          
          <div className="flex w-max">
            <motion.div 
              animate={{ x: [0, "-100%"] }} 
              transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
              className="flex items-center gap-8 md:gap-16 py-8 pr-8 md:pr-16"
            >
              {brands.map((brand, i) => (
                <div 
                  key={`b1-${i}`} 
                  className="group font-serif text-2xl md:text-4xl lg:text-5xl tracking-wide transition-all duration-300 font-bold whitespace-nowrap text-[#94A3B8] opacity-50 hover:text-[#0B3C5D] hover:opacity-100 hover:drop-shadow-sm cursor-pointer"
                >
                  <span className="px-6 py-2 rounded-[30px] border border-transparent transition-all duration-300 group-hover:bg-white/50 group-hover:backdrop-blur-sm group-hover:border-white group-hover:shadow-[0_10px_20px_rgba(11,60,93,0.05)]">
                    {brand}
                  </span>
                </div>
              ))}
            </motion.div>

            <motion.div 
              animate={{ x: [0, "-100%"] }} 
              transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
              className="flex items-center gap-8 md:gap-16 py-8 pr-8 md:pr-16"
            >
              {brands.map((brand, i) => (
                <div 
                  key={`b2-${i}`} 
                  className="group font-serif text-2xl md:text-4xl lg:text-5xl tracking-wide transition-all duration-300 font-bold whitespace-nowrap text-[#94A3B8] opacity-50 hover:text-[#0B3C5D] hover:opacity-100 hover:drop-shadow-sm cursor-pointer"
                >
                  <span className="px-6 py-2 rounded-[30px] border border-transparent transition-all duration-300 group-hover:bg-white/50 group-hover:backdrop-blur-sm group-hover:border-white group-hover:shadow-[0_10px_20px_rgba(11,60,93,0.05)]">
                    {brand}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
        
      </Section>

      {/* 2. THE PROMAC ECOSYSTEM */}
      <Section className="py-20 px-6 max-w-[1400px] mx-auto relative z-10 text-center">
         <h2 className="text-4xl md:text-5xl font-serif text-[#0F172A] mb-4">The Promac Ecosystem</h2>
         <p className="text-[#475569] font-bold tracking-[0.2em] text-xs uppercase mb-16">End-to-End Enterprise Architecture</p>

         <div className="grid md:grid-cols-3 gap-8 text-center max-w-6xl mx-auto">
            {/* Feature 1 */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true }} 
              className="bg-white/80 backdrop-blur-md rounded-[40px] shadow-sm p-12 relative group transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_25px_50px_-12px_rgba(11,60,93,0.15)]"
            >
               <div className="absolute top-4 right-6 text-[80px] leading-none font-serif font-bold text-slate-100 opacity-60 z-0 transition-transform duration-500 group-hover:scale-110">01</div>
               <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-sm mb-6 mx-auto relative z-10 border border-slate-100 text-[#0B3C5D]">
                 <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>
               </div>
               <h3 className="text-2xl font-serif text-[#0F172A] mb-3 relative z-10">Turnkey Consultancy</h3>
               <p className="text-slate-500 text-sm leading-relaxed relative z-10">Complete plant design from Vastu-compliant layouts to comprehensive infrastructure commissioning.</p>
            </motion.div>

            {/* Feature 2 */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true }} 
              className="bg-white/80 backdrop-blur-md rounded-[40px] shadow-sm p-12 relative group transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_25px_50px_-12px_rgba(11,60,93,0.15)]"
            >
               <div className="absolute top-4 right-6 text-[80px] leading-none font-serif font-bold text-slate-100 opacity-60 z-0 transition-transform duration-500 group-hover:scale-110">02</div>
               <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-sm mb-6 mx-auto relative z-10 border border-slate-100 text-[#0B3C5D]">
                 <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
               </div>
               <h3 className="text-2xl font-serif text-[#0F172A] mb-3 relative z-10">Global Brands</h3>
               <p className="text-slate-500 text-sm leading-relaxed relative z-10">Exclusive strategic partnerships with world-class manufacturers for unmatched operational efficiency.</p>
            </motion.div>

            {/* Feature 3 */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true }} 
              className="bg-white/80 backdrop-blur-md rounded-[40px] shadow-sm p-12 relative group transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_25px_50px_-12px_rgba(11,60,93,0.15)]"
            >
               <div className="absolute top-4 right-6 text-[80px] leading-none font-serif font-bold text-slate-100 opacity-60 z-0 transition-transform duration-500 group-hover:scale-110">03</div>
               <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-sm mb-6 mx-auto relative z-10 border border-slate-100 text-[#0B3C5D]">
                 <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>
               </div>
               <h3 className="text-2xl font-serif text-[#0F172A] mb-3 relative z-10">Lifecycle Support</h3>
               <p className="text-slate-500 text-sm leading-relaxed relative z-10">Nationwide Annual Maintenance Contracts (AMC) and an absolute 24/48-hour rapid breakdown response guarantee.</p>
            </motion.div>
         </div>
      </Section>

      {/* 3. FLAGSHIP MACHINE */}
      <Section className="py-20 px-6 max-w-[1400px] mx-auto">
         <motion.div 
           initial={{ opacity: 0, y: 30 }} 
           whileInView={{ opacity: 1, y: 0 }} 
           viewport={{ once: true }} 
           className="bg-[#0B3C5D] text-white rounded-[40px] p-6 lg:p-12 shadow-[0_20px_40px_rgba(11,60,93,0.3)]"
         >
            <div className="grid lg:grid-cols-2 gap-12 items-center">
               <div className="order-2 lg:order-1 relative rounded-[30px] overflow-hidden ml-4">
                  <div className="absolute top-4 left-4 bg-white/90 text-[#0F172A] text-xs font-bold px-3 py-1.5 rounded-[12px] uppercase tracking-widest z-10 shadow-sm">
                    Technical Flagship
                  </div>
                  <img src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=2670" alt="Industrial Loading Conveyor" className="w-full h-[400px] object-cover rounded-[30px]" />
               </div>
               
               <div className="order-1 lg:order-2">
                 <div className="inline-block bg-white/10 text-white text-[10px] font-bold px-4 py-2 rounded-full uppercase tracking-widest mb-6 border border-white/20">
                    Flagship Focus
                 </div>
                 <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif mb-8 leading-tight">
                    Sea-Lion SDZ60-<br />4C Loading<br />Conveyor
                 </h2>

                 <div className="space-y-6 mb-10">
                    <div className="flex gap-4 items-start">
                       <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center shrink-0 border border-white/20"><Zap className="w-4 h-4 text-white" /></div>
                       <div>
                          <h4 className="font-bold text-lg mb-1">Precision Loading</h4>
                          <p className="text-white/60 text-sm leading-relaxed">Automated linen weighing with ±0.1kg accuracy for consistent batch processing.</p>
                       </div>
                    </div>
                    <div className="flex gap-4 items-start">
                       <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center shrink-0 border border-white/20"><Monitor className="w-4 h-4 text-white" /></div>
                       <div>
                          <h4 className="font-bold text-lg mb-1">Smart Control</h4>
                          <p className="text-white/60 text-sm leading-relaxed">Integrated industrial touch-screen with 99+ programmable cycles for massive-scale efficiency.</p>
                       </div>
                    </div>
                    <div className="flex gap-4 items-start">
                       <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center shrink-0 border border-white/20"><Globe className="w-4 h-4 text-white" /></div>
                       <div>
                          <h4 className="font-bold text-lg mb-1">Global Standard</h4>
                          <p className="text-white/60 text-sm leading-relaxed">Designed for seamless integration with Tunnel Washer (CBW) systems in high-volume facilities.</p>
                       </div>
                    </div>
                 </div>

                 <Link to="/brands/sea-lion" className="group flex items-center justify-between w-full md:w-auto gap-12 px-8 py-5 bg-white text-[#0B3C5D] rounded-full shadow-lg font-bold tracking-widest text-xs uppercase hover:bg-slate-50 transition-all hover:pr-6">
                    <span>View Technical Specifications</span>
                    <span className="text-lg leading-none transition-transform group-hover:translate-x-2">→</span>
                 </Link>
               </div>
            </div>
         </motion.div>
      </Section>
      
      {/* 4. STATS SECTION */}
      <Section className="py-16 md:py-32 px-4 md:px-6 max-w-[1400px] mx-auto text-center border-t border-[#0B3C5D]/10">
         <div className="bg-white/80 backdrop-blur-md rounded-3xl md:rounded-full shadow-sm p-8 md:p-16 max-w-6xl mx-auto flex flex-col md:flex-row justify-around items-center gap-8 md:gap-12">
            <div>
               <StatCounter end={12} suffix="+" />
               <div className="text-xs font-bold tracking-widest uppercase text-slate-400">Years Experience</div>
            </div>
            <div className="w-px h-16 bg-[#0B3C5D]/10 hidden md:block" />
            <div>
               <StatCounter end={500} suffix="+" />
               <div className="text-xs font-bold tracking-widest uppercase text-slate-400">Projects Completed</div>
            </div>
            <div className="w-px h-16 bg-[#0B3C5D]/10 hidden md:block" />
            <div>
               <StatCounter end={50} suffix="+" />
               <div className="text-xs font-bold tracking-widest uppercase text-slate-400">Service Locations</div>
            </div>
         </div>
      </Section>
    </div>
  );
};

export default Home;
