import React, { type ReactNode } from 'react';
import { cn } from '../../lib/utils';
import { motion, type HTMLMotionProps } from 'framer-motion';

interface SectionContainerProps extends HTMLMotionProps<"section"> {
  children: ReactNode;
  className?: string;
  id?: string;
}

export const SectionContainer = React.forwardRef<HTMLElement, SectionContainerProps>(
  ({ children, className, id, ...props }, ref) => {
    return (
      <motion.section
        ref={ref}
        id={id}
        className={cn(
          "relative w-full max-w-[1200px] mx-auto px-6 py-20 md:py-28 lg:py-32 scroll-mt-20",
          className
        )}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-10%" }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        {...props}
      >
        {children}
      </motion.section>
    );
  }
);

SectionContainer.displayName = "SectionContainer";
