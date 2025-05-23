import React from 'react';

const ProjectsSection = () => {
  const projects = [
    {
      title: "Sitio Web Odontóloga Macarena Piedrabuena",
      description: "Desarrollo de un sitio web profesional para consultorio odontológico, con información de servicios, contacto y ubicación.",
      tags: ["HTML", "CSS", "JavaScript"],
      link: "https://github.com/Nicoschaberger/Odontologa-Macarena-Piedrabuena",
      illustration: "https://4tsix0yujj.ufs.sh/f/2vMRHqOYUHc0DNjYhUVAClE5QWIJ7Vmfjash4qouSygRTxLZ" // Imagen específica de odontología
    },
    {
      title: "Sistema de Gestión Agroindustrial",
      description: "Aplicación web para la gestión de procesos en el sector agroindustrial, incluyendo control de producción y stock.",
      tags: ["React", "Node.js", "Express.js", "MongoDB"],
      link: "https://github.com/Nicoschaberger/Proyecto-Agroindustrial",
      illustration: "https://4tsix0yujj.ufs.sh/f/2vMRHqOYUHc0XMiNxTq7MqavcHK34VzhrR2we8dDg6BAFCsl" // Nueva imagen específica de agroindustria
    }
  ];

  return (
    <section className="py-20 px-4 bg-gray-50" id="projects" data-aos="fade-up">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Proyectos Destacados</h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow" data-aos="fade-up" data-aos-delay={index * 100}>
              <div className="h-48 overflow-hidden">
                <img 
                  src={project.illustration} 
                  alt={`Ilustración de ${project.title}`} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="px-3 py-1 bg-green-100 text-green-800 text-sm rounded-full">{tag}</span>
                  ))}
                </div>
                <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-green-600 hover:text-green-700 font-medium flex items-center"
                >
                  Ver en GitHub 
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4m-4-4L9 9m10-3a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;