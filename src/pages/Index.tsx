
import React from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import FeaturesSection from '@/components/FeaturesSection';
import VisionSection from '@/components/VisionSection';
import LanguageSection from '@/components/LanguageSection';
import EmailSignup from '@/components/EmailSignup';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <HeroSection />
        <FeaturesSection />
        <LanguageSection />
        <VisionSection />
        <EmailSignup />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
