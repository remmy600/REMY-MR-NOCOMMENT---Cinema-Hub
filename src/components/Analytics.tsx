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
      
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 mb-16 relative z-10">
        <div>
          <h2 className="section-title mb-2">PLATFORM DATA</h2>
          <p className="mono-label !text-primary">Live Platform Data • @tigernsanz</p>
        </div>
        <div className="flex items-center gap-2 bg-white/5 border border-white/5 p-2 rounded-2xl">
          <button className="px-6 py-2 bg-primary text-white rounded-xl text-[10px] font-black uppercase italic tracking-tighter">24 Hours</button>
          <button className="px-6 py-2 text-white/20 rounded-xl text-[10px] font-black uppercase italic tracking-tighter hover:text-white transition-colors">7 Days</button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12 relative z-10">
        {stats.map((stat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="glass p-10 rounded-[32px] border border-white/5 hover:border-primary/20 transition-all group"
          >
            <div className={`w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform ${stat.color}`}>
              <stat.icon size={24} strokeWidth={3} />
            </div>
            <div className="text-5xl font-black italic tracking-tighter mb-2 leading-none">{stat.value}</div>
            <div className="flex items-center justify-between mono-label">
              {stat.label}
              <span className={stat.change.includes('+') ? 'text-green-500' : 'text-primary'}>{stat.change}</span>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="glass p-10 rounded-[40px] h-[450px] relative z-10 overflow-hidden">
        <div className="absolute top-0 right-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-20" />
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data}>
            <defs>
              <linearGradient id="colorViews" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#e50914" stopOpacity={0.4}/>
                <stop offset="95%" stopColor="#e50914" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <XAxis dataKey="name" stroke="#ffffff10" fontSize={10} tickLine={false} axisLine={false} fontFamily="JetBrains Mono" />
            <Tooltip 
              contentStyle={{ backgroundColor: '#050505', border: '1px solid #ffffff10', borderRadius: '16px', fontFamily: 'JetBrains Mono' }}
              itemStyle={{ fontSize: '12px', fontWeight: 'bold', textTransform: 'uppercase' }}
              cursor={{ stroke: '#e50914', strokeWidth: 1 }}
            />
            <Area 
              type="step" 
              dataKey="views" 
              stroke="#e50914" 
              strokeWidth={4}
              fillOpacity={1} 
              fill="url(#colorViews)" 
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </section>
  );
}
