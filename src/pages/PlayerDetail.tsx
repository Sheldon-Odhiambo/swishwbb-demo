import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { PLAYERS } from '../data/mockData';
import { ArrowLeft, ChevronRight } from 'lucide-react';

export default function PlayerDetail() {
  const { id } = useParams();
  const player = PLAYERS.find(p => p.id === id);

  if (!player) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Player not found</h2>
          <Link to="/players" className="text-cherry hover:underline">Return to Roster</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full bg-noir">
      {/* Breadcrumb */}
      <div className="border-b border-white/10 bg-jersey-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center text-sm font-bold uppercase tracking-wider text-gray-500 relative z-10">
          <Link to="/players" className="hover:text-white transition-colors flex items-center">
            <ArrowLeft className="w-4 h-4 mr-2" /> Roster
          </Link>
          <ChevronRight className="w-4 h-4 mx-2" />
          <span className="text-white">{player.name}</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Player Image */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:col-span-5 relative"
          >
            <div className="aspect-[3/4] rounded-sm overflow-hidden border border-white/10 relative">
              <img src={player.image} alt={player.name} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-noir/80 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 p-8">
                <span className="font-display text-8xl font-black text-white/20 leading-none">
                  {player.number}
                </span>
              </div>
            </div>
          </motion.div>

          {/* Player Info */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:col-span-7 flex flex-col justify-center"
          >
            <div className="mb-8 border-b border-white/10 pb-8">
              <p className="text-cherry font-bold text-lg uppercase tracking-widest mb-2">{player.position}</p>
              <h1 className="font-display text-6xl md:text-8xl font-bold uppercase tracking-tighter leading-none mb-6">
                {player.name}
              </h1>
              <p className="text-gray-300 text-lg leading-relaxed max-w-2xl">
                {player.bio}
              </p>
            </div>

            {/* Stats */}
            <div className="mb-10">
              <h3 className="font-display text-2xl font-bold uppercase tracking-tight mb-6">Season Stats</h3>
              <div className="grid grid-cols-3 gap-4">
                <div className="bg-[#0f0f0f] border border-white/10 p-6 rounded-sm text-center">
                  <p className="text-gray-500 text-xs font-bold uppercase tracking-widest mb-2">Points Per Game</p>
                  <p className="font-display text-4xl font-bold text-white">{player.stats.ppg}</p>
                </div>
                <div className="bg-[#0f0f0f] border border-white/10 p-6 rounded-sm text-center">
                  <p className="text-gray-500 text-xs font-bold uppercase tracking-widest mb-2">Assists Per Game</p>
                  <p className="font-display text-4xl font-bold text-white">{player.stats.apg}</p>
                </div>
                <div className="bg-[#0f0f0f] border border-white/10 p-6 rounded-sm text-center">
                  <p className="text-gray-500 text-xs font-bold uppercase tracking-widest mb-2">Rebounds Per Game</p>
                  <p className="font-display text-4xl font-bold text-white">{player.stats.rpg}</p>
                </div>
              </div>
            </div>

            {/* Highlights */}
            <div>
              <h3 className="font-display text-2xl font-bold uppercase tracking-tight mb-4">Career Highlights</h3>
              <ul className="space-y-3">
                {player.highlights.map((highlight, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className="text-cherry mr-3 mt-1">★</span>
                    <span className="text-gray-300">{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>

          </motion.div>
        </div>
      </div>
    </div>
  );
}
