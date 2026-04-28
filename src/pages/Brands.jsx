import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Brands = () => {
  const brandsData = [
    { name: "SEA-LION", slug: "sea-lion", desc: "Globally established for tunnel washers and ultra-efficient automation.", logo: "SEA-LION", feature: "Automation Systems" },
    { name: "KANNEGIESSER", slug: "kannegiesser", desc: "The World Market Leader in Industrial Laundry Technology.", logo: "KANNEGIESSER", feature: "Integrated Systems" },
    { name: "MAESTRELLI", slug: "maestrelli", desc: "Italian precision in PERC dry-cleaning systems and garment care.", logo: "MAESTRELLI", feature: "Eco-Engineering" },
    { name: "MAXIPRESS", slug: "maxipress", desc: "High-pressure garment finishing and commercial steam presses.", logo: "MAXIPRESS", feature: "Steam Ironing Tables" },
  ];

  return (
    <div className="min-h-screen pt-28 md:pt-32 pb-24 md:pb-40 px-4 md:px-24 relative bg-transparent">
      <div aria-hidden className="pointer-events-none fixed inset-0 z-0 bg-[radial-gradient(1200px_600px_at_50%_0%,rgba(11,60,93,0.06),transparent_80%)]" />
      
      <div className="relative z-10 max-w-6xl mx-auto text-center">
        <motion.h1 initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="text-4xl md:text-5xl lg:text-6xl font-serif text-[#0F172A] mb-6 md:mb-8 pb-4">
          Brand Directory
        </motion.h1>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="text-base md:text-lg text-slate-500 max-w-2xl mx-auto mb-12 md:mb-20 leading-relaxed px-2">
          Discover our strategic partnerships with the world’s most advanced commercial laundry manufacturers.
        </motion.p>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 text-left max-w-5xl mx-auto">
          {brandsData.map((brand, i) => (
            <motion.div 
              key={brand.slug}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              className="group backdrop-blur-xl border border-white/60 p-6 md:p-10 rounded-[24px] md:rounded-[30px] premium-shadow flex flex-col h-full min-h-[300px] md:min-h-[380px] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_40px_60px_-15px_rgba(11,60,93,0.25)] cursor-pointer"
              style={{ background: 'linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(220,234,245,0.35) 100%)' }}
            >
              <div className="flex-1">
                <span className="inline-block px-4 py-1.5 text-[#0B3C5D] text-xs font-bold uppercase tracking-widest rounded-full mb-6 border border-[#0B3C5D]/10" style={{ backgroundColor: 'rgba(220,234,245,0.5)' }}>{brand.feature}</span>
                <h3 className="text-3xl md:text-4xl font-serif mb-4 text-[#0F172A] tracking-wide">{brand.logo}</h3>
                <p className="text-slate-500 text-base md:text-lg leading-relaxed">{brand.desc}</p>
              </div>
              <Link to={`/brands/${brand.slug}`} className="mt-auto block pt-8">
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
