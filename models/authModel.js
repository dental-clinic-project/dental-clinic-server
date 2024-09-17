const mongoose = require('mongoose');

const authSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, 'Please add an email'],
    unique: true,
  },
  passwordHash: {
    type: String,
    required: [true, 'Please add an email'],
  },
  phone: {
    type: String,
    required: [true, 'Please add an email'],
    unique: true,
  },
  fullName: {
    type: String,
    required: [true, 'Please add an email'],
  },
});

module.exports = mongoose.model('Auth', authSchema);