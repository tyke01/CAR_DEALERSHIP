import { MdKeyboardArrowDown } from "react-icons/md";

const Testimonials = () => {
  return (
    <section className="my-16 px-10 lg:px-28 flex flex-col items-center justify-center lg:flex-row gap-10">
      
        <img
          src="/images/cool-1.jpg"
          alt=""
          className="w-20 h-20 rounded-full border-[4px] border-slate-400 bg-red-600"
        />

      <div className="w-full">
        <div className="flex flex-col items-center justify-center">
          <p className="flex items-center flex-col justify-center lg:flex-row gap-2">
            <span className="font-bold text-yellow-500">John Doe</span>{" "}
            <span className="text-slate-300 text-xs">Customer, Ford Mustang GT500 shelby</span>
          </p>
          <div className="flex flex-col w-full items-center justify-center my-2">
              <hr className="bg-slate-200 w-full"/>
              <MdKeyboardArrowDown className="text-xl"/>
          </div>
          <p className="text-center">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum
            perspiciatis in distinctio aperiam consequuntur minima voluptate
            amet, et error voluptates illum fuga accusantium, nobis odit a!
            Cumque itaque atque eligendi!
          </p>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
