import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

import { MdPhone } from "react-icons/md";
import { AiOutlineClose } from "react-icons/ai";
import { BiMenuAltRight } from "react-icons/bi";

const NavtTest = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Add a breakpoint value that suits your design
  const mobileBreakpoint = 768; // Adjust this value as needed

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > mobileBreakpoint) {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleScroll = () => {
    setIsScrolled(window.scrollY > 0);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav
      className={`fixed w-full lg:h-28 flex items-center justify-between z-40 ${
        isScrolled ? "bg-transparent text-black" : "bg-black"
      }`}
    >
      <div className="relative h-full">
        <div
          className={`bg-yellow-500 h-full w-28 absolute top-0 left-0 -z-10 ${isScrolled ? "h-10 " : "lg:h-28  "}`}
        />
        <div className="lg:absolute top-[20%] -right-[45px] border-2 border-white z-20">
          <Link to="/" className="font-bold text-2xl flex lg:flex-col items-center gap-4">
            <span className="lg:text-black text-black">Yvo</span>nne
        
              <span className="lg:text-black text-white">Aut</span>o
      
          </Link>
        </div>
      </div>

      <div className="hidden lg:flex items-center gap-8 relative ml-[200px]">
        <Link
          to=""
          className={`hover:text-yellow-400 relative slide ${
            isScrolled ? "text-black" : ""
          }`}
        >
          About
        </Link>
        <Link
          to=""
          className={`hover:text-yellow-400 relative slide ${
            isScrolled ? "text-black" : ""
          }`}
        >
          Products
        </Link>
        <Link
          to=""
          className={`hover:text-yellow-400 relative slide ${
            isScrolled ? "text-black" : ""
          }`}
        >
          Brands
        </Link>
        <Link
          to=""
          className={`hover:text-yellow-400 relative slide ${
            isScrolled ? "text-black" : ""
          }`}
        >
          Blog
        </Link>
        <Link
          to=""
          className={`hover:text-yellow-400 relative slide ${
            isScrolled ? "text-black" : ""
          }`}
        >
          Contact
        </Link>
      </div>

      <div className="flex items-center gap-2 mr-28 bg-yellow-400 text-black px-4 py-2 font-semibold">
        <MdPhone />
        +253 123 456 789
      </div>
      {/* mobile nav */}
<div className="lg:hidden absolute top-2 right-10">
  <div
    className="block lg:hidden absolute top-2 right-10"
    onClick={toggleMobileMenu}
  >
    {isMobileMenuOpen ? <AiOutlineClose /> : <BiMenuAltRight />}
  </div>
  {isMobileMenuOpen && (
    <ul className="lg:hidden h-screen flex flex-col gap-2 text-primary pt-5 font-semibold text-2xl">
      <li className="px-5 cursor-pointer py-5">
        <a href="#home" onClick={toggleMobileMenu}>
          Home
        </a>
      </li>
      <hr />
      <li className="px-5 cursor-pointer py-5">
        <a href="#about" onClick={toggleMobileMenu}>
          About
        </a>
      </li>
      <hr />
      <li className="px-5 cursor-pointer py-5">
        <a href="#services" onClick={toggleMobileMenu}>
          Services
        </a>
      </li>
      <hr />
      <li className="px-5 cursor-pointer py-5">
        <a href="#reviews" onClick={toggleMobileMenu}>
          Reviews
        </a>
      </li>
      <hr />
      <li className="px-5 cursor-pointer py-5">
        <a href="#contact" onClick={toggleMobileMenu}>
          Contact
        </a>
      </li>
      <hr />
    </ul>
  )}
</div>
</nav>
  );
};

export default NavtTest