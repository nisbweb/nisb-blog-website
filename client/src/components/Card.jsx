import React from 'react'
import book from '../assets/img/book.png';

export default function Card() {
  return (
    <div className='relative h-[456px] w-[370px] mb-20 bg-[#F5FAFD] border-[1px] border-[#D8EAF6] shadow-md shadow-[#DCE7EF] hover:shadow-xl hover:shadow-[#DCE7EF]'> 
        <img className='h-[160px] w-[370px] mx-auto object-cover' src='https://imageio.forbes.com/specials-images/imageserve/61d52d4e3a76ed81ac034ea8/The-10-Tech-Trends-That-Will-Transform-Our-World/960x0.jpg?height=399&width=711&fit=bounds'/>
    
        {/* TEXT */}
        <div className='m-6'>
            <div className='heading text-[20px]'>How AI & Cybersecurity Threat Detection & Response Tools Work</div>
            <div className='pt-2 flex flex-row items-center gap-2'>
                <img src={book} className='h-4 w-4'/> 
                <p className='text-[#474747] text-[12px]'>4min read</p>
            </div>
            <div className='pt-5 content text-[15px] overflow-hidden text-ellipsis' style={{ display: '-webkit-box', WebkitLineClamp: '4', WebkitBoxOrient: 'vertical' }}>
            The world we live in is rapidly chasing the goal of becoming smarter, faster & better. This is more text to simulate overflow. Hellooooo fgdvf yfhcviyc More text to see how ellipsis works. some more text
            </div>
        </div>

        {/* AUTHOR */}
        <div className='absolute bottom-0 left-0 ml-7 mr-7 pb-7 flex flex-row items-center gap-2'>
            <img src='https://buffer.com/library/content/images/size/w1200/2023/10/free-images.jpg' alt="Sample Image" className="rounded-full w-6 h-6"></img>
            <div className='content text-[13px]'>Haripriya | 31st May 2024</div>
        </div>
    </div>
  )
}

