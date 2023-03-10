import React from 'react'
import Link from 'next/link'

export default function Footer() {
  return (
    <div className='mt-20'>
        <hr className='bg-grey' />
        <div className=' mt-12 max-sm:mt-6 '>
            <ul className='text-grey flex justify-around max-sm:text-xs'>
                <li className='hover:text-white '>
                    <Link href="https://twitter.com/hidupkeraz">Twitter</Link>
                </li>
                <li className='hover:text-white '>
                    <Link href="https://github.com/magistraapta">Github</Link>
                </li>
                <li className='hover:text-white '>
                    <Link href="https://www.linkedin.com/in/muhammad-magistra-apta-paramarta-1555a2219/">Linkedin</Link>
                </li>
                <li className='hover:text-white '>
                    <Link href="https://www.instagram.com/magistraapp/">Instagram</Link>
                </li>
            </ul>
        </div>
    </div>
  )
}
