import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

import { MdPhone } from "react-icons/md";
import {AiOutlineClose} from "react-icons/ai"
import {BiMenuAltRight} from "react-icons/bi"

const Navbar = () => {

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

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className=" fixed w-full lg:h-28 flex items-center justify-between z-40">
      <div className="relative h-full">
        <div className="bg-yellow-400 h-full w-28"></div>
        <div className="absolute top-[20%] -right-[45px] border-2 border-white">
          <Link to="/" className="font-bold text-2xl">
            <span className="text-black">Yvo</span>nne <br />{" "}
            <p>
              <span className="text-black">Aut</span>o
            </p>
          </Link>
        </div>
      </div>

      <div className=" hidden lg:flex items-center gap-8 relative ml-[200px]">
        <Link to="" className=" hover:text-yellow-400 relative slide">
          About
        </Link>
        <Link to="" className=" hover:text-yellow-400 relative slide">
          Products
        </Link>
        <Link to="" className=" hover:text-yellow-400 relative slide">
          Brands
        </Link>
        <Link to="" className=" hover:text-yellow-400 relative slide">
          Blog
        </Link>
        <Link to="" className=" hover:text-yellow-400 relative slide">
          Contact
        </Link>
      </div>

      <div className="flex items-center gap-2 mr-28 bg-yellow-400 text-black px-4 py-2 font-semibold">
        <MdPhone />
        +253 123 456 789
      </div>
      {/* mobile nav */}
      <div className="lg:hidden absolute top-2 right-10">
      <div className="block lg:hidden absolute top-2 right-10" onClick={toggleMobileMenu}>
          <span className="text-3xl cursor-pointer">
            {isMobileMenuOpen ? <AiOutlineClose /> : <BiMenuAltRight />}
          </span>
        </div>
        {isMobileMenuOpen && (
        <ul className="lg:hidden h-screen flex flex-col gap-2 text-primary pt-5 font-semibold text-2xl">
          <li className=" px-5 cursor-pointer py-5">
            <a href="#home" onClick={toggleMobileMenu}>
              Home
            </a>
          </li>
          <hr />
          <li className=" px-5 cursor-pointer py-5">
            <a href="#about" onClick={toggleMobileMenu}>
              About
            </a>
          </li>
          <hr />
          <li className=" px-5 cursor-pointer py-5">
            <a href="#services" onClick={toggleMobileMenu}>
              Services
            </a>
          </li>
          <hr />
          <li className=" px-5 cursor-pointer py-5">
            <a href="#reviews" onClick={toggleMobileMenu}>
              Reviews
            </a>
          </li>
          <hr />
          <li className=" px-5 cursor-pointer py-5">
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

export default Navbar;
