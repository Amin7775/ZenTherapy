import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper/modules";
import { MdLocationPin } from "react-icons/md";

const Testimonials = () => {
  return (
    <div className="p-4 md:p-8 md:pt-10 bg-white rounded-xl">
      {/* slider */}
      <section>
        <Swiper
          pagination={{
            dynamicBullets: true,
          }}
          loop={true}
          modules={[Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <section className="mt-3 mb-10">
              {/* testimonial 1 */}
              <section className="border rounded-lg p-3 overflow-x-hidden flex gap-3 items-center">
                {/* img */}
                <section className="w-[30%] md:w-[20%]">
                  <img
                    className="h-40 object-cover w-full drop-shadow-sm border"
                    src="https://i.ibb.co/ykv8fZT/82bb03f64470eeff199462c8b35b06d7.png"
                    alt="person"
                  />
                </section>
                {/* text */}
                <section className="flex-1">
                  <section className="flex gap-2 items-center text-theme-text-color-2 mt-1">
                    <MdLocationPin></MdLocationPin>
                    <p className="md:text-lg">123 Elm Street, New York, NY</p>
                  </section>
                  <h3 className="text-xl md:text-2xl font-medium mt-2">
                    Healing Bodywork{" "}
                    <span className="text-primary-Color-blue-2 italic font-semibold">
                      by Cort
                    </span>
                  </h3>
                  <p className="text-theme-text-color-2 mt-2 md:text-lg">
                    Cort’s healing bodywork massage was absolutely
                    transformative. Their intuitive touch and deep understanding
                    of...
                    <span className="text-primary-Color-blue-2 underline cursor-pointer font-semibold">
                      Read More
                    </span>
                  </p>
                </section>
              </section>
              {/* testimonial 2 */}
              <section className="border rounded-lg p-3 overflow-x-hidden flex gap-3 items-center mt-5">
                {/* img */}
                <section className="w-[30%] md:w-[20%]">
                  <img
                    className="h-40 object-cover w-full drop-shadow-sm border"
                    src="https://i.ibb.co/gZG0b02/ac156f8e2a1cab028a19c3f320ed23e8.png"
                    alt="person"
                  />
                </section>
                {/* text */}
                <section className="flex-1">
                  <section className="flex gap-2 items-center text-theme-text-color-2 mt-1">
                    <MdLocationPin></MdLocationPin>
                    <p className="md:text-lg">123 Elm Street, New York, NY</p>
                  </section>
                  <h3 className="text-xl md:text-2xl font-medium mt-2">
                    Healing Bodywork{" "}
                    <span className="text-primary-Color-blue-2 italic font-semibold">
                      by Cort
                    </span>
                  </h3>
                  <p className="text-theme-text-color-2 mt-2 md:text-lg">
                    Cort’s healing bodywork massage was absolutely
                    transformative. Their intuitive touch and deep understanding
                    of...
                    <span className="text-primary-Color-blue-2 underline cursor-pointer font-semibold">
                      Read More
                    </span>
                  </p>
                </section>
              </section>
            </section>
          </SwiperSlide>
          {/* slider 2 */}
          <SwiperSlide>
            <section className="mt-3 mb-10">
              {/* testimonial 1 */}
              <section className="border rounded-lg p-3 overflow-x-hidden flex gap-3 items-center">
                {/* img */}
                <section className="w-[30%] md:w-[20%]">
                  <img
                    className="h-40 object-cover w-full drop-shadow-sm border"
                    src="https://i.ibb.co/gZG0b02/ac156f8e2a1cab028a19c3f320ed23e8.png"
                    alt="person"
                  />
                </section>
                {/* text */}
                <section className="flex-1">
                  <section className="flex gap-2 items-center text-theme-text-color-2 mt-1">
                    <MdLocationPin></MdLocationPin>
                    <p className="md:text-lg">123 Elm Street, New York, NY</p>
                  </section>
                  <h3 className="text-xl md:text-2xl font-medium mt-2">
                    Healing Bodywork{" "}
                    <span className="text-primary-Color-blue-2 italic font-semibold">
                      by Cort
                    </span>
                  </h3>
                  <p className="text-theme-text-color-2 mt-2 md:text-lg">
                    Cort’s healing bodywork massage was absolutely
                    transformative. Their intuitive touch and deep understanding
                    of...
                    <span className="text-primary-Color-blue-2 underline cursor-pointer font-semibold">
                      Read More
                    </span>
                  </p>
                </section>
              </section>
              {/* testimonial 2 */}
              <section className="border rounded-lg p-3 overflow-x-hidden flex gap-3 items-center mt-5">
                {/* img */}
                <section className="w-[30%] md:w-[20%]">
                  <img
                    className="h-40 object-cover w-full drop-shadow-sm border"
                    src="https://i.ibb.co/ykv8fZT/82bb03f64470eeff199462c8b35b06d7.png"
                    alt="person"
                  />
                </section>
                {/* text */}
                <section className="flex-1">
                  <section className="flex gap-2 items-center text-theme-text-color-2 mt-1">
                    <MdLocationPin></MdLocationPin>
                    <p className="md:text-lg">123 Elm Street, New York, NY</p>
                  </section>
                  <h3 className="text-xl md:text-2xl font-medium mt-2">
                    Healing Bodywork{" "}
                    <span className="text-primary-Color-blue-2 italic font-semibold">
                      by Cort
                    </span>
                  </h3>
                  <p className="text-theme-text-color-2 mt-2 md:text-lg">
                    Cort’s healing bodywork massage was absolutely
                    transformative. Their intuitive touch and deep understanding
                    of...
                    <span className="text-primary-Color-blue-2 underline cursor-pointer font-semibold">
                      Read More
                    </span>
                  </p>
                </section>
              </section>
            </section>
          </SwiperSlide>
        </Swiper>
      </section>
    </div>
  );
};

export default Testimonials;
