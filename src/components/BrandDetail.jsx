import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

/**
 * Skeleton placeholder — pulses in #DCEAF5 until image loads
 */
const ImageWithSkeleton = ({ src, alt, className }) => {
  const [loaded, setLoaded] = useState(false);
  return (
    <>
      {!loaded && (
        <div className="absolute inset-0 bg-[#DCEAF5]/40 animate-pulse rounded-2xl z-0" />
      )}
      <img
        src={src}
        alt={alt}
        className={`${className} ${loaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-500`}
        loading="lazy"
        onLoad={() => setLoaded(true)}
      />
    </>
  );
};

/**
 * BrandDetail — Industrial-tech brand page
 *
 * Accepts a brand data object (from brandsData.js) and renders:
 *   1. Back button
 *   2. Brand hero with blueprint grid
 *   3. Machine category toggle pills
 *   4. Staggered product grid (re-animates on category change)
 *   5. Integrated tech-specs table
 *   6. Full-width CTA banner
 */
const BrandDetail = ({ brand }) => {
  const [activeCategory, setActiveCategory] = useState(brand?.categories?.[0] || 'All');
  if (!brand) return null;



  return (
    <div className="min-h-screen pt-28 md:pt-32 pb-24 md:pb-40 px-4 md:px-24 relative bg-transparent">
      {/* Subtle radial vignette */}
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 z-0 opacity-[0.06]"
        style={{
          backgroundImage: `radial-gradient(circle at center, rgba(10,37,64,0.35) 0%, transparent 70%)`,
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-2 md:px-6 w-full">

        {/* ── Back Button ── */}
        <div className="mb-8 md:mb-12 flex justify-start w-full">
          <Link to="/brands">
            <motion.div
              whileHover={{ x: -4 }}
              className="inline-flex items-center gap-2 px-5 py-2.5 md:px-6 md:py-3 bg-white border border-slate-200 rounded-full text-[10px] md:text-xs font-semibold text-slate-600 uppercase tracking-widest cursor-pointer hover:border-slate-300 hover:shadow-sm transition-all duration-200"
            >
              ← Back to Brands
            </motion.div>
          </Link>
        </div>

        {/* ───────────────────────────────────────────────
            HERO
        ─────────────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="relative text-center mb-16 md:mb-24 py-20 md:py-28 w-full flex flex-col items-center justify-center overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm"
        >
          {/* Blueprint grid overlay */}
          <div
            aria-hidden
            className="absolute inset-0 z-0 opacity-[0.06] pointer-events-none"
            style={{
              backgroundImage:
                'linear-gradient(#0A2540 1px, transparent 1px), linear-gradient(90deg, #0A2540 1px, transparent 1px)',
              backgroundSize: '48px 48px',
            }}
          />

          <div className="relative z-10">
            <span className="inline-block mb-6 px-4 py-1.5 bg-slate-50 text-slate-500 border border-slate-200 rounded-full text-[10px] md:text-xs font-semibold tracking-[0.2em] uppercase">
              Strategic Partner
            </span>
            <h1 className="text-5xl md:text-7xl lg:text-[6.5rem] font-serif font-bold text-[#0A2540] tracking-[0.12em] uppercase leading-none">
              {brand.name}
            </h1>
            {brand.tagline && (
              <p className="mt-6 text-slate-400 text-base md:text-lg max-w-xl mx-auto font-medium">
                {brand.tagline}
              </p>
            )}
          </div>
        </motion.div>

        {/* ───────────────────────────────────────────────
            MACHINE CATEGORIES — Exact Reference Design
        ─────────────────────────────────────────────── */}
        <div className="py-16 md:py-24">
          <div className="mb-8 md:mb-10">
            <h2 className="text-2xl md:text-4xl font-serif text-[#0A2540] mb-6">
              Machine Categories
            </h2>
            <div className="w-full h-[1px] bg-[#0A2540]/10"></div>
          </div>
          
          <div className="flex flex-wrap gap-4 md:gap-6">
            {brand.categories.map((cat, i) => {
              const isActive = activeCategory === cat;
              return (
                <button
                  key={i}
                  onClick={() => setActiveCategory(cat)}
                  className="relative px-6 md:px-10 py-4 md:py-[18px] rounded-[16px] md:rounded-[20px] text-xs md:text-sm font-bold tracking-wide transition-all duration-300 ease-out border border-white/80 bg-gradient-to-b from-white/90 to-white/40 backdrop-blur-md shadow-[0_4px_20px_rgb(0,0,0,0.03)] hover:shadow-[0_8px_25px_rgb(0,0,0,0.08)] hover:-translate-y-1 group"
                >
                  <span className="text-[#0A2540]">{cat}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* ───────────────────────────────────────────────
            PRODUCT CATALOG — Static grid, zero Framer Motion
        ─────────────────────────────────────────────── */}
        {brand.products && brand.products.length > 0 && (
          <div className="py-16 md:py-24">
            <h2 className="text-2xl md:text-3xl font-serif text-[#0A2540] mb-10 md:mb-12">
              Product Catalog
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {brand.products.map((product, i) => (
                <div
                  key={i}
                  className="group bg-white rounded-2xl border border-slate-100 transition-all duration-300 hover:shadow-lg"
                >
                  {/* Image — forced immediate render, strict dimensions */}
                  <div className="h-64 w-full flex items-center justify-center p-6 rounded-t-2xl bg-slate-50">
                    <img
                      src={product.image}
                      alt={product.name}
                      loading="eager"
                      decoding="async"
                      className="h-full w-full object-contain"
                    />
                  </div>

                  {/* Label */}
                  <div className="px-5 py-4 border-t border-slate-100">
                    <p className="text-sm md:text-base font-semibold text-slate-700 group-hover:text-[#0A2540] tracking-wide transition-colors duration-200">
                      {product.name}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ───────────────────────────────────────────────
            TECHNICAL SPECIFICATIONS
        ─────────────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="py-16 md:py-24"
        >
          <h2 className="text-2xl md:text-3xl font-serif text-[#0A2540] mb-10 md:mb-12">
            Technical Specifications
          </h2>
          <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left min-w-[600px]">
                <thead>
                  <tr className="bg-slate-50 border-b border-slate-100">
                    <th className="px-6 py-4 text-xs uppercase tracking-wider text-slate-500 font-semibold">Machine Series</th>
                    <th className="px-6 py-4 text-xs uppercase tracking-wider text-slate-500 font-semibold">Capacity</th>
                    <th className="px-6 py-4 text-xs uppercase tracking-wider text-slate-500 font-semibold">Automation Level</th>
                    <th className="px-6 py-4 text-xs uppercase tracking-wider text-slate-500 font-semibold">Core Technology</th>
                  </tr>
                </thead>
                <tbody>
                  {brand.specs.map((spec, i) => (
                    <tr
                      key={i}
                      className={`transition-colors duration-150 ${
                        i % 2 === 0 ? 'bg-white' : 'bg-slate-50/60'
                      } hover:bg-[#DCEAF5]/30`}
                    >
                      <td className="px-6 py-4 text-sm font-semibold text-[#0A2540]">{spec.series}</td>
                      <td className="px-6 py-4 text-sm text-slate-500">{spec.capacity}</td>
                      <td className="px-6 py-4 text-sm text-slate-500">{spec.automation}</td>
                      <td className="px-6 py-4 text-sm text-slate-500">{spec.tech}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </motion.div>

        {/* ───────────────────────────────────────────────
            CTA BANNER
        ─────────────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="py-16 md:py-24"
        >
          <div className="bg-[#0A2540] rounded-2xl p-10 md:p-16 text-center relative overflow-hidden">
            {/* Decorative glows */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-white/[0.04] rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#DCEAF5]/[0.06] rounded-full blur-3xl translate-y-1/2 -translate-x-1/3" />

            <h2 className="text-3xl md:text-5xl font-serif text-white mb-4 relative z-10">
              Need a custom {brand.name} solution?
            </h2>
            <p className="text-slate-400 text-base md:text-lg mb-10 max-w-xl mx-auto relative z-10">
              Our engineering team will design and integrate the perfect automated system for your facility.
            </p>
            <Link to="/contact" className="relative z-10 inline-block">
              <button className="px-8 md:px-10 py-3.5 md:py-4 bg-white text-[#0A2540] rounded-full font-semibold tracking-wider uppercase text-sm shadow-sm hover:shadow-md hover:bg-slate-50 transition-all duration-200">
                Contact Our Engineers
              </button>
            </Link>
          </div>
        </motion.div>

      </div>
    </div>
  );
};

export default BrandDetail;
