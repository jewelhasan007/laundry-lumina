import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Calendar, 
  Clock, 
  MapPin, 
  User, 
  Phone, 
  Mail, 
  Package, 
  CheckCircle2, 
  ArrowRight,
  AlertCircle
} from 'lucide-react';
import axios from 'axios';
import { cn } from '../lib/utils';

type BookingForm = {
  name: string;
  email: string;
  phone: string;
  address: string;
  service: string;
  weight: string;
  pickupDate: string;
  pickupTime: string;
};

export function Booking() {
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const { register, handleSubmit, watch, formState: { errors }, trigger } = useForm<BookingForm>({
    defaultValues: {
      service: 'Wash & Fold',
      pickupTime: '09:00 - 11:00'
    }
  });

  const onSubmit = async (data: BookingForm) => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.post('/api/bookings', data);
      if (response.data.success) {
        setSuccess(true);
      }
    } catch (err: any) {
      setError(err.response?.data?.error || 'Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const nextStep = async () => {
    const fieldsToValidate = step === 1 
      ? ['name', 'email', 'phone', 'address'] as const
      : ['service', 'weight', 'pickupDate', 'pickupTime'] as const;
    
    const isValid = await trigger(fieldsToValidate);
    if (isValid) setStep(step + 1);
  };

  const prevStep = () => setStep(step - 1);

  if (success) {
    return (
      <div className="pt-32 pb-20 px-6 max-w-7xl mx-auto flex items-center justify-center min-h-[70vh]">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="glass p-12 lg:p-16 rounded-[40px] text-center max-w-xl space-y-8"
        >
          <div className="w-24 h-24 bg-secondary/10 text-secondary rounded-full flex items-center justify-center mx-auto">
            <CheckCircle2 className="w-12 h-12" />
          </div>
          <div className="space-y-4">
            <h1 className="text-4xl lg:text-5xl font-extrabold text-[#0F172A] leading-tight tracking-tight italic">Pickup Scheduled!</h1>
            <p className="text-[#64748B] text-lg font-medium">
              Thank you, <span className="text-primary font-bold">{watch('name')}</span>. We've received your booking and will collect your items on <span className="font-bold">{watch('pickupDate')}</span>.
            </p>
          </div>
          <p className="text-sm text-[#64748B] font-medium italic opacity-70">A confirmation email has been sent to {watch('email')}.</p>
          <div className="pt-4">
            <button 
              onClick={() => window.location.href = '/'}
              className="btn-primary w-full py-4 text-lg"
            >
              Back to Home
            </button>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-24 px-6 relative overflow-hidden">
      <div className=" max-w-4xl mx-auto">
        <div className="w-full min-h-[50vh] text-center space-y-6 mb-16 rounded-2xl"
             style={{

    backgroundImage: "url('/booking.jpg')",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center top"
  }}>
        
          <h1 className="text-[3.5rem] lg:text-[4.5rem] font-extrabold text-[#0F172A] tracking-[-0.04em] leading-[1.1]">Order <span className="text-primary italic">Now.</span></h1>
          <p className="text-[#64748B] text-[1.125rem] font-medium max-w-lg mx-auto leading-relaxed">Takes less than 60 seconds to setup your first pickup with premium care.</p>
        </div>

        {/* Stepper */}
        <div className="flex items-center justify-center gap-6 mb-16">
          {[1, 2, 3].map((s) => (
            <div 
              key={s}
              className={cn(
                "w-12 h-12 rounded-[14px] flex items-center justify-center text-sm font-bold transition-all duration-300", 
                step >= s ? "bg-primary text-white shadow-lg shadow-primary/30" : "bg-white/50 border border-black/5 text-slate-400"
              )}
            >
              0{s}
            </div>
          ))}
        </div>

        <div className="glass p-10 md:p-16 rounded-[32px] overflow-hidden">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-12">
            <AnimatePresence mode="wait">
              {step === 1 && (
                <motion.div
                  key="step1"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-10"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-white rounded-[10px] flex items-center justify-center shadow-sm">
                      <User className="text-primary w-5 h-5" />
                    </div>
                    <h2 className="text-[1.25rem] font-bold text-slate-900 tracking-tight">1. Personal Details</h2>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-2">
                      <label className="text-[0.75rem] font-bold text-slate-500 uppercase tracking-[0.05em]">Full Name</label>
                      <input 
                        {...register('name', { required: 'Name is required' })}
                        placeholder="John Doe"
                        className={cn("w-full bg-white/50 border border-black/5 rounded-[12px] px-5 py-4 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all", errors.name ? "border-rose-200" : "")}
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[0.75rem] font-bold text-slate-500 uppercase tracking-[0.05em]">Email</label>
                      <input 
                        {...register('email', { 
                          required: 'Email is required',
                          pattern: { value: /^\S+@\S+$/i, message: 'Invalid email' }
                        })}
                        placeholder="john@example.com"
                        className={cn("w-full bg-white/50 border border-black/5 rounded-[12px] px-5 py-4 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all", errors.email ? "border-rose-200" : "")}
                      />
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-2">
                      <label className="text-[0.75rem] font-bold text-slate-500 uppercase tracking-[0.05em]">Phone</label>
                      <input 
                        {...register('phone', { required: 'Phone is required' })}
                        placeholder="+1 (555) 000-0000"
                        className={cn("w-full bg-white/50 border border-black/5 rounded-[12px] px-5 py-4 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all", errors.phone ? "border-rose-200" : "")}
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-[0.75rem] font-bold text-slate-500 uppercase tracking-[0.05em]">Pickup Address</label>
                    <textarea 
                      {...register('address', { required: 'Address is required' })}
                      placeholder="Street, Building, Apartment No."
                      rows={3}
                      className={cn("w-full bg-white/50 border border-black/5 rounded-[12px] px-5 py-4 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all resize-none", errors.address ? "border-rose-200" : "")}
                    />
                  </div>
                </motion.div>
              )}

              {step === 2 && (
                <motion.div
                  key="step2"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-10"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-white rounded-[10px] flex items-center justify-center shadow-sm">
                      <Package className="text-primary w-5 h-5" />
                    </div>
                    <h2 className="text-[1.25rem] font-bold text-slate-900 tracking-tight">2. Pickup Details</h2>
                  </div>

                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-2">
                      <label className="text-[0.75rem] font-bold text-slate-500 uppercase tracking-[0.05em]">Care Type</label>
                      <select 
                        {...register('service')}
                        className="w-full bg-white/50 border border-black/5 rounded-[12px] px-5 py-4 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all appearance-none"
                      >
                        <option>Wash & Fold</option>
                        <option>Dry Cleaning</option>
                        <option>Express Service</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <label className="text-[0.75rem] font-bold text-slate-500 uppercase tracking-[0.05em]">Frequency</label>
                      <select className="w-full bg-white/50 border border-black/5 rounded-[12px] px-5 py-4 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all appearance-none">
                        <option>One-time pickup</option>
                        <option>Weekly (Save 10%)</option>
                        <option>Every 2 weeks</option>
                      </select>
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-2">
                      <label className="text-[0.75rem] font-bold text-slate-500 uppercase tracking-[0.05em]">Pickup Date</label>
                      <input 
                        type="date"
                        {...register('pickupDate', { required: 'Pickup date is required' })}
                        className={cn("w-full bg-white/50 border border-black/5 rounded-[12px] px-5 py-4 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all", errors.pickupDate ? "border-rose-200" : "")}
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[0.75rem] font-bold text-slate-500 uppercase tracking-[0.05em]">Time Window</label>
                      <select 
                        {...register('pickupTime')}
                        className="w-full bg-white/50 border border-black/5 rounded-[12px] px-5 py-4 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all appearance-none"
                      >
                        <option>Morning (9am - 12pm)</option>
                        <option>Afternoon (1pm - 4pm)</option>
                        <option>Evening (5pm - 8pm)</option>
                      </select>
                    </div>
                  </div>
                </motion.div>
              )}

              {step === 3 && (
                <motion.div
                  key="step3"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-10"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-white rounded-[10px] flex items-center justify-center shadow-sm">
                      <CheckCircle2 className="text-primary w-5 h-5" />
                    </div>
                    <h2 className="text-[1.25rem] font-bold text-slate-900 tracking-tight">3. Final Review</h2>
                  </div>
                  
                  <div className="glass p-10 rounded-[24px] space-y-8">
                    <div className="grid grid-cols-2 gap-8 text-[0.8rem]">
                      <div className="space-y-1">
                        <p className="text-slate-500 font-bold uppercase tracking-widest text-[0.65rem]">Service Plan</p>
                        <p className="font-extrabold text-[#0F172A] text-lg">{watch('service')}</p>
                      </div>
                      <div className="space-y-1">
                        <p className="text-slate-500 font-bold uppercase tracking-widest text-[0.65rem]">Pickup Day</p>
                        <p className="font-extrabold text-[#0F172A] text-lg">{watch('pickupDate')}</p>
                      </div>
                      <div className="space-y-1">
                        <p className="text-slate-500 font-bold uppercase tracking-widest text-[0.65rem]">Arrival Window</p>
                        <p className="font-extrabold text-[#0F172A] text-lg">{watch('pickupTime')}</p>
                      </div>
                      <div className="space-y-1">
                        <p className="text-slate-500 font-bold uppercase tracking-widest text-[0.65rem]">Location</p>
                        <p className="font-extrabold text-[#0F172A] text-lg line-clamp-1">{watch('address')}</p>
                      </div>
                    </div>
                    
                    <div className="pt-8 border-t border-black/5">
                      <div className="flex justify-between items-center bg-white/50 p-6 rounded-2xl shadow-sm border border-black/5">
                        <span className="font-bold text-slate-900 italic tracking-tight">Estimated Total</span>
                        <span className="text-2xl font-extrabold text-secondary italic">Pay after wash</span>
                      </div>
                    </div>
                  </div>

                  {error && (
                    <div className="bg-rose-50/50 text-rose-600 p-6 rounded-[20px] flex items-center gap-4 border border-rose-100 backdrop-blur-sm">
                      <AlertCircle className="shrink-0 w-5 h-5" />
                      <p className="font-bold text-sm">{error}</p>
                    </div>
                  )}
                </motion.div>
              )}
            </AnimatePresence>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              {step > 1 && (
                <button 
                  type="button" 
                  onClick={prevStep}
                  className="flex-1 px-10 py-4 rounded-full font-bold text-slate-500 hover:text-slate-900 bg-white/50 border border-black/5 transition-all text-sm"
                >
                  Go Back
                </button>
              )}
              
              {step < 3 ? (
                <button 
                  type="button" 
                  onClick={nextStep}
                  className="btn-primary flex-[2] flex items-center justify-center gap-2 group text-sm"
                >
                  Next Step <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              ) : (
                <button 
                  type="submit" 
                  disabled={loading}
                  className={cn(
                    "flex-[2] bg-secondary hover:opacity-90 text-white px-10 py-4 rounded-full font-bold text-sm flex items-center justify-center gap-2 transition-all shadow-xl shadow-secondary/30 disabled:opacity-50 disabled:cursor-not-allowed"
                  )}
                >
                  {loading ? 'Confirming...' : 'Place Order Now'}
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
