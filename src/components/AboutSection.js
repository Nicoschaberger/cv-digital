import React from 'react';

const AboutSection = () => {
  return (
    <section className="py-20 px-4 bg-gray-50" id="about" data-aos="fade-up">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Sobre mí</h2>
        
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/3 flex justify-center" data-aos="fade-right">
            <div className="relative">
              <div className="w-64 h-64 rounded-full overflow-hidden shadow-xl border-4 border-black relative z-10">
                <img 
                  src="https://4tsix0yujj.ufs.sh/f/2vMRHqOYUHc068q7vpVFtni9pklCcebwvoumN4D1UEQ3aHWZ" 
                  alt="Melli Schaberger"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -inset-1 rounded-full bg-green-500 z-0"></div>
            </div>
          </div>
          <div className="md:w-2/3" data-aos="fade-left">
            <p className="text-lg text-gray-600 mb-4">
              💻 Desarrollador Web con formación en JavaScript, React y backend
            </p>
            <p className="text-lg text-gray-600 mb-4">
              📜 Técnico Superior en Industrias Alimentarias con una Diplomatura en SAP ABAP, con una visión integral de los procesos y la tecnología
            </p>
            <p className="text-lg text-gray-600 mb-4">
              🧀 Actualmente trabajo en Ilolay, en el área de recibo de leche y crema, donde me encargo de la pasteurización de la materia prima
            </p>
            <p className="text-lg text-gray-600 mb-4">
              🏃🏽‍♂️ Trail runner de corazón, aplico la misma disciplina y pasión en cada proyecto
            </p>
            <p className="text-lg text-gray-600 font-medium">
              Siempre buscando crecer, aprender y dar lo mejor en cada desafío 🚀
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

// DONE