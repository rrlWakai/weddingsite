import React from 'react';
import { cn } from '../../lib/utils';
import { motion, type HTMLMotionProps } from 'framer-motion';

interface ButtonProps extends HTMLMotionProps<"button"> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', children, ...props }, ref) => {
    const variants = {
      primary: "bg-stone-800 text-stone-50 hover:bg-stone-700 hover:text-white border border-transparent shadow-sm",
      secondary: "bg-stone-100 text-stone-900 hover:bg-stone-200 border border-transparent",
      outline: "bg-transparent border border-stone-800 text-stone-900 hover:bg-stone-800 hover:text-stone-50",
      ghost: "bg-transparent text-stone-800 hover:bg-stone-100 hover:text-stone-900",
    };

    const sizes = {
      sm: "px-4 py-2 text-sm",
      md: "px-6 py-3 text-base",
      lg: "px-8 py-4 text-lg",
    };

    return (
      <motion.button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center rounded-none transition-colors duration-300 font-serif tracking-wide uppercase",
          "focus:outline-none focus:ring-1 focus:ring-stone-400 focus:ring-offset-1 disabled:opacity-50 disabled:pointer-events-none",
          variants[variant],
          sizes[size],
          className
        )}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        transition={{ duration: 0.3 }}
        {...props}
      >
        {children}
      </motion.button>
    );
  }
);

Button.displayName = "Button";
