import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import logo from '../assets/img/NISB-logo.png';

export default function WriteBlog() {
    const [title, setTitle] = useState('');
    const [summary, setSummary] = useState('');
    const [tags, setTags] = useState([]);
    const [content, setContent] = useState('');
    const [files, setFiles] = useState('');
    const [redirect, setRedirect] = useState(false);

    const modules = {
        toolbar : [
            // [{ 'size': ['small', false, 'large', 'huge'] }],
            [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
            ['bold', 'italic', 'underline', 'strike'],
            ['blockquote', 'code-block'],
            [{ 'script': 'sub'}, { 'script': 'super' }], 
            [{ 'list': 'ordered'}, { 'list': 'bullet' }, { 'list': 'check' }],
            ['link', 'image', 'formula'],
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
    <div className='m-20'>
        <div className='flex flex-row item-center justify-between mb-12'>
            <p className='heading text-[35px]'>Write your blog</p>
            <img src={logo} className='w-9 h-9'/>
        </div>
        <form onSubmit={createNewPost}>
            <input className='ipt' type='text' placeholder='Title' value={title} onChange={ev => setTitle(ev.target.value)}/><br/>
            <input className='ipt' type='text' placeholder='Summary' value={summary} onChange={ev => setSummary(ev.target.value)}/><br/>
            <input className='ipt' type='text' placeholder='Tags' value={tags} onChange={ev => setTags(ev.target.value)}/><br/>
            <input className='ipt' type='file' onChange={ev => setFiles(ev.target.files)}/><br/>
            <ReactQuill theme="snow" modules={modules} value={content} onChange={newValue => setContent(newValue)}/><br/>

            <button className='bg-black text-white px-10 py-1'>Submit</button>
        </form>
    </div>
  )
}
