import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
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

export default mongoose.model('User', userSchema);
