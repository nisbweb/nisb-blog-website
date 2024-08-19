import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
import logo from '../assets/img/NISB-logo.png';

export default function WriterDetails() {
    const [name, setName] = useState('');
    const [about, setAbout] = useState('');
    const [email, setEmail] = useState('');
    const [links, setLinks] = useState('');

    async function createNewPost(ev){

    }

  return (
    <div className='mt-20 mb-40 w-3/4 mx-auto'>
        <div className='flex flex-row item-center justify-between mb-12'>
            <p className='heading text-[35px]'>Your Details</p>
            <img src={logo} className='w-10 h-10'/>
        </div>
        <form onSubmit={createNewPost}>
            <input className='ipt2' type='text' placeholder='Name' value={name} onChange={ev => setName(ev.target.value)}/><br/>
            <input className='ipt2' type='text' placeholder='About' value={about} onChange={ev => setAbout(ev.target.value)}/><br/>
            <input className='ipt2' type='text' placeholder='Email' value={email} onChange={ev => setEmail(ev.target.value)}/><br/>
            <input className='ipt2' type='text' placeholder='Other links(Linkedin, Github, Porfolio)' value={links} onChange={ev => setLinks(ev.target.value)}/><br/>

            <input className='ipt2' type='file'  onChange={ev => setFiles(ev.target.files)}/><br/>


            <button className='bg-black text-white px-10 py-1 mt-5'>Submit</button>
        </form>
    </div>
  )
}
