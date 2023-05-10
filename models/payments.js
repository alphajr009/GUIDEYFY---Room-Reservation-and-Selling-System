const mongoose = require('mongoose');

const paymentsSchema = mongoose.Schema({

    fees: {
        type: Number,
        required: false
    },

    funds: {
        type: Number,
        required: false
    },

    sellerid :{
        type:String,
        required: true
    }

    
}, {
    timestamps: true,
})

const paymentModel = mongoose.model('payments', paymentsSchema)

module.exports = paymentModel