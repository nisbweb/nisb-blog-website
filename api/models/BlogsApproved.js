const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const BlogsApprovedSchema = new Schema({
    title: { type:String, required:true },
    summary: { type:String, required:true },
    cover: { type:String, required:true },
    content: { type:String, required:true },
    createdAt: { type: Date, required:true },
    name: { type:String, required:true },
    about: { type:String, required:true },
    email: { type:String, required:true },
    linksArray: { type:Array, required:true },
    writerpic: { type:String, required:true },
    min: { type:Number, required:true },
    keywords: { type:Array, required:true },
});

const BlogsApprovedModel = model('BlogsApproved', BlogsApprovedSchema);

module.exports = BlogsApprovedModel;