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
   
    email: {
        type: String,
        required: true
    },

    stripeemail: {
        type: String,
        required: true
    },

    stripename: {
        type: String,
        required: true
    },

    phonenumber: {
        type: String,
        required: true
    },

    password: {
        type: String, required: true
    },

    isSuspend: {
        type: Boolean,
        default: false
    },

    sellerLevel: {
        type: String,
        default: 'Silver'
    },
    
    displayName : {
        type: String,
        required: false 
    },
 
    address: {
        type: Array,
        required: false
    },
    
    isAdmin:{
        type: Boolean, default:false
    },
    
    isUser:{
        type: Boolean, default:true
    },
    nationality :{
        type: String, 
        required: false
    },
    gender :{
        type: String, 
        required: false
    }
}, {
    timestamps: true,
})

const sellerModel = mongoose.model('sellers', sellerSchema)

module.exports = sellerModel