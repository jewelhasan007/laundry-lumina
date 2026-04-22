import { Link } from 'react-router-dom';
import { WashingMachine, Facebook, Instagram, Twitter, Apple, Play } from 'lucide-react';

export function Footer() {
  return (
<footer className="relative text-slate-900 pt-24 pb-8 border-t border-black/5 overflow-hidden">
      
      {/* Background layer */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('./footerbg.jpg')",
          backgroundRepeat: "repeat",
          backgroundSize: "600px auto",
          backgroundPosition: "center",
          opacity: 0.1,
        }}
      />

      {/* Content layer */}
      <div className="relative z-10">
       <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20"
   
      >
        {/* Brand */}
        <div className="space-y-6">
          <Link to="/" className="flex items-center gap-2">
            <div className="bg-primary p-2 rounded-lg">
              <WashingMachine className="text-white w-6 h-6" />
            </div>
            <span className="text-2xl font-extrabold tracking-tight text-slate-900 leading-none">
              Lumina<span className="text-primary">Laundry.</span>
            </span>
          </Link>
          <p className="text-[#64748B] text-sm leading-relaxed font-medium">
            Premium laundry & dry cleaning service for urban professionals. Eco-friendly methods, 24-hour turnaround.
          </p>
          <div className="flex gap-3">
            {[Facebook, Instagram, Twitter].map((Icon, idx) => (
              <a key={idx} href="#" className="w-10 h-10 rounded-xl bg-white/50 flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300 shadow-sm">
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-slate-900 font-bold mb-8 uppercase tracking-[0.05em] text-[0.75rem]">Navigation</h3>
          <ul className="space-y-4 text-sm font-semibold">
            {['Home', 'Services', 'Pricing', 'About', 'Contact'].map((item) => (
              <li key={item}>
                <Link to={item === 'Home' ? '/' : `/${item.toLowerCase()}`} className="text-slate-600 hover:text-primary transition-colors opacity-80 hover:opacity-100">
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-slate-900 font-bold mb-8 uppercase tracking-[0.05em] text-[0.75rem]">Our Care</h3>
          <ul className="space-y-4 text-sm font-semibold">
            {['Wash & Fold', 'Dry Cleaning', 'Home Linens', 'Express Plus', 'Stain Removal'].map((item) => (
              <li key={item} className="text-slate-600 hover:text-primary transition-colors cursor-pointer opacity-80 hover:opacity-100">
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Download */}
        <div className="space-y-8">
          <h3 className="text-slate-900 font-bold mb-8 uppercase tracking-[0.05em] text-[0.75rem]">Download Our App</h3>
          <div className="space-y-3">
            <button className="bg-[#0F172A] text-white w-full py-3.5 rounded-xl flex items-center justify-center gap-3 font-semibold hover:bg-slate-800 transition-all text-sm shadow-lg shadow-black/10">
               <Apple className="w-5 h-5" /> App Store
            </button>
            <button className="bg-[#0F172A] text-white w-full py-3.5 rounded-xl flex items-center justify-center gap-3 font-semibold hover:bg-slate-800 transition-all text-sm shadow-lg shadow-black/10">
               <Play className="w-5 h-5" /> Play Store
            </button>
          </div>
        </div>
      </div>

       
        <div className="max-w-7xl mx-auto px-6 pt-12 border-t border-black/5 flex flex-col lg:flex-row justify-between items-center gap-8 text-[0.8rem] font-semibold text-slate-500 uppercase tracking-wider">
        <div className="flex flex-wrap items-center justify-center gap-8">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-secondary" /> 24H EXPRESS TURNAROUND
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-secondary" /> ECO-FRIENDLY DETERGENTS
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-secondary" /> 100% SATISFACTION
          </div>
          <div className="text-primary">5,000+ URBAN CUSTOMERS</div>
        </div>
        <p className="normal-case opacity-60">© 2026 LuminaLaundry. All rights reserved.</p>
      </div>
 
      </div>
    </footer>

  );
}
