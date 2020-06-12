const User = require('../models/user.model')


const find = async function (params, page, limit) {
    try {
        var users = await User.find(params, page, limit).lean()
        return users;
    } catch (err) {
        throw Error('Error while fetching user')
    }
}

const findOne = async function (params) {
    try {
        var user = await User.findOne(params).lean()
        return user;
    } catch (err) {
        console.log("hi?")
        throw Error('Error while fetching user')
    }
}

const store = async function (data) {
    try {
        var user = await User.create(data).lean()
        return user;
    } catch (err) {
        throw Error('Error while creating user')
    }
}

module.exports = {findOne, find, store };