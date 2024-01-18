import { Link } from "react-router-dom";

import { MdPhone } from "react-icons/md";

const Navbar = () => {
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
    </nav>
  );
};

export default Navbar;
