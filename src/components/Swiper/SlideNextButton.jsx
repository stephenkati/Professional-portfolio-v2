import { React } from 'react';
import { useSwiper } from 'swiper/react';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai'

export default function SlideNextButton() {
  const swiper = useSwiper();

  return (
    <div>
      <button
        type='button'
        onClick={() => swiper.slidePrev()}
        className='text-primary text-xl border border-primary rounded-full z-10 absolute left-0'
      >
        <AiOutlineArrowLeft />
      </button>

      <button
        type='button'
        onClick={() => swiper.slideNext()}
        className='text-primary text-xl border border-primary rounded-full z-10 absolute right-0 top-1/2 '
      >
        <AiOutlineArrowRight />
      </button>
    </div>
  );
};
