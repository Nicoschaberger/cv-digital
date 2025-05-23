import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center">
          <a href="#" className="flex items-center">
            <img 
              src="https://4tsix0yujj.ufs.sh/f/2vMRHqOYUHc0RQmNBgj6STzbQpvUw3J8g9yKOPeqZ4xiNdIh" 
              alt="Melli Schaberger"
              className="h-10 md:h-12 object-contain transition-opacity hover:opacity-90 rounded-full border border-black" // Agregado borde negro
            />
          </a>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <a href="#about" className="text-gray-700 hover:text-green-600 transition-colors">Sobre mí</a>
            <a href="#skills" className="text-gray-700 hover:text-green-600 transition-colors">Habilidades</a>
            <a href="#projects" className="text-gray-700 hover:text-green-600 transition-colors">Proyectos</a>
            <a href="#contact" className="text-gray-700 hover:text-green-600 transition-colors">Contacto</a>
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            onClick={toggleMobileMenu}
            className="md:hidden text-gray-700 focus:outline-none"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={mobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        <div className={`md:hidden ${mobileMenuOpen ? 'block' : 'hidden'} mt-4 pb-4 transition-all duration-300 ease-in-out`}>
          <div className="flex flex-col space-y-3">
            <a 
              href="#about" 
              className="text-gray-700 hover:text-green-600 transition-colors px-2 py-1"
              onClick={toggleMobileMenu}
            >
              Sobre mí
            </a>
            <a 
              href="#skills" 
              className="text-gray-700 hover:text-green-600 transition-colors px-2 py-1"
              onClick={toggleMobileMenu}
            >
              Habilidades
            </a>
            <a 
              href="#projects" 
              className="text-gray-700 hover:text-green-600 transition-colors px-2 py-1"
              onClick={toggleMobileMenu}
            >
              Proyectos
            </a>
            <a 
              href="#contact" 
              className="text-gray-700 hover:text-green-600 transition-colors px-2 py-1"
              onClick={toggleMobileMenu}
            >
              Contacto
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;