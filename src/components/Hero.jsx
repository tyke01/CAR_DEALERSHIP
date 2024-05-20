import { MdFacebook } from "react-icons/md";
import {
  FaInstagram,
  FaReddit,
  FaPinterest,
  FaTelegram,
  FaDiscord,
} from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className=" flex justify-between w-full">
      <div className=" h-[600px] w-[580px] flex flex-col items-start justify-center lg:mt-10 ml-10 ">
        <div className="flex gap-5 items-center">
          <ul className="flex flex-col gap-10">
            <li>
              <Link>
                <MdFacebook />
              </Link>
            </li>
            <li>
              <Link>
                <FaInstagram />
              </Link>
            </li>
            <li>
              <Link>
                <BsTwitterX />
              </Link>
            </li>
            <li>
              <Link>
                <FaReddit />
              </Link>
            </li>
            <li>
              <Link>
                <FaPinterest />
              </Link>
            </li>
            <li>
              <Link>
                <FaTelegram />
              </Link>
            </li>
            <li>
              <Link>
                <FaDiscord />
              </Link>
            </li>
          </ul>
          <div className="w-[1px] h-full bg-yellow-500"></div>
          <div className="flex flex-col">
            <div className="lg:text-7xl text-5xl flex flex-col font-bold">
              <span>LUXURY</span>
              <span>LIFESTYLE</span>
              <span>CARS</span>
            </div>
            <div className="mt-10">
              <div>
                <p className="text-sm">THE MERCEDES BENZ CLA</p>
                <span className="text-yellow-500 text-xs">30,000,000 KSH</span>
              </div>
              <button className="border-2 border-yellow-500 hover:border-transparent hover:bg-yellow-500 hover:text-black px-4 py-2 mt-10 font-bold">
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="hidden lg:block hideImg">
        <img
          src="/images/car-2.jpg"
          alt=""
          className=" w-[1200px] h-[550px] object-cover ml-auto"
        />
      </div>
    </section>
  );
};

export default Hero;
