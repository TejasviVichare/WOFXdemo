import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

function NotFound() {
  return (
    <>
    <div className='h-full text-red-50 flex justify-center items-center pt-24 pb-10'>
       <Image src={'/404.svg'} alt="Page not found" width={600} height={250} />
       
    </div>
    <div className='flex justify-center'><Link href='dkjhgkj' class="  bg-gray-800 text-white px-6 py-2 cursor-pointer hover:bg-black  mb-4 rounded-3xl">Go to Home</Link></div>
    </>
  )
}

export default NotFound