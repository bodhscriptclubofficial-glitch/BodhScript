import { Hero } from './components/Hero';
import { About } from './components/About';
import { FacultySpotlight } from './components/FacultySpotlight';
import { Events } from './components/Events';
import { Organizers } from './components/Organizers';
import { Team } from './components/Team';
import { Resources } from './components/Resources';
import { Contact } from './components/Contact';
import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';
import { AnimatedBackground } from './components/AnimatedBackground';
import { CustomCursor } from './components/CustomCursor';
import { ScrollProgress } from './components/ScrollProgress';

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      <CustomCursor />
      <ScrollProgress />
      <AnimatedBackground />
      <Navigation />
      <Hero />
      <About />
      <FacultySpotlight />
      <Events />
      <Organizers />
      <Team />
      <Contact />
      <Footer />
    </div>
  );
}
