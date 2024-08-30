import React from 'react'
import logo from '../assets/img/NISB-logo.png';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

export default function Navbar() {
  return (
    <div className='nav flex flex-row items-center justify-between pt-8 pl-14 pr-14'>
        <div className='flex flex-row items-center gap-10'>
            <img src={logo} className='w-9 h-9'/>
            <a href='https://nisb.in'>HOME</a>
            <NavLink to="/">All Blogs</NavLink>
            <NavLink to="/tech-blogs">Tech</NavLink>
            <NavLink to="/placements-higherstudies">Placements & Higher studies</NavLink>
        </div>
            <NavLink to="/contribute">Contribute a Blog</NavLink>
    </div>
  )
}

// border-b-2 border-black