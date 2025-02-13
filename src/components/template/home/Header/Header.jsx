import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Header() {
  return (
    <section className="block mt-12">
        <div className="container"> 
            <div className="grid  lg:grid-cols-2 md:grid-cols-1 gap-4">
                <div className="block mt-12 lg:text-right md:text-center">
                <h1 className="block font-danaBlack font-black text-secondary-300 text-6xl">فیتنس پلاس </h1>
                    <p className="block font-danaBold font-extrabold text-primary-100 text-3xl mt-8">بزرگترین مرجع تخصصی ورزشی آنلاین ایران</p>
                    <p className="block mt-8 font-danaMedium font-semibold text-3xl">تغذیه  و  برنامه ورزشی</p>
                    <div className="flex gap-4 lg:justify-start  md:justify-center">
                        <Link href='' className='btn_primary mt-8 w-30'>ثبت نام مربی</Link>
                        <Link href='' className='btn_secondary mt-8 w-30'>مشاوره آنلاین</Link>
                    </div>
                </div>
                <div className="lg:flex gap-4  md:hidden">
                    <Image src='/assets/images/p-1.jpg' width={250} height={300} className='rounded-lg'/>
                    <Image src='/assets/images/p-2.jpg' width={250} height={300} className='rounded-lg'/>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Header