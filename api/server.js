const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const Blog = require('./models/Blog');

const app = express();
app.use(cors())

const uri = "mongodb+srv://nisb:qKcRVq5VU9uiHeyc@blogsite.wb2gac1.mongodb.net/?retryWrites=true&w=majority&appName=blogsite";

mongoose.connect(uri).then(
    () => {
      console.log('Connected to MongoDB');
    }
    
    ).catch(
        err => {
            console.error('Could not connect to MongoDB:', err)
        }
    );



// TO FETCH BLOGS






// TO SUBMIT BLOG
// to store submitted coverimg
const coverUpload = multer({dest:'cover-uploads/'});
const writerpicUpload = multer({dest:'writerpic-uploads/'});

app.post('/upload-cover', coverUpload.single('cover'), (req, res) => {
    const coverPath = path.join('cover-uploads',req.file.filename);

    // Send back the cover path so it can be used in the next request
    res.json({ coverPath });
});

// to insert data to table
app.post('/submit-blog', writerpicUpload.single('writerpic'), async (req, res) => {
    
    const { title, summary, content, name, about, email, linksArray, coverPath } = req.body;
    const cover_path = req.body.coverPath;
    const writerPicPath = path.join('writerpic-uploads', req.file.filename);
    
    const newBlog = new Blog({
        title,
        summary,
        cover: cover_path, 
        content,
        name,
        about,
        email,
        linksArray: JSON.parse(linksArray),
        writerpic: writerPicPath // File path from this API
    });
    
    try{
        await newBlog.save();
        res.status(200).json({ message: 'Blog post created successfully!' });

        // If the data is saved successfully, delete the uploaded files
        fs.unlinkSync(coverPath); // Deletes the cover file
        fs.unlinkSync(writerPicPath); // Deletes the writerpic file
    
    } catch (err) {
      console.error('Error creating blog post:', err);
      res.status(500).json({ error: 'Failed to create blog post' });
    }


});






const port = 4000;
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});