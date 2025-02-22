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
              <Link href='/' className="block bg-white p-2 rounded-lg shadow-lg shadow-secondary-100 duration-400 hover:bg-primary-100 hover:text-white">
                <Image
                  src="/assets/images/p-1.jpg"
                  alt="coaches "
                  width={100}
                  height={100}
                  className="rounded-md w-full h-100"
                />
                <div className="block text-center mt-4">
                  <h6 className="block font-danaMedium text-2xl text-secondary-300">
                    محمدرضا محمدی
                  </h6>
                  <p className="block font-danaMedium text-lg text-secondary-200">
                    مربی
                  </p>
                </div>
              </Link>
            </SwiperSlide>
            <SwiperSlide className="pb-6">
              <Link href='/' className="block bg-white p-2 rounded-lg shadow-lg shadow-secondary-100 duration-400 hover:bg-primary-100 hover:text-white">
                <Image
                  src="/assets/images/p-1.jpg"
                  alt="coaches "
                  width={100}
                  height={100}
                  className="rounded-md w-full h-100"
                />
                <div className="block text-center mt-4">
                  <h6 className="block font-danaMedium text-2xl text-secondary-300">
                    محمدرضا محمدی
                  </h6>
                  <p className="block font-danaMedium text-lg text-secondary-200">
                    مربی
                  </p>
                </div>
              </Link>
            </SwiperSlide>
            <SwiperSlide className="pb-6">
              <Link href='/' className="block bg-white p-2 rounded-lg shadow-lg shadow-secondary-100 duration-400 hover:bg-primary-100 hover:text-white">
                <Image
                  src="/assets/images/p-1.jpg"
                  alt="coaches "
                  width={100}
                  height={100}
                  className="rounded-md w-full h-100"
                />
                <div className="block text-center mt-4">
                  <h6 className="block font-danaMedium text-2xl text-secondary-300">
                    محمدرضا محمدی
                  </h6>
                  <p className="block font-danaMedium text-lg text-secondary-200">
                    مربی
                  </p>
                </div>
              </Link>
            </SwiperSlide>
            <SwiperSlide className="pb-6">
              <Link href='/' className="block bg-white p-2 rounded-lg shadow-lg shadow-secondary-100 duration-400 hover:bg-primary-100 hover:text-white">
                <Image
                  src="/assets/images/p-1.jpg"
                  alt="coaches "
                  width={100}
                  height={100}
                  className="rounded-md w-full h-100"
                />
                <div className="block text-center mt-4">
                  <h6 className="block font-danaMedium text-2xl text-secondary-300">
                    محمدرضا محمدی
                  </h6>
                  <p className="block font-danaMedium text-lg text-secondary-200">
                    مربی
                  </p>
                </div>
              </Link>
            </SwiperSlide>
            <SwiperSlide className="pb-6">
              <Link href='/' className="block bg-white p-2 rounded-lg shadow-lg shadow-secondary-100 duration-400 hover:bg-primary-100 hover:text-white">
                <Image
                  src="/assets/images/p-1.jpg"
                  alt="coaches "
                  width={100}
                  height={100}
                  className="rounded-md w-full h-100"
                />
                <div className="block text-center mt-4">
                  <h6 className="block font-danaMedium text-2xl text-secondary-300">
                    محمدرضا محمدی
                  </h6>
                  <p className="block font-danaMedium text-lg text-secondary-200">
                    مربی
                  </p>
                </div>
              </Link>
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
