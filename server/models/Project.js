const mongoose = require('mongoose')

const projectSchema = mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Title is required']
    },
    description: {
        type: String,
        required: [true, 'Description is required']
    },
    githubLink: {
        type: String,
        default: 'None'
    },
    liveLink: {
        type: String,
        default: 'None'
    },
    photos: [
        {
            link: {
                type: String,
                default: null
            }
        }
    ]
})

module.exports = mongoose.model('Project', projectSchema);