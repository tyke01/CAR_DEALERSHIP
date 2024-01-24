import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import { IoIosSpeedometer } from "react-icons/io";
// import { CustomButtonGroupAsArrows, CustomLeftArrow, CustomRightArrow } from "./CustomButtonGroup";

const featured = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 1024 },
      items: 5,
      slidesToSlide: 4,
    },
    desktop: {
      breakpoint: { max: 1024, min: 800 },
      items: 3,
      slidesToSlide: 3,
    },
    tablet: {
      breakpoint: { max: 800, min: 464 },
      items: 2,
      slidesToSlide: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="flex flex-col">
      <div className="flex items-center self-center bg-black rounded-md px-4 py-2 gap-2">
          <div className="bg-white w-1 h-[50px]"></div>
          <h1 className="font-bold text-4xl text-yellow-500">
            Featured Vehicles
          </h1>
          <div className="bg-white w-1 h-[50px]"></div>
        </div>
      <div className="px-5 my-10">
        <Carousel
          responsive={responsive}
          infinite={true}
          swipeable={false}
          draggable={false}
          showDots={true}
          className="pb-8"
        >
          <div className="flex flex-col  border rounded-lg overflow-hidden mx-2">
            <img src="/images/car-1.jpg" alt="" />
            <div className="flex flex-col px-3 py-3">
              <p className="bg-yellow-500 p-2 w-fit text-black font-semibold mt-2">
                KSH 40,000,000
              </p>
              <p>lamborghini</p>
              <hr />
              <div className="flex flex-col mt-4">
                <p className="flex items-center gap-2">
                  <IoIosSpeedometer />
                  <span>35,000 km</span>
                </p>
                <p className="flex mt-2 gap-4">
                  <span>used</span>
                  <span>2016</span>
                  <span>manual</span>
                  <span>petrol</span>
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col  border rounded-lg overflow-hidden mx-2">
            <img src="/images/car-1.jpg" alt="" />
            <div className="flex flex-col px-3 py-3">
              <p className="bg-yellow-500 p-2 w-fit text-black font-semibold mt-2">
                KSH 40,000,000
              </p>
              <p>lamborghini</p>
              <hr />
              <div className="flex flex-col mt-4">
                <p className="flex items-center gap-2">
                  <IoIosSpeedometer />
                  <span>35,000 km</span>
                </p>
                <p className="flex mt-2 gap-4">
                  <span>used</span>
                  <span>2016</span>
                  <span>manual</span>
                  <span>petrol</span>
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col  border rounded-lg overflow-hidden mx-2">
            <img src="/images/car-1.jpg" alt="" />
            <div className="flex flex-col px-3 py-3">
              <p className="bg-yellow-500 p-2 w-fit text-black font-semibold mt-2">
                KSH 40,000,000
              </p>
              <p>lamborghini</p>
              <hr />
              <div className="flex flex-col mt-4">
                <p className="flex items-center gap-2">
                  <IoIosSpeedometer />
                  <span>35,000 km</span>
                </p>
                <p className="flex mt-2 gap-4">
                  <span>used</span>
                  <span>2016</span>
                  <span>manual</span>
                  <span>petrol</span>
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col  border rounded-lg overflow-hidden mx-2">
            <img src="/images/car-1.jpg" alt="" />
            <div className="flex flex-col px-3 py-3">
              <p className="bg-yellow-500 p-2 w-fit text-black font-semibold mt-2">
                KSH 40,000,000
              </p>
              <p>lamborghini</p>
              <hr />
              <div className="flex flex-col mt-4">
                <p className="flex items-center gap-2">
                  <IoIosSpeedometer />
                  <span>35,000 km</span>
                </p>
                <p className="flex mt-2 gap-4">
                  <span>used</span>
                  <span>2016</span>
                  <span>manual</span>
                  <span>petrol</span>
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col  border rounded-lg overflow-hidden mx-2">
            <img src="/images/car-1.jpg" alt="" />
            <div className="flex flex-col px-3 py-3">
              <p className="bg-yellow-500 p-2 w-fit text-black font-semibold mt-2">
                KSH 40,000,000
              </p>
              <p>lamborghini</p>
              <hr />
              <div className="flex flex-col mt-4">
                <p className="flex items-center gap-2">
                  <IoIosSpeedometer />
                  <span>35,000 km</span>
                </p>
                <p className="flex mt-2 gap-4">
                  <span>used</span>
                  <span>2016</span>
                  <span>manual</span>
                  <span>petrol</span>
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col  border rounded-lg overflow-hidden mx-2">
            <img src="/images/car-1.jpg" alt="" />
            <div className="flex flex-col px-3 py-3">
              <p className="bg-yellow-500 p-2 w-fit text-black font-semibold mt-2">
                KSH 40,000,000
              </p>
              <p>lamborghini</p>
              <hr />
              <div className="flex flex-col mt-4">
                <p className="flex items-center gap-2">
                  <IoIosSpeedometer />
                  <span>35,000 km</span>
                </p>
                <p className="flex mt-2 gap-4">
                  <span>used</span>
                  <span>2016</span>
                  <span>manual</span>
                  <span>petrol</span>
                </p>
              </div>
            </div>
          </div>
        </Carousel>
      </div>
    </section>
  );
};

export default featured;
