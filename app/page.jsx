import React from 'react'
import '../styles/globals.css'
import Navbar from '../app/navbar'
import Profile from '../app/Profile'
import Projects from '../app/Projects'
import Footer from '../app/Footer'
export default function Page() {
  return (
    <div className='mx-80 my-12 max-lg:mx-40 max-md:mx-20 max-sm:mx-10 '>
        <Navbar />
        <Profile/>
        <Projects/>
        <Footer/>
    </div>
  )
}
