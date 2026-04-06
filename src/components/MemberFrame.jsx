import React from "react";
import Image from "next/image";

export default function MemberFrame() {
  return (
    <div className="font-['Open_Sans'] w-full relative left-1/2 right-1/2 -mx-[50vw] w-screen bg-gray-50  antialiased text-[#333] normal-case">
      <h2 className="text-5xl text-[#D93434] text-center">MEMBER FIRM OF</h2>
      <div
        className="mt-3 elementor-element elementor-element-4d8759e0 elementor-widget__width-initial elementor-widget elementor-widget-heading"
        data-id="4d8759e0"
        data-element_type="widget"
        data-widget_type="heading.default"
      >
        <p className="text-[16px] font-normal text-[#48484A]  mx-auto text-center">
          Discover the strength and diversity of our member firms worldwide.
          Together, we deliver exceptional services.
        </p>{" "}
      </div>
      <section className="relative w-full pt-[30px]">
        <div className="container mx-auto px-4 max-w-[1200px]">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Column 1 */}
            <div className="relative">
              <div className="relative w-full overflow-hidden">
                <Image
                  src="member/member.jpg"
                  alt="Member 1"
                  width={157}
                  height={119}
                  className=""
                  loading="lazy"
                  decoding="async"
                  unoptimized 
                />
              </div>
            </div>

            {/* Column 2 */}
            <div className="relative">
              <div className="relative w-full overflow-hidden">
                <Image
                  src="member/member2.jpg"
                  alt="Member 2"
                  width={160}
                  height={119}
                  className=""
                  loading="lazy"
                  decoding="async"
                  unoptimized
                />
              </div>
            </div>

            {/* Column 3 */}
            <div className="relative">
              <div className="relative w-full overflow-hidden">
                <Image
                  src="member/member3.jpg"
                  alt="Member 3"
                  width={175}
                  height={119}
                  className=""
                  loading="lazy"
                  decoding="async"
                  unoptimized
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
