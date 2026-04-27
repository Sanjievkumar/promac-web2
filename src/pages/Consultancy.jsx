import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ClipboardList, Ruler, HardHat, Award, ArrowRight, Leaf, Droplets, ThermometerSun } from 'lucide-react';

const Consultancy = () => {
  const phases = [
    {
      id: "01",
      title: "Requirement Assessment",
      icon: <ClipboardList size={36} strokeWidth={1.5} />,
      content: "Comprehensive space audits, peak load calculation metrics, and specific electric/water utility baseline mapping."
    },
    {
      id: "02",
      title: "Design & Planning",
      icon: <Ruler size={36} strokeWidth={1.5} />,
      content: "Precision AutoCAD layouts optimizing operational workflow, strictly adhering to custom Vastu-integration."
    },
    {
      id: "03",
      title: "Project Execution",
      icon: <HardHat size={36} strokeWidth={1.5} />,
      content: "End-to-end heavy equipment supply, mechanical rigging chains, and advanced electrical and steam plumbing runs."
    },
    {
      id: "04",
      title: "Training & Handover",
      icon: <Award size={36} strokeWidth={1.5} />,
      content: "Rigorous operator certification, emergency safety drills, and establishing preventative maintenance schedules."
    }
  ];

  return (
    <div className="min-h-screen pt-28 md:pt-32 pb-24 md:pb-40 px-4 md:px-24 relative bg-transparent overflow-hidden">
      
      {/* Blueprint Grid Background for Hero */}
      <div className="absolute inset-x-0 top-0 h-[800px] z-0 pointer-events-none opacity-[0.25]" style={{ backgroundImage: 'linear-gradient(#94a3b8 1px, transparent 1px), linear-gradient(90deg, #94a3b8 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
      
      {/* Radial Background */}
      <div aria-hidden className="pointer-events-none fixed inset-0 z-0 opacity-[0.08]" style={{ backgroundImage: `radial-gradient(circle at center, rgba(11,60,93,0.4) 0%, transparent 70%)` }} />
      <div aria-hidden className="pointer-events-none fixed inset-0 z-0 bg-[radial-gradient(1200px_600px_at_50%_0%,rgba(11,60,93,0.06),transparent_80%)]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        
        {/* 1. HERO SECTION */}
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.2, ease: "easeOut" }} className="text-center mb-32 pt-10 relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-white/40 blur-[80px] pointer-events-none z-0 rounded-[100%]"></div>
          <h1 className="relative z-10 text-4xl md:text-6xl lg:text-8xl font-serif text-[#0F172A] tracking-wide mb-8 md:mb-10 leading-tight">
            Engineering the Future<br className="hidden md:block"/> of Laundry
          </h1>
          <p className="relative z-10 text-xl md:text-2xl text-slate-500 max-w-4xl mx-auto leading-relaxed font-bold bg-white/60 p-6 rounded-3xl backdrop-blur-sm border border-white/80">
            From greenfield planning to final commissioning, we provide Vastu-compliant, energy-efficient laundry plant designs for India's elite healthcare and hospitality sectors.
          </p>
        </motion.div>

        {/* 2. TURNKEY PHASES (2x2 Grid) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-24 md:mb-40 max-w-6xl mx-auto">
          {phases.map((phase, index) => (
            <motion.div
              key={phase.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: index * 0.15 }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="bg-white/60 backdrop-blur-xl border border-white/60 hover:border-blue-400/30 p-8 md:p-16 rounded-[30px] md:rounded-[40px] premium-shadow hover:shadow-[0_40px_60px_-15px_rgba(59,130,246,0.15)] transition-all flex flex-col relative overflow-hidden group"
            >
              <div className="absolute -top-12 -right-4 md:-right-8 text-[12rem] font-serif font-extrabold text-[#0B3C5D] opacity-5 select-none z-0 pointer-events-none group-hover:scale-110 group-hover:opacity-10 transition-all duration-700 leading-none">
                {phase.id}
              </div>
              
              <div className="w-24 h-24 bg-[#0B3C5D]/5 rounded-full flex items-center justify-center text-[#0B3C5D] mb-10 relative z-10 border-[3px] border-[#0B3C5D]/10 group-hover:bg-[#0B3C5D]/10 group-hover:border-blue-400/20 transition-colors">
                {phase.icon}
              </div>
              <h3 className="text-3xl md:text-4xl font-serif text-[#0F172A] mb-6 relative z-10 pr-10 leading-tight">{phase.title}</h3>
              <p className="text-lg text-slate-500 leading-relaxed relative z-10">{phase.content}</p>
            </motion.div>
          ))}
        </div>

        {/* 3. SMART DESIGN / ECO-CONSULTANCY */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-6xl mx-auto mb-24 md:mb-40"
        >
          <div className="grid md:grid-cols-5 bg-gradient-to-br from-[#0F172A] to-[#0B3C5D] rounded-[40px] premium-shadow overflow-hidden relative border border-[#1e293b] hover:shadow-[0_40px_60px_-15px_rgba(11,60,93,0.3)] transition-all">
            <div className="absolute inset-0 bg-black mix-blend-overlay opacity-20"></div>
            
            <div className="md:col-span-3 p-12 md:p-20 relative z-10 text-white">
               <div className="inline-flex items-center px-5 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-xs font-bold tracking-widest text-[#60A5FA] uppercase mb-10">
                 <Leaf size={14} className="mr-2" /> Smart Design Standard
               </div>
               <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif mb-8 leading-tight">Eco-Consultancy</h2>
               <p className="text-xl text-slate-300 leading-relaxed mb-12 max-w-lg">
                 Modern commercial utility systems demand absolute algorithmic efficiency. We strictly map your workflow to reduce operational scale costs by up to <span className="text-white font-bold">30%</span>.
               </p>
               
               <div className="grid sm:grid-cols-2 gap-6">
                 {/* Internal Glass Card 1 */}
                 <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/10 hover:bg-white/15 transition-colors flex flex-col justify-between">
                   <div>
                     <Droplets className="text-[#60A5FA] mb-6" size={32} />
                     <h4 className="font-bold text-lg mb-3">Water Recycling Integration</h4>
                     <p className="text-slate-400 leading-relaxed mb-6">Closed-loop designs filtering and capturing operational output runoff.</p>
                   </div>
                   <div className="inline-flex p-3 bg-black/20 rounded-xl border border-white/5">
                     <span className="text-xs font-bold text-[#60A5FA] tracking-wide uppercase leading-tight">Impact: Saves up to 40% Fresh Water</span>
                   </div>
                 </div>

                 {/* Internal Glass Card 2 */}
                 <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/10 hover:bg-white/15 transition-colors flex flex-col justify-between">
                   <div>
                     <ThermometerSun className="text-[#FBBF24] mb-6" size={32} />
                     <h4 className="font-bold text-lg mb-3">Heat Recovery Systems</h4>
                     <p className="text-slate-400 leading-relaxed mb-6">Capturing ambient exhaust steam to pre-heat primary intake feeds.</p>
                   </div>
                   <div className="inline-flex p-3 bg-black/20 rounded-xl border border-white/5">
                     <span className="text-xs font-bold text-[#FBBF24] tracking-wide uppercase leading-tight">Impact: Reduces Steam Consumption by 20%</span>
                   </div>
                 </div>
               </div>
            </div>
            
            <div className="hidden md:block md:col-span-2 relative">
               <div className="absolute inset-0 bg-gradient-to-l from-transparent via-[#0F172A]/40 to-[#0F172A]/90 z-10" />
               <img src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=1470&auto=format&fit=crop" alt="Engineering Blueprint" className="w-full h-full object-cover opacity-80 mix-blend-luminosity" />
            </div>
          </div>
        </motion.div>

        {/* 4. CTA SECTION */}
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="max-w-5xl mx-auto py-10">
          <div className="bg-gradient-to-br from-[#0B3C5D]/5 to-white/60 backdrop-blur-2xl border border-white/60 p-10 md:p-24 rounded-[30px] md:rounded-[40px] premium-shadow text-center hover:shadow-[0_20px_40px_-5px_rgba(11,60,93,0.15)] transition-all">
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif text-[#0F172A] mb-6 md:mb-8 leading-tight">Ready for a complete facility audit?</h2>
            <p className="text-lg md:text-xl text-slate-500 mb-10 md:mb-12 max-w-2xl mx-auto">Engage directly with our core engineering team to map your physical requirements and blueprint.</p>
            
            <Link to="/contact" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
              <motion.div whileHover={{ scale: 1.05 }} className="inline-flex flex-row items-center justify-center px-10 py-5 bg-[#0B3C5D] text-white rounded-full text-lg font-bold tracking-widest uppercase premium-shadow cursor-pointer mb-6">
                Schedule an Expert Consultation
                <ArrowRight className="ml-4" size={24} />
              </motion.div>
            </Link>

            <div className="block mt-2">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Our senior engineers typically respond within 24 hours.</span>
            </div>
          </div>
        </motion.div>

      </div>
    </div>
  );
};

export default Consultancy;
