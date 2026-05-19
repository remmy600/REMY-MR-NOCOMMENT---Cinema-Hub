import { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, Film, Laptop, DollarSign, MessageSquare, Instagram, Youtube, Phone, Mail, TrendingUp, Filter, ChevronDown, Play, X } from 'lucide-react';
import { INITIAL_MOVIES, MOVIE_CATEGORIES, Movie } from './types';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import MovieCard from './components/MovieCard';
import AIChat from './components/AIChat';
import Analytics from './components/Analytics';
import Footer from './components/Footer';
import YawedSection from './components/YawedSection';
import SuggestionModal from './components/SuggestionModal';
import MovieDetailsModal from './components/MovieDetailsModal';
import AIRecommendations from './components/AIRecommendations';
import Newsletter from './components/Newsletter';

export default function App() {
  const [movies, setMovies] = useState<Movie[]>(INITIAL_MOVIES);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState<'year' | 'rating' | 'title'>('year');
  const [watchlist, setWatchlist] = useState<string[]>([]);
  const [history, setHistory] = useState<string[]>([]);
  const [isAIChatOpen, setIsAIChatOpen] = useState(false);
  const [isSuggestionModalOpen, setIsSuggestionModalOpen] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);
  const [trailerMovie, setTrailerMovie] = useState<Movie | null>(null);

  const filteredMovies = useMemo(() => {
    let result = movies.filter(movie => {
      const matchesCategory = selectedCategory === 'all' || movie.category === selectedCategory;
      const matchesSearch = movie.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                           movie.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });

    return [...result].sort((a, b) => {
      if (sortBy === 'year') return b.year.localeCompare(a.year);
      if (sortBy === 'rating') return parseFloat(b.rating) - parseFloat(a.rating);
      return a.title.localeCompare(b.title);
    });
  }, [selectedCategory, searchQuery, movies, sortBy]);

  const addToHistory = (id: string) => {
    setHistory(prev => [id, ...prev.filter(i => i !== id)].slice(0, 5));
  };

  const toggleWatchlist = (id: string) => {
    setWatchlist(prev => prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]);
  };

  return (
    <div className="min-h-screen relative">
      <Navbar onAIChatClick={() => setIsAIChatOpen(true)} />
      
      <main>
        <Hero onSuggestionClick={() => setIsSuggestionModalOpen(true)} />
        
        {history.length > 0 && (
          <AIRecommendations 
            viewHistory={history.map(id => movies.find(m => m.id === id)!).filter(Boolean)} 
            allMovies={movies}
            onSelectMovie={(m) => {
              setSelectedMovie(m);
              addToHistory(m.id);
            }}
          />
        )}
        
        {/* Search and Filter Section */}
        <section id="movies" className="max-w-7xl mx-auto px-4 py-20">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 mb-16 relative">
            <div className="flex-1">
              <h2 className="section-title mb-6">UBUTURO BWA FILMS</h2>
              <div className="flex flex-wrap gap-3">
                {MOVIE_CATEGORIES.map(cat => (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedCategory(cat.id)}
                    className={`px-8 py-3 rounded-2xl font-black italic uppercase tracking-tighter transition-all text-[10px] border ${
                      selectedCategory === cat.id 
                        ? 'bg-primary border-primary text-white shadow-netflix scale-105' 
                        : 'bg-white/5 hover:bg-white/10 text-white/30 border-white/5'
                    }`}
                  >
                    {cat.label}
                  </button>
                ))}
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 items-stretch lg:items-center">
              {/* Sorting */}
              <div className="relative group min-w-[180px]">
                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-white/20">
                  <Filter size={14} />
                </div>
                <select 
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as any)}
                  className="w-full pl-12 pr-10 py-4 bg-white/5 border border-white/5 rounded-2xl appearance-none focus:outline-none focus:border-primary/50 text-[10px] font-black uppercase italic tracking-widest text-white/50 cursor-pointer"
                >
                  <option value="year" className="bg-secondary">Newest First</option>
                  <option value="rating" className="bg-secondary">Top Rated</option>
                  <option value="title" className="bg-secondary">Title A-Z</option>
                </select>
                <div className="absolute right-4 top-1/2 -translate-y-1/2 text-white/20 pointer-events-none">
                  <ChevronDown size={14} />
                </div>
              </div>

              {/* Search */}
              <div className="relative group flex-1 sm:w-80">
                <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-white/10 group-focus-within:text-primary transition-colors" />
                <input
                  type="text"
                  placeholder="Shaka film cyangwa umukinnyi..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-16 pr-6 py-4 bg-white/5 border border-white/5 rounded-2xl focus:outline-none focus:border-primary/50 transition-all text-white placeholder:text-white/10 text-sm font-bold italic uppercase tracking-tighter"
                />
              </div>
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
                    onToggleWatchlist={(e) => {
                      e.stopPropagation();
                      toggleWatchlist(movie.id);
                    }}
                    onTrailerClick={(e) => {
                      e.stopPropagation();
                      setTrailerMovie(movie);
                    }}
                    onClick={() => {
                      setSelectedMovie(movie);
                      addToHistory(movie.id);
                    }}
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
        <Newsletter />
        
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
      {selectedMovie && (
        <MovieDetailsModal 
          isOpen={!!selectedMovie} 
          movie={selectedMovie} 
          allMovies={movies}
          onClose={() => setSelectedMovie(null)}
          onSelectMovie={(m) => setSelectedMovie(m)}
        />
      )}
      {trailerMovie && (
        <div className="fixed inset-0 z-[500] flex items-center justify-center p-4">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setTrailerMovie(null)}
            className="absolute inset-0 bg-black/90 backdrop-blur-md"
          />
          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="relative w-full max-w-5xl aspect-video bg-black rounded-[40px] overflow-hidden shadow-2xl border border-white/5"
          >
            <button 
              onClick={() => setTrailerMovie(null)}
              className="absolute top-6 right-6 z-10 p-3 bg-black/60 rounded-full text-white/70 hover:text-white border border-white/10"
            >
              <X size={24} />
            </button>
            <iframe 
              src={trailerMovie.trailerUrl + '?autoplay=1'}
              className="w-full h-full"
              frameBorder="0"
              allow="autoplay; encrypted-media"
              allowFullScreen
            />
          </motion.div>
        </div>
      )}
    </div>
  );
}
