// import { MdCalendarMonth } from "react-icons/md";
import { AboutGrid } from "../data";

const About = () => {
  return (
    <section className=" py-10 flex flex-col lg:flex-row gap-4 w-full">
      <div className="flex flex-col pl-10">
        <h1 className="text-4xl font-bold">About Yvonne Auto</h1>
        <p className="lg:w-[500px] w-full mt-5">
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don&apos;t look even slightly
          believable. If you are going to use a passage of Lorem Ipsum, you need
          to be sure there isn&apos;t anything embarrassing hidden in the middle
          of .
        </p>

        <div className="mt-5 grid grid-cols-2 lg:grid-cols-2 gap-2 ">
          {AboutGrid.map((about) => (
            <div
              key={about.id}
              className="flex items-center gap-2 border px-1 lg:px-3 lg:py-5 w-[135px] lg:w-[250px]"
            >
              <div className="text-5xl lg:text-8xl">{about.icon}</div>
              <div className="flex flex-col">
                <span className="text-2xl lg:text-4xl font-bold">{about.number}</span>
                <span className="text-xs md:text-base">{about.text}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="w-full lg:w-[700px] lg:ml-auto px-5 lg:px-0">
        <img src="/images/car-5.jpg" alt="" />
      </div>
    </section>
  );
};

export default About;
