import Link from 'next/link';
import React from 'react';

function Navbar() {
  return (
    <section className="navbar">
        <div className="container">
            <div className="flex justify-between items-center mt-4 bg-white rounded-3xl p-4 shadow-md shadow-secondary-100">
                <Link href='/' className='block uppercase font-semibold font-black text-3xl text-primary-100 '>+Fitness</Link>
                <ul className="flex gap-6">
                    <li className='*:block'>
                        <Link href='/' className='block font-danaBold text-xl font-black text-secondary-300 duration-400 ease-linear hover:text-primary-200'>خانه</Link>
                    </li>
                    <li>
                        <Link href='/' className='block font-danaBold text-xl font-black text-secondary-300 duration-400 ease-linear hover:text-primary-200'>مربیان</Link>
                    </li>
                    <li>
                        <Link href='/' className='block font-danaBold text-xl font-black text-secondary-300 duration-400 ease-linear hover:text-primary-200'>خدمات</Link>
                    </li>
                    <li>
                        <Link href='/' className='block font-danaBold text-xl font-black text-secondary-300 duration-400 ease-linear hover:text-primary-200'>تماس با ما</Link>
                    </li>
                    <li>
                        <Link href='/' className='block font-danaBold text-xl font-black text-secondary-300 duration-400 ease-linear hover:text-primary-200'>بلاگ</Link>
                    </li>
                    <li>
                        <Link href='/' className='block font-danaBold text-xl font-black text-secondary-300 duration-400 ease-linear hover:text-primary-200'>درباره ما</Link>
                    </li>
                    <li>
                        <Link href='/' className='block font-danaBold text-xl font-black text-secondary-300 duration-400 ease-linear hover:text-primary-200'>مشاوره آنلاین</Link>
                    </li>
                </ul>
                <Link href='' className='btn_primary'>ورود / ثبت نام</Link>
            </div>
        </div>
    </section>
  )
}

export default Navbar