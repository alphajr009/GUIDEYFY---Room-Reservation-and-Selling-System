const mongoose = require('mongoose');

const roomSchema = mongoose.Schema({

    title: {
        type: String,
        required: true
    },

    description: {
        type: String,
        required: true
    },

    location: [],

    maxcount: {
        type: Number,
        required: true
    },

    phonenumber: {
        type: Number,
        required: true
    },

    rentperday: {
        type: Number,
        required: true
    },


    imageurls: [],

    services: [],

    currentbookings: [],
    type: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
   
    sellerid: {
        type: String,
        required: false
    }
    
}, {
    timestamps: true,
})

const roomModel = mongoose.model('rooms', roomSchema)

module.exports = roomModel