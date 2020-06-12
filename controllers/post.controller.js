const PostService = require('../models/post.model');

const getPosts = async function (req, res, next) {
    const { reqPage, reqLimit, reqAuthor } = req.body;
    var page = reqPage ? reqPage : 1;
    var limit = reqLimit ? reqLimit : 10;
    var author = reqAuthor ? reqAuthor : "";

    try {
        const posts = await PostService.find({ author: author }, page, limit);
        return res.status(200).json({ status: 200, data: posts, message: "Success" });
    } catch (err) {
        return res.status(400).json({ status: 400, message: e.message });
    }
}

const getPost = async function (req, res, next) {
    const { reqId } = req.body;
    if (reqId) {
        try {
            const post = await PostService.findOne({ _id: reqId });
            return res.status(200).json({ status: 200, data: post, message: "Success" });
        } catch (err) {
            return res.status(400).json({ status: 400, message: err.message });
        }
    }
}

const createPost = async function (req, res, next) {
    const { reqTitle, reqAuthor, reqSubTitle, reqLink, reqContent } = req.body;
    if (reqTitle && reqAuthor && reqSubTitle && reqLink && reqContent) {
        try {
            const post = await PostService.create({ title: reqTitle, author: reqAuthor, subtitle: reqSubTitle, link: reqLink, content: reqContent });
            return res.status(200).json({ status: 200, data: post, message: "Success" });
        } catch (err) {
            return res.status(400).json({ status: 400, message: err.message });
        }

    }
}

module.exports = { getPosts, getPost, createPost };