import { useState } from "react";
import { Link } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";

const CarFilter = () => {
  const [rangeValue, setRangeValue] = useState(50); // Initial value

  return (
    <section className=" px-10 lg:px-32 py-10 w-full">
      <div className="flex flex-col rounded-md justify-center bg-yellow-500 px-5 py-5">
        <div className="flex items-center self-center bg-black rounded-md px-4 py-2 gap-2">
          <div className="bg-white w-1 h-[50px]"></div>
          <h1 className="font-bold text-xl text-yellow-500">
            UNSURE WHICH VEHICLE YOU ARE LOOKING FOR? FIND IT HERE
          </h1>
          <div className="bg-white w-1 h-[50px]"></div>
        </div>

        <div className="flex flex-col mt-10">
          <div className="flex flex-col lg:flex-row items-center gap-5 text-black ">
            <h1 className="font-bold">SELECT VEHICLE TYPE:</h1>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 lg:flex">
              <Link to="#" className="flex flex-col items-center">
                <img className="w-28" src="/icons/pickup.svg" alt="" />
                <span>Pickup</span>
              </Link>
              <Link to="#" className="flex flex-col items-center">
                <img className="w-28" src="/icons/suv.svg" alt="" />
                <span>Suv</span>
              </Link>
              <Link to="#" className="flex flex-col items-center">
                <img className="w-28" src="/icons/coupe.svg" alt="" />
                <span>Coupe</span>
              </Link>
              <Link to="#" className="flex flex-col items-center">
                <img className="w-28" src="/icons/convertible.svg" alt="" />
                <span>Convertible</span>
              </Link>
              <Link to="#" className="flex flex-col items-center">
                <img className="w-28" src="/icons/sedan.svg" alt="" />
                <span>Sedan</span>
              </Link>
              <Link to="#" className="flex flex-col items-center">
                <img className="w-28" src="/icons/minicar.svg" alt="" />
                <span>Minicar</span>
              </Link>
            </div>
          </div>
        </div>

        <div className="flex items-center text-black mt-10">
          <div className="flex flex-wrap lg:flex-row items-center gap-5">
            <div className="flex flex-wrap items-center gap-4">
              <div className="flex flex-col gap-2">
                <select
                  name="cars"
                  id="cars"
                  className=" w-40 px-4 py-2 rounded-md border border-gray-300 outline-none"
                >
                  <option value="make" autoFocus>
                    Any Make
                  </option>
                  <option value="volvo">Volvo</option>
                  <option value="saab">Saab</option>
                  <option value="mercedes">Mercedes</option>
                  <option value="audi">Audi</option>
                </select>
                <span className="label">Missing Manufacturer?</span>
              </div>
              {/*  */}
              <div className="flex flex-col gap-2">
                <select
                  name="cars"
                  id="cars"
                  className=" w-40 px-4 py-2 rounded-md border border-gray-300 outline-none"
                >
                  <option value="make" autoFocus>
                    Any Model
                  </option>
                  <option value="volvo">Volvo</option>
                  <option value="saab">Saab</option>
                  <option value="mercedes">Mercedes</option>
                  <option value="audi">Audi</option>
                </select>
                <span className="label">Missing Model?</span>
              </div>
              {/*  */}
              <div className="flex flex-col gap-2">
                <select
                  name="cars"
                  id="cars"
                  className=" w-40 px-4 py-2 rounded-md border border-gray-300 outline-none"
                >
                  <option value="make" autoFocus>
                    Vehicle Status
                  </option>
                  <option value="volvo">Volvo</option>
                  <option value="saab">Saab</option>
                  <option value="mercedes">Mercedes</option>
                  <option value="audi">Audi</option>
                </select>
                <span className="label">E.G NEW, USED, CERTIFIED</span>
              </div>
            </div>

            <div className="flex flex-col lg:flex-row items-center gap-4">
              <p className="flex lg:flex-col gap-5">
                PRICE RANGE <span className="font-bold"> {rangeValue}</span>
              </p>
              <input
                type="range"
                min="0"
                max="50,000,000"
                value={rangeValue}
                className="w-[200px]"
                onChange={(event) => setRangeValue(event.target.value)}
              />
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-10 lg:flex-row justify-between text-black">
          <div className="flex gap-4">
            <select
              name="cars"
              id="cars"
              className=" w-40 px-4 py-2 rounded-md border border-gray-300 outline-none"
            >
              <option value="year" autoFocus>
                Min Year
              </option>
              <option value="volvo">Volvo</option>
              <option value="saab">Saab</option>
              <option value="mercedes">Mercedes</option>
              <option value="audi">Audi</option>
            </select>
            {/*  */}
            <select
              name="cars"
              id="cars"
              className=" w-40 px-4 py-2 rounded-md border border-gray-300 outline-none"
            >
              <option value="year" autoFocus>
                Max Year
              </option>
              <option value="volvo">Volvo</option>
              <option value="saab">Saab</option>
              <option value="mercedes">Mercedes</option>
              <option value="audi">Audi</option>
            </select>
          </div>

          <div className="flex flex-col lg:flex-row items-center gap-4">
            <p className="uppercase text-xs font-semibold">advanced search</p>
            <button className="flex items-center gap-2 bg-black text-white px-4 py-3 rounded-full font-bold hover:shadow-lg hover:shadow-yellow-900 transition-all duration-200">
              SEARCH THE VEHICLE{" "}
              <span className="bg-yellow-500 p-2 text-xl text-white rounded-full">
                <IoIosArrowForward />
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CarFilter;
