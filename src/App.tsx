import { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, Film, Laptop, DollarSign, MessageSquare, Instagram, Youtube, Phone, Mail, TrendingUp } from 'lucide-react';
import { INITIAL_MOVIES, MOVIE_CATEGORIES, Movie } from './types';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import MovieCard from './components/MovieCard';
import AIChat from './components/AIChat';
import Analytics from './components/Analytics';
import Footer from './components/Footer';
import YawedSection from './components/YawedSection';
import SuggestionModal from './components/SuggestionModal';

export default function App() {
  const [movies, setMovies] = useState<Movie[]>(INITIAL_MOVIES);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [watchlist, setWatchlist] = useState<string[]>([]);
  const [isAIChatOpen, setIsAIChatOpen] = useState(false);
  const [isSuggestionModalOpen, setIsSuggestionModalOpen] = useState(false);

  const filteredMovies = useMemo(() => {
    return movies.filter(movie => {
      const matchesCategory = selectedCategory === 'all' || movie.category === selectedCategory;
      const matchesSearch = movie.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                           movie.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery, movies]);

  const toggleWatchlist = (id: string) => {
    setWatchlist(prev => prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]);
  };

  return (
    <div className="min-h-screen relative">
      <Navbar onAIChatClick={() => setIsAIChatOpen(true)} />
      
      <main>
        <Hero onSuggestionClick={() => setIsSuggestionModalOpen(true)} />
        
        {/* Search and Filter Section */}
        <section id="movies" className="max-w-7xl mx-auto px-4 py-20">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12">
            <div>
              <h2 className="section-title mb-4">UBUTURO BWA FILMS</h2>
              <div className="flex flex-wrap gap-2">
                {MOVIE_CATEGORIES.map(cat => (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedCategory(cat.id)}
                    className={`px-6 py-2 rounded-full font-semibold transition-all ${
                      selectedCategory === cat.id 
                        ? 'bg-primary text-white shadow-lg shadow-primary/30 scale-105' 
                        : 'bg-white/5 hover:bg-white/10 text-white/70 border border-white/5'
                    }`}
                  >
                    {cat.label}
                  </button>
                ))}
              </div>
            </div>
            
            <div className="relative group w-full md:w-96">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30 group-focus-within:text-primary transition-colors" />
              <input
                type="text"
                placeholder="Shaka film cyangwa umukinnyi..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-white/5 border border-white/10 rounded-2xl focus:outline-none focus:border-primary/50 transition-all text-white placeholder:text-white/20"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            <AnimatePresence mode="popLayout">
              {filteredMovies.map((movie, idx) => (
                <motion.div
                  key={movie.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ delay: idx * 0.05 }}
                >
                  <MovieCard 
                    movie={movie} 
                    isWatchlisted={watchlist.includes(movie.id)}
                    onToggleWatchlist={() => toggleWatchlist(movie.id)}
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
          
          {filteredMovies.length === 0 && (
            <div className="text-center py-20">
              <Film className="w-16 h-16 mx-auto mb-4 text-white/10" />
              <p className="text-xl text-white/40">Nta film imeze gutya yabonetse...</p>
            </div>
          )}
        </section>

        <YawedSection />
        <Analytics />
        
        <section id="contact" className="max-w-7xl mx-auto px-4 py-20 border-t border-white/5">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="section-title mb-8">REMY MR NOCOMMENT</h2>
              <p className="text-xl text-white/60 mb-12 max-w-lg leading-relaxed">
                Danger in the building! Predictor on the beat! Killer DJ on the mix! 
                TIGER NSANZI official platform.
              </p>
              
              <div className="space-y-6">
                {[
                  { icon: Mail, label: 'Email', value: 'remmynsanzimana@gmail.com', link: 'mailto:remmynsanzimana@gmail.com' },
                  { icon: Phone, label: 'Wayphone', value: '+250 795 547 233', link: 'tel:+250795547233' },
                  { icon: Instagram, label: 'Instagram', value: '@tigernsanz', link: 'https://instagram.com/tigernsanz' },
                  { icon: Youtube, label: 'Youtube', value: 'Rocky Entertainment 84', link: 'https://youtube.com/@RockyEntertainment84' },
                ].map((item, i) => (
                  <a 
                    key={i}
                    href={item.link}
                    target="_blank"
                    className="flex items-center gap-6 p-6 rounded-2xl bg-white/5 hover:bg-primary/10 border border-white/5 hover:border-primary/50 transition-all group"
                  >
                    <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-white/5 group-hover:bg-primary/20 text-white/40 group-hover:text-primary transition-all">
                      <item.icon size={24} />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-white/20 uppercase tracking-widest mb-1">{item.label}</div>
                      <div className="text-lg font-bold">{item.value}</div>
                    </div>
                  </a>
                ))}
              </div>
            </div>
            
            <div className="glass p-10 rounded-3xl relative overflow-hidden">
               <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 blur-3xl rounded-full -mr-16 -mt-16" />
               <h3 className="text-3xl font-black mb-8 uppercase italic">Ohereza Ubutumwa</h3>
               <form className="space-y-6">
                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                   <div className="space-y-2">
                     <label className="text-xs font-bold text-white/30 uppercase tracking-widest">Amazina</label>
                     <input type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 focus:outline-none focus:border-primary border-transparent transition-all" placeholder="Remy Mr Nocomment" />
                   </div>
                   <div className="space-y-2">
                     <label className="text-xs font-bold text-white/30 uppercase tracking-widest">Email</label>
                     <input type="email" className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 focus:outline-none focus:border-primary border-transparent transition-all" placeholder="user@gmail.com" />
                   </div>
                 </div>
                 <div className="space-y-2">
                    <label className="text-xs font-bold text-white/30 uppercase tracking-widest">Ubutumwa</label>
                    <textarea rows={4} className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 focus:outline-none focus:border-primary border-transparent transition-all" placeholder="Muraho Tiger..." />
                 </div>
                 <button type="submit" className="w-full btn-netflix">Ohereza Message</button>
               </form>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <AIChat isOpen={isAIChatOpen} onClose={() => setIsAIChatOpen(false)} />
      <SuggestionModal isOpen={isSuggestionModalOpen} onClose={() => setIsSuggestionModalOpen(false)} />
    </div>
  );
}
