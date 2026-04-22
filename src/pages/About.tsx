import { motion } from 'motion/react';
import { Leaf, Award, UserCheck, ShieldCheck, Heart, Sparkles } from 'lucide-react';

export function About() {
  return (
    <div className="pt-24 min-h-screen">
      {/* Hero */}
      <section className="py-24 px-6 relative overflow-hidden">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-10"
          >
            <h1 className="text-[3.5rem] lg:text-[6.5rem] font-extrabold text-[#0F172A] leading-[0.95] tracking-[-0.04em]">
              About <br />
              Lumina<span className="text-primary italic">Laundry.</span>
            </h1>
            <p className="text-[#64748B] text-[1.25rem] max-w-lg font-medium leading-relaxed">
              We started with a simple mission: to give urban professionals their time back. Laundry shouldn't be a chore that takes up your precious weekend.
            </p>
            <div className="flex gap-16 pt-4">
              <div>
                <p className="text-5xl lg:text-[4rem] font-extrabold text-[#0F172A] tracking-tighter">10k+</p>
                <p className="text-[0.7rem] text-slate-500 font-bold uppercase tracking-[0.1em] mt-2 opacity-60">Happy Users</p>
              </div>
              <div>
                <p className="text-5xl lg:text-[4rem] font-extrabold text-[#0F172A] tracking-tighter">25+</p>
                <p className="text-[0.7rem] text-slate-500 font-bold uppercase tracking-[0.1em] mt-2 opacity-60">Urban Hubs</p>
              </div>
            </div>
          </motion.div>
          <div className="relative">
             <div className="absolute -inset-10 bg-primary/20 blur-[100px] rounded-full -z-10 animate-pulse" />
             <img 
               src="/done-one-click.jpg" 
              alt="Our Story" 
              className="rounded-[40px] shadow-3xl relative z-10 border-8 border-white"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-32 px-6 max-w-7xl mx-auto space-y-24">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <h2 className="text-4xl lg:text-5xl font-extrabold text-[#0F172A] tracking-tighter leading-tight">Focus on what <br/> matters most.</h2>
          <p className="text-[#64748B] text-xl font-medium leading-relaxed">Our platform leverages local cleaning partners to ensure quality and speed while supporting local businesses.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            { icon: Leaf, title: 'Planet Conscious', desc: 'Working with partners who prioritize eco-friendly solvents and water-saving methods.' },
            { icon: ShieldCheck, title: 'Zero Worry', desc: 'Every order is insured and handled with professional-grade inspection tools.' },
            { icon: Heart, title: 'Partner First', desc: 'We empower local laundromats with tech, helping them scale and serve better.' }
          ].map((item, idx) => (
            <div key={idx} className="glass p-12 rounded-[32px] group hover:bg-white transition-all duration-500">
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-10 shadow-sm group-hover:bg-primary transition-colors">
                <item.icon className="w-8 h-8 text-primary group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-2xl font-extrabold text-[#0F172A] mb-4 tracking-tight">{item.title}</h3>
              <p className="text-[#64748B] text-sm leading-relaxed font-medium">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Team */}
      <section className="py-32 bg-slate-900 text-white px-6 border-y border-white/5 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 blur-[150px] -z-10" />
        <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-20">
          <div className="lg:col-span-1 space-y-8">
            <h2 className="text-4xl lg:text-5xl font-extrabold leading-[1.1] tracking-[-0.04em]">Meet the <br /><span className="text-primary italic">Dream Team.</span></h2>
            <p className="text-[#94A3B8] text-lg font-medium leading-relaxed">Our experts have over 50 years of combined experience in high-end garment care and logistics optimization.</p>
            <div className="pt-4">
              <div className="bg-white/5 border border-white/10 p-6 rounded-[24px] inline-flex items-center gap-4">
                <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center">
                  <Award className="text-primary w-6 h-6" />
                </div>
                <div>
                  <p className="font-bold text-white">Award Winning Care</p>
                  <p className="text-xs text-[#94A3B8] font-bold uppercase tracking-wider">2026 Best Applet Service</p>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:col-span-2 grid sm:grid-cols-2 gap-8">
            {[
              { name: 'Alex Rivera', role: 'Founder & CEO', img: './founder.jpg' },
              { name: 'Marcus Wong', role: 'Ops Director', img: './ops.jpg' },
              { name: 'Sarah Blake', role: 'Care Expert', img: './care.jpg' },
              { name: 'David Lee', role: 'Tech Lead', img: './techlead.jpg' }
            ].map((person, idx) => (
              <div key={idx} className="group relative rounded-[32px] overflow-hidden aspect-[4/5] border border-white/5">
                <img src={person.img} alt={person.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0" referrerPolicy="no-referrer" />
                <div className="absolute inset-x-4 bottom-4 bg-slate-900/40 backdrop-blur-xl p-6 rounded-[24px] border border-white/10">
                  <h4 className="text-xl font-bold text-white">{person.name}</h4>
                  <p className="text-primary text-[0.7rem] font-bold uppercase tracking-widest mt-1 opacity-80">{person.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values banner */}
      <section className="py-24 px-6 bg-primary text-white overflow-hidden relative">
         <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12 text-center md:text-left">
            <h2 className="text-4xl lg:text-[4rem] font-extrabold italic tracking-[-0.04em] max-w-2xl leading-[1]">We treat your clothes like our own.</h2>
            <div className="flex gap-6">
               <div className="bg-white/10 p-5 rounded-3xl border border-white/20 backdrop-blur-sm shadow-xl">
                  <UserCheck className="w-10 h-10" />
               </div>
               <div className="bg-white/10 p-5 rounded-3xl border border-white/20 backdrop-blur-sm shadow-xl">
                  <Sparkles className="w-10 h-10" />
               </div>
            </div>
         </div>
      </section>
    </div>
  );
}
