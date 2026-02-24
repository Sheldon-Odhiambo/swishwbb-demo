import { useState } from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { GAMES } from '../data/mockData';
import { Calendar, MapPin, Clock, ArrowRight } from 'lucide-react';

export default function Schedule() {
  const [filter, setFilter] = useState<'all' | 'upcoming' | 'completed'>('all');

  const filteredGames = GAMES.filter(game => {
    if (filter === 'all') return true;
    return game.status === filter;
  });

  return (
    <div className="w-full bg-noir min-h-screen">
      {/* Header */}
      <section className="relative py-20 bg-jersey-black border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="font-artistic text-6xl md:text-8xl font-black uppercase tracking-tighter mb-4 text-hollow text-white">
              Schedule & <span className="text-cherry text-filled">Results</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl font-medium">
              Follow the Swish Women Basketball team throughout the 2026 season.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Tabs */}
      <div className="border-b border-white/10 bg-noir sticky top-20 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex space-x-8">
            <button
              onClick={() => setFilter('all')}
              className={`py-4 font-bold uppercase tracking-wider text-sm border-b-2 transition-colors ${
                filter === 'all' ? 'border-cherry text-white' : 'border-transparent text-gray-500 hover:text-gray-300'
              }`}
            >
              All Games
            </button>
            <button
              onClick={() => setFilter('upcoming')}
              className={`py-4 font-bold uppercase tracking-wider text-sm border-b-2 transition-colors ${
                filter === 'upcoming' ? 'border-cherry text-white' : 'border-transparent text-gray-500 hover:text-gray-300'
              }`}
            >
              Upcoming
            </button>
            <button
              onClick={() => setFilter('completed')}
              className={`py-4 font-bold uppercase tracking-wider text-sm border-b-2 transition-colors ${
                filter === 'completed' ? 'border-cherry text-white' : 'border-transparent text-gray-500 hover:text-gray-300'
              }`}
            >
              Results
            </button>
          </div>
        </div>
      </div>

      {/* Games List */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-6">
            {filteredGames.map((game, idx) => (
              <motion.div
                key={game.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="bg-[#0f0f0f] border border-white/10 rounded-sm overflow-hidden group hover:border-cherry/50 transition-colors"
              >
                <div className="flex flex-col md:flex-row">
                  {/* Date & Time Block */}
                  <div className="bg-noir border-r border-white/10 p-6 md:w-48 flex flex-col justify-center items-center text-center shrink-0">
                    <p className="text-cherry font-bold text-sm uppercase tracking-widest mb-2">{game.date.split(',')[0]}</p>
                    <p className="font-display text-4xl font-bold text-white mb-2">{game.date.split(' ')[1].replace(',', '')}</p>
                    <div className="flex items-center text-gray-500 text-sm font-bold uppercase tracking-wider">
                      <Clock className="w-4 h-4 mr-1" /> {game.time}
                    </div>
                  </div>

                  {/* Game Info */}
                  <div className="p-6 md:p-8 flex-grow flex flex-col justify-center">
                    <div className="flex items-center text-gray-500 text-sm font-bold uppercase tracking-wider mb-4">
                      <MapPin className="w-4 h-4 mr-2" /> {game.venue}
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-gray-400 text-sm font-bold uppercase tracking-widest mb-1">vs</p>
                        <h3 className="font-display text-3xl md:text-4xl font-bold uppercase leading-none">
                          {game.opponent}
                        </h3>
                      </div>
                      
                      {/* Score or Status */}
                      {game.status === 'completed' ? (
                        <div className="text-right ml-4">
                          <p className={`font-display text-4xl font-bold ${game.result === 'W' ? 'text-green-500' : 'text-red-500'}`}>
                            {game.score}
                          </p>
                          <p className="text-gray-500 text-sm font-bold uppercase tracking-widest mt-1">Final</p>
                        </div>
                      ) : (
                        <div className="hidden md:block text-right ml-4">
                          <Link
                            to={`/tickets/${game.id}`}
                            className="bg-cherry hover:bg-red-700 text-white px-6 py-3 rounded-sm font-bold uppercase tracking-wider text-sm transition-colors flex items-center gap-2"
                          >
                            Tickets <ArrowRight className="w-4 h-4" />
                          </Link>
                        </div>
                      )}
                    </div>

                    {/* Summary for completed games */}
                    {game.status === 'completed' && game.summary && (
                      <p className="mt-4 text-gray-400 text-sm border-t border-white/10 pt-4">
                        {game.summary}
                      </p>
                    )}

                    {/* Mobile Ticket Button */}
                    {game.status === 'upcoming' && (
                      <div className="mt-6 md:hidden">
                        <Link
                          to={`/tickets/${game.id}`}
                          className="w-full bg-cherry hover:bg-red-700 text-white px-6 py-3 rounded-sm font-bold uppercase tracking-wider text-sm transition-colors flex items-center justify-center gap-2"
                        >
                          Tickets <ArrowRight className="w-4 h-4" />
                        </Link>
                      </div>
                    )}
                  </div>

                  {/* Venue Image Preview */}
                  <div className="hidden lg:block w-64 shrink-0 relative overflow-hidden border-l border-white/10">
                    <img src={game.image} alt={game.venue} className="w-full h-full object-cover opacity-50 group-hover:opacity-80 group-hover:scale-105 transition-all duration-500" />
                    <div className="absolute inset-0 bg-gradient-to-r from-[#0f0f0f] to-transparent" />
                  </div>
                </div>
              </motion.div>
            ))}

            {filteredGames.length === 0 && (
              <div className="text-center py-20 bg-[#0f0f0f] border border-white/10 rounded-sm">
                <Calendar className="w-12 h-12 text-gray-600 mx-auto mb-4" />
                <h3 className="font-display text-2xl font-bold uppercase text-gray-400">No games found</h3>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
