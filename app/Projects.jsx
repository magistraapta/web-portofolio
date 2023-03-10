import React from 'react'
import Link from 'next/link'
export default function Projects() {
  return (
    <div className='mt-20 max-sm:mt-10 '>
        <h1 className='text-3xl font-bold max-sm:text-xl'>Latest Project</h1>
        <div className='lg:flex mt-4 justify-evenly '>
            <div className='border border-grey w-5/12 max-lg:w-full rounded-xl'>
                <div className='ml-6 my-6 mr-6 max-sm:ml-4 max-sm:my-3' >
                    <h3 className='font-bold text-2xl max-sm:text-xl'>Movie web</h3>
                    <p className='text-grey text-xs'>This is web that show a bunch of movie list using API from OMDB public API</p>
                    <h2 className='font-semibold hover:underline max-sm:text-sm'><Link href="https://github.com/magistraapta/movie-web">magistraapta/movie-web</Link></h2>
                </div>
            </div>
            <div className='border border-grey w-5/12 rounded-xl max-lg:w-full max-lg:mt-4'>
                <div className='ml-6 my-6 mr-6 max-sm:ml-4 max-sm:my-3'>
                    <h3 className='font-bold text-2xl max-sm:text-xl'>To do List</h3>
                    <p className='text-grey text-xs'>To do list app using Next js to organize your day</p>
                    <h2 className='font-semibold'>magistraapta/todo-list-app</h2>
                </div>
            </div>
        </div>
        <div className='mt-4 w-full max-sm:text-xs' >
            <p className='text-grey  hover:underline'><Link href="/projects">See all my projects</Link></p>
        </div>
    </div>
  )
}
