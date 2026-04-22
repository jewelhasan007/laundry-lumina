import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send, MessageCircle, CheckCircle2 } from 'lucide-react';
import axios from 'axios';
import { cn } from '../lib/utils';

type ContactForm = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

export function Contact() {
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const { register, handleSubmit, formState: { errors }, reset } = useForm<ContactForm>();

  const onSubmit = async (data: ContactForm) => {
    setLoading(true);
    try {
      await axios.post('/api/contact', data);
      setSuccess(true);
      reset();
      setTimeout(() => setSuccess(false), 5000);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="pt-24 min-h-screen">
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-20 p-4 rounded-2xl  "
              style={{
    backgroundImage: "url('/contact.jpg')",
    backgroundRepeat: "no-repeat",
    backgroundSize: "contain",        // or "contain" depending on your need
    backgroundPosition: "center",   // keeps it nicely centered
  }}
        >
          {/* Info Side */}
          <div className="space-y-12">
            <div className="space-y-6">
              <h1 className="text-6xl md:text-8xl font-black text-slate-900 tracking-tighter leading-[1]">
                Say <span className="text-primary italic">Hello.</span>
              </h1>
              <p className="text-slate-500 text-xl font-medium leading-relaxed max-w-md">
                We're here to help with any questions about your order or our services.
              </p>
            </div>

            <div className="grid gap-6">
              {[
                { icon: Phone, label: 'Call us', text: '+1 (555) LuminaLaundry', sub: 'Mon-Sun, 8am-8pm' },
                { icon: Mail, label: 'Email support', text: 'help@LuminaLaundry.com', sub: '24/7 dedicated support' },
                { icon: MapPin, label: 'Find us', text: '123 Care Street', sub: 'New York, NY 10001' }
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-6 p-8 rounded-[40px] bg-slate-50 border border-transparent hover:border-blue-100 transition-all group">
                  <div className="w-16 h-16 bg-white rounded-3xl flex items-center justify-center shadow-lg group-hover:bg-primary group-hover:text-white transition-all">
                    <item.icon className="w-8 h-8" />
                  </div>
                  <div>
                    <p className="text-xs font-black text-slate-400 uppercase tracking-widest">{item.label}</p>
                    <p className="text-lg font-black text-slate-900 mt-1">{item.text}</p>
                    <p className="text-sm text-slate-500 font-bold">{item.sub}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Form Side */}
          <div className="bg-white rounded-[60px] shadow-3xl shadow-blue-500/10 p-10 md:p-16 border border-slate-50 relative">
            {success && (
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-8 p-6 bg-emerald-50 text-emerald-700 rounded-3xl border border-emerald-100 flex items-center gap-4"
              >
                <CheckCircle2 className="w-6 h-6" />
                <p className="font-bold">Message sent successfully!</p>
              </motion.div>
            )}

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label className="text-xs font-black text-slate-400 uppercase tracking-[0.2em] ml-2">Your Name</label>
                  <input 
                    {...register('name', { required: true })}
                    placeholder="John Doe"
                    className="w-full px-8 py-5 rounded-[25px] bg-slate-50 border-2 border-transparent font-bold transition-all focus:border-primary focus:bg-white outline-none"
                  />
                </div>
                
                <div className="space-y-3">
                  <label className="text-xs font-black text-slate-400 uppercase tracking-[0.2em] ml-2">Email</label>
                  <input 
                    {...register('email', { required: true })}
                    placeholder="john@example.com"
                    className="w-full px-8 py-5 rounded-[25px] bg-slate-50 border-2 border-transparent font-bold transition-all focus:border-primary focus:bg-white outline-none"
                  />
                </div>
              </div>

              <div className="space-y-3">
                <label className="text-xs font-black text-slate-400 uppercase tracking-[0.2em] ml-2">Message</label>
                <textarea 
                  {...register('message', { required: true })}
                  placeholder="How can we help?"
                  rows={4}
                  className="w-full px-8 py-5 rounded-[25px] bg-slate-50 border-2 border-transparent font-bold transition-all focus:border-primary focus:bg-white outline-none resize-none"
                />
              </div>

              <button 
                type="submit"
                disabled={loading}
                className="w-full bg-primary hover:bg-blue-700 text-white py-5 rounded-full font-black text-lg transition-all shadow-xl shadow-blue-500/20 active:scale-[0.98] disabled:opacity-50"
              >
                {loading ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
