import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Brands = () => {
  const brandsData = [
    { name: "SEA-LION", slug: "sea-lion", desc: "Globally established for tunnel washers and ultra-efficient automation.", logo: "SEA-LION", feature: "Automation Systems" },
    { name: "IMESA", slug: "imesa", desc: "Italian engineering for robust extractors and heavy-duty drying solutions.", logo: "IMESA", feature: "Smart Connectivity" },
    { name: "MAESTRELLI", slug: "maestrelli", desc: "Italian precision in PERC dry-cleaning systems and garment care.", logo: "MAESTRELLI", feature: "Eco-Engineering" },
    { name: "MAXIPRESS", slug: "maxipress", desc: "High-pressure garment finishing and commercial steam presses.", logo: "MAXIPRESS", feature: "Steam Ironing Tables" },
    { name: "KLENCO", slug: "klenco", desc: "Premium laundry chemicals and advanced hygiene boosters.", logo: "KLENCO", feature: "Chemical Solutions" }
  ];

  return (
    <div className="min-h-screen pt-32 pb-40 px-10 md:px-24 relative bg-[#F8FAFC]">
      <div aria-hidden className="pointer-events-none fixed inset-0 z-0 bg-[radial-gradient(1200px_600px_at_50%_0%,rgba(11,60,93,0.06),transparent_80%)]" />
      
      <div className="relative z-10 max-w-6xl mx-auto text-center">
        <motion.h1 initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="text-5xl md:text-6xl font-serif text-[#0F172A] mb-8 pb-4">
          Brand Directory
        </motion.h1>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="text-lg text-slate-500 max-w-2xl mx-auto mb-20 leading-relaxed">
          Discover our strategic partnerships with the world’s most advanced commercial laundry manufacturers.
        </motion.p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
          {brandsData.map((brand, i) => (
            <motion.div 
              key={brand.slug}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ y: -12, transition: { duration: 0.4, ease: "easeOut" } }}
              className="bg-gradient-to-br from-white/90 to-[#0B3C5D]/5 backdrop-blur-xl border border-white/60 p-10 rounded-[30px] premium-shadow flex flex-col justify-between hover:shadow-[0_40px_60px_-15px_rgba(11,60,93,0.25)] transition-shadow duration-300 h-full min-h-[420px]"
            >
              <div>
                <span className="inline-block px-3 py-1 bg-[#0B3C5D]/5 text-[#0B3C5D] text-xs font-bold uppercase tracking-widest rounded-full mb-6">{brand.feature}</span>
                <h3 className="text-4xl font-serif mb-6 text-[#0F172A] tracking-wide">{brand.logo}</h3>
                <p className="text-slate-500 text-lg leading-relaxed mb-8">{brand.desc}</p>
              </div>
              <Link to={`/brands/${brand.slug}`} className="mt-auto block">
                <motion.div whileHover={{ scale: 1.02 }} className="w-full text-center px-6 py-4 bg-[#0B3C5D] text-white rounded-full font-bold tracking-wide shadow-md transition-transform cursor-pointer">
                  View Full Catalog
                </motion.div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Brands;
