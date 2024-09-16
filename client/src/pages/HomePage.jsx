import React, { useState, useEffect } from 'react'
import Navbar from '../components/Navbar'
import Card from '../components/Card'
import Footer from '../components/Footer'

export default function HomePage() {
  const [blogs, setBlogs] = useState([]);
  const [search, setSearch] = useState('');


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
    <div className='bg-[#f7f7f7]'>
        <div className='h-[500px]'>
            <Navbar/>
            <div className='pl-28 pr-28 pt-12'>
              Few Sentences here along with an animation
            </div>
        </div>

        {/* SEARCH BOX */}
        <div className='flex justify-center'>
          <input className='w-[1000px] bg-white py-3 px-6 rounded-full text-[17px] shadow-sm shadow-[#d8d7d7]' type='text' placeholder='Search' value={search}></input>
        </div>

        {/* BLOGS */}
        <div className='w-3/4 mx-auto pt-40 grid grid-cols-3 justify-evenly'>

          {blogs.length > 0 ? (
            blogs.map((blog, index) => {

              const alignmentClasses = ['justify-self-start', 'justify-self-center', 'justify-self-end'];

              const alignmentClass = alignmentClasses[index % 3];

              return (
                <div key={blog._id} className={alignmentClass}>
                  <Card info={blog} />
                </div>
              );
            })
          ) : (
            <p>No blogs</p>
          )}

          {blogs.length > 0 ? (
            blogs.map((blog, index) => {

              const alignmentClasses = ['justify-self-start', 'justify-self-center', 'justify-self-end'];

              const alignmentClass = alignmentClasses[index % 3];

              return (
                <div key={blog._id} className={alignmentClass}>
                  <Card info={blog} />
                </div>
              );
            })
          ) : (
            <p>No blogs</p>
          )}
          
          {blogs.length > 0 ? (
            blogs.map((blog, index) => {

              const alignmentClasses = ['justify-self-start', 'justify-self-center', 'justify-self-end'];

              const alignmentClass = alignmentClasses[index % 3];

              return (
                <div key={blog._id} className={alignmentClass}>
                  <Card info={blog} />
                </div>
              );
            })
          ) : (
            <p>No blogs</p>
          )}
          






        </div>
        {/* FOOTER */}
        <Footer/>
    </div>
  )
}
