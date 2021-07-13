const mongoose = require('mongoose');

const Post = mongoose.Schema({
    Name: {
        type: String,
        required: true,
    },
    Post: {
        type: String,
        required: true,
    }
}, { timestamps: true });

module.exports = mongoose.model('Post', Post);