// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import { MdLocationPin } from "react-icons/md";
// import { FaCar } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import './styles.css';

// import required modules
import { Pagination } from "swiper/modules";
import { MdLocationPin } from "react-icons/md";
import { FaCar } from "react-icons/fa";
import { useEffect, useState } from "react";

const FeaturedTherapists = () => {
  const [therapistData, setTherapistData] = useState([]);

  useEffect(() => {
    fetch("/TherapistData.json")
      .then((res) => res.json())
      .then((data) => setTherapistData(data));
  }, []);

  //   function Arrow(props) {
  //     const { className, style, onClick } = props;
  //     return (
  //       <div
  //         className={className}
  //         style={{
  //           ...style,
  //           background: "#4285F3",
  //           borderRadius: "100%",
  //           border: "none",
  //           width: "30px",
  //           height: "30px",
  //           display: "flex",
  //           justifyContent: "center",
  //           alignItems: "center",
  //           marginLeft: "5px",
  //           marginRight: "5px",
  //           padding: "5px",
  //           // cursor: "pointer", // Makes it clear it's clickable
  //         }}
  //         onClick={onClick}
  //       />
  //     );
  //   }

  //   const settings = {
  //     dots: true,
  //     infinite: true,
  //     speed: 500,
  //     slidesToShow: 4,
  //     slidesToScroll: 1,
  //     initialSlide: 0,
  //     nextArrow: <Arrow />,
  //     prevArrow: <Arrow />,
  //     responsive: [
  //       {
  //         breakpoint: 1024,
  //         settings: {
  //           slidesToShow: 3,
  //           slidesToScroll: 3,
  //           infinite: true,
  //           dots: true,
  //         },
  //       },
  //       {
  //         breakpoint: 768,
  //         settings: {
  //           slidesToShow: 2,
  //           slidesToScroll: 2,
  //           initialSlide: 2,
  //         },
  //       },
  //       {
  //         breakpoint: 430,
  //         settings: {
  //           slidesToShow: 1,
  //           slidesToScroll: 1,
  //         },
  //       },
  //     ],
  //   };
  return (
    <div className="p-4 md:p-8 bg-white max-w-[100%] overflow-x-hidden">
      <div className="max-w-[90%] mx-auto md:max-w-screen-2xl">
        {/* react slick - responsive issue */}
        {/* <Slider {...settings}>
          <div className="p-3 border rounded-lg">
            <img
              className="h-[200px] object-cover object-center w-full rounded-lg"
              src={
                "https://i.ibb.co/60ZnVmC/2da77c76988eacb2a180a508619cfd0b.png"
              }
              alt=""
            />
            text content
            <h3 className="mt-5 text-xl font-semibold">Name</h3>
            <section className="flex gap-2 items-center text-theme-text-color-2 mt-2">
              <MdLocationPin></MdLocationPin>
              <p>Location</p>
            </section>
            <section className="flex gap-2 items-center text-theme-text-color-2 mt-1">
              <FaCar></FaCar>
              <p>service</p>
            </section>
          </div>
          
        </Slider> */}
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          pagination={{
            clickable: true,
          }}
          loop={true}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
            1440: {
              slidesPerView: 4,
              spaceBetween: 40,
            },
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          {therapistData?.map((data) => (
            <SwiperSlide key={data.id}>
              <section className="border rounded-lg mt-3 mb-10 overflow-x-hidden">
                <div className="p-3">
                  <img
                    className="h-[250px] object-cover object-center w-full rounded-lg"
                    src={data.image}
                    alt=""
                  />
                  {/* text content */}
                  <h3 className="mt-5 text-xl font-semibold">{data.name}</h3>
                  <section className="flex gap-2 items-center text-theme-text-color-2 mt-2">
                    <MdLocationPin></MdLocationPin>
                    <p>{data.location}</p>
                  </section>
                  <section className="flex gap-2 items-center text-theme-text-color-2 mt-1">
                    <FaCar></FaCar>
                    <p>{data.services}</p>
                  </section>
                </div>
                {/* details section */}
                <section className="mt-5 bg-sidebar-hover hover:bg-primary-Color-blue-2 transition-all duration-300 ease-in-out cursor-pointer">
                  <p className="py-4 text-xl font-medium underline text-center hover:text-white">See Details</p>
                </section>
              </section>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default FeaturedTherapists;
