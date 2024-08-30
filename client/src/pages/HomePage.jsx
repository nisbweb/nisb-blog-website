import React, { useState, useEffect } from 'react'
import Navbar from '../components/Navbar'
import Card from '../components/Card'
import Footer from '../components/Footer'

export default function HomePage() {
  const [blogs, setBlogs] = useState([]);


  useEffect(() => {
    async function fetchBlogs(){
      try{
        const res = await fetch('http://localhost:4000/getBlogs');
        if(!res.ok){
          alert("could not fetch data");
        }

        const data = await res.json();
        console.log("Got data : ", data);
        setBlogs(data);
      }
      catch(err){
  
      }
    }

    fetchBlogs();
  },[]);



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
          {/* <div className='justify-self-start'>
            <Card/>
          </div>
          <div className='justify-self-center'>
            <Card/>
          </div>
          <div className='justify-self-end'>
            <Card/>
          </div> */}
          

        
          {blogs.length > 0 ? (
            blogs.map((blog) => (

                
                <Card info={blog}/>
              
              ))
            ) : (
              <p>No blogs</p>
            )}





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
