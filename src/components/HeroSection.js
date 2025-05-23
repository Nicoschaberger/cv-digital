import React from 'react';

const HeroSection = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-green-100 to-green-50 px-4">
      <div className="text-center max-w-2xl" data-aos="fade-up">
        <div className="mb-8 flex justify-center">
          <img 
            src="https://4tsix0yujj.ufs.sh/f/2vMRHqOYUHc0RQmNBgj6STzbQpvUw3J8g9yKOPeqZ4xiNdIh" 
            alt="Melli Schaberger"
            className="h-24 md:h-32 object-contain rounded-full border border-black"
          />
        </div>
        
        <div className="space-y-4 mb-8">
          <p className="text-lg md:text-xl text-gray-700">
            👋🏽 ¡Hola! Soy Nicolás Schaberger, tengo 31 años y soy de Bella Italia, Argentina 🇦🇷
          </p>
          <p className="text-lg md:text-xl text-gray-700">
            💻 Desarrollador web | Trabajo en ilolay 🧀 | 🚀 Apasionado por seguir aprendiendo
          </p>
          <p className="text-lg md:text-xl text-gray-700 font-medium mt-6">
            ✨ ¡Bienvenidos a mi perfil!
          </p>
          <p className="text-lg md:text-xl text-gray-700">
            Te invito a conocerme un poco más 👇🏽
          </p>
        </div>

        <a 
          href="https://drive.google.com/file/d/1hL1ix9jv0HGekNksMAMXqeDe3Kc5frwq/view?usp=drivesdk" 
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-8 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors shadow-lg"
        >
          Descargar CV
        </a>
      </div>
      <div className="mt-12" data-aos="fade-up" data-aos-delay="200">
        <svg className="w-16 h-16 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;

// DONE