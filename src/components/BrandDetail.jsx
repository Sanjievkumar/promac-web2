import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

/**
 * BrandDetail — Shared product-centric brand page
 *
 * Accepts a brand data object (from brandsData.js) and renders:
 *   1. Back button
 *   2. Brand hero with name + strategic partner tag
 *   3. Machine categories pills
 *   4. Product Grid with glassmorphism label cards
 *   5. Technical specs table (horizontally scrollable on mobile)
 *   6. CTA button
 */
const BrandDetail = ({ brand }) => {
  if (!brand) return null;

  return (
    <div className="min-h-screen pt-28 md:pt-32 pb-24 md:pb-40 px-4 md:px-24 relative bg-transparent">
      {/* Subtle radial vignette */}
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 z-0 opacity-[0.08]"
        style={{
          backgroundImage: `radial-gradient(circle at center, rgba(11,60,93,0.4) 0%, transparent 70%)`,
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-2 md:px-6 w-full">
        {/* ── Back Button ── */}
        <div className="mb-8 md:mb-12 flex justify-start w-full">
          <Link to="/brands">
            <motion.div
              whileHover={{ x: -5 }}
              className="inline-flex items-center px-5 py-2.5 md:px-6 md:py-3 bg-white/60 backdrop-blur-md border border-white/60 rounded-full premium-shadow text-[10px] md:text-xs font-bold text-[#0B3C5D] uppercase tracking-widest cursor-pointer hover:shadow-md transition-all"
            >
              ← Back to Brands
            </motion.div>
          </Link>
        </div>

        {/* ── HERO ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative text-center mb-16 md:mb-24 py-6 md:py-10 w-full flex flex-col items-center justify-center"
        >
          <div className="relative inline-block mt-4 md:mt-0">
            <div className="absolute -top-5 -right-4 md:-right-24 md:-top-8 inline-block px-3 py-1 md:px-6 md:py-2 bg-[#0B3C5D]/10 text-[#0B3C5D] rounded-full text-[9px] md:text-xs font-bold tracking-widest uppercase shadow-sm">
              Strategic Partner
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-[#0F172A] tracking-[0.08em] md:tracking-[0.1em] uppercase">
              {brand.name}
            </h1>
          </div>
        </motion.div>

        {/* ── CATEGORIES ── */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 md:mb-24"
        >
          <h2 className="text-3xl md:text-4xl font-serif text-[#0F172A] mb-8 md:mb-12 border-b border-[#0B3C5D]/10 pb-4">
            Machine Categories
          </h2>
          <div
            className={`grid gap-4 md:gap-6 ${
              brand.categories.length <= 3
                ? 'grid-cols-1 md:grid-cols-3'
                : 'grid-cols-1 sm:grid-cols-2 md:grid-cols-4'
            }`}
          >
            {brand.categories.map((cat, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                className="bg-gradient-to-br from-white/90 to-[#0B3C5D]/5 backdrop-blur-md border border-white/60 p-5 md:p-8 rounded-2xl md:rounded-3xl premium-shadow text-center font-bold text-[#0B3C5D] text-sm md:text-base shadow-sm hover:shadow-md transition-all cursor-pointer flex items-center justify-center"
              >
                {cat}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* ── PRODUCT GRID ── */}
        {brand.products && brand.products.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16 md:mb-24"
          >
            <h2 className="text-3xl md:text-4xl font-serif text-[#0F172A] mb-8 md:mb-12 border-b border-[#0B3C5D]/10 pb-4">
              Product Catalog
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-8">
              {brand.products.map((product, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06, duration: 0.5 }}
                  className="group relative rounded-[20px] md:rounded-[24px] overflow-hidden bg-white/60 backdrop-blur-md border border-white/60 premium-shadow hover:shadow-[0_30px_50px_-15px_rgba(11,60,93,0.2)] transition-shadow duration-300"
                >
                  {/* Image container */}
                  <div className="relative aspect-[4/3] overflow-hidden bg-gradient-to-br from-slate-50 to-white">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-contain p-3 md:p-4 transition-transform duration-500 ease-out group-hover:scale-110"
                      loading="lazy"
                    />

                    {/* Glassmorphism label at the bottom of the image */}
                    <div className="absolute bottom-0 left-0 right-0 p-3 md:p-4">
                      <div
                        className="backdrop-blur-xl border border-white/40 rounded-xl md:rounded-2xl px-4 py-2.5 md:px-5 md:py-3 shadow-lg"
                        style={{ backgroundColor: 'rgba(220, 234, 245, 0.75)' }}
                      >
                        <p className="text-xs md:text-sm font-bold text-[#0F172A] tracking-wide leading-snug">
                          {product.name}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* ── TECH SPECS (horizontally scrollable on mobile) ── */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 md:mb-24"
        >
          <h2 className="text-3xl md:text-4xl font-serif text-[#0F172A] mb-8 md:mb-12 border-b border-[#0B3C5D]/10 pb-4">
            Technical Specifications
          </h2>
          <div className="bg-white/80 backdrop-blur-xl border border-white/60 rounded-[20px] md:rounded-[30px] premium-shadow overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left font-sans text-slate-500 font-light min-w-[600px]">
                <thead className="bg-[#0B3C5D]/5 text-[#0F172A] font-medium text-xs md:text-sm uppercase tracking-widest border-b border-[#0B3C5D]/10">
                  <tr>
                    <th className="p-4 md:p-6">Machine Series</th>
                    <th className="p-4 md:p-6">Capacity</th>
                    <th className="p-4 md:p-6">Automation Level</th>
                    <th className="p-4 md:p-6">Core Technology</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#0B3C5D]/5 text-sm md:text-lg">
                  {brand.specs.map((spec, i) => (
                    <tr key={i} className="hover:bg-[#0B3C5D]/5 transition-colors">
                      <td className="p-4 md:p-6 font-medium text-[#0F172A]">{spec.series}</td>
                      <td className="p-4 md:p-6">{spec.capacity}</td>
                      <td className="p-4 md:p-6">{spec.automation}</td>
                      <td className="p-4 md:p-6">{spec.tech}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </motion.div>

        {/* ── CTA ── */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-center"
        >
          <Link to="/contact">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="inline-block px-8 md:px-12 py-4 md:py-5 bg-[#0B3C5D] text-white rounded-full font-bold tracking-wide text-sm md:text-base premium-shadow"
            >
              Request Technical Datasheet
            </motion.div>
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default BrandDetail;
