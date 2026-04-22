import { useState, useMemo } from 'react';
import { motion } from 'motion/react';
import { Calculator, Tag, Sparkles, Check, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '../lib/utils';

const pricingData = {
  'Wash & Fold': { price: 1.5, unit: 'lb' },
  'Dry Cleaning': { price: 6.0, unit: 'item' },
  'Ironing': { price: 3.5, unit: 'item' }
};

export function Pricing() {
  const [service, setService] = useState<'Wash & Fold' | 'Dry Cleaning' | 'Ironing'>('Wash & Fold');
  const [quantity, setQuantity] = useState(1);

  const total = useMemo(() => {
    return (pricingData[service].price * quantity).toFixed(2);
  }, [service, quantity]);

  return (
    <div className="pt-24 pb-20">
      {/* Header */}
      <section className="relative w-full min-h-[70vh] flex items-center justify-center px-6"
      
        style={{

    backgroundImage: "url('/washfold.jpg')",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center top"
  }}>
    <div
  className="relative max-w-5xl mx-auto text-center space-y-6"

>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[3.5rem] lg:text-[5.5rem] font-extrabold text-[#0F172A] leading-[1.1] tracking-[-0.04em]"
          >
            Transparent <span className="text-secondary italic">Pricing.</span>
          </motion.h1>
          <p className="text-[#64748B] text-[1.125rem] font-medium max-w-2xl mx-auto leading-relaxed">
            No hidden fees. Pay only for what you need with our straightforward pricing model.
          </p>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-12">
          {/* Calculator Card */}
          <div className="lg:col-span-2 space-y-12">
            <div className="glass p-10 md:p-14 rounded-[32px] space-y-10">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white rounded-[14px] flex items-center justify-center shadow-sm">
                  <Calculator className="text-primary w-6 h-6" />
                </div>
                <h2 className="text-[1.5rem] font-bold text-slate-900 tracking-tight">Cost Calculator</h2>
              </div>

              <div className="grid md:grid-cols-2 gap-10">
                <div className="space-y-4">
                  <label className="text-[0.75rem] font-bold text-slate-500 uppercase tracking-widest">Select Service</label>
                  <div className="flex flex-col gap-2">
                    {(Object.keys(pricingData) as Array<keyof typeof pricingData>).map((s) => (
                      <button
                        key={s}
                        onClick={() => setService(s)}
                        className={cn(
                          "px-6 py-4 rounded-xl font-bold text-left transition-all border",
                          service === s 
                            ? "bg-primary text-white border-primary shadow-lg shadow-primary/20" 
                            : "bg-white/50 border-black/5 text-slate-600 hover:bg-white transition-colors"
                        )}
                      >
                        {s}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="space-y-4">
                  <label className="text-[0.75rem] font-bold text-slate-500 uppercase tracking-widest">
                    Quantity ({pricingData[service].unit})
                  </label>
                  <div className="flex items-center gap-4 bg-white/50 p-3 rounded-xl border border-black/5 transition-all">
                    <button 
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="w-12 h-12 rounded-lg bg-white shadow-sm flex items-center justify-center font-bold text-xl hover:bg-primary hover:text-white transition-all"
                    >
                      -
                    </button>
                    <input 
                      type="number" 
                      value={quantity}
                      onChange={(e) => setQuantity(parseInt(e.target.value) || 0)}
                      className="flex-grow bg-transparent text-center font-bold text-2xl outline-none text-slate-900"
                    />
                    <button 
                      onClick={() => setQuantity(quantity + 1)}
                      className="w-12 h-12 rounded-lg bg-white shadow-sm flex items-center justify-center font-bold text-xl hover:bg-primary hover:text-white transition-all"
                    >
                      +
                    </button>
                  </div>
                  <p className="text-xs text-[#64748B] font-semibold italic opacity-70">
                    * Final weight determined on pickup.
                  </p>
                </div>
              </div>

              <div className="bg-[#0F172A] p-10 rounded-[28px] text-white flex flex-col md:flex-row justify-between items-center gap-8 shadow-2xl">
                <div className="text-center md:text-left">
                  <p className="text-[#94A3B8] font-bold uppercase tracking-widest text-xs mb-2">Estimated total</p>
                  <h3 className="text-5xl lg:text-6xl font-extrabold italic tracking-tighter">${total}</h3>
                </div>
                <Link 
                  to="/booking" 
                  className="btn-primary"
                >
                  Book Pickup Now
                </Link>
              </div>
            </div>

            {/* Pricing Tiers */}
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { title: 'Standard', price: '$1.50', desc: 'Wash & Fold per lb', items: ['24h Turnaround', 'Bio-detergents', 'Basic folding'] },
                { title: 'Premium', price: '$2.25', desc: 'Wash & Fold per lb', items: ['12h Turnaround', 'Scented fabric softener', 'Detailed folding', 'Express delivery'] },
                { title: 'Business', price: 'Custom', desc: 'Bulk monthly contracts', items: ['Priority pickup', 'Dedicated account manager', 'Tailored cleaning', 'Billing terms'] }
              ].map((tier, idx) => (
                <div key={idx} className="glass p-8 rounded-[24px] group hover:bg-white transition-all cursor-default">
                  <h4 className="font-bold text-slate-900 mb-4 tracking-tight text-lg">{tier.title}</h4>
                  <div className="mb-6">
                    <span className="text-3xl font-extrabold text-[#0F172A]">{tier.price}</span>
                    <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest mt-1">{tier.desc}</p>
                  </div>
                  <ul className="space-y-4 mb-8">
                    {tier.items.map((item, iidx) => (
                      <li key={iidx} className="flex items-center gap-3 text-sm font-medium text-slate-600">
                        <Check className="w-4 h-4 text-secondary" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <button className="w-full py-3.5 rounded-xl border border-black/5 font-bold text-sm bg-white/50 group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-all shadow-sm">
                    Choose Plan
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* FAQ / Info Sidebar */}
          <div className="space-y-8">
            <div className="glass p-10 rounded-[32px] space-y-10">
              <h3 className="text-xl font-bold text-slate-900 flex items-center gap-3">
                <Tag className="text-primary w-5 h-5" /> Pricing FAQ
              </h3>
              <div className="space-y-10">
                {[
                  { q: 'Is there a minimum order?', a: 'Yes, our minimum order value is $25 for free pickup.' },
                  { q: 'How do you calculate weight?', a: 'We use professional digital scales at our facility to ensure accuracy.' },
                  { q: 'Any hidden service fees?', a: 'No. Delivery is free for orders over $25. No "convenience" fees ever.' }
                ].map((faq, idx) => (
                  <div key={idx} className="space-y-3">
                    <p className="font-bold text-primary italic leading-tight">{faq.q}</p>
                    <p className="text-[#64748B] text-sm leading-relaxed font-medium">{faq.a}</p>
                  </div>
                ))}
              </div>
              <div className="pt-4 border-t border-black/5">
                <div className="bg-white/50 p-6 rounded-2xl flex items-center gap-4 border border-black/5 shadow-sm">
                  <div className="bg-primary/10 p-2.5 rounded-xl">
                    <Sparkles className="text-primary w-4 h-4" />
                  </div>
                  <div>
                    <p className="font-bold text-xs text-slate-900">Have a special item?</p>
                    <Link to="/contact" className="text-[10px] text-primary font-bold hover:underline uppercase tracking-wider">Custom Quote</Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-primary p-10 rounded-[32px] text-white flex items-center justify-between shadow-xl shadow-primary/20 cursor-pointer hover:scale-[1.02] transition-transform">
              <div>
                <p className="font-extrabold text-lg">Student Discount</p>
                <p className="text-sm font-medium text-white/80 italic">20% Off every order</p>
              </div>
              <ChevronRight className="text-white w-6 h-6" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

