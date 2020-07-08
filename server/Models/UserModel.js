const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: true,
    },
    email: {
        type: String,
        trim: true,
        required: true,
        lowercase: true,
        unique: true
    },
    picture: {
        type: String,
        required: true
    },
    idea: {
        type: Boolean,
        default: false,
        required: true
    }
}, {timestamps: true });

module.exports = mongoose.model('User', userSchema);