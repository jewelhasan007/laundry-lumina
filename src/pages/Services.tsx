import { motion } from 'motion/react';
import { 
  Waves, 
  WashingMachine, 
  Zap, 
  Timer, 
  Leaf, 
  Truck, 
  Sparkles,
  ChevronRight,
  ArrowRight
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '../lib/utils';

const services = [
  {
    icon: Waves,
    title: 'Wash & Fold',
    price: 'From $1.50/lb',
    time: '24-48 Hours',
   image: '/washfold.jpg',
    desc: 'Perfect for your everyday essentials. We wash, dry, and professionaly fold your clothes so they are ready to put away.',
    features: ['Eco-friendly detergents', 'Color separation', 'Individual machines', 'Neatly folded']
  },
  {
    icon: WashingMachine,
    title: 'Dry Cleaning',
    price: 'From $6.00/item',
    time: '48-72 Hours',
    image: '/dryclean.jpg',
    desc: 'Specialized care for delicate fabrics. Perfect for suits, dresses, silk, and wool items that require gentle cleaning.',
    features: ['Stain removal', 'Pressing included', 'Hanging delivery', 'Protective wrapping']
  },
  {
    icon: Zap,
    title: 'Ironing Service',
    price: 'From $3.50/item',
    time: '24 Hours',
    image: '/ironing.jpg',
    desc: 'Get that crisp, professional look. We steam and press your garments to perfection, leaving them wrinkle-free.',
    features: ['Crisp finish', 'Hanging or folded', 'Temperature control', 'Silk & linen expert']
  },
  {
    icon: Timer,
    title: 'Express Service',
    price: '+30% Surcharge',
    time: '8-12 Hours',
    image: '/express-service.jpg',
    desc: 'In a hurry? Our express service priority-cleans your items for same-day delivery or early next morning.',
    features: ['Priority processing', 'Rapid delivery', 'All service types', 'Guaranteed turnaround']
  }
];

export function Services() {
  return (
    <div className="pt-24 pb-20">
      {/* Header */}
      <section className="py-24 px-6 text-center"
         style={{

    backgroundImage: "url('/laun.jpg')",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center top"
  }}
      >
        <div className="max-w-7xl mx-auto space-y-8">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[3.5rem] lg:text-[6rem] font-extrabold text-[#0F172A] leading-[1.1] tracking-[-0.04em]"
          >
            Care <span className="text-primary italic">Options.</span>
          </motion.h1>
          <p className="text-[#64748B] text-[1.125rem] font-medium max-w-2xl mx-auto leading-relaxed">
            Professional laundry services designed for the modern world. Simple pricing, perfect results.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto space-y-32">
          {services.map((service, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className={cn(
                "flex flex-col lg:items-center gap-16 lg:gap-24",
                idx % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
              )}
            >
              <div className="flex-1 space-y-10 text-center lg:text-left">
                <div className="space-y-6">
                  <div className="w-20 h-20 bg-white rounded-[20px] flex items-center justify-center shadow-md mx-auto lg:mx-0">
                    <service.icon className="text-primary w-10 h-10" />
                  </div>
                  <div className="pt-2">
                    <h2 className="text-4xl lg:text-[3.5rem] font-extrabold text-[#0F172A] leading-tight tracking-[-0.03em]">{service.title}</h2>
                    <div className="flex items-center justify-center lg:justify-start gap-4 mt-4">
                       <p className="text-secondary font-extrabold text-2xl">{service.price}</p>
                       <span className="w-1.5 h-1.5 rounded-full bg-slate-300" />
                       <p className="text-[#64748B] font-bold uppercase tracking-wider text-sm">{service.time}</p>
                    </div>
                  </div>
                </div>
                
                <p className="text-[#64748B] text-[1.125rem] font-medium leading-relaxed">{service.desc}</p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {service.features.map((feature, fidx) => (
                    <div key={fidx} className="glass flex items-center gap-3 p-5 rounded-[20px]">
                      <div className="w-8 h-8 bg-white rounded-[10px] flex items-center justify-center shadow-sm">
                        <Sparkles className="w-4 h-4 text-primary" />
                      </div>
                      <span className="text-sm font-bold text-slate-700">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-6">
                  <Link 
                    to="/booking" 
                    className="btn-primary inline-flex items-center gap-3"
                  >
                    Select Service <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>

              <div className="flex-1 relative group">
                <div className="aspect-[4/5] rounded-[60px] overflow-hidden shadow-3xl border-8 border-white">
                   <img
    src={service.image}
    alt={service.title}
    className="w-full h-full object-cover"
  />
                </div>
                {/* Decorative floating badge */}
                <div className="absolute -top-10 -right-10 bg-white p-6 rounded-[35px] shadow-2xl border border-blue-50 hidden md:block">
                   <p className="text-primary font-black text-2xl">24h</p>
                   <p className="text-slate-400 font-bold text-xs uppercase tracking-widest leading-none">Turnaround</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Specialty Section */}
      <section className="bg-slate-900 py-32 px-6 text-white overflow-hidden relative border-y border-white/5">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-12 relative z-10">
            <h2 className="text-4xl lg:text-[4rem] font-extrabold leading-[1] tracking-[-0.04em]">Beyond Just <br /><span className="text-primary">Cleaning.</span></h2>
            <p className="text-[#94A3B8] text-[1.125rem] leading-relaxed font-medium max-w-lg">We provide specialized care for unique items. From wedding dresses to luxury rugs, we have the expertise and the technology.</p>
            
            <div className="space-y-10">
              {[
                { title: 'Eco-Friendly Approach', icon: Leaf, desc: 'We use non-toxic, biodegradable products that are safe for you and the planet.' },
                { title: 'Free Pickup & Delivery', icon: Truck, desc: 'No more heavy bags. We collect and deliver at your convenience, for free.' }
              ].map((item, idx) => (
                <div key={idx} className="flex gap-6 group">
                  <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center shrink-0 border border-white/10 group-hover:bg-primary transition-all">
                    <item.icon className="text-primary group-hover:text-white w-6 h-6 transition-colors" />
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-bold text-xl text-white">{item.title}</h4>
                    <p className="text-[#94A3B8] leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
             <div className="absolute inset-0 bg-primary/20 blur-[120px] rounded-full -z-10" />
             <img 
                src="/ordernow.jpg" 
                alt="Specialty care" 
                className="rounded-[40px] shadow-3xl grayscale hover:grayscale-0 transition-all duration-700 border-8 border-white/5"
                referrerPolicy="no-referrer"
              />
          </div>
        </div>
      </section>
    </div>
  );
}

