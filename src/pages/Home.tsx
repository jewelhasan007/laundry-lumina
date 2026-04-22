import { AnimatePresence, motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { useEffect, useState } from "react";
import { 
  ArrowRight, 
  Sparkles, 
  Truck, 
  Clock, 
  ShieldCheck, 
  WashingMachine, 
  Waves, 
  Zap,
  Star,
  CheckCircle2
} from 'lucide-react';

import { cn } from '../lib/utils';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};


const headlines = [
  {
    text: (
      <>
        Fresh Clothes, Delivered{" "}
        <span className="text-primary italic">Today.</span>
      </>
    ),
  },
  {
    text: (
      <>
        Clean clothes, <span className="text-primary italic">fresh always.</span>
      </>
    ),
  },
  {
    text: (
      <>
        Expert care, <span className="text-primary italic">spotless finish.</span>
      </>
    ),
  },
];

export function Home() {

   const [index, setIndex] = useState(0);
useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % headlines.length);
    }, 3000); // change every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-[1.2fr_1fr] gap-16 items-start p-4 rounded-2xl"
        style={{
    backgroundImage: "url('./premium.jpg')",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",        // or "contain" depending on your need
    backgroundPosition: "center",   // keeps it nicely centered
  }}
        >
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-10"
          >
          
            <AnimatePresence mode="wait">
        <motion.h1
          key={index}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.5 }}
          className="text-[3.5rem] lg:text-[4.5rem] font-extrabold text-[#0F172A] leading-[1.1] tracking-[-0.04em]"
        >
          {headlines[index].text}
        </motion.h1>
      </AnimatePresence>


            <p className="text-[1.125rem] text-[#64748B] max-w-lg leading-relaxed font-medium">
              Premium laundry & dry cleaning service for urban professionals. Eco-friendly methods, 24-hour turnaround, and door-to-door convenience.
            </p>
            
            {/* Theme Service Grid in Hero */}
         <div
  className="grid md:grid-cols-3 gap-6 pt-4 bg-cover bg-center"
  
>
              {[
                { icon: "🧼", title: "Wash & Fold", price: "$2.50/lb" },
                { icon: "🤵", title: "Dry Clean", price: "$6.00/pc" },
                { icon: "💨", title: "Express Iron", price: "$2.00/pc" }
              ].map((item, idx) => (
                <div key={idx} className="glass p-6 rounded-[24px] space-y-4">
                  <div className="w-10 h-10 bg-white rounded-[10px] flex items-center justify-center shadow-sm text-xl">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-[1.1rem] font-bold text-[#0F172A]">{item.title}</h3>
                    <p className="text-[0.85rem] text-[#10B981] font-bold mt-1">From {item.price}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex gap-8 pt-4 text-xs font-bold text-slate-500 uppercase tracking-[0.05em]">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-secondary" />
                <span>24H EXPRESS</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-secondary" />
                <span>ECO-FRIENDLY</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="glass p-10 rounded-[28px] space-y-8"
          >
            <h2 className="text-[1.25rem] font-bold text-slate-900 mb-6">Schedule a Pickup</h2>
            
            <div className="space-y-6">
              <div className="space-y-2">
                <label className="text-[0.75rem] font-bold text-slate-500 uppercase tracking-widest">Pickup Address</label>
                <input 
                  type="text" 
                  placeholder="123 Urban View, Apt 4B" 
                  className="w-full bg-white/50 border border-black/5 rounded-[12px] px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all font-medium"
                />
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-[0.75rem] font-bold text-slate-500 uppercase tracking-widest">Pickup Date</label>
                  <input 
                    type="text" 
                    placeholder="Oct 24, 2023" 
                    className="w-full bg-white/50 border border-black/5 rounded-[12px] px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all font-medium"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[0.75rem] font-bold text-slate-500 uppercase tracking-widest">Time Slot</label>
                  <input 
                    type="text" 
                    placeholder="10:00 AM - 12:00 PM" 
                    className="w-full bg-white/50 border border-black/5 rounded-[12px] px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all font-medium"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[0.75rem] font-bold text-slate-500 uppercase tracking-widest">Service Type</label>
                <select className="w-full bg-white/50 border border-black/5 rounded-[12px] px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all appearance-none font-medium">
                  <option>Wash & Fold + Express Ironing</option>
                  <option>Standard Dry Cleaning</option>
                  <option>Premium Wedding Gown Care</option>
                </select>
              </div>

              <Link to="/booking" className="btn-primary w-full block text-center py-4">
                Confirm Booking
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-end justify-between gap-8 mb-20 text-center md:text-left">
            <div className="space-y-4 max-w-2xl">
              <h2 className="text-4xl md:text-6xl font-black text-slate-900 leading-tight">Services designed <br/> for your lifestyle</h2>
              <p className="text-slate-500 text-xl font-medium">Simple, transparent, and always high quality.</p>
            </div>
            <Link to="/services" className="text-primary font-black flex items-center gap-2 hover:gap-3 transition-all text-lg">
               View Price List <ArrowRight className="w-5 h-5" />
            </Link>
          </div>

          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-10"
          >
            {[
              { icon: Waves, title: 'Wash & Fold', desc: 'The easiest way to get your laundry done. We wash, dry, and fold it for you.', color: 'bg-blue-600', image: '/washfold.jpg', },
              { icon: WashingMachine, title: 'Dry Cleaning', desc: 'Expert cleaning for suits, dresses, and all your delicate formal wear.', color: 'bg-blue-600', image: '/dryclean.jpg', },
              { icon: Zap, title: 'Laundry Pro+', desc: 'Need it faster? Our express service guarantees same day delivery.', color: 'bg-blue-600', image: '/laundrypro.jpg', }
            ].map((service, idx) => (
              <motion.div 
                key={idx}
                variants={fadeInUp}
               className="p-12 rounded-[50px] bg-cover bg-center hover:bg-white hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-300 border-2 border-transparent hover:border-blue-50"
   style={{
  backgroundImage: `url(${service.image})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",      // or "contain"
  backgroundPosition: "center"
}}
              >
                <div className={cn("w-20 h-20 rounded-[28px] flex items-center justify-center mb-10 shadow-xl", service.color)}>
                  <service.icon className="text-white w-10 h-10" />
                </div>
                <h3 className="text-3xl font-black text-slate-900 mb-5 tracking-tight">{service.title}</h3>
                <p className="text-slate-500 mb-8 text-lg font-medium leading-relaxed">{service.desc}</p>
                <Link to="/booking" className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-white shadow-lg text-primary hover:bg-primary hover:text-white transition-all">
                  <ArrowRight className="w-6 h-6" />
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-32 bg-slate-900 border-y border-slate-800">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-12">
            <h2 className="text-4xl md:text-7xl font-black text-white leading-[1] tracking-tighter">Your laundry, <br/> done in <span className="text-primary">clicks.</span></h2>
            
            <div className="space-y-10">
              {[
                { step: '01', title: 'Schedule online', desc: 'Pick a collection time and place. Order in less than 60 seconds.' },
                { step: '02', title: 'We collect', desc: 'A friendly Valet arrives to pick up your laundry bags at your doorstep.' },
                { step: '03', title: 'Fresh delivery', desc: 'Items are returned clean, folded or hung, usually within 24 hours.' }
              ].map((s, idx) => (
                <div key={idx} className="flex gap-8 group">
                  <div className="text-5xl font-black text-slate-800 group-hover:text-primary transition-colors">{s.step}</div>
                  <div className="space-y-2">
                    <h4 className="text-2xl font-bold text-white">{s.title}</h4>
                    <p className="text-slate-400 text-lg">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
             <div className="bg-primary/10 absolute -inset-10 rounded-full blur-[100px]" />
             <img 
              src="/happydry.jpg" 
              alt="App interface" 
              className="rounded-[60px] shadow-3xl relative z-10 border-8 border-slate-800"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-end justify-between gap-8 mb-16">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-5xl font-bold text-slate-900">What Our Clients Say</h2>
              <p className="text-slate-500 text-lg">Join 5,000+ happy customers in Clean City.</p>
            </div>
            <div className="flex gap-2">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map(i => (
                  <img 
                    key={i}
                    src={`https://i.pravatar.cc/150?u=${i}`} 
                    className="w-12 h-12 rounded-full border-4 border-white"
                    alt="User avatar"
                    referrerPolicy="no-referrer"
                  />
                ))}
              </div>
              <div className="flex flex-col justify-center">
                <div className="flex text-amber-500">
                  <Star className="w-4 h-4 fill-amber-500" />
                  <Star className="w-4 h-4 fill-amber-500" />
                  <Star className="w-4 h-4 fill-amber-500" />
                  <Star className="w-4 h-4 fill-amber-500" />
                  <Star className="w-4 h-4 fill-amber-500" />
                </div>
                <p className="text-xs font-bold text-slate-900">4.9/5 Average Rating</p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: "Sarah Johnson", role: "Business Professional", text: "Lumina has changed my life. As a busy consultant, I never have time for laundry. Their pickup service is seamless and the laundry is always perfect." },
              { name: "Michael Chen", role: "Software Engineer", text: "Best dry cleaning service I've used. My suits come back looking brand new every time. Very high quality work and professional staff." },
              { name: "Elena Rodriguez", role: "Fashion Designer", text: "I'm very picky about my clothes. Lumina understands delicate fabrics. Their eco-friendly process is a huge plus for me." }
            ].map((t, idx) => (
              <div key={idx} className="p-8 rounded-3xl bg-slate-50 border-2 border-transparent hover:border-sky-200 transition-all">
                <Star className="w-8 h-8 text-sky-500 fill-sky-200 mb-6" />
                <p className="text-slate-700 italic mb-8 leading-relaxed">"{t.text}"</p>
                <div>
                  <h4 className="font-bold text-slate-900">{t.name}</h4>
                  <p className="text-xs text-slate-500 uppercase tracking-widest">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 pb-24">
        <div className="max-w-7xl mx-auto bg-slate-900 rounded-[50px] p-12 md:p-24 overflow-hidden relative"
          style={{
    backgroundImage: "url('./cleaning.jpg')",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",        // or "contain" depending on your need
    backgroundPosition: "center",   // keeps it nicely centered
  }}
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-sky-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          <div className="relative z-10 text-center space-y-8">
            <h2 className="text-4xl md:text-6xl font-bold text-white leading-tight">Ready to Experience <br /> the Luxury of <span className="text-sky-400">Fresh?</span></h2>
            <p className="text-slate-400 text-lg max-w-xl mx-auto">First time? Use code <span className="text-white font-mono font-bold">FRESH25</span> for 25% off your first booking.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Link to="/booking" className="bg-sky-500 hover:bg-sky-400 text-white px-10 py-5 rounded-2xl font-bold text-lg transition-all">
                Schedule Your First Pickup
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

// Helper to use clsx/tailwind-merge via direct import if needed (but we have cn utility)
