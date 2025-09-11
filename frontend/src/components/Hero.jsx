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
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                We put <span className="text-[#F9E07F]">Automation</span>
                <br />
                at the center
                <br />
                of
                <br />
                <span className="text-[#F9AD6A]">everything we do.</span>
              </h1>
              
              <p className="text-xl lg:text-2xl text-gray-200 max-w-2xl">
                Your trusted partner in becoming an automation-first company. 
                We guide businesses through our proven 3-step Business Automation Journey.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={scrollToContact}
                className="bg-[#F9AD6A] text-[#264D59] px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[#F9E07F] transition-all duration-200 flex items-center justify-center gap-2 group"
              >
                Start Your Journey
                <ArrowRight className="group-hover:translate-x-1 transition-transform duration-200" size={20} />
              </button>
              
              <button 
                onClick={() => document.getElementById('process').scrollIntoView({ behavior: 'smooth' })}
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-[#264D59] transition-all duration-200"
              >
                Learn Our Process
              </button>
            </div>

            {/* Key benefits */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8">
              <div className="flex items-center space-x-3">
                <div className="bg-[#F9E07F] p-2 rounded-lg">
                  <Zap className="text-[#264D59]" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Rapid Results</h3>
                  <p className="text-gray-300 text-sm">Implementation in weeks, not months</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="bg-[#F9AD6A] p-2 rounded-lg">
                  <Target className="text-[#264D59]" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Proven Process</h3>
                  <p className="text-gray-300 text-sm">435+ successful implementations</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="bg-[#D46C4E] p-2 rounded-lg">
                  <Cog className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Custom Solutions</h3>
                  <p className="text-gray-300 text-sm">Tailored to your business needs</p>
                </div>
              </div>
            </div>
          </div>

          {/* Header Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-[#F9E07F] to-[#F9AD6A] rounded-3xl blur-2xl opacity-30 transform rotate-6"></div>
              <img 
                src="https://customer-assets.emergentagent.com/job_523ddc15-12aa-4a04-8ea3-751c2ec002de/artifacts/gjugm34k_header.png" 
                alt="Business Automation" 
                className="relative z-10 max-w-full h-auto rounded-3xl shadow-2xl transform hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;