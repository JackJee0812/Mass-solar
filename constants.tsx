
import React from 'react';
import { 
  Home, 
  Building2, 
  Factory, 
  Wrench, 
  ShieldCheck, 
  Banknote, 
  Award, 
  Zap,
  Leaf,
  BarChart3,
  Clock
} from 'lucide-react';
import { Service, Benefit, Project, Testimonial, PricingPlan } from './types';

export const SERVICES: Service[] = [
  {
    id: 'residential',
    title: 'Residential Solar',
    description: 'Custom rooftop solar installations for Indian homes. Maximize PM Surya Ghar subsidies and save on bills.',
    icon: <Home className="w-8 h-8 text-emerald-600" />
  },
  {
    id: 'commercial',
    title: 'Commercial Solutions',
    description: 'Scaleable solar systems for offices and showrooms to reduce high commercial electricity tariffs.',
    icon: <Building2 className="w-8 h-8 text-emerald-600" />
  },
  {
    id: 'industrial',
    title: 'Industrial Projects',
    description: 'Heavy-duty solar infrastructure for factories and warehouses with net-metering support.',
    icon: <Factory className="w-8 h-8 text-emerald-600" />
  },
  {
    id: 'maintenance',
    title: 'AMC & Support',
    description: 'Annual Maintenance Contracts including professional cleaning and generation monitoring.',
    icon: <Wrench className="w-8 h-8 text-emerald-600" />
  }
];

export const BENEFITS: Benefit[] = [
  {
    id: 'bills',
    title: 'Zero Electricity Bills',
    description: 'Slash your DISCOM bills by up to 90% through efficient net-metering.',
    icon: <Banknote className="w-6 h-6 text-emerald-500" />
  },
  {
    id: 'eco',
    title: 'Green Footprint',
    description: 'Reduce carbon emissions significantly. Lead the way in sustainable living in India.',
    icon: <Leaf className="w-6 h-6 text-emerald-500" />
  },
  {
    id: 'subsidy',
    title: 'Govt. Subsidies',
    description: 'Direct Benefit Transfer (DBT) subsidies available under latest MNRE schemes.',
    icon: <Award className="w-6 h-6 text-emerald-500" />
  },
  {
    id: 'low-maint',
    title: '5-Year AMC',
    description: 'Comprehensive maintenance included for first 5 years for worry-free operation.',
    icon: <ShieldCheck className="w-6 h-6 text-emerald-500" />
  }
];

export const WHY_CHOOSE_US = [
  { title: 'MNRE Certified', description: 'Empanelled vendor with major DISCOMs for subsidy processing.', icon: <Award className="w-6 h-6" /> },
  { title: 'Easy EMI Options', description: 'Low-interest solar loans from leading banks starting at ₹1,999/mo.', icon: <Banknote className="w-6 h-6" /> },
  { title: 'Tier-1 Tech', description: 'We use high-efficiency Bi-facial and Mono-PERC solar modules.', icon: <Zap className="w-6 h-6" /> },
  { title: 'Generation Guarantee', description: 'Guaranteed energy generation with performance monitoring.', icon: <BarChart3 className="w-6 h-6" /> }
];

export const PROJECTS: Project[] = [
  { id: 1, title: 'Luxury Villa, Bangalore', category: 'Residential', imageUrl: 'https://images.unsplash.com/photo-1594818378825-971fe239596e?auto=format&fit=crop&q=80&w=800' },
  { id: 2, title: 'Textile Mill, Ahmedabad', category: 'Industrial', imageUrl: 'https://images.unsplash.com/photo-1548518014-972406f2ff66?auto=format&fit=crop&q=80&w=800' },
  { id: 3, title: 'Corporate Park, Gurgaon', category: 'Commercial', imageUrl: 'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&q=80&w=800' },
  { id: 4, title: 'Gated Community, Pune', category: 'Residential', imageUrl: 'https://images.unsplash.com/photo-1585822719534-91182e4f773d?auto=format&fit=crop&q=80&w=800' },
  { id: 5, title: 'Warehousing Hub, Bhiwandi', category: 'Industrial', imageUrl: 'https://images.unsplash.com/photo-1624397648246-3a5dfbd3a5cd?auto=format&fit=crop&q=80&w=800' },
  { id: 6, title: 'IT SEZ Rooftop, Hyderabad', category: 'Commercial', imageUrl: 'https://images.unsplash.com/photo-1466611653911-95282fc3656b?auto=format&fit=crop&q=80&w=800' }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: 'Rajesh Sharma',
    role: 'New Delhi Homeowner',
    content: "Our monthly bill dropped from ₹8,000 to just ₹400. The subsidy process was handled entirely by SolarEdge. Excellent service!",
    rating: 5,
    avatar: 'https://i.pravatar.cc/150?u=rajesh'
  },
  {
    id: 2,
    name: 'Anjali Gupta',
    role: 'MD, Gupta Garments',
    content: "Operating a factory on solar has significantly improved our margins. The Bi-facial panels are producing more than expected.",
    rating: 5,
    avatar: 'https://i.pravatar.cc/150?u=anjali'
  },
  {
    id: 3,
    name: 'Vikram Reddy',
    role: 'Apartment Secretary, Hyderabad',
    content: "We installed a 50kW system for our common areas. The ROI is fantastic and the support team is very professional.",
    rating: 5,
    avatar: 'https://i.pravatar.cc/150?u=vikram'
  }
];

export const PRICING: PricingPlan[] = [
  {
    id: 'starter',
    name: 'Starter Home',
    price: '₹1,85,000',
    description: 'Perfect for 2-3 BHK homes with basic appliances.',
    features: ['3kW Hybrid System', 'DCR Panels (Subsidy Eligible)', 'Grid-tie Inverter', 'Structure & Wiring Included', '5-Year System Warranty']
  },
  {
    id: 'standard',
    name: 'Standard Family',
    price: '₹3,45,000',
    description: 'Our bestseller for families with ACs and heavy appliances.',
    isPopular: true,
    features: ['6kW Smart System', 'Mono-PERC Half-cut Panels', 'Remote App Monitoring', 'Net-metering Support', '10-Year Workmanship Warranty', 'Battery Backup Ready']
  },
  {
    id: 'premium',
    name: 'Premium Estate',
    price: '₹6,95,000',
    description: 'High-capacity for bungalows or EV charging needs.',
    features: ['12kW High-Performance', 'Bi-facial Premium Modules', 'Micro-inverter Technology', 'Advanced Energy Storage', '25-Year Generation Guarantee', 'VIP Concierge Service']
  }
];
