import { FaSearch } from "react-icons/fa";
import { IoIosArrowDropright } from "react-icons/io";
import { FaDollarSign } from "react-icons/fa";

const Offers = () => {
  return (
    <section className="px-10 my-10 flex flex-col justify-center items-center bg-[#111111]">
      <div className=" flex flex-col lg:flex-row items-center gap-10 pt-5">
        <div className="flex items-center gap-5 bg-yellow-500 text-black cursor-pointer w-[500px] h-[130px] hover:bg-yellow-400 active:bg-yellow-600">
          <FaSearch className="lg:text-7xl h-full px-2  " />
          <div className="flex flex-col">
            <p className="text-2xl font-bold">ARE YOU LOOKING FOR A CAR?</p>
            <span className="text-sm">
              Search Our Inventory With Thousands Of Cars And More Cars Are
              Adding On Daily Basis
            </span>
          </div>
          <div className="h-full">
            <IoIosArrowDropright className="text-5xl h-full  bg-[#f9e534]" />
          </div>
        </div>

        {/*  */}

        <div className="flex items-center gap-5 bg-yellow-500 text-black cursor-pointer w-[500px] h-[130px] hover:bg-yellow-400 active:bg-yellow-600">
          <FaDollarSign className="lg:text-7xl h-full px-2 " />
          <div className="flex flex-col">
            <p className="text-2xl font-bold">DO YOU WANT TO SELL A CAR?</p>
            <span className="text-sm">
              Search Our Inventory With Thousands Of Cars And More Cars Are
              Adding On Daily Basis
            </span>
          </div>
          <div className="h-full">
            <IoIosArrowDropright className="text-5xl h-full  bg-[#f9e534]" />
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
