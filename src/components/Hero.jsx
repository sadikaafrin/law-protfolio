// components/Hero.jsx
"use client";

import React from "react";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="max-h-[800px] relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-amber-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 md:py-4 lg:py-3">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-center md:text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-amber-500/10 backdrop-blur-sm border border-amber-500/30 rounded-full px-4 py-2 mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
              </span>
              <span className="text-amber-400 text-sm font-medium tracking-wide">
                Top Law Firm in Dhaka, Bangladesh
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Corporate Legal Services
              <span className="block text-amber-400 mt-2">in Bangladesh</span>
            </h1>

            {/* Description */}
            <p className="text-lg text-gray-300 mb-8 leading-relaxed max-w-lg mx-auto md:mx-0">
              Jural Acuity is recognized as one of the best law firms in Dhaka,
              Bangladesh. Known for our professional work and deep
              understanding, we are the first choice for companies looking for
              legal services in Bangladesh.
            </p>

            {/* Trust Indicators */}
            <div className="flex flex-wrap gap-4 justify-center md:justify-start mb-8">
              <div className="flex items-center gap-2 text-gray-400">
                <svg
                  className="w-5 h-5 text-amber-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>15+ Years Excellence</span>
              </div>
              <div className="flex items-center gap-2 text-gray-400">
                <svg
                  className="w-5 h-5 text-amber-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>100+ Corporate Clients</span>
              </div>
              <div className="flex items-center gap-2 text-gray-400">
                <svg
                  className="w-5 h-5 text-amber-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>99% Success Rate</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <button className="group relative px-8 py-3.5 bg-amber-500 hover:bg-amber-600 text-slate-900 font-semibold rounded-lg transition-all duration-300 shadow-lg shadow-amber-500/25 hover:shadow-amber-500/40">
                Get In Touch
                <span className="inline-block ml-2 transition-transform group-hover:translate-x-1">
                  →
                </span>
              </button>
            </div>
          </div>

          {/* Right Image / Visual */}
          <div className="relative mt-10 md:mt-0">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-amber-500/10">
              <div className="absolute inset-0 bg-gradient-to-tr from-amber-500/20 to-transparent z-10"></div>
              <img
                src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=600"
                alt="Law Firm Office"
                className="w-full h-auto object-cover"
              />
            </div>

            {/* Floating Card */}
            <div className="absolute -bottom-5 -left-5 bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20 shadow-xl">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-amber-500 rounded-lg flex items-center justify-center">
                  <svg
                    className="w-5 h-5 text-slate-900"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9 12.75L7.5 11.25L6.25 12.5L9 15.25L14.75 9.5L13.5 8.25L9 12.75Z" />
                  </svg>
                </div>
                <div>
                  <p className="text-white text-sm font-semibold">
                    Legal Excellence
                  </p>
                  <p className="text-gray-300 text-xs">
                    Trusted by Industry Leaders
                  </p>
                </div>
              </div>
            </div>

            {/* Floating Card 2 */}
            <div className="absolute -top-5 -right-5 bg-slate-800/90 backdrop-blur-md rounded-xl p-3 border border-gray-700 shadow-xl">
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  {[1, 2, 3].map((i) => (
                    <div
                      key={i}
                      className="w-8 h-8 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 border-2 border-slate-800 flex items-center justify-center text-xs font-bold text-white"
                    >
                      {String.fromCharCode(64 + i)}
                    </div>
                  ))}
                </div>
                <div>
                  <p className="text-white text-xs font-semibold">
                    50+ Expert Lawyers
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
