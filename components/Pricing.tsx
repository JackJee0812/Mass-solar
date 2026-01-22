
import React from 'react';
import { PRICING } from '../constants';
import { Check, Info, ArrowRight } from 'lucide-react';

const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-emerald-600 font-bold uppercase tracking-widest text-sm mb-4 block">Pricing Plans</span>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Investment That Pays for Itself</h2>
          <p className="text-lg text-slate-600">
            Choose a solar package tailored for your lifestyle. All plans include full installation and DISCOM paperwork assistance.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {PRICING.map((plan) => (
            <div 
              key={plan.id}
              className={`group relative p-8 rounded-[2.5rem] border transition-all duration-500 hover:shadow-2xl ${plan.isPopular ? 'border-emerald-500 shadow-xl scale-105 z-10 bg-emerald-50/30' : 'border-slate-100 bg-white hover:border-emerald-200'}`}
            >
              {plan.isPopular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-emerald-600 to-emerald-500 text-white text-xs font-bold px-6 py-2 rounded-full uppercase tracking-widest shadow-lg">
                  Most Recommended
                </div>
              )}
              
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-slate-900 mb-2">{plan.name}</h3>
                <p className="text-slate-500 text-sm mb-6 leading-relaxed">{plan.description}</p>
                <div className="flex flex-col">
                  <span className="text-xs font-bold text-emerald-600 uppercase tracking-tighter mb-1">Starting from</span>
                  <div className="flex items-baseline space-x-2">
                    <span className="text-4xl font-black text-slate-900">{plan.price}</span>
                    <span className="text-slate-400 font-medium">*</span>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-4 border border-emerald-100 mb-8 flex items-center space-x-3">
                <div className="bg-solar-yellow/20 p-2 rounded-lg">
                  <Info className="w-4 h-4 text-solar-yellow" />
                </div>
                <div className="text-xs text-slate-600 leading-tight">
                  <span className="font-bold text-slate-900 block mb-0.5">Subsidy Eligible</span>
                  Get up to <span className="text-emerald-600 font-bold">₹78,000 back</span> under Govt. schemes.
                </div>
              </div>

              <div className="space-y-4 mb-10">
                {plan.features.map((feature, i) => (
                  <div key={i} className="flex items-start">
                    <div className="bg-emerald-500/10 p-1 rounded-full mr-3 mt-1">
                      <Check className="w-3 h-3 text-emerald-600" />
                    </div>
                    <span className="text-slate-700 text-sm font-medium">{feature}</span>
                  </div>
                ))}
              </div>

              <a 
                href="#contact"
                className={`flex items-center justify-center space-x-2 w-full py-5 rounded-2xl font-bold transition-all active:scale-95 group/btn ${plan.isPopular ? 'bg-emerald-600 text-white hover:bg-emerald-700 shadow-xl shadow-emerald-600/20' : 'bg-slate-900 text-white hover:bg-slate-800'}`}
              >
                <span>Book Free Site Visit</span>
                <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
              </a>
              
              <div className="mt-4 text-center">
                <span className="text-[10px] text-slate-400 font-medium">EMI Starts at ₹1,999/month</span>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 flex flex-col md:flex-row items-center justify-center gap-8 p-8 bg-slate-50 rounded-3xl border border-dashed border-slate-200">
          <div className="flex -space-x-3">
            {[1, 2, 3, 4].map(i => (
              <img key={i} className="w-10 h-10 rounded-full border-2 border-white shadow-sm" src={`https://i.pravatar.cc/100?img=${i+10}`} alt="user" />
            ))}
          </div>
          <p className="text-slate-600 font-medium text-center md:text-left">
            Join <span className="text-emerald-600 font-bold">500+ families</span> this month who switched to SolarEdge.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
