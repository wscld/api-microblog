const Post = require('../models/post.model');

const find = async function (params, page, limit) {
    try {
        var posts = await Post.find(params, page, limit).lean();
        return posts;
    } catch (err) {
        throw Error("Error while fetching posts");
    };
}

const findOne = async function (params) {
    try {
        var post = await Post.findOne(params).lean();
        return post;
    } catch (err) {
        throw Error("Error while fetching post");
    };
}

const store = async function (data) {
    try {
        var post = await Post.create(data);
        return post;
    } catch (err) {
        throw Error("Error while creating post");
    }
}

module.exports = { find, findOne, store };