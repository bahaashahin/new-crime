import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { mubahithCards } from "../data/mubahith";

export default function MubahithSlider() {
  return (
    <div className="w-full px-3 py-6">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        loop={true}
        speed={700}
        centeredSlides={true}
        breakpoints={{
          0: { slidesPerView: 1, spaceBetween: 20 },
          768: { slidesPerView: 2, spaceBetween: 30 },
          1024: { slidesPerView: 3, spaceBetween: 40 },
        }}
        className="relative"
      >
        {mubahithCards.map((card, index) => (
          <SwiperSlide key={index} className="flex justify-center">
            <div
              className="w-full max-w-md bg-gray-100 p-6 rounded-lg shadow-lg text-right"
              dir="rtl"
            >
              <h3 className="text-xl font-bold mb-3">{card.title}</h3>
              <ul className="list-disc list-inside space-y-1 text-gray-700">
                {card.content.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom CSS */}
      <style jsx>{`
        .swiper-slide {
          opacity: 0.6;
          transform: scale(0.95);
          transition: all 0.5s ease;
        }
        .swiper-slide-active {
          opacity: 1;
          transform: scale(1);
        }
        .swiper-button-next,
        .swiper-button-prev {
          color: #000;
          top: 50%;
          transform: translateY(-50%);
        }
        .swiper-pagination-bullet-active {
          background: #000;
          transform: scale(1.3);
        }
      `}</style>
    </div>
  );
}
