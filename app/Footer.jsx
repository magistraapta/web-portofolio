import React from 'react'
import Link from 'next/link'

export default function Footer() {
  return (
    <div className='mt-20'>
        <hr className='bg-grey' />
        <div className='flex justify-between w-4/12 mt-12'>
            <div>
                <ul className='text-grey'>
                    <li>Home</li>
                    <li className='my-4'><Link href="/about">About</Link></li>
                    <li>Projects</li>
                </ul>
            </div>
            <div>
                <ul className='text-grey'>
                    <li><Link href="https://twitter.com/hidupkeraz">Twitter</Link></li>
                    <li className='my-4'><Link href="https://github.com/magistraapta">Github</Link></li>
                    <li className='my-4'><Link href="https://www.linkedin.com/in/muhammad-magistra-apta-paramarta-1555a2219/">Linkedin</Link></li>
                    <li><Link href="https://www.instagram.com/magistraapp/">Instagram</Link></li>
                </ul>
            </div>
        </div>
    </div>
  )
}
