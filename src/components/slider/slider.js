import React, { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs } from "swiper";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

const Slider = ({item}) => {
  
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  
  return (
    <>
    <Swiper
      loop={true}
      spaceBetween={10}
      navigation={true}
      thumbs={{ swiper: thumbsSwiper }}
      modules={[FreeMode, Navigation, Thumbs]}
      className="mySwiper2"
    >
      
      {item.images.map((item2, index1) => (
        <SwiperSlide key={index1}>
          <img src={item2.image} alt="" />
        </SwiperSlide>
      ))}

    </Swiper> 
    
    <Swiper
      onSwiper={setThumbsSwiper}
      loop={true}
      spaceBetween={10}
      slidesPerView={3}
      freeMode={true}
      watchSlidesProgress={true}
      modules={[FreeMode, Navigation, Thumbs]}
      className="mySwiper"
    >
          
      {item.images.map((item2, index1) => (
          <SwiperSlide  
            key={index1}>
            <img src={item2.image} alt="" />
          </SwiperSlide>
      ))}
    
    </Swiper>
    </>
  )
}

export default Slider