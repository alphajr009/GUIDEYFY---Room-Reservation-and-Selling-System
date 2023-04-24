const mongoose = require('mongoose');

const blogSchema = mongoose.Schema({

    title: {
        type: String,
        required: true
    },

    description: {
        type: String,
        required: true
    },

    roomid: {
        type: String,
        required: false
    },
    roomnanme:{
        type: String,
        required: false
    },
    category:{
        type: String,
        required: false
    },
    sellerid :{
        type:String,
        required: false
    }

    
}, {
    timestamps: true,
})

const blogModel = mongoose.model('blogs', blogSchema)

module.exports = blogModel