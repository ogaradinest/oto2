import React, { useState } from "react";
import { Send, MapPin, Phone, Mail, CheckCircle } from "lucide-react";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    role: '',
    company: '',
    companySize: '',
    revenue: '',
    budget: '',
    services: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Mock form submission
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-[#264D59] mb-6">
            Tell us where <span className="text-[#43978D]">you're at</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to transform your business with automation? Let's start the conversation. 
            Share your details and we'll show you exactly how we can help.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-3xl shadow-xl p-8 lg:p-12">
              {isSubmitted ? (
                <div className="text-center py-12">
                  <CheckCircle className="text-[#43978D] mx-auto mb-4" size={64} />
                  <h3 className="text-2xl font-bold text-[#264D59] mb-4">Thank You!</h3>
                  <p className="text-gray-600">
                    We've received your inquiry and will get back to you within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name and Email */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-[#264D59] mb-2">
                        Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#43978D] focus:border-transparent transition-all duration-200"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-[#264D59] mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#43978D] focus:border-transparent transition-all duration-200"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  {/* Role and Company */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-[#264D59] mb-2">
                        Role in Company
                      </label>
                      <input
                        type="text"
                        name="role"
                        value={formData.role}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#43978D] focus:border-transparent transition-all duration-200"
                        placeholder="CEO, CTO, Operations Manager, etc."
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-[#264D59] mb-2">
                        Company Name *
                      </label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#43978D] focus:border-transparent transition-all duration-200"
                        placeholder="Your company name"
                      />
                    </div>
                  </div>

                  {/* Company Size and Revenue */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-[#264D59] mb-2">
                        Company Size
                      </label>
                      <select
                        name="companySize"
                        value={formData.companySize}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#43978D] focus:border-transparent transition-all duration-200"
                      >
                        <option value="">Select company size</option>
                        <option value="Less than 20">Less than 20</option>
                        <option value="20-50">20-50</option>
                        <option value="50-100">50-100</option>
                        <option value="100-500">100-500</option>
                        <option value="More than 500">More than 500</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-[#264D59] mb-2">
                        Annual Revenue
                      </label>
                      <select
                        name="revenue"
                        value={formData.revenue}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#43978D] focus:border-transparent transition-all duration-200"
                      >
                        <option value="">Select revenue range</option>
                        <option value="Less than $100K">Less than $100K</option>
                        <option value="$100K-$500K">$100K-$500K</option>
                        <option value="$500K-$1M">$500K-$1M</option>
                        <option value="$1M-$2M">$1M-$2M</option>
                        <option value="More than $2M">More than $2M</option>
                      </select>
                    </div>
                  </div>

                  {/* Budget and Services */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-[#264D59] mb-2">
                        Project Budget
                      </label>
                      <select
                        name="budget"
                        value={formData.budget}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#43978D] focus:border-transparent transition-all duration-200"
                      >
                        <option value="">Select budget range</option>
                        <option value="Less than $10K">Less than $10K</option>
                        <option value="$10K-$50K">$10K-$50K</option>
                        <option value="$50K-$100K">$50K-$100K</option>
                        <option value="More than $100K">More than $100K</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-[#264D59] mb-2">
                        Services of Interest
                      </label>
                      <select
                        name="services"
                        value={formData.services}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#43978D] focus:border-transparent transition-all duration-200"
                      >
                        <option value="">Select service</option>
                        <option value="Business Process Automation">Business Process Automation</option>
                        <option value="Sales & Marketing Automation">Sales & Marketing Automation</option>
                        <option value="Customer Support Automation">Customer Support Automation</option>
                        <option value="HR & Operations Automation">HR & Operations Automation</option>
                        <option value="Custom Automation Solutions">Custom Automation Solutions</option>
                        <option value="Full Automation Assessment">Full Automation Assessment</option>
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-sm font-semibold text-[#264D59] mb-2">
                      Message
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#43978D] focus:border-transparent transition-all duration-200 resize-none"
                      placeholder="Tell us more about your automation needs and current challenges..."
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-[#43978D] to-[#264D59] text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-[#264D59] hover:to-[#43978D] transition-all duration-200 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl"
                  >
                    Send Inquiry
                    <Send size={20} />
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Office Locations */}
            <div className="bg-white rounded-3xl shadow-xl p-8">
              <h3 className="text-2xl font-bold text-[#264D59] mb-6">Our Offices</h3>
              
              {/* Bucharest Office */}
              <div className="mb-8 p-6 bg-gradient-to-br from-[#43978D] to-[#264D59] rounded-2xl text-white">
                <div className="flex items-center mb-4">
                  <MapPin className="text-[#F9E07F]" size={24} />
                  <h4 className="text-xl font-bold ml-3">Bucharest, Romania</h4>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <Phone className="text-[#F9AD6A]" size={16} />
                    <span className="ml-3">+40 722 465 536</span>
                  </div>
                  <div className="flex items-center">
                    <Mail className="text-[#F9AD6A]" size={16} />
                    <span className="ml-3">cris@otobrothers.com</span>
                  </div>
                </div>
              </div>

              {/* London Office */}
              <div className="p-6 bg-gradient-to-br from-[#F9AD6A] to-[#D46C4E] rounded-2xl text-white">
                <div className="flex items-center mb-4">
                  <MapPin className="text-white" size={24} />
                  <h4 className="text-xl font-bold ml-3">London, United Kingdom</h4>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <Phone className="text-gray-100" size={16} />
                    <span className="ml-3">+44 7577 774 805</span>
                  </div>
                  <div className="flex items-center">
                    <Mail className="text-gray-100" size={16} />
                    <span className="ml-3">dan@otobrothers.com</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Why Choose Us */}
            <div className="bg-white rounded-3xl shadow-xl p-8">
              <h3 className="text-2xl font-bold text-[#264D59] mb-6">Why Choose otobrothers?</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-[#43978D] rounded-full mt-2"></div>
                  <p className="text-gray-600">Proven track record with 435+ successful implementations</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-[#F9AD6A] rounded-full mt-2"></div>
                  <p className="text-gray-600">Custom solutions tailored to your specific business needs</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-[#D46C4E] rounded-full mt-2"></div>
                  <p className="text-gray-600">Rapid implementation with measurable ROI</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-[#264D59] rounded-full mt-2"></div>
                  <p className="text-gray-600">Ongoing support and training for your team</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;