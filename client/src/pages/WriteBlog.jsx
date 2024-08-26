import React, { useState, useContext, useEffect } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import logo from '../assets/img/NISB-logo.png';
import { BlogContext } from '../BlogContext';

export default function WriteBlog() {
    const { blogData, setBlogData } = useContext(BlogContext);

    const [title, setTitle] = useState(blogData.title || '');
    const [summary, setSummary] = useState(blogData.summary || '');
    // const [keywords, setKeywords] = useState([]);
    const [cover, setCover] = useState(blogData.cover || '');
    const [content, setContent] = useState(blogData.content || '');
    const navigate = useNavigate();
    
    const [coverPath, setCoverPath] = useState(blogData.coverPath || '');



    async function nxtDetails(ev){
        ev.preventDefault();
        setBlogData({...blogData, title, summary, cover, content});

        const response = await fetch('http://localhost:4000/cover-upload',{
            method: 'POST',
            body: cover
        });

            console.log(response.url);
            setCoverPath(response.url);
            setBlogData({...blogData, coverPath});
            
            navigate("/details");


    }


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



  return (
    <div className='mt-20 mb-40 w-3/4 mx-auto'>
        <div className='flex flex-row item-center justify-between mb-12'>
            <p className='heading text-[35px]'>Write your blog</p>
            <img src={logo} className='w-10 h-10'/>
        </div>
        <form onSubmit={nxtDetails}>
            <input className='ipt' type='text' required placeholder='Title' value={title} onChange={ev => setTitle(ev.target.value)}/><br/>
            <input className='ipt' type='text' required placeholder='Summary' value={summary} onChange={ev => setSummary(ev.target.value)}/><br/>
            {/* <input className='ipt' type='text' required placeholder='Keywords' value={keywords} onChange={ev => setKeywords(ev.target.value)}/><br/> */}
            <input className='ipt' type='file' onChange={ev => setCover(ev.target.files)}/><br/>
            <ReactQuill theme="snow" modules={modules} value={content} onChange={newValue => setContent(newValue)}/><br/>
            {/* <input className='ipt' type='text' required placeholder='Content' value={content} onChange={ev => setContent(ev.target.value)}/><br/> */}
            


            <button className='bg-black text-white px-10 py-1 mt-5'>Next</button>
        </form>
    </div>
  )
}
