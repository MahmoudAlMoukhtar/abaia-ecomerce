import React from "react";
// Import Swiper React components
import {Swiper, SwiperSlide} from "swiper/react";
import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper";
// Import Swiper styles
// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/modules/pagination/pagination.min.css";
SwiperCore.use([Autoplay]);

const testimonailas = [
  {
    name: "John Doe",
    testimonial:
      "“Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer convallis volutpat dui quis scelerisque.”",
    image: "/images/person_1.jpg",
    postion: "CEO, Co-Founder, XYZ Inc.",
  },
  {
    name: "Maria Jones",
    testimonial:
      "“Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer convallis volutpat dui quis scelerisque.”",
    image: "/images/person_2.jpg",
    postion: "CEO, Co-Founder, XYZ Inc.",
  },
  {
    name: "test Al-test",
    testimonial:
      "“Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer convallis volutpat dui quis scelerisque.”",
    image: "/images/person_3.jpg",
    postion: "CEO, Co-Founder, XYZ Inc.",
  },
];

const Testimon = ({testimon}) => {
  const {testimonial, image, name, postion} = testimon;
  return (
    <div
      id="card-testimon"
      className="flex flex-col gap-8 justify-evenly items-center py-0 hover:cursor-grab w-full"
    >
      <p className="text-center">{testimonial}</p>
      <div className="flex flex-col justify-between items-center gap-y-6">
        <img
          src={image}
          alt=""
          className="w-24 rounded-full"
          width={100}
          height={100}
        />
        <div className="flex flex-col justify-between items-center gap-y-4">
          <h3 className="font-bold">{name}</h3>
          <p className="text-gray-500">{postion}</p>
        </div>
      </div>
    </div>
  );
};

const Testimonailas = () => {
  return (
    <section id="Testimonailas" className="my-20 w-[100%]">
      <div
        id="testimonailas-container"
        className="contanier xl:px-16 lg:px-8 sm:px-6 flex flex-col justify-center "
      >
        <h1 className="text-3xl font-semibold text-center mb-10">
          Testimonailas
        </h1>
        <div
          id="section-4-view-most-popul-producs"
          className="contanier xl:px-16 lg:px-8 sm:px-6 flex justify-between lg:items-start md:items-start"
        >
          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={50}
            slidesPerView={1}
            navigation
            pagination={{clickable: true}}
            scrollbar={{draggable: true}}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            loop={true}
            speed={400}
            className="flex flex-col gap-[20px]"
          >
            {testimonailas.map(testimon => {
              return (
                <SwiperSlide
                  className="flex justify-center gap-20 "
                  key={testimon.name}
                >
                  <Testimon testimon={testimon} key={testimon.name} />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Testimonailas;
