import React from 'react'
import {Swiper, SwiperSlide, useSwiper} from 'swiper/react';
import 'swiper/css';
import SlideNextButton from '../Swiper/SlideNextButton';

const ImageSwiper = (props) => {
  const swiper = useSwiper();

  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      className='text-blue-950 flex items-center'
    >
      <SlideNextButton />
      {props.images.map((pic, picIndex) => (
        <SwiperSlide key={`${picIndex}`}>
          <img src={pic} alt={picIndex} loading="lazy" className="w-full max-w-sm rounded-lg" />
        </SwiperSlide>
      ))}

    </Swiper>
  )
}



export default ImageSwiper;
