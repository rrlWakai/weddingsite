import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowDown, Calendar, MapPin } from 'lucide-react';
import { Button } from '../ui/Button';

export const HeroSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);


  return (
    <section ref={containerRef} className="relative h-[100dvh] w-full flex flex-col lg:flex-row overflow-hidden bg-stone-50">
      
      {/* Visual Layer (Right/Bottom) - Mobile: Background, Desktop: Split Right */}
      <motion.div 
        className="absolute inset-0 lg:static lg:w-1/2 h-full z-0 order-2 lg:order-2"
        style={{ y }}
      >
        <div className="absolute inset-0 bg-black/20 lg:bg-transparent z-10 lg:hidden" /> {/* Mobile Overlay */}
        <img 
          src="https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2070&auto=format&fit=crop" 
          alt="Couple holding hands in a forest" 
          className="w-full h-full object-cover lg:object-[center_right]"
        />
        {/* Animated Particles/Rays Effect (Simulated with Gradient) */}
        <div className="absolute inset-0 bg-gradient-to-t from-stone-50/50 to-transparent lg:hidden" />
        <div className="hidden lg:block absolute inset-0 bg-gradient-to-r from-stone-50 via-transparent to-transparent" />
      </motion.div>

      {/* Content Layer (Left/Top) */}
      <div className="relative z-20 flex-1 flex flex-col justify-center px-6 lg:px-20 py-20 lg:py-0 text-center lg:text-left h-full lg:w-1/2 order-1 lg:order-1 mt-auto lg:mt-0 bg-gradient-to-t from-stone-50 via-stone-50/90 to-transparent lg:bg-none">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
           className="space-y-6 lg:space-y-8"
        >
          <span className="inline-block text-stone-500 font-sans uppercase tracking-[0.3em] text-sm lg:text-base">
            The Wedding Of
          </span>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-stone-900 leading-[0.9] tracking-tight">
            Alicia <br className="hidden lg:block"/>
            <span className="text-3xl md:text-5xl lg:text-6xl italic font-light text-stone-400 align-top mx-2 lg:mx-0">&</span>
            <br className="hidden lg:block"/> 
            Ethan
          </h1>

          <div className="flex flex-col lg:flex-row items-center lg:items-start gap-4 text-stone-600 font-sans tracking-wide pt-4">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>September 24, 2026</span>
            </div>
            <div className="hidden lg:block w-[1px] h-4 bg-stone-300"></div>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              <span>Sonoma, California</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center lg:items-start gap-4 pt-8 w-full max-w-xs mx-auto lg:mx-0">
             <Button className="w-full sm:w-auto" onClick={() => document.getElementById('details')?.scrollIntoView({ behavior: 'smooth'})}>
                View Details
             </Button>
             <Button variant="outline" className="w-full sm:w-auto" onClick={() => document.getElementById('rsvp')?.scrollIntoView({ behavior: 'smooth'})}>
                RSVP
             </Button>
          </div>
        </motion.div>
      </div>

      {/* Scroll Hint */}
      <motion.div 
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 text-stone-400 lg:text-stone-800"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ delay: 2, duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <ArrowDown size={24} strokeWidth={1.5} />
      </motion.div>
    </section>
  );
};
