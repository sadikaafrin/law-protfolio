import Link from 'next/link';

export default function AboutUs() {
  return (
    <div className="bg-white " id="AboutUs" >
        <h1 className=''>About us</h1>
        <hr />
      <div className="max-w-7xl mx-auto items-center gap-12 mt-3">
        
        {/* Left Side: Image Content */}
        <div className="w-full  ">
          <div className=" h-[400px] md:h-[500px] w-full overflow-hidden rounded-sm shadow-lg">
            <img
              src="https://www.lawyersnjurists.com/wp-content/uploads/IMG_7573-1.jpg" // Replace with your actual image path
              alt="Lady Justice Statue"
              className="object-cover w-full mb-3"
            />
            {/* Overlay to mimic the striped lighting effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-30 pointer-events-none"></div>
          </div>
        </div>

        {/* Right Side: Text Content */}
        <div className="w-full  items-start mt-3">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight mb-6">
            One of the Top Commercial <br /> Law Firm in Bangladesh
          </h1>

          <div className="space-y-4 text-gray-600 leading-relaxed text-lg">
            <p>
              <span className="text-red-700 font-bold">Jural Acuity</span> is recognized as a top law firm in Dhaka, Bangladesh, 
              known for delivering reliable and practical legal solutions. We specialize in corporate, commercial, 
              employment, tax and regulatory law, serving both local businesses and international clients.
            </p>
            
            <p>
              Our experienced team of lawyers is dedicated to understanding your needs and providing clear, 
              strategic advice to help you achieve your goals. Whether you're a startup, a multinational company, 
              or an individual seeking legal support, we are here to guide you every step of the way with 
              professionalism and care.
            </p>

            <p>
              Jural Acuity was ranked in the Intellectual Property segment for Legal 500 Asia Pacific for 2025. 
              Jural Acuity's Partner ASM Sakib Sikder has been listed in Asia Business Law Journal's 
              Bangladesh A-List 2025.
            </p>
          </div>

          <Link 
            href="/about" 
            className="mt-8 inline-flex items-center gap-2 bg-red-700 hover:bg-red-800 text-white font-semibold py-3 px-8 rounded-md transition-colors duration-200 group"
          >
            Learn More
            <span className="border-2 border-white rounded-full p-0.5 group-hover:translate-x-1 transition-transform">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                fill="none" 
                viewBox="0 0 24 24" 
                strokeWidth={3} 
                stroke="currentColor" 
                className="w-4 h-4"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </span>
          </Link>
        </div>

      </div>
    </div>
  );
}