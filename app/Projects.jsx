import React from 'react'
import Link from 'next/link'
export default function Projects() {
    const movieUrl = "https://movie-web-chi.vercel.app/";
  return (
    <div className='mt-20'>
        <h1 className='text-3xl font-bold'>Latest Project</h1>
        <div className='flex mt-4 '>
            <div className='border border-grey w-6/12 rounded-xl mr-2'>
                <div className='ml-6 my-6 mr-6' >
                    <h3 className='font-bold text-2xl'>Movie web</h3>
                    <p className='text-grey text-xs'>This is web that show a bunch of movie list using API from OMDB public API</p>
                    <h2 className='font-semibold hover:underline'><Link href="https://github.com/magistraapta/movie-web">magistraapta/movie-web</Link></h2>
                </div>
            </div>
            <div className='border border-grey w-6/12 rounded-xl'>
                <div className='ml-6 my-6'>
                    <h3 className='font-bold text-2xl'>To do List</h3>
                    <p className='text-grey text-xs'>To do list app using Next js to organize your day</p>
                    <h2 className='font-semibold'>magistraapta/todo-list-app</h2>
                </div>
            </div>
        </div>
        <div className='mt-4 w-3/12'>
            <p className='text-grey  hover:underline'><Link href="/projects">See all my projects</Link></p>
        </div>
    </div>
  )
}
