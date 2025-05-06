
import React from 'react';

const VisionSection = () => {
  return (
    <div className="py-16 md:py-24 px-4 md:px-8 bg-gradient">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Breaking Language Barriers in Technology
            </h2>
            <p className="text-lg text-white/80 mb-6">
              This project exists to break barriers—by building AI that designs, writes, and communicates in India's own voices.
            </p>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="bg-white/20 p-2 rounded-full mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5 text-white">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-white/90">Small businesses can market effectively in local languages</p>
              </div>
              <div className="flex items-start">
                <div className="bg-white/20 p-2 rounded-full mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5 text-white">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-white/90">Content creators can reach wider audiences without translation</p>
              </div>
              <div className="flex items-start">
                <div className="bg-white/20 p-2 rounded-full mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5 text-white">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-white/90">Students can learn and leverage AI in their native language</p>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-indic-gold rounded-full opacity-20"></div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-indic-orange rounded-full opacity-20"></div>
            <div className="relative bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-white mb-4">Our Vision</h3>
                <p className="text-white/90 italic text-lg mb-6">
                  "We envision a digital India where language is no longer a barrier to technological progress, where every Indian can harness the power of AI in their mother tongue."
                </p>
                <div className="flex justify-center">
                  <div className="h-px w-16 bg-indic-gold"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VisionSection;
