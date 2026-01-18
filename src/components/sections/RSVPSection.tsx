import { useState, type FormEvent } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SectionContainer } from '../ui/SectionContainer';
import { Button } from '../ui/Button';
import { Check } from 'lucide-react';

export const RSVPSection = () => {
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setFormState('submitting');
    // Simulate API call
    setTimeout(() => {
      setFormState('success');
    }, 1500);
  };

  return (
    <SectionContainer id="rsvp" className="bg-stone-100 mb-20">
      <div className="max-w-2xl mx-auto text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-serif text-stone-900 mb-4">RSVP</h2>
        <p className="text-stone-500">
           Please respond by August 1st, 2026.
        </p>
      </div>

      <div className="max-w-3xl mx-auto bg-white p-8 md:p-12 shadow-sm border border-stone-100 relative overflow-hidden">
        <AnimatePresence mode='wait'>
          {formState === 'success' ? (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center justify-center py-10"
            >
              <div className="w-16 h-16 bg-stone-100 rounded-full flex items-center justify-center mb-6 text-stone-800">
                <Check size={32} />
              </div>
              <h3 className="text-2xl font-serif text-stone-800 mb-2">Thank you!</h3>
              <p className="text-stone-500">Your response has been recorded.</p>
            </motion.div>
          ) : (
            <motion.form
              key="form"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                visible: {
                  opacity: 1,
                  transition: { staggerChildren: 0.1 }
                },
                hidden: { opacity: 0 }
              }}
              exit={{ opacity: 0, y: -20 }}
              onSubmit={handleSubmit}
              className="space-y-6"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                 <motion.div variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } }} className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-stone-600 uppercase tracking-wide">Full Name</label>
                    <input 
                      required 
                      type="text" 
                      id="name" 
                      className="w-full bg-stone-50 border-b border-stone-200 focus:border-stone-800 outline-none py-3 px-4 transition-colors duration-300"
                      placeholder="Jane Doe"
                    />
                 </motion.div>
                 <motion.div variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } }} className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-stone-600 uppercase tracking-wide">Email</label>
                    <input 
                      required 
                      type="email" 
                      id="email" 
                      className="w-full bg-stone-50 border-b border-stone-200 focus:border-stone-800 outline-none py-3 px-4 transition-colors duration-300"
                      placeholder="jane@example.com"
                    />
                 </motion.div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                 <motion.div variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } }} className="space-y-2">
                    <label htmlFor="guests" className="text-sm font-medium text-stone-600 uppercase tracking-wide">Number of Guests</label>
                    <select id="guests" className="w-full bg-stone-50 border-b border-stone-200 focus:border-stone-800 outline-none py-3 px-4 transition-colors duration-300 appearance-none rounded-none">
                       <option>1</option>
                       <option>2</option>
                       <option>3</option>
                       <option>4</option>
                    </select>
                 </motion.div>
                 <motion.div variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } }} className="space-y-2">
                    <label htmlFor="attending" className="text-sm font-medium text-stone-600 uppercase tracking-wide">Will you attend?</label>
                    <select id="attending" className="w-full bg-stone-50 border-b border-stone-200 focus:border-stone-800 outline-none py-3 px-4 transition-colors duration-300 appearance-none rounded-none">
                    <option>Joyfully Accepts</option>
                    <option>Regretfully Declines</option>
                    </select>
                 </motion.div>
              </div>

               <motion.div variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } }} className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-stone-600 uppercase tracking-wide">Message (Optional)</label>
                  <textarea 
                    id="message" 
                    rows={3}
                    className="w-full bg-stone-50 border-b border-stone-200 focus:border-stone-800 outline-none py-3 px-4 transition-colors duration-300 resize-none"
                    placeholder="Leave a note for the couple..."
                  />
               </motion.div>

              <motion.div variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } }} className="pt-4 text-center">
                <Button 
                   type="submit" 
                   size="lg" 
                   className="w-full md:w-auto min-w-[200px]"
                   disabled={formState === 'submitting'}
                >
                  {formState === 'submitting' ? 'Sending...' : 'Send RSVP'}
                </Button>
              </motion.div>
            </motion.form>
          )}
        </AnimatePresence>
      </div>
    </SectionContainer>
  );
};
