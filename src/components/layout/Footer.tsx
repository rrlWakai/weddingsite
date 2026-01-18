import { motion } from 'framer-motion';

export const Footer = () => {
  return (
    <footer className="bg-stone-50 py-16 px-6 border-t border-stone-100">
      <div className="max-w-[1200px] mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-serif text-stone-800 mb-6">Thank You</h2>
          <p className="text-stone-500 font-sans max-w-md mx-auto mb-10">
            We can't wait to celebrate our special day with you. Your presence means the world to us.
          </p>
          <div className="w-16 h-[1px] bg-stone-300 mx-auto mb-8"></div>
          <p className="text-stone-400 text-sm font-sans uppercase tracking-widest">
            Alicia & Ethan • 2026
          </p>
        </motion.div>
      </div>
    </footer>
  );
};
