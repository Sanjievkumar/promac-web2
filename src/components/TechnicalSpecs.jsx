const specsData = [
  { label: "Model", value: "SDZ60-4C" },
  { label: "Belt Width", value: "600 mm" },
  { label: "Conveyor Length", value: "4,000 mm" },
  { label: "Drive Motor", value: "1.5 kW (Siemens)" },
  { label: "Weighing System", value: "4 x Load Cells (±0.1kg)" },
  { label: "Speed Range", value: "0–99 m/min (Inverter Controlled)" },
  { label: "Power Supply", value: "3 Phase, 380–440V, 50Hz" },
  { label: "Construction", value: "SS304 + Powder Coated Frame" },
];

const TechnicalSpecs = () => {
  return (
    <section className="bg-[#0c1322] py-16 md:py-24 relative overflow-hidden">
      {/* Decorative gradient blur */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-full bg-blue-900/5 blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h2 className="text-2xl md:text-3xl font-extrabold mb-12 text-white text-center uppercase tracking-wider">
          Technical Specifications
        </h2>
        
        <div className="bg-slate-50 text-slate-900 rounded-xl max-w-5xl mx-auto shadow-2xl overflow-hidden border border-gray-700/50">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[1px] bg-gray-200">
            {specsData.map((spec, index) => (
              <div key={index} className="bg-slate-50 p-6 md:p-8 flex flex-col justify-center min-h-[110px] hover:bg-white transition-colors duration-200">
                <span className="text-xs font-semibold text-gray-500 uppercase tracking-widest mb-1.5">
                  {spec.label}
                </span>
                <span className="text-base md:text-lg font-bold text-gray-900 leading-tight">
                  {spec.value}
                </span>
              </div>
            ))}
          </div>

          <div className="bg-slate-100/80 p-5 flex flex-wrap justify-center items-center gap-4 md:gap-6 border-t border-gray-200">
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-lg bg-white border border-gray-200 text-sm font-bold text-slate-700 shadow-sm hover:shadow-md transition-shadow">
              <span className="text-green-500 text-lg leading-none">✔️</span> CE Certified
            </div>
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-lg bg-white border border-gray-200 text-sm font-bold text-slate-700 shadow-sm hover:shadow-md transition-shadow">
              <span className="text-blue-500 text-lg leading-none">🛡️</span> ISO 9001 Compliant
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnicalSpecs;
