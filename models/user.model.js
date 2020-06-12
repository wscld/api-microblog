var mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    username: String,
    name: String,
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true,
    },

    password: {
        type: String,
        required: true,
    }
}, { timestamps: true }, { collection: 'users' });

const User = mongoose.model('User', UserSchema)

module.exports = User;