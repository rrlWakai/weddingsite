import { motion } from 'framer-motion';
import { MapPin, Navigation } from 'lucide-react';
import { SectionContainer } from '../ui/SectionContainer';
import { Button } from '../ui/Button';

export const LocationSection = () => {
  return (
    <SectionContainer id="location" className="bg-white">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <div className="flex items-center gap-2 text-stone-500 font-serif uppercase tracking-wider text-sm">
            <MapPin size={16} />
            <span>The Venue</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-serif text-stone-900 leading-tight">
            Vintner's Garden
          </h2>
          
          <div className="space-y-4 text-stone-600 leading-relaxed">
            <p className="text-lg">
              Nestled in the heart of Sonoma Valley, Vintner's Garden offers a romantic blend of rustic charm and California elegance.
            </p>
            <p>
              Join us under the ancient oaks and surrounded by rolling vineyards for an unforgettable evening of love, laughter, and celebration.
            </p>
          </div>

          <div className="pt-4 space-y-2">
             <p className="text-stone-900 font-serif text-xl">
              123 Vineyard Lane
            </p>
            <p className="text-stone-600">
              Sonoma, CA 95476
            </p>
          </div>

          <div className="pt-6">
            <Button 
              onClick={() => window.open('https://maps.google.com/?q=Vintners+Garden+Sonoma+CA', '_blank')}
              className="gap-2"
            >
              Get Directions <Navigation size={16} />
            </Button>
          </div>
        </motion.div>

        {/* Map */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="h-[400px] md:h-[500px] w-full bg-stone-100 rounded-lg overflow-hidden shadow-lg border border-stone-200"
        >
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3133.638708304953!2d-122.4595296236287!3d38.24151128522368!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085022e391f6bd7%3A0x6b45167570415392!2sSonoma%2C%20CA!5e0!3m2!1sen!2sus!4v1709409283721!5m2!1sen!2sus" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            className="grayscale hover:grayscale-0 transition-all duration-700"
            title="Venue Location"
          />
        </motion.div>
      </div>
    </SectionContainer>
  );
};
