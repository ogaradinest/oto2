import React, { useState } from "react";
import { ChevronDown, ChevronUp, Zap, Users, HeadphonesIcon, Calculator, UserCheck, BarChart3, Building } from "lucide-react";
import { mockServices } from "../data/mockData";

const ServicesSection = () => {
  const [expandedService, setExpandedService] = useState(null);

  const toggleService = (serviceId) => {
    setExpandedService(expandedService === serviceId ? null : serviceId);
  };

  const getServiceIcon = (category) => {
    const iconMap = {
      "AI-Powered Business Process Automation": Zap,
      "Sales & Marketing Automation": Users,
      "Customer Experience & Support": HeadphonesIcon,
      "Finance & Operations": Calculator,
      "HR & People Ops Automation": UserCheck,
      "Data & Analytics Automation": BarChart3,
      "Industry-Specific Automations": Building
    };
    return iconMap[category] || Zap;
  };

  const getServiceColor = (index) => {
    const colors = [
      { bg: "bg-[#43978D]", hover: "hover:bg-[#264D59]", accent: "border-[#43978D]" },
      { bg: "bg-[#F9AD6A]", hover: "hover:bg-[#D46C4E]", accent: "border-[#F9AD6A]" },
      { bg: "bg-[#264D59]", hover: "hover:bg-[#43978D]", accent: "border-[#264D59]" },
      { bg: "bg-[#D46C4E]", hover: "hover:bg-[#F9AD6A]", accent: "border-[#D46C4E]" },
      { bg: "bg-[#43978D]", hover: "hover:bg-[#264D59]", accent: "border-[#43978D]" },
      { bg: "bg-[#F9AD6A]", hover: "hover:bg-[#D46C4E]", accent: "border-[#F9AD6A]" },
      { bg: "bg-[#264D59]", hover: "hover:bg-[#43978D]", accent: "border-[#264D59]" }
    ];
    return colors[index % colors.length];
  };

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-[#264D59] mb-6">
            <span className="text-[#43978D]">otomation Solutions</span>
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {mockServices.map((service, index) => {
            const IconComponent = getServiceIcon(service.category);
            const colors = getServiceColor(index);
            const isExpanded = expandedService === service.id;
            
            return (
              <div 
                key={service.id} 
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                {/* Service Header */}
                <div 
                  className={`${colors.bg} ${colors.hover} p-6 cursor-pointer transition-all duration-200`}
                  onClick={() => toggleService(service.id)}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="bg-white bg-opacity-20 p-3 rounded-xl backdrop-blur-sm">
                        <IconComponent className="text-white" size={28} />
                      </div>
                      <h3 className="text-xl font-bold text-white">
                        {service.category}
                      </h3>
                    </div>
                    <div className="bg-white bg-opacity-20 p-2 rounded-lg backdrop-blur-sm">
                      {isExpanded ? (
                        <ChevronUp className="text-white" size={20} />
                      ) : (
                        <ChevronDown className="text-white" size={20} />
                      )}
                    </div>
                  </div>
                </div>

                {/* Service Content - Collapsible */}
                <div className={`overflow-hidden transition-all duration-300 ${isExpanded ? 'max-h-96' : 'max-h-0'}`}>
                  <div className="p-6 space-y-4">
                    {service.services.map((item, itemIndex) => {
                      const [title, description] = item.split(': ');
                      return (
                        <div key={itemIndex} className="flex items-start space-x-3">
                          <div className={`w-2 h-2 rounded-full ${colors.bg} mt-2 flex-shrink-0`}></div>
                          <div>
                            <h4 className="font-semibold text-[#264D59] text-sm">
                              {title}
                            </h4>
                            {description && (
                              <p className="text-gray-600 text-sm mt-1">
                                {description}
                              </p>
                            )}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Preview when collapsed */}
                {!isExpanded && (
                  <div className="p-6 pt-0">
                    <p className="text-gray-600 text-sm">
                      Click to explore {service.services.length} automation solutions in this category
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-[#43978D] to-[#264D59] rounded-3xl p-8 lg:p-12">
            <h3 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
              Let's discuss which automation solutions would have the biggest impact on your operations.
            </p>
            <button 
              onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
              className="bg-[#F9AD6A] text-[#264D59] px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[#F9E07F] transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              Schedule a Consultation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;