"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Handle hash on initial load or when URL changes
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash === "#AppointmentBooking") {
        const element = document.getElementById("AppointmentBooking");
        if (element) {
          setTimeout(() => {
            element.scrollIntoView({
              behavior: "smooth",
              block: "start",
            });
          }, 100);
        }
      } else if (hash === "#OurServices") {
        const element = document.getElementById("OurServices");
        if (element) {
          setTimeout(() => {
            element.scrollIntoView({
              behavior: "smooth",
              block: "start",
            });
          }, 100);
        }
      } else if (hash === "#AboutUs") {
        const element = document.getElementById("AboutUs");
        if (element) {
          setTimeout(() => {
            element.scrollIntoView({
              behavior: "smooth",
              block: "start",
            });
          }, 100);
        }
      }  else if (hash === "#TeamMember") {
        const element = document.getElementById("TeamMember");
        if (element) {
          setTimeout(() => {
            element.scrollIntoView({
              behavior: "smooth",
              block: "start",
            });
          }, 100);
        }
      } else if (hash === "#Gallery") {
        const element = document.getElementById("Gallery");
        if (element) {
          setTimeout(() => {
            element.scrollIntoView({
              behavior: "smooth",
              block: "start",
            });
          }, 100);
        }
      }
    };

    // Check on initial load
    handleHashChange();

    // Listen for hash changes
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  // Handle smooth scroll to section
  const handleSmoothScroll = (e, targetId) => {
    e.preventDefault();

    // If not on home page, navigate to home page first
    if (pathname !== "/") {
      router.push(`/#${targetId}`);
      return;
    }

    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
      // Update URL without reload
      window.history.pushState(null, "", `#${targetId}`);
      setIsMenuOpen(false);
    }
  };

  const navLinks = [
    { name: "About Us", href: "#AboutUs", targetId: "AboutUs" },
    {
      name: "Our Services",
      href: "#OurServicesOurServices",
      targetId: "OurServices",
    },
    { name: "Team Member", href: "#TeamMember", targetId: "TeamMember" },
    { name: "Gallery", href: "#Gallery", targetId: "Gallery" },
    {
      name: "Contact Us",
      href: "#AppointmentBooking",
      targetId: "AppointmentBooking",
    },
  ];

  const renderLink = (link) => {
    const commonClasses =
      "px-3 py-2 text-sm font-medium text-gray-700 hover:text-amber-700 rounded-md transition-colors duration-200 cursor-pointer";

    if (link.targetId) {
      return (
        <a
          key={link.name}
          href={link.href}
          onClick={(e) => handleSmoothScroll(e, link.targetId)}
          className={commonClasses}
        >
          {link.name}
        </a>
      );
    } else {
      return (
        <Link key={link.name} href={link.href} className={commonClasses}>
          {link.name}
        </Link>
      );
    }
  };

  const renderMobileLink = (link) => {
    const commonClasses =
      "block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-amber-700 transition-colors duration-200 cursor-pointer";

    if (link.targetId) {
      return (
        <a
          key={link.name}
          href={link.href}
          onClick={(e) => handleSmoothScroll(e, link.targetId)}
          className={commonClasses}
        >
          {link.name}
        </a>
      );
    } else {
      return (
        <Link
          key={link.name}
          href={link.href}
          onClick={() => setIsMenuOpen(false)}
          className={commonClasses}
        >
          {link.name}
        </Link>
      );
    }
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo / Brand Name */}
          <div className="flex flex-col items-start">
            <Link href="/" className="block">
              <h1 className="text-[#252525] text-lg font-bold leading-tight">
                Dr. Kamal Hossain & Associates
              </h1>
              <h2 className="text-[#444444] text-sm leading-tight">
                BARRISTERS-ADVOCATES-LEGAL CONSULTANTS
              </h2>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex md:items-center md:space-x-1 lg:space-x-2">
            {navLinks.map((link) => renderLink(link))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-amber-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-amber-500"
              aria-controls="mobile-menu"
              aria-expanded={isMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              {!isMenuOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      {isMenuOpen && (
        <div className="md:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-gray-200 shadow-lg">
            {navLinks.map((link) => renderMobileLink(link))}
            <div className="px-3 pt-4 pb-2">
              <p className="text-xs text-gray-500 border-t border-gray-100 pt-3">
                BARRISTERS – ADVOCATES – LEGAL CONSULTANTS
              </p>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
