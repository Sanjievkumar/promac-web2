import React, { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, useInView, animate } from 'framer-motion';
import { Link } from 'react-router-dom';

const AnimatedCounter = ({ from, to, duration = 2 }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  
  useEffect(() => {
    if (inView) {
      const controls = animate(from, to, {
        duration,
        ease: "easeOut",
        onUpdate(value) {
          if (ref.current) {
            ref.current.textContent = value.toFixed(0) + "+";
          }
        }
      });
      return () => controls.stop();
    }
  }, [from, to, inView, duration]);

  return <span ref={ref}>{from}+</span>;
};

const Section = ({ children, className = "", id }) => (
  <motion.section 
    id={id}
    initial={{ opacity: 0, y: 40 }} 
    whileInView={{ opacity: 1, y: 0 }} 
    transition={{ duration: 0.8, ease: "easeOut" }}
    viewport={{ once: true, margin: "-50px" }}
    className={className}
  >
    {children}
  </motion.section>
);

const About = () => {
  const { scrollYProgress } = useScroll();
  const yBg1 = useTransform(scrollYProgress, [0, 1], [0, 300]);
  const yBg2 = useTransform(scrollYProgress, [0, 1], [0, -400]);

  const wipeIn = {
    hidden: { clipPath: "inset(0 100% 0 0)" },
    show: { clipPath: "inset(0 0% 0 0)", transition: { duration: 1.1, ease: "easeOut" } }
  };

  const steps = [
    { num: "01", title: "Consultation", desc: "Expert assessment of plant layout and Vastu-compliant integration.", tag: "Outcome: Vastu-Compliant Blueprint" },
    { num: "02", title: "Equipment Selection", desc: "Partnering with industry titans like Sea-Lion, Maestrelli, and Maxipress.", tag: "Focus: Peak Efficiency Scaling" },
    { num: "03", title: "Installation", desc: "Expert commissioning to ensure peak technological innovation.", tag: "Lead Time: 1-2 Weeks" },
    { num: "04", title: "Support", desc: "AMC and unrivaled after-sales support with genuine spare parts.", tag: "Outcome: Near-Zero Downtime" }
  ];

  const partners = ['SEA-LION', 'KANNEGIESSER', 'MAESTRELLI', 'MAXIPRESS'];

  return (
    <div className="relative bg-transparent text-[#0F172A] font-sans overflow-hidden">
      {/* Motion Vignette Background */}
      <motion.div aria-hidden className="pointer-events-none fixed inset-0 z-0 opacity-[0.08]" 
        style={{ backgroundImage: `radial-gradient(circle at center, rgba(11,60,93,0.4) 0%, transparent 70%)` }} 
        animate={{ scale: [1, 1.1, 1], opacity: [0.05, 0.1, 0.05] }} 
        transition={{ duration: 15, repeat: Infinity, ease: 'linear' }} 
      />
      <div aria-hidden className="pointer-events-none fixed inset-0 z-0 opacity-10" style={{ backgroundImage: `radial-gradient(circle at 1px 1px, rgba(11,60,93,0.3) 1px, transparent 1px)`, backgroundSize: '32px 32px' }} />

      {/* PARALLAX FLOATING ELEMENTS */}
      <motion.div style={{ y: yBg1 }} className="absolute top-[10%] left-[-15%] w-[800px] h-[800px] rounded-full bg-[#0B3C5D]/10 blur-[120px] pointer-events-none z-0" />
      <motion.div style={{ y: yBg2 }} className="absolute top-[30%] right-[-10%] w-[600px] h-[600px] rounded-full bg-slate-400/20 blur-[100px] pointer-events-none z-0" />

      {/* 1. HERO UPGRADE */}
      <Section className="min-h-[100vh] pt-28 md:pt-32 pb-24 md:pb-40 px-4 md:px-24 flex flex-col justify-center relative z-10">
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.9 }}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif mb-6 drop-shadow-[0_1px_0_rgba(255,255,255,0.6)] text-[#0F172A] leading-tight">
              A Journey Built on Expertise
            </h1>
            <p className="text-slate-500 max-w-lg text-lg leading-relaxed mb-8">
              Decades of hands-on industry experience, providing advanced commercial laundry machines across India. We champion technological innovation and sustainable operations.
            </p>
            <motion.div 
              whileHover={{ scale: 1.05 }} 
              onClick={() => document.getElementById('our-journey')?.scrollIntoView({ behavior: 'smooth' })}
              className="inline-block px-8 py-4 bg-[#0B3C5D] text-white rounded-full shadow-lg font-medium cursor-pointer tracking-wide"
            >
              Discover Our Roots
            </motion.div>
          </motion.div>
          
          <motion.div variants={wipeIn} initial="hidden" animate="show" className="relative group">
            <motion.div animate={{ y: [0, -15, 0] }} transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }} className="relative bg-white/40 backdrop-blur-xl border border-white/60 p-4 rounded-[40px] premium-shadow hover:shadow-[0_20px_40px_-5px_rgba(11,60,93,0.15)] transition-shadow duration-500">
              <img src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&q=80&w=2070" className="rounded-[30px] w-full h-[500px] object-cover" alt="Industrial Engineering Blueprint" />
              <div className="absolute inset-0 rounded-[40px] ring-1 ring-white/40 pointer-events-none" />
              <div className="absolute inset-0 bg-gradient-to-tr from-[#0B3C5D]/10 to-transparent rounded-[40px] pointer-events-none" />
            </motion.div>
          </motion.div>
        </div>
      </Section>

      {/* 2. THE "WHY PROMAC" SECTION */}
      <Section id="our-journey" className="pt-12 md:pt-20 pb-24 md:pb-40 px-4 md:px-24 relative z-10 max-w-7xl mx-auto">
        <div className="bg-white/70 backdrop-blur-xl border border-white/60 p-8 md:p-20 rounded-[30px] md:rounded-[40px] premium-shadow hover:shadow-[0_20px_40px_-5px_rgba(11,60,93,0.10)] transition-all duration-500">
          <div className="grid md:grid-cols-5 gap-12 items-center">
            <div className="md:col-span-2 text-center md:text-left border-b md:border-b-0 md:border-r border-[#0B3C5D]/10 pb-10 md:pb-0 md:pr-10 flex flex-col justify-center h-full">
              <h2 className="text-7xl lg:text-9xl font-serif text-[#0B3C5D] leading-none mb-4 drop-shadow-sm flex items-center justify-center md:justify-start">
                <AnimatedCounter from={0} to={12} duration={2} />
              </h2>
              <p className="font-bold tracking-widest text-sm text-[#475569] uppercase mt-2">Years of Redefining Laundry Excellence</p>
              
              <div className="mt-12 flex flex-wrap gap-8 justify-center md:justify-start">
                <div>
                  <div className="text-4xl font-serif text-[#0F172A]"><AnimatedCounter from={0} to={500} duration={2.5} /></div>
                  <div className="text-xs font-bold tracking-widest text-[#475569]/60 uppercase mt-1">Projects</div>
                </div>
                <div className="w-px bg-[#0B3C5D]/10 hidden md:block"></div>
                <div>
                  <div className="text-4xl font-serif text-[#0F172A]"><AnimatedCounter from={0} to={50} duration={2} /></div>
                  <div className="text-xs font-bold tracking-widest text-[#475569]/60 uppercase mt-1 max-w-[120px] leading-tight">Strategic Locations Across India</div>
                </div>
              </div>
            </div>
            <div className="md:col-span-3">
              <h3 className="text-3xl font-serif mb-6 text-[#0F172A]">From Coimbatore to Nationwide Leaders</h3>
              <p className="text-lg text-slate-500 leading-relaxed mb-8">
                What began as a localized vision in Coimbatore has aggressively expanded into a national powerhouse for <span className="font-semibold text-[#0B3C5D]">Turnkey Projects</span>. We identified a critical gap in the market for robust, technologically advanced, and highly reliable commercial laundering setups. 
              </p>
              <p className="text-lg text-slate-500 leading-relaxed">
                By cementing strategic partnerships with global manufacturers and focusing relentlessly on <span className="font-semibold text-[#0B3C5D]">sustainable operations</span> and <span className="font-semibold text-[#0B3C5D]">unrivaled after-sales support</span>, Promac has successfully commissioned comprehensive plants tailored exactly to client volume scaling needs.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* 3. OUR TURNKEY PROCESS (Interactive Timeline) */}
      <Section className="pt-12 md:pt-20 pb-24 md:pb-40 px-4 md:px-24 relative z-10">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-serif mb-16 md:mb-24 text-center text-[#0F172A]">Our Turnkey Process</h2>
          
          <div className="relative">
            {/* The vertical process line */}
            <div className="absolute left-[28px] md:left-1/2 top-0 bottom-0 w-[2px] bg-[#0B3C5D]/10 transform md:-translate-x-1/2" />
            
            {/* Glowing animated drawing line */}
            <motion.div 
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              style={{ transformOrigin: "top" }}
              className="absolute left-[28px] md:left-1/2 top-0 bottom-0 w-[2px] bg-[#0B3C5D] transform md:-translate-x-1/2 z-0 shadow-[0_0_15px_rgba(11,60,93,0.8)]" 
            />

            <div className="space-y-24">
              {steps.map((step, i) => (
                <div key={step.num} className={`relative z-10 flex flex-col md:flex-row items-center gap-8 md:gap-0 ${i % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
                  {/* Step Container (Left / Right) */}
                  <motion.div 
                    initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }} 
                    whileInView={{ opacity: 1, x: 0 }} 
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.7 }}
                    className={`w-full md:w-1/2 flex ${i % 2 === 0 ? 'md:justify-end' : 'md:justify-start'} pl-20 md:pl-0 ${i % 2 === 0 ? 'md:pr-16' : 'md:pl-16'}`}
                  >
                    <motion.div 
                      whileHover={{ scale: 1.05 }} 
                      className="bg-white/60 backdrop-blur-md hover:backdrop-blur-2xl border border-white/60 p-8 rounded-[30px] premium-shadow w-full text-left relative overflow-hidden group hover:shadow-[0_20px_40px_-5px_rgba(11,60,93,0.15)] transition-all duration-300"
                    >
                      <div className="absolute top-0 right-0 w-32 h-32 bg-[#0B3C5D]/5 rounded-bl-[100px] -z-10 group-hover:scale-110 group-hover:bg-[#0B3C5D]/10 transition-transform duration-500" />
                      <div className="text-6xl font-serif text-[#0B3C5D]/10 font-bold mb-4 -ml-2 -mt-2 group-hover:text-[#0B3C5D]/20 transition-colors">{step.num}</div>
                      <h4 className="text-2xl font-serif text-[#0F172A] mb-3 relative z-10">{step.title}</h4>
                      <p className="text-slate-500 text-lg leading-relaxed relative z-10 mb-6">{step.desc}</p>
                      
                      {/* Sub Tag */}
                      <span className="inline-block bg-[#0B3C5D]/10 text-[#0B3C5D] text-xs font-bold px-4 py-2 rounded-full uppercase tracking-widest leading-none drop-shadow-sm">{step.tag}</span>
                    </motion.div>
                  </motion.div>
                  
                  {/* Center Dot */}
                  <div className="absolute left-0 md:left-1/2 bg-[#F8FAFC] transform md:-translate-x-1/2 w-14 h-14 rounded-full border-[4px] border-[#0B3C5D]/20 flex items-center justify-center premium-shadow z-20">
                     <div className="w-4 h-4 bg-[#0B3C5D] rounded-full shadow-[0_0_10px_rgba(11,60,93,0.5)]" />
                  </div>

                  {/* Empty space for the other half */}
                  <div className="hidden md:block w-1/2" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* 4. TECHNICAL LEADERSHIP */}
      <Section className="pt-12 md:pt-20 pb-24 md:pb-40 px-4 md:px-24 relative z-10">
        <h2 className="text-4xl md:text-5xl font-serif text-center mb-12 md:mb-16 text-[#0F172A]">Technical Leadership</h2>
        
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 max-w-6xl mx-auto">
          {/* Flagship Product */}
          <div className="bg-gradient-to-br from-[#0B3C5D]/5 to-transparent backdrop-blur-xl border border-[#0B3C5D]/20 p-12 rounded-[40px] premium-shadow hover:shadow-[0_20px_40px_-5px_rgba(11,60,93,0.15)] transition-all duration-300">
            <div className="bg-[#0B3C5D] text-white text-xs font-bold px-4 py-2 rounded-full inline-block uppercase tracking-widest mb-6 shadow-md">Flagship Standard</div>
            <h3 className="text-4xl font-serif text-[#0F172A] mb-4">SDZ60-4C Conveyor</h3>
            <p className="text-lg text-slate-500 leading-relaxed">
              We exclusively champion high-efficiency systems like the revolutionary SDZ60-4C conveyor framework. These advanced machine integrations radically minimize labor costs and optimize resource consumption, securing deeply <span className="font-semibold text-[#0F172A]">sustainable operations</span> for our partners.
            </p>
          </div>
          
          {/* Genuine Spare Parts */}
          <div className="bg-white/80 backdrop-blur-xl border border-white/60 p-12 rounded-[40px] premium-shadow flex flex-col justify-center hover:shadow-[0_20px_40px_-5px_rgba(11,60,93,0.15)] transition-all duration-300">
            <h3 className="text-4xl font-serif text-[#0F172A] mb-4">Genuine OEM Parts</h3>
            <p className="text-lg text-slate-500 leading-relaxed mb-8">
              Our pledge to <span className="font-semibold text-[#0B3C5D]">unrivaled after-sales support</span> means downtime is kept at near-zero. We maintain a huge, active inventory of certified manufacturer components for virtually all major commercial laundry brands operating across the country.
            </p>
            <Link to="/brands">
              <motion.div whileHover={{ x: 10 }} className="text-[#0B3C5D] font-bold tracking-widest uppercase text-sm flex items-center cursor-pointer">
                Explore Our Inventory <span className="ml-2">→</span>
              </motion.div>
            </Link>
          </div>
        </div>
      </Section>

      {/* 5. GLOBAL PARTNERSHIP GRID */}
      <Section className="pt-16 md:pt-24 pb-24 md:pb-40 px-4 md:px-24 relative z-10 max-w-6xl mx-auto border-t border-[#0B3C5D]/10">
        <p className="text-center text-sm font-bold tracking-widest text-slate-500 uppercase mb-16">Global Engineering Partners</p>
        <div className="flex flex-wrap justify-center md:justify-around items-center gap-12 font-serif font-bold">
          {partners.map((partner) => (
            <motion.div 
              key={partner} 
              whileHover={{ 
                scale: 1.1, 
                color: '#0B3C5D', 
                filter: 'drop-shadow(0 0 12px rgba(11,60,93,0.3)) grayscale(0%)'
              }}
              className="text-3xl md:text-5xl text-slate-300 filter grayscale transition-all duration-500 cursor-pointer"
            >
              {partner}
            </motion.div>
          ))}
        </div>
      </Section>

      {/* 6. MISSION & VISION */}
      <Section className="pt-16 md:pt-24 pb-32 md:pb-48 px-4 md:px-24 relative z-10 text-center max-w-6xl mx-auto">
        <div className="bg-white/60 backdrop-blur-2xl border border-white/60 p-10 md:p-24 rounded-[30px] md:rounded-[40px] premium-shadow hover:shadow-[0_20px_40px_-5px_rgba(11,60,93,0.1)] transition-all duration-500">
          <p className="text-2xl md:text-4xl lg:text-6xl font-serif text-[#0B3C5D] leading-normal italic drop-shadow-sm mb-10 max-w-4xl mx-auto">
            "Our mission is to bridge the gap between industrial necessity and technological elegance."
          </p>
          <div className="w-20 h-[2px] bg-[#0B3C5D]/20 mx-auto mb-6" />
          <h4 className="font-bold tracking-widest text-[#475569] uppercase text-sm">The Management Team</h4>
        </div>
      </Section>

    </div>
  );
};

export default About;
