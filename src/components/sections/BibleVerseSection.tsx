import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { SectionContainer } from '../ui/SectionContainer';

export const BibleVerseSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0.2, 0.5, 0.8], [0, 1, 0]);
  const y = useTransform(scrollYProgress, [0.2, 0.5], [30, 0]);

  return (
    <SectionContainer className="py-24 md:py-32 bg-stone-50 flex items-center justify-center text-center">
      <motion.div 
        ref={containerRef}
        style={{ opacity, y }}
        className="max-w-2xl mx-auto px-6"
      >
        <span className="block text-stone-400 text-sm md:text-base tracking-[0.2em] uppercase mb-6 font-sans">
          Ecclesiastes 4:9
        </span>
        <h3 className="text-3xl md:text-4xl lg:text-5xl font-serif text-stone-800 leading-tight md:leading-snug italic">
          "Two are better than one, because they have a good return for their labor: If either of them falls down, one can help the other up."
        </h3>
        <div className="w-12 h-[1px] bg-stone-300 mx-auto mt-8" />
      </motion.div>
    </SectionContainer>
  );
};
