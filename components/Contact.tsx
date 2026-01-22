
import React, { useState } from 'react';
import { Mail, Phone, MapPin, MessageCircle, Send, ArrowRight, ShieldCheck } from 'lucide-react';
import { ContactFormData } from '../types';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({ name: '', email: '', phone: '', message: '' });
      setTimeout(() => setIsSuccess(false), 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-slate-900 rounded-[3rem] shadow-3xl overflow-hidden border border-slate-800">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            
            <div className="bg-gradient-to-br from-emerald-900 via-emerald-800 to-slate-900 p-12 lg:p-16 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-solar-yellow/5 rounded-full blur-3xl -mr-32 -mt-32"></div>
                
              <h2 className="text-4xl lg:text-5xl font-black mb-8 leading-tight">Ready to <br />Switch?</h2>
              <p className="text-emerald-100/80 text-lg mb-12 max-w-md leading-relaxed">
                Fill out the form for a customized generation report and subsidy calculation for your home.
              </p>

              <div className="space-y-10">
                <div className="flex items-start space-x-6 group">
                  <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:bg-solar-yellow/20 transition-colors">
                    <Mail className="w-6 h-6 text-solar-yellow" />
                  </div>
                  <div>
                    <h4 className="font-bold text-emerald-200 uppercase tracking-widest text-xs mb-1">Send Email</h4>
                    <p className="text-xl font-medium">solutions@solaredge.in</p>
                  </div>
                </div>

                <div className="flex items-start space-x-6 group">
                  <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:bg-solar-yellow/20 transition-colors">
                    <Phone className="w-6 h-6 text-solar-yellow" />
                  </div>
                  <div>
                    <h4 className="font-bold text-emerald-200 uppercase tracking-widest text-xs mb-1">Direct Helpline</h4>
                    <p className="text-xl font-medium">+91 (555) 012-3456</p>
                  </div>
                </div>
              </div>

              <div className="mt-20 flex items-center space-x-4 bg-white/5 p-6 rounded-2xl border border-white/10">
                <ShieldCheck className="w-10 h-10 text-emerald-400" />
                <div>
                  <p className="text-sm font-bold">Data Privacy Guaranteed</p>
                  <p className="text-xs text-white/50">Your details are only used for solar consultation.</p>
                </div>
              </div>
            </div>

            <div className="p-12 lg:p-16 bg-white">
              {isSuccess ? (
                <div className="h-full flex flex-col items-center justify-center text-center space-y-6">
                  <div className="w-24 h-24 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center animate-bounce">
                    <Send className="w-12 h-12" />
                  </div>
                  <h3 className="text-4xl font-black text-slate-900">Request Sent!</h3>
                  <p className="text-slate-600 text-lg">An expert will call you back on your provided number within 4 office hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-3">
                      <label className="text-sm font-black text-slate-800 uppercase tracking-widest">Your Name</label>
                      <input 
                        required
                        type="text"
                        placeholder="Arjun Singh"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        className="w-full px-6 py-5 bg-slate-50 border-2 border-slate-100 rounded-2xl focus:border-emerald-500 focus:bg-white transition-all outline-none font-medium text-slate-900"
                      />
                    </div>
                    <div className="space-y-3">
                      <label className="text-sm font-black text-slate-800 uppercase tracking-widest">Email Address</label>
                      <input 
                        required
                        type="email"
                        placeholder="arjun@email.in"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        className="w-full px-6 py-5 bg-slate-50 border-2 border-slate-100 rounded-2xl focus:border-emerald-500 focus:bg-white transition-all outline-none font-medium text-slate-900"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <label className="text-sm font-black text-slate-800 uppercase tracking-widest">Phone (WhatsApp Preferred)</label>
                    <div className="relative">
                        <span className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-400 font-bold">+91</span>
                        <input 
                          required
                          type="tel"
                          placeholder="98765 43210"
                          value={formData.phone}
                          onChange={(e) => setFormData({...formData, phone: e.target.value})}
                          className="w-full pl-16 pr-6 py-5 bg-slate-50 border-2 border-slate-100 rounded-2xl focus:border-emerald-500 focus:bg-white transition-all outline-none font-medium text-slate-900"
                        />
                    </div>
                  </div>

                  <div className="space-y-3">
                    <label className="text-sm font-black text-slate-800 uppercase tracking-widest">Project Type</label>
                    <select className="w-full px-6 py-5 bg-slate-50 border-2 border-slate-100 rounded-2xl focus:border-emerald-500 focus:bg-white transition-all outline-none font-medium text-slate-900 appearance-none">
                        <option>Residential Rooftop</option>
                        <option>Commercial/Office</option>
                        <option>Industrial Plant</option>
                        <option>Maintenance Request</option>
                    </select>
                  </div>
                  
                  <button 
                    disabled={isSubmitting}
                    className="group w-full bg-slate-900 hover:bg-emerald-600 text-white font-black text-lg py-6 rounded-2xl shadow-2xl transition-all flex items-center justify-center space-x-3 active:scale-[0.98] border-b-4 border-slate-700 hover:border-emerald-700"
                  >
                    {isSubmitting ? (
                      <div className="w-6 h-6 border-4 border-white/30 border-t-white rounded-full animate-spin"></div>
                    ) : (
                      <>
                        <span>Get Detailed Quote</span>
                        <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
                      </>
                    )}
                  </button>
                  
                  <div className="flex items-center justify-center space-x-4 opacity-50">
                    <div className="h-px bg-slate-300 flex-1"></div>
                    <span className="text-[10px] font-bold uppercase tracking-widest">Secure & Confidential</span>
                    <div className="h-px bg-slate-300 flex-1"></div>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
