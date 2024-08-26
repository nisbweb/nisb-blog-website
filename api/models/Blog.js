const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const BlogSchema = new Schema({
    title: { type:String, required:true },
    summary: { type:String, required:true },
    cover: { type:String, required:true },
    content: { type:String, required:true },
    createdAt: { type: Date, default: Date.now },
    name: { type:String, required:true },
    about: { type:String, required:true },
    email: { type:String, required:true },
    linksArray: { type:Array, required:true },
    writerpic: { type:String, required:true }
});

const BlogModel = model('Blog', BlogSchema);

module.exports = BlogModel;