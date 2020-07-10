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
    },
    picture: {
        type: String,
        required: true
    },
    ideagiven: {
        type: Boolean,
        default: false,
        required: true
    },
    idea: {
        type: String,
        required: false,
        default: " "
    },
    friend1: {
        type: String,
        trim: true,
        lowercase: true,
        required: false,
        default: " "
    },
    friend2: {
        type: String,
        trim: true,
        lowercase: true,
        required: false,
        default: " "
    },
    friend3: {
        type: String,
        trim: true,
        lowercase: true,
        required: false,
        default: " "
    }
}, { timestamps: true });

module.exports = mongoose.model('User', userSchema);