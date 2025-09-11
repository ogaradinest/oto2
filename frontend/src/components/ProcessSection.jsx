import React from "react";
import { Search, Users, Settings, ArrowRight } from "lucide-react";

const ProcessSection = () => {
  const processSteps = [
    {
      step: "IDENTIFY",
      title: "We help you identify high-impact automation opportunities",
      description: "and build a step-by-step Business Automation strategy to bring them to life.",
      icon: Search,
      color: "from-[#43978D] to-[#264D59]",
      iconBg: "bg-[#F9E07F]",
      iconColor: "text-[#264D59]"
    },
    {
      step: "EDUCATE", 
      title: "We train and support your team with the right tools and know-how",
      description: "to embed automation across your entire organization.",
      icon: Users,
      color: "from-[#F9AD6A] to-[#D46C4E]",
      iconBg: "bg-[#264D59]",
      iconColor: "text-white"
    },
    {
      step: "DEVELOP",
      title: "We leverage our extensive experience and network to develop custom automation systems",
      description: "that are proven to move the needle inside your business.",
      icon: Settings,
      color: "from-[#264D59] to-[#43978D]",
      iconBg: "bg-[#F9E07F]",
      iconColor: "text-[#264D59]"
    }
  ];

  return (
    <section id="process" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-[#264D59] mb-6">
            We spend our days guiding companies
            <br />
            through our 3-step{" "}
            <span className="text-[#43978D]">Business Automation Journey.</span>
          </h2>
        </div>

        {/* Process Steps */}
        <div className="space-y-12 lg:space-y-20">
          {processSteps.map((process, index) => (
            <div key={index} className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
              {/* Content */}
              <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                <div className="flex items-center space-x-4 mb-6">
                  <div className={`${process.iconBg} p-4 rounded-2xl`}>
                    <process.icon className={`${process.iconColor}`} size={32} />
                  </div>
                  <span className="text-2xl font-bold text-gray-400">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </div>
                
                <div>
                  <h3 className="text-3xl lg:text-4xl font-bold text-[#264D59] mb-4">
                    {process.step}
                  </h3>
                  <p className="text-xl text-gray-700 leading-relaxed">
                    {process.title}{" "}
                    <span className="text-[#43978D] font-medium">
                      {process.description}
                    </span>
                  </p>
                </div>

                {/* CTA Button for last step */}
                {index === processSteps.length - 1 && (
                  <button 
                    onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
                    className="bg-[#43978D] text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[#264D59] transition-all duration-200 flex items-center gap-2 group mt-8"
                  >
                    Start Your Automation Journey
                    <ArrowRight className="group-hover:translate-x-1 transition-transform duration-200" size={20} />
                  </button>
                )}
              </div>

              {/* Visual Element */}
              <div className={`relative ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                <div className={`relative h-80 lg:h-96 rounded-3xl bg-gradient-to-br ${process.color} p-8 flex items-center justify-center overflow-hidden`}>
                  {/* Background decoration */}
                  <div className="absolute inset-0 opacity-20">
                    <div className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full blur-2xl"></div>
                    <div className="absolute bottom-10 right-10 w-24 h-24 bg-white rounded-full blur-xl"></div>
                  </div>
                  
                  {/* Large Icon */}
                  <div className="relative z-10 bg-white bg-opacity-20 p-12 rounded-full backdrop-blur-sm">
                    <process.icon className="text-white" size={80} />
                  </div>
                  
                  {/* Step Number */}
                  <div className="absolute top-6 right-6 bg-white bg-opacity-20 backdrop-blur-sm rounded-full w-16 h-16 flex items-center justify-center">
                    <span className="text-white font-bold text-xl">
                      {index + 1}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Message */}
        <div className="text-center mt-20 pt-12 border-t border-gray-200">
          <h3 className="text-3xl lg:text-4xl font-bold text-[#264D59] mb-4">
            We don't sell <span className="text-[#D46C4E]">Automation.</span>
          </h3>
          <h3 className="text-3xl lg:text-4xl font-bold text-[#264D59]">
            We sell <span className="text-[#43978D]">Results.</span>
          </h3>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;