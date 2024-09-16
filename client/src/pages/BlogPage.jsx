import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import 'react-quill/dist/quill.snow.css';

export default function BlogPage() {
  const [blogInfo, setBlogInfo] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetch('http://localhost:4000/get-blog-info/' + id).then(response => {
      response.json().then(blogInfo => {
        setBlogInfo(blogInfo);
        console.log(blogInfo);
      });
    });
  }, [id]);

  if (!blogInfo) return '';

  return (
    <div className='bg-[#f7f7f7] pt-28 pl-52 pr-52 pb-28 flex flex-row gap-20'>
      <div className="ql-editor w-screen bg-white" style={{ padding: 0 }}>
        {/* <img src={blogInfo.co}></img> */}
        <img className='h-72 w-full object-cover' src={`https://drive.google.com/thumbnail?id=${blogInfo.cover}`}/>
        <div className='mt-12 ml-12 mr-12'>
          <div className='heading text-[40px] pb-12'>{blogInfo.title}</div>

          <div className=" ql-snow">
            <div className="ql-editor" style={{ padding: 0 }}>
              <div dangerouslySetInnerHTML={{__html:blogInfo.content}}/>
            </div>
          </div>

          <div className='pt-7 pb-4 flex flex-row items-start gap-2'>
              <img src={`https://drive.google.com/thumbnail?id=${blogInfo.writerpic}`} alt="Sample Image" className="rounded-full w-12 h-12"></img>

              <div className='pl-4'>
                <div className='heading text-[20px] text-[13px]'>{blogInfo.name}</div>
                <div className='content text-[15px] text-[13px]'>{blogInfo.about}</div>

                <div className='mt-2 mb-12 flex flex-row items-center gap-2'>
                  <a href='' className='hover:text-gray-500'><i className="fa-solid fa-envelope text-lg"></i></a>
                  <a href='' className='hover:text-gray-500'><i className="fa-brands fa-linkedin text-lg"></i></a>
                  <a href='' className='hover:text-gray-500'><i className="fa-brands fa-youtube text-lg"></i></a>
                  <a href='' className='hover:text-gray-500'><i className="fa-brands fa-github text-lg"></i></a>
                </div>

              </div>
                
          </div>

          

        </div>
      </div>



      <div className='min-w-72 bg-white pl-10 pr-10 pt-10'>
        Similar blogs
      </div>
    </div>
  );
}
