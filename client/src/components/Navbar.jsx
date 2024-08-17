import React from 'react'
import logo from '../assets/img/NISB-logo.png';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <div className='flex flex-row items-center justify-between pt-7 pl-12 pr-12'>
        <div className='flex flex-row items-center gap-10 '>
            <img src={logo} className='w-9 h-9'/>
            <Link to="/">HOME</Link>
            <Link to="/">All Blogs</Link>
            <Link to="/">Tech</Link>
            <Link to="/">Placements & Higher studies</Link>
        </div>
            <Link to="/">Contribute a Blog</Link>
    </div>
  )
}
