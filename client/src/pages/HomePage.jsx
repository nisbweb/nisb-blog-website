import React from 'react'
import Navbar from '../components/Navbar'
import Card from '../components/Card'
import Footer from '../components/Footer'

export default function HomePage() {
  return (
    <div>
        <div className='h-[500px] bg-[#D5F2FD]'>
            <Navbar/>
        </div>
        {/* SEARCH BOX */}
        <div>

        </div>
        {/* BLOGS */}
        <div className='w-3/4 mx-auto pt-40 grid grid-cols-3 justify-evenly'>
          <div className='justify-self-start'>
            <Card/>
          </div>
          <div className='justify-self-center'>
            <Card/>
          </div>
          <div className='justify-self-end'>
            <Card/>
          </div>
          <div className='justify-self-start'>
            <Card/>
          </div>
          <div className='justify-self-center'>
            <Card/>
          </div>
          <div className='justify-self-end'>
            <Card/>
          </div>

        </div>
        {/* FOOTER */}
        <Footer/>
    </div>
  )
}


{/* <div className='w-3/4 mx-auto pt-40 grid grid-cols-3'>
      {cards.map((card, index) => (
        <div
          key={index}
          className={
            index === 0
              ? 'justify-self-start'
              : index === 1
              ? 'justify-self-center'
              : index === 2
              ? 'justify-self-end'
              : ''
          }
        >
          <Card content={card} />
        </div>
      ))}
    </div> */}
