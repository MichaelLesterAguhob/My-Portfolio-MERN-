const mongoose = require('mongoose')

const postSchema = mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Title is required']
    },
    content: {
        type: String,
        required: [true, 'Content is required']
    },
    projectLink: {
        type: String,
        required: [true, 'Project Link is required']
    },
    photos: [
        {
            path: {
                type: String,
                required: false
            }
        }
    ]
})

module.exports = mongoose.model('Post', postSchema);