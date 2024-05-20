// import React from 'react'

import { IoIosArrowForward } from "react-icons/io";
import { MdEmail, MdLocationOn, MdSpeed } from "react-icons/md";
import { FooterAutos, FooterTwitter } from "../data";
import { BsTwitterX } from "react-icons/bs";
import { BiPhone } from "react-icons/bi";
import { FaAddressCard } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="flex flex-col items-center justify-center lg:px-28 px-10 py-5 bg-[#111111]">
      <div className=" flex flex-col lg:flex-row justify-center items-center gap-14">
        {/* section 1 */}
        <div className="flex flex-col lg:flex-row gap-2 lg:w-[300px] px-5 py-2">
          {/*  */}
          <div className="flex flex-col justify-start">
            <div className="flex items-center self-center  rounded-md px-4 py-2 gap-3 w-full">
              <div className="bg-white w-1 h-[20px]" />
              <h1 className="font-bold text-sm text-yellow-500">
                OPENING HOURS
              </h1>
              <div className="bg-white w-1 h-[20px]" />
            </div>

            <div className="flex flex-col gap-3">
              <span className="font-bold">Sales Department</span>
              <span className="text-xs flex flex-col gap-2 text-slate-300">
                <span>Mon-Sat : 8:00am - 5:00pm</span>
                Sunday is closed
              </span>
            </div>

            <div className="flex flex-col gap-3 mt-4">
              <span className="font-bold">Service Department</span>
              <span className="text-xs flex flex-col gap-2 text-slate-300">
                <span>Mon-Sat : 8:00am - 5:00pm</span>
                Sunday is closed
              </span>
            </div>
          </div>

          <hr className="w-full bg-slate-400" />

          <div>
            <div className="flex items-center self-center  rounded-md px-4 py-2 gap-3">
              <div className="bg-white w-1 h-[20px]" />
              <h1 className="font-bold text-sm text-yellow-500">ABOUT US</h1>
              <div className="bg-white w-1 h-[20px]" />
            </div>

            <div className="flex flex-col gap-4">
              <p className="text-xs text-slate-300">
                Vestibulum varius od lio eget conseq uat blandit, lorem auglue
                comm lodo nisl non ultricies lectus nibh mas lsa Duis
                scelerisque aliquet. Ante donec libero pede porttitor dacu msan
                esct venenatis quis.
              </p>

              <button className="flex items-center w-fit gap-2 bg-black text-white px-4 py-2 rounded-full font-bold hover:shadow-lg hover:shadow-yellow-900 transition-all duration-200">
                READ MORE{" "}
                <span className="bg-yellow-500 p-2 text-xl text-white rounded-full">
                  <IoIosArrowForward />
                </span>
              </button>
            </div>
          </div>
        </div>
        {/* section 2 */}

        <div className="flex flex-col lg:w-[300px] px-5 py-2">
          <div className="flex items-center self-center  rounded-md px-4 py-2 gap-3 w-full">
            <div className="bg-white w-1 h-[20px]" />
            <h1 className="font-bold text-sm text-yellow-500">LATEST AUTOS</h1>
            <div className="bg-white w-1 h-[20px]" />
          </div>

          <div className="flex flex-col mt-5">
            {FooterAutos.map((item) => (
              <div key={item.id} className="flex flex-col">
                <div className="flex items-center  gap-2 cursor-pointer hover:bg-black">
                  <img
                    src={item.img}
                    alt=""
                    className="w-[90px] h-[70px] object-cover"
                  />
                  <div className="flex flex-col gap-3">
                    <p className="text-sm">{item.name}</p>
                    <p className="flex items-center text-slate-300 gap-2">
                      <MdSpeed className="text-xl" />
                      <span className="text-xs">{item.mileage}</span>
                    </p>
                  </div>
                </div>
                <hr className="bg-slate-300 w-full my-4" />
              </div>
            ))}
          </div>
        </div>
        {/*  */}

        <div className="flex flex-col lg:w-[300px] px-5 py-2">
          <div className="flex items-center self-center  rounded-md px-4 py-2 gap-3 w-full">
            <div className="bg-white w-1 h-[20px]" />
            <h1 className="font-bold text-sm text-yellow-500">FROM TWITTER</h1>
            <div className="bg-white w-1 h-[20px]" />
          </div>

          <div className="flex flex-col mt-4">
            {FooterTwitter.map((item) => (
              <div key={item.id}>
                <div className="flex items-start gap-4 cursor-pointer hover:bg-black px-1 py-2">
                  <BsTwitterX />
                  <div className="text-xs flex flex-col gap-3">
                    <p className="text-slate-300">
                      Duis scelerisque aliquet ante donec libero pede porttitor
                      dacu
                    </p>
                    <span>20 minutes ago</span>
                  </div>
                </div>
                <hr className="bg-slate-300 w-full my-4" />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <hr className="bg-slate-300 w-full my-3" />

      <div className="flex flex-col items-center justify-center  lg:flex-row">
        <div className="flex items-center self-center  rounded-md px-4 py-2 gap-3 w-[300px]">
          <div className="bg-white w-1 h-[20px]" />
          <h1 className="font-bold text-sm text-yellow-500">CONTACT US</h1>
          <div className="bg-white w-1 h-[20px]" />
        </div>

        <div className="flex flex-col lg:flex-row gap-4 w-full px-4">
          <div className="flex items-center gap-2">
            <MdLocationOn />
            <span className="text-xs">Nairobi Kenya</span>
          </div>
          <div className="flex items-center gap-2">
            <BiPhone />
            <span className="text-xs">+253 123 456 789</span>
          </div>
          <div className="flex items-center gap-2">
            <MdEmail />
            <span className="text-xs">Yvonneauto@yahoo.com</span>
          </div>
          <div className="flex items-center gap-2">
            <FaAddressCard />
            <span className="text-xs">5111-10541</span>
          </div>
        </div>
      </div>

      <hr className="bg-slate-300 w-full my-3" />

      <div className="flex flex-col lg:flex-row items-center justify-between bg-black w-full">
        <Link to="/" className="font-bold text-2xl flex border">
          <p className="text-black  bg-yellow-500  px-2 py-3">
            <span className="">Yvo</span>nne
          </p>{" "}
          <p className=" py-3 px-2 text-white">
            <span className="">Aut</span>o
          </p>
        </Link>

        <div className="mr-5 text-[#7b7b7b]">
          &copy; Created by Victor Macharia
        </div>
      </div>

      {/*  */}
    </footer>
  );
};

export default Footer;
