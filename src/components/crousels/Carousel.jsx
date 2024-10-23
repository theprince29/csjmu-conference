import './Carousel.css'
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'; // Import Swiper styles
import 'swiper/css/pagination'; // Import pagination styles
import 'swiper/css/autoplay'; // Import autoplay styles
import { Autoplay, Pagination } from 'swiper/modules'; // Import required Swiper modules


const Carousel = () => {
  return (
    <div className="w-full relative mt-4">
      <Swiper
        loop={true}
        autoplay={{
          delay: 1200,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          el: '.swiper-pagination',
          type: 'progressbar',
        }}
        modules={[Autoplay, Pagination]}
        className="progress-slide-carousel"
      >
        <SwiperSlide>
          <div className="bg-indigo-50 rounded-2xl h-96 flex justify-center items-center">
            <span className="text-3xl font-semibold text-indigo-600">Slide 1</span>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-indigo-50 rounded-2xl h-96 flex justify-center items-center">
            <span className="text-3xl font-semibold text-indigo-600">Slide 2</span>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-indigo-50 rounded-2xl h-96 flex justify-center items-center">
            <span className="text-3xl font-semibold text-indigo-600">Slide 3</span>
          </div>
        </SwiperSlide>
      </Swiper>
      <div className="swiper-pagination !bottom-2 !top-auto !w-80 right-0 mx-auto bg-gray-100"></div>
    </div>
  );
};

export default Carousel;
