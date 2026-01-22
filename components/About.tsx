
import React from 'react';
import { CheckCircle2 } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1542332213-31f87348057f?auto=format&fit=crop&q=80&w=1000" 
                alt="Solar Installation" 
                className="w-full aspect-[4/5] object-cover"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-emerald-100 rounded-2xl -z-0"></div>
            <div className="absolute top-1/2 -left-8 -translate-y-1/2 bg-white p-6 rounded-2xl shadow-xl z-20 hidden md:block border border-slate-100">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-solar-yellow rounded-full flex items-center justify-center">
                  <CheckCircle2 className="text-white w-6 h-6" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-slate-900">ISO 9001</div>
                  <div className="text-sm text-slate-500 font-medium">Certified Quality</div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <span className="text-emerald-600 font-bold uppercase tracking-widest text-sm mb-4 block">About Our Company</span>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
              Pioneering the Transition to <span className="text-emerald-600">Sustainable Energy</span>
            </h2>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              Founded in 2008, SolarEdge has been at the forefront of the renewable energy revolution. We don't just sell solar panels; we provide end-to-energy ecosystems that empower communities and businesses.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
              {[
                "Customized Solar Designs",
                "Tier-1 Quality Components",
                "Full Lifetime Monitoring",
                "Zero-Hassle Permitting",
                "Expert Certified Installers",
                "Maintenance Support"
              ].map((item, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                  <span className="text-slate-700 font-medium">{item}</span>
                </div>
              ))}
            </div>

            <div className="space-y-6">
              <div className="p-6 bg-slate-50 rounded-xl border-l-4 border-emerald-500">
                <h3 className="text-xl font-bold text-slate-900 mb-2 italic">"Our Mission"</h3>
                <p className="text-slate-600">To accelerate the global transition to sustainable energy by providing reliable, affordable, and high-efficiency solar solutions for every roof.</p>
              </div>
              <div className="p-6 bg-slate-50 rounded-xl border-l-4 border-solar-yellow">
                <h3 className="text-xl font-bold text-slate-900 mb-2 italic">"Our Vision"</h3>
                <p className="text-slate-600">A world where energy is democratized, carbon-neutral, and abundant for all, powered by clean sunlight.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
