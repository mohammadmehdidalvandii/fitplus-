"use client"
import Image from "next/image";
import React, { useRef } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import Link from "next/link";
import { IoIosArrowBack , IoIosArrowForward } from "react-icons/io";
import CoachCard from "@/components/modules/CoachCard/CoachCard";


function Coaches() {
    const swiperRef = useRef(null);

  return (
    <section className="block mt-16">
      <div className="container">
        <div className="block">
          <h4 className="title">مربیان برتر ما</h4>
        </div>
        <div className="block mt-12">
          <Swiper
            ref={swiperRef}
            slidesPerView={4}
            spaceBetween={20}
            navigation={{
              nextEl: `.navButtonNext`,
              prevEl: `.navButtonPrev`,
            }}
            modules={[Navigation]}
            breakpoints={{
              270: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              380: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              540: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 20,
              },
            }}
            className="mySwiper"
          >
            <SwiperSlide className="pb-6">
              <CoachCard/>
            </SwiperSlide>
            <SwiperSlide className="pb-6">
                <CoachCard/>
            </SwiperSlide>
            <SwiperSlide className="pb-6">
                <CoachCard/>
            </SwiperSlide>
            <SwiperSlide className="pb-6">
                <CoachCard/>
            </SwiperSlide>
            <SwiperSlide className="pb-6">
                <CoachCard/>
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="block mt-8">
        <div className="flex items-center justify-center gap-4">
                                        <button className="navButtonNext"
                                             onClick={() =>
                                                {
                                                    if (swiperRef.current) {
                                                      swiperRef.current.swiper.slideNext();
                                                    }
                                                  }
                                             }
                                        >
                                            <IoIosArrowForward/> 
                                        </button>
                                        <button className="navButtonPrev"
                                             onClick={() => {
                                                if (swiperRef.current) {
                                                  swiperRef.current.swiper.slidePrev();
                                                }
                                              }}
                                        >
                                            <IoIosArrowBack/>
                                        </button>
                                    </div>
        </div>
      </div>
    </section>
  );
}

export default Coaches;
