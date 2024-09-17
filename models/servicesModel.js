const mongoose = require('mongoose');

const servicesSchema = new mongoose.Schema({
  service: {
    type: String,
    required: [true, 'Please add a service'],
  },
  description: {
    type: String,
    required: [true, 'Please add a description'],
  },
});

module.exports = mongoose.model('Services', servicesSchema);
