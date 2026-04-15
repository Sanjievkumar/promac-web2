import { ArrowRight } from 'lucide-react';

const steps = [
  { num: "1", title: "Load Linen", desc: "Place linen on the conveyor belt." },
  { num: "2", title: "Auto Weighing", desc: "±0.1kg precision measurement." },
  { num: "3", title: "Data Processing", desc: "Weight displayed instantly." },
  { num: "4", title: "Transfer to Washer", desc: "Automatic feeding to washing system." }
];

const HowItWorks = () => {
  return (
    <section className="bg-[#070b14] py-16 md:py-24 border-b border-gray-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl md:text-3xl font-extrabold mb-16 text-white text-center uppercase tracking-wider">
          How It Works
        </h2>
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-12 md:gap-4 relative">
          
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto flex-1 h-full">
              {/* Step Card */}
              <div className="flex flex-col items-center text-center max-w-[200px] mx-auto w-full group h-full">
                <div className="relative w-16 h-16 rounded-full bg-blue-600 flex items-center justify-center mb-6 text-white font-bold text-2xl shadow-[0_0_15px_rgba(37,99,235,0.5)] border-4 border-[#070b14] z-10 group-hover:scale-110 transition-transform duration-300">
                  {step.num}
                  {/* Outer pulse effect */}
                  <div className="absolute inset-0 rounded-full border border-blue-400/50 animate-ping opacity-10"></div>
                </div>
                <h3 className="text-white font-bold text-lg mb-2 tracking-wide group-hover:text-blue-400 transition-colors">
                  {step.title}
                </h3>
                <p className="text-gray-400 text-sm font-light leading-relaxed">
                  {step.desc}
                </p>
              </div>
              
              {/* Arrow Connector (Hidden on last item and mobile) */}
              {index < steps.length - 1 && (
                <div className="hidden md:flex flex-col items-center justify-center flex-shrink-0 w-10 h-full text-gray-600 self-start mt-8">
                  <ArrowRight className="w-8 h-8" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
