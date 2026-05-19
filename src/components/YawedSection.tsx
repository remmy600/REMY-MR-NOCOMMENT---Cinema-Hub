import { motion } from 'motion/react';
import { DollarSign, Play, Eye } from 'lucide-react';

const COMMERCIALS = [
  {
    title: 'DANGER IN THE BUILDING',
    brand: 'Tiger Nsanzi',
    views: '1.2M+',
    poster: '/src/assets/images/danger_building_poster_1779178277633.png'
  },
  {
    title: 'PREDICTOR ON THE BEAT',
    brand: 'Killer DJ Mix',
    views: '890K',
    poster: '/src/assets/images/predictor_beat_poster_1779178294613.png'
  },
  {
    title: 'YAWED REVOLUTION',
    brand: 'Rocky Ent 84',
    views: '2.5M',
    poster: '/src/assets/images/killer_dj_mix_poster_1779178312166.png'
  }
];

export default function YawedSection() {
  return (
    <section id="yawed" className="max-w-7xl mx-auto px-4 py-24">
      <div className="bg-gradient-to-br from-secondary-light/40 to-black rounded-[40px] p-8 md:p-16 border border-primary/20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 blur-[120px] rounded-full -mr-48 -mt-48" />
        
        <div className="flex items-center gap-6 mb-16 relative z-10">
          <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center shadow-premium">
            <DollarSign size={32} className="text-white" />
          </div>
          <div>
            <h2 className="text-4xl md:text-5xl font-black italic uppercase tracking-tighter text-white">
              YAWED <span className="text-primary italic">COMMERCIAL</span>
            </h2>
            <p className="text-white/40 font-bold uppercase tracking-widest text-sm mt-2 font-mono">
              Premium Content • Watch & Earn
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
          {COMMERCIALS.map((ad, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -10 }}
              className="bg-black/60 backdrop-blur-xl border border-white/5 rounded-[32px] overflow-hidden group hover:border-primary/40 transition-colors"
            >
              <div className="aspect-video relative overflow-hidden">
                <img src={ad.poster} alt={ad.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 brightness-[0.8] group-hover:brightness-100" />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                   <div className="w-14 h-14 bg-primary text-white rounded-full flex items-center justify-center shadow-premium transform scale-50 group-hover:scale-100 transition-transform">
                     <Play size={24} fill="currentColor" />
                   </div>
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-xl font-black italic uppercase tracking-tighter mb-2 text-white group-hover:text-primary transition-colors">{ad.title}</h3>
                <div className="flex items-center justify-between">
                  <span className="text-white/40 text-[10px] font-black uppercase tracking-[0.2em]">{ad.brand}</span>
                  <div className="flex items-center gap-2 text-white/40 text-xs">
                    <Eye size={12} />
                    <span className="font-bold">{ad.views}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
