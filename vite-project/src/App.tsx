"use client";

import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { CallsSection } from './components/CallsSection';
import { InfoSection } from './components/InfoSection';
import { CalendarSection } from './components/CalendarSection';
import { SaveCreationSection } from './components/SaveCreationSection';
import { ContactSection } from './components/ContactSection';
import { NewsletterSection } from './components/NewsletterSection';
import { PartnersSection } from './components/PartnersSection';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="relative">
      <Navbar />
      <HeroSection />
      <CallsSection />
      <InfoSection />
      <CalendarSection />
      <SaveCreationSection />
      <ContactSection />
      <NewsletterSection />
      <PartnersSection />
      <Footer />
    </div>
  );
}

export default App;
