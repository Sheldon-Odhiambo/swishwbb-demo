import { useState } from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { MERCH } from '../data/mockData';
import { ShoppingBag, Filter } from 'lucide-react';

export default function Merch() {
  const [category, setCategory] = useState('All');
  const categories = ['All', ...Array.from(new Set(MERCH.map(item => item.category)))];

  const filteredMerch = category === 'All' ? MERCH : MERCH.filter(item => item.category === category);

  return (
    <div className="w-full bg-noir min-h-screen">
      {/* Header */}
      <section className="relative py-20 bg-jersey-red border-b border-red-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-noir font-black text-sm uppercase tracking-widest mb-2 flex items-center gap-2">
              <ShoppingBag className="w-4 h-4" /> Official Team Store
            </p>
            <h1 className="font-artistic text-6xl md:text-8xl font-black uppercase tracking-tighter mb-4 text-hollow text-white drop-shadow-lg">
              Swish <span className="text-noir text-filled">Madness</span>
            </h1>
            <p className="text-xl text-red-50 max-w-2xl font-medium drop-shadow-md">
              Rep the team wherever you go. Premium apparel and accessories.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Store Content */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Filters */}
          <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-4 border-b border-white/10 pb-6">
            <div className="flex items-center gap-2 text-gray-400 font-bold uppercase tracking-wider text-sm">
              <Filter className="w-4 h-4" /> Categories
            </div>
            <div className="flex flex-wrap gap-2 justify-center">
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setCategory(cat)}
                  className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-colors ${
                    category === cat ? 'bg-cherry text-white' : 'bg-[#0f0f0f] text-gray-400 hover:bg-white/10 hover:text-white'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredMerch.map((item, idx) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="group"
              >
                <Link to={`/merch/${item.id}`} className="block">
                  <div className="bg-[#0f0f0f] border border-white/10 rounded-sm overflow-hidden mb-4 relative aspect-square">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <span className="bg-cherry text-white px-6 py-3 rounded-sm font-bold uppercase tracking-wider text-sm transform translate-y-4 group-hover:translate-y-0 transition-all">
                        View Details
                      </span>
                    </div>
                  </div>
                  <div>
                    <p className="text-gray-500 text-xs font-bold uppercase tracking-widest mb-1">{item.category}</p>
                    <div className="flex justify-between items-start gap-4">
                      <h3 className="font-display text-xl font-bold uppercase leading-tight group-hover:text-cherry transition-colors">
                        {item.name}
                      </h3>
                      <span className="font-display text-xl font-bold text-white shrink-0">
                        ${item.price.toFixed(2)}
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          {filteredMerch.length === 0 && (
            <div className="text-center py-20">
              <p className="text-gray-400 font-bold uppercase tracking-wider">No products found in this category.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
