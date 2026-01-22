
import React from 'react';
import { Sun, Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 text-white pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          <div className="space-y-8">
            <div className="flex items-center space-x-2">
              <div className="bg-emerald-600 p-2 rounded-lg">
                <Sun className="h-6 w-6 text-white" />
              </div>
              <span className="text-2xl font-bold tracking-tight">SolarEdge</span>
            </div>
            <p className="text-slate-400 leading-relaxed">
              Leading the way in high-performance solar energy solutions since 2008. Making clean energy accessible for everyone.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-emerald-600 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-emerald-600 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-emerald-600 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-emerald-600 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-8 text-white underline decoration-emerald-500 decoration-2 underline-offset-8">Quick Links</h4>
            <ul className="space-y-4 text-slate-400">
              <li><a href="#about" className="hover:text-emerald-500 transition-colors">About Us</a></li>
              <li><a href="#services" className="hover:text-emerald-500 transition-colors">Our Services</a></li>
              <li><a href="#how-it-works" className="hover:text-emerald-500 transition-colors">Installation Process</a></li>
              <li><a href="#projects" className="hover:text-emerald-500 transition-colors">Recent Projects</a></li>
              <li><a href="#pricing" className="hover:text-emerald-500 transition-colors">Solar Packages</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-8 text-white underline decoration-emerald-500 decoration-2 underline-offset-8">Support</h4>
            <ul className="space-y-4 text-slate-400">
              <li><a href="#" className="hover:text-emerald-500 transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-emerald-500 transition-colors">Maintenance Request</a></li>
              <li><a href="#" className="hover:text-emerald-500 transition-colors">Monitoring App</a></li>
              <li><a href="#" className="hover:text-emerald-500 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-emerald-500 transition-colors">Terms of Service</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-8 text-white underline decoration-emerald-500 decoration-2 underline-offset-8">Contact Info</h4>
            <ul className="space-y-6">
              <li className="flex items-start space-x-4">
                <MapPin className="w-6 h-6 text-emerald-500 flex-shrink-0" />
                <span className="text-slate-400">123 Clean Tech Blvd, Austin, TX 78701</span>
              </li>
              <li className="flex items-center space-x-4">
                <Phone className="w-6 h-6 text-emerald-500 flex-shrink-0" />
                <span className="text-slate-400">+1 (555) 000-1234</span>
              </li>
              <li className="flex items-center space-x-4">
                <Mail className="w-6 h-6 text-emerald-500 flex-shrink-0" />
                <span className="text-slate-400">hello@solaredge.com</span>
              </li>
            </ul>
          </div>

        </div>

        <div className="pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-slate-500 text-sm">
          <p>© 2024 SolarEdge Solutions. All rights reserved.</p>
          <div className="mt-4 md:mt-0 space-x-8">
            <a href="#" className="hover:text-white transition-colors">Sustainability Report</a>
            <a href="#" className="hover:text-white transition-colors">ISO 14001 Certification</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
