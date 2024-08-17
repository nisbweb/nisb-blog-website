import React from 'react'
import Navbar from '../components/Navbar'
import Card from '../components/Card'

export default function HomePage() {
  return (
    <div className='pb-20'>
        <div className='h-[500px] bg-[#D5F2FD]'>
            <Navbar/>
            {/* <h1 className="text-3xl">Product sans</h1> */}
        </div>
        {/* SEARCH BOX */}
        <div>

        </div>
        {/* BLOGS */}
        <div className='pl-40 pr-40 pt-40 flex flex-row item'>
          <Card/>
          <Card/>
          <Card/>
        </div>
    </div>
  )
}
