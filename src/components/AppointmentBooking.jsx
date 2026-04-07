// components/AppointmentBooking.js
"use client";

import Link from "next/link";
import React, { useState } from "react";

export default function AppointmentBooking() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);
    setTimeout(() => {
      console.log("Form submitted:", formData);
      setIsSubmitting(false);
      setSubmitStatus("success");
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
      setTimeout(() => setSubmitStatus(null), 5000);
    }, 1500);
  };

  const inputClass =
    "w-full bg-transparent border-0 border-b border-white/40 text-white placeholder-white/60 text-sm py-2 focus:outline-none focus:border-red-500 transition-colors duration-200";

  return (
    <div
      id="AppointmentBooking"
      className="w-full bg-cover bg-center bg-no-repeat py-10 px-4 md:px-8 scroll-mt-20 font-['Open_Sans'] w-full relative left-1/2 right-1/2 -mx-[50vw] w-screen normal-case"
      style={{ backgroundImage: "url('/contact-background.png')" }}
    >
      <div className="max-w-7xl mx-auto p-5">
        <div className="bg-black/80 px-10 py-12 rounded-sm">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-8">
            {/* Full Name */}
            <div>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Full Name *"
                className={inputClass}
                required
              />
            </div>

            {/* Email */}
            <div>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email Address *"
                className={inputClass}
                required
              />
            </div>

            {/* Phone */}
            <div>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone Number *"
                className={inputClass}
                required
              />
            </div>

            {/* Subject */}
            <div>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Subject *"
                className={inputClass}
                required
              />
            </div>

            {/* Message — full width */}
            <div className="md:col-span-2">
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message *"
                rows={4}
                className={`${inputClass} resize-none`}
                required
              />
            </div>
          </div>

          {/* Submit */}
          <div className="mt-10 text-center">
            <button
              onClick={handleSubmit}
              disabled={isSubmitting}
              className="bg-[#FFFFFF] text-red-500 text-xs font-semibold tracking-widest uppercase px-8 py-3 transition-colors duration-200 disabled:opacity-60 disabled:cursor-not-allowed hover:bg-red-500 hover:text-white cursor-pointer"
            >
              {isSubmitting ? "SENDING..." : "GET AN APPOINTMENT"}
            </button>
          </div>

          {/* Status messages */}
          {submitStatus === "success" && (
            <p className="mt-4 text-center text-green-400 text-sm">
              Your appointment request has been submitted!
            </p>
          )}
          {submitStatus === "error" && (
            <p className="mt-4 text-center text-red-400 text-sm">
              Something went wrong. Please try again.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
