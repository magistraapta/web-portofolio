import React from 'react'
import '../styles/globals.css'
import Link from 'next/link'
export default function Navbar() {
  return (
    <div className=''>
        <nav className="navbar">
            <ul className='flex w-64 justify-between'>
                <li className=' text-grey font-semibold hover:text-white'><Link href="/">Home</Link></li>
                <li className=' text-grey font-semibold hover:text-white'><Link href="/about">About</Link></li>
                <li className='text-grey font-semibold hover:text-white '><Link href="/projects">Projects</Link></li>
            </ul>
        </nav>
    </div>
  )
}
