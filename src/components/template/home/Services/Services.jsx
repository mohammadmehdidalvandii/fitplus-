import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

function Services() {
  return (
    <section className="block mt-12">
        <div className="container">
            <div className="block">
                <h4 className="title">خدمات ما</h4>
            </div>
            <div className="grid mt-12 gap-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
                <div className="block text-center bg-white shadow-lg shadow-secondary-200 rounded-lg p-2">
                    <Image src='/assets/images/p-1.jpg' alt='image services' width={100} height={100} className='w-full h-100'/>
                    <div className="block mt-8">
                        <h5 className="block font-danaBold text-2xl text-secondary-300">برنامه تمرینی </h5>
                        <p className="block font-danaBold text-sm text-secondary-200 mt-3">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.</p>
                        <Link href='/' className='btn_primary mt-4'>دریافت</Link>
                    </div>
                </div>
                <div className="block text-center bg-white shadow-lg shadow-secondary-200 rounded-lg p-2">
                    <Image src='/assets/images/p-1.jpg' alt='image services' width={100} height={100} className='w-full h-100'/>
                    <div className="block mt-8">
                        <h5 className="block font-danaBold text-2xl text-secondary-300">برنامه تمرینی </h5>
                        <p className="block font-danaBold text-sm text-secondary-200 mt-3">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.</p>
                        <Link href='/' className='btn_primary mt-4'>دریافت</Link>
                    </div>
                </div>
                <div className="block text-center bg-white shadow-lg shadow-secondary-200 rounded-lg p-2">
                    <Image src='/assets/images/p-1.jpg' alt='image services' width={100} height={100} className='w-full h-100'/>
                    <div className="block mt-8">
                        <h5 className="block font-danaBold text-2xl text-secondary-300">برنامه تمرینی </h5>
                        <p className="block font-danaBold text-sm text-secondary-200 mt-3">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.</p>
                        <Link href='/' className='btn_primary mt-4'>دریافت</Link>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Services