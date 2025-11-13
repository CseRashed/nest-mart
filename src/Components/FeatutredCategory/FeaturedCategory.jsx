import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { IoArrowBackSharp, IoArrowForwardSharp } from "react-icons/io5";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function FeaturedCategory() {
  const categories = [
    { img: 'https://i.ibb.co.com/Ps3XTvhc/Figure-1.png', title: 'Cake & Milk', item: 11, bgColor: '#F2FCE4' }, 
    { img: 'https://i.ibb.co.com/bMFHDQZM/Figure-2.png', title: 'Organic Kiwi', item: 6, bgColor: '#FFFCEB' }, 
    { img: 'https://i.ibb.co.com/LDykxzLc/Figure-3.png', title: 'Peach', item: 6, bgColor: '#ECFFEC' }, 
    { img: 'https://i.ibb.co.com/FLvMnP3P/Figure-4.png', title: 'Read Apple', item: 10, bgColor: '#FEEFEA' }, 
    { img: 'https://i.ibb.co.com/MyjLM89C/Figure-5.png', title: 'Snacks', item: 11, bgColor: '#FFF3EB' }, 
    { img: 'https://i.ibb.co.com/F4Wj06kC/Figure-6.png', title: 'Vegetables', tem: 6, bgColor: '#FFF3FF' }, 
    { img: 'https://i.ibb.co.com/ymqBKk6g/Figure-7.png', title: 'Strawberry', item: 10, bgColor: '#F2FCE4' }, 
    { img: 'https://i.ibb.co.com/j9dtNcXn/Figure-8.png', title: 'Black plum', item: 10, bgColor: '#FEEFEA' }, 
    { img: 'https://i.ibb.co.com/tpk0PpmP/Figure-9.png', title: 'Custard apple', item: 10, bgColor: '#F2FCE4' }, 
    { img: 'https://i.ibb.co.com/SXYHssy2/Figure-10.png', title: 'Coffe & Tea', item: 11, bgColor: '#FEEFEA' },
  ]

  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <div className=" my-4 md:my-7 lg:my-10 relative">
      <h1 className="text-xl md:text-2xl lg:text-3xl font-bold mb-5 text-[#253D4E]">Featured Categories</h1>

      <Swiper
        modules={[Autoplay, Navigation, Pagination]}
        spaceBetween={25}
        slidesPerView={2}
        loop={true}
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        onBeforeInit={(swiper) => {
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
        }}
        pagination={{ clickable: true }}
        breakpoints={{
          1024: { slidesPerView: 6 },
          768: { slidesPerView: 4 },
          480: { slidesPerView: 2 },
        }}
      >
        {categories.map((category, idx) => (
          <SwiperSlide key={idx}>
            <div
              className="flex flex-col items-center justify-center p-4 rounded-md"
              style={{ backgroundColor: category.bgColor }}
            >
              <img
                src={category.img}
                alt={category.title}
                className="w-20 h-20 object-contain mb-2"
              />
              <h1 className="font-medium">{category.title}</h1>
              <p className="text-sm text-gray-500">{category.item} items</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom arrows */}
      <div ref={prevRef} className="absolute left-0 top-32 -translate-y-1/2 z-10 cursor-pointer text-2xl bg-gray-200 rounded-full p-2 text-[#3BB77E]">
        <IoArrowBackSharp />
      </div>
      <div ref={nextRef} className="absolute right-0 top-32 -translate-y-1/2 z-10 cursor-pointer text-2xl bg-gray-200 rounded-full p-2 text-[#3BB77E]">
        <IoArrowForwardSharp />
      </div>
    </div>
  );
}
