import { useState } from 'react';
import { motion } from 'motion/react';
import { Send, Bell, CheckCircle2 } from 'lucide-react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setIsSubscribed(true);
    setEmail('');
  };

  return (
    <section className="max-w-7xl mx-auto px-4 py-20 pb-40">
      <div className="relative glass rounded-[48px] p-12 md:p-24 overflow-hidden border border-white/5">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 blur-[120px] rounded-full translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/10 blur-[100px] rounded-full -translate-x-1/2 translate-y-1/2" />
        
        <div className="relative z-10 flex flex-col items-center text-center max-w-3xl mx-auto">
          <div className="w-16 h-16 bg-primary/10 rounded-3xl flex items-center justify-center mb-8 border border-primary/20">
            <Bell size={32} className="text-primary animate-bounce" />
          </div>
          
          <h2 className="text-5xl md:text-7xl font-black uppercase italic tracking-tighter mb-8 leading-none">
            Stay in the building <br />
            <span className="text-primary">Join the family</span>
          </h2>
          
          <p className="text-xl text-white/50 font-medium italic mb-12 max-w-xl">
            Turaheruka amakuru mashya, films nshya, hamwe n'itangazwa rya Yawed mixes mbere y'abandi bose. Stay alert!
          </p>

          {!isSubscribed ? (
            <form onSubmit={handleSubmit} className="w-full flex flex-col sm:flex-row gap-4">
              <input 
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Injiza email yawe..."
                className="flex-1 bg-black/40 border border-white/5 rounded-2xl px-8 py-5 text-lg focus:outline-none focus:border-primary transition-all font-bold italic"
                required
              />
              <button 
                type="submit"
                className="btn-netflix !py-5 flex items-center justify-center gap-4 group shrink-0"
              >
                Join Now 
                <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
          ) : (
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="flex items-center gap-4 bg-green-500/10 text-green-500 px-12 py-6 rounded-[32px] border border-green-500/20"
            >
              <CheckCircle2 size={32} />
              <span className="text-xl font-black uppercase italic tracking-tighter">Murakoze Kwiyandikisha!</span>
            </motion.div>
          )}
          
          <div className="mt-12 flex items-center gap-8 text-white/20">
            <div className="flex flex-col items-center">
              <span className="text-2xl font-black text-white/40 italic">25k+</span>
              <span className="mono-label !text-[8px]">Members</span>
            </div>
            <div className="w-px h-8 bg-white/10" />
            <div className="flex flex-col items-center">
              <span className="text-2xl font-black text-white/40 italic">Daily</span>
              <span className="mono-label !text-[8px]">Updates</span>
            </div>
            <div className="w-px h-8 bg-white/10" />
            <div className="flex flex-col items-center">
              <span className="text-2xl font-black text-white/40 italic">Exclusive</span>
              <span className="mono-label !text-[8px]">Content</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
