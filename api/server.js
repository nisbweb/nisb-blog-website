const express = require('express');
const mongoose = require('mongoose');
const app = express();

mongoose.connect('').then(
    () => {console.log('Connected to MongoDB')}
    ).catch(
        err => {
            console.error('Could not connect to MongoDB:', err)
        }
    );

const port = 4000;
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});