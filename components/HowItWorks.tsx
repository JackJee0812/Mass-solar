
import React from 'react';
import { Search, PenTool, Wrench, Zap } from 'lucide-react';

const steps = [
  {
    title: 'Site Inspection',
    description: 'Our engineers conduct a thorough analysis of your roof condition and sun exposure.',
    icon: <Search className="w-8 h-8" />
  },
  {
    title: 'System Design',
    description: 'Customized blueprints optimized for maximum energy harvest based on your consumption.',
    icon: <PenTool className="w-8 h-8" />
  },
  {
    title: 'Installation',
    description: 'Professional mounting and wiring of panels and inverters by our certified team.',
    icon: <Wrench className="w-8 h-8" />
  },
  {
    title: 'Power Generation',
    description: 'Final connection to the grid and activation of your clean energy ecosystem.',
    icon: <Zap className="w-8 h-8" />
  }
];

const HowItWorks: React.FC = () => {
  return (
    <section id="how-it-works" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">How It Works</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">Your journey to energy independence is just four simple steps away.</p>
        </div>

        <div className="relative">
          {/* Connector Line (Desktop) */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-slate-100 -translate-y-1/2 z-0"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {steps.map((step, index) => (
              <div key={index} className="relative z-10 flex flex-col items-center text-center group">
                <div className="w-20 h-20 bg-white border-2 border-slate-100 rounded-full flex items-center justify-center mb-8 shadow-lg group-hover:border-emerald-500 group-hover:bg-emerald-500 transition-all duration-300">
                  <div className="text-slate-400 group-hover:text-white transition-colors">
                    {step.icon}
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-emerald-600 text-white text-sm font-bold rounded-full flex items-center justify-center">
                    0{index + 1}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">{step.title}</h3>
                <p className="text-slate-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
