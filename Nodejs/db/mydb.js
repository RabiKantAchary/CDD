const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const BlogPost = new Schema({
  author: String,
  title: String,
  body: String,
});

module.exports=mongoose.model( 'blog',BlogPost)