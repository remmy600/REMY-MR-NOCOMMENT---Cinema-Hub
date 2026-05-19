import { motion } from 'motion/react';
import { DollarSign, Play, Eye } from 'lucide-react';

const COMMERCIALS = [
  {
    title: 'DANGER IN THE BUILDING',
    brand: 'Tiger Nsanzi',
    views: '1.2M+',
    poster: 'https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?q=80&w=2070&auto=format&fit=crop'
  },
  {
    title: 'PREDICTOR ON THE BEAT',
    brand: 'Killer DJ Mix',
    views: '890K',
    poster: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?q=80&w=2070&auto=format&fit=crop'
  },
  {
    title: 'GO IT STRONG',
    brand: 'Rocky Ent 84',
    views: '2.5M',
    poster: 'https://images.unsplash.com/photo-1557683316-973673baf926?q=80&w=2029&auto=format&fit=crop'
  }
];

export default function YawedSection() {
  return (
    <section id="yawed" className="max-w-7xl mx-auto px-4 py-24">
      <div className="bg-gradient-to-br from-[#001a1a] to-[#002626] rounded-[40px] p-8 md:p-16 border border-[#00ccff]/30 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#00ccff]/10 blur-[120px] rounded-full -mr-48 -mt-48" />
        
        <div className="flex items-center gap-6 mb-16 relative z-10">
          <div className="w-16 h-16 bg-[#00ccff] rounded-2xl flex items-center justify-center shadow-[0_0_30px_rgba(0,204,255,0.5)]">
            <DollarSign size={32} className="text-black" />
          </div>
          <div>
            <h2 className="text-4xl md:text-5xl font-black italic uppercase tracking-tighter text-[#00ccff]">
              YAWED COMMERCIAL
            </h2>
            <p className="text-[#00ccff]/60 font-bold uppercase tracking-widest text-sm mt-2">
              Premium Content • Watch & Earn
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
          {COMMERCIALS.map((ad, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -10 }}
              className="bg-black/60 backdrop-blur-xl border border-[#00ccff]/20 rounded-3xl overflow-hidden group"
            >
              <div className="aspect-video relative overflow-hidden">
                <img src={ad.poster} alt={ad.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                   <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center text-[#00ccff] shadow-xl transform scale-50 group-hover:scale-100 transition-transform">
                     <Play size={24} fill="currentColor" />
                   </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-black italic uppercase tracking-tighter mb-2 text-[#00ccff]">{ad.title}</h3>
                <div className="flex items-center justify-between">
                  <span className="text-white/40 text-xs font-bold uppercase tracking-widest">{ad.brand}</span>
                  <div className="flex items-center gap-2 text-white/60 text-xs">
                    <Eye size={12} />
                    {ad.views}
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
