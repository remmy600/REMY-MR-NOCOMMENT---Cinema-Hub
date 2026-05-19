import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Star, Play, Clock, User, Calendar, MessageCircle, ChevronRight, Send } from 'lucide-react';
import { Movie, Review } from '../types';
import { cn } from '../lib/utils';

interface MovieDetailsModalProps {
  movie: Movie;
  allMovies: Movie[];
  isOpen: boolean;
  onClose: () => void;
  onSelectMovie: (movie: Movie) => void;
}

export default function MovieDetailsModal({ movie, allMovies, isOpen, onClose, onSelectMovie }: MovieDetailsModalProps) {
  const [showTrailer, setShowTrailer] = useState(false);
  const [userRating, setUserRating] = useState(0);
  const [userComment, setUserComment] = useState('');
  const [reviews, setReviews] = useState<Review[]>(movie.reviews || []);

  const relatedMovies = allMovies
    .filter(m => m.id !== movie.id && m.category === movie.category)
    .slice(0, 4);

  const handleSubmitReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (userRating === 0 || !userComment.trim()) return;

    const newReview: Review = {
      id: Date.now().toString(),
      user: 'Anonymous Tiger',
      rating: userRating,
      comment: userComment,
      date: new Date().toISOString().split('T')[0]
    };

    setReviews([newReview, ...reviews]);
    setUserRating(0);
    setUserComment('');
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/90 backdrop-blur-md z-[300]"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 40 }}
            className="fixed inset-4 md:inset-10 lg:inset-20 m-auto bg-secondary-light rounded-[40px] z-[301] overflow-hidden shadow-2xl flex flex-col md:flex-row border border-white/5"
          >
            {/* Close Button */}
            <button 
              onClick={onClose}
              className="absolute top-6 right-6 z-[302] p-3 bg-black/60 backdrop-blur-xl rounded-full text-white/70 hover:text-white transition-colors border border-white/10"
            >
              <X size={24} />
            </button>

            {/* Content Left: Poster / Trailer */}
            <div className="w-full md:w-2/5 relative h-64 md:h-full bg-black group">
              <AnimatePresence mode="wait">
                {showTrailer && movie.trailerUrl ? (
                  <motion.div 
                    key="trailer"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="w-full h-full"
                  >
                    <iframe 
                      src={movie.trailerUrl + '?autoplay=1'}
                      className="w-full h-full"
                      frameBorder="0"
                      allow="autoplay; encrypted-media"
                      allowFullScreen
                    ></iframe>
                  </motion.div>
                ) : (
                  <motion.div 
                    key="poster"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="w-full h-full relative"
                  >
                    <img src={movie.poster} className="w-full h-full object-cover brightness-[0.6]" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <button 
                        onClick={() => setShowTrailer(true)}
                        className="w-24 h-24 bg-primary text-white rounded-full flex items-center justify-center shadow-netflix transform transition-transform hover:scale-110"
                      >
                        <Play size={40} fill="currentColor" />
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Content Right: Details */}
            <div className="flex-1 overflow-y-auto p-8 md:p-14 custom-scrollbar">
              <div className="mb-12">
                <div className="flex items-center gap-4 mb-6">
                  <span className="mono-label !text-primary">{movie.category}</span>
                  <div className="flex items-center gap-2 px-3 py-1 bg-white/5 rounded-full">
                    <Star size={14} className="text-primary fill-primary" />
                    <span className="text-xs font-black italic">{movie.rating}</span>
                  </div>
                </div>
                
                <h2 className="text-5xl md:text-7xl font-black uppercase italic tracking-tighter mb-8 leading-none">
                  {movie.title}
                </h2>

                <div className="flex flex-wrap gap-10 mb-12">
                  <div className="flex flex-col gap-2">
                    <span className="mono-label">Director</span>
                    <span className="text-lg font-bold">{movie.director || 'N/A'}</span>
                  </div>
                  <div className="flex flex-col gap-2">
                    <span className="mono-label">Duration</span>
                    <span className="text-lg font-bold flex items-center gap-2">
                      <Clock size={16} className="text-primary" />
                      {movie.duration}
                    </span>
                  </div>
                  <div className="flex flex-col gap-2">
                    <span className="mono-label">Year</span>
                    <span className="text-lg font-bold flex items-center gap-2">
                      <Calendar size={16} className="text-primary" />
                      {movie.year}
                    </span>
                  </div>
                </div>

                <div className="mb-12">
                  <span className="mono-label mb-4 block">Synopsis</span>
                  <p className="text-xl text-white/60 leading-relaxed max-w-2xl font-medium italic">
                    {movie.description}
                  </p>
                </div>

                <div className="mb-12">
                  <span className="mono-label mb-6 block">Cast & Crew</span>
                  <div className="flex flex-wrap gap-4">
                    {movie.cast?.map((actor, i) => (
                      <div key={i} className="flex items-center gap-3 px-5 py-3 bg-white/5 rounded-2xl border border-white/5 group hover:border-primary/30 transition-colors">
                        <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                          <User size={16} />
                        </div>
                        <span className="font-bold text-sm tracking-tight">{actor}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Related Movies */}
              <div className="mb-20">
                <div className="flex items-center justify-between mb-8">
                  <span className="mono-label">Similar to this</span>
                  <div className="h-px flex-1 mx-8 bg-white/5" />
                </div>
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                  {relatedMovies.map(m => (
                    <button 
                      key={m.id}
                      onClick={() => onSelectMovie(m)}
                      className="group text-left"
                    >
                      <div className="aspect-[3/4] rounded-2xl overflow-hidden mb-4 border border-white/5 group-hover:border-primary/50 transition-all">
                        <img src={m.poster} className="w-full h-full object-cover transition-transform group-hover:scale-105" />
                      </div>
                      <h4 className="font-black uppercase italic tracking-tighter text-sm truncate group-hover:text-primary transition-colors">{m.title}</h4>
                      <div className="flex items-center gap-2 mt-1">
                        <Star size={10} className="text-primary fill-primary" />
                        <span className="text-[10px] font-bold text-white/40">{m.rating}</span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Reviews Section */}
              <div className="mb-12">
                <div className="flex items-center justify-between mb-10">
                   <h3 className="text-3xl font-black italic uppercase tracking-tighter">Reviews</h3>
                   <div className="flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-xl">
                      <MessageCircle size={16} className="text-primary" />
                      <span className="text-sm font-bold">{reviews.length} Comments</span>
                   </div>
                </div>

                {/* Review Form */}
                <form onSubmit={handleSubmitReview} className="bg-white/5 p-8 rounded-[32px] border border-white/5 mb-10 space-y-6">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="mono-label">Your Rating</span>
                    <div className="flex gap-2">
                       {[1, 2, 3, 4, 5].map(star => (
                         <button 
                           key={star}
                           type="button"
                           onClick={() => setUserRating(star)}
                           className="transition-transform hover:scale-110"
                         >
                           <Star 
                            size={24} 
                            className={cn(
                              "transition-colors",
                              (userRating >= star) ? "text-primary fill-primary" : "text-white/10"
                            )} 
                           />
                         </button>
                       ))}
                    </div>
                  </div>
                  <div className="relative">
                    <textarea 
                      value={userComment}
                      onChange={(e) => setUserComment(e.target.value)}
                      className="w-full bg-black/40 border border-white/5 rounded-2xl p-6 focus:outline-none focus:border-primary transition-all text-sm resize-none"
                      placeholder="Share your thoughts on this movie..."
                      rows={3}
                    />
                    <button 
                      type="submit"
                      className="absolute bottom-4 right-4 p-4 bg-primary text-white rounded-xl hover:bg-primary-dark transition-all"
                    >
                      <Send size={20} />
                    </button>
                  </div>
                </form>

                {/* Review List */}
                <div className="space-y-6">
                  {reviews.map(review => (
                    <div key={review.id} className="p-8 bg-white/5 rounded-3xl border border-white/5 flex gap-6">
                      <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center shrink-0">
                        <User size={24} className="text-white/20" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <span className="font-black italic uppercase tracking-tighter">{review.user}</span>
                          <span className="text-[10px] font-bold text-white/20 uppercase tracking-widest">{review.date}</span>
                        </div>
                        <div className="flex gap-1 mb-4">
                          {Array.from({ length: 5 }).map((_, i) => (
                            <Star 
                              key={i} 
                              size={10} 
                              className={cn(i < review.rating ? "text-primary fill-primary" : "text-white/10")} 
                            />
                          ))}
                        </div>
                        <p className="text-sm text-white/50 leading-relaxed italic">"{review.comment}"</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
