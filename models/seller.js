const mongoose = require('mongoose');

const sellerSchema = mongoose.Schema({

    fname: {
        type: String,
        required: true
    },

    lname: {
        type: String,
        required: true
    },
    
    email :{
        type: String, 
        required: true
    },

    address : {
        type: String,
        required: false 
    },
    
    gender:{
        type: String, 
        required: false
    },

    birthday : {
        type: String,
        required: true 
    },

    password:{
        type: String, required: true
    }
},{
    timestamps: true,
})

const sellerModel = mongoose.model('sellers',sellerSchema)

module.exports = sellerModel