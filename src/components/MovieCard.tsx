import { motion } from 'motion/react';
import { Play, Plus, Check, Star, Eye, TrendingUp } from 'lucide-react';
import { Movie } from '../types';
import { cn } from '../lib/utils';

interface MovieCardProps {
  movie: Movie;
  isWatchlisted: boolean;
  onToggleWatchlist: (e: React.MouseEvent) => void;
  onTrailerClick: (e: React.MouseEvent) => void;
  onClick: () => void;
}

export default function MovieCard({ movie, isWatchlisted, onToggleWatchlist, onTrailerClick, onClick }: MovieCardProps) {
  return (
    <div 
      onClick={onClick}
      className="group relative bg-secondary-light rounded-[32px] overflow-hidden border border-white/5 hover:border-primary/50 transition-all duration-700 cursor-pointer"
    >
      <div className="aspect-[4/5] relative overflow-hidden">
        <img 
          src={movie.poster} 
          alt={movie.title}
          className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 brightness-[0.7] group-hover:brightness-100"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-secondary via-transparent to-transparent opacity-60" />
        
        {/* Badges */}
        <div className="absolute top-6 left-6 flex flex-col gap-2">
          {movie.isYawed && (
            <span className="bg-primary text-white text-[9px] font-black uppercase px-3 py-1 rounded-full italic tracking-[0.2em] shadow-xl shadow-primary/40">
              YAWED
            </span>
          )}
          {parseFloat(movie.rating) >= 8.5 && (
            <span className="bg-amber-500 text-black text-[9px] font-black uppercase px-3 py-1 rounded-full italic tracking-[0.2em] shadow-xl shadow-amber-500/40 flex items-center gap-1">
              <TrendingUp size={10} />
              TRENDING
            </span>
          )}
        </div>

        <div className="absolute top-6 right-6 glass px-3 py-1.5 rounded-full flex items-center gap-2">
          <Star size={12} className="text-primary fill-primary" />
          <span className="text-[10px] font-black italic">{movie.rating}</span>
        </div>
      </div>

      <div className="p-8 relative">
        <div className="flex items-center justify-between mb-4">
           <span className="mono-label !text-primary">{movie.category}</span>
           <div className="flex items-center gap-2 text-white/20 text-[10px] font-bold">
             <Eye size={12} />
             {movie.views}
           </div>
        </div>
        <h3 className="text-2xl font-black uppercase italic tracking-tighter truncate mb-6 group-hover:text-primary transition-colors leading-none">
          {movie.title}
        </h3>
        
        <div className="flex gap-3">
          <button 
            onClick={(e) => { e.stopPropagation(); onClick(); }}
            className="flex-1 bg-primary/10 text-primary py-4 rounded-xl font-black text-xs uppercase italic tracking-tighter flex items-center justify-center gap-2 hover:bg-primary hover:text-white transition-all transform hover:scale-[1.02] border border-primary/20 shadow-xl shadow-primary/5"
          >
            <Play size={14} fill="currentColor" />
            Reba
          </button>
          <button 
            onClick={(e) => {
              e.stopPropagation();
              onTrailerClick(e);
            }}
            className="w-12 h-12 flex items-center justify-center rounded-xl border border-white/10 hover:bg-white/5 text-primary transition-all shadow-xl hover:shadow-primary/10 group/btn"
            title="Play Trailer"
          >
            <Play size={18} fill="currentColor" className="group-hover/btn:scale-110 transition-transform" />
          </button>
          <button 
            onClick={(e) => {
              e.stopPropagation();
              onToggleWatchlist(e);
            }}
            className={cn(
              "w-12 h-12 flex items-center justify-center rounded-xl border border-white/10 transition-all transform hover:scale-[1.02]",
              isWatchlisted ? "bg-primary border-primary text-white shadow-xl shadow-primary/20" : "hover:bg-white/5 text-white/30"
            )}
          >
            {isWatchlisted ? <Check size={20} strokeWidth={3} /> : <Plus size={20} strokeWidth={3} />}
          </button>
        </div>
      </div>
    </div>
  );
}
