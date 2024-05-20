import { FaSearch } from "react-icons/fa";
import { IoIosArrowDropright } from "react-icons/io";
import { FaDollarSign } from "react-icons/fa";

const Offers = () => {
  return (
    <section className="lg:px-10 my-10 flex flex-col justify-center items-center bg-[#111111] h-full">
      <div className=" flex flex-col lg:flex-row items-center gap-10 pt-5 h-full">
        <div className="flex items-center gap-2 bg-yellow-500 text-black cursor-pointer lg:w-[500px] w-[300px] h-full lg:h-[130px] hover:bg-yellow-400 active:bg-yellow-600">
          <FaSearch className="text-5xl pl-1 lg:text-7xl h-full " />
          <div className="flex flex-col h-full w-full justify-center">
            <p className="hidden lg:block text-base lg:text-2xl font-bold">ARE YOU LOOKING FOR A CAR?</p>
            <p className="text-base lg:text-2xl font-bold lg:hidden">LOOKING FOR A CAR?</p>
            <span className="text-xs lg:text-sm">
              Search Our Inventory With Thousands Of Cars And More Cars Are
              Adding On Daily Basis
            </span>
          </div>
          <div className="h-[100px]">
            <IoIosArrowDropright className="text-4xl lg:text-5xl h-full  bg-[#f9e534]" />
          </div>
        </div>

        {/*  */}

        <div className="flex items-center gap-2 lg:gap-5 bg-yellow-500 text-black cursor-pointer lg:w-[500px] w-[300px] lg:h-[130px] hover:bg-yellow-400 active:bg-yellow-600">
          <FaDollarSign className="text-8xl lg:text-7xl h-full  " />
          <div className="flex flex-col">
            <p className="text-2xl font-bold hidden">DO YOU WANT TO SELL A CAR?</p>
            <p className="text-base font-bold lg:hidden">WANT TO SELL A CAR?</p>
            <span className="text-sm">
              Search Our Inventory With Thousands Of Cars And More Cars Are
              Adding On Daily Basis
            </span>
          </div>
          <div className="h-[100px]">
          <IoIosArrowDropright className="text-4xl lg:text-5xl h-full  bg-[#f9e534]" />
          </div>
        </div>
      </div>
      <p className="text-slate-500 text-sm py-10">
        QUESTIONS? CALL US : 1-800- 624-5462
      </p>
    </section>
  );
};

export default Offers;
