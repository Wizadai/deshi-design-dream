
import React from 'react';
import { Separator } from "@/components/ui/separator";

const Footer = () => {
  return (
    <footer className="bg-indic-blue text-white py-12 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <h3 className="text-xl font-bold mb-4">Smart Indic Designer</h3>
            <p className="text-white/80 mb-4 max-w-md">
              Bringing AI to Bharat, One Language at a Time. Create, Communicate, and Connect in Your Own Language.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white/80 hover:text-white">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </a>
              <a href="#" className="text-white/80 hover:text-white">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                </svg>
              </a>
              <a href="#" className="text-white/80 hover:text-white">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                </svg>
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-white/80">
              <li><a href="#" className="hover:text-white">About Us</a></li>
              <li><a href="#" className="hover:text-white">Features</a></li>
              <li><a href="#" className="hover:text-white">Languages</a></li>
              <li><a href="#" className="hover:text-white">Early Access</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-white/80">
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5 mr-2 shrink-0">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:info@smartindicdesigner.com" className="hover:text-white">info@smartindicdesigner.com</a>
              </li>
            </ul>
          </div>
        </div>
        
        <Separator className="my-8 bg-white/20" />
        
        <div className="text-center md:text-left md:flex md:justify-between">
          <div className="mb-4 md:mb-0">
            <p className="text-white/80">
              COMPUTING FREEDOM COLLECTIVE PRIVATE LIMITED
            </p>
            <p className="text-white/80">
              27/2207, CHIRAKULAM, STATUE GPO, TRIVANDRUM
            </p>
          </div>
          <div className="text-white/80">
            &copy; {new Date().getFullYear()} Smart Indic Designer. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
