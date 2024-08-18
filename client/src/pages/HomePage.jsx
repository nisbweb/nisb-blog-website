import React from 'react'
import Navbar from '../components/Navbar'
import Card from '../components/Card'
import Footer from '../components/Footer'

export default function HomePage() {
  return (
    <div>
        <div className='h-[500px] bg-[#D5F2FD]'>
            <Navbar/>
            {/* <h1 className="text-3xl">Product sans</h1> */}
        </div>
        {/* SEARCH BOX */}
        <div>

        </div>
        {/* BLOGS */}
        <div className='pl-40 pr-40 pt-40 grid grid-cols-4 gap-20 space-around'>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
        </div>
        {/* FOOTER */}
        <Footer/>
    </div>
  )
}
