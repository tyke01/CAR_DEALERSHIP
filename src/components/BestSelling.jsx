import { IoIosArrowDropright } from "react-icons/io";
import { Link } from "react-router-dom";
import { BestLink, BestSeller } from "../data";

const BestSelling = () => {
  return (
    <section className="flex flex-col lg:flex-row gap-2 items-center px-5">
      <div className="flex flex-col bg-[#111111] p-2">
        <ul className=" grid grid-cols-2  gap-5 lg:flex lg:flex-col lg:w-[250px]">
          {BestLink.map((best) => (
            <li
              key={best.id}
              className="hover:bg-black rounded-md p-6 flex items-center justify-between gap-3 cursor-pointer"
            >
              <Link className="text-sm">{best.link}</Link>
              <IoIosArrowDropright />
            </li>
          ))}
        </ul>
      </div>
      <div className="flex flex-col justify-center items-center">
        <div className="flex items-center self-center bg-black rounded-md px-4 py-2 gap-2">
          <div className="bg-white w-1 h-[50px]"></div>
          <h1 className="font-bold text-4xl text-yellow-500">BEST SELLING</h1>
          <div className="bg-white w-1 h-[50px]"></div>
        </div>

        <div className="w-full mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {BestSeller.map((sell) => (
            <div key={sell.id} className="bg-[#111111]">
              <img
                src={sell.image}
                alt=""
                className="w-[350px] lg:w-[300px] h-[150px] object-cover"
              />
              <div className="flex flex-col px-2 py-5 gap-4">
                <span className="text-xs text-slate-400">
                  REGISTERED {sell.registered}
                </span>

                <span>{sell.name}</span>

                <div className="flex justify-between">
                  <span className="bg-yellow-500 py-1 px-3 text-black font-bold">
                    {sell.price}
                  </span>
                  <span>{sell.range} KM</span>
                </div>

                <div className="flex flex-wrap gap-2 items-center text-xs text-slate-400">
                  <span>Used</span>
                  <div className="bg-slate-500 w-1 h-1 rounded-full" />
                  <span>{sell.year}</span>
                  <div className="bg-slate-500 w-1 h-1 rounded-full" />
                  <span>{sell.type}</span>
                  <div className="bg-slate-500 w-1 h-1 rounded-full" />
                  <span>{sell.color}</span>
                  <div className="bg-slate-500 w-1 h-1 rounded-full" />
                  <span>{sell.fuel}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BestSelling;
