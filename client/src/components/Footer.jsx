import React from 'react'
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <div className='footer h-[300px] bg-[#F5FAFD] mt-40 pl-40 pr-40 pt-[45px] pb-100 flex justify-between border-t-[1px] border-[#D8EAF6]'>
        <div>
            NISB<br/>
            <div className=''>
                <a href=''>Home</a><br/>
                <a href=''>About</a><br/>
                <a href=''>Events</a><br/>
                <a href=''>Team</a><br/>
            </div>
        </div>

        <div>
            Chapters & Affinity Groups<br/>
            <div className=''>
                <a href=''>Computer Society</a><br/>
                <a href=''>Circuits and Systems Society</a><br/>
                <a href=''>Robotics and Automation Society</a><br/>
                <a href=''>Geoscience and Remote Sensing Society</a><br/>
                <a href=''>Women in Engineering</a><br/>
            </div>
        </div>

        <div>
            Address<br/>
            <div className='content'>
                NIE IEEE Student Branch<br/>
                The National Institute of Engineering<br/>
                Mysuru<br/>
                <div className='mt-3 flex flex-row items-center gap-2'>
                    <a href=''><i className="fa-solid fa-envelope" style={{color: "#000000"}}></i></a>
                    <a href=''><i className="fa-brands fa-instagram" style={{color: "#000000"}}></i></a>
                    <a href=''><i className="fa-brands fa-linkedin" style={{color: "#000000"}}></i></a>
                    <a href=''><i className="fa-brands fa-youtube" style={{color: "#000000"}}></i></a>
                    <a href=''><i className="fa-brands fa-github" style={{color: "#000000"}}></i></a>
                </div>
            </div>
        </div>
    </div>
  )
}
