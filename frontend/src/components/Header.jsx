import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Logo and Header Image Section */}
        <div className="relative py-8">
          {/* Header image positioned in upper right, behind logo */}
          <div className="absolute top-0 right-0 z-0">
            <img 
              src="https://customer-assets.emergentagent.com/job_automate-business/artifacts/e3zpy7zy_header%20%282%29.png" 
              alt="otobrothers header" 
              className="h-48 w-auto opacity-80"
            />
          </div>
          
          {/* Logo positioned in upper left */}
          <div className="relative z-10 flex justify-start">
            <img 
              src="https://customer-assets.emergentagent.com/job_automate-business/artifacts/1uo09bs0_logo%20%282%29.png" 
              alt="otobrothers" 
              className="h-48 w-auto"
            />
          </div>
        </div>

        {/* Navigation Menu - Below logo and header */}
        <div className="border-t border-gray-200 py-3">
          <div className="flex justify-between items-center">
            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              <button 
                onClick={() => scrollToSection('services')}
                className="text-gray-700 hover:text-[#43978D] transition-colors duration-200 font-medium"
              >
                Services
              </button>
              <button 
                onClick={() => scrollToSection('process')}
                className="text-gray-700 hover:text-[#43978D] transition-colors duration-200 font-medium"
              >
                Process
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="text-gray-700 hover:text-[#43978D] transition-colors duration-200 font-medium"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="bg-[#43978D] text-white px-6 py-2 rounded-lg hover:bg-[#264D59] transition-colors duration-200 font-medium"
              >
                Get In Touch
              </button>
            </nav>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-700 hover:text-[#43978D] transition-colors duration-200"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden pt-4 border-t border-gray-100 mt-3">
              <div className="flex flex-col space-y-4">
                <button 
                  onClick={() => scrollToSection('services')}
                  className="text-gray-700 hover:text-[#43978D] transition-colors duration-200 font-medium text-left"
                >
                  Services
                </button>
                <button 
                  onClick={() => scrollToSection('process')}
                  className="text-gray-700 hover:text-[#43978D] transition-colors duration-200 font-medium text-left"
                >
                  Process
                </button>
                <button 
                  onClick={() => scrollToSection('about')}
                  className="text-gray-700 hover:text-[#43978D] transition-colors duration-200 font-medium text-left"
                >
                  About
                </button>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="bg-[#43978D] text-white px-6 py-2 rounded-lg hover:bg-[#264D59] transition-colors duration-200 font-medium text-left w-fit"
                >
                  Get In Touch
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;