const mongoose = require('mongoose');

const userSchema = mongoose.Schema({

    fname: {
        type: String,
        required: true
    },

    lname: {
        type: String,
        required: true
    },

    displayName : {
        type: String,
        required: false 
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
    },

    isAdmin:{
        type: Boolean, default:false
    },
    
    isUser:{
        type: Boolean, default:true
    }

},{
    timestamps: true,
})

const userModel = mongoose.model('users',userSchema)

module.exports = userModel