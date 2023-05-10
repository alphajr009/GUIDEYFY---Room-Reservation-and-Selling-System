const mongoose = require('mongoose');

const paymentsSchema = mongoose.Schema({

    fees: {
        type: String,
        required: false
    },

    funds: {
        type: String,
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