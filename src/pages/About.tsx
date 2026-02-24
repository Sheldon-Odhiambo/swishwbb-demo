import { useState } from 'react';
import { motion } from 'motion/react';

const STAFF = [
  {
    id: 1,
    name: 'Sarah Jenkins',
    role: 'Founder',
    image: 'https://picsum.photos/seed/founder/800/1200?grayscale',
    color: 'bg-cherry',
    textColor: 'text-white'
  },
  {
    id: 2,
    name: 'Marcus Thorne',
    role: 'Head Coach',
    image: 'https://picsum.photos/seed/coach1/800/1200?grayscale',
    color: 'bg-[var(--color-swish-blue)]',
    textColor: 'text-white'
  },
  {
    id: 3,
    name: 'Elena Rostova',
    role: 'Assistant Coach',
    image: 'https://picsum.photos/seed/coach2/800/1200?grayscale',
    color: 'bg-white',
    textColor: 'text-noir'
  },
  {
    id: 4,
    name: 'David Vance',
    role: 'Team Manager',
    image: 'https://picsum.photos/seed/manager/800/1200?grayscale',
    color: 'bg-cherry',
    textColor: 'text-white'
  },
  {
    id: 5,
    name: 'Michael Chen',
    role: 'Skill Coach',
    image: 'https://picsum.photos/seed/skill/800/1200?grayscale',
    color: 'bg-[var(--color-swish-blue)]',
    textColor: 'text-white'
  }
];

export default function About() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="w-full">
      {/* Header */}
      <section className="relative py-24 bg-jersey-black border-b border-white/10 overflow-hidden">
        <div className="absolute inset-0 opacity-30 mix-blend-overlay">
          <div className="absolute inset-0 bg-gradient-to-r from-noir to-transparent z-10" />
          <img src="https://picsum.photos/seed/about/1920/600?blur=2" alt="About Background" className="w-full h-full object-cover" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="font-artistic text-6xl md:text-8xl font-black uppercase tracking-tighter mb-4 text-hollow text-white">
              About <span className="text-cherry text-filled">Swish</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl font-medium">
              More than just a basketball team. We are a movement, a community, and a symbol of excellence in women's sports.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-noir">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-display text-4xl font-bold uppercase tracking-tight mb-6 border-l-4 border-cherry pl-4">Our Mission</h2>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                To empower women through the sport of basketball, fostering a culture of resilience, teamwork, and relentless pursuit of greatness both on and off the court. We strive to inspire the next generation of female athletes to dream big and play hard.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-display text-4xl font-bold uppercase tracking-tight mb-6 border-l-4 border-cherry pl-4">Our Vision</h2>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                To be the premier women's basketball franchise globally, recognized not only for our championships but for our unwavering commitment to community development, equality in sports, and setting the standard for professional athletics.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Behind Swish */}
      <section className="py-20 bg-[#0f0f0f] border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-artistic text-5xl font-black uppercase tracking-tight mb-4 text-hollow text-white">
              The Team <span className="text-cherry text-filled">Behind</span> Swish
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">Meet the dedicated professionals who guide our athletes and manage the franchise.</p>
          </div>

          <div className="flex h-[600px] w-full gap-2 overflow-hidden mb-16">
            {STAFF.map((member, idx) => (
              <div
                key={member.id}
                className={`relative h-full transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] cursor-pointer overflow-hidden rounded-sm ${
                  hoveredIndex === idx ? 'flex-[4]' : 'flex-1'
                }`}
                onMouseEnter={() => setHoveredIndex(idx)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ${
                    hoveredIndex === idx ? 'grayscale-0 scale-105' : 'grayscale scale-100'
                  }`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-noir/90 via-noir/20 to-transparent" />
                
                {/* Vertical Label Container */}
                <div className={`absolute bottom-0 right-4 ${member.color} ${member.textColor} px-3 py-6 min-h-[50%] flex items-end justify-center rounded-t-sm shadow-2xl transition-transform duration-500 ${
                  hoveredIndex === idx ? 'translate-y-0' : 'translate-y-4'
                }`}>
                  <div className="[writing-mode:vertical-rl] rotate-180 flex items-center gap-4">
                    <span className="font-display font-black text-2xl md:text-3xl uppercase tracking-wider whitespace-nowrap drop-shadow-md">
                      {member.name}
                    </span>
                    <span className="font-sans font-bold text-xs md:text-sm uppercase tracking-widest opacity-90 whitespace-nowrap">
                      {member.role}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
