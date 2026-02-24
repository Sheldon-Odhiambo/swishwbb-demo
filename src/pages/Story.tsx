import { motion } from 'motion/react';

export default function Story() {
  return (
    <div className="w-full bg-noir min-h-screen">
      {/* Hero */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden bg-jersey-red">
        <div className="absolute inset-0 opacity-20 mix-blend-overlay">
          <img src="https://picsum.photos/seed/story/1920/1080?blur=2" alt="Our Story" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-noir via-noir/80 to-transparent" />
        </div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-artistic text-6xl md:text-8xl font-black uppercase tracking-tighter mb-6 text-hollow text-white drop-shadow-lg"
          >
            The <span className="text-noir text-filled">Swish</span> Story
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl text-red-50 font-medium drop-shadow-md"
          >
            From a local dream to a national powerhouse.
          </motion.p>
        </div>
      </section>

      {/* Narrative */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-invert prose-lg max-w-none">
            <p className="text-2xl leading-relaxed text-gray-300 mb-12 font-medium border-l-4 border-cherry pl-6">
              "It started with a simple idea: create a space where women could play basketball at the highest level, without compromise, without apologies."
            </p>

            <div className="space-y-12 text-gray-400">
              <div>
                <h2 className="font-display text-3xl font-bold uppercase text-white mb-4">The Beginning (2015)</h2>
                <p>
                  Swish Women Basketball was founded in 2015 by a group of former collegiate athletes who saw a gap in professional opportunities for women in the region. What began as weekend tournaments in community centers quickly gained traction. The raw talent, the fierce competition, and the undeniable passion drew crowds that outgrew the small gyms.
                </p>
              </div>

              <div className="my-16">
                <img src="https://picsum.photos/seed/story2/1200/600" alt="Early days" className="w-full rounded-sm border border-white/10" />
              </div>

              <div>
                <h2 className="font-display text-3xl font-bold uppercase text-white mb-4">Rising Through the Ranks (2018-2021)</h2>
                <p>
                  By 2018, Swish had officially entered the national league. The early years were tough—facing established franchises with deep pockets. But the Swish identity was forged in these fires. We became known for our relentless defense, fast-paced offense, and a never-say-die attitude. In 2021, we reached our first playoffs, signaling to the league that a new era had arrived.
                </p>
              </div>

              <div>
                <h2 className="font-display text-3xl font-bold uppercase text-white mb-4">Community Impact</h2>
                <p>
                  We believe our impact extends far beyond the hardwood. The Swish Foundation was established in 2020 to provide basketball clinics, mentorship programs, and academic scholarships to young girls in underserved communities. When you support Swish, you're supporting the next generation of female leaders.
                </p>
              </div>

              <div className="bg-[#0f0f0f] border border-white/10 p-8 md:p-12 rounded-sm my-16 text-center">
                <h3 className="font-display text-4xl font-bold uppercase text-cherry mb-4">The Future is Now</h3>
                <p className="text-xl text-white">
                  Today, we play in front of thousands. We compete for championships. But our core remains the same. We play for the love of the game, for each other, and for every young girl watching from the stands.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
