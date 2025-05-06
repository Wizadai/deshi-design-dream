
import React from 'react';
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <div className="relative w-full py-16 md:py-24 px-4 md:px-8 flex flex-col items-center justify-center text-center overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 wave-pattern opacity-10 z-0"></div>
      
      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
          Bringing AI to Bharat, <span className="text-gradient">One Language at a Time</span>
        </h1>
        
        <p className="text-xl md:text-2xl mb-8 text-muted-foreground max-w-2xl mx-auto">
          Create, Communicate, and Connect in Your Own Language
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="bg-indic-blue hover:bg-indic-blue/90">
            Get Started
          </Button>
          <Button variant="outline" size="lg" className="border-indic-orange text-indic-orange hover:bg-indic-orange hover:text-white">
            Learn More
          </Button>
        </div>
        
        <div className="mt-12 relative">
          <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-2 shadow-xl">
            <div className="animate-float relative">
              <div className="absolute -top-8 -right-8 bg-indic-orange text-white px-3 py-1 rounded-full text-sm font-medium">
                हिंदी, தமிழ், മലയാളം
              </div>
              <img 
                src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=400&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY4MzExMDQ2MA&ixlib=rb-4.0.3&q=80&w=600" 
                alt="AI design interface in multiple Indian languages" 
                className="rounded-xl w-full shadow-lg max-w-lg mx-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
