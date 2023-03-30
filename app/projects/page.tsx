import React from 'react'
import Navbar from '../navbar'
import Image from 'next/image'
import Footer from '../Footer'
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
        <div className=' mt-10 sm:flex justify-between'>
          <div className=" max-sm:w-full w-5/12 bg-white">
            <a href="https://movie-web-chi.vercel.app/">
            <Image
            src={'/static/images/Screen-Shot-2023-03-12-at-12.49.21.webp'}
            alt="project image"
            width={500}
            height={200}
            />
            <div className='mt-4 ml-2 w-10/12 mb-4'>
              <h1 className='font-semibold text-xl text-black'>Movie web list</h1>
              <p className='text-xs text-black'>This project is about website that can show a movie list using public API from OMDB</p>
            </div>
            </a>
          </div>
          <div className=" max-sm:w-full bg-white w-5/12">
            <a href="https://dribbble.com/shots/20850573-Desain-Aplikasi-Pendaftaran-KTP-Secara-Online">
            <Image
            src={'/static/images/Dribbble shot HD - 1.svg'}
            alt="project image"
            width={500}
            height={200}
            />
            <div className='mt-4 ml-2 w-10/12 mb-4'>
              <h1 className='font-semibold text-xl text-black'>User Interface Design</h1>
              <p className='text-xs text-black'>This is design mockup for application that can make id card through online application </p>
            </div>
            </a>
          </div>
          
        </div>
        <div className="mt-14">
          <div className=" max-sm:w-full bg-white w-5/12">
              <a href="https://dribbble.com/shots/20850573-Desain-Aplikasi-Pendaftaran-KTP-Secara-Online">
              <Image
              src={'/static/images/Screen Shot 2023-03-30 at 22.57.58.png'}
              alt="project image"
              width={500}
              height={200}
              />
              <div className='mt-4 ml-2 w-10/12 mb-4'>
                <h1 className='font-semibold text-xl text-black'>To do list website</h1>
                <p className='text-xs text-black'>This is a website that can help you organize your day using to do list</p>
              </div>
              </a>
            </div>
        </div>
        <Footer/>
    </div>
  )
}
