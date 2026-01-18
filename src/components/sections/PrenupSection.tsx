import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';


const prenupImages = [
  "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1522673607200-1645062cd958?q=80&w=2660&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1520854221256-17451cc330e7?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1532712938310-34cb3982ef74?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1606800052052-a08af7148866?q=80&w=2070&auto=format&fit=crop",
];

export const PrenupSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Optional: Parallax effect on scroll for the whole section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);

  return (
    <section ref={containerRef} className="py-20 md:py-32 overflow-hidden bg-stone-50">
       <div className="text-center mb-12 md:mb-16 px-6">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-3xl md:text-5xl font-serif text-stone-900"
          >
            Prenuptial Moments
          </motion.h2>
       </div>

      <motion.div style={{ y }} className="relative w-full">
        {/* Helper to create the infinite loop seamlessly */}
        <div className="flex gap-4 md:gap-8 w-max">
           {/* Duplicate the array twice to ensure smooth looping */}
           {[...prenupImages, ...prenupImages, ...prenupImages].map((src, index) => (
             <motion.div
               key={index}
               className="relative w-[280px] md:w-[400px] aspect-[3/4] rounded-sm overflow-hidden flex-shrink-0"
               animate={{ x: ["0%", "-100%"] }}
               transition={{ 
                 repeat: Infinity, 
                 ease: "linear", 
                 duration: 40, // Slow, cinematic speed
                 repeatType: "loop"
               }}
             >
                <img 
                  src={src} 
                  alt={`Prenup ${index}`} 
                  className="w-full h-full object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-700 hover:scale-105"
                />
             </motion.div>
           ))}
        </div>
      </motion.div>
    </section>
  );
};
