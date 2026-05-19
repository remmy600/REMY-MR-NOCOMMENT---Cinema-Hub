import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Film, MessageSquare, Menu, X } from 'lucide-react';

interface NavbarProps {
  onAIChatClick: () => void;
}

export default function Navbar({ onAIChatClick }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#home', label: 'Ahabanza' },
    { href: '#movies', label: 'Films' },
    { href: '#analytics', label: 'Uburozi' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
      isScrolled ? 'bg-black/80 backdrop-blur-md py-4' : 'bg-transparent py-6'
    }`}>
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-3 group">
          <div className="w-10 h-10 bg-primary flex items-center justify-center rounded-xl rotate-12 group-hover:rotate-0 transition-transform duration-300">
            <Film className="text-white" size={24} />
          </div>
          <span className="text-2xl font-black tracking-tighter uppercase italic">
            REMY <span className="text-primary">MR</span> NOCOMMENT
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map(link => (
            <a key={link.href} href={link.href} className="nav-link text-sm font-bold uppercase tracking-widest">
              {link.label}
            </a>
          ))}
          <button 
            onClick={onAIChatClick}
            className="flex items-center gap-2 bg-primary/10 hover:bg-primary text-primary hover:text-white px-5 py-2 border border-primary/20 rounded-full transition-all text-sm font-bold uppercase tracking-widest"
          >
            <MessageSquare size={16} />
            AI Chat
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-black border-b border-white/10 overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-6">
              {navLinks.map(link => (
                <a 
                  key={link.href} 
                  href={link.href} 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-xl font-black uppercase italic"
                >
                  {link.label}
                </a>
              ))}
              <button 
                onClick={() => {
                  onAIChatClick();
                  setIsMobileMenuOpen(false);
                }}
                className="w-full btn-netflix text-center"
              >
                AI CHAT
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
