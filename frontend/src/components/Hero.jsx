import React from "react";
import { ArrowRight, Zap, Target, Cog } from "lucide-react";

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
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Content */}
          <div className="space-y-6 lg:space-y-8 text-center lg:text-left">
            <div className="space-y-4 lg:space-y-6">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight text-center">
                <span className="text-[#F9E07F]">otomation</span>, at the center
                <br />
                of everything we do.
                <br />
                <span className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl">apart from ping-pong.</span>
                <br />
                <span className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl text-[#F9AD6A]">that's still analog.</span>
              </h1>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button 
                onClick={scrollToContact}
                className="bg-[#F9AD6A] text-[#264D59] px-6 lg:px-8 py-3 lg:py-4 rounded-lg font-semibold text-base lg:text-lg hover:bg-[#F9E07F] transition-all duration-200 flex items-center justify-center gap-2 group"
              >
                Start Your Journey
                <ArrowRight className="group-hover:translate-x-1 transition-transform duration-200" size={20} />
              </button>
              
              <button 
                onClick={() => document.getElementById('process').scrollIntoView({ behavior: 'smooth' })}
                className="border-2 border-white text-white px-6 lg:px-8 py-3 lg:py-4 rounded-lg font-semibold text-base lg:text-lg hover:bg-white hover:text-[#264D59] transition-all duration-200"
              >
                Learn Our Process
              </button>
            </div>

            {/* Key benefits */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 lg:gap-6 pt-6 lg:pt-8">
              <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-3">
                <div className="bg-[#F9E07F] p-2 rounded-lg flex-shrink-0">
                  <Zap className="text-[#264D59]" size={20} />
                </div>
                <div className="text-center sm:text-left">
                  <h3 className="font-semibold text-base lg:text-lg">Rapid Results</h3>
                  <p className="text-gray-300 text-xs lg:text-sm">Implementation in weeks, not months</p>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-3">
                <div className="bg-[#F9AD6A] p-2 rounded-lg flex-shrink-0">
                  <Target className="text-[#264D59]" size={20} />
                </div>
                <div className="text-center sm:text-left">
                  <h3 className="font-semibold text-base lg:text-lg">Proven Process</h3>
                  <p className="text-gray-300 text-xs lg:text-sm">435+ successful implementations</p>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-3">
                <div className="bg-[#D46C4E] p-2 rounded-lg flex-shrink-0">
                  <Cog className="text-white" size={20} />
                </div>
                <div className="text-center sm:text-left">
                  <h3 className="font-semibold text-base lg:text-lg">Custom Solutions</h3>
                  <p className="text-gray-300 text-xs lg:text-sm">Tailored to your business needs</p>
                </div>
              </div>
            </div>
          </div>

          {/* Header Image */}
          <div className="flex justify-center lg:justify-end order-first lg:order-last">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-[#F9E07F] to-[#F9AD6A] rounded-3xl blur-2xl opacity-30 transform rotate-6"></div>
              <img 
                src="https://customer-assets.emergentagent.com/job_automate-business/artifacts/gjugm34k_header.png" 
                alt="Business Automation" 
                className="relative z-10 max-w-full h-auto rounded-3xl shadow-2xl transform hover:scale-105 transition-transform duration-300 max-h-64 sm:max-h-80 lg:max-h-96"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;