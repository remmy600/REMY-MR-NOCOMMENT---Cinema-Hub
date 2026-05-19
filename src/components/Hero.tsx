import { motion } from 'motion/react';
import { Play, Info, TrendingUp, MessageSquare } from 'lucide-react';

interface HeroProps {
  onSuggestionClick: () => void;
}

export default function Hero({ onSuggestionClick }: HeroProps) {
  return (
    <section id="home" className="relative h-[95vh] flex items-center justify-center overflow-hidden">
      {/* Dynamic Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=1925&auto=format&fit=crop')] bg-cover bg-center brightness-[0.3]" />
        <div className="absolute inset-0 bg-gradient-to-t from-secondary via-transparent to-black/60" />
        <div className="absolute inset-0 bg-gradient-to-r from-secondary/80 via-transparent to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 w-full">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl"
        >
          <div className="flex items-center gap-3 mb-6">
             <div className="flex items-center gap-2 bg-primary/20 backdrop-blur-md px-3 py-1 rounded-md border border-primary/30">
               <TrendingUp size={14} className="text-primary" />
               <span className="text-xs font-bold uppercase tracking-widest text-primary">#1 in Rwanda today</span>
             </div>
             <span className="text-xs font-bold uppercase tracking-widest text-white/50">Tiger Nsanzi Official</span>
          </div>

          <h1 className="text-7xl md:text-9xl font-black uppercase italic tracking-tighter mb-6 leading-[0.8]">
            SHAKA <br /> <span className="text-primary italic">FLIME</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/70 mb-10 leading-relaxed font-medium">
            Iyi ni filime yubuturo bwumwami Shaka Zulu. Ikwerekana imico, intambara, nubuturo bwAbantu bAfurika. DANGER IN THE BUILDING!
          </p>

          <div className="flex flex-wrap gap-4">
            <button className="btn-netflix flex items-center gap-3 px-10">
              <Play size={20} fill="currentColor" />
              Reba Noneho
            </button>
            <button 
              onClick={onSuggestionClick}
              className="bg-white/10 hover:bg-white/20 backdrop-blur-xl text-white font-bold py-3 px-8 rounded-full transition-all duration-300 flex items-center gap-3 border border-white/10"
            >
              <MessageSquare size={20} />
              Tanga Igitekerezo
            </button>
          </div>
          
          <div className="mt-12 flex items-center gap-8 text-white/40">
            <div className="flex flex-col">
              <span className="text-2xl font-black text-white italic">2026</span>
              <span className="text-[10px] uppercase font-bold tracking-widest">Released</span>
            </div>
            <div className="w-px h-10 bg-white/10" />
            <div className="flex flex-col">
              <span className="text-2xl font-black text-white italic">9.2</span>
              <span className="text-[10px] uppercase font-bold tracking-widest">Rating</span>
            </div>
            <div className="w-px h-10 bg-white/10" />
            <div className="flex flex-col">
              <span className="text-2xl font-black text-white italic">4K</span>
              <span className="text-[10px] uppercase font-bold tracking-widest">Quality</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Side Visual Element */}
      <div className="absolute right-0 bottom-0 opacity-20 pointer-events-none hidden lg:block">
        <div className="text-[300px] font-black leading-none text-white overflow-hidden whitespace-nowrap -mb-20 italic">
          DANGER
        </div>
      </div>
    </section>
  );
}
