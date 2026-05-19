import { Film } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-black py-20 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-primary flex items-center justify-center rounded-xl rotate-12">
                <Film className="text-white" size={24} />
              </div>
              <span className="text-2xl font-black tracking-tighter uppercase italic">
                REMY <span className="text-primary">MR</span> NOCOMMENT
              </span>
            </div>
            <p className="text-white/40 max-w-sm mb-8">
               Uburozi bw'ikinema mu Rwanda. Experience the most dangerous entertainment platform curated by Tiger Nsanzi.
            </p>
          </div>
          
          <div>
            <h4 className="text-xs font-black uppercase tracking-[0.3em] mb-6 italic text-white/50">Iby'ingenzi</h4>
            <ul className="space-y-4">
              <li><a href="#home" className="text-sm font-bold text-white/30 hover:text-primary transition-colors uppercase tracking-widest">Ahabanza</a></li>
              <li><a href="#movies" className="text-sm font-bold text-white/30 hover:text-primary transition-colors uppercase tracking-widest">Films</a></li>
              <li><a href="#analytics" className="text-sm font-bold text-white/30 hover:text-primary transition-colors uppercase tracking-widest">Uburozi</a></li>
              <li><a href="#contact" className="text-sm font-bold text-white/30 hover:text-primary transition-colors uppercase tracking-widest">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-xs font-black uppercase tracking-[0.3em] mb-6 italic text-white/50">Yawed Commercial</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-sm font-bold text-white/30 hover:text-primary transition-colors uppercase tracking-widest">Danger in Building</a></li>
              <li><a href="#" className="text-sm font-bold text-white/30 hover:text-primary transition-colors uppercase tracking-widest">Predictor Beat</a></li>
              <li><a href="#" className="text-sm font-bold text-white/30 hover:text-primary transition-colors uppercase tracking-widest">Killer DJ Mix</a></li>
              <li><a href="#" className="text-sm font-bold text-white/30 hover:text-primary transition-colors uppercase tracking-widest">Rocky Ent 84</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-[10px] font-bold text-white/20 uppercase tracking-[0.5em]">
            © 2026 REMY MR NOCOMMENT - All Rights Reserved
          </div>
          <div className="flex items-center gap-6">
            <span className="bg-white/5 border border-white/5 px-3 py-1 rounded-full text-[8px] font-black uppercase tracking-widest text-white/30">AI Powered</span>
            <span className="bg-white/5 border border-white/5 px-3 py-1 rounded-full text-[8px] font-black uppercase tracking-widest text-white/30">Tiger Nsanzi Certified</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
