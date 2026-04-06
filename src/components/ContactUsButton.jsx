import React from "react";

export default function ContactUsButton() {
  return (
    <div className="font-['Open_Sans'] w-full relative left-1/2 right-1/2 -mx-[50vw] w-screen normal-case">
      <div className="bg-[#ffffff] bg-[url('/contactpage.png')] bg-cover bg-center bg-no-repeat h-[500px] w-full mt-2">
        <div className="flex justify-between gap-6 py-16 px-6 md:px-16">
          <div className="space-y-7">
            {/* Heading */}
            <h2 className="text-white font-normal text-[36px] leading-[40px] normal-case">
              <span className="font-bold">
                Our Expert Professional Law Team
              </span>{" "}
              is Always Ready to Serve You the Best{" "}
              <span className="font-bold italic">Solution!</span>
            </h2>

            {/* Body */}
            <p
              className="text-slate-300 text-base leading-relaxed max-w-md"
              style={{ fontFamily: "'Lato', sans-serif" }}
            >
              At Jural Acuity, our dedicated team of professional lawyers is
              always prepared to provide you with the finest solutions, ensuring
              your legal needs are met with excellence and precision. Contact us
              today to experience top-notch legal support.
            </p>

            {/* CTA Button */}
            <button className="group inline-flex items-center gap-2 text-[#D93434] bg-white   text-sm px-6 py-2.5 rounded-md font-semibold  ">
              <span>Contact Us</span>
              <svg
                className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2.5}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </button>
          </div>
          <div className=" mt-4 flex flex-wrap relative w-full p-10 bg-white items-center align-content-center transition-all duration-300">
            {/* "Get a Free Consultation" heading */}
            <p className="w-full text-[#161D27] font-bold text-2xl mb-2">
              Get a Free Consultation
            </p>

            {/* Description text */}
            <div className="leading-[24px] text-[#909090] font-[400px] text-[20px]  mb-4">
              Take advantage of our offer for a free consultation and let us
              guide you towards effective legal solutions tailored to your
              specific needs.
            </div>

            {/* Phone icon + Call Us row */}
            <div className="flex items-center gap-3">
              {/* Phone icon */}
              <div className="flex-shrink-0 bg-red-500 p-5">
                <svg
                  aria-hidden="true"
                  className="w-5 h-5 text-gray-700"
                  fill="currentColor"
                  viewBox="0 0 512 512"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M497.39 361.8l-112-48a24 24 0 0 0-28 6.9l-49.6 60.6A370.66 370.66 0 0 1 130.6 204.11l60.6-49.6a23.94 23.94 0 0 0 6.9-28l-48-112A24.16 24.16 0 0 0 122.6.61l-104 24A24 24 0 0 0 0 48c0 256.5 207.9 464 464 464a24 24 0 0 0 23.4-18.6l24-104a24.29 24.29 0 0 0-14.01-27.6z" />
                </svg>
              </div>

              {/* Call Us On + number */}
              <div className="text-sm text-gray-600">
                Call Us On:
                <br />
                <strong className="text-[#161d27] text-[30px] font-bold leading-tight">
                  +8801707108000
                </strong>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
