import { ArrowRight, MessageCircle } from 'lucide-react';

const FooterCTA = () => {
  return (
    <section className="bg-[#0b0e14] py-24 md:py-32 relative overflow-hidden font-sans border-t border-gray-900/50">
      
      {/* Intense base bottom-glow */}
      <div className="absolute -bottom-[30%] left-1/2 -translate-x-1/2 w-[1200px] h-[800px] bg-[#1a4b92]/45 rounded-[100%] blur-[160px] pointer-events-none mix-blend-screen overflow-visible z-0"></div>

      {/* Abstract geometric diamond grid lines matching the reference */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-50 mix-blend-screen z-0"
        style={{
          backgroundImage: `
            repeating-linear-gradient(45deg, transparent, transparent 150px, rgba(82,143,255,0.4) 150px, rgba(82,143,255,0.4) 151px),
            repeating-linear-gradient(-45deg, transparent, transparent 150px, rgba(82,143,255,0.4) 150px, rgba(82,143,255,0.4) 151px)
          `,
          maskImage: 'radial-gradient(ellipse 70% 90% at 50% 100%, black 10%, transparent 70%)',
          WebkitMaskImage: 'radial-gradient(ellipse 70% 90% at 50% 100%, black 10%, transparent 70%)',
        }}
      ></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <h2 className="text-[32px] md:text-[42px] font-[800] text-white mb-4 tracking-tight leading-tight drop-shadow-lg">
          Upgrade Your Laundry Loading System
        </h2>
        <p className="text-gray-300 text-[15px] md:text-[17px] font-normal mb-10 max-w-2xl mx-auto drop-shadow-md">
          Improve efficiency with automatic weighing & data-driven batch processing
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mx-auto max-w-md mb-6">
          <button className="w-full sm:w-auto flex-1 inline-flex items-center justify-center gap-2 bg-[#447eed] hover:bg-[#326ce0] text-white px-8 py-3.5 rounded-[6px] font-[600] text-[14px] transition-all duration-300 shadow-[0_0_15px_rgba(68,126,237,0.3)] whitespace-nowrap">
            Request a Quote <ArrowRight className="w-4 h-4 ml-1" strokeWidth={2.5} />
          </button>
          <button className="w-full sm:w-auto flex-1 inline-flex items-center justify-center gap-2 bg-transparent border border-gray-600 hover:border-gray-500 hover:bg-gray-800/30 text-gray-300 hover:text-white px-8 py-3.5 rounded-[6px] font-[600] text-[14px] transition-all duration-300 whitespace-nowrap">
            <MessageCircle className="w-[18px] h-[18px] text-gray-400" /> Talk to Our Team
          </button>
        </div>

        {/* Checklist */}
        <div className="flex flex-col sm:flex-row flex-wrap justify-center items-center gap-x-5 gap-y-3 text-[12px] font-medium text-gray-400 mt-2">
          <span className="flex items-center gap-1.5"><span className="text-gray-300">✔</span> Free Consultation</span>
          <span className="flex items-center gap-1.5"><span className="text-gray-300">✔</span> Site Assessment Available</span>
          <span className="flex items-center gap-1.5"><span className="text-gray-300">✔</span> ROI Analysis</span>
        </div>
      </div>
    </section>
  );
};

export default FooterCTA;
