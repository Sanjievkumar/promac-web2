import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Check } from 'lucide-react';
import logo from '../assets/promac-logo.png';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [error, setError] = useState('');

  const isValidEmail = (val) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val);

  const handleSubscribe = (e) => {
    e.preventDefault();
    setError('');

    if (!email.trim() || !isValidEmail(email)) {
      setError('Please enter a valid email address.');
      return;
    }

    console.log('Newsletter subscribed:', email);
    setSubscribed(true);
    setEmail('');

    setTimeout(() => setSubscribed(false), 3000);
  };

  return (
    <footer className="bg-[#0B3C5D] text-white pt-24 pb-10 mt-auto border-t border-white/10 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.05)_0%,transparent_70%)] pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
        
        {/* Col 1 */}
        <div className="flex flex-col space-y-6 items-start">
           <img src={logo} alt="Promac Logo" className="h-12 w-auto brightness-0 invert opacity-90" />
           <p className="text-slate-300 leading-relaxed max-w-sm">
             India's premier turnkey partner for advanced laundry systems, rapid breakdown support, and genuine OEM parts.
           </p>
           <div className="flex space-x-4 pt-2">
              <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white hover:text-[#0B3C5D] transition-colors cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              </div>
              <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white hover:text-[#0B3C5D] transition-colors cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>
              </div>
              <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white hover:text-[#0B3C5D] transition-colors cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </div>
           </div>
        </div>

        {/* Col 2 */}
        <div className="flex flex-col space-y-8">
           <h4 className="text-xs font-extrabold tracking-widest uppercase text-white/50">Ecosystem</h4>
           <ul className="space-y-4">
             <li><Link to="/about" className="text-slate-300 hover:text-white transition-colors font-medium">Our Journey</Link></li>
             <li><Link to="/brands" className="text-slate-300 hover:text-white transition-colors font-medium">Global Brands</Link></li>
             <li><Link to="/services" className="text-slate-300 hover:text-white transition-colors font-medium">Lifecycle Support</Link></li>
             <li><Link to="/consultancy" className="text-slate-300 hover:text-white transition-colors font-medium">Turnkey Consultancy</Link></li>
           </ul>
        </div>

        {/* Col 3 */}
        <div className="flex flex-col space-y-8">
           <h4 className="text-xs font-extrabold tracking-widest uppercase text-white/50">Direct Contact</h4>
           <ul className="space-y-6">
             <li className="flex items-start">
               <MapPin size={20} className="mr-4 shrink-0 text-white/50 mt-1" />
               <span className="text-slate-300 leading-relaxed text-sm">Door No. 2-A, Sai Sruti Trade Centre, Ramnagar, Coimbatore - 641009</span>
             </li>
             <li className="flex items-center">
               <Phone size={20} className="mr-4 shrink-0 text-white/50" />
               <span className="text-slate-300 font-bold">+91 95663 40888</span>
             </li>
             <li className="flex items-center">
               <Mail size={20} className="mr-4 shrink-0 text-white/50" />
               <span className="text-slate-300">sales@promactech.com</span>
             </li>
           </ul>
        </div>

        {/* Col 4 — Newsletter */}
        <div className="flex flex-col space-y-8">
           <h4 className="text-xs font-extrabold tracking-widest uppercase text-white/50">Engineering Updates</h4>
           <p className="text-slate-300 leading-relaxed text-sm">Subscribe to receive technical bulletins and new machinery specifications directly.</p>
           <form className="flex flex-col w-full" onSubmit={handleSubscribe}>
             <div className="flex shadow-lg">
               <input 
                 type="email" 
                 placeholder="Email Address" 
                 value={email}
                 onChange={(e) => { setEmail(e.target.value); setError(''); }}
                 className="w-full bg-white/10 border border-white/20 rounded-l-xl px-4 py-3 focus:outline-none focus:bg-white/20 text-white placeholder-slate-400 font-medium" 
               />
               <button 
                 type="submit" 
                 className={`font-bold px-6 py-3 rounded-r-xl transition-all duration-300 min-w-[90px] flex items-center justify-center ${
                   subscribed 
                     ? 'bg-emerald-400 text-white' 
                     : 'bg-white text-[#0B3C5D] hover:bg-slate-200'
                 }`}
               >
                 {subscribed ? (
                   <span className="flex items-center gap-1.5">
                     <Check size={18} strokeWidth={3} />
                     <span className="text-sm">Done!</span>
                   </span>
                 ) : 'Join'}
               </button>
             </div>
             {error && (
               <p className="text-red-300 text-xs font-bold tracking-wide mt-2 ml-1">{error}</p>
             )}
           </form>
        </div>

      </div>

      <div className="max-w-7xl mx-auto px-6 border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between">
         <p className="text-slate-400 text-xs font-bold tracking-widest uppercase mb-4 md:mb-0">© {new Date().getFullYear()} Promac Technologies Pvt Ltd.</p>
         <div className="flex space-x-8 text-xs font-bold uppercase tracking-widest text-slate-400">
            <span className="hover:text-white cursor-pointer transition-colors">Privacy Policy</span>
            <span className="hover:text-white cursor-pointer transition-colors">Terms of Service</span>
         </div>
      </div>
    </footer>
  );
};

export default Footer;
