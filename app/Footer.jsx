import React from 'react'

export default function Footer() {
  return (
    <div className='mt-20'>
        <hr className='bg-grey' />
        <div className='flex justify-between w-4/12 mt-12'>
            <div>
                <ul className='text-grey'>
                    <li>Home</li>
                    <li className='my-4'>About</li>
                    <li>Projects</li>
                </ul>
            </div>
            <div>
                <ul className='text-grey'>
                    <li><a href="#">Twitter</a></li>
                    <li className='my-4'><a href="#">Github</a></li>
                    <li className='my-4'><a href="#">Linkedin</a></li>
                    <li><a href="#">Instagram</a></li>
                </ul>
            </div>
        </div>
    </div>
  )
}
