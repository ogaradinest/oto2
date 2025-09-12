import React from "react";
import { Star, Quote } from "lucide-react";
import { mockTestimonials, mockClients } from "../data/mockData";

const TestimonialsSection = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-[#264D59] mb-6">
            Customers who <span className="text-[#0000FF]">trusted otobrothers</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what businesses leaders like you say about 
            their transformation work with otobrothers.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {mockTestimonials.map((testimonial) => (
            <div 
              key={testimonial.id} 
              className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-[#43978D] group"
            >
              {/* Quote Icon */}
              <div className="flex justify-between items-start mb-6">
                <Quote className="text-[#43978D] opacity-50 group-hover:opacity-100 transition-opacity duration-300" size={32} />
                <div className="flex space-x-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="text-[#F9AD6A] fill-current" size={16} />
                  ))}
                </div>
              </div>

              {/* Content */}
              <blockquote className="text-gray-700 text-lg leading-relaxed mb-6 italic">
                "{testimonial.content}"
              </blockquote>

              {/* Author */}
              <div className="border-t border-gray-200 pt-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-[#43978D] to-[#264D59] rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-lg">
                      {testimonial.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <h4 className="font-bold text-[#264D59]">{testimonial.name}</h4>
                    <p className="text-gray-600 text-sm">
                      {testimonial.role} at {testimonial.company}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Client Logos */}
        <div className="border-t border-gray-200 pt-16">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-[#264D59] mb-4">
              Trusted by Industry Leaders
            </h3>
            <p className="text-gray-600">
              Join the growing number of companies that have transformed their operations with our automation solutions
            </p>
          </div>

          {/* Logo Carousel */}
          <div className="overflow-hidden">
            <div className="flex animate-scroll space-x-12 items-center justify-center">
              {/* First set */}
              {mockClients.map((client, index) => (
                <div key={`first-${index}`} className="flex-shrink-0">
                  <img 
                    src={client.logo} 
                    alt={client.name}
                    className="h-12 w-auto opacity-60 hover:opacity-100 transition-opacity duration-300 filter grayscale hover:grayscale-0"
                  />
                </div>
              ))}
              {/* Duplicate set for seamless loop */}
              {mockClients.map((client, index) => (
                <div key={`second-${index}`} className="flex-shrink-0">
                  <img 
                    src={client.logo} 
                    alt={client.name}
                    className="h-12 w-auto opacity-60 hover:opacity-100 transition-opacity duration-300 filter grayscale hover:grayscale-0"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <div className="bg-gray-50 rounded-2xl p-8 lg:p-12">
            <h3 className="text-3xl font-bold text-[#264D59] mb-4">
              Ready to Join Our Success Stories?
            </h3>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Let's discuss how we can help you achieve similar results with custom automation solutions.
            </p>
            <button 
              onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
              className="bg-red-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-red-600 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              Let's talk
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;