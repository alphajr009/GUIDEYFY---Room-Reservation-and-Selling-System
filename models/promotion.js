const mongoose = require('mongoose');

const promotionSchema = mongoose.Schema({

    promotionuse: {
        type: String,
        required: true
    },
    
    date :{
        type: String, 
        required: true
    },

    type : {
        type: String,
        required: false 
    },
    
    value:{
        type: String, 
        required: false
    },

    action : {
        type: String,
        required: true 
    }
},{
    timestamps: true,
})

const promotionModel = mongoose.model('promotions',promotionSchema)

module.exports = promotionModel