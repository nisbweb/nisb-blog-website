// const { createContext, useState } = require('react');
import { createContext, useState, useEffect } from 'react';
export const BlogContext = createContext({});

export function BlogContextProvider({children}){
    const [blogData, setBlogData] = useState({});
    // const [blogData, setBlogData] = useState(() => {
    //     const blog = localStorage.getItem('blogData');
    //     return blog ? JSON.parse(blog) : {};
    //   });
    
      useEffect(() => {
        localStorage.setItem('blogData', JSON.stringify(blogData));
      }, [blogData]);

    return (
        <BlogContext.Provider value={{blogData, setBlogData}}>
            {children}
        </BlogContext.Provider>
    );
}
