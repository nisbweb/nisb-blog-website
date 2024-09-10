import React from 'react'
import book from '../assets/img/book.png';
import { format } from 'date-fns'
import { Link } from 'react-router-dom';

export default function Card({info}) {
  const {_id, cover, title, summary, name, createdAt, writerpic } = info;

  function handle_click(){

  }

  return (
    <Link to={'/blog/'+_id}>
      <div className='relative h-[456px] w-[370px] mb-20 bg-[#ffffff]  shadow-sm shadow-[#b3b3b3] hover:shadow-xl hover:shadow-[#b3b3b3]' onClick={handle_click}> 
          <img className='h-[160px] w-[370px] mx-auto object-cover' src={`https://drive.google.com/thumbnail?id=${cover}`}/>
      
          {/* TEXT */}
          <div className='m-6'>
              <div className='heading text-[20px]'>{title}</div>
              <div className='pt-2 flex flex-row items-center gap-2'>
                  <img src={book} className='h-4 w-4'/> 
                  <p className='text-[#474747] text-[12px]'>4min read</p>
              </div>
              <div className='pt-4 content text-[15px] overflow-hidden text-ellipsis' style={{ display: '-webkit-box', WebkitLineClamp: '3', WebkitBoxOrient: 'vertical' }}>
              {summary}
              </div>
          </div>

          {/* AUTHOR */}
          <div className='absolute bottom-0 left-0 ml-7 mr-7 pb-7 flex flex-row items-center gap-2'>
              <img src={`https://drive.google.com/thumbnail?id=${writerpic}`} alt="Sample Image" className="rounded-full w-7 h-7"></img>
              <div className='content text-[13px]'>{name} &nbsp;| &nbsp;{format(createdAt, 'MMMM d, yyyy')}</div>
          </div>
      </div>
    </Link>
    
  )
}

// border-[1px] border-[#D8EAF6]