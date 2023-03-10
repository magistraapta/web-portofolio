import React from 'react'
import Navbar from '../navbar'

export default function page() {
  return (
    <div className='mx-80 my-12 max-lg:mx-60 max-md:mx-40 max-sm:mx-10'>
      <Navbar/>
      <div className='mt-14'>
        <div>
        <h1 className=' text-5xl font-bold'>About me</h1>
        </div>
        <div className='mt-4 font-light leading-loose '>
          <p>Hey, my name is <span className='font-bold'>Muhammad Magistra Apta Paramarta</span> . 
          Most people called me <span className='font-bold'>Agis</span>.
          </p>
          <hr className='my-8 bg-grey'/>
          <p>
          As a <span className='font-bold'>computer science</span>  student, I am constantly seeking out new challenges and opportunities to learn and grow, and I am
          <span className='font-bold'> dedicated</span> to mastering the tools and technologies 
          that are critical to success in this field. Whether it's building a new software application or analyzing large datasets, I am always <span className='font-bold'> eager</span> to take on new 
          challenges and push the boundaries of what is possible.
          </p>
          <br />
          <p>
          My academic pursuits are centered around the field of computer science, with a particular interest in software development and data analysis. 
          I believe that these skills are essential for creating software solutions that are scalable, efficient, and effective. Additionally, 
          I am committed to <span className='font-bold'>staying up-to-date</span> with the latest industry trends and best practices to ensure that my skills remain relevant and in-demand.
          </p>
        </div>
      </div>
    </div>
  )
}
