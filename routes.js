const express = require('express');
const sessionCheck = require('./middlewares/session.middleware');
const routes = express.Router();

const UserController = require("./controllers/user.controller");
const PostController = require("./controllers/post.controller");


routes.get("/getUser", UserController.getUser);
routes.get("/getUsers", UserController.getUsers);
routes.post("/createUser", UserController.createUser);
routes.post("/authUser", UserController.authUser);

routes.get("/getPosts", PostController.getPosts);
routes.get("/getPost", PostController.getPost);
routes.post("/createPost", sessionCheck, PostController.createPost);

module.exports = routes;