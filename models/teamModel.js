const mongoose = require('mongoose');

const teamSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please add a name'],
  },
  years_of_experience: {
    type: Number,
    required: [true, 'Please add years of experience'],
  },
  quote: {
    type: String,
    required: [true, 'Please add a quote'],
  },
  position: {
    type: String,
    required: [true, 'Please add a position'],
  },
});

module.exports = mongoose.model('Team', teamSchema);