import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { WashingMachine, Menu, X, Phone } from 'lucide-react';
import { cn } from '../lib/utils';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Pricing', path: '/pricing' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4',
        scrolled ? 'glass py-3' : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="bg-primary p-2 rounded-lg group-hover:scale-110 transition-transform">
            <WashingMachine className="text-white w-6 h-6" />
          </div>
          <span className="text-2xl font-extrabold tracking-tight text-slate-900 leading-none">
            Lumina<span className="text-primary">Laundry.</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-10">
          <div className="flex gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={cn(
                  'text-sm font-medium transition-all hover:opacity-100',
                  location.pathname === link.path ? 'text-primary font-bold opacity-100' : 'text-slate-900 opacity-80'
                )}
              >
                {link.name}
              </Link>
            ))}
          </div>
          <Link
            to="/booking"
            className="btn-primary"
          >
            Book Pickup
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-slate-900 p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-white border-t p-6 shadow-xl md:hidden"
          >
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={cn(
                    'text-lg font-medium py-2',
                    location.pathname === link.path ? 'text-sky-500' : 'text-slate-600'
                  )}
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                to="/booking"
                className="bg-sky-500 text-white text-center py-3 rounded-xl font-semibold shadow-lg shadow-sky-200 mt-2"
                onClick={() => setIsOpen(false)}
              >
                Book Pickup
              </Link>
              <div className="flex items-center justify-center gap-2 text-slate-500 py-4 mt-4 border-t border-slate-100">
                <Phone className="w-4 h-4" />
                <span className="text-sm">Call us: +1 (555) 123-4567</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
