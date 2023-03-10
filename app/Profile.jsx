import React from 'react'
import '../styles/globals.css'
import Image from 'next/image'
export default function Profile() {
  return (
    <div className='mt-20 flex'>
        <div className='w-8/12 mr-16'>
            <div className='text-white'>
                <h1 className=' text-5xl font-bold'>Magistra Apta</h1>
                <p className='mt-2 text-white font-semibold'>Computer Science student</p>
            </div>
            <p className='text-grey mt-5'>Passionate about front-end development and constantly learning new technologies. Currently diving into React.js and Next.js to enhance my skills. Always looking for new projects to challenge and improve my abilities.</p>
        </div>
        <div className='w-4/12'>
            <Image
            src={'/static/images/Frame 15.svg'}
            alt=' profile pict'
            width={172}
            height={172}
            />
        </div>
    </div>
  )
}
