import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, Brain, ArrowRight, Star } from 'lucide-react';
import { Movie } from '../types';

interface AIRecommendationsProps {
  viewHistory: Movie[];
  allMovies: Movie[];
  onSelectMovie: (movie: Movie) => void;
}

export default function AIRecommendations({ viewHistory, allMovies, onSelectMovie }: AIRecommendationsProps) {
  const [recommendations, setRecommendations] = useState<{ movie: Movie; confidence: number; reason: string }[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (viewHistory.length === 0) return;

    const fetchRecommendations = async () => {
      setIsLoading(true);
      try {
        const historyText = viewHistory.map(m => m.title).join(', ');
        const moviesList = allMovies.map(m => ({ id: m.id, title: m.title, category: m.category }));
        
        const res = await fetch('/api/chat', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ 
            message: `Based on my history of watching [${historyText}], recommend 3 movies from this specific list: ${JSON.stringify(moviesList)}. Format your response as a JSON array of objects with 'id', 'confidence' (0-100), and 'reason' (short string). ONLY output the JSON array.`,
            history: [] 
          })
        });

        const data = await res.json();
        // Extract JSON from response (Gemini sometimes wraps in code blocks)
        const jsonStr = data.text.match(/\[.*\]/s)?.[0] || '[]';
        const parsed = JSON.parse(jsonStr);
        
        const curated = parsed.map((rec: any) => ({
          movie: allMovies.find(m => m.id === rec.id)!,
          confidence: rec.confidence,
          reason: rec.reason
        })).filter((r: any) => r.movie);

        setRecommendations(curated);
      } catch (error) {
        console.error('Failed to get AI recommendations', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchRecommendations();
  }, [viewHistory]);

  if (viewHistory.length === 0 && !isLoading) return null;

  return (
    <section className="max-w-7xl mx-auto px-4 py-20 border-b border-white/5">
      <div className="flex items-center justify-between mb-12">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <Sparkles size={16} className="text-white" />
            </div>
            <h2 className="text-3xl font-black uppercase italic tracking-tighter">Smart Suggestions</h2>
          </div>
          <p className="mono-label !text-primary">AI Powered • Based on your history</p>
        </div>
        <div className="hidden md:flex items-center gap-2 px-6 py-3 bg-white/5 border border-white/5 rounded-2xl">
          <Brain size={16} className="text-primary" />
          <span className="text-[10px] font-black uppercase italic tracking-widest text-white/40">Analyzing Patterns</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <AnimatePresence mode="wait">
          {isLoading ? (
            Array.from({ length: 3 }).map((_, i) => (
              <div key={i} className="h-64 glass rounded-[32px] animate-pulse flex items-center justify-center">
                <Sparkles className="text-primary/20 animate-spin" size={32} />
              </div>
            ))
          ) : (
            recommendations.map((rec, i) => (
              <motion.div
                key={rec.movie.id}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                onClick={() => onSelectMovie(rec.movie)}
                className="group relative h-80 glass rounded-[32px] overflow-hidden border border-primary/20 hover:border-primary transition-all cursor-pointer"
              >
                <img src={rec.movie.poster} className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:opacity-60 transition-opacity" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                
                <div className="absolute top-6 left-6 flex items-center gap-2">
                  <div className="px-3 py-1 bg-primary text-white text-[10px] font-black uppercase italic tracking-widest rounded-full shadow-lg shadow-primary/20">
                    {rec.confidence}% Match
                  </div>
                </div>

                <div className="absolute bottom-8 left-8 right-8">
                  <h3 className="text-2xl font-black uppercase italic tracking-tighter mb-2 group-hover:text-primary transition-colors">{rec.movie.title}</h3>
                  <p className="text-xs text-white/50 font-bold italic mb-6 line-clamp-2">"{rec.reason}"</p>
                  <div className="flex items-center gap-2 text-primary font-black uppercase tracking-tighter italic text-xs">
                    Watch Now <ArrowRight size={14} className="group-hover:translate-x-2 transition-transform" />
                  </div>
                </div>
              </motion.div>
            ))
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
