
import React from 'react';

const languages = [
  { name: "Hindi", code: "हिंदी", users: "520M+" },
  { name: "Bengali", code: "বাংলা", users: "270M+" },
  { name: "Telugu", code: "తెలుగు", users: "82M+" },
  { name: "Marathi", code: "मराठी", users: "83M+" },
  { name: "Tamil", code: "தமிழ்", users: "75M+" },
  { name: "Kannada", code: "ಕನ್ನಡ", users: "45M+" },
  { name: "Gujarati", code: "ગુજરાતી", users: "55M+" },
  { name: "Malayalam", code: "മലയാളം", users: "38M+" }
];

const LanguageSection = () => {
  return (
    <div className="py-16 md:py-24 px-4 md:px-8 bg-muted">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Supporting <span className="text-gradient">India's Diversity</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Our AI understands and generates content in major Indian languages, reaching over 1 billion people.
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {languages.map((lang, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl p-6 text-center shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="text-3xl font-bold mb-2">{lang.code}</div>
              <div className="text-lg font-medium">{lang.name}</div>
              <div className="text-sm text-muted-foreground">{lang.users} speakers</div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-muted-foreground">
            More languages coming soon, including Punjabi, Odia, Assamese, and more.
          </p>
        </div>
      </div>
    </div>
  );
};

export default LanguageSection;
