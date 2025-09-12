import React from "react";
import { ArrowRight, Zap, Target, DollarSign } from "lucide-react";

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative bg-gradient-to-br from-[#264D59] via-[#43978D] to-[#264D59] text-white overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#F9E07F] rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#F9AD6A] rounded-full blur-3xl"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="flex flex-col items-center text-center">
          {/* Content */}
          <div className="space-y-6 lg:space-y-8 max-w-4xl">
            <div className="space-y-4 lg:space-y-6">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight text-center">
                <span className="text-[#0000FF]">otomation</span>
                <br />
                at the center of everything* we do.
                <br />
                <span className="text-lg sm:text-xl lg:text-2xl xl:text-3xl">*apart from ping-pong. that's still analog.</span>
              </h1>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={scrollToContact}
                className="bg-[#0000FF] text-white px-6 lg:px-8 py-3 lg:py-4 rounded-lg font-semibold text-base lg:text-lg hover:bg-blue-700 transition-all duration-200 flex items-center justify-center gap-2 group"
              >
                Let's talk
                <ArrowRight className="group-hover:translate-x-1 transition-transform duration-200" size={20} />
              </button>
            </div>

            {/* Key benefits */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 lg:gap-6 pt-6 lg:pt-8">
              <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-3">
                <div className="bg-[#F9E07F] p-2 rounded-lg flex-shrink-0">
                  <Zap className="text-[#264D59]" size={20} />
                </div>
                <div className="text-center sm:text-left">
                  <h3 className="font-semibold text-base lg:text-lg">FAST</h3>
                  <p className="text-gray-300 text-xs lg:text-sm">Implementation in weeks</p>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-3">
                <div className="bg-[#F9AD6A] p-2 rounded-lg flex-shrink-0">
                  <Target className="text-[#264D59]" size={20} />
                </div>
                <div className="text-center sm:text-left">
                  <h3 className="font-semibold text-base lg:text-lg">PROVEN</h3>
                  <p className="text-gray-300 text-xs lg:text-sm">21 successful implementations</p>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-3">
                <div className="bg-[#D46C4E] p-2 rounded-lg flex-shrink-0">
                  <DollarSign className="text-white" size={20} />
                </div>
                <div className="text-center sm:text-left">
                  <h3 className="font-semibold text-base lg:text-lg">ROI</h3>
                  <p className="text-gray-300 text-xs lg:text-sm">+$250k savings delivered</p>
                </div>
              </div>
            </div>
          </div>

          {/* Header Image - Removed to fix alignment */}
          <div className="hidden">
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;