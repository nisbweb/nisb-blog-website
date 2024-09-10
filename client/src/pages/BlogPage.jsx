import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

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
    <div className='bg-[#f7f7f7] h-screen pt-28 pl-52 pr-52 pb-24 flex flex-row gap-20'>
      <div className="ql-editor w-screen bg-white" style={{ padding: 0 }}>
        {/* <img src={blogInfo.co}></img> */}
        <img className='h-72 w-full object-cover' src={`https://drive.google.com/thumbnail?id=${blogInfo.cover}`}/>
        <div className='mt-12 ml-12 mr-12'>
          <div className='heading text-[40px] pb-12'>{blogInfo.title}</div>
          <div dangerouslySetInnerHTML={{__html:blogInfo.content}}/>
        </div>
      </div>



      <div className='min-w-72 bg-white pl-10 pr-10 pt-10'>
        Similar blogs
      </div>
    </div>
  );
}
