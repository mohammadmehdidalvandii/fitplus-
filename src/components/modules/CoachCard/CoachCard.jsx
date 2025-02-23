import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function CoachCard() {
  return (
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
  )
}

export default CoachCard