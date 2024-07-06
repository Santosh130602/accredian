const mongoose = require('mongoose');

const referralSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  message: { type: String, required: true },
});

const Referral = mongoose.model('Referral', referralSchema);

module.exports = Referral;
