import React from 'react'
import '../styles/globals.css'
export default function Navbar() {
  return (
    <div className=''>
        <nav className="navbar">
            <ul className='flex w-64 justify-between'>
                <li className=' font-bold'>Home</li>
                <li className=' text-grey'>About</li>
                <li className='text-grey'>Projects</li>
            </ul>
        </nav>
    </div>
  )
}
