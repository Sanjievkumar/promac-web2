import React from 'react';
import { motion } from 'framer-motion';

const Brand = () => {
  const brands = [
    { name: "SEA-LION", desc: "Globally established for tunnel washers and automation." },
    { name: "IMESA", desc: "Italian engineering for robust extractors and heavy-duty drying solutions." },
    { name: "MAESTRELLI", desc: "Italian precision in PERC dry-cleaning systems." },
    { name: "MAXIPRESS", desc: "High-pressure garment finishing and steam presses." },
  ];

  return (
    <div className="min-h-screen pt-32 pb-20 px-10 md:px-24 relative overflow-hidden bg-transparent">
       <div aria-hidden className="pointer-events-none fixed inset-0 z-0 opacity-[0.09]" style={{ backgroundImage: `radial-gradient(circle at 1px 1px, rgba(11,60,93,0.22) 1px, transparent 1px)` }} />
       <div className="relative z-10 max-w-6xl mx-auto">
         <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="text-5xl font-serif mb-16 text-center drop-shadow-[0_1px_0_rgba(255,255,255,0.6)]">Our Premium Partners</motion.h1>
         <div className="grid md:grid-cols-2 gap-10">
           {brands.map((b, i) => (
             <motion.div 
               key={b.name}
               initial={{ opacity: 0, y: 40 }}
               whileInView={{ opacity: 1, y: 0 }}
               transition={{ delay: i * 0.1, duration: 0.6 }}
               viewport={{ once: true }}
               whileHover="hover"
               className="bg-white/60 backdrop-blur-md border border-white/40 p-10 rounded-[30px] premium-shadow group relative overflow-hidden flex flex-col justify-between h-72 cursor-pointer"
             >
               <motion.div variants={{ hover: { scale: 1.05 } }} className="absolute inset-0 bg-gradient-to-br from-[#0B3C5D]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
               <div className="relative z-10 text-left">
                 <h3 className="text-3xl font-serif mb-4">{b.name}</h3>
                 <p className="text-[#475569] text-lg max-w-sm">{b.desc}</p>
               </div>
               <motion.div variants={{ hover: { x: 10, opacity: 1 } }} initial={{ opacity: 0 }} className="text-[#0B3C5D] font-bold tracking-wide flex items-center relative z-10 text-left mt-auto">
                 Learn More <span className="ml-2">→</span>
               </motion.div>
             </motion.div>
           ))}
         </div>
       </div>
    </div>
  );
};
export default Brand;
