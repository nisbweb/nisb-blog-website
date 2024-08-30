const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const Blog = require('./models/Blog');

const { google } = require('googleapis')
const apikeys = require('./drive-apikey.json')

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




// --------------------------------------------------------------------------------------------------------------------



// try 
// Authorization function
async function authorise() {
    const jwtClient = new google.auth.JWT(
        apikeys.client_email,
        null,
        apikeys.private_key.replace(/\\n/g, '\n'), // Ensure the key is correctly formatted
        ['https://www.googleapis.com/auth/drive.file'] // Adjusted scope
    );

    await jwtClient.authorize();
    return jwtClient;
}

// Upload function
async function uploadfile(filePath) {
    const authClient = await authorise();
    const drive = google.drive({ version: "v3", auth: authClient });

    const fileMetaData = {
        name: path.basename(filePath),
        parents: ['1plBjr31efaEzmTfHNUw6-6lEgUaUWVib'] // folder ID
    };

    const media = {
        mimeType: 'image/png', // file's MIME type
        body: fs.createReadStream(filePath),
    };

    try {
        const response = await drive.files.create({
            resource: fileMetaData,
            media: media,
            fields: 'id',
        });

        // console.log('File uploaded to Drive with ID:', response.data.id);
        // return response.data.id;

        // Set the file's permissions to be publicly accessible
        const fileId = response.data.id;
        await drive.permissions.create({
            fileId: fileId,
            requestBody: {
                role: 'reader',
                type: 'anyone',
            },
        });

        // Generate a sharable link
        const sharableLink = `https://drive.google.com/uc?id=${fileId}`;
        console.log('File uploaded and accessible at:', sharableLink);

        return fileId;
    } catch (err) {
        console.error('Error uploading to Drive:', err);
        throw err;
    }
}

// Multer setup for file upload
const tryUpload = multer({ dest: 'uploads/' });

app.post('/upload', tryUpload.single('img'), async (req, res) => {
    const imgPath = path.join('uploads', req.file.filename);

    try {
        const driveFileId = await uploadfile(imgPath);
        res.json({ driveFileId });

        // Clean up the local file
        fs.unlinkSync(imgPath);
    } catch (err) {
        res.status(500).json({ error: 'Failed to upload file to Google Drive' });
    }
});


// --------------------------------------------------------------------------------------------------------------------








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