import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { HeroSection } from './components/sections/HeroSection';
import { BibleVerseSection } from './components/sections/BibleVerseSection';
import { StorySection } from './components/sections/StorySection';
import { PrenupSection } from './components/sections/PrenupSection';
import { DetailsSection } from './components/sections/DetailsSection';
import { LocationSection } from './components/sections/LocationSection';
import { GallerySection } from './components/sections/GallerySection';
import { RSVPSection } from './components/sections/RSVPSection';

function App() {
  return (
    <div className="min-h-screen bg-stone-50 text-stone-900 font-sans selection:bg-stone-200 selection:text-stone-900">
      <div className="noise-overlay" />
      
      <Navbar />
      
      <main className="flex flex-col">
        <HeroSection />
        <BibleVerseSection />
        <StorySection />
        <PrenupSection />
        <DetailsSection />
        <LocationSection />
        <GallerySection />
        <RSVPSection />
      </main>

      <Footer />
    </div>
  );
}

export default App;
