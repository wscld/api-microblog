var mongoose = require('mongoose')

const PostSchema = new mongoose.Schema({
    author: String,
    title: String,
    subtitle: String,
    content: String,
    link: String
}, { timestamps: true }, { collection: 'posts' });

const Post = mongoose.model('Post', PostSchema)

module.exports = Post;