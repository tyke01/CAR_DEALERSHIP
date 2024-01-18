import { Link } from "react-router-dom";

const CarFilter = () => {
  return (
    <section className=" px-32 py-10">
      <div className="flex flex-col items-center rounded-md justify-center bg-yellow-500 px-5 py-5">
        <div className="flex items-center bg-black rounded-md px-4 py-2 gap-2">
          <div className="bg-white w-1 h-[50px]"></div>
          <h1 className="font-bold text-xl text-yellow-500">
            UNSURE WHICH VEHICLE YOU ARE LOOKING FOR? FIND IT HERE
          </h1>
          <div className="bg-white w-1 h-[50px]"></div>
        </div>

        <div className="flex flex-col mt-5">
          <div className="flex items-center gap-5 text-black ">
            <h1 className="font-bold">SELECT VEHICLE TYPE:</h1>

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

        <div className="flex items-center text-black mt-5">
          <div className="flex items-center gap-5">
            <div className="flex items-center gap-4">
              <div className="flex flex-col">
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
              </div>
              {/*  */}
              <div className="flex flex-col">
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
              </div>
              {/*  */}
              <div className="flex flex-col">
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
              </div>
            </div>

            <div>
              <h1>PRICE RANGE</h1>
              <input type="range" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CarFilter;
