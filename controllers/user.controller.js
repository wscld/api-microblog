const UserService = require('../services/user.service');
const jwt = require("../utils/jwt");
const hash = require("../utils/hash");

const getUsers = async function (req, res, next) {
    const { reqPage, reqLimit } = req.body;

    var page = reqPage ? reqPage : 1;
    var limit = reqLimit ? reqLimit : 10;
    try {
        var users = await UserService.find({}, page, limit)
        return res.status(200).json({ status: 200, data: users, message: "Success" });
    } catch (err) {
        return res.status(400).json({ status: 400, message: err.message });
    }
}

const getUser = async function (req, res, next) {
    const { username } = req.body;
    if (username) {
        try {
            var user = await UserService.findOne({ username: username });
            return res.status(200).json({ status: 200, data: user, message: "Success" });
        } catch (err) {
            return res.status(400).json({ status: 400, message: err.message });
        }
    }
}

const getUserById = async function (req, res, next) {
    const { id } = req.body;
    if (reqId) {
        try {
            var user = await UserService.findOne({ _id: id });
            return res.status(200).json({ status: 200, data: user, message: "Success" });
        } catch (err) {
            return res.status(400).json({ status: 400, message: err.message });
        }
    }
}

const authUser = async function (req, res, next) {
    const { username, password } = req.body;
    if (username && password) {
        try {
            var user = await UserService.findOne({ username: username });
            if (hash.compare(password,user.password)) {
                user.token = jwt.sign(user);
                return res.status(200).json({ status: 200, data: user, message: "Success" });
            } else {
                return res.status(500).json({ status: 400, message: "auth failed" });
            }
        } catch (err) {
            return res.status(400).json({ status: 400, message: err.message });
        }
    }
}

const createUser = async function (req, res, next) {
    const { username, name, email, password } = req.body;
    const hashed = hash.hash(password);
    if (username && name && email && password) {
        try {
            let user = await UserService.findOne({ username: username, email: email });
            if (!user) {
                user = await UserService.store({ name: name, email: email, username: username, password: hashed });
            }
            user.token = jwt.sign(user);
            return res.status(200).json({ status: 200, data: user, message: "Success" });
        } catch (err) {
            return res.status(400).json({ status: 400, message: err.message });
        }
    }
};

module.exports = { getUsers, getUser, getUserById, authUser, createUser };