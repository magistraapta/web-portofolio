import React from 'react'
import '../styles/globals.css'
import Image from 'next/image'
export default function Profile() {
  return (
    <div className='mt-10 flex  justify-between'>
        <div className='w-8/12'>
            <div className='text-white'>
                <h1 className=' text-5xl max-sm:text-3xl font-bold'>Magistra Apta</h1>
                <p className='mt-2 text-white max-sm:text-sm font-semibold'>Computer Science student</p>
            </div>
            <div className=' mt-5 max-sm:w-full ' >
              <p className='text-grey max-sm:text-xs'>
                Passionate about front-end development and constantly learning new technologies. 
                Currently diving into React.js and Next.js to enhance my skills. Always looking for new projects to challenge and improve my abilities.
              </p> 
            </div>
            
        </div>
        <div className=' '>
            <Image
            src={'/static/images/Frame 15.svg'}
            alt=' profile pict'
            width={200}
            height={200}
            className="grayscale"
            />
        </div>
    </div>
  )
}
