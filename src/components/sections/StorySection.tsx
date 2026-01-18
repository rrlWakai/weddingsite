import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { SectionContainer } from '../ui/SectionContainer';

export const StorySection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);

  return (
    <SectionContainer id="story" className="bg-white">
      <div ref={containerRef} className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center">
        
        {/* Text Content */}
        <div className="space-y-8 order-2 md:order-1">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-serif text-stone-900 mb-6">Our Story</h2>
            <div className="space-y-6 text-stone-600 font-sans leading-relaxed">
              <p>
                It started with a chance meeting in a small coffee shop in downtown Seattle. 
                Rain was pouring outside, but inside, amidst the aroma of roasted beans, a conversation sparked that would last a lifetime.
              </p>
              <p>
                Five years later, after countless adventures, hiking trips, and quiet Sunday mornings, 
                we found ourselves on a cliff overlooking the Pacific Ocean. With the waves crashing below and the sun setting on the horizon, 
                we decided on forever.
              </p>
              <p>
                We are so excited to start this next chapter of our lives surrounded by the people we love most.
              </p>
            </div>
            
            {/* Timeline / Key Dates (Simplified) */}
            <div className="mt-12 pt-8 border-t border-stone-100 grid grid-cols-3 gap-4 text-center">
              <div>
                <span className="block text-2xl font-serif text-stone-800">2021</span>
                <span className="text-xs uppercase tracking-widest text-stone-400">First Met</span>
              </div>
              <div>
                <span className="block text-2xl font-serif text-stone-800">2023</span>
                <span className="text-xs uppercase tracking-widest text-stone-400">First Home</span>
              </div>
              <div>
                <span className="block text-2xl font-serif text-stone-800">2026</span>
                <span className="text-xs uppercase tracking-widest text-stone-400">The Wedding</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Image Content (Parallax) */}
        <div className="order-1 md:order-2 relative aspect-[3/4] md:aspect-auto md:h-[600px] overflow-hidden rounded-sm">
          <motion.div 
            style={{ y }} 
            className="absolute inset-0 -top-[10%] -bottom-[10%]"
          >
            <img 
               src="https://images.unsplash.com/photo-1522673607200-1645062cd958?q=80&w=2660&auto=format&fit=crop" 
               alt="Couple walking in a field" 
               className="w-full h-full object-cover"
            />
          </motion.div>
        </div>

      </div>
    </SectionContainer>
  );
};
