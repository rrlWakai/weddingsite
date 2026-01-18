import { motion } from 'framer-motion';
import { Clock } from 'lucide-react';
import { SectionContainer } from '../ui/SectionContainer';

const CalendarView = () => {
  const days = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
  // September 2026 starts on Tuesday (index 2)
  // 30 days
  const startDay = 2;
  const totalDays = 30;
  const weeks = [];
  
  let currentDay = 1;
  for (let i = 0; i < 5; i++) {
    const week = [];
    for (let j = 0; j < 7; j++) {
      if ((i === 0 && j < startDay) || currentDay > totalDays) {
        week.push(null);
      } else {
        week.push(currentDay);
        currentDay++;
      }
    }
    weeks.push(week);
  }

  return (
    <div className="bg-white p-8 rounded-sm shadow-sm border border-stone-100 max-w-sm mx-auto w-full">
      <div className="text-center mb-6">
        <h3 className="text-2xl font-serif text-stone-900">September</h3>
        <p className="text-stone-500 tracking-widest uppercase text-sm">2026</p>
      </div>
      
      <div className="grid grid-cols-7 gap-2 mb-2">
        {days.map(d => (
          <div key={d} className="text-center text-xs font-medium text-stone-400 py-1">
            {d}
          </div>
        ))}
      </div>
      
      <div className="grid grid-cols-7 gap-2">
        {weeks.flat().map((day, idx) => (
          <div key={idx} className="aspect-square flex items-center justify-center relative">
            {day && (
              <>
                <span className={`text-sm z-10 relative ${day === 24 ? 'text-white font-medium' : 'text-stone-600'}`}>
                  {day}
                </span>
                {day === 24 && (
                  <motion.div 
                    layoutId="selectedDay"
                    className="absolute inset-0 bg-stone-800 rounded-full scale-75"
                    transition={{ duration: 0.3 }}
                  />
                )}
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export const DetailsSection = () => {
  return (
    <SectionContainer id="details" className="bg-stone-50">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-serif text-stone-900 mb-4">The Details</h2>
        <p className="text-stone-500 max-w-lg mx-auto">
          We can't wait to celebrate with you.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center max-w-5xl mx-auto">
        {/* Calendar Side */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <CalendarView />
        </motion.div>
        
        {/* Details Side */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-8 text-center md:text-left"
        >
          <div className="space-y-2">
            <h3 className="text-3xl font-serif text-stone-900">Thursday</h3>
            <div className="text-5xl md:text-6xl font-serif text-stone-800 py-2 border-y border-stone-200 inline-block md:block w-full">
              September 24th
            </div>
            <p className="text-xl text-stone-500 font-serif">Two Thousand Twenty Six</p>
          </div>
          
          <div className="flex flex-col md:flex-row gap-8 pt-4 justify-center md:justify-start">
            <div className="space-y-2">
              <div className="flex items-center gap-2 justify-center md:justify-start text-stone-400 uppercase tracking-widest text-xs font-bold">
                <Clock size={14} /> Ceremony
              </div>
              <p className="text-2xl font-serif text-stone-800">4:00 PM</p>
            </div>
            
            <div className="w-px bg-stone-200 hidden md:block" />
            
            <div className="space-y-2">
              <div className="flex items-center gap-2 justify-center md:justify-start text-stone-400 uppercase tracking-widest text-xs font-bold">
                <Clock size={14} /> Reception
              </div>
              <p className="text-2xl font-serif text-stone-800">5:30 PM</p>
            </div>
          </div>
        </motion.div>
      </div>
    </SectionContainer>
  );
};
