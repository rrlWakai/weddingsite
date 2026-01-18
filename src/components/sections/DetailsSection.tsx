import { motion } from 'framer-motion';
import { Calendar, Clock, Info } from 'lucide-react';
import { SectionContainer } from '../ui/SectionContainer';
const details = [
  {
    id: 1,
    icon: Calendar,
    title: "The Date",
    info: "September 24, 2026",
    subInfo: "Thursday",
  },
  {
    id: 2,
    icon: Clock,
    title: "The Time",
    info: "4:00 PM - Ceremony",
    subInfo: "5:30 PM - Reception",
  },
  {
    id: 4,
    icon: Info,
    title: "Dress Code",
    info: "Black Tie Optional",
    subInfo: "Earth tones encouraged",
  }
];

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
          Everything you need to know to join us for our special celebration.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {details.map((detail, index) => (
          <motion.div
            key={detail.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.8 }}
            className="group relative bg-white p-8 border border-stone-100 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col items-center text-center h-full"
          >
            <div className="mb-6 p-4 bg-stone-50 rounded-full text-stone-600 group-hover:bg-stone-100 group-hover:text-stone-800 transition-colors">
              <detail.icon size={24} strokeWidth={1.5} />
            </div>
            
            <h3 className="text-xl font-serif text-stone-800 mb-2">{detail.title}</h3>
            <p className="text-stone-600 font-medium mb-1">{detail.info}</p>
            <p className="text-stone-400 text-sm mb-6">{detail.subInfo}</p>
            

          </motion.div>
        ))}
      </div>
    </SectionContainer>
  );
};
