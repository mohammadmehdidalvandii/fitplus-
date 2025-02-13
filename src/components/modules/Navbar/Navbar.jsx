"use client"
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FaBarsStaggered } from "react-icons/fa6";
import { FaTimes } from "react-icons/fa";

function Navbar() {
    const [activeMenu , setActiveMenu] = useState(false);
    const [scrollNavbar ,setScrollNavbar] = useState(false)
    useEffect(()=>{
        const navbarScroll = ()=>{
            const currentScroll = window.scrollY
            if(currentScroll > 100){
                setScrollNavbar(true)
            }else{
                setScrollNavbar(false)
            }
        }


         window.addEventListener("scroll" , navbarScroll);
         return ()=> window.removeEventListener("scroll" , navbarScroll)
    },[])

    const handlerNavMenuShow = ()=>{
        setActiveMenu(true)
    }
    const handlerNavMenuExit = ()=>{
        setActiveMenu(false)
    }

  return (
    <section className="navbar">
      <div className="container">
        <div className={scrollNavbar ? "hidden lg:flex justify-between items-center top-4 bg-white rounded-3xl p-4 shadow-md shadow-secondary-100 fixed right-4 left-4 z-20":"hidden lg:flex justify-between items-center mt-4 bg-white rounded-3xl p-4 shadow-md shadow-secondary-100"}>
          <Link
            href="/"
            className="block uppercase font-semibold font-black text-3xl text-primary-100 "
          >
            +Fitness
          </Link>
          <ul className="flex gap-6">
            <li className="*:block">
              <Link
                href="/"
                className="block font-danaBold text-xl font-black text-secondary-300 duration-400 ease-linear hover:text-primary-200"
              >
                خانه
              </Link>
            </li>
            <li>
              <Link
                href="/"
                className="block font-danaBold text-xl font-black text-secondary-300 duration-400 ease-linear hover:text-primary-200"
              >
                مربیان
              </Link>
            </li>
            <li>
              <Link
                href="/"
                className="block font-danaBold text-xl font-black text-secondary-300 duration-400 ease-linear hover:text-primary-200"
              >
                خدمات
              </Link>
            </li>
            <li>
              <Link
                href="/"
                className="block font-danaBold text-xl font-black text-secondary-300 duration-400 ease-linear hover:text-primary-200"
              >
                تماس با ما
              </Link>
            </li>
            <li>
              <Link
                href="/"
                className="block font-danaBold text-xl font-black text-secondary-300 duration-400 ease-linear hover:text-primary-200"
              >
                بلاگ
              </Link>
            </li>
            <li>
              <Link
                href="/"
                className="block font-danaBold text-xl font-black text-secondary-300 duration-400 ease-linear hover:text-primary-200"
              >
                درباره ما
              </Link>
            </li>
            <li>
              <Link
                href="/"
                className="block font-danaBold text-xl font-black text-secondary-300 duration-400 ease-linear hover:text-primary-200"
              >
                مشاوره آنلاین
              </Link>
            </li>
          </ul>
          <Link href="" className="btn_primary">
            ورود / ثبت نام
          </Link>
        </div>
        <div className={scrollNavbar ? "lg:hidden flex justify-between items-center top-4 bg-white rounded-3xl p-4 shadow-md shadow-secondary-100 fixed right-4 left-4 z-20 " :"lg:hidden flex justify-between items-center mt-4 bg-white rounded-3xl p-4 shadow-md shadow-secondary-100"}>
          <span 
          className="flex justify-center items-center w-10 h-10 rounded-lg text-2xl text-white cursor-pointer bg-primary-100 "
          onClick={handlerNavMenuShow}
          >
            <FaBarsStaggered />
          </span>
          <Link
            href="/"
            className="block uppercase font-semibold font-black text-3xl text-primary-100 "
          >
            +Fitness
          </Link>
          {activeMenu && (
            <>
                 <div className="bg_shadow"></div>
          <div className="block bg-white fixed right-0 top-0 rounded-bl-4xl rounded-tl-4xl w-78 h-full px-4">
            <span className="flex absolute top-6 left-6 text-3xl duration-400 ease-linear hover:text-primary-100 cursor-pointer"
            onClick={handlerNavMenuExit}
            >
              <FaTimes />
            </span>
            <div className="block mt-20">
              <Link
                href="/"
                className="block uppercase  font-semibold font-black text-3xl text-primary-100 "
              >
                +Fitness
              </Link>
              <ul className="block mt-14">
                <li className="mb-4">
                  <Link
                    href="/"
                    className="block font-danaBold text-xl font-black text-secondary-300 duration-400 ease-linear hover:text-primary-200"
                  >
                    خانه
                  </Link>
                </li>
                <li className="mb-4">
                  <Link
                    href="/"
                    className="block font-danaBold text-xl font-black text-secondary-300 duration-400 ease-linear hover:text-primary-200"
                  >
                    مربیان
                  </Link>
                </li>
                <li className="mb-4">
                  <Link
                    href="/"
                    className="block font-danaBold text-xl font-black text-secondary-300 duration-400 ease-linear hover:text-primary-200"
                  >
                    خدمات
                  </Link>
                </li>
                <li className="mb-4">
                  <Link
                    href="/"
                    className="block font-danaBold text-xl font-black text-secondary-300 duration-400 ease-linear hover:text-primary-200"
                  >
                    تماس با ما
                  </Link>
                </li>
                <li className="mb-4">
                  <Link
                    href="/"
                    className="block font-danaBold text-xl font-black text-secondary-300 duration-400 ease-linear hover:text-primary-200"
                  >
                    بلاگ
                  </Link>
                </li>
                <li className="mb-4">
                  <Link
                    href="/"
                    className="block font-danaBold text-xl font-black text-secondary-300 duration-400 ease-linear hover:text-primary-200"
                  >
                    درباره ما
                  </Link>
                </li>
                <li className="mb-4">
                  <Link
                    href="/"
                    className="block font-danaBold text-xl font-black text-secondary-300 duration-400 ease-linear hover:text-primary-200"
                  >
                    مشاوره آنلاین
                  </Link>
                </li>
              </ul>
            </div>
              <Link href="" className="btn_primary absolute bottom-12  w-72">
            ورود / ثبت نام
              </Link>
          </div>
            </>
          )}
         
        </div>
      </div>
    </section>
  );
}

export default Navbar;
