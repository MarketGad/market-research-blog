const dotenv = require('dotenv');
dotenv.config();

module.exports = {
    MONGODB_URL: process.env.MONGODB_URL,
    CLOUDINARY_API_KEY: process.env.CLOUDINARY_API_KEY,
    CLOUDINARY_API_SECRET: process.env.CLOUDINARY_API_SECRET
}

