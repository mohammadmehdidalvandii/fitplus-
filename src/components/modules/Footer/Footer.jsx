import React from 'react'
import Link from 'next/link'

function Footer() {
  return (
    <section className="block mt-12 bg-primary-100/90 rounded-tr-4xl rounded-tl-4xl py-8 text-white">
        <div className="container">
            <div className="grid gap-8 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
                <div className="block">
                    <h2 className="block text-7xl font-danaBlack uppercase">fitness+</h2>
                    <p className="block mt-4 text-base font-black">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد</p>
                </div>
                <div className="block">
                    <h3 className="block mb-4 font-danaBold text-3xl ">دسترسی سریعی</h3>
                    <ul className="block">
                        <li className="block mb-4">
                            <Link href='/' className='block  text-xl font-bold duration-400 ease-linear hover:text-secondary-300'>خانه</Link>
                        </li>
                        <li className="block mb-4">
                            <Link href='/' className='block  text-xl font-bold duration-400 ease-linear hover:text-secondary-300'>مربیان</Link>
                        </li>
                        <li className="block mb-4">
                            <Link href='/' className='block  text-xl font-bold duration-400 ease-linear hover:text-secondary-300'>تماس با ما</Link>
                        </li>
                    </ul>
                </div>
                <div className="block">
                    <h3 className="block mb-4 font-danaBold text-3xl ">دسترسی سریعی</h3>
                    <ul className="block">
                        <li className="block mb-4">
                            <Link href='/' className='block  text-xl font-bold duration-400 ease-linear hover:text-secondary-300'>بلاگ</Link>
                        </li>
                        <li className="block mb-4">
                            <Link href='/' className='block  text-xl font-bold duration-400 ease-linear hover:text-secondary-300'>مشاوره آنلاین</Link>
                        </li>
                        <li className="block mb-4">
                            <Link href='/' className='block  text-xl font-bold duration-400 ease-linear hover:text-secondary-300'>ثبت نام مربی</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Footer