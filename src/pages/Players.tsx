import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { PLAYERS } from '../data/mockData';
import { ArrowRight } from 'lucide-react';

export default function Players() {
  return (
    <div className="w-full">
      {/* Header */}
      <section className="relative py-20 bg-jersey-red border-b border-red-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="font-artistic text-6xl md:text-8xl font-black uppercase tracking-tighter mb-4 text-hollow text-white drop-shadow-lg">
              Meet The <span className="text-noir text-filled">Team</span>
            </h1>
            <p className="text-xl text-red-50 max-w-2xl font-medium drop-shadow-md">
              Meet the athletes bringing the madness to the court this season.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Players Grid */}
      <section className="py-16 bg-noir">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {PLAYERS.map((player, idx) => (
              <motion.div
                key={player.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="group cursor-pointer"
              >
                <Link to={`/players/${player.id}`} className="block">
                  <div className="relative aspect-[3/4] bg-[#0f0f0f] border border-white/10 rounded-sm overflow-hidden mb-4">
                    <img
                      src={player.image}
                      alt={player.name}
                      className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-noir via-transparent to-transparent opacity-90" />
                    
                    <div className="absolute top-4 right-4">
                      <span className="font-display text-5xl font-black text-white/30 group-hover:text-cherry/80 transition-colors">
                        {player.number}
                      </span>
                    </div>

                    <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-2 group-hover:translate-y-0 transition-transform">
                      <p className="text-cherry font-bold text-xs uppercase tracking-widest mb-1">{player.position}</p>
                      <h3 className="font-display text-2xl font-bold uppercase leading-none mb-2">{player.name}</h3>
                      
                      <div className="flex items-center text-xs font-bold uppercase tracking-wider text-white/0 group-hover:text-white transition-colors">
                        View Stats <ArrowRight className="w-3 h-3 ml-1" />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
