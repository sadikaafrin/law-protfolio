import Image from "next/image";

const images = [
  "/gallary/galary.jpg",
  "/gallary/gallary2.jpg",
  "/gallary/gallary3.jpg",
  "/gallary/gallary4.jpg",
  "/gallary/gallary5.jpg",
  "/gallary/gallary6.jpg",
  "/gallary/gallary7.jpg",
  "/gallary/gallary8.jpg",
  "/gallary/gallary9.jpg",
];

export default function Gallery() {
  return (
    <section id="Gallery" className="font-['Open_Sans'] bg-gray-50 py-16 px-4 md:px-8  w-full relative left-1/2 right-1/2 -mx-[50vw] w-screen">
      <div className="max-w-7xl mx-auto">

        {/* Title */}
        {/* <h2 className="text-4xl font-bold text-center mb-12">
          Our Gallery
        </h2> */}
        <h2 className=" text-[48px] leading-[52px] font-normal text-[#48484A] text-center mb-12">
            <span className="text-[#48484A]">OUR</span>{" "}
            <span className="text-[#d93536]">Gallery</span>
          </h2>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {images.map((src, index) => (
            <div
              key={index}
              className="relative group overflow-hidden rounded-lg shadow-md"
            >
              {/* Image */}
              <div className="relative w-full h-64">
                <Image
                  src={src}
                  alt={`Gallery ${index + 1}`}
                  fill
                  className="object-cover transform group-hover:scale-110 transition duration-500"
                />
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}