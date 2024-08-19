import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import logo from '../assets/img/NISB-logo.png';

export default function WriteBlog() {
    const [title, setTitle] = useState('');
    const [summary, setSummary] = useState('');
    const [keywords, setKeywords] = useState([]);
    const [content, setContent] = useState('');
    const [files, setFiles] = useState('');
    const [redirect, setRedirect] = useState(false);
    
    const [name, setName] = useState('');
    const [about, setAbout] = useState('');
    const [email, setEmail] = useState('');
    const [links, setLinks] = useState('');


    const modules = {
        toolbar : [
            // [{ 'size': ['small', false, 'large', 'huge'] }],
            [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
            ['bold', 'italic', 'underline', 'strike'],
            ['blockquote', 'code-block'],
            [{ 'script': 'sub'}, { 'script': 'super' }], 
            [{ 'list': 'ordered'}, { 'list': 'bullet' }, { 'list': 'check' }],
            ['link', 'image'],
        ]
    }

    async function createNewPost(ev){
        const data = new FormData();
        data.set('title', title);
        data.set('summary', summary);
        data.set('content', content);
        data.set('file', files[0]);
         
        ev.preventDefault();
        // console.log(files);
        const response = await fetch('', {
            method: 'POST',
            body: data,
            credentials: 'include'
        })
        if(response.ok){
            setRedirect(true);
        }

    }

    if(redirect){
        return <Navigate to={'/'}/>
    }

  return (
    <div className='mt-20 mb-40 w-3/4 mx-auto'>
        <div className='flex flex-row item-center justify-between mb-12'>
            <p className='heading text-[35px]'>Write your blog</p>
            <img src={logo} className='w-10 h-10'/>
        </div>
        <form onSubmit={createNewPost}>
            <input className='ipt' type='text' required placeholder='Title' value={title} onChange={ev => setTitle(ev.target.value)}/><br/>
            <input className='ipt' type='text' required placeholder='Summary' value={summary} onChange={ev => setSummary(ev.target.value)}/><br/>
            <input className='ipt' type='text' required placeholder='Keywords' value={keywords} onChange={ev => setKeywords(ev.target.value)}/><br/>
            <input className='ipt' type='file' required onChange={ev => setFiles(ev.target.files)}/><br/>
            <ReactQuill theme="snow" modules={modules} value={content} onChange={newValue => setContent(newValue)}/><br/>
            <p className='heading text-[25px]'>Your Details</p><br/>
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
