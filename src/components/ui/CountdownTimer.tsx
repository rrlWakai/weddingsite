import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const calculateTimeLeft = (targetDate: Date): TimeLeft => {
  const difference = +targetDate - +new Date();
  
  if (difference > 0) {
    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  }

  return { days: 0, hours: 0, minutes: 0, seconds: 0 };
};

export const CountdownTimer = () => {
  // Target: September 24, 2026 4:00 PM
  const targetDate = new Date('2026-09-24T16:00:00');
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft(targetDate));

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft(targetDate));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const TimeUnit = ({ value, label }: { value: number; label: string }) => (
    <div className="flex flex-col items-center mx-3 md:mx-6">
      <span className="text-3xl md:text-5xl font-serif text-stone-800 font-light tabular-nums leading-none">
        {String(value).padStart(2, '0')}
      </span>
      <span className="text-[10px] md:text-xs uppercase tracking-[0.2em] text-stone-400 mt-2 font-sans font-medium">
        {label}
      </span>
    </div>
  );

  return (
    <motion.div 
      className="flex items-center justify-center py-6 md:py-8 border-y border-stone-200/60 w-full max-w-md lg:max-w-lg lg:mx-0 mx-auto"
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.4 }}
    >
      <TimeUnit value={timeLeft.days} label="Days" />
      <div className="h-8 w-[1px] bg-stone-200 -mt-4" />
      <TimeUnit value={timeLeft.hours} label="Hours" />
      <div className="h-8 w-[1px] bg-stone-200 -mt-4" />
      <TimeUnit value={timeLeft.minutes} label="Mins" />
      <div className="h-8 w-[1px] bg-stone-200 -mt-4" />
      <TimeUnit value={timeLeft.seconds} label="Secs" />
    </motion.div>
  );
};
