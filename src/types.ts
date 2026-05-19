export interface Review {
  id: string;
  user: string;
  rating: number;
  comment: string;
  date: string;
}

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
  director?: string;
  cast?: string[];
  trailerUrl?: string;
  reviews?: Review[];
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
    poster: '/src/assets/images/shaka_flime_poster_1779178669774.png',
    description: 'Iyi ni filime yubuturo bwumwami Shaka Zulu. Ikwerekana imico, intambara, nubuturo bwAbantu bAfurika. Urugamba rurakaze cyane mu migenzo ya gicuti n\'iy\'intambara.',
    year: '2026',
    rating: '9.2',
    duration: '2h 35min',
    views: '1.5M',
    director: 'Tiger Nsanzi',
    cast: ['Remmy Nsanzimana', 'Predictor Beat', 'Killer DJ'],
    trailerUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    reviews: [
      { id: 'r1', user: 'Fabian', rating: 5, comment: 'Iyi film ni hatari! Danger in the building!', date: '2026-05-01' }
    ]
  },
  {
    id: '2',
    title: 'DANGER IN THE BUILDING',
    category: 'yawed',
    poster: '/src/assets/images/danger_building_poster_1779178277633.png',
    description: 'Tiger Nsanzi yinjira mu nyubako yuzuye akaga, agomba gukiza abari muri yo. Ni filime yuzuye akaga n\'ubwoba ariko iherekejwe n\'amajwi meza ya Predictor.',
    year: '2026',
    rating: '5.0',
    duration: '1h 45min',
    views: '1.2M',
    isYawed: true,
    director: 'Remmy Nsanzimana',
    cast: ['Tiger Nsanzi', 'Killer DJ'],
    trailerUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    reviews: []
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
    views: '5M',
    director: 'Ryan Coogler',
    cast: ['Chadwick Boseman', 'Michael B. Jordan', 'Lupita Nyongo'],
    trailerUrl: 'https://www.youtube.com/embed/xjDjIuHioOo',
    reviews: []
  },
  {
    id: '4',
    title: 'PREDICTOR ON THE BEAT',
    category: 'yawed',
    poster: '/src/assets/images/predictor_beat_poster_1779178294613.png',
    description: 'Predictor atera amajwi mu nzu y’amafirigo, Killer DJ ari kumwe na we kuva mu gitondo kugeza nimunsi.',
    year: '2026',
    rating: '4.9',
    duration: '1h 30min',
    views: '890K',
    isYawed: true,
    director: 'Predictor Beat',
    cast: ['Predictor', 'Killer DJ', 'Tiger Nsanzi'],
    trailerUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    reviews: []
  },
  {
    id: '5',
    title: 'Inception',
    category: 'sci-fi',
    poster: '/src/assets/images/inception_poster_ai_1779178702718.png',
    description: 'Umujura w’inzozi ahabwa inshingano yo gushyira igitekerezo mu mutwe w’umucuruzi unyuze mu nzozi zigeretse.',
    year: '2010',
    rating: '8.8',
    duration: '2h 28min',
    views: '8M',
    director: 'Christopher Nolan',
    cast: ['Leonardo DiCaprio', 'Joseph Gordon-Levitt', 'Elliot Page'],
    trailerUrl: 'https://www.youtube.com/embed/8hP9D6kZseM',
    reviews: []
  },
  {
    id: '6',
    title: 'Dangal',
    category: 'indian',
    poster: '/src/assets/images/dangal_poster_ai_1779178722299.png',
    description: 'Umwana w’umukinnyi wa mukirikiti yigisha abakobwa be uburyo bwo kurwana kugira ngo bageze ku nzozi ze.',
    year: '2016',
    rating: '8.4',
    duration: '2h 41min',
    views: '12M',
    director: 'Nitesh Tiwari',
    cast: ['Aamir Khan', 'Sakshi Tanwar'],
    trailerUrl: 'https://www.youtube.com/embed/x_7YlGv9u1g',
    reviews: []
  },
  {
    id: '7',
    title: 'The Conjuring',
    category: 'horror',
    poster: '/src/assets/images/conjuring_poster_ai_1779178741270.png',
    description: 'Abashakashatsi b’iby’umwuka bafasha umuryango utotezwa n’umwuka mubi mu nzu nshya bimukiyemo.',
    year: '2013',
    rating: '7.5',
    duration: '1h 52min',
    views: '3.5M',
    director: 'James Wan',
    cast: ['Vera Farmiga', 'Patrick Wilson'],
    trailerUrl: 'https://www.youtube.com/embed/k10ETZ41q5o',
    reviews: []
  },
  {
    id: '8',
    title: 'KILLER DJ MIX',
    category: 'yawed',
    poster: '/src/assets/images/killer_dj_mix_poster_1779178312166.png',
    description: 'Killer DJ atera amajwi mu birori byinshi, atera abantu kubyina mu buryo butangaje buzwi nka Yawed.',
    year: '2026',
    rating: '4.8',
    duration: '2h 10min',
    views: '2.1M',
    isYawed: true,
    director: 'Killer DJ',
    cast: ['Killer DJ', 'Predictor', 'Remmy'],
    trailerUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    reviews: []
  },
  {
    id: '9',
    title: 'The Lion King',
    category: 'african',
    poster: 'https://images.unsplash.com/photo-1546182990-dffeafbe841d?q=80&w=2059&auto=format&fit=crop',
    description: "Inkuru y'akanyamasyo k'intare Simba kagerageza kwisubiza intebe y'ubwami yabambuwe na se-wabo Scar.",
    year: '2019',
    rating: '6.9',
    duration: '1h 58min',
    views: '15M',
    director: 'Jon Favreau',
    cast: ['Donald Glover', 'Beyoncé', 'Seth Rogen'],
    trailerUrl: 'https://www.youtube.com/embed/7TavVZVewpY',
    reviews: []
  },
  {
    id: '10',
    title: 'John Wick',
    category: 'action',
    poster: '/src/assets/images/john_wick_poster_ai_1779178770560.png',
    description: 'Uwaye ari umwicanyi kabuhariwe agaruka mu bikorwa by’urugomo nyuma y’uko abagizi ba nabi bamubujije amahwemo.',
    year: '2014',
    rating: '7.4',
    duration: '1h 41min',
    views: '22M',
    director: 'Chad Stahelski',
    cast: ['Keanu Reeves', 'Michael Nyqvist', 'Alfie Allen'],
    trailerUrl: 'https://www.youtube.com/embed/2AUmvWm5Pqc',
    reviews: []
  },
  {
    id: '11',
    title: 'RRR',
    category: 'indian',
    poster: '/src/assets/images/rrr_poster_ai_1779178789209.png',
    description: 'Inkuru y’ubucuti n’ubwitange hagati y’intwari ebyiri zirwanira ubwigenge bw’Ubuhinde mu gihe cy’abakoloni.',
    year: '2022',
    rating: '7.8',
    duration: '3h 7min',
    views: '18M',
    director: 'S.S. Rajamouli',
    cast: ['N.T. Rama Rao Jr.', 'Ram Charan', 'Ajay Devgn'],
    trailerUrl: 'https://www.youtube.com/embed/NgBoMJy386M',
    reviews: []
  },
  {
    id: '12',
    title: 'A Quiet Place',
    category: 'horror',
    poster: '/src/assets/images/quiet_place_poster_ai_1779178807063.png',
    description: 'Umuryango ugomba kuba mu mimerere y’iceceka kugira ngo utanyagwa n’ibinyabuzima biterwa n’amajwi.',
    year: '2018',
    rating: '7.5',
    duration: '1h 30min',
    views: '6M',
    director: 'John Krasinski',
    cast: ['Emily Blunt', 'John Krasinski', 'Millicent Simmonds'],
    trailerUrl: 'https://www.youtube.com/embed/WR7cc5t7tv8',
    reviews: []
  },
  {
    id: '13',
    title: 'KILLER DJ ATTACK',
    category: 'yawed',
    poster: '/src/assets/images/killer_dj_attack_poster_1779178330805.png',
    description: 'Killer DJ atera umuziki uvura indwara, ariko bitunguranye abantu batangira kubyina barenze urugero. DANGER IN THE BUILDING!',
    year: '2026',
    rating: '5.0',
    duration: '1h 20min',
    views: '2.4M',
    isYawed: true,
    director: 'Tiger Nsanzi',
    cast: ['Killer DJ', 'Predictor'],
    trailerUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    reviews: []
  },
  {
    id: '14',
    title: 'THE BOSS TIGER',
    category: 'action',
    poster: '/src/assets/images/boss_tiger_poster_1779178345840.png',
    description: 'Inkuru ya Tiger Nsanzi mu rugendo rwe rwo kuba umuyobozi w’ikinema mu Rwanda. Ni filime y’amateka n’ubutwari.',
    year: '2026',
    rating: '4.9',
    duration: '2h 05min',
    views: '1.8M',
    isYawed: true,
    director: 'Remmy Nsanzimana',
    cast: ['Tiger Nsanzi'],
    trailerUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    reviews: []
  }
];
