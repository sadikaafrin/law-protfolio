"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    // <div className="font-['Open_Sans'] w-full relative left-1/2 right-1/2 -mx-[50vw] w-screen">
    <section className="w-full relative left-1/2 right-1/2 -mx-[50vw] w-screen font-['Open_Sans'] relative  min-h-[600px] flex items-center overflow-hidden bg-[#bf3030] text-white py-20 px-6 pr-0"> 
      {/* Decorative Background Blur */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-white/5 blur-[120px] -z-10" />

      <div className="max-w-7xl  mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">
        {/* Left Column: Content */}
        <div className="space-y-6 normal-case animate-in fade-in slide-in-from-left duration-1000">
          <h1 className="text-[40px] font-bold text-[#FFFFFF]   ">
            Top Law Firm in Dhaka, Bangladesh<br />
            <span >Bangladesh</span> for Corporate
            Legal Services
          </h1>

          <p className="text-[16px]  leading-[22px] text-[#FFFFFF] max-w-xl">
            Jural Acuity is recognized as one of the best law firms in Dhaka,
            Bangladesh. Known for our professional work and deep understanding,
            we are the first choice for companies looking for legal services.
          </p>

          <p className="text-[32px] font-bold text-white">
            Committed. Informed. Effective.
          </p>

          <div className="pt-4">
            <div className="">
              <Link
                href="tel:+8801707108000"
                className="inline-block bg-white text-[#D93434] font-semibold text-sm px-6 py-2.5 rounded-md shadow-md transition-all duration-300 hover:bg-gray-100 hover:shadow-lg hover:-translate-y-0.5"
              >
                Get In Touch
              </Link>
            </div>
          </div>
        </div>

        {/* Right Column: Image */}
        <div className="hidden lg:block relative group w-full aspect-video">
          <div className="relative h-full w-full  overflow-hidden shadow-2xl border border-white/10">
            {/* If you still get a 404, try a placeholder URL first to verify the code works */}
            <Image
              src="/hero-image.jpg"
              alt="Jural Acuity Office"
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
