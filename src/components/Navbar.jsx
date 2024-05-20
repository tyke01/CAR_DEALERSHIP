import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

import { MdPhone } from "react-icons/md";
import { AiOutlineClose } from "react-icons/ai";
import { BiMenuAltRight } from "react-icons/bi";

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

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

  const handleScroll = () => {
    setIsScrolled(window.scrollY > 15);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={` fixed w-full lg:h-28 flex items-center justify-between z-40  ${
        isScrolled ? "bg-black/90 h-[100px] shadow-xl" : "bg-transparent h-[100px]"
      } `}
    >
      <div className="relative h-full">
        <div className="bg-yellow-400 h-12 lg:h-full lg:w-28 hidden lg:block"></div>

        <div className="lg:absolute lg:top-[20%] top-5 right-20 lg:-right-[57px] border-2 border-white lg:w-[100px] ">
          <Link to="/" className="font-bold text-2xl flex lg:flex-col">
            <p className="text-black lg:text-white bg-yellow-500 lg:bg-transparent px-2 py-3 lg:p-0">
              <span className="lg:text-black">Yvo</span>nne
            </p>{" "}
            <p className=" py-3 px-2 lg:p-0 text-white">
              <span className="lg:text-black">Aut</span>o
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

      <div className="hidden md:block  items-center gap-2 mr-28 mb-8 lg:mb-0 lg:mr-28 bg-yellow-400 text-black px-4 py-2 font-semibold text-xs ">
        <MdPhone />
        +253 123 456 789
      </div>
      {/* mobile nav */}
      <div className="lg:hidden absolute top-2 right-5 w-3/4">
        <div
          className="block lg:hidden absolute text-4xl top-2 right-5 cursor-pointer"
          onClick={toggleMobileMenu}
        >
          {isMobileMenuOpen ? <AiOutlineClose /> : <BiMenuAltRight />}
        </div>
        {isMobileMenuOpen && (
          <ul className="lg:hidden h-screen flex flex-col gap-2 text-primary pt-10 font-semibold text-2xl bg-yellow-500 text-black w-full z-[9999]">
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

export default Navbar;
