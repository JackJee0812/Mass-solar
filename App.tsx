
import React, { useState, useEffect } from 'react';
import { ChevronUp } from 'lucide-react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import HowItWorks from './components/HowItWorks';
import Projects from './components/Projects';
import Pricing from './components/Pricing';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { TESTIMONIALS, WHY_CHOOSE_US, BENEFITS } from './constants';
import { Star } from 'lucide-react';

const App: React.FC = () => {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScroll(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 overflow-x-hidden">
      <Navbar />
      
      <main>
        <Hero />
        
        {/* Why Choose Us Section */}
        <section className="py-20 bg-emerald-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
              {WHY_CHOOSE_US.map((item, i) => (
                <div key={i} className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mb-6">
                    <div className="text-solar-yellow">{item.icon}</div>
                  </div>
                  <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                  <p className="text-emerald-100/70">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <About />
        
        <Services />

        {/* Benefits Section */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row items-center gap-16">
              <div className="lg:w-1/2">
                <span className="text-emerald-600 font-bold uppercase tracking-widest text-sm mb-4 block">Key Benefits</span>
                <h2 className="text-4xl font-bold text-slate-900 mb-8">Why Solar is the Smartest Investment You'll Ever Make</h2>
                <div className="space-y-8">
                  {BENEFITS.map((benefit) => (
                    <div key={benefit.id} className="flex items-start space-x-6">
                      <div className="bg-emerald-50 p-4 rounded-xl flex-shrink-0">
                        {benefit.icon}
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-slate-900 mb-2">{benefit.title}</h4>
                        <p className="text-slate-600">{benefit.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="lg:w-1/2 relative">
                <img 
                  src="https://images.unsplash.com/photo-1592833159155-c62df1b65634?auto=format&fit=crop&q=80&w=1000" 
                  alt="Solar Panels" 
                  className="rounded-3xl shadow-2xl"
                />
                <div className="absolute -bottom-8 -left-8 bg-solar-yellow p-8 rounded-3xl shadow-xl max-w-[280px]">
                  <div className="text-5xl font-black text-white mb-2">90%</div>
                  <div className="text-white font-bold text-lg uppercase leading-tight">Average reduction in energy costs</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <HowItWorks />
        
        <Projects />

        {/* Testimonials */}
        <section id="testimonials" className="py-24 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-slate-900 mb-4">What Our Clients Say</h2>
              <p className="text-slate-600">Join over 5,000 satisfied customers who have made the switch.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {TESTIMONIALS.map((t) => (
                <div key={t.id} className="bg-white p-10 rounded-3xl shadow-sm border border-slate-100 hover:shadow-xl transition-all">
                  <div className="flex space-x-1 mb-6">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className={`w-5 h-5 ${i < t.rating ? 'text-solar-yellow fill-solar-yellow' : 'text-slate-200'}`} />
                    ))}
                  </div>
                  <p className="text-slate-700 italic text-lg leading-relaxed mb-8">"{t.content}"</p>
                  <div className="flex items-center space-x-4">
                    <img src={t.avatar} alt={t.name} className="w-14 h-14 rounded-full border-2 border-emerald-100" />
                    <div>
                      <h4 className="font-bold text-slate-900">{t.name}</h4>
                      <p className="text-slate-500 text-sm">{t.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <Pricing />
        
        <Contact />
      </main>

      <Footer />

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 z-50 p-4 bg-emerald-600 text-white rounded-full shadow-2xl hover:bg-emerald-700 transition-all duration-300 active:scale-90 ${showScroll ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'}`}
      >
        <ChevronUp className="w-6 h-6" />
      </button>

      {/* Floating WhatsApp for conversion */}
      <a
        href="https://wa.me/15550001234"
        className="fixed bottom-24 right-8 z-40 p-4 bg-[#25D366] text-white rounded-full shadow-2xl hover:scale-110 transition-all active:scale-95 flex items-center justify-center"
        target="_blank"
        rel="noopener noreferrer"
      >
        <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      </a>
    </div>
  );
};

export default App;
