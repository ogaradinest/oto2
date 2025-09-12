import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerHeight = 160; // Increased offset to show section titles
      const elementPosition = element.offsetTop - headerHeight;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Logo and Header Image Section */}
        <div className="relative py-8 sm:py-10 lg:py-12">
          {/* Logo positioned in upper left with proper aspect ratio */}
          <div className="relative z-10 flex justify-start">
            <img 
              src="https://customer-assets.emergentagent.com/job_automate-business/artifacts/qru9a8vm_logo3.png" 
              alt="otobrothers" 
              className="h-20 sm:h-24 md:h-28 lg:h-32 w-auto object-contain"
            />
          </div>
          
          {/* Header image positioned in upper right with 20% smaller size */}
          <div className="absolute top-8 sm:top-10 lg:top-12 right-0 z-0 hidden sm:block">
            <img 
              src="https://customer-assets.emergentagent.com/job_automate-business/artifacts/h3r662zx_header3.png" 
              alt="otobrothers header" 
              className="h-16 sm:h-19 md:h-22 lg:h-26 w-auto object-contain opacity-70"
            />
          </div>
        </div>

        {/* Navigation Menu - Below logo and header */}
        <div className="border-t border-gray-200 py-3">
          <div className="flex justify-between items-center">
            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-4 lg:space-x-8 ml-auto">
              <button 
                onClick={() => scrollToSection('solutions')}
                className="text-gray-700 hover:text-[#0000FF] transition-colors duration-200 font-medium text-sm lg:text-base"
              >
                Solutions
              </button>
              <button 
                onClick={() => scrollToSection('process')}
                className="text-gray-700 hover:text-[#0000FF] transition-colors duration-200 font-medium text-sm lg:text-base"
              >
                Process
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="text-gray-700 hover:text-[#0000FF] transition-colors duration-200 font-medium text-sm lg:text-base"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="bg-[#0000FF] text-white px-4 lg:px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium text-sm lg:text-base"
              >
                Let's talk
              </button>
            </nav>

            {/* Mobile menu button */}
            <div className="md:hidden ml-auto">
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
                  onClick={() => scrollToSection('solutions')}
                  className="text-gray-700 hover:text-[#0000FF] transition-colors duration-200 font-medium text-left"
                >
                  Solutions
                </button>
                <button 
                  onClick={() => scrollToSection('process')}
                  className="text-gray-700 hover:text-[#0000FF] transition-colors duration-200 font-medium text-left"
                >
                  Process
                </button>
                <button 
                  onClick={() => scrollToSection('about')}
                  className="text-gray-700 hover:text-[#0000FF] transition-colors duration-200 font-medium text-left"
                >
                  About
                </button>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="bg-[#0000FF] text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium text-left w-fit"
                >
                  Let's talk
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