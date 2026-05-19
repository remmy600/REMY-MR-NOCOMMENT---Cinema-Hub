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
        <div className="absolute inset-0 bg-[url('/src/assets/images/shaka_flime_poster_1779178669774.png')] bg-cover bg-center brightness-[0.3]" />
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
          <div className="flex items-center gap-3 mb-8">
             <div className="flex items-center gap-2 bg-primary/20 backdrop-blur-md px-4 py-2 rounded-lg border border-primary/30">
               <TrendingUp size={12} className="text-primary" />
               <span className="mono-label !text-primary !tracking-widest">#1 in Rwanda today</span>
             </div>
             <span className="mono-label">Tiger Nsanzi Official</span>
          </div>

          <h1 className="text-[clamp(4rem,15vw,12rem)] font-black uppercase italic tracking-tighter mb-8 leading-[0.75] select-none">
            SHAKA <br /> <span className="text-primary">FLIME</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/50 mb-12 leading-tight font-medium max-w-xl group">
             Iyi ni filime yubuturo bwumwami Shaka Zulu. <span className="text-white">DANGER IN THE BUILDING!</span>
          </p>

          <div className="flex flex-wrap gap-6">
            <button className="btn-netflix flex items-center gap-4 px-12 group">
              <Play size={20} fill="currentColor" className="group-hover:scale-125 transition-transform" />
              Reba Noneho
            </button>
            <button 
              onClick={onSuggestionClick}
              className="bg-white/5 hover:bg-white/10 backdrop-blur-xl text-white font-black py-4 px-10 rounded-2xl transition-all duration-300 flex items-center gap-4 border border-white/10 italic uppercase tracking-tighter cursor-pointer"
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
