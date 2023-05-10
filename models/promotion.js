const mongoose = require("mongoose");

const promotionSchema = mongoose.Schema({
  promotioncode: {
    type: String,
    required: true,
  },
  attemptUse: {
    type: String,
    required: true,
  },
  maxAmount: {
    type: String,
    required: true,
  },
  fromdate: {
    type: Date,
    required: true,
  },
  todate: {
    type: Date,
    required: true,
  },
}, {
  timestamps: true,
});

const Promotion = mongoose.model("Promotion", promotionSchema);

module.exports = Promotion;
