import { ArrowRight, MessageCircle, Download, Scale, Gauge, MonitorSmartphone, Activity } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative bg-[#0b0e14] py-14 md:py-20 overflow-hidden font-sans border-b border-gray-900/50">
      
      {/* Deep baseline ambient gradient */}
      <div className="absolute inset-0 bg-[#0b0e14] pointer-events-none"></div>

      {/* Absolute Background Textures */}
      {/* Dense sweeping dot pattern perfectly cropped to left side */}
      <div 
        className="absolute top-0 left-0 bottom-0 w-[60%] bg-dot-pattern pointer-events-none"
        style={{
          maskImage: 'radial-gradient(ellipse 100% 100% at -5% 40%, black 20%, transparent 80%)',
          WebkitMaskImage: 'radial-gradient(ellipse 100% 100% at -5% 40%, black 20%, transparent 80%)',
          opacity: 0.35
        }}
      ></div>
      
      {/* Extremely subtle, isolated radial blue glow anchored exactly behind the machine container */}
      <div className="absolute top-[65%] left-[28%] -translate-x-1/2 -translate-y-1/2 w-[600px] h-[500px] bg-[#1a4b92]/25 rounded-full blur-[140px] pointer-events-none z-0"></div>

      <div className="relative max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 z-10 w-full">
        
        {/* Top Centered Header Content */}
        <div className="text-center mb-16 flex flex-col items-center">
          <div className="text-[13px] font-medium text-gray-400 mb-3 tracking-wide">
            Home <span className="mx-2 font-normal opacity-40">/</span> Sea Lion <span className="mx-2 font-normal opacity-40">/</span> Loading Systems
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[46px] font-[800] text-white tracking-tight mb-4">
            LOADING CONVEYOR &ndash; SDZ60-4C
          </h1>
          <p className="text-base md:text-[17px] text-gray-300 max-w-2xl mx-auto font-normal mb-8 leading-relaxed">
            Automatic Linen Weighing & Feeding System
          </p>
          <div className="text-[12px] font-semibold text-[#8eb0dd] px-6 py-1.5 border border-[#3b609c]/60 rounded-full inline-block bg-[#071324] backdrop-blur-sm shadow-sm cursor-default">
            SEA-LION Series
          </div>
        </div>

        {/* Main Content Grid: 1.25fr Left to 1fr Right */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr,1fr] gap-10 md:gap-14 lg:gap-20 items-start max-w-6xl mx-auto">
          
          {/* Left Column (Product Presentation Box) */}
          <div className="flex flex-col">
            <div className="w-full bg-white rounded-2xl md:rounded-[24px] shadow-[0_20px_60px_rgba(0,0,0,0.6)] p-8 md:p-10 relative flex flex-col z-10">
              
              {/* Main Image Space */}
              <div className="w-full aspect-[16/11] rounded-xl overflow-hidden mb-6 mt-2 relative">
                <img 
                  src="/images/conveyor.png" 
                  alt="Automatic Linen Weighing System" 
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Inline Thumbnails */}
              <div className="grid grid-cols-4 gap-4 mb-8 px-2 md:px-8">
                {[1, 2, 3, 4].map((item, i) => (
                  <div key={i} className={`aspect-[4/3] rounded-lg border-2 cursor-pointer flex items-center justify-center transition-colors shadow-sm overflow-hidden ${i === 0 ? 'border-[#3668cc] ring-2 ring-[#3668cc]/20' : 'border-gray-200 hover:border-blue-400'}`}>
                    <img 
                      src="/images/conveyor.png" 
                      alt={`Product view ${i + 1}`} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
              
              {/* Bottom White Area Download Link */}
              <div className="text-center pt-1 border-t border-gray-100 mt-auto">
                 <br/>
                <a href="#" className="inline-flex items-center gap-2 text-slate-800 hover:text-[#284e93] font-[700] text-[13px] transition-colors">
                  <Download className="w-[16px] h-[16px] text-gray-500" strokeWidth={2.5} /> Download Brochure (PDF)
                </a>
              </div>
            </div>
          </div>

          {/* Right Column (Specs & Controls) */}
          <div className="flex flex-col justify-center h-full sm:pt-4 lg:pt-2 max-w-xl">
            
            {/* Stock Badge */}
            <div className="mb-7 flex">
              <span className="inline-flex items-center bg-[#072418] text-[#4ade80] text-[12px] font-semibold px-3.5 py-1.5 rounded-full border border-[#22c55e]/20">
                <div className="w-1.5 h-1.5 rounded-full bg-[#4ade80] mr-2.5 animate-pulse shadow-[0_0_8px_rgba(74,222,128,0.8)]"></div>
                In Stock &ndash; Ships in 2-3 Weeks
              </span>
            </div>
            
            {/* Paragraph Text */}
            <p className="text-gray-300 text-[15px] leading-relaxed mb-8 font-normal pb-8">
              The SDZ60-4C is a high-speed automatic loading conveyor Designed for industrial laundry operations. It automatically weighs and transfers linen to the washing system with precision accuracy of &plusmn;0.1kg.
            </p>
            
            <div className="w-full h-px bg-gray-800 mb-8 max-w-md"></div>

            {/* Structured Stats Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-8 gap-x-6 pb-8 mb-8">
              
              <div className="flex gap-4 items-start">
                <Scale className="w-[22px] h-[22px] text-[#558cf7] mt-1" strokeWidth={1.5} />
                <div>
                  <p className="text-gray-400 text-[13px] font-medium mb-1 tracking-wide">Weighing Accuracy</p>
                  <h4 className="text-white font-[700] text-[16px] tracking-wide">&plusmn;0.1 kg</h4>
                </div>
              </div>
              
              <div className="flex gap-4 items-start">
                <Gauge className="w-[22px] h-[22px] text-[#558cf7] mt-1" strokeWidth={1.5} />
                <div>
                  <p className="text-gray-400 text-[13px] font-medium mb-1 tracking-wide">Speed</p>
                  <h4 className="text-white font-[700] text-[16px] tracking-wide">0&ndash;99 m/min</h4>
                </div>
              </div>
              
              <div className="flex gap-4 items-start">
                <MonitorSmartphone className="w-[22px] h-[22px] text-[#558cf7] mt-1" strokeWidth={1.5} />
                <div>
                  <p className="text-gray-400 text-[13px] font-medium mb-1 tracking-wide">Control</p>
                  <h4 className="text-white font-[700] text-[14px]">Touch Screen <span className="text-[11px] text-gray-500 font-medium tracking-wide">(0-99 programs)</span></h4>
                </div>
              </div>
              
              <div className="flex gap-4 items-start">
                <Activity className="w-[22px] h-[22px] text-[#558cf7] mt-1" strokeWidth={1.5} />
                <div>
                  <p className="text-gray-400 text-[13px] font-medium mb-1 tracking-wide">Channels</p>
                  <h4 className="text-white font-[700] text-[14px]">High-Speed Data Channel</h4>
                </div>
              </div>
            </div>
            
            <div className="w-full h-px bg-gray-800 mb-8 max-w-md"></div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 mb-7 max-w-md">
              <button className="flex-1 inline-flex items-center justify-center gap-2 bg-[#447eed] hover:bg-[#326ce0] text-white px-8 py-3.5 rounded-[6px] font-[600] text-[14px] transition-all duration-300 shadow-[0_0_15px_rgba(68,126,237,0.2)] whitespace-nowrap">
                Request a Quote <ArrowRight className="w-4 h-4 ml-1" strokeWidth={2.5} />
              </button>
              <button className="flex-1 inline-flex items-center justify-center gap-2 bg-transparent border border-gray-600 hover:border-gray-500 hover:bg-gray-800/30 text-gray-300 hover:text-white px-8 py-3.5 rounded-[6px] font-[600] text-[14px] transition-all duration-300 whitespace-nowrap">
                <MessageCircle className="w-[18px] h-[18px] text-gray-400" /> Talk to an Expert
              </button>
            </div>

            {/* Checklist */}
            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-x-4 gap-y-3 text-[11px] font-medium text-gray-400">
              <span className="flex items-center gap-1.5 tracking-wide"><span className="text-gray-300">✔</span> 1 Year Warranty</span>
              <span className="hidden sm:inline text-gray-700">•</span>
              <span className="flex items-center gap-1.5 tracking-wide"><span className="text-gray-300">🌍</span> Global Support</span>
              <span className="hidden sm:inline text-gray-700">•</span>
              <span className="flex items-center gap-1.5 tracking-wide"><span className="text-gray-300">⚙️</span> Installation Available</span>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
