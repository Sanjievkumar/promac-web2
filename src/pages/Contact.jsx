import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Phone, Mail, Globe, ArrowRight, CheckCircle2 } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    company: '',
    location: '',
    inquiry: '',
    details: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showToast, setShowToast] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate async submission
    console.log('Service Query Submitted:', formData);

    setTimeout(() => {
      setIsSubmitting(false);
      setShowToast(true);
      setFormData({ fullName: '', company: '', location: '', inquiry: '', details: '' });

      // Auto-dismiss toast after 4 seconds
      setTimeout(() => setShowToast(false), 4000);
    }, 1200);
  };

  return (
    <div className="min-h-screen pt-28 md:pt-32 pb-24 md:pb-40 px-4 md:px-24 relative bg-transparent">
      {/* Radial Background */}
      <div aria-hidden className="pointer-events-none fixed inset-0 z-0 opacity-[0.08]" style={{ backgroundImage: `radial-gradient(circle at center, rgba(11,60,93,0.4) 0%, transparent 70%)` }} />
      <div aria-hidden className="pointer-events-none fixed inset-0 z-0 bg-[radial-gradient(1200px_600px_at_50%_0%,rgba(11,60,93,0.06),transparent_80%)]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        
        {/* HERO SECTION */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12 md:mb-20 pt-6 md:pt-10">
          <h1 className="text-4xl md:text-6xl lg:text-8xl font-serif text-[#0F172A] tracking-wider mb-6 md:mb-8 leading-tight">
            Partner with Promac
          </h1>
          <p className="text-xl md:text-2xl text-slate-500 max-w-4xl mx-auto leading-relaxed">
            Our engineering team is ready to optimize your laundry operations. Reach out for consultations, spare parts, or technical support.
          </p>
        </motion.div>

        {/* 2-COLUMN LAYOUT */}
        <div className="grid lg:grid-cols-2 gap-10 md:gap-16 max-w-7xl mx-auto">
          
          {/* LEFT COLUMN: Trust Pillar */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }} 
            animate={{ opacity: 1, x: 0 }} 
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col space-y-10"
          >
             <div className="bg-white/60 backdrop-blur-xl border border-white/60 p-6 md:p-14 rounded-[30px] md:rounded-[40px] premium-shadow hover:shadow-[0_40px_60px_-15px_rgba(11,60,93,0.15)] transition-all flex-1 h-full flex flex-col">
                <h2 className="text-4xl font-serif text-[#0F172A] mb-10 border-b border-[#0B3C5D]/10 pb-6">Headquarters</h2>
                
                <div className="flex items-start mb-10 group">
                   <div className="w-16 h-16 bg-[#0B3C5D]/5 rounded-full flex items-center justify-center text-[#0B3C5D] mr-8 shrink-0 group-hover:scale-110 group-hover:bg-[#0B3C5D]/10 transition-all border border-[#0B3C5D]/10">
                     <MapPin size={28} />
                   </div>
                   <div className="pt-2">
                     <h4 className="font-bold text-xl text-[#0F172A] mb-3">Promac Technologies Pvt Ltd</h4>
                     <p className="text-slate-500 leading-relaxed text-lg">Door No. 2-A, Sai Sruti Trade Centre,<br/>Ramnagar, Coimbatore,<br/>Tamil Nadu - 641009</p>
                   </div>
                </div>

                <div className="flex items-center mb-10 group">
                   <div className="w-16 h-16 bg-[#0B3C5D]/5 rounded-full flex items-center justify-center text-[#0B3C5D] mr-8 shrink-0 group-hover:scale-110 group-hover:bg-[#0B3C5D]/10 transition-all border border-[#0B3C5D]/10">
                     <Phone size={28} />
                   </div>
                   <div>
                     <p className="text-slate-400 font-bold tracking-widest uppercase text-xs mb-1">Direct Line</p>
                     <h4 className="text-3xl font-bold text-[#0F172A] tracking-wider">+91 95663 40888</h4>
                   </div>
                </div>

                <div className="flex items-center mb-16 group">
                   <div className="w-16 h-16 bg-[#0B3C5D]/5 rounded-full flex items-center justify-center text-[#0B3C5D] mr-8 shrink-0 group-hover:scale-110 group-hover:bg-[#0B3C5D]/10 transition-all border border-[#0B3C5D]/10">
                     <Mail size={28} />
                   </div>
                   <div>
                     <p className="text-slate-400 font-bold tracking-widest uppercase text-xs mb-1">Corporate Desk</p>
                     <h4 className="text-2xl font-bold text-[#0F172A]">sales@promactech.com</h4>
                   </div>
                </div>

                <div className="pt-10 border-t border-[#0B3C5D]/10">
                   <h4 className="flex items-center font-bold text-xl text-[#0F172A] mb-4">
                     <Globe className="mr-3 text-[#0B3C5D]" size={24} /> Global Support Radius
                   </h4>
                   <p className="text-slate-500 leading-relaxed text-lg">Providing high-end technical intervention and rapid-deployment logistics across India within an absolute <span className="font-bold text-[#0B3C5D]">24-48 hour</span> window.</p>
                </div>

                {/* Abstract Pulse Map */}
                <div className="relative w-full h-[200px] bg-white/40 backdrop-blur-md border border-white/40 rounded-[24px] overflow-hidden group mt-12 premium-shadow">
                   <div className="absolute inset-0 z-0 opacity-[0.15]" style={{ backgroundImage: 'linear-gradient(#94a3b8 1px, transparent 1px), linear-gradient(90deg, #94a3b8 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
                   <div className="absolute top-1/2 left-[30%] z-10 flex flex-col items-center">
                      <span className="relative flex h-8 w-8">
                         <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#60A5FA] opacity-75"></span>
                         <span className="relative inline-flex rounded-full h-8 w-8 bg-[#0B3C5D] border-[3px] border-white shadow-lg"></span>
                      </span>
                      <span className="mt-3 text-xs font-extrabold text-[#0B3C5D] bg-white/90 px-4 py-2 rounded-full backdrop-blur-md uppercase tracking-widest shadow-md">Coimbatore Grid Base</span>
                   </div>
                </div>
             </div>
          </motion.div>

          {/* RIGHT COLUMN: The Intelligence Form */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }} 
            animate={{ opacity: 1, x: 0 }} 
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="flex flex-col"
          >
            <form className="bg-white/70 backdrop-blur-xl border border-white/60 p-6 md:p-14 rounded-[30px] md:rounded-[40px] premium-shadow hover:shadow-[0_40px_60px_-15px_rgba(11,60,93,0.15)] transition-all flex-1" onSubmit={handleSubmit}>
               <h3 className="text-2xl md:text-4xl font-serif text-[#0F172A] mb-8 md:mb-10">Submit a Service Query</h3>
               
               <div className="space-y-8">
                  <div>
                    <label className="block text-sm font-bold text-[#0F172A] tracking-widest uppercase mb-3 text-slate-400">Full Name</label>
                    <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} required className="w-full bg-white/50 border border-[#0B3C5D]/10 rounded-[20px] px-6 py-5 focus:outline-none focus:ring-2 focus:ring-[#0B3C5D]/30 focus:border-[#0B3C5D]/40 transition-all text-lg placeholder-slate-400 font-medium text-[#0F172A]" placeholder="e.g. John Doe" />
                  </div>

                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <label className="block text-sm font-bold text-[#0F172A] tracking-widest uppercase mb-3 text-slate-400">Company Name</label>
                      <input type="text" name="company" value={formData.company} onChange={handleChange} className="w-full bg-white/50 border border-[#0B3C5D]/10 rounded-[20px] px-6 py-5 focus:outline-none focus:ring-2 focus:ring-[#0B3C5D]/30 focus:border-[#0B3C5D]/40 transition-all text-lg placeholder-slate-400 font-medium text-[#0F172A]" placeholder="Facility Corp Ltd" />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-[#0F172A] tracking-widest uppercase mb-3 text-slate-400">Location</label>
                      <input type="text" name="location" value={formData.location} onChange={handleChange} className="w-full bg-white/50 border border-[#0B3C5D]/10 rounded-[20px] px-6 py-5 focus:outline-none focus:ring-2 focus:ring-[#0B3C5D]/30 focus:border-[#0B3C5D]/40 transition-all text-lg placeholder-slate-400 font-medium text-[#0F172A]" placeholder="City, State" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-[#0F172A] tracking-widest uppercase mb-3 text-slate-400">Nature of Inquiry</label>
                    <div className="relative border border-[#0B3C5D]/10 rounded-[20px] bg-white/50 focus-within:ring-2 focus-within:ring-[#0B3C5D]/30 transition-all overflow-hidden">
                      <select name="inquiry" value={formData.inquiry} onChange={handleChange} className="w-full bg-transparent px-6 py-5 focus:outline-none text-lg text-slate-600 appearance-none font-medium cursor-pointer">
                        <option value="" disabled>Select an option...</option>
                        <option value="New Project / Consultancy">New Project / Consultancy</option>
                        <option value="Machine Purchase">Machine Purchase</option>
                        <option value="Spare Parts & Consumables">Spare Parts & Consumables</option>
                        <option value="Breakdown Support / AMC">Breakdown Support / AMC</option>
                      </select>
                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-6 text-[#0B3C5D]">
                        <svg className="fill-current h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-[#0F172A] tracking-widest uppercase mb-3 text-slate-400">Mission Details</label>
                    <textarea rows="6" name="details" value={formData.details} onChange={handleChange} className="w-full bg-white/50 border border-[#0B3C5D]/10 rounded-[20px] px-6 py-5 focus:outline-none focus:ring-2 focus:ring-[#0B3C5D]/30 focus:border-[#0B3C5D]/40 transition-all text-lg resize-none placeholder-slate-400 font-medium text-[#0F172A]" placeholder="Please elaborate on your facility goals or operational issue..."></textarea>
                  </div>
               </div>

               <motion.button 
                 whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                 whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                 type="submit" 
                 disabled={isSubmitting}
                 className={`w-full mt-12 py-6 rounded-full font-bold text-lg tracking-widest uppercase shadow-xl transition-all flex items-center justify-center group border ${isSubmitting ? 'bg-[#0B3C5D]/70 border-[#0B3C5D]/30 cursor-wait' : 'bg-[#0B3C5D] border-[#0B3C5D]/50 hover:shadow-2xl hover:shadow-[#0B3C5D]/20'} text-white`}
               >
                 {isSubmitting ? (
                   <>
                     <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
                     Sending...
                   </>
                 ) : (
                   <>
                     Transmit Operation Brief
                     <ArrowRight className="ml-4 group-hover:translate-x-2 transition-transform" size={24} />
                   </>
                 )}
               </motion.button>
               <p className="text-center text-sm font-bold text-slate-400 uppercase tracking-widest mt-6">A Promac Engineer will contact you within 24 HRS</p>
            </form>
          </motion.div>

        </div>
      </div>

      {/* ── Glassmorphism Success Toast ── */}
      <AnimatePresence>
        {showToast && (
          <motion.div
            initial={{ opacity: 0, y: 60, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.95 }}
            transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="fixed bottom-10 left-1/2 -translate-x-1/2 z-[200] max-w-lg w-[90%]"
          >
            <div
              className="flex items-center gap-4 px-8 py-5 rounded-[24px] backdrop-blur-2xl border border-white/50 shadow-[0_30px_60px_-15px_rgba(11,60,93,0.3)]"
              style={{ backgroundColor: 'rgba(220, 234, 245, 0.85)' }}
            >
              <div className="w-10 h-10 bg-[#0B3C5D] rounded-full flex items-center justify-center shrink-0 shadow-md">
                <CheckCircle2 size={22} className="text-white" />
              </div>
              <div>
                <p className="font-bold text-[#0F172A] text-sm tracking-wide">Query Received</p>
                <p className="text-slate-600 text-sm leading-relaxed">Our engineers will contact you within 24 hours.</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Contact;
