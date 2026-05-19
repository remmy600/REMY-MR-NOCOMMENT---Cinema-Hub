import { motion } from 'motion/react';
import { Play, Plus, Check, Star, Eye } from 'lucide-react';
import { Movie } from '../types';
import { cn } from '../lib/utils';

interface MovieCardProps {
  movie: Movie;
  isWatchlisted: boolean;
  onToggleWatchlist: () => void;
}

export default function MovieCard({ movie, isWatchlisted, onToggleWatchlist }: MovieCardProps) {
  return (
    <div className="group relative bg-secondary-light rounded-2xl overflow-hidden border border-white/5 hover:border-primary/50 transition-all duration-500">
      <div className="aspect-[2/3] relative overflow-hidden">
        <img 
          src={movie.poster} 
          alt={movie.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 brightness-[0.8] group-hover:brightness-100"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Badges */}
        <div className="absolute top-4 left-4 flex flex-col gap-2">
          {movie.isYawed && (
            <span className="bg-accent text-white text-[10px] font-black uppercase px-2 py-1 rounded italic tracking-widest flex items-center gap-1">
              <DollarSign size={10} /> YAWED
            </span>
          )}
          <span className="bg-black/60 backdrop-blur-md text-white text-[10px] font-black uppercase px-2 py-1 rounded italic tracking-widest">
            {movie.year}
          </span>
        </div>

        <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md px-2 py-1 rounded flex items-center gap-1 border border-white/10">
          <Star size={10} className="text-gold fill-gold" />
          <span className="text-[10px] font-bold">{movie.rating}</span>
        </div>
      </div>

      <div className="p-5 relative">
        <div className="flex items-center justify-between mb-2">
           <span className="text-[10px] font-black text-primary uppercase tracking-widest italic">{movie.category}</span>
           <div className="flex items-center gap-2 text-white/40 text-[10px] font-bold">
             <Eye size={10} />
             {movie.views}
           </div>
        </div>
        <h3 className="text-lg font-black uppercase italic tracking-tighter truncate mb-4 group-hover:text-primary transition-colors">
          {movie.title}
        </h3>
        
        <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
          <button className="flex-1 bg-white text-black py-2 rounded-lg font-bold text-xs uppercase flex items-center justify-center gap-2 hover:bg-primary hover:text-white transition-colors">
            <Play size={14} fill="currentColor" />
            Reba
          </button>
          <button 
            onClick={onToggleWatchlist}
            className={cn(
              "p-2 rounded-lg border border-white/20 transition-all",
              isWatchlisted ? "bg-primary border-primary text-white" : "hover:bg-white/10 text-white/60"
            )}
          >
            {isWatchlisted ? <Check size={16} /> : <Plus size={16} />}
          </button>
        </div>
      </div>
    </div>
  );
}

import { DollarSign } from 'lucide-react';
