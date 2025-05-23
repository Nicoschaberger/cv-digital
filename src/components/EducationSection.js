import React from 'react';

const EducationSection = () => {
  const education = [
    {
      title: "Técnico Superior en Industrias Alimentarias",
      institution: "UTN"
    },
    {
      title: "Desarrollador Full Stack",
      institution: "Coderhouse"
    },
    {
      title: "Diplomatura en Programación SAP ABAP",
      institution: "UTN"
    },
    {
      title: "Gestión de Pequeños y Medianos Hoteles",
      institution: "UTN" // Institución agregada
    }
  ];

  return (
    <section className="py-20 px-4 bg-white" id="education" data-aos="fade-up">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Formación Académica</h2>
        
        <div className="space-y-6 max-w-3xl mx-auto">
          {education.map((item, index) => (
            <div key={index} className="flex items-start bg-gray-50 p-6 rounded-lg shadow-sm" data-aos="fade-right" data-aos-delay={index * 100}>
              <svg className="w-6 h-6 text-green-600 mr-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.523 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5S19.832 5.477 21 6.253v13C19.832 18.523 18.246 18 16.5 18s-3.332.477-4.5 1.253" />
              </svg>
              <div>
                <h3 className="text-xl font-bold text-gray-800">{item.title}</h3>
                {item.institution && <p className="text-green-600">{item.institution}</p>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;

// DONE