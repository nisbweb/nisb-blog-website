import React, { useState } from 'react'

export default function TryPage() {
    const [img, setImg] = useState(null);

    async function handle_submit(ev){

        const data = new FormData();
        data.set('img', img[0]);

        ev.preventDefault();
        const response = await fetch('http://localhost:4000/upload',{
            method:'POST',
            body: data
        });
        if(response.ok){
            console.log("uploaded");
            console.log(response.json());
        }
        else{
            console.log("Could not upload");
        }
    }

    const fileId = "1UjbbOFeVO9ABi3Jyltmt5KKrBYD677D0";


  return (
    <div className='p-20'>
        TryPage<br/><br/>
        <input type='file' onChange={ev => setImg(ev.target.files)}/><br/>
        <button className='bg-black px-10 py-2 rounded-md text-white mt-5' onClick={handle_submit}>Submit</button><br/><br/>

        <img src={`https://drive.google.com/thumbnail?id=${fileId}`} alt="Hello"></img>



    </div>
  )
}
