import Image from "next/image";

export default function AboutUs() {
  return (
    <section id="AboutUs" className="font-['Open_Sans']  py-16 px-6 md:px-16">
      
      <div className="max-w-7xl mx-auto">
        
        {/* Title */}
        <h2 className="text-4xl font-bold text-center mb-12">
          About Us
        </h2>

        {/* Content */}
        <div className="grid md:grid-cols-2 gap-10 items-center">
          
          {/* Image */}
          <div className="w-full md:h-[600px] h-[300px] relative ">
            <Image
              src="/about.jpg" 
              alt="Lady Justice"
              fill
              className="object-cover rounded-lg shadow-md w-full"
            />
          </div>

          {/* Text Content */}
          <div className="">
            <h3 className="text-[40px] md:text-3xl font-semibold mb-4 normal-case">
              One of the Top Commercial Law Firm in Bangladesh
            </h3>

            <p className="text-gray-500 leading-relaxed text-[18px] mb-6">
              <span className="text-red-500 font-semibold">
                Jural Acuity
              </span>{" "}
              <span className="normal-case">
              is recognized as a top law firm in Dhaka, Bangladesh,
              known for delivering reliable and practical legal solutions.
              We specialize in corporate, commercial, employment, tax and
              regulatory law, serving both local businesses and international
              clients.
              <br /><br />
              Our experienced team of lawyers is dedicated to understanding
              your needs and providing clear, strategic advice to help you
              achieve your goals. Whether you’re a startup, a multinational
              company, or an individual seeking legal support, we are here
              to guide you every step of the way.
              <br /><br />
              Jural Acuity was ranked in the Intellectual Property segment
              for Legal 500 Asia Pacific for 2025.
              </span>
            </p>

            <button className="inline-block bg-red-500 text-sm hover:bg-red-600 px-6 py-2.5 text-white rounded-md font-medium transition">
              Learn More →
            </button>

            {/* <Link
                href="tel:+8801707108000"
                className="inline-block bg-white text-[#D93434] font-semibold text-sm px-6 py-2.5 rounded-md shadow-md transition-all duration-300 hover:bg-gray-100 hover:shadow-lg hover:-translate-y-0.5"
              >
                Get In Touch
              </Link> */}
          </div>

        </div>
      </div>
    </section>
  );
}