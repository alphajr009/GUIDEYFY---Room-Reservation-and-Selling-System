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


    services: [],

    currentbookings: [],
    
    address:[],
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