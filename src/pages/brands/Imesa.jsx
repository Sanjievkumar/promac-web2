import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Imesa = () => {
  const categories = ["Laundry Management Systems", "Smart Connectivity Washers", "Tumble Dryers", "Flatwork Ironers"];
  
  return (
    <div className="min-h-screen pt-32 pb-40 px-10 md:px-24 relative bg-[#F8FAFC]">
      <div aria-hidden className="pointer-events-none fixed inset-0 z-0 opacity-[0.08]" style={{ backgroundImage: `radial-gradient(circle at center, rgba(11,60,93,0.4) 0%, transparent 70%)` }} />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        {/* Back Button */}
        <div className="mb-12 flex justify-start w-full">
          <Link to="/brands">
            <motion.div whileHover={{ x: -5 }} className="inline-flex items-center px-6 py-3 bg-white/60 backdrop-blur-md border border-white/60 rounded-full premium-shadow text-xs font-bold text-[#0B3C5D] uppercase tracking-widest cursor-pointer hover:shadow-md transition-all">
              ← Back to Brands
            </motion.div>
          </Link>
        </div>

        {/* HERO */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="relative text-center mb-24 py-10 w-full flex flex-col items-center justify-center">
          <div className="relative inline-block mt-8 md:mt-0">
             <div className="absolute -top-6 -right-10 md:-right-24 md:-top-8 inline-block px-4 py-1.5 md:px-6 md:py-2 bg-[#0B3C5D]/10 text-[#0B3C5D] rounded-full text-[10px] md:text-xs font-bold tracking-widest uppercase shadow-sm">Strategic Partner</div>
             <h1 className="text-7xl md:text-8xl font-serif text-[#0F172A] tracking-[0.1em] uppercase">IMESA</h1>
          </div>
        </motion.div>

        {/* CATEGORIES */}
        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-24">
          <h2 className="text-4xl font-serif text-[#0F172A] mb-12 border-b border-[#0B3C5D]/10 pb-4">Machine Categories</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {categories.map((cat, i) => (
              <motion.div key={i} whileHover={{ scale: 1.05 }} className="bg-gradient-to-br from-white/90 to-[#0B3C5D]/5 backdrop-blur-md border border-white/60 p-8 rounded-3xl premium-shadow text-center font-bold text-[#0B3C5D] shadow-sm hover:shadow-md transition-all cursor-pointer flex items-center justify-center">
                {cat}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* TECH SPECS */}
        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-24">
          <h2 className="text-4xl font-serif text-[#0F172A] mb-12 border-b border-[#0B3C5D]/10 pb-4">Technical Specifications</h2>
          <div className="bg-white/80 backdrop-blur-xl border border-white/60 rounded-[30px] premium-shadow overflow-hidden">
            <table className="w-full text-left font-sans text-slate-500 font-light">
              <thead className="bg-[#0B3C5D]/5 text-[#0F172A] font-medium text-sm uppercase tracking-widest border-b border-[#0B3C5D]/10">
                <tr>
                  <th className="p-6">Machine Series</th>
                  <th className="p-6">Capacity</th>
                  <th className="p-6">Automation Level</th>
                  <th className="p-6">Core Technology</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#0B3C5D]/5 text-lg">
                <tr className="hover:bg-[#0B3C5D]/5 transition-colors">
                  <td className="p-6 font-medium text-[#0F172A]">LM Series Washers</td>
                  <td className="p-6">8kg - 120kg</td>
                  <td className="p-6">IM11 Touchscreen Core</td>
                  <td className="p-6">Smart Connectivity</td>
                </tr>
                <tr className="hover:bg-[#0B3C5D]/5 transition-colors">
                  <td className="p-6 font-medium text-[#0F172A]">ES Series Dryers</td>
                  <td className="p-6">10kg - 34kg</td>
                  <td className="p-6">Programmable</td>
                  <td className="p-6">Reversing Drum</td>
                </tr>
                <tr className="hover:bg-[#0B3C5D]/5 transition-colors">
                  <td className="p-6 font-medium text-[#0F172A]">MCA Ironers</td>
                  <td className="p-6">1500mm - 3200mm</td>
                  <td className="p-6">Variable Speed</td>
                  <td className="p-6">Chest Heating Tech</td>
                </tr>
              </tbody>
            </table>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="text-center">
          <Link to="/contact">
            <motion.div whileHover={{ scale: 1.05 }} className="inline-block px-12 py-5 bg-[#0B3C5D] text-white rounded-full font-bold tracking-wide premium-shadow">
              Request Technical Datasheet
            </motion.div>
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default Imesa;
