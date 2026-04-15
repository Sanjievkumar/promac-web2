import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ShieldCheck, Cpu, PackageCheck, ArrowRight, ClipboardCheck, UserCheck, Wrench, Stethoscope, CheckCircle2 } from 'lucide-react';

const Service = () => {
  const oemParts = ["Maestrelli Filters", "Sea-Lion Bearings", "Imesa Heating Elements", "Klenco Emulsifiers", "Maestrelli Filters", "Sea-Lion Bearings", "Imesa Heating Elements", "Klenco Emulsifiers", "Maestrelli Filters", "Sea-Lion Bearings", "Imesa Heating Elements", "Klenco Emulsifiers"];

  const workflow = [
    { step: "01", name: "Service Request", icon: <ClipboardCheck size={28} strokeWidth={2} /> },
    { step: "02", name: "Expert Assignment", icon: <UserCheck size={28} strokeWidth={2} /> },
    { step: "03", name: "On-Site Intervention", icon: <Wrench size={28} strokeWidth={2} /> },
    { step: "04", name: "Post-Service Audit", icon: <Stethoscope size={28} strokeWidth={2} /> }
  ];

  return (
    <div className="min-h-screen pt-32 pb-40 px-10 md:px-24 relative bg-[#F8FAFC]">
      {/* Radial Background */}
      <div aria-hidden className="pointer-events-none fixed inset-0 z-0 opacity-[0.08]" style={{ backgroundImage: `radial-gradient(circle at center, rgba(11,60,93,0.4) 0%, transparent 70%)` }} />
      <div aria-hidden className="pointer-events-none fixed inset-0 z-0 bg-[radial-gradient(1200px_600px_at_50%_0%,rgba(11,60,93,0.06),transparent_80%)]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        
        {/* 1. HERO SECTION */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16 pt-10">
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-serif text-[#0F172A] tracking-wider mb-10 leading-tight">
            Uninterrupted Excellence
          </h1>
          <p className="text-xl md:text-2xl text-slate-500 max-w-4xl mx-auto leading-relaxed">
            Beyond high-end machinery, we provide the technical infrastructure and rapid-response support that keeps India’s largest laundry facilities running 24/7.
          </p>
        </motion.div>

        {/* 2. THE "SERVICE PILLARS" */}
        <div className="space-y-16 max-w-7xl mx-auto py-32">
          
          {/* Card 1: AMC */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="grid md:grid-cols-2 gap-12 items-center bg-white/60 backdrop-blur-xl border border-white/60 p-12 md:p-16 rounded-[40px] premium-shadow hover:shadow-[0_40px_60px_-15px_rgba(11,60,93,0.15)] transition-all"
          >
            <div className="flex justify-center md:justify-center">
               <div className="w-56 h-56 bg-[#0B3C5D]/5 rounded-full flex items-center justify-center premium-shadow relative group">
                  <div className="absolute inset-0 rounded-full border border-[#0B3C5D]/20 group-hover:scale-110 transition-transform duration-500"></div>
                  <ShieldCheck size={72} strokeWidth={1} className="text-[#0B3C5D]" />
               </div>
            </div>
            <div>
               <h3 className="text-4xl md:text-5xl font-serif text-[#0F172A] mb-8">Annual Maintenance Contracts (AMC)</h3>
               <p className="text-xl text-slate-500 leading-relaxed mb-10">Customized care plans designed to eliminate downtime. Includes periodic calibration, deep cleaning of heating elements, and safety system audits.</p>
               <div className="inline-flex items-center px-6 py-3 bg-[#0B3C5D]/10 text-[#0B3C5D] rounded-full text-sm font-bold tracking-widest uppercase animate-pulse">
                  <span className="mr-3 border-r border-[#0B3C5D]/20 pr-3 opacity-60">Key Feature</span>
                  Priority 24/48-Hour Response Time
               </div>
            </div>
          </motion.div>

          {/* Card 2: Technical Support */}
          <motion.div 
             initial={{ opacity: 0, y: 40 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true, margin: "-50px" }}
             transition={{ duration: 0.6 }}
             className="grid md:grid-cols-2 gap-12 items-center bg-white/60 backdrop-blur-xl border border-white/60 p-12 md:p-16 rounded-[40px] premium-shadow hover:shadow-[0_40px_60px_-15px_rgba(11,60,93,0.15)] transition-all"
          >
             <div className="order-2 md:order-1">
                <h3 className="text-4xl md:text-5xl font-serif text-[#0F172A] mb-8">Expert Technical Support</h3>
                <p className="text-xl text-slate-500 leading-relaxed mb-10">A nationwide network of certified engineers specializing in advanced electronics and mechanical repair for Sea-Lion, Imesa, and Maestrelli systems.</p>
                
                <div className="mb-10 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {["PLC Troubleshooting", "Steam Line Integration", "VFD Programming", "Pneumatic System Overhaul"].map((skill, idx) => (
                    <div key={idx} className="flex items-center text-sm font-bold text-slate-500">
                      <CheckCircle2 size={16} className="text-[#0B3C5D] mr-3" />
                      {skill}
                    </div>
                  ))}
                </div>

                <div className="inline-flex items-center px-6 py-3 bg-[#0B3C5D]/10 text-[#0B3C5D] rounded-full text-sm font-bold tracking-widest uppercase animate-pulse">
                   <span className="mr-3 border-r border-[#0B3C5D]/20 pr-3 opacity-60">Key Feature</span>
                   On-Site Diagnostic & Repair
                </div>
             </div>
             <div className="order-1 md:order-2 flex justify-center md:justify-center">
                <div className="w-56 h-56 bg-[#0B3C5D]/5 rounded-full flex items-center justify-center premium-shadow relative group">
                   <div className="absolute inset-0 rounded-full border border-[#0B3C5D]/20 group-hover:scale-110 transition-transform duration-500"></div>
                   <Cpu size={72} strokeWidth={1} className="text-[#0B3C5D]" />
                </div>
             </div>
          </motion.div>

          {/* Card 3: Genuine Parts */}
          <motion.div 
             initial={{ opacity: 0, y: 40 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true, margin: "-50px" }}
             transition={{ duration: 0.6 }}
             className="grid md:grid-cols-2 gap-12 items-center bg-white/60 backdrop-blur-xl border border-white/60 p-12 md:p-16 rounded-[40px] premium-shadow hover:shadow-[0_40px_60px_-15px_rgba(11,60,93,0.15)] transition-all overflow-hidden relative"
          >
             <div className="flex justify-center md:justify-center">
                <div className="w-56 h-56 bg-[#0B3C5D]/5 rounded-full flex items-center justify-center premium-shadow relative group">
                   <div className="absolute inset-0 rounded-full border border-[#0B3C5D]/20 group-hover:scale-110 transition-transform duration-500"></div>
                   <PackageCheck size={72} strokeWidth={1} className="text-[#0B3C5D]" />
                </div>
             </div>
             <div>
                <h3 className="text-4xl md:text-5xl font-serif text-[#0F172A] mb-8">The OEM Standard</h3>
                <p className="text-xl text-slate-500 leading-relaxed mb-6">Immediate access to genuine spare parts (belts, pads, springs, valves) and Klenco industrial chemicals to ensure machine longevity and fiber protection.</p>
                
                <div className="mb-10 w-full overflow-hidden relative border-y border-[#0B3C5D]/10 py-6">
                  <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-[#eef2f6] to-transparent z-10"></div>
                  <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-[#eef2f6] to-transparent z-10"></div>
                  <motion.div 
                    animate={{ x: ["0%", "-50%"] }} 
                    transition={{ ease: "linear", duration: 30, repeat: Infinity }}
                    className="flex space-x-6 whitespace-nowrap"
                  >
                    {oemParts.map((part, idx) => (
                      <span key={idx} className="text-xs tracking-widest font-bold text-slate-500 bg-[#0B3C5D]/5 px-5 py-2 uppercase rounded-full">{part}</span>
                    ))}
                  </motion.div>
                </div>

                <div className="inline-flex items-center px-6 py-3 bg-[#0B3C5D]/10 text-[#0B3C5D] rounded-full text-sm font-bold tracking-widest uppercase animate-pulse">
                   <span className="mr-3 border-r border-[#0B3C5D]/20 pr-3 opacity-60">Key Feature</span>
                   Ready-to-Ship Inventory
                </div>
             </div>
          </motion.div>

        </div>

        {/* 3. THE "SERVICE WORKFLOW" */}
        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.8 }} className="py-32 mb-10 relative">
          
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(11,60,93,0.06)_0%,transparent_70%)] rounded-[100px] pointer-events-none" />
          
          <h2 className="text-5xl md:text-6xl font-serif text-center text-[#0F172A] mb-24 relative z-10">Service Workflow</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
            {/* Connecting Line (Desktop) */}
            <div className="hidden md:block absolute top-[50%] left-[10%] right-[10%] h-[2px] bg-gradient-to-r from-transparent via-[#0B3C5D]/20 to-transparent z-0" />

            {workflow.map((item, i) => (
              <motion.div 
                key={item.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="relative z-10"
              >
                <div className="bg-white/80 backdrop-blur-md border border-white/60 p-10 rounded-[30px] premium-shadow text-center flex flex-col items-center group hover:-translate-y-3 transition-transform duration-300 h-full relative overflow-hidden">
                  
                  {/* Subtle Background Step Number */}
                  <div className="absolute -top-4 -left-2 text-9xl font-serif font-extrabold text-slate-200/50 select-none z-0 group-hover:scale-110 transition-transform duration-500">
                    {item.step}
                  </div>
                  
                  <div className="w-24 h-24 bg-[#F8FAFC] rounded-full border-[3px] border-[#0B3C5D]/10 flex items-center justify-center text-[#0B3C5D] mb-8 shadow-inner group-hover:border-[#0B3C5D]/30 group-hover:bg-[#0B3C5D]/5 transition-colors relative z-10 premium-shadow">
                    {item.icon}
                  </div>
                  <h4 className="text-2xl font-serif text-[#0F172A] leading-snug relative z-10">{item.name}</h4>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* 4. CTA SECTION */}
        <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="max-w-5xl mx-auto py-32">
          <div className="bg-gradient-to-br from-[#0B3C5D]/5 to-white/60 backdrop-blur-2xl border border-white/60 p-16 md:p-24 rounded-[40px] premium-shadow text-center hover:shadow-[0_20px_40px_-5px_rgba(11,60,93,0.15)] transition-all">
            <h2 className="text-4xl md:text-6xl font-serif text-[#0F172A] mb-12 leading-tight">Is your facility due for a health check?</h2>
            <Link to="/contact">
              <motion.div whileHover={{ scale: 1.05 }} className="inline-flex flex-row items-center justify-center px-10 py-5 bg-[#0B3C5D] text-white rounded-full text-lg font-bold tracking-widest uppercase premium-shadow cursor-pointer">
                Request a Service Consultation
                <ArrowRight className="ml-4" size={24} />
              </motion.div>
            </Link>
          </div>
        </motion.div>

      </div>
    </div>
  );
};

export default Service;
