'use client';

import { Check, Shield, Zap } from 'lucide-react';

export default function Pricing() {
  const features = [
    'Unlimited product ratings and reviews',
    'Access to trending products dashboard',
    'Social discovery and connections',
    'Expert curated collections',
    'Priority customer support',
    'Early access to new features',
    'Ad-free browsing experience',
    'Advanced search and filtering',
  ];

  const trustIndicators = [
    { icon: <Shield className="h-6 w-6" />, text: 'Secure Payment' },
    { icon: <Zap className="h-6 w-6" />, text: 'Instant Access' },
    { icon: <Check className="h-6 w-6" />, text: '30-Day Guarantee' },
  ];

  return (
    <section id="pricing" className="py-24 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-6">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Get unlimited access to all features for one affordable price
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden transform hover:scale-105 transition-all duration-300">
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 px-8 py-6">
              <h3 className="text-3xl font-bold text-white text-center">
                Premium Membership
              </h3>
              <p className="text-blue-100 text-center mt-2">
                Everything you need to shop smarter
              </p>
            </div>

            <div className="p-12">
              <div className="text-center mb-8">
                <div className="flex items-center justify-center mb-4">
                  <span className="text-6xl font-bold text-gray-900">$29</span>
                  <span className="text-2xl text-gray-600 ml-2">/month</span>
                </div>
                <p className="text-gray-600">Billed monthly, cancel anytime</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start">
                    <Check className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>

              <a
                href="https://buy.stripe.com/test_cNicN778gcvQ2NZ3gV6Ri00"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-center px-8 py-4 rounded-lg font-bold text-lg hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Start Your Membership Now
              </a>

              <div className="flex flex-wrap items-center justify-center gap-8 mt-8 pt-8 border-t border-gray-200">
                {trustIndicators.map((indicator, index) => (
                  <div key={index} className="flex items-center text-gray-600">
                    <div className="text-blue-600 mr-2">{indicator.icon}</div>
                    <span className="font-medium">{indicator.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="text-center mt-8">
            <p className="text-gray-600">
              Questions about pricing?{' '}
              <a href="#contact" className="text-blue-600 hover:text-blue-700 font-medium">
                Contact us
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}