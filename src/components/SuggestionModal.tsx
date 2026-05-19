import { motion, AnimatePresence } from 'motion/react';
import { X, MessageSquare, Send } from 'lucide-react';

interface SuggestionModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SuggestionModal({ isOpen, onClose }: SuggestionModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/90 backdrop-blur-sm z-[200]"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="fixed inset-0 m-auto w-[90vw] max-w-lg h-fit bg-secondary-light border border-primary/30 rounded-[40px] z-[201] overflow-hidden p-10 shadow-2xl"
          >
            <button onClick={onClose} className="absolute top-6 right-6 text-white/30 hover:text-white transition-colors">
              <X size={24} />
            </button>
            
            <h2 className="text-4xl font-black italic uppercase tracking-tighter text-center mb-8 bg-gradient-to-r from-white to-primary bg-clip-text text-transparent">
              Tanga Igitekerezo
            </h2>
            
            <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); onClose(); }}>
              <div className="space-y-2">
                <label className="text-xs font-bold text-white/30 uppercase tracking-[0.2em]">Amazina Yawe</label>
                <input required type="text" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-primary transition-all" placeholder="Enter your name" />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-white/30 uppercase tracking-[0.2em]">Email Address</label>
                <input required type="email" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-primary transition-all" placeholder="user@example.com" />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-white/30 uppercase tracking-[0.2em]">Igitekerezo</label>
                <textarea required rows={4} className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-primary transition-all resize-none" placeholder="Andika ubutumwa hano..." />
              </div>
              <button type="submit" className="w-full btn-netflix flex items-center justify-center gap-3">
                <Send size={18} />
                Ohereza Noneho
              </button>
            </form>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
