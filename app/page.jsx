import React from 'react'
import '../styles/globals.css'
import Navbar from '../app/navbar'
import Profile from '../app/Profile'
import Projects from '../app/Projects'
import Footer from '../app/Footer'
export default function Page() {
  return (
    <div className='my-12 mx-80 '>
        <Navbar />
        <Profile/>
        <Projects/>
        <Footer/>
    </div>
  )
}
