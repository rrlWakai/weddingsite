import { motion } from 'framer-motion';
import { SectionContainer } from '../ui/SectionContainer';

const PALETTE = [
  { name: "Deep Olive", color: "#556B2F" },
  { name: "Terracotta", color: "#E2725B" },
  { name: "Warm Beige", color: "#D2B48C" },
  { name: "Charcoal", color: "#36454F" },
  { name: "Muted Gold", color: "#C5A059" },
];

// Placeholder for the generated image - in real implementation, this would be the actual path
// For now using the local reference relative to public or src, assuming it will be moved there.
// Since we have the artifact path, I'll use a relative path assuming we move the file.
// But for now, I'll use a hardcoded import or path that points to the artifact.
// Note: In a real Vite app, we'd import this. For this demo, I will assume the image is placed in public/images
// or I will use the path directly if possible, or placeholder.
// I will use a relative path and we will move the file shortly.
const ILLUSTRATION_PATH = "/images/dress_code_illustration.png"; 

export const DressCodeSection = () => {
  return (
    <SectionContainer id="dress-code" className="bg-stone-50 overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
        
        {/* Illustration Side */}
        <motion.div
           initial={{ opacity: 0, x: -50 }}
           whileInView={{ opacity: 1, x: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
           className="relative order-2 md:order-1 flex justify-center"
        >
          <div className="relative w-full max-w-md aspect-[3/4] rounded-t-full overflow-hidden border-8 border-white shadow-xl">
             <img 
               src={ILLUSTRATION_PATH} 
               alt="Couple in semi-formal attire" 
               className="w-full h-full object-cover"
             />
          </div>
          {/* Decorative Circle */}
          <div className="absolute -z-10 top-10 -left-10 w-64 h-64 bg-stone-200 rounded-full mix-blend-multiply filter blur-3xl opacity-50" />
        </motion.div>

        {/* Text Side */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="order-1 md:order-2 space-y-8 text-center md:text-left"
        >
          <div>
            <span className="text-stone-500 font-serif uppercase tracking-widest text-sm">The Esthetic</span>
            <h2 className="text-4xl md:text-5xl font-serif text-stone-900 mt-2 mb-4">Dress Code</h2>
            <p className="text-xl text-stone-600 font-medium italic">Black Tie Optional</p>
          </div>

          <div className="prose prose-stone text-stone-600 leading-relaxed">
            <p>
              We kindly ask our guests to dress in formal attire that complements our wedding's natural color palette. 
            </p>
            <p className="hidden md:block">
              For gentlemen, a suit (tie optional) is perfect. For ladies, a midi or floor-length dress in earth tones, neutrals, or soft pastels would be lovely.
            </p>
          </div>

          <div className="pt-6">
            <h3 className="text-sm font-serif uppercase tracking-wider text-stone-500 mb-4">Color Palette</h3>
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                visible: {
                  transition: { staggerChildren: 0.1 }
                }
              }}
              className="flex flex-wrap gap-4 justify-center md:justify-start"
            >
              {PALETTE.map((swatch) => (
                <motion.div 
                  key={swatch.name} 
                  variants={{
                    hidden: { opacity: 0, scale: 0.8 },
                    visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: "backOut" } }
                  }}
                  className="flex flex-col items-center gap-2 group cursor-pointer"
                >
                  <div 
                    className="w-12 h-12 rounded-full shadow-sm border border-stone-100 transition-transform duration-300 group-hover:scale-110" 
                    style={{ backgroundColor: swatch.color }}
                  />
                  <span className="text-xs text-stone-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 absolute -bottom-6 whitespace-nowrap">
                    {swatch.name}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </SectionContainer>
  );
};
