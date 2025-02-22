"use client"
import Image from 'next/image'
import Link from 'next/link'
import React, { useRef } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { IoIosArrowBack , IoIosArrowForward } from "react-icons/io";

function Articles() {
        const swiperRef = useRef(null);
    
  return (
    <section className="block mt-16">
        <div className="container">
            <div className="block">
                <h4 className="title">مقالات ما </h4>
            </div>
            <div className="block mt-8">
            <div className="block mt-12">
          <Swiper
            ref={swiperRef}
            slidesPerView={3}
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
                slidesPerView: 3,
                spaceBetween: 20,
              },
            }}
            className="mySwiper"
          >
            <SwiperSlide className="pb-6">
            <div className="block bg-white p-2 rounded-lg shadow-lg shadow-secondary-200">
                    <Image src="/assets/images/p-3.jpg" width={100} height={100} className='block rounded-sm w-full'/>
                    <div className="block mt-4">
                        <h6 className="block font-danaBold text-3xl text-secondary-300">نقشه تغذیه سالم در زندگی</h6>
                        <p className="block text-sm font-danaMedium mt-4">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است</p>
                        <Link href='/' className='block font-danaBlack mt-4 text-lg text-primary-100 duration-400 ease-linear hover:text-primary-200'>بیشتر </Link>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide className="pb-6">
            <div className="block bg-white p-2 rounded-lg shadow-lg shadow-secondary-200">
                    <Image src="/assets/images/p-3.jpg" width={100} height={100} className='block rounded-sm w-full'/>
                    <div className="block mt-4">
                        <h6 className="block font-danaBold text-3xl text-secondary-300">نقشه تغذیه سالم در زندگی</h6>
                        <p className="block text-sm font-danaMedium mt-4">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است</p>
                        <Link href='/' className='block font-danaBlack mt-4 text-lg text-primary-100 duration-400 ease-linear hover:text-primary-200'>بیشتر </Link>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide className="pb-6">
            <div className="block bg-white p-2 rounded-lg shadow-lg shadow-secondary-200">
                    <Image src="/assets/images/p-3.jpg" width={100} height={100} className='block rounded-sm w-full'/>
                    <div className="block mt-4">
                        <h6 className="block font-danaBold text-3xl text-secondary-300">نقشه تغذیه سالم در زندگی</h6>
                        <p className="block text-sm font-danaMedium mt-4">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است</p>
                        <Link href='/' className='block font-danaBlack mt-4 text-lg text-primary-100 duration-400 ease-linear hover:text-primary-200'>بیشتر </Link>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide className="pb-6">
            <div className="block bg-white p-2 rounded-lg shadow-lg shadow-secondary-200">
                    <Image src="/assets/images/p-3.jpg" width={100} height={100} className='block rounded-sm w-full'/>
                    <div className="block mt-4">
                        <h6 className="block font-danaBold text-3xl text-secondary-300">نقشه تغذیه سالم در زندگی</h6>
                        <p className="block text-sm font-danaMedium mt-4">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است</p>
                        <Link href='/' className='block font-danaBlack mt-4 text-lg text-primary-100 duration-400 ease-linear hover:text-primary-200'>بیشتر </Link>
                    </div>
                </div>
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
        </div>
    </section>
  )
}

export default Articles