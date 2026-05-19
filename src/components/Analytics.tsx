import { motion, AnimatePresence } from 'motion/react';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, AreaChart, Area } from 'recharts';
import { TrendingUp, Users, Download, Film } from 'lucide-react';

const data = [
  { name: 'Lun', views: 4000, downloads: 2400 },
  { name: 'Mar', views: 3000, downloads: 1398 },
  { name: 'Mer', views: 2000, downloads: 9800 },
  { name: 'Jeu', views: 2780, downloads: 3908 },
  { name: 'Ven', views: 1890, downloads: 4800 },
  { name: 'Sam', views: 2390, downloads: 3800 },
  { name: 'Dim', views: 3490, downloads: 4300 },
];

export default function Analytics() {
  const stats = [
    { label: 'Views', value: '28.5K', icon: Users, change: '+12.5%', color: 'text-primary' },
    { label: 'Downloads', value: '15.2K', icon: Download, change: '+8.3%', color: 'text-green-500' },
    { label: 'Movies', value: '347', icon: Film, change: '+24', color: 'text-accent' },
    { label: 'Followers', value: '500K+', icon: TrendingUp, change: 'Official', color: 'text-gold' },
  ];

  return (
    <section id="analytics" className="max-w-7xl mx-auto px-4 py-20 relative">
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 blur-[120px] rounded-full" />
      
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 mb-16">
        <div>
          <h2 className="section-title mb-4 italic">UBUROZI ANALYTICS</h2>
          <p className="text-white/40 uppercase text-xs font-bold tracking-[0.3em]">Live Platform Data • @tigernsanz</p>
        </div>
        <div className="flex items-center gap-4 bg-white/5 border border-white/10 p-2 rounded-2xl">
          <button className="px-5 py-2 bg-primary text-white rounded-xl text-xs font-bold">24 Hours</button>
          <button className="px-5 py-2 text-white/40 rounded-xl text-xs font-bold hover:text-white transition-colors">7 Days</button>
          <button className="px-5 py-2 text-white/40 rounded-xl text-xs font-bold hover:text-white transition-colors">30 Days</button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {stats.map((stat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="glass p-8 rounded-3xl border border-white/5 hover:border-white/10 transition-all group"
          >
            <div className={`w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform ${stat.color}`}>
              <stat.icon size={24} />
            </div>
            <div className="text-4xl font-black italic tracking-tighter mb-1">{stat.value}</div>
            <div className="flex items-center justify-between font-bold text-xs uppercase tracking-widest text-white/30">
              {stat.label}
              <span className={stat.change.includes('+') ? 'text-green-500' : 'text-primary'}>{stat.change}</span>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="glass p-8 rounded-3xl h-[400px]">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data}>
            <defs>
              <linearGradient id="colorViews" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#e50914" stopOpacity={0.3}/>
                <stop offset="95%" stopColor="#e50914" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <XAxis dataKey="name" stroke="#ffffff20" fontSize={10} tickLine={false} axisLine={false} />
            <Tooltip 
              contentStyle={{ backgroundColor: '#1a1a1a', border: '1px solid #ffffff10', borderRadius: '12px' }}
              itemStyle={{ fontSize: '12px', fontWeight: 'bold' }}
            />
            <Area 
              type="monotone" 
              dataKey="views" 
              stroke="#e50914" 
              strokeWidth={3}
              fillOpacity={1} 
              fill="url(#colorViews)" 
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </section>
  );
}
