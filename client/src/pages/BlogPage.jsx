import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

export default function BlogPage() {
  const [blogInfo, setBlogInfo] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetch('http://localhost:4000/get-blog-info/' + id).then(response => {
      response.json().then(blogInfo => {
        setBlogInfo(blogInfo);
        console.log(blogInfo);
      });
    });
  }, [id]);

  if (!blogInfo) return '';

  return (
    <div className="ql-editor" style={{ padding: 0 }}>
      <div dangerouslySetInnerHTML={{__html:blogInfo.content}}/>
    </div>
  );
}
