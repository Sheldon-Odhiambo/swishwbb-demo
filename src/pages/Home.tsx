import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { PLAYERS, NEWS, GAMES } from '../data/mockData';
import { ArrowRight, Calendar, Ticket, ShoppingBag, ChevronRight, ChevronLeft } from 'lucide-react';

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const heroImages = PLAYERS.map(p => p.image);
  const nextGame = GAMES.find(g => g.status === 'upcoming');

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [heroImages.length]);

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative h-screen min-h-[600px] w-full overflow-hidden bg-noir">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 0.8, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5 }}
            className="absolute inset-0"
          >
            <img
              src={heroImages[currentSlide]}
              alt="Hero Background"
              className="w-full h-full object-cover object-center fixed"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-noir via-noir/40 to-transparent" />
            <div className="absolute inset-0 bg-black/30" />
          </motion.div>
        </AnimatePresence>

        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 z-10">
          <motion.div
            initial={{ y: 50, opacity: 0, scale: 0.9 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 1, type: "spring", stiffness: 100 }}
            className="max-w-5xl mx-auto"
          >
            <h1 className="font-artistic text-7xl md:text-9xl lg:text-[10rem] font-black uppercase tracking-tighter mb-2 text-hollow text-white drop-shadow-2xl leading-none">
              We Are <br className="md:hidden" /><span className="text-hollow-cherry inline-block transform -skew-x-12">Swish</span>
            </h1>
            <p className="text-xl md:text-3xl text-gray-200 mb-10 font-medium tracking-wide max-w-3xl mx-auto drop-shadow-md">
              Welcome to the official home of the Swish Women Basketball Team. A roster of 18 dedicated players bringing the madness to the court.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link
                to={nextGame ? `/tickets/${nextGame.id}` : '/schedule'}
                className="bg-cherry hover:bg-red-600 text-white px-12 py-6 rounded-sm font-display font-black uppercase tracking-widest text-2xl transition-all flex items-center justify-center gap-3 group hover:scale-110 shadow-[0_0_40px_rgba(210,4,45,0.6)]"
              >
                <Ticket className="w-8 h-8 group-hover:rotate-12 transition-transform" />
                Buy Tickets
              </Link>
              <Link
                to="/merch"
                className="bg-transparent border-2 border-white hover:bg-white hover:text-noir text-white px-10 py-5 rounded-sm font-display font-bold uppercase tracking-widest text-xl transition-all flex items-center justify-center gap-3 group hover:scale-105 backdrop-blur-sm"
              >
                <ShoppingBag className="w-6 h-6 group-hover:-rotate-12 transition-transform" />
                Shop Merch
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Slide Indicators */}
        <div className="absolute bottom-12 left-0 right-0 flex justify-center gap-3 z-10">
          {heroImages.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={`h-2 rounded-full transition-all duration-500 ${
                idx === currentSlide ? 'w-16 bg-cherry shadow-[0_0_10px_rgba(210,4,45,0.8)]' : 'w-8 bg-white/30 hover:bg-white/50'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </section>

      {/* Quick Nav / Next Game Banner */}
      {nextGame && (
        <section className="bg-jersey-red text-white py-6 border-y border-red-800 shadow-[0_4px_20px_rgba(227,24,55,0.3)] relative z-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="bg-noir/30 p-3 rounded-sm backdrop-blur-sm">
                <Calendar className="w-6 h-6" />
              </div>
              <div>
                <p className="text-sm font-bold uppercase tracking-wider text-red-100">Next Game</p>
                <h3 className="font-display text-2xl font-black uppercase tracking-wide">
                  Swish vs {nextGame.opponent}
                </h3>
                <p className="text-sm font-medium">{nextGame.date} • {nextGame.time} • {nextGame.venue}</p>
              </div>
            </div>
            <Link
              to={`/tickets/${nextGame.id}`}
              className="bg-noir hover:bg-gray-900 text-white px-8 py-4 rounded-sm font-black uppercase tracking-wider text-sm transition-all whitespace-nowrap flex items-center gap-2 hover:scale-105 shadow-lg"
            >
              Get Tickets <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>
      )}

      {/* Latest News */}
      <section className="py-20 bg-jersey-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12 border-b border-white/10 pb-4">
            <h2 className="font-artistic text-5xl md:text-6xl font-black uppercase tracking-tight text-hollow text-white">
              Latest <span className="text-cherry text-filled">News</span>
            </h2>
            <Link to="/about" className="text-gray-400 hover:text-cherry text-sm font-bold uppercase tracking-wider flex items-center gap-1 transition-colors">
              View All <ChevronRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {NEWS.map((item, idx) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="bg-noir/80 backdrop-blur-sm border border-white/10 p-8 rounded-sm h-full hover:border-cherry/50 transition-all flex flex-col hover:-translate-y-2 shadow-lg">
                  <p className="text-cherry text-xs font-black uppercase tracking-widest mb-3">{item.date}</p>
                  <h3 className="font-display text-2xl font-bold uppercase leading-tight mb-4 group-hover:text-cherry transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-6 flex-grow leading-relaxed">{item.excerpt}</p>
                  <div className="flex items-center text-sm font-bold uppercase tracking-wider text-white group-hover:text-[var(--color-swish-blue)] transition-colors mt-auto">
                    Read More <ArrowRight className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Players */}
      <section className="py-20 bg-[#0f0f0f]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12 border-b border-white/10 pb-4">
            <h2 className="font-artistic text-5xl md:text-6xl font-black uppercase tracking-tight text-hollow text-white">
              Meet The <span className="text-cherry text-filled">Team</span>
            </h2>
            <Link to="/players" className="text-gray-400 hover:text-cherry text-sm font-bold uppercase tracking-wider flex items-center gap-1 transition-colors">
              Full Team List <ChevronRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {PLAYERS.slice(0, 4).map((player, idx) => (
              <motion.div
                key={player.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="relative group overflow-hidden rounded-sm aspect-[3/4] bg-noir border border-white/10"
              >
                <img
                  src={player.image}
                  alt={player.name}
                  className="w-full h-full object-cover opacity-70 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-noir via-noir/40 to-transparent opacity-80" />
                
                <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform">
                  <div className="flex justify-between items-end">
                    <div>
                      <p className="text-cherry font-bold text-sm uppercase tracking-widest mb-1">{player.position}</p>
                      <h3 className="font-display text-2xl font-bold uppercase leading-none">{player.name}</h3>
                    </div>
                    <span className="font-display text-5xl font-black text-white/20 group-hover:text-white/40 transition-colors">
                      {player.number}
                    </span>
                  </div>
                  <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity delay-100">
                    <Link
                      to={`/players/${player.id}`}
                      className="inline-flex items-center text-xs font-bold uppercase tracking-wider hover:text-cherry transition-colors"
                    >
                      View Profile <ArrowRight className="w-3 h-3 ml-1" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden bg-jersey-red">
        <div className="absolute inset-0 bg-[url('https://picsum.photos/seed/cta/1920/1080?blur=4')] opacity-10 mix-blend-overlay object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-noir/80 to-transparent" />
        <div className="relative max-w-4xl mx-auto px-4 text-center z-10">
          <h2 className="font-artistic text-6xl md:text-8xl font-black uppercase tracking-tighter mb-6 text-hollow text-white drop-shadow-lg">
            Join The <span className="text-noir text-filled">Madness</span>
          </h2>
          <p className="text-xl md:text-2xl text-red-50 mb-10 max-w-2xl mx-auto font-medium drop-shadow-md">
            Be part of the community. Get exclusive updates, early access to tickets, and special merch drops.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-noir hover:bg-gray-900 text-white px-12 py-5 rounded-sm font-display font-black uppercase tracking-widest text-xl transition-all hover:scale-110 shadow-2xl"
          >
            Become a Member
          </Link>
        </div>
      </section>
    </div>
  );
}
