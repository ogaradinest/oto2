import React from "react";
import { mockStats } from "../data/mockData";

const StatsSection = () => {
  return (
    <section className="py-20 bg-[#264D59] text-white overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-96 h-96 bg-[#F9E07F] rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-[#F9AD6A] rounded-full blur-3xl"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            The best <span className="text-red-500">otomation systems</span>
            <br />
            are working in sync. <span className="text-[#F9AD6A]">like owl's eyes.</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Our track record speaks for itself. Here's the impact we've delivered 
            for businesses just like yours.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {mockStats.map((stat, index) => (
            <div 
              key={index} 
              className="text-center group hover:scale-105 transition-transform duration-300"
            >
              <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-8 hover:bg-opacity-20 transition-all duration-300">
                <div className="text-5xl lg:text-6xl font-bold text-[#F9E07F] mb-4 group-hover:scale-110 transition-transform duration-300">
                  {stat.number}
                </div>
                <div className="h-1 w-16 bg-gradient-to-r from-[#F9AD6A] to-[#D46C4E] mx-auto mb-4 rounded-full"></div>
                <h3 className="text-xl font-bold mb-2">{stat.label}</h3>
                <p className="text-gray-300 text-sm">{stat.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <button 
            onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
            className="bg-red-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-red-600 transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            Let's talk
          </button>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;