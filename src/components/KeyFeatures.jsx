import { Scale, Cpu, MonitorPlay, Zap, RefreshCw, Database } from 'lucide-react';

const featureData = [
  { icon: Scale, stat: "±0.1kg", title: "Precision Load Cells" },
  { icon: Cpu, stat: "0-99", title: "Program Memory" },
  { icon: MonitorPlay, stat: "Industrial", title: "Touch Controller" },
  { icon: Zap, stat: "High-Speed", title: "Data Processing" },
  { icon: RefreshCw, stat: "Continuous", title: "Batch Washing" },
  { icon: Database, stat: "Backup", title: "Data Storage" },
];

const KeyFeatures = () => {
  return (
    <section className="bg-[#0a1120] py-14 md:py-20 border-y border-gray-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-2xl md:text-3xl font-extrabold mb-12 text-white uppercase tracking-wider">
          Key Features
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 md:gap-6">
          {featureData.map((item, index) => {
            const Icon = item.icon;
            return (
              <div key={index} className="flex flex-col items-center group">
                <div className="w-16 h-16 rounded-2xl bg-blue-900/20 flex items-center justify-center mb-5 border border-blue-500/20 transition-all duration-300 group-hover:bg-blue-600/20 group-hover:border-blue-400/50 group-hover:-translate-y-1 group-hover:shadow-[0_0_15px_rgba(59,130,246,0.15)]">
                  <Icon className="w-7 h-7 text-blue-400 group-hover:text-blue-300" />
                </div>
                <h3 className="text-white font-bold text-xl tracking-wide">{item.stat}</h3>
                <p className="text-gray-400 text-xs md:text-sm mt-1.5 font-medium tracking-wide">{item.title}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default KeyFeatures;
