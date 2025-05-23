import React from 'react';

const SkillsSection = () => {
  const skills = {
    'Lenguajes de programación': ['JavaScript', 'ABAP', 'HTML', 'CSS'],
    'Herramientas y tecnologías': ['React.js', 'Git & GitHub', 'Node.js', 'Express.js', 'Vite', 'NPM / Yarn', 'Postman', 'Visual Studio Code', 'Figma'],
    'Certificados y títulos': ['Técnico Superior en Industrias Alimentarias – UTN', 'Desarrollador Full Stack – Coderhouse', 'Diplomatura en Programación SAP ABAP – UTN', 'Gestión de Pequeños y Medianos Hoteles']
  };

  return (
    <section className="py-20 px-4 bg-white" id="skills" data-aos="fade-up">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Habilidades</h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {Object.entries(skills).map(([category, items]) => (
            <div key={category} className="bg-gray-50 p-6 rounded-xl shadow-md" data-aos="zoom-in" data-aos-delay="100">
              <h3 className="text-xl font-semibold text-green-600 mb-4">{category}</h3>
              <ul className="space-y-3">
                {items.map((item, index) => (
                  <li key={index} className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;