import React, {useEffect, useState} from "react";
import useFetch from "../services/useFetch";
import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
  EffectFade,
} from "swiper";

// Import Swiper React components
import {Swiper, SwiperSlide, useSwiper} from "swiper/react";
// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/modules/effect-fade/effect-fade.min.css";
import "swiper/modules/pagination/pagination.min.css";
import "swiper/modules/autoplay/autoplay";

function SlideProduct({p, image}) {
  return (
    <div className="h-screen">
      <img src={image} alt={"abaya"} className="w-full  cursor-grab" />
    </div>
  );
}

export default function ProductsSlider() {
  //const {data: products, loading, error} = useFetch("products");
  const [autoPlaySlider, setAutoPlaySlider] = useState(false);
  useEffect(() => {
    setAutoPlaySlider(true);

    return () => {
      setAutoPlaySlider(false);
    };
  }, []);

  return (
    <div>
      <React.Fragment>
        <Swiper
          modules={[
            Navigation,
            Pagination,
            Scrollbar,
            A11y,
            EffectFade,
            Autoplay,
          ]}
          spaceBetween={0}
          slidesPerView={1}
          navigation
          scrollbar={{draggable: true}}
          autoplay={{
            delay: 2000,
            pauseOnMouseEnter: true,
            disableOnInteraction: false,
          }}
          speed={700}
          loop={true}
        >
          <SwiperSlide className="h-screen">
            <SlideProduct image="/images/abaya/0001771.png" />
          </SwiperSlide>
          <SwiperSlide className="h-screen">
            <SlideProduct image="/images/abaya/6983311-1872109381.jpg" />
          </SwiperSlide>
          <SwiperSlide className="h-screen">
            <SlideProduct image="/images/abaya/8_63.jpg" />
          </SwiperSlide>
        </Swiper>
      </React.Fragment>
    </div>
  );
}
/* 
          pagination={{clickable: true}}

*/
