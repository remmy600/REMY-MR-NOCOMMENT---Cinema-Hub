export interface Movie {
  id: string;
  title: string;
  category: string;
  poster: string;
  description: string;
  year: string;
  rating: string;
  duration: string;
  views: string;
  isYawed?: boolean;
}

export const MOVIE_CATEGORIES = [
  { id: 'all', label: 'Zose', icon: 'Globe' },
  { id: 'african', label: 'Afurika', icon: 'Africa' },
  { id: 'action', label: 'Action', icon: 'Fist' },
  { id: 'horror', label: 'Horror', icon: 'Ghost' },
  { id: 'indian', label: 'Indian', icon: 'India' },
  { id: 'comedy', label: 'Comedy', icon: 'Laugh' },
  { id: 'sci-fi', label: 'Sci-Fi', icon: 'Rocket' },
  { id: 'yawed', label: 'Yawed', icon: 'DollarSign' }
];

export const INITIAL_MOVIES: Movie[] = [
  {
    id: '1',
    title: 'Shaka Flime',
    category: 'african',
    poster: 'https://images.unsplash.com/photo-1543165365-07232edbc253?q=80&w=2070&auto=format&fit=crop',
    description: 'Iyi ni filime yubuturo bwumwami Shaka Zulu. Ikwerekana imico, intambara, nubuturo bwAbantu bAfurika.',
    year: '2026',
    rating: '9.2',
    duration: '2h 35min',
    views: '1.5M'
  },
  {
    id: '2',
    title: 'DANGER IN THE BUILDING',
    category: 'yawed',
    poster: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=1925&auto=format&fit=crop',
    description: 'Tiger Nsanzi yinjira mu nyubako yuzuye akaga, agomba gukiza abari muri yo.',
    year: '2026',
    rating: '5.0',
    duration: '1h 45min',
    views: '1.2M',
    isYawed: true
  },
  {
    id: '3',
    title: 'Black Panther',
    category: 'african',
    poster: 'https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?q=80&w=2070&auto=format&fit=crop',
    description: "T'Challa yegukana ingoma ya Wakanda, ariko agomba guhangana n'umwanzi ushaka kurimbura igihugu cye.",
    year: '2018',
    rating: '8.3',
    duration: '2h 14min',
    views: '5M'
  },
  {
    id: '4',
    title: 'PREDICTOR ON THE BEAT',
    category: 'yawed',
    poster: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?q=80&w=2070&auto=format&fit=crop',
    description: 'Predictor atera amajwi mu nzu y’amafirigo, Killer DJ ari kumwe na we.',
    year: '2026',
    rating: '4.9',
    duration: '1h 30min',
    views: '890K',
    isYawed: true
  },
  {
    id: '5',
    title: 'The Dark Knight',
    category: 'action',
    poster: 'https://images.unsplash.com/photo-1478720568477-152d9b164e26?q=80&w=2070&auto=format&fit=crop',
    description: 'Batman ahangana na Joker, umwanzi ushaka guteza imbere umwanya no kwangiza Gotham City.',
    year: '2008',
    rating: '9.0',
    duration: '2h 32min',
    views: '10M'
  }
];
