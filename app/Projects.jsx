import React from 'react'
export default function Projects() {
  return (
    <div className='mt-20'>
        <h1 className='text-3xl font-bold'>Latest Project</h1>
        <div className='flex mt-4 '>
            <div className='border border-grey w-6/12 rounded-xl mr-2'>
                <div className='ml-6 my-6'>
                    <h3 className='font-bold text-2xl'>To do List</h3>
                    <p className='text-grey text-xs'>To do list app using Next js to organize your day</p>
                    <h2 className='font-semibold'>magistraapta/todo-list-app</h2>
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
            <p className='text-grey  hover:underline'>See all my projects</p>
        </div>
    </div>
  )
}
