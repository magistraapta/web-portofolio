import React from 'react'
import Navbar from '../navbar'
export default function Projects() {
  return (
    <div className=' mx-80 my-12 max-lg:mx-40 max-md:mx-20 max-sm:mx-10'>
        <Navbar/>
        <div className='mt-14'>
        <div>
          <h1 className=' text-5xl font-bold'>This is my latest projects</h1>
          </div>
            <div className='mt-4 font-light leading-relaxed mb-4'>
              <p>My project that I made basically from my learning journey about web developing. When learning
                web developing I prefer learning with project based method, it makes me easier understand programming when learning
                with that method. And my other projects here coming from a task that my lecturer gave me.
              </p>
            </div>
        </div>
        <hr />
        
    </div>
  )
}
