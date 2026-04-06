"use client";

import React, { useState } from "react";

export default function TeamProfile() {
  const teamMembers = [
    {
      name: "MOHAMMAD SAYED",
      titleLine1: "AHMED (RAZA)",
      role: "Senior Partner",
      imageUrl: "https://juralacuity.net/wp-content/uploads/2025/08/3.jpg",
    },
    {
      name: "SAKIB SIKDER",
      titleLine1: "",
      role: "Managing Partner",
      imageUrl: "https://juralacuity.net/wp-content/uploads/2025/08/dwde.jpg",
    },
    {
      name: "AFRIN AHMED",
      titleLine1: "",
      role: "Partner",
      imageUrl: "https://juralacuity.net/wp-content/uploads/2025/08/2.jpg",
    },
    {
      name: "MS. CAMELLIA HU",
      titleLine1: "",
      role: "Foreign Legal Consultant",
      imageUrl: "https://juralacuity.net/wp-content/uploads/2025/08/1.jpg",
    },
  ];

  const [imgErrors, setImgErrors] = useState({});

  const handleImageError = (index) => {
    setImgErrors((prev) => ({ ...prev, [index]: true }));
  };

  return (
    <div id="TeamMember" className="font-['Open_Sans'] w-full relative left-1/2 right-1/2 -mx-[50vw] w-screen bg-[#ffffff]  py-20 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className=" text-[48px] leading-[52px] font-normal text-[#48484A] mb-4">
            <span className="text-[#48484A]">OUR</span>{" "}
            <span className="text-[#d93536]">TEAM</span>
          </h2>
          <p className="text-[#48484A] text-[16px] max-w-2xl mx-auto leading-relaxed normal-case">
            Discover the strength and diversity of our member firms worldwide.
            Together, we deliver exceptional services.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="group relative bg-white/10 backdrop-blur-sm rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-white/20"
            >
              <div className="p-6 text-center">
                {/* Image / Avatar */}
                <div className="relative w-32 h-32 mx-auto mb-5">
                  <div className="absolute inset-0 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full opacity-80 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute inset-[3px] bg-gray-800 rounded-full overflow-hidden">
                    {!imgErrors[index] ? (
                      <img
                        src={member.imageUrl}
                        alt={member.name}
                        className="w-full h-full object-cover"
                        onError={() => handleImageError(index)}
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-gray-700">
                        <span className="text-2xl font-bold text-amber-400">
                          {member.name.charAt(0)}
                          {member.name.split(" ").pop()?.charAt(0) || ""}
                        </span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Name */}
                <h3 className="text-xl font-bold text-white mb-1 tracking-wide">
                  {member.name}
                </h3>

                {/* Additional name line */}
                {member.titleLine1 && (
                  <p className="text-amber-400 font-semibold text-sm mb-2">
                    {member.titleLine1}
                  </p>
                )}

                {/* Role */}
                <p className="text-gray-400 text-sm uppercase tracking-wider">
                  {member.role}
                </p>

                {/* Divider */}
                <div className="w-12 h-px bg-amber-400/50 mx-auto my-4 group-hover:w-20 transition-all duration-300"></div>

                {/* Social Icons */}
                <div className="flex justify-center space-x-3 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <a
                    href="#"
                    className="text-gray-400 hover:text-amber-400 transition-colors"
                  >
                    <svg
                      className="w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-amber-400 transition-colors"
                  >
                    <svg
                      className="w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-500 text-sm">
            — Global expertise, local excellence —
          </p>
        </div>
      </div>
    </div>
  );
}
