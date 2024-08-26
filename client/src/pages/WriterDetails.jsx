import React, { useState, useContext, useEffect } from 'react';
import logo from '../assets/img/NISB-logo.png';
import { BlogContext } from '../BlogContext';
import { Navigate, useNavigate } from 'react-router-dom';


export default function WriterDetails() {
    const { blogData, setBlogData } = useContext(BlogContext);

    const [name, setName] = useState(blogData.name || '');
    const [about, setAbout] = useState(blogData.about || '');
    const [email, setEmail] = useState(blogData.email || '');
    const [writerpic, setWriterpic] = useState(null); // Updated to handle File
    const [linksArray, setLinksArray] = useState(blogData.linksArray || []);

    const navigate = useNavigate();


    useEffect(() => {
      console.log("Updated blogData:", blogData);
  }, [blogData]);

    const handleInputChange = (ev) => {
      const value = ev.target.value;
      const array = value.split(',').map(item => item.trim()).filter(item => item !== '');
      setLinksArray(array);
    };

    async function createNewPost(ev){
      ev.preventDefault();

      console.log("entered  createNewPost");
      // Update blogData context
      setBlogData({...blogData, name, about, email, linksArray, writerpic});

      const data = new FormData();
      data.append('title', blogData.title);
      data.append('summary', blogData.summary);
      data.append('cover', blogData.cover);
      data.append('coverPath', blogData.coverPath);
      data.append('content', blogData.content);
      data.append('name', name); // Updated to use the current state
      data.append('about', about);
      data.append('email', email);
      if (writerpic) {
        data.append('writerpic', writerpic[0]); // Append the first file in case of single file
      }
      data.append('linksArray', JSON.stringify(linksArray)); // Convert array to JSON string

      // console.log("FormData:", data);
      for (const [key, value] of data.entries()) {
        console.log(`${key}:`, value);
    }


      const response = await fetch('http://localhost:4000/submit-blog', {
        method: 'POST',
        body: data,
      });

      if(response.ok){
        console.log(response);
        setBlogData(null);
        navigate("/");

      } else {
          console.error('Submission failed:', response.statusText);
      }
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
              <input className='ipt2' type='text' placeholder='Other links(Linkedin, Github, Porfolio)' value={linksArray.join(', ')} onChange={handleInputChange}/><br/>
              <input className='ipt2' type='file' onChange={ev => setWriterpic(ev.target.files)}/><br/>
              <button className='bg-black text-white px-10 py-1 mt-5'>Submit</button>
          </form>
      </div>
    );
}