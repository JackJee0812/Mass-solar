
import React from 'react';
import { ArrowRight, PhoneCall, Zap, Award } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[95vh] flex items-center pt-24 overflow-hidden">
      {/* High-quality video or image background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-slate-950/40 z-10"></div>
        <img 
          src="https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&q=80&w=2000" 
          alt="Modern Solar Rooftop" 
          className="w-full h-full object-cover scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-transparent to-white z-20"></div>
      </div>

      <div className="relative z-30 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-4xl">
          <div className="inline-flex items-center space-x-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-5 py-2 mb-8 shadow-xl">
            <div className="flex -space-x-1">
              <div className="w-6 h-6 rounded-full bg-solar-yellow flex items-center justify-center">
                <Award className="w-3 h-3 text-white" />
              </div>
            </div>
            <span className="text-white text-xs font-bold uppercase tracking-widest">
              India's #1 Rated Solar Rooftop Partner
            </span>
          </div>
          
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-black text-white leading-[1.1] mb-8 font-display drop-shadow-2xl">
            Go Solar. <br />
            <span className="text-solar-yellow">Save ₹ Lakhs</span> <br />
            Every Year.
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 mb-12 leading-relaxed max-w-2xl font-medium drop-shadow-md">
            The smartest way for Indian homeowners to beat rising electricity prices. Get <span className="text-emerald-400 font-bold">Government Subsidies</span> and 25 years of free energy.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-6">
            <a 
              href="#contact" 
              className="w-full sm:w-auto bg-emerald-600 hover:bg-emerald-500 text-white px-10 py-5 rounded-2xl font-bold text-xl flex items-center justify-center space-x-3 transition-all hover:shadow-[0_0_30px_rgba(16,185,129,0.5)] active:scale-95 group border-b-4 border-emerald-800"
            >
              <span>Check Eligibility</span>
              <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
            </a>
            
            <a 
              href="tel:+915550001234" 
              className="w-full sm:w-auto bg-white/10 hover:bg-white/20 text-white border border-white/30 backdrop-blur-xl px-10 py-5 rounded-2xl font-bold text-xl flex items-center justify-center space-x-3 transition-all active:scale-95"
            >
              <PhoneCall className="w-6 h-6 text-solar-yellow" />
              <span>Free Consultation</span>
            </a>
          </div>

          <div className="mt-16 flex flex-wrap gap-8 items-center text-white/80">
            <div className="flex items-center space-x-3 bg-white/5 backdrop-blur-sm rounded-xl p-3 border border-white/10">
              <Zap className="w-5 h-5 text-solar-yellow" />
              <span className="font-bold text-sm tracking-tight">Zero Down-payment EMI Available</span>
            </div>
            <div className="flex items-center space-x-3 bg-white/5 backdrop-blur-sm rounded-xl p-3 border border-white/10">
              <Award className="w-5 h-5 text-emerald-400" />
              <span className="font-bold text-sm tracking-tight">Approved Vendor (PM Surya Ghar)</span>
            </div>
          </div>
        </div>
      </div>

      {/* Aesthetic scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center space-y-2 opacity-50 z-30">
        <div className="w-0.5 h-16 bg-gradient-to-b from-white to-transparent"></div>
        <span className="text-white text-[10px] uppercase tracking-widest font-bold">Scroll to Explore</span>
      </div>
    </section>
  );
};

export default Hero;
