
import React from 'react';
import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <nav className="w-full py-4 px-4 md:px-8 flex items-center justify-between bg-transparent">
      <div className="flex items-center">
        <h1 className="text-2xl font-bold text-primary">
          Smart <span className="text-gradient">Indic</span> Designer
        </h1>
      </div>
      
      <div className="hidden md:flex gap-4 items-center">
        <Button variant="link" className="text-foreground">Features</Button>
        <Button variant="link" className="text-foreground">Languages</Button>
        <Button variant="link" className="text-foreground">Vision</Button>
        <Button variant="outline" className="border-indic-orange text-indic-orange hover:bg-indic-orange hover:text-white">
          Early Access
        </Button>
      </div>
      
      <div className="md:hidden">
        <Button variant="ghost" className="text-foreground">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
